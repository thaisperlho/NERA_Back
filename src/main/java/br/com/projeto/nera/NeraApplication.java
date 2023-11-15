package br.com.projeto.nera;

import org.hibernate.cfg.Environment;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;


@SpringBootApplication(scanBasePackageClasses = {"br.com.projeto.nera"})
public class NeraApplication implements CommandLineRunner{
	public static void main(String[] args) {

		SpringApplication.run(NeraApplication.class, args);
	}

}
