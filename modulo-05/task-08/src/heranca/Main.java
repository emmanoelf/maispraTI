package heranca;

public class Main {
    public static void main(String[] args) {
        Gerente gerente = new Gerente("Elon Musk", 4000);
        Desenvolvedor desenvolvedor = new Desenvolvedor("Bill Gates", 3000);

        System.out.println("Funcionário: " + gerente.getNome() +
                "\nSalário: " + gerente.getSalario() +
                "\nBônus: " + gerente.calcularBonus() +
                "\nTipo de trabalho: " + gerente.trabalhar());

        System.out.println("----------");

        System.out.println("Funcionário: " + desenvolvedor.getNome() +
                "\nSalário: " + desenvolvedor.getSalario() +
                "\nBônus: " + desenvolvedor.calcularBonus() +
                "\nTipo de trabalho: " + desenvolvedor.trabalhar());
    }
}
