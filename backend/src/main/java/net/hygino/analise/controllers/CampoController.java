package net.hygino.analise.controllers;

import net.hygino.analise.dto.CampoDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.hygino.analise.services.CampoService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/campo")
public class CampoController {

    private final CampoService campoService;

    public CampoController(CampoService campoService) {
        this.campoService = campoService;
    }

    @GetMapping
    public ResponseEntity<List<CampoDTO>> buscarTodos() {
        List<CampoDTO> dtoList = campoService.buscarTodos();

        return ResponseEntity.ok(dtoList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable("id") Long id){
        return campoService.buscarPorId(id);
    }
}
