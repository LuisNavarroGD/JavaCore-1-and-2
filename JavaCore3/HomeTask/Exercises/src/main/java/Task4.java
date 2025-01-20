import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Task4 {

    public List<Object> FlatListExercices() {
        List<Integer> list1 = Arrays.asList(1, 2, 3);
        List<Integer> list2 = Arrays.asList(4, 5, 6);
        List<Integer> list3 = Arrays.asList(7, 8, 9);

        List<Integer> FlatList = Stream.of(list1, list2, list3)
                .flatMap(Collection::stream)
                .toList();

        String[][] dataArray = new String[][]{{"a", "b"}, {"c", "d"}, {"e", "f"}, {"g", "h"}};

        List<String> flatList = Arrays.stream(dataArray)
                .flatMap(Arrays::stream)
                .distinct()
                .toList();

        ArrayList<Integer> NumbersList = new ArrayList<>(Arrays.asList(
                1,1,2,3,3,4,5,6,6,6,7
        ));

        NumbersList.stream().collect(Collectors.toMap(
                e -> e,
                e -> 1,
                Integer::sum
        )).forEach((key, value) -> System.out.println(key + " -> " + value
        ));

        System.out.println();

        NumbersList.stream().collect(Collectors.groupingBy(
                e -> e,
                Collectors.counting()
        )).forEach(
                (key, value) -> System.out.println(key + " -> " + value)
        );

        System.out.println();

        Map<Integer, Long> map = NumbersList.stream().collect(Collectors.groupingBy(
                e -> e,
                Collectors.counting()
        ));
        map.forEach((key, value) -> System.out.println(key + " -> " + value));

        return Arrays.asList(FlatList, flatList);
    }

    public static void main(String[] args) {
        Task4 task4 = new Task4();
        System.out.println(task4.FlatListExercices());
    }
}