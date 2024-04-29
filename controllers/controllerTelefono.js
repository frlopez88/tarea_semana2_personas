import { db } from "../db/conexion.js";

const getTelefono = async (req,res)=> {
    const sql = `select * from tbl_telefono order by id`;

    const result = await db.query(sql);
    res.json(result)
}

const putTelefono = async (req,res)=> {
    const {numero} = req.body;
    const params = [numero];
    const sql = `insert into tbl_telefono
                (numero)
                values
                ($1) returning *`
    const result = await db.query(sql,params);
    res.json(result);
}

const postTelefono = async (req,res)=>{

    const{numero} = req.body;
    const {id} = req.params;
    const params = [numero, id]

    const sql = `update tbl_telefono
                set
                numero = $1
                where id = $2 returning *`
    
    const result = await db.query(sql, params);
    res.json(result);
}

const deleteTelefono = async (res,req)=>{
    const params = [req.params.id];
    const sql = `delete from tbl_telefono where id = $1`;
    const result = await db.query(sql, params);
    res.json(result)
}

export { getTelefono }
export {putTelefono}
export {postTelefono}
export {deleteTelefono}