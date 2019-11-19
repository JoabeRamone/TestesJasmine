var meuMatcher ={
    toBeValidEmail: function (util, customEqualityTesters) {
        let emailRegex =    /\S+@\S+\.\S+/;
        return {
            compare: function (actual, expected) {
                let result ={};
                if (expected === undefined) {
                    result.pass = emailRegex.test(actual);
                } else {
                    result.pass =expected.test(expected);
                }
                if (result.pass) {
                    result.message = actual + " é um email válido"
                } else {
                    result.message = actual + " não é um email válido";
                }
                return result
            }
        }
    }
};

describe('Teste do objeto jasmine.addMatchers', () => {


    beforeEach(function () {
        jasmine.addMatchers(meuMatcher);
    });

    it('deve verificar se um email é válido', function () {
        expect("email@dominio.com").toBeValidEmail();
        expect("email").not.toBeValidEmail();
    });

});