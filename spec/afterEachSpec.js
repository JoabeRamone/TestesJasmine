describe('Teste do afterEach', () => {
    let contador = 0;

    
    beforeEach(function() {
        contador++;
    });
       
    
    afterEach(() => {
        contador = 0;
    });

    it('deve garantir o valor 1 para o contador', () => {
        expect(contador).toEqual(1);
    });

    it('deve ainda garantir o contador com valor', () => {
        expect(contador).toEqual(1);
    });
});