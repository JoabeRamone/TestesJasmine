describe('Teste do jasmine.arrayContaining', () => {
    let numeros;


    beforeEach(function () {
        numeros = [1, 2, 3, 4, 5];
    });


    it('deve demonstrar o uso do jasmine.arrayContaining', function () {

        expect(numeros).toEqual(jasmine.arrayContaining([3]));
        expect(numeros).toEqual(jasmine.arrayContaining([2, 4]));
        expect(numeros).not.toEqual(jasmine.arrayContaining([6]));
    });
});