import java.util.Scanner;

public class task3 {

    static class Person {
        String name;
        int age;
    }

    class MakingChanges {
        public static void changeIdentities(Person p1, Person p2) {
            String temp_Name = p1.name;
            int temp_Age = p1.age;

            p1.name = p2.name;
            p1.age = p2.age;

            p2.name = temp_Name;
            p2.age = temp_Age;

        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Person p1 = new Person();
        System.out.println("Ingresa nombre de la persona 1: ");
        p1.name = scanner.nextLine();
        System.out.println("Ingresa edad de la persona 1: ");
        p1.age = scanner.nextInt();
      
        scanner.nextLine();

        Person p2 = new Person();
        System.out.println("Ingresa nombre de la persona 2: ");
        p2.name = scanner.nextLine();
        System.out.println("Ingresa edad de la persona 2: ");
        p2.age = scanner.nextInt();
    

        System.out.println("Persona 1 sin los cambios");
        System.out.println("Persona 1: " + p1.name + ", " + p1.age);
        System.out.println("Persona 2: " + p2.name + ", " + p2.age);
    
        MakingChanges.changeIdentities(p1, p2);
    
        System.out.println("\nPersona 2 con los cambios");
        System.out.println("Persona 1: " + p1.name + ", " + p1.age);
        System.out.println("Persona 2: " + p2.name + ", " + p2.age);

        scanner.close();
    }
    
}


