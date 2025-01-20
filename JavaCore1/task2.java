import java.util.Scanner;

public class task2 {
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingresa una frase: ");
        String frase = scanner.nextLine();

        // Eliminar espacios y convertir a minúsculas
        String fraseSinEspacios = frase.replaceAll("\\s", "").toLowerCase();

        // Método 1: Inversión con un bucle
        System.out.println("La frase al reves es: ");
        String fraseReves = "";
        for (int i = fraseSinEspacios.length() - 1; i >= 0; i--) {
            fraseReves += fraseSinEspacios.charAt(i);
        }
        System.out.println(fraseReves);

        // Método 2: Usando StringBuilder
        System.out.println("\nFrase al reves con 2do metodo: ");
        String reversa = new StringBuilder(fraseSinEspacios).reverse().toString();
        System.out.println(reversa);

        // Método 3: Usando StringBuffer
        System.out.println("Frase al reves con 3er metodo: ");
        StringBuffer buffer = new StringBuffer(fraseSinEspacios);
        System.out.println(buffer.reverse());

        // Comprobación de palíndromo
        if (fraseSinEspacios.equals(fraseReves)) {
            System.out.println("La frase es palindromo");
        } else {
            System.out.println("La frase no es palindromo");
        }

        scanner.close();
    }
}
