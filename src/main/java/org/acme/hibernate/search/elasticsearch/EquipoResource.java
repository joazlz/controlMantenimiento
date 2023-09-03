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
// import org.acme.hibernate.search.elasticsearch.model.Bateria;
//import org.acme.hibernate.search.elasticsearch.model.Desperfecto;
//import org.acme.hibernate.search.elasticsearch.model.Equipo;
//import org.acme.hibernate.search.elasticsearch.model.Material;
//import org.acme.hibernate.search.elasticsearch.model.Revisado;
//import org.acme.hibernate.search.elasticsearch.model.TipoEquipo;
//import org.acme.hibernate.search.elasticsearch.model.TipoMantenimiento;
//import org.acme.hibernate.search.elasticsearch.model.TipoMotor;
//import org.acme.hibernate.search.elasticsearch.model.TipoNotificacion;
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
    // private static final Logger LOG = Logger.getLogger(InventarioResource.class);

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

    //  // Bateria
    //  @PUT
    //  @Path("bateria")
    //  @Transactional
    //  @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    //  public void agregarBateria(@RestForm String nombre) {
    //      Area area = new Area();
    //      area.nombre = nombre;
    //      area.persist();
    //  }
 
    //  @POST
    //  @Path("bateria/{id}")
    //  @Transactional
    //  @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    //  public void actualizarBateria(Long id, @RestForm String nombre) {
    //      Area area = Area.findById(id);
    //      if (area == null) {
    //          return;
    //      }
    //      area.nombre = nombre;
    //      area.persist();
    //  }
 
    //  @DELETE
    //  @Path("bateria/{id}")
    //  @Transactional
    //  public void eliminarBateria(Long id) {
    //      Area area = Area.findById(id);
    //      if (area != null) {
    //          area.delete();
    //      }
    //  }
 
    //  @GET
    //  @Path("bateria/buscar")
    //  @Transactional
    //  public List<Bateria> buscarBaterias(@RestQuery String pattern,
    //          @RestQuery Optional<Integer> size) {
    //      return searchSession.search(Bateria.class)
    //              .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
    //                      : f.simpleQueryString()
    //                              .fields("nombre", "equipos.nombre").matching(pattern))
    //              .sort(f -> f.field("nombre_ordenado"))
    //              .fetchHits(size.orElse(20));
    //  }

    


}