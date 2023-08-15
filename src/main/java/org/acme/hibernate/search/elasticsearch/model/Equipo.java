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

    @FullTextField(analyzer = "ingles")
    @KeywordField(name = "equipoNombre_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String nombre;
    @FullTextField(analyzer = "ingles")
    @KeywordField(name = "marca_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String marca;
    @FullTextField(analyzer = "ingles")
    @KeywordField(name = "modelo_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String modelo;
    @FullTextField(analyzer = "ingles")
    @KeywordField(name = "voltaje_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String voltaje;
    @FullTextField(analyzer = "ingles")
    @KeywordField(name = "capacidad_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String capacidad;
    @FullTextField(analyzer = "ingles")
    @KeywordField(name = "capacitor_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String capacitor;
    @FullTextField(analyzer = "ingles")
    @KeywordField(name = "tipoMotor_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String tipoMotor;
    @FullTextField(analyzer = "ingles")
    @KeywordField(name = "capacidadMotor_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String capacidadMotor;
    @FullTextField(analyzer = "ingles")
    @KeywordField(name = "numeroEquipo_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String numeroEquipo;
    @FullTextField(analyzer = "ingles")
    @KeywordField(name = "hp_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String hp;
    @FullTextField(analyzer = "ingles")
    @KeywordField(name = "amperaje_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
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
