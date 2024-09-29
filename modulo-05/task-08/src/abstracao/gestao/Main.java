package abstracao.gestao;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Funcionario> funcionarios = new ArrayList<>();
        GestorFuncionario gestor = new GestorFuncionario();

        funcionarios.add(FuncionarioFactory.criarFuncionario("GERENTE", "Alice", 8000.0, 10.0));
        funcionarios.add(FuncionarioFactory.criarFuncionario("DESENVOLVEDOR", "Bob", 5000.0, 1000.0));
        funcionarios.add(FuncionarioFactory.criarFuncionario("ESTAGIARIO", "Charlie", 2000.0, 0));

        gestor.calcularFolhaPagamento(funcionarios);
        gestor.promoverFuncionario(funcionarios, 1, TipoFuncionario.GERENTE, 10.0);
        gestor.calcularFolhaPagamento(funcionarios);
    }
}
