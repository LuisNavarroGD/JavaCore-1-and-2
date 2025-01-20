import java.util.Scanner;

public class task1 {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Escribe el tamaño del arreglo: ");
        int n = scanner.nextInt();
        System.out.println("Teclea aquí el arreglo separado por espacios: ");
        int[] arreglo = new int[n];
        
        for (int i = 0; i < n; i++) {
            arreglo[i] = scanner.nextInt();
        }

        // Comprobar si el arreglo está ordenado
        boolean Ordenado = true;
        for (int i = 1; i < n; i++) {
            if (arreglo[i] < i-1 || arreglo[i] == i) {
                Ordenado = false; 
                break;
            }
        }

        System.out.println("El arreglo esta ordenado ?  " + Ordenado);
        scanner.close();
    }
}

