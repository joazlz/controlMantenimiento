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
import org.acme.hibernate.search.elasticsearch.model.TipoNotificacion;
import org.hibernate.search.mapper.orm.session.SearchSession;
import org.jboss.resteasy.reactive.RestForm;
import org.jboss.resteasy.reactive.RestQuery;

// import io.quarkus.logging.Log;
import io.quarkus.runtime.StartupEvent;

@Path("/alerta")
public class AlertaResource {
    @Inject
    SearchSession searchSession;
    
    @Transactional
    void onStart(@Observes StartupEvent ev) throws InterruptedException {
        // only reindex if we imported some content
        if (TipoNotificacion.count() > 0) {
            searchSession.massIndexer()
                    .startAndWait();
        }
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
}
