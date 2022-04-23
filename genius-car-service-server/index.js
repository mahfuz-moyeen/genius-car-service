const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const { send } = require('express/lib/response');
const ObjectId = require('mongodb').ObjectId;


const app = express();
const port = process.env.PROT || 5000;

// middleware
app.use(express.json());
app.use(cors());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.irqio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log('mongo db runinng');
//   // perform actions on the collection object
//   client.close();
// });

async function run() {
    try {
        await client.connect();
        const servicesCollection = client.db("genius-car").collection("services");
        // get all services
        app.get('/service', async (req, res) => {
            const query = {}
            const cursor = servicesCollection.find(query)
            const services = await cursor.toArray();
            res.send(services)
        })

        // get service by id
        app.get('/service/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: ObjectId(id) }
            const service = await servicesCollection.findOne(query)
            res.send(service);
        })

        //post 
        app.post('/service', async (req, res) => {
            const newService = req.body
            const result = await servicesCollection.insertOne(newService)
            res.send(result)
        })

        //delete service 
        app.delete('/service/:id', async (req, res) => {
            const id = req.params.id
            const query = {_id: ObjectId(id)}
            const result = await servicesCollection.deleteOne(query)
            res.send(result)
        })
    }
    finally {

    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('running port');
})

app.listen(port, () => {
    console.log('listening to port', port);
})