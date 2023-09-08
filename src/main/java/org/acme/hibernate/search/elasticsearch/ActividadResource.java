package org.acme.hibernate.search.elasticsearch;

//import org.jboss.logging.Logger;

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
import org.acme.hibernate.search.elasticsearch.model.Limpieza;
import org.acme.hibernate.search.elasticsearch.model.TipoDesperfecto;
import org.acme.hibernate.search.elasticsearch.model.TipoLimpieza;
import org.acme.hibernate.search.elasticsearch.model.TipoMantenimiento;
import org.hibernate.search.mapper.orm.session.SearchSession;
import org.jboss.resteasy.reactive.RestForm;
import org.jboss.resteasy.reactive.RestQuery;

// import io.quarkus.logging.Log;
import io.quarkus.runtime.StartupEvent;

@Path("/actividad")
public class ActividadResource {

    @Inject
    SearchSession searchSession;
    //private static final Logger LOG = Logger.getLogger(EquipoResource.class);

    @Transactional
    void onStart(@Observes StartupEvent ev) throws InterruptedException {

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

    // limpieza
    @GET
    @Path("limpieza/buscar")
    @Transactional
    public List<Limpieza> buscarLimpieza() {
        return searchSession.search(Limpieza.class)
                .where(f -> f.matchAll())
                .fetchHits(10);
    }

    @POST
    @Path("limpieza/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarLimpieza(Long id, @RestForm Boolean realizada, @RestForm Long tipoLimpiedaId) {
        Limpieza limpieza = Limpieza.findById(id);
        TipoLimpieza tipoLimpieda = TipoLimpieza.findById(tipoLimpiedaId);

        if (limpieza == null || tipoLimpieda == null) {
            return;
        } else {
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
            limpieza.tipoLimpieza.limpiezas.remove(limpieza);
            limpieza.delete();
        }
    }

    @PUT
    @Path("limpieza")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarLimpieza(@RestForm Boolean realizada, @RestForm Long tipoLimpiedaId) {
        Limpieza limpieza = new Limpieza();

        TipoLimpieza tipoLimpieda = TipoLimpieza.findById(tipoLimpiedaId);

        if (tipoLimpieda == null) {
            return;
        } else {
            limpieza.realizada = realizada;
            limpieza.tipoLimpieza = tipoLimpieda;
            limpieza.persist();
        }
    }

    // actividad
    @GET
    @Path("buscar")
    @Transactional
    public List<Actividad> buscarActividad(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(Actividad.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("ordenTrabajo").matching(pattern))
                .sort(f -> f.field("ordenTrabajo_ordenado"))
                .fetchHits(size.orElse(20));
    }


}