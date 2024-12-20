const express = require("express");
const app = express();
const port = process.env.PORT || 4500;


const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database   :'om',
    port : 3306
  },{multipleStatements: true});
  
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(express.json());


var prn = 0;
var a_username ='';
var mentor_id='';
var homeStartingContent = "welcome to online mentoring system";
app.get("/",function(req,res){
    res.render("home",{hsc : homeStartingContent});
});
app.get("/login_mentee",function(req,res){
    res.render("login_mentee");
    
});
app.get("/signup",function(req,res){
    res.render("signup");
});
app.get("/login_mentor",function(req,res){
    res.render("login_mentor");
});
app.get("/admin_login",function(req,res){
    res.render("admin_login");
});
app.get("/admin",function(req,res){
  const data =[];
  con.connect(function(err) {
        if (err) throw err;
         console.log("Connected!");
         con.query('Select admin_username , admin_name from admin where admin_username = ?',[a_username],function (err,row1) {
             if (err) throw err;
             console.log(data);
             data.push(row1);
             

             con.query('select mentee_prn, mentee_name from mentee where admin_username = ?',[a_username], function (err,row1) {
              if (err) throw err;
              console.log(data);
              data.push(row1);
            

              con.query('select m.Admin_username ,Count(m.Admin_username) as count from mentee m inner join admin a where m.Admin_Username = ? Group by a.Admin_username ;',[a_username], function (err,row1) {
                
                data.push(row1);
                console.log(data);

                   con.query('select m.mentor_id ,m. men_name ,s.men_sub from mentor m  inner join Sub_mentor s where m.mentor_id = s.mentor_id and m.admin_username = ? ;',[a_username], function (err,row1) {
                    data.push(row1);
                     console.log(data);


                    con.query('select m.mentor_id, m.men_name , c.MH_type from mentor m  inner join Counsellor c where m.mentor_id = c.mentor_id and m.admin_username = ? ;',[a_username], function (err,row1) {
                      if (err) throw err;
                      console.log(data);
                      data.push(row1);
                       console.log(data);
                      res.render("admin", { row1 : data });
                 
                    
                  
                
                   });
               
                  
                
              
                 });
            
               });

  
             });
        
      });
    });
  });

app.get("/mentor_signup",function(req,res)
{
      res.render("mentor_signup");

});
app.get("/assign_mh",function(req,res)
{
  const data =[];
   con.connect(function(err) {
    if (err) throw err;
     console.log("Connected!");
     con.query('Select a.mentee_prn from askhelp a inner join mentee m on(m.mentee_prn = a.mentee_prn ) where m.admin_username = ? ',[a_username],function (err,row) {
        
       data.push(row);
       con.query('select men_name ,c.Mentor_id, c.MH_type from mentor m  inner join Counsellor c where m.mentor_id = c.mentor_id and m.admin_username = ? ;',[a_username], function (err,row) {
        if (err) throw err;
        data.push(row);
         console.log(data);

         
        res.render("assign_mh", { data : data });
   
      
    
  
     });
        
       
       
    });
  });

});
app.get("/mentee",function(req,res){
  const d=[];
    con.connect(function(err) {
        if (err) throw err;
         console.log("Connected!");
         con.query('Select Mentee_Prn , Mentee_Name from mentee where Mentee_Prn = ?',[prn], function (err,data) {
           d.push(data);    
           console.log(data);                

        con.query('Select mh.Mentor_id , m.Men_name from mh_assign mh inner join mentor m on(mh.mentor_id = m.mentor_id) where mh.mentee_prn = ?',[prn], function (err,data) {
          
         d.push(data);
         console.log(data);
         
         con.query('Select mt.Mentor_id,mt.Meeting_Time, mt.link, m.Men_name from mentoring mt inner join mentor m on(mt.mentor_id = m.mentor_id) where mt.mentee_id = ?',[prn], function (err,data) {
          
          d.push(data);
          console.log(data);
          res.render("mentee", { data : d });

          
         
         
 
        });
        
        

       });
      
     });
   });

   
});
app.get("/mentor",function(req,res){
  const data =[];
  con.connect(function(err) {
    if (err) throw err;
     console.log("Connected!");
     con.query('Select Men_name ,admin_username from mentor where Mentor_id = ?',[mentor_id],function (err,row1) {
         if (err) throw err;
         console.log(data);
         data.push(row1);
         //res.render("admin", { row1 : row1 });

         con.query('select mentoring.mentee_id, mentee.mentee_name,mentee.Mentee_phone_no,mentoring.meeting_time,mentoring.link from mentoring inner join mentee on mentoring.mentee_id = mentee.mentee_prn where mentoring.mentor_id= ?;',[mentor_id],function (err,row1) {
          if (err) throw err;
          data.push(row1);
          console.log(data);
         

          con.query('select Mentee_id, Meeting_Time , link from mentoring where Mentor_id = ?;',[mentor_id], function (err,row1) {
            if (err) throw err;
          else{
           console.log("insert is successful!!");
          }
          data.push(row1);
         
          console.log(row1);
          res.render("mentor", { row : data });
  
        
        });



         });
    
  });
});


});
 
