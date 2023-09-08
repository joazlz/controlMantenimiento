package org.acme.hibernate.search.elasticsearch.model;

import java.security.Timestamp;
import java.sql.Date;
import java.sql.Time;
import java.util.List;
import java.util.Objects;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

import org.glassfish.jaxb.core.v2.model.core.ID;
import org.hibernate.search.engine.backend.types.Sortable;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.FullTextField;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.Indexed;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.IndexedEmbedded;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.KeywordField;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Indexed
public class Actividad extends PanacheEntity {

    // ot(string)
    @FullTextField(analyzer = "nombre")
    @KeywordField(name = "ordenTrabajo", sortable = Sortable.YES, normalizer = "ordenar")
    public String ordenTrabajo;

// TipoMantenimiento
@ManyToOne
@JsonIgnore
public TipoMantenimiento tipoMantenimiento;

// FechaInicioProgramado (date)
@Temporal(TemporalType.DATE)
public Date FechaInicioProgramado;

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
// public Time duracionActividad;

// list < usuarios >

// list < materias >
// estado
// @ManyToOne
// @JsonIgnore
// public Estado estado;
// list< limpieza >
// ActualizacionEquipo(Equipo)
// public Equipo actualizacionEquipo ;
// list< Desperfecto >

   

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
