package polimorfismo.interfaces;

public class Main {
    public static void main(String[] args) {
        IMeioTransporte[] transportes = new IMeioTransporte[3];
        transportes[0] = new Carro();
        transportes[1] = new Bicicleta();
        transportes[2] = new Trem();

        for(int i = 0; i < transportes.length; i++){
            System.out.println("Transporte " + (i + 1) + ": ");
            transportes[i].acelerar();
            transportes[i].freiar();
        }
    }
}
