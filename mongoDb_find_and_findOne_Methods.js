const express = require("express");

const app = express();
const port = process.env.port || 3000;




const cors = require('cors');
// cors 
app.use(cors())
app.use(express.json())




const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://Explore-MongoDB-Advanced:3GUAcnbqC6btFvuU@cluster0.iono61s.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();


    const productsCollection = client.db("productsDB").collection("products")





    app.get("/", (req, res) => {
      res.send("server is running")
    })



    //get all data



    // app.get("/products",async(req,res)=>{         
    //     const cursor = productsCollection.find();   //ak bare data ase nh
    //     const products = await cursor.toArray();
    //     res.send(products)
    // })







    //filter by name




    // app.get("/products",async(req,res)=>{                                         
    //   const query ={name:"Tonal"}
    //     const cursor = productsCollection.find(query);   //ak bare data ase nh
    //     const products = await cursor.toArray();
    //     res.send(products)
    // })








    //find only spacifiq property in object


    // app.get("/products",async(req,res)=>{                                         
    //   const query ={name:"Tonal"}
    //     const cursor = productsCollection.find(query).project({name:1,price:0,_id:0,category:1})
    //     const products = await cursor.toArray();
    //     res.send(products)
    // })




    //  Sort By price  


    app.get("/products", async (req, res) => {
      const cursor = productsCollection.find().sort({ price: -1 }).skip(5).limit(2)    //1 big to small //-1 small to big
      const products = await cursor.toArray();
      res.send(products)
    })






    //get single product


    // app.get("/products/:id",async(req,res)=>{
    //                 const id = req.params.id
    //                 const query = {_id:new ObjectId(id)}
    //                 const product =await productsCollection.findOne(query)
    //                 res.send(product)
    // })   






    // get single data with spacifiq property

    app.get("/products/:id", async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) };

      const product = await productsCollection.findOne(query, { projection: { name: 1, price: 1, _id: 0, category: 1 } })
      res.send(product)
    })












































































    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);










































app.listen(port, () => {
  console.log(`this server running on ${port}`);
})