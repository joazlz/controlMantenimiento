package org.acme.hibernate.search.elasticsearch.model;

import java.util.Objects;

import jakarta.persistence.Entity;


import org.hibernate.search.mapper.pojo.mapping.definition.annotation.FullTextField;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.Indexed;
import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Indexed
public class RangoPresion extends PanacheEntity {

    public Long minimo;

    public Long maximo;

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof RangoPresion)) {
            return false;
        }

        RangoPresion other = (RangoPresion) o;

        return Objects.equals(id, other.id);
    }

    @Override
    public int hashCode() {
        return 31;
    }
}
