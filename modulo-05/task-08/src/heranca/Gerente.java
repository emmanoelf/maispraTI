package heranca;

public class Gerente extends Funcionario{
    public Gerente(String nome, double salario) {
        super(nome, salario);
    }

    public Double calcularBonus(){
        return this.getSalario() * 0.2;
    }

    @Override
    public String trabalhar() {
        return "Gerindo...";
    }
}
