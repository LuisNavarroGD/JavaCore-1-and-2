import java.util.*;
import java.util.Collection;
import java.util.regex.Pattern;

public class Task5 {

    public List<Object> Task5Exercises() {
        Map<String, List<String>> people = new HashMap<>();
        people.put("John", Arrays.asList("555-1123","s","555-3389","a"));
        people.put("Mary", Arrays.asList("555-2243", "z","555-5264"));
        people.put("Steve", Arrays.asList("555-6654", "555-3242", "d"));

        List<String> letters = people.values().stream()
                .flatMap(Collection::stream)
                .filter(e -> Pattern.matches("\\w", e))
                .sorted()
                .toList();

        System.out.println(letters);

        return List.of(letters);
    }

    public static void main(String[] args) {
        Task5 task5 = new Task5();
        task5.Task5Exercises();
    }
}