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

    public void promover(TipoFuncionario tipoFuncionario) {
        this.tipoFuncionario = tipoFuncionario;
        System.out.println("Funcionário(a) " + this.nome + " foi promovido(a).");
    }

    public abstract double calcularSalario();
    public abstract double calcularBonus();
}
