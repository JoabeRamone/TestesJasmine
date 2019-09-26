describe('Teste do toHaveBeenCalled', () => {

    let Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar");
    });

    it('deve chamar o método somar ao menos uma vez', function () {
        expect(Calculadora.somar).not.toHaveBeenCalled();
        Calculadora.somar(1,1);
        expect(Calculadora.somar).toHaveBeenCalled();
    });
});