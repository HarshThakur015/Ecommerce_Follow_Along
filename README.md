# Ecommerce Follow-Along  

### **Milestone 1: Project Overview**  
In today's live session, our mentor introduced us to the MERN Stack structure. We learned the foundational steps to set up the development environment for upcoming milestones. Additionally, we created a new repository for our follow-along project.  

---

### **Milestone 2: Development Setup & Login Page**  

- **Project Folder Structure:** Organized project files into separate frontend and backend directories.  
- **React Frontend Setup:** Initialized a React application to build the user interface.  
- **Node.js Backend Setup:** Set up a basic Node.js server in preparation for API integration in future milestones.  
- **Tailwind CSS Configuration:** Integrated and configured Tailwind CSS for modern, responsive, utility-based styling.  
- **Login Page Development:** Designed and implemented the first user interface for the e-commerce application, ensuring both functionality and styling.  

---


### **Milestone 3: Backend Setup & Database Connection**  

In this mentor-led live session, we focused on:  
- Structuring backend folders and files efficiently.  
- Configuring and connecting the Node.js server to MongoDB.  
- Implementing basic error-handling mechanisms.

---

### **Milestone 4: User Model & File Upload Configuration**  

During this session, we:  
- Created a **User Model**—a blueprint for storing user data in the database.  
- Developed a **User Controller** to manage user-related operations (such as adding a new user or retrieving user details).  
- Integrated and configured **Multer**, allowing the application to handle and store file uploads (e.g., user profile images).  
- Finally, we pushed all the changes to our repository.

---

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

---

### Milestone 6: Secure Signup Backend 

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

### Milestone 7: User Login Backend 🚀  

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

### Milestone 8: Product Card Component and Homepage Layout

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

### Milestone 9: Product Form Creation

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

### Milestone 10: Product Schema and API Endpoint

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

---

### Milestone 11 - Making the Home Page Dynamic 🌟  

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

---

### Milestone 12 - My Products Page 🌟  

### Learning Goals 🎯  
By the end of this milestone, you will:  
- Learn how to write an endpoint to filter and send data from MongoDB based on the logged-in user's email.  
- Understand how to receive and handle filtered data on the frontend.  
- Display the fetched products dynamically using the product card created earlier.  

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


**Expected Outcome** 
By completing this milestone, your "My Products" page will dynamically show only the products associated with the logged-in user’s email, making the page personalized and functional.
 
 ---

 ### Milestone 13 
 
**Learning Goals**  
By the end of this milestone, you will:  
- Learn how to write an endpoint to update existing data in MongoDB.  
- Understand how to auto-fill a form with previous data and provide an option to edit.  

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

**Expected Outcome**
By completing this milestone, you will be able to edit uploaded products, update their details in MongoDB, and reflect the changes dynamically on the frontend.

---

### Milestone 14: Delete Product Functionality 🚀  
  
Welcome to Milestone 14!   

 **Overview** 
In this milestone, we will enhance our product management system by adding functionality to delete a product. 
We will implement a backend endpoint that allows deletion of a product using its unique ID from MongoDB.  

 **Learning Goals**  
By the end of this milestone, you will:  
 Understand how to create a DELETE API endpoint in Express.js.  
 Learn how to remove a specific product from MongoDB using Mongoose.  
 Enhance your backend development skills by handling deletion requests properly.  

 ---

### Milestone 15: Create and Navbar component and add nav component to every screen.

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

---

### Milestone 16 : Create an product info page that display all the product data and choose quantity and add to card button

**Learning Goals**  
By the end of this milestone, you will:  
- Create a new page to display each product.  
- Add quantity selection and an "Add to Cart" button.  

 **Steps for Milestone 16** 
1. Create a product info page to display all product details.  
2. Add a quantity selector and an "Add to Cart" button.

---

### Milestone 17 - Add Products to Cart

Today, we will write a backend endpoint to add products to the cart and store them in the database.

