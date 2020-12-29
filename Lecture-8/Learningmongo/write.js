const {MongoClient} = require('mongodb')
const DB_URL = 'mongodb://localhost:27017'

MongoClient.connect(DB_URL,(err,client)=>{
    if(err) throw err
    // Create a database
    const testdb = client.db('testdb')
    // console.log(testdb)
    
    // Create a collection inside database
    const people = testdb.collection('people')
    // people.insertOne({
    //     name:'Aditya',
    //     age:20,
    //     city:'Delhi'
    // },(err,result)=>{
    //     if(err) throw err
    //     console.log(result)
    // })
    people.insertMany([
        {
            name:'Parul',
            age:21,
            city:'Delhi'
        },
        {
            name:'Shradha',
            age:26,
            city:'Amritsar'
        },
        {
            name:'Vikrant',
            age:15,
            city:'Delhi'
        },
        {
            name:'Riya',
            age:16,
            city:'Jharkand'
        }
    ],(err,result)=>{
        if(err) throw err
        console.log(result)
    })
})