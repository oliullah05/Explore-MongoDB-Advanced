const express = require("express");

const app = express();
const port = process.env.port || 3000;
const cors = require('cors');





// middle
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


        const productsCollection = client.db("productsDB").collection("users")





        app.get("/", (req, res) => {
            res.send("server is running")
        })



        //get all data



        app.get("/users", async (req, res) => {
            const data = req.body;
            // console.log(data);     
            const cursor = productsCollection.find();   //ak bare data ase nh
            const products = await cursor.toArray();
            res.send(products)
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