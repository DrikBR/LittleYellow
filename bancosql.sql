create database LittleYellow;
use LittleYellow;

create table motorista (
cpfM varchar(15) primary key,
senhaM varchar(45) not null,
nomeM varchar(100) not null,
emailM varchar(100) not null
);

create table instituicao (
idI int auto_increment primary key,
nomeI varchar(50)
);

create table discente (
cpfD varchar(15) primary key,
senhaD varchar(45) not null,
nomeD varchar(45) not null,
emailD varchar(45) not null,

idI int auto_increment not null,
foreign key (idI) references instituicao (idI)
on update cascade
);

create table avaliacao (
idA int auto_increment primary key,
estrelas int not null,
AvEscrita varchar(500),

cpfM varchar(15) not null,
foreign key (cpfM) references motorista (cpfM)
on update cascade
);

create table frequencia (
idF int auto_increment,
turno varchar(45) not null,
dataF date not null,

cpfD varchar(15),
foreign key (cpfD) references discente (cpfD)
on update cascade,

primary key (cpfD, idF, dataF)
);

insert into instituicao (nomeI)
values ("IFBA"),
("CETEP"),
("Núbia");

use LittleYellow;
select * from motorista;
select * from discente;
select * from avaliacao;
SELECT * FROM discente;
SELECT * FROM instituicao;
SELECT * FROM frequencia;