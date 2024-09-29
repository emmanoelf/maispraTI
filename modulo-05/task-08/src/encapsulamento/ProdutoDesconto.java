package encapsulamento;

public class ProdutoDesconto extends Produto {
    public ProdutoDesconto(String nome, Double preco, int quantidade) {
        super(nome, preco, quantidade);
    }

    public void aplicarDesconto(Double porcentagemDesconto) {
        if(porcentagemDesconto < 0 || porcentagemDesconto > 50){
            throw new IllegalArgumentException("O desconto deve ser entre 0 até 50%");
        }

        double desconto = (this.getPreco() * porcentagemDesconto) / 100;
        this.setPreco(this.getPreco() - desconto);
    }
}
