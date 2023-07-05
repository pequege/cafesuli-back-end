import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
//usar un puerto
const app = express();

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log("estoy en el puerto " + app.get('port'));
})

//middlewares
app.use(cors()); //permitir conexiones remotas
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));
//rutas
