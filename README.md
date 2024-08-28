# Geometry Shapes Library(fake all!!)

This library is written in TypeScript and allows you to work with geometric shapes: rectangles, triangles, and circles.

## Installation

You can install the library npm:

npm install my__geometry_library

**Пример использования**

```typescript
import { Rectangle, Circle, Triangle } from 'my_geometry_library';

const rectangle = new Rectangle(5, 10);
console.log(`Rectangle Area: ${rectangle.getArea()}`) // Output: 50

const circle = new Circle(7);
console.log(`Circle Area: ${circle.getArea()}`) // Output: 153.93804002589985

const triangle = new Triangle(6);
console.log(`Triangle Area: ${triangle.getArea()}`) // Output: 15.588457268119896
