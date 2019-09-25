describe('Teste do fail', () => {
    it('deve demonstrar o uso do fail', () => {
        let operacao = function(executar, callback) {
            if (executar) {
                callback();
            }
        }

        operacao(false, function() {
            fail("não deve executar função de callback");
        })
    });
});