**Learning Goals**
By the end of this milestone, you will:

- Edit the user schema to store cart products.
- Write an endpoint to receive the product details and store them in the database.

**Steps for Milestone 17**
1. Write the cart schema to store products.
2. Write an endpoint to receive and store product details in the cart.

---

### Milestone 18 - Fetch Products from Cart

Welcome to Milestone 18! 

Today, we will create a backend endpoint for the cart page. We will write the backend logic to fetch all the products inside the user's cart to display on the cart page.

**Learning Goals**
By the end of this milestone, you will:

- Create an endpoint to receive requests from the cart page.
- Create a backend endpoint to fetch all the products inside the cart using the user's email.

**Steps for Milestone 18**
1. Create a backend endpoint for the cart page.
2. Write an endpoint to get the products inside the cart for the user.

This lesson will help you understand how to create cart functionality.

---

### Milestone 19: Cart Functionality

**Learning Goals**
By the end of this milestone, you will:

- Create a cart page that displays the products inside the cart using the endpoint built in Milestone 18.
- Add an option for each product to increase and decrease its quantity using `+` and `-` buttons.
- Write a backend endpoint to handle increasing and decreasing the quantity of products in the cart.

**Steps for Milestone 19**

**Create the Cart Frontend Page**
- Design and develop a frontend UI for the cart page.
- Fetch and display products inside the cart using the existing API.

**Add Quantity Modification Options**
- For each product in the cart, provide `+` and `-` buttons to modify the quantity.
- Ensure the UI updates dynamically when a product quantity changes.

**Create Backend Endpoints**
- Implement an API endpoint to increase the quantity of a product in the cart.
- Implement another API endpoint to decrease the quantity of a product in the cart.
- Ensure the logic prevents decreasing the quantity below `1` or removing the item when quantity reaches `0`.

**Summary**
This milestone will help in understanding how to create cart functionality, including UI development and API integration to modify product quantities dynamically.

---

### Milestone 20 - Profile Page Frontend & Backend Endpoint

**Introduction**

Welcome to **Milestone 20**. In this milestone, we will develop a profile page frontend and implement a backend endpoint to retrieve and display user data effectively.



**Objectives**
By the completion of this milestone, you will:

- Develop a backend endpoint to retrieve and send user data via email.
- Implement a frontend profile page to display user details.
- Ensure the display of profile information, including the profile photo, name, email, and addresses.


**Implementation Steps**

1. **Backend Development:**
   - Develop an endpoint to retrieve and transmit user data.
   - Ensure that the endpoint securely sends user data via email.

2. **Frontend Development:**
   - Design and implement a structured profile page to present user data.
   - Display the profile photo, name, and email in a dedicated section.
   - Present the user’s address details in a separate section.
   - Include an **"Add Address"** button to facilitate the addition of new addresses.
   - Display a message stating **"No address found"** when no address data is available.


**Conclusion**

This milestone provides essential knowledge on structuring and displaying a user profile page effectively. The implementation will enhance the understanding of frontend-backend interaction for user data management.


### Milestone 21 :- Create an frontend page form for address input.

---

#### Milestone 21 :- Create an frontend page form for address input.

**Address Form Frontend Page**

**Learning Goals**
By the end of this milestone, you will:

- Create a frontend form that captures an address.
- Collect the following details: country, city, address line 1, address line 2, zip code, and address type.

**Steps for Milestone 21**

1. Create a frontend page with an address input form.
2. Implement a state to store the input address data.
3. Ensure that when the user clicks on "Add Address" in the profile section, it navigates to this form page.

**Objective**
This lesson will help in understanding how to build and manage an address input form in a frontend application.


### Milestone 22 :- Backend Endpoint for Storing User Address

**Learning Goals**
By the end of this milestone, you will:

- Create a backend endpoint that will store the address inside the user profile in the database.

**Steps for Milestone 22**

