import { BaseShape } from './Shape';

export class Triangle extends BaseShape {
    constructor(public sideLenght: number) {
        super()
    }

    getArea(): number {
        const height = (Math.sqrt(3) / 2) * this.sideLenght;
        return (this.sideLenght * height) / 2;
    }

    getParameters(): number {
        return 3 * this.sideLenght
    }
}