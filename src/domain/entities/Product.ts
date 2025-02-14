export class Product {
    constructor(
      public id: string,
      public name: string,
      public price: number,
      public stock: number
    ) {}
  
    isAvailable(): boolean {
      return this.stock > 0;
    }
  }
  