import { calculateRide } from '../../../src/cccat8_refactoring_1/v2/calculateRide';
import expect from 'expect';

//COVERAGE 58
test("Deve calcular uma corrida em horario normal", function () {
    const fare = calculateRide([
        {distance: 10, date: new Date("2021-03-10T10:00:00")}
    ]);
    expect(fare).toBe(21);
});

//COVERAGE 70
test("Deve calcular uma corrida em horario noturno", function () {
    const fare = calculateRide([
        {distance: 10, date: new Date("2021-03-10T22:00:00")}
    ]);
    expect(fare).toBe(39);
});

//COVERAGE 76
test("Deve calcular uma corrida no domingo em horario diurno", function () {
    const fare = calculateRide([
        {distance: 10, date: new Date("2021-03-07T10:00:00")}
    ]);
    expect(fare).toBe(29);
});

//COVERAGE 82
test("Deve calcular uma corrida no domingo noturno", function () {
    const fare = calculateRide([
        {distance: 10, date: new Date("2021-03-07T22:00:00")}
    ]);
    expect(fare).toBe(50);
});

//COVERAGE 88
test("Não deve calcular uma corrida com distanceância inválida", function () {
    const fare = calculateRide(
        [{ distance: -10, date: new Date("2021-03-10T10:00:00") }]
    );
    expect(fare).toBe(-1);
});

//COVERAGE 94
test("Não deve calcular uma corrida com data inválida", function () {
    const fare = calculateRide(
        [{ distance: 10, date: new Date("javascript") }]
    );
    expect(fare).toBe(-2);
});

//COVERAGE 100
test("Deve calcular uma corrida em horário normal com valor mínimo", function () {
    const fare = calculateRide(
        [{ distance: 3, date: new Date("2021-03-10T10:00:00") }]
    );
    expect(fare).toBe(10);
});
