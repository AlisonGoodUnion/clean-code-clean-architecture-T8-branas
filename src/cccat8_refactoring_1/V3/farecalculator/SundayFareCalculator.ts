import FareCalculator from "./FareCalculator";
import Segment from "../Segment";

export default class SundayFareCalculator implements FareCalculator {
    FARE = 2.90;

    calculate(segment: Segment): number {
        return segment.distance * this.FARE;
    }
}