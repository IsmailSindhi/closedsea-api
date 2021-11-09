const app = require('./app');
const connectMongoDB = require('./config/database')

process.on("uncaughtException", err => {
    console.log(`Errpr: ${err.message}`);
    console.log(`Shutting down server due to uncaught Exception}`);
    process.exit(1);
})

// Config
if (process.env.NOdDE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env"});
}

// connect to database
connectMongoDB();

const server = app.listen(process.env.PORT, ()=> {
    console.log(`Server is starting on http/localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
});