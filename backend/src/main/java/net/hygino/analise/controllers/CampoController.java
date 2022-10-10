package net.hygino.analise.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.hygino.analise.services.CampoService;

@RestController
@RequestMapping("/api/v1/campo")
public class CampoController {
    
    private final CampoService campoService;

    public CampoController(CampoService campoService) {
        this.campoService = campoService;
    }
}
