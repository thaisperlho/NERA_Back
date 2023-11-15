package br.com.projeto.nera.Repository;

import br.com.projeto.nera.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByUsername(String nome_usuario);
    Optional<User> findByUserEmail(String email_usuario);
}
