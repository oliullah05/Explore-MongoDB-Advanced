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



        // route parameter
        app.get("/users/:id", async (req, res) => {
            const id = req.params.id;
            const query = {_id:new ObjectId(id)}
            const cursor =await productsCollection.findOne(query);  
            res.send(cursor)
        })




      //   query parameter

      app.get("/usersQuery", async (req, res) => {
     // http://localhost:3000/usersQuery?email="mdolihasan"    //one query 

       const query = req.query;                                         ///output  : { email: '"mdolihasan"' }
       const getEmail = req.query.email ;                                   ///output  : mdolihasan
        let filter ={};
        if(getEmail){
            filter={
                email:req.query.email
            }
        }
       const result = await productsCollection.find(filter).toArray()  
       res.send(result)
    })




    //   query parameter double condition

      app.get("/usersQueryDouble", async (req, res) => {
     //   http://localhost:3000/usersQueryDouble?name=Oliullah&email=oli.bhuiyan05@gmail.com    //double query 


       const query = req.query;                                         ///output  : { email: '"mdolihasan"' }
       const getEmail = req.query.email ;
       const getName = req.query.name;                                   ///output  : mdolihasan
        let filter ={};
        if(getEmail && getName){
            filter={   //if name and email both avaiable then this will show their data only
                email:req.query.email,
                name: req.query.name
            }
        }
        console.log(query);
       const result = await productsCollection.find(filter).toArray()  
       res.send(result)
    })






    
    //   query parameter double+single condition

      app.get("/usersQueryDouble", async (req, res) => {
     //   http://localhost:3000/usersQueryDouble?name=Oliullah&email=oli.bhuiyan05@gmail.com    //double query 


       const query = req.query;                                         ///output  : { email: '"mdolihasan"' }
       const getEmail = req.query.email ;
       const getName = req.query.name;                                   ///output  : mdolihasan
        let filter ={};
        if(getEmail && getName){
            filter={   //if name and email both avaiable then this will show their data only
                email:req.query.email,
                name: req.query.name
            }
        }
        console.log(query);
       const result = await productsCollection.find(filter).toArray()  
       res.send(result)
    })







    //   query parameter Triple condition

      app.get("/usersQueryTriple", async (req, res) => {
     //   http://localhost:3000/usersQueryDouble?name=Oliullah&email=oli.bhuiyan05@gmail.com    //double query 


       const query = req.query;                                         ///output  : { email: '"mdolihasan"' }
       const getEmail = req.query.email ;
       const getName = req.query.name;                                   ///output  : mdolihasan
        let filter ={};
        if(getEmail && getName){
            filter={   //if name and email both avaiable then this will show their data only
                email:req.query.email,
                name: req.query.name
            }
        }
        else if (getEmail) {       // when only email is avaiable
            filter ={
                email:getEmail
            }
        }

        else{
            filter ={ // when only name is avaiable
                name:getName
            }     
        }






        console.log(query);
       const result = await productsCollection.find(filter).toArray()  
       res.send(result)
    })







    //   query parameter double+single condition

      app.get("/usersQueryDouble", async (req, res) => {
     //   http://localhost:3000/usersQueryDouble?name=Oliullah&email=oli.bhuiyan05@gmail.com    //double query 


       const query = req.query;                                         ///output  : { email: '"mdolihasan"' }
       const getEmail = req.query.email ;
       const getName = req.query.name;                                   ///output  : mdolihasan
        let filter ={};
        if(getEmail && getName){
            filter={   //if name and email both avaiable then this will show their data only
                email:req.query.email,
                name: req.query.name
            }
        }
        console.log(query);
       const result = await productsCollection.find(filter).toArray()  
       res.send(result)
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