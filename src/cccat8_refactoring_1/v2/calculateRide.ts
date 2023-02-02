//Dica: passar algumas regras para funcoes e deixar mais claro qual o objetivo da condicao obtendo um reaproveitamento
//e tambem ganhando espaco em tela diminuindo algumas linhas de codigo

const OVERNIGHT_FARE = 3.90;
const OVERNIGHT_SUNDAY_FATE = 5;
const SUNDAY_FATE = 2.9;
const NORMAL_FATE = 2.1;
const OVERNIGHT_START = 22;
const OVERNIGHT_END = 6;
const MIN_FATE = 10;

function isOvernight(date: Date) {
    return date.getHours() >= OVERNIGHT_START || date.getHours() <= OVERNIGHT_END;
}

function isSunday(date: Date) {
    return date.getDay() === 0;
}

function isValidDistance(distance: number) {
    return distance && typeof distance === "number" && distance > 0;
}

function isValidDate(date: Date) {
    return date && date instanceof Date && date.toString() !== "Invalid Date"
}
export function calculateRide(segments: { distance: number, date: Date }[]) {
    let fare = 0;
    for (const segment of segments) {
        if (!isValidDistance(segment.distance)) throw new Error("Invalid Distance");
        if (!isValidDate(segment.date)) throw new Error("Invalid Date");
        if (isOvernight(segment.date) && !isSunday(segment.date)) {
            fare += segment.distance * OVERNIGHT_FARE;
        }
        if (isOvernight(segment.date) && isSunday(segment.date)) {
            fare += segment.distance * OVERNIGHT_SUNDAY_FATE;
        }
        if (!isOvernight(segment.date) && isSunday(segment.date)) {
            fare += segment.distance * SUNDAY_FATE;
        }
        if (!isOvernight(segment.date) && !isSunday(segment.date)) {
            fare += segment.distance * NORMAL_FATE;
        }
    }
    return (fare < MIN_FATE) ? MIN_FATE : fare;
}
