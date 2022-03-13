// Zlicz ilość wystąpień wierszy używając HashMap.

import java.util.HashMap;

public class extra3 {
    public static void main(String[] args) {
        String data = "ala ma kota ala ma ala kota ala ma kota raz dwa trzy dwa raz";

        HashMap<String, Integer> counter = new HashMap<String, Integer>();

        for (String s : data.split(" ")) {
            counter.put(s, counter.getOrDefault(s, 0) + 1);
        }

        System.out.println(counter);
    }
}
