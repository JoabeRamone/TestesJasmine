describe('Testes do objeto Spy', () => {
    
    var Calculadora = {
        somar: function (n1, n2) {
          return n1 + n2;
        }
    };

    beforeAll(function() {
        spyOnProperty(Calculadora, 'somar');
    })

    it('deve possuir o método somar como não definido', () => {
        expect(Calculadora.somar(1,1)).toBeUndefined();
    })

});