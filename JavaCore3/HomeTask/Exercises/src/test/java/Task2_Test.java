import org.testng.Assert;
import org.testng.annotations.Test;
import java.util.List;

public class Task2_Test extends Task2 {

    @Test
    public void testArrayConversion(){
        Ejercicios();
        Task2 task2 = new Task2();
        List<Object> results = task2.Ejercicios();

        Integer[] expectedArray = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        Assert.assertEquals(expectedArray, results.get(0));

        List<String> expectedList = List.of("C2", "C1");
        Assert.assertEquals(expectedList, results.get(1));
    }
}
