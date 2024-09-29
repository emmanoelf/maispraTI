package abstracao.pagamentos;

public class Boleto extends FormaPagamento{
    private String codigoBarras;

    public Boleto(String codigoBarras) {
        this.codigoBarras = codigoBarras;
    }

    @Override
    public void processarPagamento(double valor) {
        if(!validarPagamento()){
            System.out.println("Ocorreu um erro ao processar o pagamento na forma de Boleto Bancário");
        }
        System.out.println("Pagamento de R$: " + valor + " no BOLETO BANCÁRIO foi processado com sucesso");
    }

    @Override
    public boolean validarPagamento() {
        if(this.codigoBarras == null || this.codigoBarras.length() != 44){
            throw new IllegalArgumentException("Código de barras inválido");
        }
        return true;
    }
}
