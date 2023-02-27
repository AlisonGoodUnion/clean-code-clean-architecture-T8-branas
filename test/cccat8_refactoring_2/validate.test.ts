import {validate} from "../../src/cccat8_refactoring_2/v2/validate";
import expect from "expect";

test("Deve validar o cpf válido que tem dígito maior de zero", function () {
    const isValid = validate('356.232.330-15');
    expect(isValid).toBeTruthy();
});

test("Deve validar o cpf com dígito zero no primeiro dígito", function () {
    const isValid = validate('815.128.790-02');
    expect(isValid).toBeTruthy();
});

test("Deve validar o cpf com dígito zero no segundo dígito", function () {
    const isValid = validate('893.458.200-60');
    expect(isValid).toBeTruthy();
});

test("Deve tentar validar cpf com mais de 14 characteres", function () {
    const isValid = validate('893.458.200-600');
    expect(isValid).toBeFalsy();
});

test("Deve tentar validar cpf com digitos iguais", function () {
    const isValid = validate('111.111.111-11');
    expect(isValid).toBeFalsy();
});

test("Deve tentar validar cpf com NaN", function () {
    const isValid = validate('abc.abc.abc-ab');
    expect(isValid).toBeFalsy();
});