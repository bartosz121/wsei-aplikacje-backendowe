import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

// Convert JSON to Java object (https://dirask.com/posts/Java-convert-object-to-JSON-String-with-Jackson-lib-3D7OrD)
public class ex8 {
    public static void main(String[] args) {
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonInString = "{'name' : 'Bartosz', 'age': 23}";
        Person p2 = objectMapper.readValue(jsonInString, Person.class);
    }
}
