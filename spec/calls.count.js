describe('Teste do and.count do Spy', () => {

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

    it('deve demonstrar o udo do calls.count', function () {
        Calculadora.somar(1,1);
        Calculadora.somar(2,2);
        expect(Calculadora.somar.calls.count()).toEqual(2);
    });
});