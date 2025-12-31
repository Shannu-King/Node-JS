// Data pools for randomization
const firstNames = ["Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Reyansh", "Ayaan", "Ananya", "Diya", "Saanvi", "Anya", "Myra", "Kiara"];
const lastNames = ["Sharma", "Verma", "Gupta", "Singh", "Kumar", "Patel", "Reddy", "Yadav", "Jain", "Mehta"];
const departments = ["Engineering", "Human Resources", "Marketing", "Sales", "Finance", "Product Management", "Support"];
const skillsPool = ["JavaScript", "Python", "Java", "MongoDB", "SQL", "React", "Node.js", "Project Management", "Communication", "Data Analysis", "Cloud Computing", "AWS", "Docker", "Git", "Agile", "Go"];

// Array to hold the generated documents
const employees = [];

// Loop to create 100 documents
for (let i = 0; i < 100; i++) {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
  // Shuffle skills and take a random number of them (2 to 5)
  const shuffledSkills = skillsPool.sort(() => 0.5 - Math.random());
  const skillCount = Math.floor(Math.random() * 4) + 2;
  const selectedSkills = shuffledSkills.slice(0, skillCount);

  employees.push({
    name: `${firstName} ${lastName}`,
    age: Math.floor(Math.random() * 41) + 22, // Age between 22 and 62
    dep: departments[Math.floor(Math.random() * departments.length)],
    skills: selectedSkills,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`, // Adding 'i' ensures unique email
    phone: `9${Math.floor(Math.random() * 1000000000).toString().padStart(9, '0')}` // Generates a 10-digit Indian-like mobile number
  });
}

// Insert the array of 100 documents into the 'employees' collection
db.employees.insertMany(employees);

// Optional: Print a confirmation message
console.log("Successfully inserted 100 documents into the 'employees' collection.");