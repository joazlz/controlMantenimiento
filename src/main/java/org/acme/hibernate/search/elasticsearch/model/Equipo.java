package org.acme.hibernate.search.elasticsearch.model;

import java.util.List;
import java.util.Objects;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

import org.hibernate.search.engine.backend.types.Sortable;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.FullTextField;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.Indexed;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.IndexedEmbedded;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.KeywordField;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Indexed
public class Equipo extends PanacheEntity {

    @FullTextField(analyzer = "english")
    @KeywordField(name = "equipoNombre_sort", sortable = Sortable.YES, normalizer = "sort")
    public String nombre;

    @FullTextField(analyzer = "english")
    @KeywordField(name = "marca_sort", sortable = Sortable.YES, normalizer = "sort")
    public String marca;
    @FullTextField(analyzer = "english")
    @KeywordField(name = "modelo_sort", sortable = Sortable.YES, normalizer = "sort")
    public String modelo;
    @FullTextField(analyzer = "english")
    @KeywordField(name = "voltaje_sort", sortable = Sortable.YES, normalizer = "sort")
    public String voltaje;
    @FullTextField(analyzer = "english")
    @KeywordField(name = "capacidad_sort", sortable = Sortable.YES, normalizer = "sort")
    public String capacidad;
    @FullTextField(analyzer = "english")
    @KeywordField(name = "capacitor_sort", sortable = Sortable.YES, normalizer = "sort")
    public String capacitor;
    @FullTextField(analyzer = "english")
    @KeywordField(name = "tipoMotor_sort", sortable = Sortable.YES, normalizer = "sort")
    public String tipoMotor;
    @FullTextField(analyzer = "english")
    @KeywordField(name = "capacidadMotor_sort", sortable = Sortable.YES, normalizer = "sort")
    public String capacidadMotor;
    @FullTextField(analyzer = "english")
    @KeywordField(name = "numeroEquipo_sort", sortable = Sortable.YES, normalizer = "sort")
    public String numeroEquipo;
    @FullTextField(analyzer = "english")
    @KeywordField(name = "hp_sort", sortable = Sortable.YES, normalizer = "sort")
    public String hp;
    @FullTextField(analyzer = "english")
    @KeywordField(name = "amperaje_sort", sortable = Sortable.YES, normalizer = "sort")
    public String amperaje;

    @ManyToOne
    @JsonIgnore
    public Area area;
    
    @ManyToOne
    @JsonIgnore
    public TipoEquipo tipoEquipo;

    @OneToMany(mappedBy = "equipo", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @IndexedEmbedded
    public List<Revisado> revisados;

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
