import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;
import java.util.Scanner;

//Napisz program konsolowy za pomocą, którego można zapisać plik używając danych wprowadzonych w konsoli (użyj: FileOutputStream, try-with-resources)
public class ex2 {

    public static void main(String[] args)
    {
        System.out.print("Input to save in file_ex2.txt: ");
        Scanner scanner = new Scanner(System.in);
        String userInput = scanner.nextLine();

        try(
                FileOutputStream stream = new FileOutputStream("file_ex2.txt");
                OutputStreamWriter writer = new OutputStreamWriter(stream, StandardCharsets.UTF_8)
        )
        {
            writer.write(userInput);
            writer.flush();
        } catch (IOException ex) {
            ex.printStackTrace();
            }
        }
}
