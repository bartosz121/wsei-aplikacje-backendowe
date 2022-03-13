import java.time.Instant;
import java.time.LocalDateTime;

// Napisz program wypisujacy w konsoli akualny lokalny i globalny czas.

public class ex5 {
    public static void main(String[] args) {
        Instant time = Instant.now();
        LocalDateTime localTime = LocalDateTime.now();

        System.out.println("UTC: " + time);
        System.out.println("Local: " + localTime);
    }
}
