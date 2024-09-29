package abstracao.pagamentos;

public class Pix extends FormaPagamento{
    private String chavePix;

    public Pix(String chavePix) {
        this.chavePix = chavePix;
    }

    @Override
    public void processarPagamento(double valor) {
        if(!validarPagamento()){
            throw new IllegalArgumentException("Ocorreu um erro ao processar seu pagamento via PIX");
        }
        System.out.println("Pagamento de R$: " + valor + " no PIX foi processado com sucesso");
    }

    @Override
    public boolean validarPagamento() {
        if(this.chavePix == null || this.chavePix.isEmpty()){
            throw new IllegalArgumentException("Chave pix inválida");
        }
        return true;
    }
}
