package org.acme.hibernate.search.elasticsearch;

// import org.jboss.logging.Logger;

import java.util.List;
import java.util.Optional;

import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.MediaType;
import org.acme.hibernate.search.elasticsearch.model.Area;
import org.acme.hibernate.search.elasticsearch.model.Desperfecto;
import org.acme.hibernate.search.elasticsearch.model.Equipo;
import org.acme.hibernate.search.elasticsearch.model.Material;
import org.acme.hibernate.search.elasticsearch.model.Revisado;
import org.acme.hibernate.search.elasticsearch.model.TipoEquipo;
import org.acme.hibernate.search.elasticsearch.model.TipoMantenimiento;
import org.acme.hibernate.search.elasticsearch.model.TipoMotor;
import org.acme.hibernate.search.elasticsearch.model.TipoRefrigerante;
import org.acme.hibernate.search.elasticsearch.model.TipoUsuario;
import org.hibernate.search.mapper.orm.session.SearchSession;
import org.jboss.resteasy.reactive.RestForm;
import org.jboss.resteasy.reactive.RestQuery;

// import io.quarkus.logging.Log;
import io.quarkus.runtime.StartupEvent;

@Path("/inventario")
public class InventarioResource {

    @Inject
    SearchSession searchSession;
    // private static final Logger LOG = Logger.getLogger(InventarioResource.class);

    @Transactional
    void onStart(@Observes StartupEvent ev) throws InterruptedException {
        // only reindex if we imported some content
        if (Equipo.count() > 0) {
            searchSession.massIndexer()
                    .startAndWait();
        }
    }

    // AREA
    @PUT
    @Path("area")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarArea(@RestForm String nombre) {
        Area area = new Area();
        area.nombre = nombre;
        area.persist();
    }

    @POST
    @Path("area/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarArea(Long id, @RestForm String nombre) {
        Area area = Area.findById(id);
        if (area == null) {
            return;
        }
        area.nombre = nombre;
        area.persist();
    }

    @DELETE
    @Path("area/{id}")
    @Transactional
    public void eliminarArea(Long id) {
        Area area = Area.findById(id);
        if (area != null) {
            area.delete();
        }
    }

