describe('Teste do jasmine.anything', () => {
    let dobro;

    
    beforeEach(function() {
        dobro = jasmine.createSpy("dobro")
    });

    it('deve demonstrar o uso do jasmine.anything', function () {
        dobro(10);

        expect(dobro).toHaveBeenCalledWith(jasmine.anything());

        //pode ser testado o retorno da função, para saber se está alterando alguma coisa no objt
        expect().toHaveBeenCalledWith(jasmine.any());
    });

});