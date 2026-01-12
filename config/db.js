// Database connection disabled - running in-memory or file-based
const connectDB = async () => {
  console.log("Database connection skipped (in-memory mode)");
};

module.exports = connectDB;
