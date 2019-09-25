describe('Teste do toEqual', () => {
    it('deve validar o uso do Equal', () => {
        let obj1 = {valor:true};
        let obj2 = {valor:true};

        expect(true).toEqual(true);
        expect(obj1).toEqual(obj2);
    });
});