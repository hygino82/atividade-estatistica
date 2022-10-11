package net.hygino.analise.repositories;

import net.hygino.analise.entities.Dado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DadoRepository extends JpaRepository<Dado, Long> {

	@Query("SELECT obj FROM Dado obj")
	List<Dado> buscarTodos();
}
