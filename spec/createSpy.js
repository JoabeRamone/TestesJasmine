describe('Teste do jasmine.createSpy', () => {

    let somar;

    beforeAll(function () {
       somar = jasmine.createSpy("somar");
    });

    it('deve monstrar o uso do jasmine.creteSpy', function () {
        somar(1,1);

        expect(somar).toHaveBeenCalled();
        expect(somar).toHaveBeenCalledWith(1,1);

    });
});