describe('Teste do and.calls do Spy', () => {

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

    it('deve demonstrar o udo do calls.any', function () {
        Calculadora.somar(1,1);
        expect(Calculadora.somar.calls.any()).toBeTruthy();
    });
});