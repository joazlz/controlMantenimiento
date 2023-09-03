package org.acme.hibernate.search.elasticsearch;

import org.jboss.logging.Logger;

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
import org.acme.hibernate.search.elasticsearch.model.Bateria;
import org.acme.hibernate.search.elasticsearch.model.CapacidadBTU;
import org.acme.hibernate.search.elasticsearch.model.TipoMotor;
import org.acme.hibernate.search.elasticsearch.model.Estado;
import org.acme.hibernate.search.elasticsearch.model.Limpieza;
import org.acme.hibernate.search.elasticsearch.model.Marca;
import org.acme.hibernate.search.elasticsearch.model.PH;
import org.acme.hibernate.search.elasticsearch.model.Presostato;
import org.acme.hibernate.search.elasticsearch.model.RangoPresion;
import org.acme.hibernate.search.elasticsearch.model.TipoCompresor;
import org.acme.hibernate.search.elasticsearch.model.TipoDesperfecto;
import org.acme.hibernate.search.elasticsearch.model.TipoFiltroDeshidratador;
import org.acme.hibernate.search.elasticsearch.model.TipoGas;
import org.acme.hibernate.search.elasticsearch.model.TipoLimpieza;
//import org.acme.hibernate.search.elasticsearch.model.Desperfecto;
//import org.acme.hibernate.search.elasticsearch.model.Equipo;
//import org.acme.hibernate.search.elasticsearch.model.Material;
//import org.acme.hibernate.search.elasticsearch.model.Revisado;
import org.acme.hibernate.search.elasticsearch.model.TipoEquipo;
import org.acme.hibernate.search.elasticsearch.model.TipoMantenimiento;
//import org.acme.hibernate.search.elasticsearch.model.TipoMotor;
import org.acme.hibernate.search.elasticsearch.model.TipoNotificacion;
//import org.acme.hibernate.search.elasticsearch.model.TipoRefrigerante;
//import org.acme.hibernate.search.elasticsearch.model.TipoUsuario;
import org.hibernate.search.mapper.orm.session.SearchSession;
import org.jboss.resteasy.reactive.RestForm;
import org.jboss.resteasy.reactive.RestQuery;

// import io.quarkus.logging.Log;
import io.quarkus.runtime.StartupEvent;

@Path("/equipo")
public class EquipoResource {

    @Inject
    SearchSession searchSession;
    private static final Logger LOG = Logger.getLogger(EquipoResource.class);