1. Create an endpoint that will receive the address from the address form in the frontend.
2. Add the address to the address array inside the user collection.

This lesson will help in understanding how to create an endpoint that will store the address in the database.

**Conclusion**
By completing this milestone, you will gain hands-on experience in creating a backend endpoint that interacts with the database. This will strengthen your understanding of handling user data and managing database operations effectively.

---

### Milestone 23: Implementing Place Order Functionality

**Learning Goals**
By the end of this milestone, you will:

- Add a button inside the cart called "Place Order."
- Create a select address page where all saved addresses will be displayed, allowing the user to choose a delivery address.
- Write a Mongoose schema for storing order details.

**Steps for Milestone 23**

1. **Create a Place Order Button**
   - Add a "Place Order" button inside the cart page.
   - When clicked, navigate to the select address page.

2. **Create the Select Address Page**
   - Display all available addresses of the user.
   - Provide an option to select one delivery address.

3. **Write a Backend Endpoint**
   - Create an endpoint that retrieves and sends all addresses of the user.

**Note**
This milestone will help in understanding how to implement the place order functionality in an e-commerce application.

---

### Milestone 24: Order Conformation Page.

**Learning Goals**
By the end of this milestone, you will:
- Create an order confirmation page.

**Steps for Milestone 24**
1. Display all the products being ordered.
2. Show the address selected by the user for delivery.
3. Display the total value of the cart.
4. Include a "Place Order" button at the bottom.

**Note:** This lesson will help in understanding how to implement the place order functionality.

---

### Milestone 25: Backend Endpoint for Placing an Order

**Learning Goals**
By the end of this milestone, you will:
- Create a backend endpoint that will facilitate placing an order.

**Steps for Milestone 25**
1. Create an endpoint that will receive the following details:
   - Products
   - User information
   - Address details
2. Retrieve the user's email and use it to fetch the `_id` of the user.
3. For each product, a separate order will be created with the same address.
4. Store order details in the MongoDB `order` collection using the previously created order schema.

---

### Milestone 26: Backend Endpoint for Placing and Retrieving Orders

**Learning Goals**
By the end of these milestones, you will:
- Create a backend endpoint that will facilitate placing an order.
- Create a backend endpoint to retrieve all orders of a user.

**Steps for Milestone 25**
1. Create an endpoint that will receive the following details:
   - Products
   - User information
   - Address details
2. Retrieve the user's email and use it to fetch the `_id` of the user.
3. For each product, a separate order will be created with the same address.
4. Store order details in the MongoDB `order` collection using the previously created order schema.

#**Steps for Milestone 26**
1. Create an endpoint that will receive the user's email.
2. Retrieve the `_id` of the user using the provided email.
3. Use that `_id` to fetch all orders associated with the user.
4. Send all the user's orders in the response.

This milestone will help in understanding how to retrieve all orders for a specific user.

---

### Milestone 27 - My Orders Page 🧾
Hey Kalvians! 👋 Welcome to Milestone 27! In this milestone, we will create a frontend page to display all user orders.

## 🎯 Learning Goals
By the end of this milestone, you will be able to:
- Create a frontend page for viewing user orders.
- Send a GET request to the `my-orders` endpoint.
- Pass the user’s email in the API request to fetch their orders.
- Display all retrieved orders on the page.
- Add the "My Orders" page to the navigation bar for easy access.

## 📝 Steps to Complete
1. Create a `my-orders` Page: Build a new frontend page that will serve as the My Orders page for users.
2. Send GET Request: Use the `my-orders` endpoint created in the previous milestone to fetch user-specific orders.
3. Pass User Email: Include the logged-in user’s email in the request to fetch relevant orders.
4. Display Orders: Render the list of orders on the `my-orders` page in a clean and structured format.
5. Update Navigation Bar: Add a link to the `my-orders` page in the navbar for better user navigation.

---

