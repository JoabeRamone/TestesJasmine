describe('Suite externa', () => {
    var contadorExterno = 0;

    beforeEach(function() {
        contadorExterno++;
    });

    it('deve conter 1 para contadorExterno', () => {
        expect(contadorExterno).toEqual(1);
    });

    describe('Suite interna', () => {
        
        let contadorInterno = 0;

        beforeEach(function() {
            contadorInterno++;
        });

        it('deve validar o valor dos cotadores', () => {
            expect(contadorInterno).toEqual(1);
            expect(contadorExterno).toEqual(2);
        })
    });
});