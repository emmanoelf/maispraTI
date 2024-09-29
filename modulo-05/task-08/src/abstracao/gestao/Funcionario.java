package abstracao.gestao;

public abstract class Funcionario {
    protected String nome;
    protected double salarioBase;
    protected TipoFuncionario tipoFuncionario;

    public Funcionario(String nome, double salarioBase, TipoFuncionario tipoFuncionario) {
        this.nome = nome;
        this.salarioBase = salarioBase;
        this.tipoFuncionario = tipoFuncionario;
    }

    public abstract double calcularSalario();
    public abstract double calcularBonus();

    @Override
    public String toString() {
        return "Funcionário: " + nome + ", Salário: " + calcularSalario() + ", Bônus: " + calcularBonus();
    }
}
