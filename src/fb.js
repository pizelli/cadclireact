import firebase from 'firebase'
import { db_config } from './config'

export default firebase.initializeApp(db_config)