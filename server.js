const express = require("express")
const app = express()
const cors = require("cors")

const AppRouter = require("./routes/AppRouter")

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => res.json({ message: "Server Works" }))
app.use("/api", AppRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))



// const express = require("express");
// const path = require("path");
// const cors = require("cors");

// const AppRouter = require("./routes/AppRouter");

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve static React files
// app.use(express.static(path.join(__dirname, "client/build")));

// // API routes
// app.use("/api", AppRouter);

// // Catch-all route for React client-side routing
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build", "index.html"));
// });

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
