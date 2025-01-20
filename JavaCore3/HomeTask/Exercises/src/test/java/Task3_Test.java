import org.testng.Assert;
import org.testng.annotations.Test;

import java.util.List;

public class Task3_Test {

    @Test
    void testProcessMemberNames() {
        Task3 task3 = new Task3();
        task3.processMemberNames();

        System.out.println();
        System.out.println("Task 3 Test Results");
        List<Object> results = task3.processMemberNames();

        List<String> expectedFilteredNames = List.of("amitabh", "abibaba");

        Assert.assertEquals(expectedFilteredNames, results.getFirst());

        Assert.assertFalse((Boolean) results.get(1));
        Assert.assertTrue((Boolean) results.get(2));
        Assert.assertTrue((Boolean) results.get(3));

        Assert.assertEquals(3L, results.get(4));

        Assert.assertEquals("Lokesh", results.get(5));

    }
}
