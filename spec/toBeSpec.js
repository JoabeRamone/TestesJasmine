describe('Comparador toBe', () => {
    it('deve validar o uso toBe', () => {
        let obj1 = { valor: true};
        let obj2 = { valor: true};
        expect(true).toBe(true);
        expect("Teste").toBe("Teste");
        expect(obj1).not.toBe(obj2);
    });
});