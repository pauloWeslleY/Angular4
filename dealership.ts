import { ConcessionaireInterface } from './concessionaireInter'
import Car from './car'

export default class Dealership implements ConcessionaireInterface {
   private adress: string
   private listTheCars: Array<Car>

   constructor(adress: string, listTheCars: Array<Car>) {
      this.adress = adress
      this.listTheCars = listTheCars
   }

   public provideAddress(): string {
      return this.adress
   }

   public showListTheCars(): Array<Car> {
      return this.listTheCars
   }

   public provideOpeningHours(): string {
      return 'Monday to Friday from 08:00 to 18:00 and Saturday from 08:00 to 12:00'
   }

}