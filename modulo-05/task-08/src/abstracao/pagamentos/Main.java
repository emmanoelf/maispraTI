package abstracao.pagamentos;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String option;
        Double valor;
        try{
            while(true){
                exibirMenu();
                option = scanner.nextLine();
                switch (option){
                    case "1":
                        System.out.println("Insira os dados do seu cartão");
                        System.out.println("Número: ");
                        String numero = scanner.nextLine();
                        System.out.println("Nome do titular: ");
                        String titular = scanner.nextLine();
                        System.out.println("Data de validade: ");
                        String dataValidade = scanner.nextLine();
                        System.out.println("CVC: ");
                        String cvc = scanner.nextLine();
                        FormaPagamento cartao = new CartaoCredito(numero, titular, dataValidade, Integer.parseInt(cvc));

                        System.out.println("Informe o valor a ser pago: ");
                        valor = Double.parseDouble(scanner.nextLine());

                        System.out.println("Validando informações");
                        cartao.processarPagamento(valor);

                        break;
                    case "2":
                        System.out.println("Insira o código de barras: ");
                        String codigoBarras = scanner.nextLine();
                        FormaPagamento boleto = new Boleto(codigoBarras);

                        System.out.println("Informe o valor a ser pago: ");
                        valor = Double.parseDouble(scanner.nextLine());

                        System.out.println("Validando informações");
                        boleto.processarPagamento(valor);
                        break;
                    case "3":
                        System.out.println("Insira a chave pix");
                        String chavePix = scanner.nextLine();
                        FormaPagamento pix = new Pix(chavePix);

                        System.out.println("Informe o valor a ser pago: ");
                        valor = Double.parseDouble(scanner.nextLine());
                        pix.processarPagamento(valor);

                        break;
                    case "0":
                        System.out.println("Encerrando...");
                        scanner.close();
                        return;
                    default:
                        System.out.println("Opção inválida");
                }
            }
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    private static void exibirMenu(){
        System.out.println("Bem vindo ao sistema de pagamento.");
        System.out.println("Selecione a opção desejada");
        System.out.println("1 - Pagar com cartão de crédito");
        System.out.println("2 - Pagar com boleto bancário");
        System.out.println("3 - Pagar com pix");
        System.out.println("0 - Sair");
    }
}
