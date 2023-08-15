package org.acme.hibernate.search.elasticsearch.model;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;

import org.hibernate.search.engine.backend.types.Sortable;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.FullTextField;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.Indexed;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.KeywordField;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Indexed
public class Revisado extends PanacheEntity {

    @FullTextField(analyzer = "ingles")
    public String duracion;

    @FullTextField(analyzer = "ingles")
    @KeywordField(name = "ordenTrabajo_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String ordenTrabajo;
    
    @ManyToOne
    @JsonIgnore
    public Desperfecto desperfecto;

    @ManyToOne
    @JsonIgnore
    public Equipo equipo;

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Equipo)) {
            return false;
        }

        Equipo other = (Equipo) o;

        return Objects.equals(id, other.id);
    }

    @Override
    public int hashCode() {
        return 31;
    }
}
