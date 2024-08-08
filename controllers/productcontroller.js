const moongoose= require("mongoose");
const productcollection = require("../models/ProductsSchema");
const productcontroller = async (req, res) => {
    // res.send('<h1>fashiontrends</h1>');
    try{
        const {id,category,name,subcategory}=req.params;
        let products;
        if (category){
            const searchcategory = category.toLowerCase();
            products = await productcollection.find({category:{$regex:new RegExp(searchcategory,"i")}})
        console.log("category")
        }
        else if (name){
            const searchname = name.toLowerCase();
            products = await productcollection.find(
                {name:{$regex:new RegExp(searchname,"i")}})
       }
       else if (req.path.includes("/random")){
        products = await productcollection.aggregate([
            {$sample:{
                size : 9,
            },
        }
         
    ]);
    
   }
   else if (req.path.includes("/top-rated")){
    products = await productcollection.find().sort({rating : -1}).limit(9);

}
else if (req.path.includes("/lowtohigh")){
    products = await productcollection.find().sort({new_price : 1}).limit(9);

}
else if (req.path.includes("/hightolow")){
    products = await productcollection.find().sort({new_price : -1}).limit(9);

}
       else if (subcategory){
        const searchsubcategory = subcategory.toLowerCase();
        products = await productcollection.find(
            {
            sub_category:{$regex:new RegExp(searchsubcategory,"i")}})
   }

   else if (name){
    const searchname = category.toLowerCase();
    products = await productcollection.find(
        {
            name:{$regex:new RegExp(searchname,"i")}})
}

else if (id){
   products = await productcollection.find({
    _id:id
   })
}

        else{
             products = await productcollection.find();
          
            console.log(`working`)
        }

        if(!products || products.length === 0)
            return res.status(404).send({message : "Product not found"});
        res.status(200).send(products);

    }
   
     catch (error) {
        res.status(504).send({
            message:"error fetching products"
        });  
        console.log(`Error occurred : ${error}`)
    }
    
};


module.exports = productcontroller;
