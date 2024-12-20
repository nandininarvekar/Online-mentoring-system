DELIMITER //
create trigger del
before delete on askhelp
for each row
begin
insert into mh_assign(admin_username,Mentee_prn) values(old.admin_username,old.mentee_prn);
END //
delimiter ;