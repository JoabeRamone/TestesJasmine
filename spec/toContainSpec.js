describe('Teste do toContain', () => {
    it('deve demonstrar o uso do toContain', () => {
        let texto = "Meu nome é Julia";
        let frutas = ["laranja", "banana", "pera"];

        expect(texto).toContain("Julia");
        expect(texto).not.toContain("julia");

        expect(frutas).toContain("laranja");
        expect(frutas).not.toContain("uva");
    });
});