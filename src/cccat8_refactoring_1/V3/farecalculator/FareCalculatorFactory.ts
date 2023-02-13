import Segment from "../Segment";
import OvernightFareCalculator from "./OvernightFareCalculator";
import OvernightSundayFareCalculator from "./OvernightSundayFareCalculator";
import SundayFareCalculator from "./SundayFareCalculator";
import NormalFareCalculator from "./NormalFareCalculator";

export default class FareCalculatorFactory {
    //agora caso tenha uma nova regra, é só criar.
    //mas os IFs ainda existem
    static create (segment: Segment) {
        // if (segment.isOvernight() && !segment.isSunday()) {
        //     return new OvernightFareCalculator();
        // }
        // if (segment.isOvernight() && segment.isSunday()) {
        //     return new OvernightSundayFareCalculator();
        // }
        // if (!segment.isOvernight() && segment.isSunday()) {
        //     return new SundayFareCalculator();
        // }
        // if (!segment.isOvernight() && !segment.isSunday()) {
        //     return new NormalFareCalculator();
        // }
        throw new Error("");
    }
}