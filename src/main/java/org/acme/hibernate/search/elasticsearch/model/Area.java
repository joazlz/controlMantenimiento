package org.acme.hibernate.search.elasticsearch.model;

import java.util.List;
import java.util.Objects;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;

import org.hibernate.search.engine.backend.types.Sortable;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.FullTextField;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.Indexed;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.IndexedEmbedded;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.KeywordField;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Indexed
public class Area extends PanacheEntity {

    @FullTextField(analyzer = "name")
    @KeywordField(name = "nombre_sort", sortable = Sortable.YES, normalizer = "sort")
    public String nombre;

    @OneToMany(mappedBy = "area", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @IndexedEmbedded
    public List<Equipo> equipos;


    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Area)) {
            return false;
        }

        Area other = (Area) o;

        return Objects.equals(id, other.id);
    }

    @Override
    public int hashCode() {
        return 31;
    }
}
