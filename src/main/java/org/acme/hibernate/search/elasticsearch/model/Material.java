package org.acme.hibernate.search.elasticsearch.model;

import java.util.Objects;

import jakarta.persistence.Entity;

import org.hibernate.search.engine.backend.types.Sortable;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.FullTextField;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.Indexed;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.KeywordField;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Indexed
public class Material extends PanacheEntity {

    @FullTextField(analyzer = "nombre")
    @KeywordField(name = "nombre_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String nombre;

    @FullTextField(analyzer = "nombre")
    @KeywordField(name = "codigosap_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String codigoSap;

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Marca)) {
            return false;
        }

        Marca other = (Marca) o;

        return Objects.equals(id, other.id);
    }

    @Override
    public int hashCode() {
        return 31;
    }
}
