import expect from 'expect';
import Ride from "../../../src/cccat8_refactoring_1/V3/Ride";
import NormalFareCalculator from "../../../src/cccat8_refactoring_1/V3/farecalculator/NormalFareCalculator";
import OvernightFareCalculator from "../../../src/cccat8_refactoring_1/V3/farecalculator/OvernightFareCalculator";
import SundayFareCalculator from "../../../src/cccat8_refactoring_1/V3/farecalculator/SundayFareCalculator";
import OvernightSundayFareCalculator
    from "../../../src/cccat8_refactoring_1/V3/farecalculator/OvernightSundayFareCalculator";

let ride: Ride;

beforeEach(function () {
    const normalFareCalculator = new NormalFareCalculator();
    const overnightFareCalculator = new OvernightFareCalculator(normalFareCalculator);
    const sundayFareCalculator = new SundayFareCalculator(overnightFareCalculator);
    const overnightSundayFareCalculator = new OvernightSundayFareCalculator(sundayFareCalculator);
    ride =  new Ride(overnightSundayFareCalculator);
});

test("Deve calcular uma corrida em horario normal", function () {
    ride.addSegments(10, new Date("2021-03-10T10:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(21);
});

test("Deve calcular uma corrida em horario noturno", function () {
    ride.addSegments(10, new Date("2021-03-10T22:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(39);
});

test("Deve calcular uma corrida no domingo em horario diurno", function () {
    ride.addSegments(10, new Date("2021-03-07T10:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(29);
});

test("Deve calcular uma corrida no domingo noturno", function () {
    ride.addSegments(10, new Date("2021-03-07T22:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(50);
});

test("Não deve calcular uma corrida com cia inválida", function () {
    expect(() => ride.addSegments(-10, new Date("2021-03-10T10:00:00")))
        .toThrow(new Error("Invalid Distance"));
});

test("Não deve calcular uma corrida com data inválida", function () {
    expect(() => ride.addSegments(10, new Date("javascript")))
        .toThrow(new Error("Invalid Date"))
});

test("Deve calcular uma corrida em horário normal com valor mínimo", function () {
    ride.addSegments(3, new Date("2021-03-10T10:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(10);
});
