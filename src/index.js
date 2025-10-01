import "dotenv/config";
import connectDB from "./db/index.js";
import {app} from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on Port: ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("ERR:", error);
      throw error;
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed !!!", error);
  });
