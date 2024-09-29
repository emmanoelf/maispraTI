package polimorfismo.interfaces;

public class Trem implements IMeioTransporte{
    @Override
    public void acelerar() {
        System.out.println("O trem está acelerando.");
    }

    @Override
    public void freiar() {
        System.out.println("O trem está freiando");
    }
}