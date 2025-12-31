import mongoose from "mongoose";
import User from "./user.js"; 

async function seedUsers() {
  try {
    await mongoose.connect(
      "mongodb+srv://Shanmukh:Shannu%40123@shannmukhbackend.yq7toz4.mongodb.net/testDB"
    );

    console.log("MongoDB connected");

    const users = [
      { name: "User1", email: "user1@gmail.com", age: 20 },
      { name: "User2", email: "user2@gmail.com", age: 21 },
      { name: "User3", email: "user3@gmail.com", age: 22 },
      { name: "User4", email: "user4@gmail.com", age: 23 },
      { name: "User5", email: "user5@gmail.com", age: 24 },
      { name: "User6", email: "user6@gmail.com", age: 25 },
      { name: "User7", email: "user7@gmail.com", age: 26 },
      { name: "User8", email: "user8@gmail.com", age: 27 },
      { name: "User9", email: "user9@gmail.com", age: 28 },
      { name: "User10", email: "user10@gmail.com", age: 29 },

      { name: "User11", email: "user11@gmail.com", age: 30 },
      { name: "User12", email: "user12@gmail.com", age: 31 },
      { name: "User13", email: "user13@gmail.com", age: 32 },
      { name: "User14", email: "user14@gmail.com", age: 33 },
      { name: "User15", email: "user15@gmail.com", age: 34 },
      { name: "User16", email: "user16@gmail.com", age: 35 },
      { name: "User17", email: "user17@gmail.com", age: 36 },
      { name: "User18", email: "user18@gmail.com", age: 37 },
      { name: "User19", email: "user19@gmail.com", age: 38 },
      { name: "User20", email: "user20@gmail.com", age: 39 }
    ];

    await User.insertMany(users);

    console.log("✅ 20 users inserted successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Error inserting users:", err);
    process.exit(1);
  }
}

seedUsers();
