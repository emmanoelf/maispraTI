package undo;

import dataStructure.lists.SinglyLinkedList;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        SinglyLinkedList<Editor> editorVersion = new SinglyLinkedList<>();
        Scanner scanner = new Scanner(System.in);
        String option;
        try{
            while(true){
                showMenu();
                option = scanner.nextLine();
                switch (option){
                    case "1":
                        System.out.println("Insira o texto que deseja armazenar: ");
                        String text = scanner.nextLine();
                        editorVersion.add(new Editor(text));
                        break;
                    case "2":
                        if(editorVersion.isEmpty()){
                            System.out.println("Não há nada o que remover pois, o texto está vazio.");
                            break;
                        }
                        int removeLast = editorVersion.size() - 1;
                        editorVersion.remove(removeLast);
                        break;
                    case "3":
                        System.out.println("Insira o quanto deseja retroceder: ");
                        String undo = scanner.nextLine();
                        int undoInt = Integer.parseInt(undo);
                        if(undoInt >= editorVersion.size()){
                            System.out.println("Você não tem essa quantidade para retroceder. O máximo disponível é: " + editorVersion.size());
                            break;
                        }
                        int count = 0;
                        while(count < undoInt){
                            editorVersion.remove(editorVersion.size() - 1);
                            count++;
                        }
                        System.out.println("Você retrocedeu " + undoInt + " vezes desde sua última versão disponível");
                        break;
                    case "4":
                        if(editorVersion.isEmpty()){
                            System.out.println("Você não possui nenhum registro.");
                            break;
                        }
                        editorVersion.showAllElements();
                        break;
                    case "0":
                        System.out.println("Encerrando...");
                        scanner.close();
                        return;
                    default:
                        System.out.println("Opção inválida!");
                        break;
                }
            }
        }catch (Exception e){
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
    }

    public static void showMenu(){
        System.out.println("Escolha uma das opções do menu");
        System.out.println("1 - Armazenar ação");
        System.out.println("2 - Desfazer última alteração");
        System.out.println("3 - Desfazer mais de uma alteração");
        System.out.println("4 - Exibir texto");
        System.out.println("0 - Sair");
    }
}
