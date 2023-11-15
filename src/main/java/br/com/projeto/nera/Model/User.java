package br.com.projeto.nera.Model;

import jakarta.persistence.*;

//CHECKING IF THIS CLASS IS CONNECTED TO A DATA BASE
@Entity
//REFERENCING THE NAME OF THE TABLE THAT THIS CLASS BELONGS
@Table(name = "usuario")
public class User {
    //USER ID
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario", nullable = false)
    private Integer id_user;
    //USER EMAIL
    @Column(name = "email", length = 50, nullable = false,unique = true)
    private String email_user;
    //USER PASSWORD
    @Column(name = "senha", length = 16, nullable = false)
    private String user_password;

    //CONSTRUCTOR
    public User(){

    }
    //GETTERS
    public Integer getId_user() {
        return id_user;
    }
    public String getEmail_user() {
        return email_user;
    }
    public String getUser_password(){return user_password;}
    //SETTERS
    public void setId_user(Integer id_user) {
        this.id_user = id_user;
    }
    public void setEmail_user(String email_user) {
        this.email_user = email_user;
    }
    public void setUser_password(String user_password){this.user_password = user_password;}
}
