package encapsulamento;

public class Main {
    public static void main(String[] args) {
        try{
            //Produto produto1 = new Produto("Tênis", -10., -20);
            Produto produto2 = new Produto("Novo Tênis", 200.0, 4);

            System.out.println("Produto: " + produto2.getNome() + "\nPreço: " + produto2.getPreco() + "\nQuantidade: " + produto2.getQuantidade());

            ProdutoDesconto produtoDesconto = new ProdutoDesconto("Tênis com desconto", 200.0, 4);
            produtoDesconto.aplicarDesconto(50.0);
            System.out.println("Produto: " + produtoDesconto.getNome() + "\nPreço: " + produtoDesconto.getPreco() + "\nQuantidade: " + produtoDesconto.getQuantidade());

            ProdutoDesconto produtoDesconto2 = new ProdutoDesconto("Meia com desconto", 10.7, 13);
            produtoDesconto2.aplicarDesconto(80.3);
            produtoDesconto2.aplicarDesconto(-1.);

        }catch (Exception e){
            System.out.println(e.getMessage());
        }

    }
}
