-- Active: 1705978756250@@127.0.0.1@5432@postgres

create table tbl_animal 
(
    id serial PRIMARY KEY,
    nombre varchar(250), 
    sonido varchar(20)
);

create table tbl_personas
(
    id serial PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    fecha DATE
);

CREATE TABLE tbl_telefono
(
    id serial PRIMARY KEY,
    numero INT,
    id_persona INT REFERENCES tbl_personas(id)
);


select * from tbl_animal;