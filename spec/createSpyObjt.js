describe('Teste do jasmine.createSpy', () => {

    let Calculadora;

    beforeAll(function () {
       Calculadora = jasmine.createSpyObj("Calculadora", ["somar", "subtrair"]);

       Calculadora.somar.and.returnValue(5);
    });

    it('deve monstrar o uso do jasmine.creteSpyObj', function () {
        let retorno = Calculadora.somar(2,5);

        expect(Calculadora.somar).toHaveBeenCalled();
        expect(Calculadora.somar).toHaveBeenCalledWith(2,5);
        expect(retorno).toEqual(5);
    });
});