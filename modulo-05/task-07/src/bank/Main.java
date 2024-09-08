package bank;

import dataStructure.queue.SimpleQueue;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        SimpleQueue<Customer> bankQueue = new SimpleQueue<>();
        Scanner scanner = new Scanner(System.in);
        String option;
        try{
            while (true){
                showMenu();
                option = scanner.nextLine();
                switch (option){
                    case "1":
                        System.out.println("Insira o nome do cliente: ");
                        String name = scanner.nextLine();
                        bankQueue.enqueue(new Customer(name));
                        System.out.println("Cliente inserido na fila");
                        break;
                    case "2":
                        if(bankQueue.isEmpty()){
                            System.out.println("Não há ninguém esperando na fila!");
                            break;
                        }
                        System.out.println("PRÓXIMO!");
                        bankQueue.dequeue();
                        break;
                    case "3":
                        if(bankQueue.isEmpty()){
                            System.out.println("A fila está vazia!");
                            break;
                        }
                        System.out.println("Fila em ordem de espera");
                        bankQueue.showAllElements();
                        break;
                    case "0":
                        System.out.println("Encerrando");
                        scanner.close();
                        return;
                    default:
                        System.out.println("Opção inválida.");
                }
            }
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    private static void showMenu(){
        System.out.println("Escolha uma das opções do menu");
        System.out.println("1 - Adicionar cliente à fila");
        System.out.println("2 - Chamar cliente ao guichê");
        System.out.println("3 - Ver a fila completa");
        System.out.println("0 - Sair");
    }
}
