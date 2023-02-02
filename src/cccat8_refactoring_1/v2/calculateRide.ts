// @ts-nocheck
// calculate ride

//Dica: passar algumas regras para funcoes e deixar mais claro qual o objetivo da condicao obtendo um reaproveitamento
//e tambem ganhando espaco em tela diminuindo algumas linhas de codigo
function isOvernight(date) {
    return date.getHours() >= 22 || date.getHours() <= 6;
}

function isSunday(date) {
    return date.getDay() === 0;
}

export function calculateRide(segments) {
    let fare = 0;
    for (const segment of segments) {
        if (!segment.distance || typeof segment.distance !== "number" || segment.distance < 0) return -1;
        if (!segment.date || !(segment.date instanceof Date) || segment.date.toString() === "Invalid Date") return -2;
        if (isOvernight(segment.date) && !isSunday(segment.date)) {
            fare += segment.distance * 3.90;
        }
        if (isOvernight(segment.date) && isSunday(segment.date)) {
            fare += segment.distance * 5;
        }
        if (!isOvernight(segment.date) && isSunday(segment.date)) {
            fare += segment.distance * 2.9;
        }
        if (!isOvernight(segment.date) && !isSunday(segment.date)) {
            fare += segment.distance * 2.10;
        }
    }
    return (fare < 10) ? 10 ? fare;
}
