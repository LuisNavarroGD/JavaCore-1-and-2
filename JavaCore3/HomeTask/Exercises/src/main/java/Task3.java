import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Task3 {

    List<Object> processMemberNames() {
        List<String> memberNames = new ArrayList<>();

        memberNames.add("Amitabh");
        memberNames.add("Shekhar");
        memberNames.add("Aman");
        memberNames.add("Rahul");
        memberNames.add("Shahrukh");
        memberNames.add("Abibaba");
        memberNames.add("Salman");
        memberNames.add("Yana");
        memberNames.add("Lokesh");

        List<String> FilteredNames =
        memberNames.stream()
                .filter(name -> name.startsWith("A") && name.length() > 5)
                .map(String::toLowerCase).toList();

        boolean MatchedNames = memberNames.stream().allMatch(name -> name.contains("S"));
        boolean MatchedName = memberNames.stream().anyMatch(name -> name.contains("S"));
        boolean NoMatchName = memberNames.stream().noneMatch(name -> name.contains("H"));

        Long countedNames = memberNames.stream().filter(names -> names.startsWith("A")).count();
        String FirstMatchedName = memberNames.stream().filter(name -> name.startsWith("L")).findFirst().orElse(null);

        System.out.println(FilteredNames);
        System.out.println(MatchedNames);
        System.out.println(MatchedName);
        System.out.println(NoMatchName);
        System.out.println(countedNames);
        System.out.println(FirstMatchedName);

        return Arrays.asList(FilteredNames, MatchedNames, MatchedName, NoMatchName, countedNames, FirstMatchedName);
    }
}