const db = require('../config')
const {hash,compare,hashSync} = require('bcrypt')
const {tokenCreate} = require('../middleware/AuthenticateUser')

class Users{
    getUsers(req,res){
        const query =`
        SELECT userID, CONCAT(firstName,' ',lastName) 'Fullname',Age,
        Gender,userRole,emailAdd,userPwd,userImg
        FROM Users
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    getUser(req,res){
        const query =`
        SELECT userID, CONCAT(firstName,' ',lastName) 'Fullname',Age,
        Gender,userRole,emailAdd,userImg
        FROM Users
        WHERE userID = ${req.params.id}
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    updateUser(req,res){
        const dt = req.body
        if(dt.userPwd){
            dt.userPwd =hashSync(dt.userPwd,10)
        }
        const query = `
        UPDATE Users
        SET ?
        WHERE userID = ${req.params.id}
        `
        db.query(query,[dt],(err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg:"User record has been updated "
            })
        })
    }
    deleteUser(req,res){
        const query = `
        DELETE FROM Users
        WHERE userID = ${req.params.id}
        `
        db.query(query,(err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg:"User record has bee deleted"
            })
        })
    }
    async registerUser(req,res){
        const dt = req.body
      
        dt.userPwd =await hash(dt.userPwd,10)
        
        const payload ={
            emailAdd: dt.emailAdd,
            userPwd: dt.userPwd
        }
        const query = `
        INSERT INTO Users
        SET ?;
        `
        const token = tokenCreate(payload)
        db.query(query,[dt],(err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg:"You have signed up"
            })
        })
    }
  async loginUser(req,res){
        const {emailAdd,userPwd} = req.body
        const query =`
        SELECT CONCAT(firstName,'',lastName)'User Fullname',emailAdd,userPwd
        FROM Users
        WHERE emailAdd = ${emailAdd}
        `
        db.query(query,async(err,result)=>{
            if(err) throw err
            try{
            if (!result?.length) {
                res.json({
                    status:res.statusCode,
                    msg:"You have entered wrong email"
                }) 
            } else {
                await compare(userPwd,result[0].userPwd,(compErr,compResult)=>{
                    if(compErr) throw compErr

                    const token = tokenCreate({emailAdd,userPwd})
                    if (compResult) {
                        res.json({
                            status:res.statusCode,
                            token,
                            msg:"You are loged in"
                        })
                    } else {
                        res.json({
                            status: res.statusCode,
                            msg:"Incorrect password or would you like sign up"
                        })
                    }
                })
            }
            }catch(err){
            console.log(err)
        }
        })
        
    }

}
module.exports = Users
