import {connect} from 'mongoose'
import { MONGODB_URI } from '../config'

connect(MONGODB_URI)
.then(resp => console.log(`DB Conectada en ${resp.connection.port}`))
.catch(error => console.log(error));