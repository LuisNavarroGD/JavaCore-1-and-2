import org.testng.Assert;
import org.testng.annotations.Test;

import java.util.List;

public class Task5_Test {

    @Test
    public void testTask5() {
        Task5 task5 = new Task5();

        List<Object> result = task5.Task5Exercises();
        List<String> letters = (List<String>) result.get(0);

        List<String> expectedLetters = List.of("a", "d", "s", "z");

        Assert.assertEquals(letters, expectedLetters, "Las letras filtradas no coinciden");
    }
}