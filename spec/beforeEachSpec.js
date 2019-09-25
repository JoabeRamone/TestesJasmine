describe('Teste do beforeEach', () => {
    let contador = 0;

    beforeEach(function() {
      contador++;
    });

    it('deve incrementar o contador para 1', () => {
        expect(contador).toEqual(1);
    });

    it('deve incrementar o contador para 2', () => {
        expect(contador).toEqual(2);
    });
});