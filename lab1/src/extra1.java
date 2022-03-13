import java.util.List;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Iterator;

public class extra1 {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();

        list.add("Test1");
        list.add("Test2");
        list.add("Test3");
        list.add("Test4");
        list.add("Test5");

        System.out.println(list);

        Iterator<String> iterator = list.iterator();

        int i = 0;

        while(iterator.hasNext()){
            iterator.next();
            if(i % 2 != 0){
                iterator.remove();
            }
            i++;
        }
        System.out.println(list);
    }
}
