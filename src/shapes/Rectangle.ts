import { BaseShape } from './Shape';

export class Rectangle extends BaseShape {
    constructor(public width: number, public height: number) {
        super();
    }

    getArea(): number {
        return this.width * this.height;
    }

    getParameters(): number {
        return 2 * (this.width + this.height)
    }
}