package org.acme.hibernate.search.elasticsearch.model;

import java.sql.Date;
import java.util.List;
import java.util.Objects;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

import org.hibernate.search.engine.backend.types.Sortable;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.FullTextField;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.Indexed;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.IndexedEmbedded;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.KeywordField;


import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Indexed
public class Actividad extends PanacheEntity {

    // ot(string)
    @FullTextField(analyzer = "nombre")
    @KeywordField(name = "ordenTrabajo_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String ordenTrabajo;

    // TipoMantenimiento
    @ManyToOne
    public TipoMantenimiento tipoMantenimiento;

    // FechaInicioProgramado (date)
    @Temporal(TemporalType.DATE)
    public Date fechaInicioProgramado;

    // FechaFinProgramado (date)
    @Temporal(TemporalType.DATE)
    public Date fechaFinProgramado;

    // Equipo
    @ManyToOne
    public Equipo equipo;

    // FechaInicioActividad (date)
    @Temporal(TemporalType.DATE)
    public Date fechaInicioActividad;

    // FechaFinActividad (date)
    @Temporal(TemporalType.DATE)
    public Date fechaFinActividad;

    // duracionActividad (hora, minutos)
    @OneToOne
    public Duracion duracion;

    // list < usuarios >

    // list < materias >
    @OneToMany(mappedBy = "actividad", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @IndexedEmbedded
    public List<ActividadMaterial> materiales;

    // estado
    @ManyToOne
    public Estado estado;

    // list< limpieza >
    @OneToMany(mappedBy = "actividad", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @IndexedEmbedded
    public List<Limpieza> limpiezas;

    // ActualizacionEquipo(Equipo)

    
    // list< Desperfecto >
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "actividad_tipo_desperfecto", // Nombre de la tabla intermedia
        joinColumns = @JoinColumn(name = "actividad_id"), // Columna de la tabla Equipo
        inverseJoinColumns = @JoinColumn(name = "desperfecto_id") // Columna de la tabla TipoMotor
    )
    public List<TipoDesperfecto> tiposDesperfecto;

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Actividad)) {
            return false;
        }

        Actividad other = (Actividad) o;

        return Objects.equals(id, other.id);
    }

    @Override
    public int hashCode() {
        return 31;
    }
}
