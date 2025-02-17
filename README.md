# Ecommerce Follow-Along  

### **Milestone 1: Project Overview**  
In today's live session, our mentor introduced us to the MERN Stack structure. We learned the foundational steps to set up the development environment for upcoming milestones. Additionally, we created a new repository for our follow-along project.  

### **Milestone 2: Development Setup & Login Page**  

- **Project Folder Structure:** Organized project files into separate frontend and backend directories.  
- **React Frontend Setup:** Initialized a React application to build the user interface.  
- **Node.js Backend Setup:** Set up a basic Node.js server in preparation for API integration in future milestones.  
- **Tailwind CSS Configuration:** Integrated and configured Tailwind CSS for modern, responsive, utility-based styling.  
- **Login Page Development:** Designed and implemented the first user interface for the e-commerce application, ensuring both functionality and styling.  


### **Milestone 3: Backend Setup & Database Connection**  

In this mentor-led live session, we focused on:  
- Structuring backend folders and files efficiently.  
- Configuring and connecting the Node.js server to MongoDB.  
- Implementing basic error-handling mechanisms.  


### **Milestone 4: User Model & File Upload Configuration**  

During this session, we:  
- Created a **User Model**—a blueprint for storing user data in the database.  
- Developed a **User Controller** to manage user-related operations (such as adding a new user or retrieving user details).  
- Integrated and configured **Multer**, allowing the application to handle and store file uploads (e.g., user profile images).  
- Finally, we pushed all the changes to our repository.

### **Milestone 5: Sign-Up Page & Form Validation**  

In this milestone, we’ll build the **Sign-Up Page** and set up routes for user registration.  

 **Learning Goals**
- Develop a user-friendly **Sign-Up Page** (Name, Email, Password).  
- Implement **form validation** for proper input formatting.  
- Update the **README** to document progress.  

  **Key Concepts**  
- **Sign-Up Page:** Allows users to create an account by entering their details.  
- **Form Validation:** Ensures correct input formats (e.g., valid email, secure password).

  **Steps**  
- Design the **Sign-Up Page** using HTML & CSS.  
- Add validation to prevent incorrect inputs.  

# Milestone 6: Secure Signup Backend 

 **Learning Goals**  
- Encrypt passwords using bcrypt before storing them.  
- Securely save user data in the database.  

  **Why Encrypt Passwords?**   
- Protects user data and ensures privacy.  
- Prevents password theft and ensures compliance (GDPR, PCI-DSS).  

  **Implementation Steps**  
1. **Encrypt Passwords**: Hash passwords using bcrypt before saving.  
2. **Store User Data**: Save user details securely with encrypted passwords.   

Here’s a concise version of your content, formatted for a README file:  

---

# Milestone 7: User Login Backend 🚀  

 **Learning Goals**  
- Validate user credentials during login.  
- Compare encrypted passwords securely.  

 **Why Encrypt Passwords?** 
- **Security**: Protects user data if the database is compromised.  
- **Privacy**: Prevents storing passwords in plain text.  
- **Compliance**: Meets security standards (GDPR, PCI-DSS).  
- **Prevention**: Makes password theft harder with hashing.  

 **How Login Authentication Works**  
1. **User Inputs Credentials** → Email/username & password.  
2. **Fetch User Data** → Check if the user exists in the database.  
3. **Validate Password** → Use bcrypt to hash & compare with stored hash.  

   **Steps to Implement**  
1. **Create Login Endpoint** → Accept email/username & password.  
2. **Retrieve User** → Fetch user data from the database.  
3. **Verify Password** → Hash input & compare with stored hash.  

 **Note:** Passwords are hashed (not decrypted). We compare hashes for authentication.  

---

# Milestone 8: Product Card Component and Homepage Layout
### 📝 Objective:
In this milestone, the goal was to create a reusable Product Card Component that displays product details such as name, price, and image. These cards are then displayed on the homepage, providing an organized and visually appealing layout for the products.

 **Learning Goals:**
By the end of this milestone, I have learned:

How to create a card component in React (or any framework being used).
How to display these cards dynamically by passing product details as props.
How to create a homepage layout to display multiple product cards using grid layout or flexbox.
🛠 Steps Taken:
Card Component:

Designed a reusable Card component that takes props such as name, image, and price.
The component renders the product information neatly in a card format.
Homepage Layout:

Created a grid or flexbox layout for the homepage to display multiple product cards.
Used array mapping to dynamically render the product cards, ensuring each card is populated with the correct product data.

**Key Features:**
Dynamic Product Cards: Each product is passed as a prop, ensuring the design is reusable for any product.
Grid/Flexbox Layout: Used CSS grid or flexbox for a clean, organized display of product cards on the homepage.