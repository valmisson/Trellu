import Dexie from 'dexie'
import Schema from './Schema'

const db = new Dexie('trellu')

db.version(1).stores(Schema)

export default db
