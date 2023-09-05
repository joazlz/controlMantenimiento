package org.acme.hibernate.search.elasticsearch.model;

import java.util.List;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToMany;

import org.hibernate.search.engine.backend.types.Sortable;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.FullTextField;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.Indexed;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.IndexedEmbedded;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.KeywordField;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Indexed
public class Tag extends PanacheEntity {

    @FullTextField(analyzer = "nombre")
    @KeywordField(name = "nombre_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String nombre;

    @ManyToMany(mappedBy = "tags", fetch = FetchType.EAGER)
    @IndexedEmbedded
    @JsonIgnore
    public List<Equipo> equipo;

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Bateria)) {
            return false;
        }

        Bateria other = (Bateria) o;

        return Objects.equals(id, other.id);
    }

    @Override
    public int hashCode() {
        return 31;
    }
}
