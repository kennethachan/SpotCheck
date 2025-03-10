// const express = require("express")
// const app = express()
// const cors = require("cors")

// const AppRouter = require("./routes/AppRouter")

// const PORT = process.env.PORT || 3001

// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// app.get("/", (req, res) => res.json({ message: "Server Works" }))
// app.use("/api", AppRouter)
// app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))






const express = require("express");
const cors = require("cors");
const app = express();

const AppRouter = require("./routes/AppRouter");

const PORT = process.env.PORT || 3001;

// CORS configuration to allow only your frontend domain
const corsOptions = {
  origin: "https://spotchecknyc.onrender.com", // Replace with your actual frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Adjust as needed
  allowedHeaders: ["Content-Type", "Authorization"], // Adjust as needed
};

app.use(cors(corsOptions)); // Use the CORS middleware with the configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.json({ message: "Server Works" }));
app.use("/api", AppRouter);

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
