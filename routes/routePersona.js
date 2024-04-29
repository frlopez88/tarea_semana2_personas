import express from 'express';
const persona = express();
import { getPersona, 
         postPersona, 
         putPersona, 
         deletePersona } from '../controllers/controllerPersonas.js'; 

persona.get('/', getPersona);

persona.post('/', postPersona);

persona.put('/:id', putPersona);

persona.delete('/:id', deletePersona );

export {
    persona
}