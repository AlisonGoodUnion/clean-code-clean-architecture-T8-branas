export default class Segment {

    OVERNIGHT_START = 22;
    OVERNIGHT_END = 6;

    // para criar segment passamos pelo metodo publico
    // para isso existe uma mediação/arbitragem para interagir com as caracteristicas do objeto
    // isso se chama proteção de variancia, proteção de estado interno.
    // disciplina sobre a transferencia indireta de controle (POO)
    // um exemplo o isOvernight
    constructor(readonly distance: number,
                readonly date: Date) {
        if (!this.isValidDistance(distance)) throw new Error("Invalid Distance");
        if (!this.isValidDate(date)) throw new Error("Invalid Date");
    }

    isValidDistance(distance: number) {
        return distance && typeof distance === "number" && distance > 0;
    }

    isValidDate(date: Date) {
        return date && date instanceof Date && date.toString() !== "Invalid Date"
    }

    isOvernight() {
        return this.date.getHours() >= this.OVERNIGHT_START || this.date.getHours() <= this.OVERNIGHT_END;
    }

    isSunday() {
        return this.date.getDay() === 0;
    }

}




