package net.hygino.analise.services;

import org.springframework.stereotype.Service;

import net.hygino.analise.repositories.CampoRepository;

@Service
public class CampoService {
    
    private final CampoRepository campoRepository;

    public CampoService(CampoRepository campoRepository) {
        this.campoRepository = campoRepository;
    }
}
