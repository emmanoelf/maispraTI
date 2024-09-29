package polimorfismo.interfaces;

public class Bicicleta implements IMeioTransporte{
    @Override
    public void acelerar() {
        System.out.println("A bicicleta está acelerando");
    }

    @Override
    public void freiar() {
        System.out.println("A bicicleta está freiando.");
    }
}
