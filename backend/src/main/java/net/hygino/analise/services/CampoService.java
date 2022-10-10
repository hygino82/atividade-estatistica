package net.hygino.analise.services;

import net.hygino.analise.dto.CampoDTO;
import net.hygino.analise.entities.Campo;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import net.hygino.analise.repositories.CampoRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CampoService {

    private final CampoRepository campoRepository;
    private final ModelMapper mapper;

    public CampoService(CampoRepository campoRepository, ModelMapper mapper) {
        this.campoRepository = campoRepository;
        this.mapper = mapper;
    }


    public List<CampoDTO> buscarTodos() {
        List<Campo> list = campoRepository.buscarTodos();

        return list.stream().map(x -> mapper.map(x, CampoDTO.class)).collect(Collectors.toList());
    }

    public ResponseEntity<?> buscarPorId(Long id) {
        Optional<Campo> entity = campoRepository.buscarPorId(id);

        if (entity.isPresent()) {
            return ResponseEntity.ok(mapper.map(entity.get(), CampoDTO.class));
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Id não encontrado");
    }
}
