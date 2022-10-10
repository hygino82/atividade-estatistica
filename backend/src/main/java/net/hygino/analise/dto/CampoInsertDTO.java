package net.hygino.analise.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CampoInsertDTO {
    private Double minValue;
    private Double maxValue;
    private Integer quantity;
}
