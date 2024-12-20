CREATE PROCEDURE insert_mentee(in prn int ,in name varchar(20) ,in email varchar(20),in pwd
varchar(20) , in dob date , in Pnumber bigint)
begin
declare admin_u varchar(20);
SELECT admin_username into admin_u FROM admin ORDER BY RAND ( ) limit 1 ;
INSERT INTO mentee VALUES (prn, name ,email, pwd,dob, Pnumber,admin_u);
call assign(prn,admin_u);
end $$
DELIMITER ;

delimiter //
create procedure assign(in prn varchar(20), in admin_ varchar(20))
begin
declare mentorid varchar(20);
declare nos int;
maxlabel: loop
select sub_mentor.mentor_id into mentorid from mentor inner join sub_mentor on (mentor.Mentor_id =
sub_mentor.Mentor_id)
where Admin_Username = admin_ order by rand() limit 1;
select count(mentee_id) into nos from mentoring where Mentor_id = mentorid;
if nos <= 7 then
leave maxlabel;
else
iterate maxlabel;
end if;
end loop;
insert into mentoring (Mentor_id, Mentee_id) values (mentorid, prn);
end
//
delimiter ;
