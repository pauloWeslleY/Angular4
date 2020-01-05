import { DAOInterface } from "./DAOInterface"

export class Dao<T> implements DAOInterface<T> {

   nameTable: string = ''

   inserir(object: T): boolean {
      console.log('logica de insert')
      return true
   }

   atualizar(object: T): boolean {
      console.log('logica update')
      return true
   }

   remover(id: number): T {
      console.log('logica delete')
      return Object()
   }

   selecionar(id: number): T{
      console.log('logica select')
      return Object()
   }

   selecionarTodos(): [T] {
      console.log('logica getAll')
      return [Object()]
   }

}