import app from "./app";
import { db } from "./config/db";

const PORT = 5001;

db.getConnection()
  .then(() => console.log("DB Connected ✅"))
  .catch((err) => console.error("DB Error ❌", err));
  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});