package heranca;

public class Desenvolvedor extends Funcionario{
    public Desenvolvedor(String nome, double salario) {
        super(nome, salario);
    }

    public Double calcularBonus(){
        return this.getSalario() * 0.10;
    }

    @Override
    public String trabalhar() {
        return "Desenvolvendo...";
    }
}
