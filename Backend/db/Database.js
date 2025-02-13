// Import the mongoose library
// Mongoose is a Node.js library used for interacting with a MongoDB database.
const mongoose = require("mongoose"); 

// Define the function to establish a connection to the MongoDB database
const connectDatabase = () => {
    mongoose
        // Connect to the database using the URL provided in the environment variables
        .connect(process.env.DB_URL) // No need to specify useNewUrlParser or useUnifiedTopology (handled automatically by mongoose)
        .then((data) => {
             
            console.log(`MongoDB connected with server: ${data.connection.host}`);
        })
        .catch((err) => {
           
            console.error(`Database connection failed: ${err.message}`);
            
             
            process.exit(1);  
        });
};

// Export the connectDatabase function
// This allows other parts of the application to use this function to establish a database connection
module.exports = connectDatabase;
