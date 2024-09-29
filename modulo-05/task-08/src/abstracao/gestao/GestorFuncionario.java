package abstracao.gestao;

import java.util.List;

public class GestorFuncionario {
    public void promoverFuncionario(List<Funcionario> funcionarios, int index, TipoFuncionario novoTipo, double bonus) {
        Funcionario funcionario = funcionarios.get(index);
        System.out.println("Promovendo " + funcionario.nome + " para " + novoTipo + "...");

        funcionario.tipoFuncionario = novoTipo;

        if(novoTipo == TipoFuncionario.GERENTE) {
            Gerente novoGerente = new Gerente(funcionario.nome, funcionario.salarioBase, bonus);
            funcionarios.set(index, novoGerente);
            System.out.println(funcionario.nome + " foi promovido para Gerente.");
        }

        if(novoTipo == TipoFuncionario.DESENVOLVEDOR) {
            Desenvolvedor novoDesenvolvedor = new Desenvolvedor(funcionario.nome, funcionario.salarioBase, bonus);
            funcionarios.set(index, novoDesenvolvedor);
            System.out.println(funcionario.nome + " foi promovido para Desenvolvedor.");
        }
    }

    public void calcularFolhaPagamento(List<Funcionario> funcionarios) {
        double totalSalarios = 0;
        double totalBonus = 0;

        for (Funcionario funcionario : funcionarios) {
            totalSalarios += funcionario.calcularSalario();
            totalBonus += funcionario.calcularBonus();
            System.out.println(funcionario);
            System.out.println("------------------------");
        }

        System.out.println("Total de Salários: " + totalSalarios);
        System.out.println("Total de Bônus: " + totalBonus);
    }
}
