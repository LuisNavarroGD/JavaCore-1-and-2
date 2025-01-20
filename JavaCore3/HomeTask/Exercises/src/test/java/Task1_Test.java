import org.assertj.core.api.Assertions;
import org.testng.Assert;
import org.testng.annotations.Test;

public class Task1_Test extends Task1{
    @Test
    public void testEvennumbers(){
        Assert.assertTrue(
                list.stream().allMatch(num -> num % 2 == 0)
        );
    }

    @Test
    public void testListSize(){
        Assert.assertEquals(random.size(), 20,
                "La lista deberia tener 20 elementos");
        Assertions.assertThat(random)
                .as("La lista tiene que tener 20 elementos")
                .size().isEqualTo(20);
    }
}
