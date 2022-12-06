export default class Circle {

    constructor (readonly radius: number) {
    }

    getArea() : number {
        return 2 * Math.PI * this.radius;
    }
}