    @Transactional
    void onStart(@Observes StartupEvent ev) throws InterruptedException {
        // only reindex if we imported some content
        if (Area.count() > 0) {
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
        LOG.info(nombre);
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
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    // Bateria
    @PUT
    @Path("bateria")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarBateria(@RestForm String nombre) {
        Bateria bateria = new Bateria();
        bateria.nombre = nombre;
        bateria.persist();
    }

    @POST
    @Path("bateria/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarBateria(Long id, @RestForm String nombre) {
        Bateria bateria = Bateria.findById(id);
        if (bateria == null) {
            return;
        }
        bateria.nombre = nombre;
        bateria.persist();
    }

    @DELETE
    @Path("bateria/{id}")
    @Transactional
    public void eliminarBateria(Long id) {
        Bateria bateria = Bateria.findById(id);
        if (bateria != null) {
            bateria.delete();
        }
    }

    @GET
    @Path("bateria/buscar")
    @Transactional
    public List<Bateria> buscarBaterias(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(Bateria.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    // CapacidadBTU
    @PUT
    @Path("capacidadbtu")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarCapacidadBTU(@RestForm String nombre) {
        CapacidadBTU capacidadBTU = new CapacidadBTU();
        capacidadBTU.nombre = nombre;
        capacidadBTU.persist();
    }

    @POST
    @Path("capacidadbtu/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarCapacidadBTU(Long id, @RestForm String nombre) {
        CapacidadBTU capacidadBTU = CapacidadBTU.findById(id);
        if (capacidadBTU == null) {
            return;
        }
        capacidadBTU.nombre = nombre;
        capacidadBTU.persist();
    }

    @DELETE
    @Path("capacidadbtu/{id}")
    @Transactional
    public void eliminarCapacidadBTU(Long id) {
        CapacidadBTU capacidadBTU = CapacidadBTU.findById(id);
        if (capacidadBTU != null) {
            capacidadBTU.delete();
        }
    }

    @GET
    @Path("capacidadbtu/buscar")
    @Transactional
    public List<CapacidadBTU> buscarCapacidadBTU(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(CapacidadBTU.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    // TipoMotor
    @PUT
    @Path("tipomotor")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarTipoMotor(@RestForm String nombre, @RestForm String capacidad) {
        TipoMotor tipoMotor = new TipoMotor();
        tipoMotor.nombre = nombre;
        tipoMotor.capacidad = capacidad;
        tipoMotor.persist();
    }

    @POST
    @Path("tipomotor/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarTipoMotor(Long id, @RestForm String nombre, @RestForm String capacidad) {
        TipoMotor tipoMotor = TipoMotor.findById(id);
        if (tipoMotor == null) {
            return;
        }
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

    @GET
    @Path("tipomotor/buscar")
    @Transactional
    public List<TipoMotor> buscarTipoMotor(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(TipoMotor.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre", "capacidad").matching(pattern))
                .sort(f -> f.field("nombre_ordenado").then().field("capacidad_ordenado"))
                .fetchHits(size.orElse(20));
    }

    // estado
    @PUT
    @Path("estado")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarEstado(@RestForm String nombre) {
        Estado estado = new Estado();
        estado.nombre = nombre;
        estado.persist();
    }

    @POST
    @Path("estado/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarEstado(Long id, @RestForm String nombre) {
        Estado estado = Estado.findById(id);
        if (estado == null) {
            return;
        }
        estado.nombre = nombre;
        estado.persist();
    }

    @DELETE
    @Path("estado/{id}")
    @Transactional
    public void eliminarEstado(Long id) {
        Estado estado = Estado.findById(id);
        if (estado != null) {
            estado.delete();
        }
    }

    @GET
    @Path("estado/buscar")
    @Transactional
    public List<Estado> buscarEstado(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(Estado.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    // Marca
    @PUT
    @Path("marca")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarMarca(@RestForm String nombre) {
        Marca marca = new Marca();
        marca.nombre = nombre;
        marca.persist();
    }

    @POST
    @Path("marca/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarMarca(Long id, @RestForm String nombre) {
        Marca marca = Marca.findById(id);
        if (marca == null) {
            return;
        }
        marca.nombre = nombre;
        marca.persist();
    }

    @DELETE
    @Path("marca/{id}")
    @Transactional
    public void eliminarMarca(Long id) {
        Marca marca = Marca.findById(id);
        if (marca != null) {
            marca.delete();
        }
    }

    @GET
    @Path("marca/buscar")
    @Transactional
    public List<Marca> buscarMarca(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(Marca.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    // pH
    @PUT
    @Path("ph")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarPH(@RestForm String nombre) {
        PH ph = new PH();
        ph.nombre = nombre;
        ph.persist();
    }

    @POST
    @Path("ph/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarPH(Long id, @RestForm String nombre) {
        PH ph = PH.findById(id);
        if (ph == null) {
            return;
        }
        ph.nombre = nombre;
        ph.persist();
    }

    @DELETE
    @Path("ph/{id}")
    @Transactional
    public void eliminarHP(Long id) {
        PH ph = PH.findById(id);
        if (ph != null) {
            ph.delete();
        }
    }

    @GET
    @Path("ph/buscar")
    @Transactional
    public List<PH> buscarPH(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(PH.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    // Presostato
    @PUT
    @Path("presostato")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarPresostato(@RestForm String nombre) {
        Presostato presostato = new Presostato();
        presostato.nombre = nombre;
        presostato.persist();
    }

    @POST
    @Path("presostato/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarPresostato(Long id, @RestForm String nombre) {
        Presostato presostato = Presostato.findById(id);
        if (presostato == null) {
            return;
        }
        presostato.nombre = nombre;
        presostato.persist();
    }

    @DELETE
    @Path("presostato/{id}")
    @Transactional
    public void eliminarPresostato(Long id) {
        Presostato presostato = Presostato.findById(id);
        if (presostato != null) {
            presostato.delete();
        }
    }

    @GET
    @Path("presostato/buscar")
    @Transactional
    public List<Presostato> buscarPresostato(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(Presostato.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    // TipoCompresor
    @PUT
    @Path("tipocompresor")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarTipoCompresor(@RestForm String nombre) {
        TipoCompresor tipoCompresor = new TipoCompresor();
        tipoCompresor.nombre = nombre;
        tipoCompresor.persist();
    }

    @POST
    @Path("tipocompresor/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarTipoCompresor(Long id, @RestForm String nombre) {
        TipoCompresor tipocompresor = TipoCompresor.findById(id);
        if (tipocompresor == null) {
            return;
        }
        tipocompresor.nombre = nombre;
        tipocompresor.persist();
    }

    @DELETE
    @Path("tipocompresor/{id}")
    @Transactional
    public void eliminarTipoCompresor(Long id) {
        TipoCompresor tipocompresor = TipoCompresor.findById(id);
        if (tipocompresor != null) {
            tipocompresor.delete();
        }
    }

    @GET
    @Path("tipocompresor/buscar")
    @Transactional
    public List<TipoCompresor> buscarTipoCompresor(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(TipoCompresor.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    // TipoDesperfecto
    @PUT
    @Path("tipodesperfecto")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarTipoDesperfecto(@RestForm String nombre) {
        TipoDesperfecto tipoDesperfecto = new TipoDesperfecto();
        tipoDesperfecto.nombre = nombre;
        tipoDesperfecto.persist();
    }

    @POST
    @Path("tipodesperfecto/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarTipoDesperfecto(Long id, @RestForm String nombre) {
        TipoDesperfecto tipoDesperfecto = TipoDesperfecto.findById(id);
        if (tipoDesperfecto == null) {
            return;
        }
        tipoDesperfecto.nombre = nombre;
        tipoDesperfecto.persist();
    }

    @DELETE
    @Path("tipodesperfecto/{id}")
    @Transactional
    public void eliminarTipoDesperfecto(Long id) {
        TipoDesperfecto tipoDesperfecto = TipoDesperfecto.findById(id);
        if (tipoDesperfecto != null) {
            tipoDesperfecto.delete();
        }
    }

    @GET
    @Path("tipodesperfecto/buscar")
    @Transactional
    public List<TipoDesperfecto> buscarTipoDesperfecto(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(TipoDesperfecto.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    // TipoEquipo
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
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    // TipoFiltroDeshidratador
    @PUT
    @Path("tipofiltrodeshidratador")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarTipoFiltroDeshidratador(@RestForm String nombre) {
        TipoFiltroDeshidratador tipoFiltroDeshidratador = new TipoFiltroDeshidratador();
        tipoFiltroDeshidratador.nombre = nombre;
        tipoFiltroDeshidratador.persist();
    }

    @POST
    @Path("tipofiltrodeshidratador/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarTipoFiltroDeshidratador(Long id, @RestForm String nombre) {
        TipoFiltroDeshidratador tipoFiltroDeshidratador = TipoFiltroDeshidratador.findById(id);
        if (tipoFiltroDeshidratador == null) {
            return;
        }
        tipoFiltroDeshidratador.nombre = nombre;
        tipoFiltroDeshidratador.persist();
    }

    @DELETE
    @Path("tipofiltrodeshidratador/{id}")
    @Transactional
    public void eliminarTipoFiltroDeshidratador(Long id) {
        TipoFiltroDeshidratador tipoFiltroDeshidratador = TipoFiltroDeshidratador.findById(id);
        if (tipoFiltroDeshidratador != null) {
            tipoFiltroDeshidratador.delete();
        }
    }

    @GET
    @Path("tipofiltrodeshidratador/buscar")
    @Transactional
    public List<TipoFiltroDeshidratador> buscarTipoFiltroDeshidratador(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(TipoFiltroDeshidratador.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    // TipoGas
    @PUT
    @Path("tipogas")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarTipoGas(@RestForm String nombre) {
        TipoGas tipoGas = new TipoGas();
        tipoGas.nombre = nombre;
        tipoGas.persist();
    }

    @POST
    @Path("tipogas/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarTipoGas(Long id, @RestForm String nombre) {
        TipoGas tipoGas = TipoGas.findById(id);
        if (tipoGas == null) {
            return;
        }
        tipoGas.nombre = nombre;
        tipoGas.persist();
    }

    @DELETE
    @Path("tipogas/{id}")
    @Transactional
    public void eliminarTipoGas(Long id) {
        TipoGas tipoGas = TipoGas.findById(id);
        if (tipoGas != null) {
            tipoGas.delete();
        }
    }

    @GET
    @Path("tipogas/buscar")
    @Transactional
    public List<TipoGas> buscarTipoGas(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(TipoGas.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    // TipoLimpieza
    @PUT
    @Path("tipolimpieza")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarTipoLimpieza(@RestForm String nombre) {
        TipoLimpieza tipoLimpieza = new TipoLimpieza();
        tipoLimpieza.nombre = nombre;
        tipoLimpieza.persist();
    }

    @POST
    @Path("tipolimpieza/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarTipoLimpieza(Long id, @RestForm String nombre) {
        TipoLimpieza tipoLimpieza = TipoLimpieza.findById(id);
        if (tipoLimpieza == null) {
            return;
        }
        tipoLimpieza.nombre = nombre;
        tipoLimpieza.persist();
    }

    @DELETE
    @Path("tipolimpieza/{id}")
    @Transactional
    public void eliminarTipoLimpieza(Long id) {
        TipoLimpieza tipoLimpieza = TipoLimpieza.findById(id);
        if (tipoLimpieza != null) {
            tipoLimpieza.delete();
        }
    }

    @GET
    @Path("tipolimpieza/buscar")
    @Transactional
    public List<TipoLimpieza> buscarTipoLimpieza(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(TipoLimpieza.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    // TipoMantenimiento
    @PUT
    @Path("tipomantenimiento")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarTipoMantenimiento(@RestForm String nombre) {
        TipoMantenimiento tipoMantenimiento = new TipoMantenimiento();
        tipoMantenimiento.nombre = nombre;
        tipoMantenimiento.persist();
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

    @DELETE
    @Path("tipomantenimiento/{id}")
    @Transactional
    public void eliminarTipoMantenimiento(Long id) {
        TipoMantenimiento tipoMantenimiento = TipoMantenimiento.findById(id);
        if (tipoMantenimiento != null) {
            tipoMantenimiento.delete();
        }
    }

    @GET
    @Path("tipomantenimiento/buscar")
    @Transactional
    public List<TipoMantenimiento> buscarTipoMantenimiento(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(TipoMantenimiento.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    // TipoNotificacion
    @PUT
    @Path("tiponotificacion")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarTipoNotificacion(@RestForm String nombre) {
        TipoNotificacion tipoNotificacion = new TipoNotificacion();
        tipoNotificacion.nombre = nombre;
        tipoNotificacion.persist();
    }

    @POST
    @Path("tiponotificacion/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarTipoNotificacion(Long id, @RestForm String nombre) {
        TipoNotificacion tipoNotificacion = TipoNotificacion.findById(id);
        if (tipoNotificacion == null) {
            return;
        }
        tipoNotificacion.nombre = nombre;
        tipoNotificacion.persist();
    }

    @DELETE
    @Path("tiponotificacion/{id}")
    @Transactional
    public void eliminarTipoNotificacion(Long id) {
        TipoNotificacion tipoNotificacion = TipoNotificacion.findById(id);
        if (tipoNotificacion != null) {
            tipoNotificacion.delete();
        }
    }

    @GET
    @Path("tiponotificacion/buscar")
    @Transactional
    public List<TipoNotificacion> buscarTipoNotificacion(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(TipoNotificacion.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_ordenado"))
                .fetchHits(size.orElse(20));
    }

    // RangoPresion
    @GET
    @Path("rangopresion/buscar")
    @Transactional
    public List<RangoPresion> buscarRangoPresion() {
        return searchSession.search(RangoPresion.class)
                .where(f ->   f.matchAll())
                .fetchHits(10);
    }

    @POST
    @Path("rangopresion/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarRangoPresion(Long id, @RestForm Long minimo, @RestForm Long maximo) {
        RangoPresion rangoPresion = RangoPresion.findById(id);
        if (rangoPresion == null) {
            return;
        }
        rangoPresion.minimo = minimo;
        rangoPresion.maximo = maximo;
        rangoPresion.persist();
    }
    @DELETE
    @Path("rangopresion/{id}")
    @Transactional
    public void eliminarRangoPresion(Long id) {
        RangoPresion rangoPresion = RangoPresion.findById(id);
        if (rangoPresion != null) {
            rangoPresion.delete();
        }
    }
    @PUT
    @Path("rangopresion")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarRangoPresion(@RestForm Long minimo,@RestForm Long maximo) {
        RangoPresion rangoPresion = new RangoPresion();
        rangoPresion.minimo = minimo;
        rangoPresion.maximo = maximo;
        rangoPresion.persist();
    }

    // limpieza
    @GET
    @Path("limpieza/buscar")
    @Transactional
    public List<Limpieza> buscarLimpieza() {
        return searchSession.search(Limpieza.class)
                .where(f ->   f.matchAll())
                .fetchHits(10);
    }

    @POST
    @Path("limpieza/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarLimpieza(Long id, @RestForm Boolean realizada, @RestForm Long tipoLimpiedaId) {
        Limpieza limpieza = Limpieza.findById(id);
        TipoLimpieza tipoLimpieda = TipoLimpieza.findById(tipoLimpiedaId);

        if (limpieza == null || tipoLimpieda== null) {
            return;
        }else{
            limpieza.realizada = realizada;
            limpieza.tipoLimpieza = tipoLimpieda;
            limpieza.persist();
        }

    }
    @DELETE
    @Path("limpieza/{id}")
    @Transactional
    public void eliminarLimpieza(Long id) {
        Limpieza limpieza = Limpieza.findById(id);
        if (limpieza != null) {
            limpieza.delete();
        }
    }

    @PUT
    @Path("limpieza")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarLimpieza(@RestForm Boolean realizada,@RestForm Long tipoLimpiedaId) {
        Limpieza limpieza = new Limpieza();

        TipoLimpieza tipoLimpieda = TipoLimpieza.findById(tipoLimpiedaId);

        if (tipoLimpieda== null) {
            return;
        }else{
            limpieza.realizada = realizada;
            limpieza.tipoLimpieza = tipoLimpieda;
            limpieza.persist();
        }
    }

}