import expect from "expect";
import Cpf from "../src/Cpf";

test("Deve validar o cpf válido que tem dígito maior de zero", function () {
    const cpf = new Cpf('356.232.330-15');
    expect(cpf).toBeDefined();
});

test("Deve validar o cpf com dígito zero no primeiro dígito", function () {
    const cpf = new Cpf('815.128.790-02');
    expect(cpf).toBeDefined();
});

test("Deve validar o cpf com dígito zero no segundo dígito", function () {
    const cpf = new Cpf('893.458.200-60');
    expect(cpf).toBeDefined();
});

test("Deve tentar validar cpf com mais de 14 characteres", function () {
    expect(() => {
        new Cpf('893.458.200-600');
    }).toThrow(new Error('CPF invalido'));
});

test("Deve tentar validar cpf com digitos iguais", function () {
    expect(() => {
        new Cpf('111.111.111-11');
    }).toThrow(new Error('CPF invalido'));
});

test("Deve tentar validar cpf com NaN", function () {
    expect(() => {
        new Cpf('abc.abc.abc-ab');
    }).toThrow(new Error('CPF invalido'));
});