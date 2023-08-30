const db = require('../config')

class Cart{
    getCart(req,res){
        const query =`
        SELECT p.prodUrl,p.prodName,p.Price,c.prodQuantity
        FROM Products p
        JOIN Cart c USING(prodID)
        JOIN Users u USING(userID)
        WHERE c.userID =${req.params.id}
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }  
    cartUpdate(req,res){
        const query = `)
        UPDATE Cart
        SET prodQuantity = ?
        WHERE id= ${req.params.id1} AND useriID = ${req.params.id2} 
        `
        db.query(query,[req.body],(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg:"Pruduct successfully updated"
            })
        })
    }
    addToCart(req,res){
        const query =`
        INSERT INTO Cart
        SET userID= ${req.params.id}, prodID=? ,prodQuantity=?;
        `
        db.query(query,[req.body],(err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg:"Product added successfully"
            })
        })
    }
    deleteCartItem(req,res){
        const query =`
        DELETE FROM Cart
        WHERE id = ${req.params.id1} AND userID = ${req.params.id2}
        `
        db.query(query,(err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg:"This product has been deleted"
            })
        })
    }
    deleteCart(req,res){
        const query =`
        DELETE FROM Cart
        WHERE userID = ${req.params.id}
        `
        db.query(query,(err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg:"This product has been deleted"
            })
        })
    }

}

module.exports = Cart