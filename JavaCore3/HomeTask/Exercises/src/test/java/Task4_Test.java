import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.util.List;

public class Task4_Test {

    private Task4 task4;

    @BeforeMethod
    void setUp() {
    task4 = new Task4();
    }

    @AfterMethod
    void tearDown() {
        task4 = null;
    }

    @Test
    void TestFlatListExercices() {
        List<Object> results = task4.FlatListExercices();

        List<Integer> flatListNumber = (List<Integer>) results.get(0);
        List<String> flatListString = (List<String>) results.get(1);

        Assert.assertEquals(flatListNumber, List.of(1, 2, 3, 4, 5, 6, 7, 8, 9), "La lista de numeros es incorrecta");
        Assert.assertEquals(flatListString, List.of("a", "b", "c", "d", "e", "f", "g", "h"), "La lista de letras es incorrecta");

        Assert.assertEquals(flatListNumber.size(), 9);
        Assert.assertEquals(flatListString.size(), 8);
        Assert.assertEquals(flatListNumber.getFirst(), 1);
    }
}