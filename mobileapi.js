const exp= require('express');
const api= exp();
const cors= require('cors');

const db=require('./db3');

api.use(exp.json());
api.use(cors());


api.listen(5000,()=>{
    console.log("server started at 5001")
})

api.get(`/getmobile`,(req,res)=>{
    db.get(req.body.id)
    .then((data)=>{
        res.send(data);
    }) 
    .catch((err)=>{
        res.send(err);
    })
})
api.post('/postMobile',(req,res)=>{
    db.insert(req.body.name,req.body.price,req.body.ram,req.body.storage).then((mobiles)=>{
        res.send(mobiles);
    })
    .catch((err)=>{
        res.send(err);
    })
})
api.put('/putmobile',(req,res)=>{
    db.update(req.body.name,req.body.price,req.body.ram,req.body.storage,req.body.id)
    .then((mobiles)=>{
        res.send(mobiles);
    })
    .catch((err)=>{
        res.send(err);
    })
   
})
api.delete('/deletemobile/:id',(req,res)=>{
    db.Delete(req.params['id']).then((mobile)=>{
        res.send(mobile)
    })
    .catch((err)=>{
        res.send(err);
    })
    
})