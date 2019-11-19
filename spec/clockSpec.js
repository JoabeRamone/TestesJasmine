describe('Teste do jasmine.clock', () => {

    beforeEach(function () {
        jasmine.clock().install();
    });

    afterEach(function () {
        jasmine.clock().uninstall();
    });


    let dobro;

    beforeAll(function () {
        dobro= jasmine.createSpy("dobro");
    });

    it('deve demonstrar o uso o setTimeout', function () {
        setTimeout(function () {dobro(10);}, 1000);
        jasmine.clock().tick(1000);
        expect(dobro).toHaveBeenCalled();
    });

    it('deve demonstrar o uso com o setInterval', function () {
        setInterval(function () {dobro(2);}, 500)
    });

});