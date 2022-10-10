package net.hygino.analise.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.hygino.analise.entities.Campo;

@Repository
public interface CampoRepository extends JpaRepository<Campo, Long> {

}
