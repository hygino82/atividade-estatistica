package net.hygino.analise.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CampoDTO {
    private Long id;
    private Double minValue;
    private Double maxValue;
    private Integer quantity;
}
