package net.hygino.analise.controllers;

import net.hygino.analise.dto.DadoDTO;
import net.hygino.analise.dto.DadoInsertDTO;
import net.hygino.analise.services.DadoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/dado")
public class DadoController {

    private final DadoService service;

    public DadoController(DadoService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<DadoDTO> insert(@RequestBody DadoInsertDTO insertDTO) {
        DadoDTO dto = service.insert(insertDTO);

        return ResponseEntity.ok(dto);
    }

    @GetMapping
    public ResponseEntity<List<DadoDTO>> buscarTodos() {
        List<DadoDTO> dtoList = service.buscarTodos();

        return ResponseEntity.ok(dtoList);
    }
}
