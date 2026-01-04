 products = [
  { id: 1, name: "apple", price: 5 },
  { id: 2, name: "banana", price: 3 },
  { id: 3, name: "orange", price: 4 }
]
exports.lll=(req,res)=>{
    const id=Number(req.params.id)
    const name=req.body.name
    const aaa=products.find(p=>p.id===id)
    if(!aaa){
        return res.json({message:'not found'})
    }
    aaa.name=name
    res.json(aaa)
}