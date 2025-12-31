import express from "express";
import mongoose from "mongoose";
import userSchema from "./user.js";

const app = express();
app.use(express.json()); 


await mongoose.connect("mongodb+srv://Shanmukh:Shannu%40123@shannmukhbackend.yq7toz4.mongodb.net/testDB"

);

console.log("MongoDB connected");


app.put("/users/update/:id", async (req, res) => {
  try {
     console.log("Update hit", req.params.id, req.body);
    const { id } = req.params;
    const data = req.body;

    const updatedUser = await userSchema.findByIdAndUpdate(
     id,
      data,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Student Updated",
      user: updatedUser
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
await userSchema.deleteMany({});

const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("DATABASE.JS FILE IS RUNNING");

});
