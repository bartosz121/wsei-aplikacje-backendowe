
// Napisz program rozbijający plik na osobne linie.
// Wypisz je w konsoli, dodając numery.

public class ex6 {
    public static void main(String[] args) {
        String str = "Hello\nWorld\n123";

        String[] result = str.split("\n");
        int length = result.length;

        for(int i = 0; i < length; i++){
            System.out.println("Line " + i + " = " + result[i]);
        }
    }
}
