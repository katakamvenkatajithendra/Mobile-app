const db=require('mysql2');
const data=db.createConnection({
    host:'localhost',
    user:'root',
    password:'Jithendra@1',
    database:'mobiles'
})
function get(id){
    return new Promise((success,reject)=>{
        if(id){
            data.query(`select * from mobilesdata where id=?`,[id],(err,row,col)=>{
                if(err){
                    reject(err);
                }else{
                    success(row);
                }
            })
        } 
        else{
            data.query(`select * from mobilesdata`,(err,row,col)=>{
                if(err){
                    reject(err);
                }else{
                    success(row);
                }
            })
        }

       
    })
}
function insert(n,p,r,s){
    return new Promise((success,reject)=>{
        data.query(`Insert into mobilesdata (name,price,ram,storage)  values (?,?,?,?)`,[n,p,r,s],(err,res)=>{
            if(err){
                reject(err);
            }else{
                success(res);
            }
        })
    }) 
}
function update(name,price,ram,storage,id){
    return new Promise((success,reject)=>{
        data.query(`Update mobilesdata set name=?,price=?,ram=?,storage=? where id=?`,[name,price,ram,storage,id],(err,res)=>{
            if(err){
                reject(err);
            }
            else{
                success(res);
            }
        })
    })
}
function Delete(id){
    return new Promise((success,reject)=>{
        data.query(`delete from mobilesdata where id=?`,[id],(err,res)=>{
            if(err){
                reject(err);
            }else{
                success(res);
            }
        })
    })
}

//update('realme 9',18000,'16gb','128gb',1);
//insert('realme',20000,'8gb','128gb');
//get();
//Delete(2);
module.exports={
    get,insert,update,Delete
}