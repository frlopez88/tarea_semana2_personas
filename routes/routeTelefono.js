import express from 'express';
const telefono = express();
import {getTelefono, putTelefono, postTelefono, deleteTelefono} from '../controllers/controllerTelefono.js'
//imports de controllers


telefono.get ('/', getTelefono);

telefono.post ('/', postTelefono);

telefono.put ('/:id', putTelefono);

telefono.delete ('/:id', deleteTelefono);
//crud

export {telefono}
