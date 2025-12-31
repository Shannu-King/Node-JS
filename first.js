// // server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// // Use body-parser middleware to parse form data
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve the HTML form
// app.get('/', (req, res) => {
//     res.send(`
//         <h2>Enter Your Information</h2>
//         <form action="/submit" method="POST">
//             <label for="name">Name:</label>
//             <input type="text" id="name" name="name" required><br><br>

//             <label for="email">Email:</label>
//             <input type="email" id="email" name="email" required><br><br>

//             <label for="age">Age:</label>
//             <input type="number" id="age" name="age" required><br><br>

//             <button type="submit">Submit</button>
//         </form>
//     `);
// });

// // Handle form submission
// app.post('/submit', (req, res) => {
//     const { name, email, age } = req.body;
//     res.send(`
//         <h3>Form Data Submitted</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Age:</strong> ${age}</p>
//     `);
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
const add=(a,b)=> {return a+b;
}
const sub=(a,b)=> {return a-b;
}
const mul=(a,b)=> {return a*b;
}
const div=(a,b)=> {
    if(b===0)
        return "Mate You are not allowed To divide any number with Zero!"
    return a/b;
}
module.exports={
    add:add,
    sub:sub,
    mul:mul,
    div,div
};