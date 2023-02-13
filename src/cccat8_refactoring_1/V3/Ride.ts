import Segment from "./Segment";
import FareCalculatorFactory from "./farecalculator/FareCalculatorFactory";

export default class Ride {

    MIN_FATE = 10;
    private segments: Segment[];

    constructor() {
        this.segments = [];
    }

    addSegments(distance: number, date: Date){
        this.segments.push(new Segment(distance, date));
    }

    calculateFare() {
        let fare = 0;
        for (const segment of this.segments) {
            //Ifs a tendencia e aumentar, essa sequencia pode ser
            // alterada de forma polimorfica
            const fareCalculator = FareCalculatorFactory.create(segment);
            fare += fareCalculator.calculate(segment);
        }
        return (fare < this.MIN_FATE) ? this.MIN_FATE : fare;
    }
}