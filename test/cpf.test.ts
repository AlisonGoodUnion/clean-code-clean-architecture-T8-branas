import expect from "expect";
import Cpf from "../src/Cpf";

const validCPF = [
    '356.232.330-15',
    '815.128.790-02',
    '893.458.200-60'
];

test.each(validCPF)("Deve validar o cpf ", function (cpf) {
    const validCPF = new Cpf(cpf)
    expect(validCPF).toBeDefined();
});

test("Deve tentar validar cpf com mais de 14 characteres", function () {
    expect(() => {
        new Cpf('893.458.200-600');
    }).toThrow(new Error('CPF invalido'));
});

const cpfWithSameDigit = [
    "000.000.000-00",
    "111.111.111-11",
    "222.222.222-22",
    "333.333.333-33",
    "444.444.444-44",
    "555.555.555-55",
    "666.666.666-66",
    "777.777.777-77",
    "888.888.888-88",
    "999.999.999-99"
];

test.each(cpfWithSameDigit)('Deve tentar validar cpf com todos os digitos iguais', function (cpf: string) {
    expect(() => {
        new Cpf(cpf);
    }).toThrow(new Error('CPF invalido'));
});

test("Deve tentar validar cpf com NaN", function () {
    expect(() => {
        new Cpf('abc.abc.abc-ab');
    }).toThrow(new Error('CPF invalido'));
});