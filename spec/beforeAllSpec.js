describe('Teste do beforeAll', () => {
    let contador = 0;

    beforeAll(function() {
      contador = 10;
    });

    
    beforeEach(function() {
        contador++;
    });
        

    it('deve garantir valor 11 para o contador', () => {
        expect(contador).toEqual(11);
    });

    it('deve garantir valor 12 para o contador', () => {
        expect(contador).toEqual(12);
    });
});