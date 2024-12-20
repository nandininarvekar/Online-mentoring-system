DELIMITER $$
CREATE PROCEDURE login(in prn int ,in pwd int)
begin
select Mentee_PRN ,Mentee_password from mentee where Mentee_PRN = prn and Mentee_password
=pwd;
end $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE login_admin(in username varchar(20) ,in pwd varchar(20))
begin
select admin_username ,admin_password from admin where admin_username = username and
Admin_Password =pwd;
end $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE login_mentor(in username varchar(20) ,in pwd varchar(20))
begin
select mentor_id ,men_Password from mentor where mentor_id = username and men_Password =pwd;
end $$
DELIMITER ;

DELIMITER $$