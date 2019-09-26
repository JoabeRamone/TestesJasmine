describe('Teste do calls.mostRecent do Spy', () => {

    let Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        },
        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.returnValue(10);
        spyOn(Calculadora, "subtrair");
    });

    it('deve demonstrar o udo do calls.mostRecent', function () {
        Calculadora.somar(1,1);
        Calculadora.somar(2,2);

        let retorno = Calculadora.somar.calls.mostRecent();

        expect(retorno.object).toEqual(Calculadora);
        expect(retorno.args).toEqual([2, 2]);
        expect(retorno.returnValue).toEqual(10);

    });
});