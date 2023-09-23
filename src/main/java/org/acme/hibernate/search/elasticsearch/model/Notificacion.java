package org.acme.hibernate.search.elasticsearch.model;

import java.util.Objects;


import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;

import org.hibernate.search.mapper.pojo.mapping.definition.annotation.Indexed;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Indexed
public class Notificacion extends PanacheEntity {

    

    //Tiponotificacion
    @ManyToOne
    public TipoNotificacion tipoNotificacion;

    // Actividad
    @ManyToOne
    public Actividad actividad;

    // estado
    @ManyToOne
    public Estado estado;
   
    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Notificacion)) {
            return false;
        }

        Notificacion other = (Notificacion) o;

        return Objects.equals(id, other.id);
    }

    @Override
    public int hashCode() {
        return 31;
    }
}