app.post("/askhelp",function(req,res)
{
    var au =req.body.admin_uname;
    var mid =req.body.mentee_id;
    con.connect(function(err) {
      if (err) throw err;
       console.log("Connected!");
          con.query('insert into askhelp(admin_username,mentee_prn) values(?,?);',[au,mid], function (err) {
   
     res.redirect("/mentor");
     });
    });



});
app.post("/schedule",function(req,res){
  var time = req.body.time;
  var link = req.body.link;
  var m_id = req.body.m_id;
  con.connect(function(err) {
    if (err) throw err;
     console.log("Connected!");
        con.query('UPDATE mentoring set Meeting_Time = ?, link = ? where Mentor_id = ? and Mentee_id =? ;',[time,link,mentor_id,m_id], function (err) {
          if (err) throw err;
        else{
         console.log("insert is successful!!");
        }
 
  res.redirect("/mentor");
   });
    
});
});

 app.post("/assign_mh",function(req,res){
       var mentee_prn = req.body.Mentee_prn;
       var mh_mentor_id =req.body.mh_Mentor_id;

       con.connect(function(err) {
        if (err) throw err;
         console.log("Connected!");
            con.query('delete from askhelp where admin_username= ? and Mentee_prn= ?;',[a_username,mentee_prn], function (err) {
              if (err) throw err;
            else{
             console.log("insert is successful!!");
            }
            
            con.query('update mh_assign set mentor_id =? where admin_username =? and mentee_prn =?;',[mh_mentor_id,a_username,mentee_prn], function (err) {
              if (err) throw err;
            else{
             console.log("insert is successful!!");
            }
            res.redirect("/assign_mh");
          });
            
       });


 }) ;
}) ;
app.get("/insert_sub_mentor",function(req,res){
  res.render("insert_sub_mentor");


} );
app.post("/register_submen",function(req,res){
  var mentor_id =req.body.mentor_id;
  var subject = req.body.Men_Sub;

  con.connect(function(err) {
    if (err) throw err;
     console.log("Connected!");
        con.query('insert into Sub_Mentor values(?,?);',[mentor_id,subject], function (err) {
        console.log(mentor_id,subject);
     res.redirect("/admin");
   });
  });

      
});
app.get("/insert_mhmen",function(req,res){
  res.render("insert_mhmentor");


} );
app.post("/register_mhmen",function(req,res){
  var mentor_id =req.body.Mentor_id;
  var type = req.body.MH_type;

  con.connect(function(err) {
    if (err) throw err;
     console.log("Connected!");
        con.query('insert into Counsellor values(?,?);',[mentor_id,type], function (err) {
 
     res.redirect("/admin");
   });
  });
      
});

app.post("/register",function(req,res){
  var prn =req.body.PRN;
  var name = req.body.Name;
  var pwd = req.body.password;
  var email = req.body.email;
  var dob = req.body.dob;
  var Pnumber = req.body.Pnumber;
  if (Pnumber === '')
  {
     Pnumber = "00000000";
  }
con.connect(function(err) {
       if (err) throw err;
        console.log("Connected!");
        con.query('CALL insert_mentee( ?,?,?,?,?,?) ',[prn,name,email,pwd,dob,Pnumber], function (err) {
            if (err) throw err;
       else{
           console.log("insert is successful!!");
       }
     
    });

     res.redirect("/");
  });

});
app.post("/register_mentor",function(req,res){
  var mentor_id =req.body.mentor_id;
  var name = req.body.Name;
  var pwd = req.body.password;
  var email = req.body.email;
  var dob = req.body.dob;
  var Pnumber = req.body.Pnumber;
  var Head = req.body.Head;
  var admin_username = req.body.Admin_username;
  if (Pnumber === '')
  {
     Pnumber = "00000000";
  }
con.connect(function(err) {
       if (err) throw err;
        console.log("Connected!");
        con.query('INSERT INTO mentor VALUES (?,?,?,?,?,?,?,?);',[mentor_id,name,Pnumber,email,pwd,dob,Head,admin_username], function (err) {
            if (err) throw err;
       else{
           console.log("insert is successful!!");
       }
     
    });

     res.redirect("/admin");
  });

});

app.post("/login_mentee",function(req,res){
  prn =req.body.PRN;
  var pwd = req.body.password;
  con.query('delimiter $$ create trigger insert_new_mentee after INSERT on mentee for each row begin insert into new_user(mentee_PRN)value (?); end $$ delimiter;',[prn], function (err) {
   
    con.query('CALL login( ?,?) ',[prn,pwd], function (err,row) {
      if (row[0].length > 0){
       res.redirect("/mentee");
      } 
      else if(row[0].length === 0){
        res.send("IT SEEMS YOU DONT HAVE AN ACCOUNT PLZZ SIGN UP !!! ");
      }
     
     
    });
   
  });    


});
app.post("/login_mentor",function(req,res){
  mentor_id =req.body.username;
  var pwd = req.body.password;
  
  con.query('CALL login_mentor( ?,?) ',[mentor_id,pwd], function (err,row) {
    if (row[0].length > 0){
     res.redirect("/mentor");
    } 
    else if(row[0].length === 0){
      res.send("PLzz try again !!! ");
    }
   
   
  });
      


});

app.post("/login_admin",function(req,res){
    a_username =req.body.username;
    var pwd = req.body.password;
    
    con.query('CALL login_admin( ?,?) ',[a_username,pwd], function (err,row) {
      if (row[0].length > 0){
       res.redirect("/admin");
      } 
      else if(row[0].length === 0){
        res.send("PLzz try again !!! ");
      }
     
     
    });
        
  
  
  });


app.listen(port,function(req,res){
    console.log("the server is on");
   });
