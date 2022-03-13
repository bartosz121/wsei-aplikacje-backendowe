import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

// Napisz program konsolowy za pomocą, którego można wyświetlić plik w konsoli (użyj: FileInputStream, try-with-resources)

public class ex1 {

    public static void main(String[] args) {
        File file = new File("file.txt");
        int length = (int) file.length();
        try(
                FileInputStream stream = new FileInputStream(file);
                InputStreamReader reader = new InputStreamReader(stream, StandardCharsets.UTF_8))
        {
            char[] data = new char[length];
            int readBytes = reader.read(data, 0, length);
            if(readBytes != length){
                throw new IOException("File reading error - wrong length");
            }
            String text = new String(data);
            System.out.println(text);
        } catch (IOException e){
            e.printStackTrace();
        }
    }
}