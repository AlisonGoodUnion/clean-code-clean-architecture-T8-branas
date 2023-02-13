import Segment from "../Segment";

//estabelecendo contrato e transferindo controle de maneira indireta.
//strategy
export default interface FareCalculator {
    calculate(segment: Segment): number;
}