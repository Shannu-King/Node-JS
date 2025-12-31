const fs = require('fs');

try {
    // Write file
    fs.writeFileSync('Shannu.txt', 'This is shannu file');
    console.log("data written successfully");

    // Read file
    let data = fs.readFileSync('Shannu.txt', 'utf8');
    console.log(data);

    // Append text
    fs.appendFileSync('Shannu.txt', ' This is appended text into shannu file');
    console.log("data appended successfully");

    // Read again
    data = fs.readFileSync('Shannu.txt', 'utf8');
    console.log(data);

} catch (err) {
    console.error("Error:", err);
}
