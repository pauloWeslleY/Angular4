import { DAOInterface } from './DAOInterface'
import Dealership from './dealership'

export class ConcessionaireDAO implements DAOInterface<any> {

   nameTable: string = 'tb_concessionaire'

   inserir(object: Dealership): boolean {
      console.log('logica de insert')
      return true
   }

   atualizar(object: Dealership): boolean {
      console.log('logica update')
      return true
   }

   remover(id: number): Dealership {
      console.log('logica delete')
      return new Dealership('', [])
   }

   selecionar(id: number): Dealership{
      console.log('logica select')
      return new Dealership('', [])
   }

   selecionarTodos(): [any] {
      console.log('logica getAll')
      return [new Dealership('', [])]
   }

}