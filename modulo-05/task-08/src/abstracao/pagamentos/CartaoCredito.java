package abstracao.pagamentos;

public class CartaoCredito extends FormaPagamento{
    private String numero;
    private String titular;
    private String validade;
    private int cvc;

    public CartaoCredito(String numero, String titular, String validade, int cvc) {
        this.numero = numero;
        this.titular = titular;
        this.validade = validade;
        this.cvc = cvc;
    }

    @Override
    public void processarPagamento(double valor) {
        if(validarPagamento()){
            System.out.println("Pagamento de R$ " + valor + " no CARTÃO DE CRÉDITO foi processado com sucesso!");
        }
    }

    @Override
    public boolean validarPagamento() {
        if(this.numero.length() != 16){
            throw new IllegalArgumentException("Número de cartão inválido");
        }

        if(this.titular == null || this.titular.isEmpty()){
            throw new IllegalArgumentException("Nome de titular inválido");
        }

        if(this.validade == null || this.validade.isEmpty()){
            throw new IllegalArgumentException("Validade inválida");
        }

        if(this.cvc < 0 || !this.validarCvc(this.cvc)){
            throw new IllegalArgumentException("CVC inválido");
        }

        return true;
    }

    private boolean validarCvc(int cvc) {
        String parseCvc = String.valueOf(cvc);
        return parseCvc.matches("\\d{3}");
    }

}
