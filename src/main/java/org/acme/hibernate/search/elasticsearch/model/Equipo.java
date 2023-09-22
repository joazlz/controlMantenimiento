package org.acme.hibernate.search.elasticsearch.model;

import java.util.List;
import java.util.Objects;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
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
    // modelo (string)
    @FullTextField(analyzer = "nombre")
    @KeywordField(name = "modelo_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String modelo;
    // voldataje (string)
    @FullTextField(analyzer = "nombre")
    @KeywordField(name = "voltaje_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String voltaje;
    // amperaje (string)
    @FullTextField(analyzer = "nombre")
    @KeywordField(name = "amperaje_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String amperaje;
    // Flipon (string)
    @FullTextField(analyzer = "nombre")
    @KeywordField(name = "flipon_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String flipon;
    // CableAlimentacion (string)
    @FullTextField(analyzer = "nombre")
    @KeywordField(name = "cableAlimentacion_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String cableAlimentacion;
    // Tranformador (string)
    @FullTextField(analyzer = "nombre")
    @KeywordField(name = "tranformador_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String tranformador;
    // Contactor (string)
    @FullTextField(analyzer = "nombre")
    @KeywordField(name = "contactor_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String contactor;
    // Termostato (string)
    @FullTextField(analyzer = "nombre")
    @KeywordField(name = "termostato_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String termostato;
    // TarjetaElectronica (string)
    @FullTextField(analyzer = "nombre")
    @KeywordField(name = "tarjetaElectronica_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String tarjetaElectronica;
    // Selectro (string)
    @FullTextField(analyzer = "nombre")
    @KeywordField(name = "selectro_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String selectro;
    // Retardor (string)
    @FullTextField(analyzer = "nombre")
    @KeywordField(name = "retardor_ordenado", sortable = Sortable.YES, normalizer = "ordenar")
    public String retardor;

    
    // Area
    @ManyToOne
    public Area area;
    // TipoGas
    @ManyToOne
    @JsonIgnore
    public TipoGas tipoGas;
    // CapacidadBTU
    @ManyToOne
    @JsonIgnore
    public CapacidadBTU capacidadBTU;
    // TipoFiltroDeshidratador
    @ManyToOne
    @JsonIgnore
    public TipoFiltroDeshidratador tipoFiltroDeshidratador;
    // RangoPresionAlta
    @ManyToOne
    @JsonIgnore
    public RangoPresion rangoPresionAlta;
    // RangoPresionBaja
    @ManyToOne
    @JsonIgnore
    public RangoPresion rangoPresionBaja;
    // Marca
    @ManyToOne
    @JsonIgnore
    public Marca marca;
    // PH
    @ManyToOne
    @JsonIgnore
    public PH pH;
    // TipoEquipo
    @ManyToOne
    @JsonIgnore
    public TipoEquipo tipoEquipo;
    // PresostatoAlta
    @ManyToOne
    @JsonIgnore
    public Presostato presostatoAlta;
    // PresostatoBajo
    @ManyToOne
    @JsonIgnore
    public Presostato presostatoBaja;


    // list< TipoMotor >
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "equipo_tipo_motor", // Nombre de la tabla intermedia
        joinColumns = @JoinColumn(name = "equipo_id"), // Columna de la tabla Equipo
        inverseJoinColumns = @JoinColumn(name = "tipomotor_id") // Columna de la tabla TipoMotor
    )
    @JsonIgnore
    public List<TipoMotor> tiposMotor;

    // list< Activiad >
    @OneToMany(mappedBy = "equipo", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @IndexedEmbedded
    @JsonIgnore
    public List<Actividad> actividades;

    // list< TipoCompresor >
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "equipo_tipo_compresor", 
        joinColumns = @JoinColumn(name = "equipo_id"), 
        inverseJoinColumns = @JoinColumn(name = "tipocompresor_id") 
    )
    @JsonIgnore
    public List<TipoCompresor> tiposCompresor;
    // list< Baterias >
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "equipo_bateria", 
        joinColumns = @JoinColumn(name = "equipo_id"), 
        inverseJoinColumns = @JoinColumn(name = "bateria_id") 
    )
    @JsonIgnore
    public List<Bateria> baterias;
    // list< tags >
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "equipo_tag", 
        joinColumns = @JoinColumn(name = "equipo_id"), 
        inverseJoinColumns = @JoinColumn(name = "tag_id") 
    )
    public List<Tag> tags;
    

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Estado)) {
            return false;
        }

        Estado other = (Estado) o;

        return Objects.equals(id, other.id);
    }

    @Override
    public int hashCode() {
        return 31;
    }
}
