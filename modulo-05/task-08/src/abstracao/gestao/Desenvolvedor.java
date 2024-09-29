package abstracao.gestao;

public class Desenvolvedor extends Funcionario{
    private double bonusFixo;

    public Desenvolvedor(String nome, Double salarioBase, Double bonusFixo) {
        super(nome, salarioBase, TipoFuncionario.DESENVOLVEDOR);
        this.bonusFixo = bonusFixo;
    }

    @Override
    public double calcularSalario() {
        return this.salarioBase + this.bonusFixo;
    }

    @Override
    public double calcularBonus() {
        return this.bonusFixo;
    }
}
