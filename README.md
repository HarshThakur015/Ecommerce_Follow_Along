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

**Objective:-**
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

---

## Milestone 9: Product Form Creation

**Learning Goals**
By the end of this milestone, you will:
- Learn how to create a form that takes product details as input.
- Understand how to handle multiple image uploads.

**Why create product form?**
In this milestone, we will create a form that collects all necessary details about a product, such as the product name, description, price, quantity, and images. These details will eventually be saved in a database and displayed on the product homepage from a previous milestone.

Steps for milestone 9
1. **Create a Product Form:**  
   The form will take inputs like product name, description, price, quantity, and multiple images.

2. **Handling Multiple Images:**  
   The form will be designed to allow the user to upload multiple images for the product.

3. **Optional Experimentation (Admin Access):**  
   As an optional challenge, consider adding an admin-only feature:
   - Only users with admin access should be allowed to upload products.
   - Non-admin users can be restricted from submitting product forms.

Feel free to experiment with adding more features, such as creating user profiles with different roles, like shop profiles that can upload products.

---

## Milestone 10: Product Schema and API Endpoint

**Overview:-**
In this milestone, we created a Mongoose schema for products and built an endpoint to store product details in MongoDB. This ensures data validation and maintains integrity in the database.

 Learning Outcomes
- Defined a Mongoose schema for products.
- Implemented validation rules for required fields.
- Built a POST endpoint to accept product details.
- Integrated MongoDB for data storage.
- Ensured only valid data is saved in the database.

 Implementation Steps
1. Created a Mongoose schema defining product fields like name, description, price, and image URL.
2. Implemented validation for required fields and data types.
3. Built a POST API endpoint to accept product details from the frontend.
4. Connected to MongoDB and stored valid product data.
5. Committed and pushed all changes to the GitHub repository.

## Milestone 11 - Making the Home Page Dynamic 🌟  

### Learning Goals 🎯  
By the end of this milestone, you will:  
- Understand how to write an endpoint to extract and send data from MongoDB.  
- Learn how to receive data on the frontend.  
- Display the fetched data dynamically using the product card created earlier.  

---

### Steps for Milestone 11 📝  

**Set Up the Backend Endpoint** 
- Create a new route in your backend to fetch all products from MongoDB.  
- Use the appropriate method to retrieve data from the database.  
- Send the data as a JSON response to the frontend.  

**Connect the Frontend to the Backend**  
- Make an API request from the frontend to fetch the product data.  
- Ensure proper handling of the response to extract the required product details.  

**Display the Products Dynamically** 
- Use the previously created product card component to display each product.  
- Iterate through the received product data and render each item dynamically.  

**Test the Functionality**  
- Ensure the data is fetched correctly from MongoDB and displayed on the home page.  
- Check for errors or missing data and debug if necessary.  

---

**Expected Outcome**  
By completing this milestone, your home page will dynamically display all products fetched from MongoDB, making the page fully functional and interactive.

## Milestone 12 - My Products Page 🌟  

### Learning Goals 🎯  
By the end of this milestone, you will:  
- Learn how to write an endpoint to filter and send data from MongoDB based on the logged-in user's email.  
- Understand how to receive and handle filtered data on the frontend.  
- Display the fetched products dynamically using the product card created earlier.  

---

### Steps for Milestone 12 📝  

**Create a Backend Endpoint to Fetch User-Specific Products**  
- Write an API route that queries MongoDB to retrieve only the products added by the logged-in user.  
- Use the user's email to filter the data from the database.  
- Send the filtered product data as a JSON response.  

**Fetch Data on the Frontend**
- Make an API request from the frontend to fetch the products associated with the logged-in user’s email.  
- Ensure proper handling of the response to extract and display the required data.  

**Display Products Dynamically** 
- Use the existing product card component to display each product.  
- Iterate through the received data and render each item dynamically.  

**Test the Page** 
- Verify that only the products added by the logged-in user are displayed.  
- Handle any errors or missing data appropriately.  

---

**Expected Outcome** 
By completing this milestone, your "My Products" page will dynamically show only the products associated with the logged-in user’s email, making the page personalized and functional.
 

 ### Milestone 13 
 
**Learning Goals**  
By the end of this milestone, you will:  
- Learn how to write an endpoint to update existing data in MongoDB.  
- Understand how to auto-fill a form with previous data and provide an option to edit.  

---

 **Steps for Milestone 13**  

**Create a Backend Endpoint for Updating Products**  
- Write an API route that receives the updated product details.  
- Find the existing product in MongoDB using its unique identifier.  
- Update the product with the new details and save the changes.  

**Add an Edit Button to the Product Card** 
- Modify the product card to include an "Edit" button.  
- When clicked, retrieve the product’s current details and send them to the form.  

**Auto-Fill the Form with Existing Data**  
- Populate the form fields with the product's current details.  
- Allow users to modify the fields and submit the updated information.  

**Save and Reflect Changes in the Database**  
- On form submission, send the updated data to the backend endpoint.  
- Ensure the changes are reflected in MongoDB and update the frontend dynamically.  

**Test the Functionality**  
- Verify that clicking "Edit" correctly loads the product details into the form.  
- Ensure that after updating, the changes are saved and displayed correctly.  

---

**Expected Outcome**
By completing this milestone, you will be able to edit uploaded products, update their details in MongoDB, and reflect the changes dynamically on the frontend.

---

Here’s a well-structured version of your README update:  

---

## Milestone 14: Delete Product Functionality 🚀  
  
Welcome to Milestone 14!   

 **Overview** 
In this milestone, we will enhance our product management system by adding functionality to delete a product. 
We will implement a backend endpoint that allows deletion of a product using its unique ID from MongoDB.  

 **Learning Goals**  
By the end of this milestone, you will:  
 Understand how to create a DELETE API endpoint in Express.js.  
 Learn how to remove a specific product from MongoDB using Mongoose.  
 Enhance your backend development skills by handling deletion requests properly.  

## Milestone 15: Create and Navbar component and add nav component to every screen.

**Learning Goals**  
By the end of this milestone, you will:  
- Create a reusable Nav component.  
- Use the Nav component across multiple pages.  

 **Steps for Milestone 15** 
1. Create a new Nav component with links to:  
   - Home  
   - My Products  
   - Add Product  
   - Cart  
2. Make the Navbar responsive for all screen sizes.  
3. Add the Nav component to all pages for smooth navigation.  

This milestone covers creating a navbar and enabling seamless page navigation.

### Milestone 16 : Create an product info page that display all the product data and choose quantity and add to card button

**Learning Goals**  
By the end of this milestone, you will:  
- Create a new page to display each product.  
- Add quantity selection and an "Add to Cart" button.  

 **Steps for Milestone 16** 
1. Create a product info page to display all product details.  
2. Add a quantity selector and an "Add to Cart" button.