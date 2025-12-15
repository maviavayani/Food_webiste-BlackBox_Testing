# Foodie Delight – PHP Project with Selenium Tests

## 1. Overview

Foodie Delight is a small food–ordering website built with **PHP**, **HTML/CSS**, and **JavaScript**.  
It includes a popup for location details, a dynamic cart system, and a contact form, plus a separate **Python Selenium** script for automated black‑box testing in the browser.

## 2. Features

- Interactive and animated user interface
- Comprehensive menu display with categories
- Real-time shopping cart functionality
- Responsive design for all devices
- Location-based services
- Contact form for customer inquiries
- Particle animations and visual effects

## 3. Technologies Used

- **Frontend**

  - HTML5
  - CSS3 (in `assets/css/style.css`)
  - JavaScript (in `assets/js/main.js`, `assets/js/particles.js`)

- **Backend**

  - PHP

- **Database**

  - MySQL (accessed via XAMPP / phpMyAdmin)

- **Server Environment**

  - XAMPP (Apache + MySQL)

- **Testing**
  - Python 3
  - Selenium WebDriver (`Automated_test/Complete Automated Test and individual Test cases files`)

## 4. Folder / File Layout (short)

- `index.html` – main website entry page
- `assets/` – CSS and JS files
- `images/` – images used in the UI
- `php/` – PHP backend files (contact, popup, etc.)
- `save_popup.php`, `setup_database.php` – extra PHP endpoints / DB setup
- `Automated_test/Complete Automated Test and individual Test cases files` – automated UI tests written in Python + Selenium

## 5. How to Run the PHP Project (XAMPP + htdocs)

1. **Install XAMPP**

   - Download and install from: https://www.apachefriends.org/
   - Open the XAMPP Control Panel.
   - Start **Apache** and **MySQL**.

2. **Copy Project into `htdocs`**

   - Go to your XAMPP installation folder, then open the `htdocs` directory, for example:  
     `C:\xampp\htdocs\`
   - Create a folder named `project` (or any name you like).
   - Copy all project files and folders into:  
     `C:\xampp\htdocs\project\`

3. **Create the Database**

   - Open a browser and go to: `http://localhost/phpmyadmin`
   - Create a new database, for example: `project`
   - If `setup_database.php` is designed to create tables:
     - Open: `http://localhost/project/setup_database.php`
   - Otherwise, create the tables manually according to how your PHP files expect them (for popup and contact data).

4. **Run the Website**
   - In the browser, open:  
     `http://localhost/project`
   - You should see the Foodie Delight homepage and, on first load, the **location popup**.

## 6. Main Features to Check Manually

- **Location Popup**

  - Appears when you open the site.
  - Accepts city, location, and phone number (starting with `03`).

- **Menu and Cart**

  - “Add to Cart” buttons add items to the cart.
  - Cart icon shows the item count.
  - Cart sidebar opens and closes, and you can change quantities with `+` and `-`.

- **Contact Form**
  - Located in the Contact section.
  - Sends name, email, and message to the backend (PHP) and should display a success/error message.

---

## 7. How to Run Selenium Tests

1. **Install Python and Selenium**

   - Install Python 3 from https://www.python.org/ (if not already installed).
   - Open a terminal / command prompt and run:
     ```
     pip install selenium
     ```

2. **Make Sure the Site Is Running**

   - XAMPP Apache and MySQL must be **running**.
   - Confirm that `http://localhost/project` opens correctly in the browser.

3. **Run the Test Script**

   - Open a terminal in the `selenium_test` folder, for example:
     ```
     cd C:\xampp\htdocs\project\selenium_test
     python test_blackbox.py
     ```
   - The script will open Chrome and automatically:
     - Load the site
     - Test the popup
     - Add items to cart
     - Open/close cart sidebar
     - Test navigation and contact form, etc.

4. **Test Results**
   - In the terminal you will see each test case with **PASS/FAIL** messages like:
     - `TC-01 PASS` – Website opened
     - `TC-02 PASS` – Popup displayed
     - … up to `TC-10 PASS`

## 8. Quick Summary

- Put the project in `htdocs/project`.
- Start Apache and MySQL in XAMPP.
- Create the `project` database.
- Open `http://localhost/project` to use the site.
- Run automated UI tests with:
