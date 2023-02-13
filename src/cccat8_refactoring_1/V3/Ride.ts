import Segment from "./Segment";
import FareCalculatorFactory from "./farecalculator/FareCalculatorFactory";
import FareCalculator from "./farecalculator/FareCalculator";

export default class Ride {

    MIN_FATE = 10;
    private segments: Segment[];

    //param com interface farecalculator (transferencia indireta de controle)
    constructor(readonly fareCalculator: FareCalculator) {
        this.segments = [];
    }

    addSegments(distance: number, date: Date){
        this.segments.push(new Segment(distance, date));
    }

    calculateFare() {
        let fare = 0;
        for (const segment of this.segments) {
            //usando a interface para calcular e no construtor desssa classe sabemos qual vai ser utilziado
            fare += this.fareCalculator.calculate(segment);
        }
        return (fare < this.MIN_FATE) ? this.MIN_FATE : fare;
    }
}