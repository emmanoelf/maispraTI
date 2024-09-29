package abstracao.gestao;

public class Estagiario extends Funcionario{

    public Estagiario(String nome, double salarioBase) {
        super(nome, salarioBase, TipoFuncionario.ESTAGIARIO);
    }

    @Override
    public double calcularSalario() {
        return this.salarioBase * 0.8;
    }

    @Override
    public double calcularBonus() {
        return 0;
    }
}
