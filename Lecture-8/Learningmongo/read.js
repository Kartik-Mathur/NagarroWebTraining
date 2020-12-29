const {MongoClient} = require('mongodb')
const DB_URL = 'mongodb://localhost:27017'

MongoClient.connect(DB_URL,(err,client)=>{
    if(err) throw err
    // Create a database
    const testdb = client.db('testdb')
    // console.log(testdb)
    
    // Create a collection inside database
    const people =  testdb.collection('people')
    people.find({
        $and :[
            {
                age:{
                    // $eq:21
                    $lt:20
                }
            },
            {
                city:'Delhi'
            }
        ]
        })
          .toArray((err,result)=>{
        if(err) throw err
        console.log(result)
    })
    // console.log("Data : ")
    // let cursor = await people.find({})
    // let counter = 0
    // cursor.skip(10)
    // while(await cursor.hasNext() && counter<4){
    //     // console.log(counter)
    //     console.log(await cursor.next())
    //     counter++
    //     // let val = cursor.next()
    //     // console.log(val)
    // }

    client.close()
})