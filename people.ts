import Car from './car'

export default class People {
   private name: string
   private carPrefer: string
   private car: Car

   constructor(name: string, carPrefer: string) {
      this.name = name
      this.carPrefer = carPrefer
   }

   public tellName(): string {
      return this.name
   }

   public tellCarPrefer(): string {
      return this.carPrefer
   }

   public buyCar(car: Car): void {
      this.car = car
   }

   public sayCarThatHas(): Car {
      return this.car
   }
}