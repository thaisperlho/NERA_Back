package br.com.projeto.nera.Controller;

import br.com.projeto.nera.Model.User;
import br.com.projeto.nera.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cadastrarUsuario")
public class UserController {

    //Automatic Injection
    @Autowired
    private UserRepository userRepository;

    //complete list
    @GetMapping
    public List<User> listUser(){
        return userRepository.findAll();
    }

    // GET user by ID
    @GetMapping("/id_user")
    public Optional<User> searchByID(@PathVariable Integer id_user) {
        var userOptional = userRepository.findById(id_user);
        if(userOptional.isEmpty() || userOptional == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return userOptional;
    }

    //GET user by Name

    public Optional<User> searchByName(@PathVariable String username){
        var userOptional = userRepository.findByUsername(username);
        if(userOptional.isEmpty() || userOptional == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return userOptional;
    }

    //Creating user
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public User createUser(@RequestBody User user){
        User newUser = userRepository.save(user);
        return newUser;
    }

    //Update the user
    @PutMapping("/id_user")
    public User editUserById(@PathVariable Integer id_user, @RequestBody User user){
        var userOptional = userRepository.findById(id_user);
        if (userOptional.isEmpty() || userOptional == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        user.setId_user(id_user);
        return userRepository.save(user);
    }

    //Delete user
    @DeleteMapping("/id_user")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Integer id_user){
        var userOptional = userRepository.findById(id_user);
        if(userOptional.isEmpty() || userOptional == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        userRepository.delete(userOptional.get());
    }
}
