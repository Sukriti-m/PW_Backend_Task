# Summary_Stats_Backend

## Installation
Install the project dependencies:
```
npm i
```

## Run Application
The service will run on http://localhost:3000 by default.
```
npm run build
```
To run with nodemon, use:
```
npm start
```
## Authentication and Authorization
The service uses token-based authentication and authorization. Make sure to include the **Authorization header** with a **valid token** when making requests to API endpoints except `login API`. If not added then, an error with status `401` will be displayed.

## API Endpoints
### 1. Login
METHOD: POST , REQUEST FORMAT: JSON , URL: /api/v1/auth/login

EXAMPLE:  `localhost:3000/api/v1/auth/login`
```
{
  "userID":"Admin",
  "password":"Admin123"
}
```
RESPONSE:  
```
{
    "message": "User logged in successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJBZG1pbiIsImlhdCI6MTY5NzU3NDA2MSwiZXhwIjoxNjk3NTc3NjYxfQ.zly7Bw4IUGueE_cxs9uIiP1V08rkGaihvpkjNYoKSEQ"
} 
```
### 2. Add a New Record
METHOD: POST , REQUEST FORMAT: JSON , URL: /api/v1/records/add

**NOTE:** Add Token in the Authorization header otherwise an error with status `401` will be displayed.

EXAMPLE:  `localhost:3000/api/v1/records/add`
```

{
    "name": "John Doe",
    "salary": "780000",
    "currency": "USD",
    "department": "Engineering",
    "sub_department": "Platform",
    "on_contract":"true"
    }
```
RESPONSE:  
Whole dataset with added record will be displayed.

### 3. Delete a Record by Sending Index in Params
METHOD: DELETE , URL: /api/v1/records/delete/:id

EXAMPLE:  `localhost:3000/api/v1/records/delete/4`

RESPONSE:  
Whole dataset without deleted record will be displayed.

### 4. Get Summary Statistics for All Salaries
METHOD: GET , URL: /api/v1/stats/all

EXAMPLE:  `localhost:3000/api/v1/stats/all`

RESPONSE:  
```
{
    "mean": 20134009,
    "min": 30,
    "max": 200000000
}
```
### 5. Get Summary Statistics for Salaries with 'on_contract' : 'true'
METHOD: GET , URL: /api/v1/stats/contract

EXAMPLE:  `localhost:3000/api/v1/stats/contract`

RESPONSE:  
```
{
    "mean": 326666.6666666667,
    "min": 90000,
    "max": 780000
}
```
### 6. Get Summary Statistics for Salaries by Department 
METHOD: GET , URL: /api/v1/stats/departments

EXAMPLE:  `localhost:3000/api/v1/stats/departments`

RESPONSE:  
```
{
    "Banking": {
        "mean": 90000,
        "min": 90000,
        "max": 90000
    },
    "Engineering": {
        "mean": 33530005,
        "min": 30,
        "max": 200000000
    },
    "Operations": {
        "mean": 35015,
        "min": 30,
        "max": 70000
    },
    "Administration": {
        "mean": 30,
        "min": 30,
        "max": 30
    }
}
```
### 7. Get Summary Statistics for Salaries by Department and Sub-Department Combination
METHOD: GET , URL: /api/v1/stats/subdepartments

EXAMPLE:  `localhost:3000/api/v1/stats/subdepartments`

RESPONSE:  
```
{
    "Banking_Loan": {
        "department": "Banking",
        "subDepartment": "Loan",
        "mean": 90000,
        "min": 90000,
        "max": 90000
    },
    "Engineering_Platform": {
        "department": "Engineering",
        "subDepartment": "Platform",
        "mean": 40080006,
        "min": 30,
        "max": 200000000
    },
    "Operations_CustomerOnboarding": {
        "department": "Operations",
        "subDepartment": "CustomerOnboarding",
        "mean": 35015,
        "min": 30,
        "max": 70000
    },
    "Administration_Agriculture": {
        "department": "Administration",
        "subDepartment": "Agriculture",
        "mean": 30,
        "min": 30,
        "max": 30
    }
}
```
## Testing
To run tests for the API endpoints, use the following command:
```
npm test
```
