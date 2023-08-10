package org.acme.hibernate.search.elasticsearch;

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
import org.acme.hibernate.search.elasticsearch.model.TipoEquipo;
import org.acme.hibernate.search.elasticsearch.model.TipoMantenimiento;
import org.hibernate.search.mapper.orm.session.SearchSession;
import org.jboss.resteasy.reactive.RestForm;
import org.jboss.resteasy.reactive.RestQuery;

import io.quarkus.runtime.StartupEvent;

@Path("/inventario")
public class InventarioResource {

    @Inject
    SearchSession searchSession;

    @Transactional
    void onStart(@Observes StartupEvent ev) throws InterruptedException {
        // only reindex if we imported some content
        if (Equipo.count() > 0) {
            searchSession.massIndexer()
                    .startAndWait();
        }
    }

    // @PUT
    // @Path("equipo")
    // @Transactional
    // @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    // public void addEquipo(@RestForm String nombre, @RestForm Long areaId) {
    //     Area area = Area.findById(areaId);
    //     if (area == null) {
    //         return;
    //     }

    //     Equipo equipo = new Equipo();
    //     equipo.nombre = nombre;
    //     equipo.area = area;
    //     equipo.persist();

    //     area.equipos.add(equipo);
    //     area.persist();
    // }

    // @DELETE
    // @Path("book/{id}")
    // @Transactional
    // public void deleteBook(Long id) {
    //     Book book = Book.findById(id);
    //     if (book != null) {
    //         book.author.books.remove(book);
    //         book.delete();
    //     }
    // }

    // AREA
    @PUT
    @Path("area")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void addArea(@RestForm String nombre) {
        Area area = new Area();
        area.nombre = nombre;
        area.persist();
    }

    @POST
    @Path("area/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void updateArea(Long id, @RestForm String nombre) {
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
    public void deleteArea(Long id) {
        Area area = Area.findById(id);
        if (area != null) {
            area.delete();
        }
    }

    @GET
    @Path("area/search")
    @Transactional
    public List<Area> searchAreas(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(Area.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre", "equipos.nombre").matching(pattern))
                .sort(f -> f.field("nombre_sort"))
                .fetchHits(size.orElse(20));
    }


    //TIPO EQUIPO
    @PUT
    @Path("tipoequipo")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void addTipoEquipo(@RestForm String nombre) {
        TipoEquipo tipoEquipo = new TipoEquipo();
        tipoEquipo.nombre = nombre;
        tipoEquipo.persist();
    }

    @POST
    @Path("tipoequipo/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void updateTipoEquipo(Long id, @RestForm String nombre) {
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
    public void deleteTipoEquipo(Long id) {
        TipoEquipo tipoEquipo = TipoEquipo.findById(id);
        if (tipoEquipo != null) {
            tipoEquipo.delete();
        }
    }

    @GET
    @Path("tipoequipo/search")
    @Transactional
    public List<TipoEquipo> searchTipoEquipo(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(TipoEquipo.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre", "equipos.nombre").matching(pattern))
                .sort(f -> f.field("nombre_sort"))
                .fetchHits(size.orElse(20));
    }


    @GET
    @Path("equipo/search")
    @Transactional
    public List<Equipo> searchEquipos(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(Equipo.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("equipoNombre_sort").then().field("numeroEquipo_sort"))
                .fetchHits(size.orElse(20));
    }

    @PUT
    @Path("equipo")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void addEquipo(@RestForm String nombre,
    @RestForm String marca,
    @RestForm String modelo,
    @RestForm String voltaje,
    @RestForm String capacidad,
    @RestForm String capacitor,
    @RestForm String tipoMotor,
    @RestForm String capacidadMotor,
    @RestForm String numeroEquipo,
    @RestForm String hp,
    @RestForm String amperaje,
    @RestForm Long areaId,
     @RestForm Long tipoEquipoId ) {
        Area area = Area.findById(areaId);
        if (area == null) {
            return;
        }

        TipoEquipo tipoEquipo = TipoEquipo.findById(tipoEquipoId);
        if (tipoEquipo == null) {
            return;
        }

        Equipo equipo = new Equipo();
        equipo.nombre = nombre;
        equipo.marca = marca;
        equipo.modelo = modelo;
        equipo.voltaje = voltaje;
        equipo.capacidad = capacidad;
        equipo.capacitor = capacitor;
        equipo.tipoMotor = tipoMotor;
        equipo.capacidadMotor = capacidadMotor;
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
    }

    @GET
    @Path("material/search")
    @Transactional
    public List<Material> searchMateriales(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(Material.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_sort"))
                .fetchHits(size.orElse(20));
    }

    @GET
    @Path("desperfecto/search")
    @Transactional
    public List<Desperfecto> searchDesperfectos(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(Desperfecto.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_sort"))
                .fetchHits(size.orElse(20));
    }

    @GET
    @Path("tipomantenimiento/search")
    @Transactional
    public List<TipoMantenimiento> searchTipoMantenimientos(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(TipoMantenimiento.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("nombre").matching(pattern))
                .sort(f -> f.field("nombre_sort"))
                .fetchHits(size.orElse(20));
    }


}
