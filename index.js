import * as sqlite from 'sqlite'
import sqlite3 from 'sqlite3'


// start here
import express from 'express'

const app = express();
const PORT = process.env.PORT || 3000;

//

// get all the greetings

app.get('/api/greetings', (req,res) => {
  const greetings = await getGreetings();
  console.log(greetings);
  res.json( {
    greetings
  })
});

// create a route to add a greeting
// ?

app.listen(PORT, () => console.log(`started on  port : ${PORT}` ))

// end here...






console.log('start')

const db = await sqlite.open({
    filename: './101.db', 
    driver: sqlite3.Database
});


// create a function that returns all the greetings
async function getGreetings() {
  const result = await db.all('select * from greetings');
  return result;
}
      
  const result = await getGreetings()

  console.log(result)


// create a function that delete a specific greeting


async function updateGreeting(language, greeting, id) {
  //
  const sql = 'update greetings set language id = ?, greeting = ? where id =?';
  await db.run(sql, [language, greeting, id]);
}

const result1 = await getGreetings()
console.log(result1);

console.log('=============')

await updatedGreeting('zulu', 'unjani', 2);

console.log('=============')

const result2 = await getGreetings()
console.log(result2);

// create a function that adds a new greeting








//call the query using a promse
//db
  //.all('select * from greetings')
  //.then(result => {
   // console.log(result)
  //})

  //const countResult = await db.get('select count(*) as count from greetings')

 // console.log(countResult.count);

//console.log(result);

//console.log('end')