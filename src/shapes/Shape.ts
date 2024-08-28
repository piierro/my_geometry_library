export interface Shape {
    getArea(): number;
    getParameters(): number;
}

export abstract class BaseShape extends EventTarget implements Shape {
    abstract getArea(): number;
    abstract getParameters(): number;

    protected dispatchShapeEvent(type: string): void {
        const event = new Event(type);
        this.dispatchEvent(event)
    }
}