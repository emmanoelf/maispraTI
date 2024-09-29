package abstracao.gestao;

public class Gerente extends Funcionario {
    private Double bonusPorcentagem;

    public Gerente(String nome, Double salarioBase, Double bonusPorcentagem) {
        super(nome, salarioBase, TipoFuncionario.GERENTE);
        this.bonusPorcentagem = bonusPorcentagem;
    }

    @Override
    public double calcularSalario() {
        return this.salarioBase;
    }

    @Override
    public double calcularBonus() {
        return this.salarioBase * this.bonusPorcentagem / 100;
    }
}
