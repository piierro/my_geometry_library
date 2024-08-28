import { BaseShape } from './Shape';

export class Circle extends BaseShape {
    constructor(public radius: number) {
        super()
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getParameters(): number {
        return 2 * Math.PI * this.radius;
    }
}