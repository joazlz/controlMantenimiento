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

import org.acme.hibernate.search.elasticsearch.model.Actividad;
import org.acme.hibernate.search.elasticsearch.model.Estado;
import org.acme.hibernate.search.elasticsearch.model.Notificacion;
import org.acme.hibernate.search.elasticsearch.model.TipoNotificacion;
import org.hibernate.search.mapper.orm.session.SearchSession;
import org.jboss.resteasy.reactive.RestForm;
import org.jboss.resteasy.reactive.RestQuery;

import io.quarkus.logging.Log;
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


    @GET
    @Path("buscar")
    @Transactional
    public List<Notificacion> buscarNotificacion(@RestQuery Long pattern,
            @RestQuery Optional<Integer> size) {
        Log.info(pattern);
        return searchSession.search(Notificacion.class)
                .where(f ->  f.id().matching(pattern))
                .fetchHits(size.orElse(20));
    }

    @PUT
    @Path("agregar")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarNotificaion(
            @RestForm Long actividad_id,
            @RestForm Long tiponotificacion_id,
            @RestForm Long estado_id) {
        Notificacion notificacion = new Notificacion();

        Actividad actividad = Actividad.findById(actividad_id);
        TipoNotificacion tipoNotificacion = TipoNotificacion.findById(tiponotificacion_id);
        Estado estado = Estado.findById(estado_id);

        if (!actividad.equals(null) &
                !tiponotificacion_id.equals(null) &
                !estado.equals(null)) {

            notificacion.actividad = actividad;
            notificacion.tipoNotificacion = tipoNotificacion;
            notificacion.estado = estado;
            notificacion.persist();
        }

    }

    @POST
    @Path("actualizar/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarNotificacion(
            Long id,
            // @RestForm Long tipoNotificacion_id,
            @RestForm Long estado_id) {

        Notificacion notificacion = Notificacion.findById(id);

        // TipoNotificacion tipoNotificacion = TipoNotificacion.findById(tipoNotificacion_id);
        Estado estado = Estado.findById(estado_id);
        if (!notificacion.equals(null) &
                // !tipoNotificacion.equals(null) &
                !estado.equals(null)) {

            // notificacion.tipoNotificacion = tipoNotificacion;
            notificacion.estado = estado;
            notificacion.persist();
        }

    }

}
