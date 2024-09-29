package polimorfismo.interfaces;

public class Carro implements IMeioTransporte{
    @Override
    public void acelerar() {
        System.out.println("O carro está acelerando.");
    }

    @Override
    public void freiar() {
        System.out.println("O carro está freiando.");
    }
}
