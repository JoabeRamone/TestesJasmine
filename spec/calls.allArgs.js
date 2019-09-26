describe('Teste do and.allArgs do Spy', () => {

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

    it('deve demonstrar o udo do calls.allArgs', function () {
        Calculadora.somar(1,1);
        Calculadora.somar(2,2);
        expect(Calculadora.somar.calls.allArgs())
            .toEqual( [ [1,1], [2,2] ] );
    });
});