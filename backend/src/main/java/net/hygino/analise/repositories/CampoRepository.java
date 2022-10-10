package net.hygino.analise.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import net.hygino.analise.entities.Campo;

import java.util.List;
import java.util.Optional;

@Repository
public interface CampoRepository extends JpaRepository<Campo, Long> {
    @Query("SELECT obj FROM Campo obj")
    List<Campo> buscarTodos();
    @Query("SELECT obj FROM Campo obj WHERE obj.id = :id")
    Optional<Campo> buscarPorId(Long id);
}
