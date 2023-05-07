// Load express
const express = require('express');
const port = 3000;


// Instantiate express
const app = express();


// Homepage (get "/"), users should see: "99 Bottles of beer on the wall", a link that says "take one down, pass it around". This should link to /98, where the number represents the number of bottles left. 

// Home
app.get('/', (req, res) => {
    res.send(`
        <h1>99 Bottles of beer🍺 on the wall🧱</h1>
        <button><a href="/98">take one down, pass it around</a></button>
    `);
});

//When a number is given in the url (get "/:number_of_bottles"), users should see:a) The number of bottles of beer on the wall (i.e. 98 Bottles of beer on the wall.)
//a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.

//Bottles
app.get('/:number_of_bottles', (req, res) => {

    const numOfBottles = req.params.number_of_bottles;

    //Conditional
    if(numOfBottles > 0) {
        const minusBottle = `/${numOfBottles - 1}`;
        const removeBottleLink =  `<a href="${minusBottle}">take one down, pass it around</a>`;
        // Send back to the client(the browser) 
        res.send(`
            <h1>${numOfBottles} bottles of beer on the wall</h1>
            <button>${removeBottleLink}</button>
         `)
        }

    // If there are 0 bottles left, do not show a link to "take one down". Add a link to start over, which directs the user back to the home page.
    else {
        // Send back to the client(the browser) 
        res.send(`
        <h1>Sorry bud😞, no more bottles of beer left❌🍺</h1>
        <br>
        <button><a href="/">Start Over</a></button>
        `)};  
});


//Express is listening
app.listen(port, () => {
    console.log(`Listening on port, ${port}`);
}) 