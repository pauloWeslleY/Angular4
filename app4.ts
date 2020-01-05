// import { ConcessionaireDAO } from './concessionaireDAO'
// import { PersonDAO } from './personDAO'

import { Dao } from './DAO'
import Dealership from './dealership'
import People from './people'

// let dao: ConcessionaireDAO = new ConcessionaireDAO()
// let dao2: PersonDAO = new PersonDAO()

let dealership = new Dealership('', [])
let people: People = new People('', '')

let dao3: Dao<Dealership> = new Dao<Dealership>()
let dao4: Dao<People> = new Dao<People>()

dao3.inserir(dealership)
dao4.remover(5)
