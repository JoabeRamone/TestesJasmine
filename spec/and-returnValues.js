describe('Teste do and.returnValues do Spy', () => {

    let Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        },
        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.returnValues(1, 5);
        spyOn(Calculadora, "subtrair");
    });

    it('deve retornar 10 para o metodo somar', function () {
       expect(Calculadora.somar(3, 4)).toEqual(1);
        expect(Calculadora.somar(1, 2)).toEqual(5);
        expect(Calculadora.somar(4, 4)).toBeUndefined();
    });
});