create table Admin
(
Admin_Username Varchar(20) unique,
Admin_Name Varchar(20) NOT NULL,
Admin_Email Varchar(60) Unique NOT NULL ,
Admin_Password Varchar(20) NOT NULL
);

create table Mentor
(
Mentor_id VARCHAR(20) PRIMARY KEY,
Men_Name VARCHAR(20) NOT NULL,
Men_PhoneNo bigint UNIQUE,
Men_emailid VARCHAR(40) NOT NULL UNIQUE,
Men_Password VARCHAR(20) NOT NULL,
Men_DOB DATE NOT NULL,
Head VARCHAR(20) ,
Admin_Username Varchar(20) NOT NULL,
foreign key(Admin_Username) references Admin(Admin_Username),
foreign key(Head) references Mentor(Mentor_id)
);

create table Mentee (
Mentee_PRN VARCHAR(20) PRIMARY KEY,
Mentee_Name VARCHAR(20) NOT NULL,
Mentee_Email VARCHAR(40) NOT NULL,
Mentee_password VARCHAR(20) NOT NULL,
Mentee_DOB DATE NOT NULL,
Mentee_phone_no bigint ,
Admin_username varchar(20) not null,
Foreign key (Admin_username) references Admin(Admin_Username)
);

create table Sub_Mentor
(
Mentor_id varchar(50) not null unique primary key,
Men_Sub varchar(50) not null,
foreign key(Mentor_id) references Mentor(Mentor_id)
);
insert into Sub_Mentor values("M101","Mathematics");
insert into Sub_Mentor values("M103","Applied Mechanics");
insert into Sub_Mentor values("M104","Theory Of Computation");
insert into Sub_Mentor values("M102","Data Structures");
insert into Sub_Mentor values("M311","Artificial Intelligence");
insert into Sub_Mentor values("M507","Software Modeling ");

Create Table Counsellor
(
Mentor_id varchar(20) not null Primary Key,
MH_type varchar(20)not null,
foreign key(Mentor_id) references Mentor(Mentor_id)
);
insert into Counsellor values("M789","Behavioral therapy");
insert into Counsellor values("M127","Cognitive therapy");insert into Counsellor values("M128","Supportive therapy");
insert into Counsellor values("M129","Humanistic therapy");
insert into Counsellor values("M130","Supportive therapy");
select * from sub_mentor;

create table mentoring
(
Mentor_id Varchar(20),
Mentee_id varchar(20),
Meeting_Time datetime,
foreign key (Mentor_id) references Mentor(Mentor_id),
foreign key(Mentee_id) references Mentee(Mentee_PRN),
primary key(Mentor_id, Mentee_id)
);
create table askhelp(
admin_username varchar(20),
mentee_prn varchar(20),
foreign key (mentee_prn) references mentee(Mentee_PRN),
foreign key (admin_username) references admin(Admin_Username),
Primary key (admin_username,mentee_prn)
);
create table mh_assign(
admin_username varchar(20),
mentee_prn varchar(20) ,
mentor_id varchar(20) ,
primary key (admin_username,mentee_prn )
);