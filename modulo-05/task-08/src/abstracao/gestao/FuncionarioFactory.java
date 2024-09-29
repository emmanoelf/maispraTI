package abstracao.gestao;

public class FuncionarioFactory {
    public static Funcionario criarFuncionario(String tipo, String nome, double salarioBase, double bonus) {
        switch (tipo.toUpperCase()) {
            case "GERENTE":
                return new Gerente(nome, salarioBase, bonus);
            case "DESENVOLVEDOR":
                return new Desenvolvedor(nome, salarioBase, bonus);
            case "ESTAGIARIO":
                return new Estagiario(nome, salarioBase);
            default:
                throw new IllegalArgumentException("Tipo de funcionário inválido");
        }
    }
}
