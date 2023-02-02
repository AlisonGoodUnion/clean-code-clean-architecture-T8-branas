import expect from 'expect';
import Ride from "../../../src/cccat8_refactoring_1/V3/Ride";

//COVERAGE 58
test("Deve calcular uma corrida em horario normal", function () {
    const ride = new Ride();
    ride.addSegments(10, new Date("2021-03-10T10:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(21);
});

//COVERAGE 70
test("Deve calcular uma corrida em horario noturno", function () {
    const ride = new Ride();
    ride.addSegments(10, new Date("2021-03-10T22:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(39);
});

//COVERAGE 76
test("Deve calcular uma corrida no domingo em horario diurno", function () {
    const ride = new Ride();
    ride.addSegments(10, new Date("2021-03-07T10:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(29);
});

//COVERAGE 82
test("Deve calcular uma corrida no domingo noturno", function () {
    const ride = new Ride();
    ride.addSegments(10, new Date("2021-03-07T22:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(50);
});

//COVERAGE 88
test("Não deve calcular uma corrida com cia inválida", function () {
    const ride = new Ride();
    expect(() => ride.addSegments(-10, new Date("2021-03-10T10:00:00")))
        .toThrow(new Error("Invalid Distance"));
});

//COVERAGE 94
test("Não deve calcular uma corrida com data inválida", function () {
    const ride = new Ride();
    expect(() => ride.addSegments(10, new Date("javascript")))
        .toThrow(new Error("Invalid Date"))
});

//COVERAGE 100
test("Deve calcular uma corrida em horário normal com valor mínimo", function () {
    const ride = new Ride();
    ride.addSegments(3, new Date("2021-03-10T10:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(10);
});
