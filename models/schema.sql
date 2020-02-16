drop database if exists users_db;
create database users_db;

use users_db;

create table users (
  id int not null AUTO_INCREMENT,
  email varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  primary key (id)
);
