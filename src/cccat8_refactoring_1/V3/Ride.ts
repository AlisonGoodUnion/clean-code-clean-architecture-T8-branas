import Segment from "./Segment";

export default class Ride {

    OVERNIGHT_FARE = 3.90;
    OVERNIGHT_SUNDAY_FATE = 5;
    SUNDAY_FATE = 2.9;
    NORMAL_FATE = 2.1;
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
            if (segment.isOvernight() && !segment.isSunday()) {
                fare += segment.distance * this.OVERNIGHT_FARE;
            }
            if (segment.isOvernight() && segment.isSunday()) {
                fare += segment.distance * this.OVERNIGHT_SUNDAY_FATE;
            }
            if (!segment.isOvernight() && segment.isSunday()) {
                fare += segment.distance * this.SUNDAY_FATE;
            }
            if (!segment.isOvernight() && !segment.isSunday()) {
                fare += segment.distance * this.NORMAL_FATE;
            }
        }
        return (fare < this.MIN_FATE) ? this.MIN_FATE : fare;
    }
}