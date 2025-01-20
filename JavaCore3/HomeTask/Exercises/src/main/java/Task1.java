import java.util.List;
import java.util.stream.Stream;

public class Task1 {

    static Stream<Integer> stream = Stream.of(1, 2, 3, 4, 5, 6, 7, 8, 9);
    static List<Integer> random = Stream.generate(()-> (int)(Math.random()*20)).limit(20).toList();
    static List<Integer> list = stream.filter(i -> i % 2 == 0).toList();

    public static void main(String[] args) {
        System.out.println(list);
        System.out.println(random);
    }
}