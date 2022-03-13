// Usun duplikacty z tablity używajac HashSet.

import java.util.Arrays;
import java.util.HashSet;

public class extra2 {
    public static void main(String[] args) {
        String[] arr = new String[]{"a", "b", "c", "d", "a", "b", "a"};

        HashSet<String> set = new HashSet<>(Arrays.asList(arr));

        System.out.println(set);
    }
}