### Milestone 28 - Cancel Order Functionality 🚫
Hey Kalvians! 👋 Welcome to Milestone 28! In this milestone, we will add a cancel button in the My Orders page and create a backend endpoint to handle order cancellations.

## 🎯 Learning Goals
By the end of this milestone, you will be able to:
- Allow users to cancel their placed orders.
- Create a backend endpoint to handle order cancellation.

## 📝 Steps to Complete
1. In the My Orders page, add a "Cancel Order" button for each order.
2. If an order is already canceled, do not display the cancel button.
3. Create a backend endpoint that receives the order ID.
4. Use this ID to find the order in the database, update its status to "canceled", and save the changes.

---

### Milestone 29 - Integrating PayPal Payment Gateway 💳
Hey Kalvians! 👋 Welcome to Milestone 29! In this milestone, we will learn how to integrate an online payment gateway into our application using the PayPal API.

## 🎯 Learning Goals
By the end of this milestone, you will be able to:
- Understand how to use the PayPal API.
- Integrate online payment options into your application.

## 📝 Steps to Complete
1. Create a PayPal account and log in to the PayPal Developer Dashboard.
2. Navigate to the Sandbox Accounts section.
3. Copy the UserID of your sandbox account and save it.
4. Find your Client ID in the sandbox account and save it for integration.
5. On the order confirmation page, add two payment options: Cash on Delivery (COD) and Online Payment.
6. Create radio buttons to select between COD and Online Payment.
7. When Online Payment is selected, display the PayPal payment buttons.

Note: In the next milestone, we will write the code to display and use the PayPal payment buttons.

---

### Milestone 30: Integrating PayPal API for Online Payments

## Welcome to Milestone!

Today, we will learn how to add an online payment gateway to our application using the PayPal API. This is a continuation of **Milestone 29**, where you created a PayPal account and obtained the UserID.

## Learning Goals
By the end of this milestone, you will:

- Learn how to use the PayPal API.
- Learn how to integrate online payments into your application.

## Steps for Milestone 30

1. After creating a PayPal account and getting the UserID inside your sandbox account, proceed to the next step.
2. Implement online payment functionality using the PayPal API and the client key you created earlier.
3. Download the NPM package called `react-paypal-js`. This package provides a component called `PayPalScriptProvider`, which will display online payment options like credit or debit cards.
4. This lesson will help you understand how to integrate online payments into your application.

---

### Milestone 31: Implementing Global State Management Using Redux

## Learning Goals

By the end of this milestone, you will:

- Understand how to use Redux for global state management.
- Implement a Redux store to manage global states such as user email.

## Steps for Milestone 31

1. **Install Redux**  
   Install the npm package called `react-redux`.

2. **Create Store Structure**  
   Create a new folder called `store` with the following two files:
   - `store.js`
   - `userActions.js`

3. **Set Up Global State**  
   We will store the user's email inside the global state.

4. **Configure Store**  
   In `store.js`, configure a Redux store using a `userReducer` function. This reducer will manage the global state for the user's email.

5. **Define Actions**  
   In `userActions.js`, write a function called `setEmail`. This function will be used to update the email in the global state.

6. **Wrap Application with Provider**  
   In `index.js`, wrap the `App` component inside the `Provider` component from `react-redux`, and pass the `store` as a prop.

---

### Milestone 32 - Global State Management with Redux 🌍

Welcome to **Milestone 32**! 🎯  
In this milestone, we'll integrate Redux to manage and access the user's **email** across multiple pages in our application.

## 🚀 Learning Objectives

By the end of this milestone, you will be able to:

- Understand how to store and retrieve global state using Redux.
- Use `dispatch` to store the email in the Redux store.
- Use `useSelector` to access the stored email on any page in the app.

## 📝 Steps to Complete Milestone 32

## 1. Setup Redux (if not already done)
If you haven’t already:
- Install Redux and React-Redux:
  ```bash
  npm install @reduxjs/toolkit react-redux

---