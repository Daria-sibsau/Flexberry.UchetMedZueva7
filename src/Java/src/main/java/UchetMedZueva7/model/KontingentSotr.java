package UchetMedZueva7.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import UchetMedZueva7.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: КонтингентСотр
 */
@Entity(name = "IISUchetMedZueva7КонтингентСотр")
@Table(schema = "public", name = "КонтингентСотр")
public class KontingentSotr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Подразделение")
    private String подразделение;

    @Column(name = "Мужчины")
    private Integer мужчины;

    @Column(name = "Женщины")
    private Integer женщины;

    @Column(name = "До21Года")
    private Integer до21года;

    @Column(name = "Всего")
    private Integer всего;

    @Column(name = "Периодичность")
    private String периодичность;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "KlassVredFaktor")
    @Convert("KlassVredFaktor")
    @Column(name = "КлассВредФактор", length = 16, unique = true, nullable = false)
    private UUID _klassvredfaktorid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "KlassVredFaktor", insertable = false, updatable = false)
    private KlassVredFaktor klassvredfaktor;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PrikazMZR")
    @Convert("PrikazMZR")
    @Column(name = "ПриказМЗР", length = 16, unique = true, nullable = false)
    private UUID _prikazmzrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PrikazMZR", insertable = false, updatable = false)
    private PrikazMZR prikazmzr;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SpisokNaMedosm")
    @Convert("SpisokNaMedosm")
    @Column(name = "СписокНаМедосм", length = 16, unique = true, nullable = false)
    private UUID _spisoknamedosmid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SpisokNaMedosm", insertable = false, updatable = false)
    private SpisokNaMedosm spisoknamedosm;


    public KontingentSotr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getПодразделение() {
      return подразделение;
    }

    public void setПодразделение(String подразделение) {
      this.подразделение = подразделение;
    }

    public Integer getМужчины() {
      return мужчины;
    }

    public void setМужчины(Integer мужчины) {
      this.мужчины = мужчины;
    }

    public Integer getЖенщины() {
      return женщины;
    }

    public void setЖенщины(Integer женщины) {
      this.женщины = женщины;
    }

    public Integer getДо21Года() {
      return до21года;
    }

    public void setДо21Года(Integer до21года) {
      this.до21года = до21года;
    }

    public Integer getВсего() {
      return всего;
    }

    public void setВсего(Integer всего) {
      this.всего = всего;
    }

    public String getПериодичность() {
      return периодичность;
    }

    public void setПериодичность(String периодичность) {
      this.периодичность = периодичность;
    }


}