package ISA.model;

import jakarta.persistence.*;

@Entity
public class Post {
    @Id
    private int id;
    private String caption;
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private User op;

}
