import { db} from "../db/conexion.js";

const getPersona = async (req,res)=> {
    const sql = `select * from tbl_personas order by id`;

    const result = await db.query(sql);
    res.json(result)
}

const putPersona = async (req,res)=> {
    const {nombre, apellido, fecha} = req.body;
    const params = [nombre, apellido, fecha];
    const sql = `insert into tbl_personas
                (nombre, apellido, fecha)
                values
                ($1, $2, $3) returning *`
    const result = await db.query(sql,params);
    res.json(result);
}

const postPersona = async (req,res)=>{

    const{nombre,apellido, fecha} = req.body;
    const {id} = req.params;
    const params = [nombre, apellido, fecha, id]

    const sql = `update tbl_personas
                set
                nombre = $1
                apellido =$2
                fecha = $3
                where id = $4 returning *`
    
    const result = await db.query(sql, params);
    res.json(result);
}

const deletePersona = async (res,req)=>{
    const params = [req.params.id];
    const sql = `delete from tbl_personas where id = $1`;
    const result = await db.query(sql, params);
    res.json(result)
}

export { getPersona }
export {putPersona}
export {postPersona}
export {deletePersona}