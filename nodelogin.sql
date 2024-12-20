con.connect();
 var sql_query="select * from admin";
con.query(sql_query,(error,results,fields)=>{
    if(error)
    {
        console.log(error.message);
    }
    else
    {
        console.log(results);
    }

});

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

create table Admin
(
Admin_Username Varchar(20) unique,
Admin_Name Varchar(20) NOT NULL,
Admin_Email Varchar(60) Unique NOT NULL ,
Admin_Password Varchar(20) NOT NULL
);

create table Mentee (
       Mentee_ID VARCHAR(20) PRIMARY KEY,
       Mentee_Name VARCHAR(20) NOT NULL,
       Mentee_Email VARCHAR(40) NOT NULL,
       Mentee_Username VARCHAR(20) NOT NULL,
       Mentee_password VARCHAR(20) NOT NULL,
       Mentee_DOB DATE NOT NULL,
       Mentee_phone_no integer,
       Admin_username varchar(20) not null,
       Foreign key (Admin_username) references Admin(Admin_Username)
);

create table Mentor
(
Mentor_id VARCHAR(20) PRIMARY KEY,
Men_Name VARCHAR(20) NOT NULL,
Men_Username VARCHAR(20) NOT NULL UNIQUE,
Men_PhoneNo INT UNIQUE,
Men_emailid VARCHAR(40) NOT NULL UNIQUE,
Men_Password VARCHAR(20) NOT NULL,
Men_DOB DATE NOT NULL,
Head VARCHAR(20) NOT NULL,
Get_report VARCHAR(20),
Admin_Username Varchar(20) NOT NULL,
foreign key(Admin_Username) references Admin(Admin_Username),
foreign key(Head) references Mentor(Mentor_id)
);



create table Sub_Mentor
(
Mentor_id varchar(20) not null unique primary key,
Men_Sub varchar(20) not null,
foreign key(Mentor_id) references Mentor(Mentor_id)
);

Create Table Counsellor
(
Mentor_id varchar(20) not null Primary Key,
foreign key(Mentor_id) references Mentor(Mentor_id)
);

create table Mentoring
(
Mentor_id varchar(20) not null,
Mentee_id varchar(20) not null,
Meeting_DT datetime,
attendance bool not null,
foreign key(Mentor_id) references Mentor(Mentor_id),
foreign key(Mentee_id) references Mentee(Mentee_ID),
primary key(Mentor_id,Mentee_id,Meeting_DT)
);


