import Vehicle from './vehicle'

export default class Car extends Vehicle {
   private numbersTheDoor: number

   constructor(model: string, numbersTheDoor: number) {
      super()
      this.model = model
      this.numbersTheDoor = numbersTheDoor
   }

}