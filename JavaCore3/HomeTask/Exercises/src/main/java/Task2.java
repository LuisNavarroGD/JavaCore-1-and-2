import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class Task2 {

         public List<Object> Ejercicios () {

            List<Integer> list = new ArrayList<Integer>();
            for (int i = 1; i < 10; i++) {
                list.add(i);
            }

            Integer[] lista = list.toArray(new Integer[0]);

            List<String> list2 = Arrays.asList("a1", "a2", "b1", "c2", "c1");
            List<String> FilteredList =
                    list2.stream().filter(e -> e.startsWith("c"))
                            .map(String::toUpperCase)
                            .sorted(Comparator.reverseOrder())
                            .toList();

            System.out.println(Arrays.toString(lista));

            System.out.println(FilteredList);

            return Arrays.asList(lista, FilteredList);
        }

        public static void main(String[] args) {
            Task2 task2 = new Task2();
            System.out.println(task2.Ejercicios());
        }
}