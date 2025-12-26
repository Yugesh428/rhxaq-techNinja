# Task Manager Backend

This is the **backend** for the Task Manager application built using **Node.js, Express, TypeScript, and Sequelize**.  
It provides REST API endpoints for managing **Users, Projects, and Tasks**.

---

## 🛠 Tech Stack

- **Backend:** Node.js + Express  
- **Database:** MSSQL / PostgreSQL / MySQL (configurable in `.env`)  
- **ORM:** Sequelize + Sequelize-Typescript  
- **Language:** TypeScript  

---

## 📂 Project Structure

taskkmanagerBackend/
├─ controllers/
│ ├─ userController/userController.ts
│ ├─ projectController/projectController.ts
│ └─ taskController/taskController.ts
├─ models/
│ ├─ user/userModel.ts
│ ├─ project/projectModel.ts
│ └─ task/taskModel.ts
├─ routes/
│ ├─ userRoute.ts
│ ├─ projectRoute.ts
│ └─ taskRoute.ts
├─ config/
│ └─ db.ts # Sequelize database config
├─ server.ts
└─ app.ts

yaml
Copy code

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <https://github.com/Yugesh428/rhxaq-techNinja>
cd taskkmanagerBackend
2. Install dependencies
bash
Copy code
npm install
# or
yarn install
3. Create .env file
Add your database connection and port:

env
Copy code
DB_HOST=localhost
DB_USER=yourusername
DB_PASSWORD=yourpassword
DB_NAME=taskmanager
PORT=5000
4. Run the development server
bash
Copy code
npm run dev
# or
yarn dev