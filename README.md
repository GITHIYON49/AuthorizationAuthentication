
# API Documentation

## Register API

**Endpoint:** `https://authorizationauthentication.onrender.com/api/auth/register`

**Description:** This API is used for user registration.

**Process:**
1. User enters their name, email, and password to register.
2. The password is hashed using the bcrypt library and saved to the MongoDB database.

---

## Login API

**Endpoint:** `https://authorizationauthentication.onrender.com/api/auth/login`

**Description:** This API is used for user login.

**Process:**
1. After registration, the user enters their email and password to log in.
2. First, check whether the user exists in the database.
3. Verify if the password is correct.
4. Using the jsonwebtoken library, generate a token using the user ID and JWT secret key.

---

## User Information API

**Endpoint:** `https://authorizationauthentication.onrender.com/api/users/me`

**Description:** This API is used to retrieve user information.

**Process:**
1. This API displays the logged-in user's information.
2. Add the login token in the Authorization header as a Bearer token to get user information.

