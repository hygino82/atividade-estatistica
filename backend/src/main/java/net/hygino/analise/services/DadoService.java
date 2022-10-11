package net.hygino.analise.services;

import net.hygino.analise.dto.DadoDTO;
import net.hygino.analise.dto.DadoInsertDTO;
import net.hygino.analise.entities.Dado;
import net.hygino.analise.repositories.DadoRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DadoService {

    private final DadoRepository repository;
    private final ModelMapper mapper;

    public DadoService(DadoRepository repository, ModelMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public DadoDTO insert(DadoInsertDTO insertDTO) {
        Dado entity = new Dado();
        entity.setValue(insertDTO.getValue());

        entity = repository.save(entity);

        return mapper.map(entity, DadoDTO.class);
    }

    public List<DadoDTO> buscarTodos() {
        List<Dado> list = repository.buscarTodos();
        return list.stream().map(x -> mapper.map(x, DadoDTO.class)).collect(Collectors.toList());
    }
}
