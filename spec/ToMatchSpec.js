describe('Teste do toMatch', () => {
    it('deve validar o uso do toMatch', () => {
        let texto = "teste com Jasmine";

        expect(texto).toMatch("Jasmine");
        expect(texto).toMatch(/jasmine/i);
        expect("12345-456").toMatch(/^\d{5}-\d{3}$/);
    });
});