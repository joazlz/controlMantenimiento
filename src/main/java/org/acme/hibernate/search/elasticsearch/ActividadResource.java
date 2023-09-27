package org.acme.hibernate.search.elasticsearch;

import java.sql.Date;

import java.util.Calendar;
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
import org.acme.hibernate.search.elasticsearch.model.ActividadMaterial;
import org.acme.hibernate.search.elasticsearch.model.Duracion;
import org.acme.hibernate.search.elasticsearch.model.Equipo;
import org.acme.hibernate.search.elasticsearch.model.Estado;
import org.acme.hibernate.search.elasticsearch.model.Limpieza;
import org.acme.hibernate.search.elasticsearch.model.Material;
import org.acme.hibernate.search.elasticsearch.model.TipoDesperfecto;
import org.acme.hibernate.search.elasticsearch.model.TipoLimpieza;
import org.acme.hibernate.search.elasticsearch.model.TipoMantenimiento;
import org.hibernate.search.mapper.orm.session.SearchSession;
import org.jboss.resteasy.reactive.RestForm;
import org.jboss.resteasy.reactive.RestQuery;

import io.quarkus.logging.Log;
import io.quarkus.runtime.StartupEvent;

@Path("/actividad")
public class ActividadResource {

    @Inject
    SearchSession searchSession;

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
    public void actualizarLimpieza(Long id, @RestForm Boolean realizada, @RestForm Long tipoLimpiezaId) {
        Limpieza limpieza = Limpieza.findById(id);
        TipoLimpieza tipoLimpieza = TipoLimpieza.findById(tipoLimpiezaId);

        if (limpieza == null || tipoLimpieza == null) {
            return;
        } else {
            limpieza.realizada = realizada;
            limpieza.tipoLimpieza = tipoLimpieza;
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
    public void agregarLimpieza(
        @RestForm Boolean realizada, 
        @RestForm Long tipoLimpiezaId,
        @RestForm Long actividadId
        ) {

        Log.info(actividadId);
        Log.info(tipoLimpiezaId);

        Limpieza limpieza = new Limpieza();
        TipoLimpieza tipoLimpieza = TipoLimpieza.findById(tipoLimpiezaId);
        Actividad actividad = Actividad.findById(actividadId);

        if (tipoLimpieza == null&actividad == null) {
            return;
        } else {
            limpieza.realizada = realizada;
            limpieza.tipoLimpieza = tipoLimpieza;
            limpieza.actividad = actividad;
            limpieza.persist();
        }
    }

    // actividad
    @GET
    @Path("buscar")
    @Transactional
    public List<Actividad> buscarActividad(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        Log.info(pattern);
        return searchSession.search(Actividad.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("ordenTrabajo","descripcion","reserva").matching(pattern))
                .sort(f -> f.field("ordenTrabajo_ordenado").then().field("descripcion_ordenado").then().field("reserva_ordenado"))
                .fetchHits(size.orElse(20));
    }

    @PUT
    @Path("agregarpreventiva")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarActividadPreventiva(
        @RestForm String ordenTrabajo,
        @RestForm String descripcion,
        @RestForm Date fechaInicioProgramado,
        @RestForm Date fechaFinProgramado,
        @RestForm Long tipoMantenimiento_id,
        @RestForm Long equipo_id
            ) {
        Actividad actividad = new Actividad();

        TipoMantenimiento tipoMantenimiento = TipoMantenimiento.findById(tipoMantenimiento_id);
        Equipo equipo = Equipo.findById(equipo_id);
        Estado estado = Estado.findById(5);

        if (!tipoMantenimiento.equals(null) &
                !equipo.equals(null) &
                !estado.equals(null)) {
            actividad.descripcion = descripcion;
            actividad.ordenTrabajo = ordenTrabajo;
            actividad.fechaInicioProgramado = fechaInicioProgramado;
            actividad.fechaFinProgramado = fechaFinProgramado;
            actividad.tipoMantenimiento = tipoMantenimiento;
            actividad.equipo = equipo;
            actividad.estado = estado;
            if(!actividad.estado.nombre.equals("finalizado")){
                actividad.persist();}
        }

    }

    @PUT
    @Path("agregarcorrectiva")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarActividadCorrectiva(
        @RestForm String ordenTrabajo,
        @RestForm String descripcion,
        @RestForm String reserva,
        @RestForm Long tipoMantenimiento_id,
        @RestForm Long equipo_id
            ) {

        Actividad actividad = new Actividad();
        TipoMantenimiento tipoMantenimiento = TipoMantenimiento.findById(tipoMantenimiento_id);
        Equipo equipo = Equipo.findById(equipo_id);
        Estado estado = Estado.findById(5);

        if (!tipoMantenimiento.equals(null) &
                !equipo.equals(null) &
                !estado.equals(null)) {
            actividad.descripcion = descripcion;
            actividad.ordenTrabajo = ordenTrabajo;
            actividad.reserva = reserva;
            actividad.tipoMantenimiento = tipoMantenimiento;
            actividad.equipo = equipo;
            actividad.estado = estado;
            if(!actividad.estado.nombre.equals("finalizado")){
                actividad.persist();}
        }

    }

    
    @PUT
    @Path("agregar-jefe")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarActividad(
        @RestForm String ordenTrabajo,
        @RestForm String descripcion,
        @RestForm String reserva,
        @RestForm Date fechaInicioProgramado,
        @RestForm Date fechaFinProgramado,
        @RestForm Long tipoMantenimiento_id,
        @RestForm Long equipo_id) {
        Actividad actividad = new Actividad();
        TipoMantenimiento tipoMantenimiento = TipoMantenimiento.findById(tipoMantenimiento_id);
        Equipo equipo = Equipo.findById(equipo_id);

        if (!tipoMantenimiento.equals(null) &
                !equipo.equals(null) ){
            actividad.descripcion = descripcion;
            actividad.ordenTrabajo = ordenTrabajo;
            actividad.reserva = reserva;
            actividad.fechaInicioProgramado = fechaInicioProgramado;
            actividad.fechaFinProgramado = fechaFinProgramado;

            actividad.tipoMantenimiento = tipoMantenimiento;
            actividad.equipo = equipo;
            actividad.estado = Estado.findById(6);
            if(!actividad.estado.nombre.equals("finalizado")){
                actividad.persist();}
        }

    }

    @POST
    @Path("actualizar/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarActividad(
            Long id,
            @RestForm String descripcion,
            @RestForm String ordenTrabajo,
            @RestForm Long tipoMantenimientoId,
            @RestForm Date fechaIncioProgramado,
            @RestForm Date fechaFinProgramado,
            @RestForm Long equipoId,
            @RestForm Date fechaInicioActividad,
            @RestForm Date fechaFinActividad,
            @RestForm Long estadoId) {

        Actividad actividad = Actividad.findById(id);

        TipoMantenimiento tipoMantenimiento = TipoMantenimiento.findById(tipoMantenimientoId);
        Equipo equipo = Equipo.findById(equipoId);
        Estado estado = Estado.findById(estadoId);

        if (!actividad.equals(null) &
                !tipoMantenimiento.equals(null) &
                !estado.equals(null)) {
            actividad.descripcion = descripcion;
            actividad.ordenTrabajo = ordenTrabajo;
            actividad.fechaFinProgramado = fechaIncioProgramado;
            actividad.fechaFinProgramado = fechaFinProgramado;
            actividad.fechaInicioActividad = fechaInicioActividad;
            actividad.fechaFinActividad = fechaFinActividad;

            actividad.tipoMantenimiento = tipoMantenimiento;
            actividad.equipo = equipo;
            actividad.estado = estado;
            if(!actividad.estado.nombre.equals("finalizado")){
                actividad.persist();}
        }
    }

    @POST
    @Path("actualizar/{id}/estado")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarActividad(
            Long id,
            @RestForm Long estado_id) {
        Actividad actividad = Actividad.findById(id);
        Estado estado = Estado.findById(estado_id);
        if (!actividad.equals(null) & !estado.equals(null)) {
            actividad.estado = estado;
            // Obtén la fecha actual del servidor y conviértela a java.sql.Date
            Calendar calendar = Calendar.getInstance();
            java.util.Date fechaActual = calendar.getTime();
            java.sql.Date fechaSql = new java.sql.Date(fechaActual.getTime());

            actividad.fechaInicioActividad = fechaSql;
            if(!actividad.estado.nombre.equals("finalizado")){
                actividad.persist();}
        }
    }

    @POST
    @Path("actualizar/{id}/tipodesperfecto")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarTipoDesperfectoActividad(Long id,@RestForm Long tipoDesperfecto_id) {
        Actividad actividad = Actividad.findById(id);
        TipoDesperfecto tipoDesperfecto = TipoDesperfecto.findById(tipoDesperfecto_id);
        if (!actividad.equals(null) & !tipoDesperfecto.equals(null)) {
            actividad.tiposDesperfecto.add(tipoDesperfecto);
            if(!actividad.estado.nombre.equals("finalizado")){
                actividad.persist();}
        }
    }

    // actividadmaterial
    @GET
    @Path("actividadmaterial/buscar")
    @Transactional
    public List<ActividadMaterial> buscarActividadMaterial(@RestQuery String pattern,
            @RestQuery Optional<Integer> size) {
        return searchSession.search(ActividadMaterial.class)
                .where(f -> pattern == null || pattern.trim().isEmpty() ? f.matchAll()
                        : f.simpleQueryString()
                                .fields("cantidad").matching(pattern))
                .fetchHits(size.orElse(20));
    }

    @POST
    @Path("actividadmaterial/actulizar/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actulizarActividadMaterial(Long id, @RestForm Long cantidad, @RestForm Long materialId) {

        ActividadMaterial actividadMaterial = ActividadMaterial.findById(id);
        Material material = Material.findById(materialId);
        // Actividad actividad = actividadMaterial.actividad;
        Log.info("cantidad es" + cantidad);
        Log.info("la actividadId es" + materialId);
        if (actividadMaterial != null && material != null) {
            actividadMaterial.cantidad = cantidad;
            actividadMaterial.material = material;
            actividadMaterial.persist();
        }

    }

    @PUT
    @Path("actividadmaterial/agregar")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarActividadMaterial(
        @RestForm Long material_id,
        @RestForm Long actividad_id,
        @RestForm Long cantidad) {
        
        ActividadMaterial actividadMaterial = new ActividadMaterial();
        Actividad actividad = Actividad.findById(actividad_id);
        Material material = Material.findById(material_id);

        if (!material.equals(null)&!actividad.equals(null)) {
            actividadMaterial.cantidad = cantidad;
            actividadMaterial.actividad = actividad;
            actividadMaterial.material = material;
            actividadMaterial.persist();
        }

    }

    // Duracion
    @GET
    @Path("duracion/buscar")
    @Transactional
    public List<Duracion> buscarDuracion() {
        return searchSession.search(Duracion.class)
                .where(f -> f.matchAll())
                .fetchHits(10);
    }

    @PUT
    @Path("duracion")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarDuracion(
            @RestForm Long horas,
            @RestForm Long minutos,
            @RestForm Long actividad_id) {
        Duracion duracion = new Duracion();

        Actividad actividad = Actividad.findById(actividad_id);

        if (actividad == null) {
            return;
        } else {
            duracion.horas = horas;
            duracion.minutos = minutos;
            duracion.actividad = actividad;
            actividad.duracion = duracion;
            Calendar calendar = Calendar.getInstance();
            java.util.Date fechaActual = calendar.getTime();
            java.sql.Date fechaSql = new java.sql.Date(fechaActual.getTime());

            duracion.persist();
            actividad.fechaFinActividad = fechaSql;
            actividad.estado = Estado.findById(2);
            if(!actividad.estado.nombre.equals("finalizado")){
                actividad.persist();}
        }
    }

    @PUT
    @Path("duraciondesistalar")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void agregarDuracionDesistalar(
            @RestForm Long horas,
            @RestForm Long minutos,
            @RestForm Long actividad_id) {
        Duracion duracion = new Duracion();

        Actividad actividad = Actividad.findById(actividad_id);

        if (actividad == null) {
            return;
        } else {
            duracion.horas = horas;
            duracion.minutos = minutos;
            duracion.actividad = actividad;
            actividad.duracion = duracion;
            Calendar calendar = Calendar.getInstance();
            java.util.Date fechaActual = calendar.getTime();
            java.sql.Date fechaSql = new java.sql.Date(fechaActual.getTime());

            duracion.persist();
            actividad.fechaFinActividad = fechaSql;
            actividad.estado = Estado.findById(2);
            if(!actividad.estado.nombre.equals("finalizado")){
                Equipo equipo = actividad.equipo;
                equipo.estado = Estado.findById(8);
                equipo.persist();
                actividad.equipo = equipo;
                actividad.persist();}
        }
    }

    @POST
    @Path("duracion/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void actualizarDuracion(Long id,
            @RestForm Long horas,
            @RestForm Long minutos) {
        Duracion duracion = Duracion.findById(id);
        duracion.horas = horas;
        duracion.minutos = minutos;
        duracion.persist();

        Actividad actividad = Actividad.findById(duracion.actividad.id);
        actividad.duracion = duracion;
        if(!actividad.estado.nombre.equals("finalizado")){
            actividad.persist();}
    }

}