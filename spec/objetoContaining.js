describe('Teste do jasmine.arrayContaining', () => {
    let carro;


    beforeEach(function () {
        carro = {
            'ano': 2017
        }
    });

    it('deve demonstrar o uso do jasmine.arrayContaining', function () {

        expect(carro).toEqual(jasmine.objectContaining({'ano': 2017}));
        expect(carro).not.toEqual(jasmine.objectContaining({'ano': 2016}));


    });

});