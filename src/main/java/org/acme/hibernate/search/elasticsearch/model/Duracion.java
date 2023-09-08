package org.acme.hibernate.search.elasticsearch.model;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;

import org.hibernate.search.mapper.pojo.mapping.definition.annotation.Indexed;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Indexed
public class Duracion extends PanacheEntity {

    public Long horas;
    public Long minutos;
    @OneToOne(mappedBy="duracion")
    @JsonIgnore
    public Actividad actividad;



    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Duracion)) {
            return false;
        }

        Duracion other = (Duracion) o;

        return Objects.equals(id, other.id);
    }

    @Override
    public int hashCode() {
        return 31;
    }
}
