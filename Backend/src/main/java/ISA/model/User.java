package ISA.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;


@Entity
@Table(name = "onlybuns_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    public String username;
    public String password;

    public User()
    {

    }
}
