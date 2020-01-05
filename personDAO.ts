import { DAOInterface } from './DAOInterface'
import People from './people'

export class PersonDAO implements DAOInterface<any> {

   nameTable: string = 'person'

   inserir(object: People): boolean {
      console.log('logica de insert')
      return true
   }

   atualizar(object: People): boolean {
      console.log('logica update')
      return true
   }

   remover(id: number): People {
      console.log('logica delete')
      return new People('', '')
   }

   selecionar(id: number): People{
      console.log('logica select')
      return new People('', '')
   }

   selecionarTodos(): [any] {
      console.log('logica getAll')
      return [new People('', '')]
   }

}