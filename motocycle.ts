import Vehicle from './vehicle'

class Motocycle extends Vehicle {
   public speedUp(): void {
      this.speed = this.speed + 20
   }

}

export default Motocycle