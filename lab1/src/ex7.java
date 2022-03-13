import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

//Convert Java object to JSON (https://dirask.com/posts/Java-convert-object-to-JSON-String-with-Jackson-lib-3D7OrD)
public class ex7 {
    public static void main(String[] args) {
        ObjectMapper objectMapper = new ObjectMapper();
        Person p1 = new Person("Bartosz", 23);
        String personJson = objectMapper.writeValueAsString(p1);

        System.out.println(personJson);
    }
}