    @GET
    @Path("area/buscar")
    @Transactional
    public List<Area> buscarAreas(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(Area.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre", "equipos.nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    // DESPERFECTO
    @GET
    @Path("desperfecto/buscar")
    @Transactional
    public List<Desperfecto> buscarDesperfectos(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(Desperfecto.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    @PUT
    @Path("desperfecto")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarDesperfecto(@RestForm String nombre) {
        Desperfecto desperfecto = new Desperfecto();
        desperfecto.nombre = nombre;
        desperfecto.persist();
    }

    @POST
    @Path("desperfecto/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarDesperfecto(Long id, @RestForm String nombre) {
        Desperfecto desperfecto = Desperfecto.findById(id);
        if (desperfecto == null) {
            return;
        }
        desperfecto.nombre = nombre;
        desperfecto.persist();
    }

    @DELETE
    @Path("desperfecto/{id}")
    @Transactional
    public void eliminarDesperfecto(Long id) {
        Desperfecto desperfecto = Desperfecto.findById(id);
        if (desperfecto != null) {
            desperfecto.delete();
        }
    }

    // EQUIPO
    @PUT
    @Path("equipo")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarEquipo(
            @RestForm String nombre,
            @RestForm String marca,
            @RestForm String modelo,
            @RestForm String voltaje,
            @RestForm String capacidad,
            @RestForm String capacitor,
            @RestForm String numeroEquipo,
            @RestForm String hp,
            @RestForm String amperaje,
            @RestForm Long areaId,
            @RestForm Long tipoMotorId,
            @RestForm Long tipoEquipoId) {

        Area area = Area.findById(areaId);
        TipoEquipo tipoEquipo = TipoEquipo.findById(tipoEquipoId);
        TipoMotor tipoMotor = TipoMotor.findById(tipoMotorId);

        if (area != null & tipoEquipo != null) {
            Equipo equipo = new Equipo();
            equipo.nombre = nombre;
            equipo.marca = marca;
            equipo.modelo = modelo;
            equipo.voltaje = voltaje;
            equipo.capacidad = capacidad;
            equipo.capacitor = capacitor;
            equipo.tipoMotor = tipoMotor;
            equipo.numeroEquipo = numeroEquipo;
            equipo.hp = hp;
            equipo.amperaje = amperaje;
            equipo.area = area;
            equipo.tipoEquipo = tipoEquipo;
            equipo.persist();

            area.equipos.add(equipo);
            area.persist();

            tipoEquipo.equipos.add(equipo);
            tipoEquipo.persist();
            
            tipoMotor.equipos.add(equipo);
            tipoMotor.persist();
            
        } else {
            return;
        }
    }

    @GET
    @Path("equipo/buscar")
    @Transactional
    public List<Equipo> buscarEquipos(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(Equipo.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("equipoNombre_ordenado").then().field("numeroEquipo_ordenado"))
                .fetchHits(size.orElse(20));
    }

    @GET
    @Path("equipo/buscar/area/")
    @Transactional
    public Area buscarAreaEquipo(@RestQuery Long idEquipo) {
        Equipo equipo = Equipo.findById(idEquipo);
        return equipo.area;
    }
    @GET
    @Path("equipo/buscar/tipoequipo/")
    @Transactional
    public TipoEquipo buscarTipoEquipoEquipo(@RestQuery Long idEquipo) {
        Equipo equipo = Equipo.findById(idEquipo);
        return equipo.tipoEquipo;
    }
    @GET
    @Path("equipo/buscar/tipomotor/")
    @Transactional
    public TipoMotor buscarTipoMotorEquipo(@RestQuery Long idEquipo) {
        Equipo equipo = Equipo.findById(idEquipo);
        return equipo.tipoMotor;
    }

    @DELETE
    @Path("equipo/{id}")
    @Transactional
    public void eliminarEquipo(Long id) {
        Equipo equipo = Equipo.findById(id);
        if (equipo != null) {
            for (int i = 0; i < equipo.revisados.size(); i++) {
                deleteRevisado(equipo.revisados.get(i).id);
            }
            equipo.tipoEquipo.equipos.remove(equipo);
            equipo.tipoMotor.equipos.remove(equipo);
            equipo.area.equipos.remove(equipo);
            equipo.delete();
        }
    }
    @POST
    @Path("equipo/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarEquipo(
            Long id,
            @RestForm String nombre,
            @RestForm String marca,
            @RestForm String modelo,
            @RestForm String voltaje,
            @RestForm String capacidad,
            @RestForm String capacitor,
            @RestForm String numeroEquipo,
            @RestForm String hp,
            @RestForm String amperaje,
            @RestForm Long areaId,
            @RestForm Long tipoMotorId,
            @RestForm Long tipoEquipoId) {

        Area area = Area.findById(areaId);
        TipoEquipo tipoEquipo = TipoEquipo.findById(tipoEquipoId);
        TipoMotor tipoMotor = TipoMotor.findById(tipoMotorId);
        Equipo equipo = Equipo.findById(id);
        if (area != null 
        & tipoEquipo != null 
        & tipoMotor != null 
        & equipo!=null) {
            equipo.nombre = nombre;
            equipo.marca = marca;
            equipo.modelo = modelo;
            equipo.voltaje = voltaje;
            equipo.capacidad = capacidad;
            equipo.capacitor = capacitor;
            equipo.tipoMotor = tipoMotor;
            equipo.numeroEquipo = numeroEquipo;
            equipo.hp = hp;
            equipo.amperaje = amperaje;
            equipo.area = area;
            equipo.tipoEquipo = tipoEquipo;
            equipo.persist();

            area.equipos.add(equipo);
            area.persist();

            tipoEquipo.equipos.add(equipo);
            tipoEquipo.persist();

            tipoMotor.equipos.add(equipo);
            tipoMotor.persist();
        } else {
            return;
        }
    }


    // MATERIAL
    @GET
    @Path("material/buscar")
    @Transactional
    public List<Material> buscarMateriales(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(Material.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    @GET
    @Path("material/buscarTipoRefrigerante")
    @Transactional
    public TipoRefrigerante buscarTipoRefrigeranteMaterial(@RestQuery Long idMaterial) {
        Material material = Material.findById(idMaterial);
        TipoRefrigerante tipoRefrigerante = TipoRefrigerante.findById(material.tipoRefrigerante.id);
        return tipoRefrigerante;
    }

    @PUT
    @Path("material")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarMaterial(
            @RestForm String nombre,
            @RestForm String cantidad,
            @RestForm Long idTipoRefrigerante) {

        TipoRefrigerante tipoRefrigerante = TipoRefrigerante.findById(idTipoRefrigerante);
        if (tipoRefrigerante == null) {
            return;
        } else {
            Material material = new Material();
            material.nombre = nombre;
            material.cantidad = cantidad;
            material.tipoRefrigerante = tipoRefrigerante;
            material.persist();
        }
    }

    @POST
    @Path("material/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarMaterial(
            Long id,
            @RestForm String nombre,
            @RestForm String cantidad,
            @RestForm Long idTipoRefrigerante) {

        Material material = Material.findById(id);
        if (material == null) {
            return;
        }
        TipoRefrigerante tipoRefrigerante = TipoRefrigerante.findById(idTipoRefrigerante);
        if (tipoRefrigerante == null) {
            return;
        }

        material.nombre = nombre;
        material.cantidad = cantidad;
        material.tipoRefrigerante = tipoRefrigerante;
        material.persist();
    }

    @DELETE
    @Path("material/{id}")
    @Transactional
    public void eliminarMaterial(Long id) {
        Material material = Material.findById(id);
        if (material != null) {
            material.delete();
        }
    }

    // REVISADO
    @PUT
    @Path("revisado")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void addRevisado(
            @RestForm String duracion,
            @RestForm String ordenTrabajo,
            @RestForm Long desperfectoId,
            @RestForm Long equipoId) {
        Desperfecto desperfecto = Desperfecto.findById(desperfectoId);
        if (desperfecto == null) {
            return;
        }

        Equipo equipo = Equipo.findById(equipoId);
        if (equipo == null) {
            return;
        }

        Revisado revisado = new Revisado();
        revisado.duracion = duracion;
        revisado.ordenTrabajo = ordenTrabajo;
        revisado.desperfecto = desperfecto;
        revisado.equipo = equipo;
        revisado.persist(); // Guarda la base de datos pesist//

        desperfecto.revisados.add(revisado);
        desperfecto.persist();

        equipo.revisados.add(revisado);
        equipo.persist();

    }

    @POST
    @Path("revisado/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void updateRevisado(
            @RestForm Long id,
            @RestForm String duracion,
            @RestForm String ordenTrabajo,
            @RestForm Long desperfectoId,
            @RestForm Long equipoId) {
        Desperfecto desperfecto = Desperfecto.findById(desperfectoId);
        if (desperfecto == null) {
            return;
        }
        Equipo equipo = Equipo.findById(equipoId);
        if (equipo == null) {
            return;
        }
        Revisado revisado = Revisado.findById(id);
        if (revisado == null) {
            return;
        }

        revisado.id = id;
        revisado.duracion = duracion;
        revisado.ordenTrabajo = ordenTrabajo;
        revisado.desperfecto = desperfecto;
        revisado.equipo = equipo;
        revisado.persist();
    }

    @DELETE
    @Path("revisado/{id}")
    @Transactional
    public void deleteRevisado(Long id) {
        Revisado revisado = Revisado.findById(id);
        if (revisado != null) {
            revisado.desperfecto.revisados.remove(revisado);
            revisado.equipo.revisados.remove(revisado);
            revisado.delete();
        }
    }

    // TIPO EQUIPO
    @PUT
    @Path("tipoequipo")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarTipoEquipo(@RestForm String nombre) {
        TipoEquipo tipoEquipo = new TipoEquipo();
        tipoEquipo.nombre = nombre;
        tipoEquipo.persist();
    }

    @POST
    @Path("tipoequipo/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarTipoEquipo(Long id, @RestForm String nombre) {
        TipoEquipo tipoEquipo = TipoEquipo.findById(id);
        if (tipoEquipo == null) {
            return;
        }
        tipoEquipo.nombre = nombre;
        tipoEquipo.persist();
    }

    @DELETE
    @Path("tipoequipo/{id}")
    @Transactional
    public void eliminarTipoEquipo(Long id) {
        TipoEquipo tipoEquipo = TipoEquipo.findById(id);
        if (tipoEquipo != null) {
            tipoEquipo.delete();
        }
    }

    @GET
    @Path("tipoequipo/buscar")
    @Transactional
    public List<TipoEquipo> buscarTipoEquipo(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(TipoEquipo.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre", "equipos.nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    // TIPOMANTENIMIENTO
    @GET
    @Path("tipomantenimiento/buscar")
    @Transactional
    public List<TipoMantenimiento> buscarTipoMantenimientos(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(TipoMantenimiento.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    @PUT
    @Path("tipomantenimiento")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarTipoMantenimiento(@RestForm String nombre) {
        TipoMantenimiento tipoMantenimiento = new TipoMantenimiento();
        tipoMantenimiento.nombre = nombre;
        tipoMantenimiento.persist();
    }

    @DELETE
    @Path("tipomantenimiento/{id}")
    @Transactional
    public void eliminarTipoMantenimiento(Long id) {
        TipoMantenimiento tipoMantenimiento = TipoMantenimiento.findById(id);
        if (tipoMantenimiento != null) {
            tipoMantenimiento.delete();
        }
    }

    @POST
    @Path("tipomantenimiento/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarTipoMantenimiento(Long id, @RestForm String nombre) {
        TipoMantenimiento tipoMantenimiento = TipoMantenimiento.findById(id);
        if (tipoMantenimiento == null) {
            return;
        }
        tipoMantenimiento.nombre = nombre;
        tipoMantenimiento.persist();
    }

    // TIPO MOTOR
    @GET
    @Path("tipomotor/buscar")
    @Transactional
    public List<TipoMotor> buscarTipoMotor(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(TipoMotor.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    @PUT
    @Path("tipomotor")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarTipoMotor(
            @RestForm String nombre,
            @RestForm String capacidad) {

        TipoMotor tipoMotor = new TipoMotor();
        tipoMotor.nombre = nombre;
        tipoMotor.capacidad = capacidad;
        tipoMotor.persist();
    }

    @DELETE
    @Path("tipomotor/{id}")
    @Transactional
    public void eliminarTipoMotor(Long id) {
        TipoMotor tipoMotor = TipoMotor.findById(id);
        if (tipoMotor != null) {
            tipoMotor.delete();
        }
    }

    @POST
    @Path("tipomotor/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarTipoMotor(
            Long id,
            @RestForm String nombre,
            @RestForm String capacidad) {
        TipoMotor tipoMotor = TipoMotor.findById(id);
        if (tipoMotor == null) {
            return;
        }
        tipoMotor.nombre = nombre;
        tipoMotor.capacidad = capacidad;
        tipoMotor.persist();
    }

    // TIPOREFRIGERANTE
    @GET
    @Path("tiporefrigerante/buscar")
    @Transactional
    public List<TipoRefrigerante> buscarTipoRefrigerante(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(TipoRefrigerante.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    @PUT
    @Path("tiporefrigerante")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarTipoRefrigerante(@RestForm String nombre) {
        TipoRefrigerante tiporefrigerante = new TipoRefrigerante();
        tiporefrigerante.nombre = nombre;
        tiporefrigerante.persist();
    }

    @DELETE
    @Path("tiporefrigerante/{id}")
    @Transactional
    public void eliminarTipoRefriferante(Long id) {
        TipoRefrigerante tipoRefrigerante = TipoRefrigerante.findById(id);
        if (tipoRefrigerante != null) {
            tipoRefrigerante.delete();
        }
    }

    @POST
    @Path("tiporefrigerante/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarTipoRefrigerante(Long id, @RestForm String nombre) {
        TipoRefrigerante tipoRefrigerante = TipoRefrigerante.findById(id);
        if (tipoRefrigerante == null) {
            return;
        }
        tipoRefrigerante.nombre = nombre;
        tipoRefrigerante.persist();
    }

    // TIPO USUARIO
    @GET
    @Path("tipousuario/buscar")
    @Transactional
    public List<TipoUsuario> buscarTipoUsuario(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(TipoUsuario.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    @PUT
    @Path("tipousuario")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarTipoUsuario(@RestForm String nombre) {
        TipoUsuario tipoUsuario = new TipoUsuario();
        tipoUsuario.nombre = nombre;
        tipoUsuario.persist();
    }

    @DELETE
    @Path("tipousuario/{id}")
    @Transactional
    public void eliminarTipoUsuario(Long id) {
        TipoUsuario tipoUsuario = TipoUsuario.findById(id);
        if (tipoUsuario != null) {
            tipoUsuario.delete();
        }
    }

    @POST
    @Path("tipousuario/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarTipoUsuario(Long id, @RestForm String nombre) {
        TipoUsuario tipoUsuario = TipoUsuario.findById(id);
        if (tipoUsuario == null) {
            return;
        }
        tipoUsuario.nombre = nombre;
        tipoUsuario.persist();
    }

}
