/* seed the database

id: INT - hardcoded 1 & 2
name: VARCHAR(255)
WINS: INT - initialized to 0
Losses: : INT - initialized to 0

*/

// json-graphql-server database/db.js --p 5000
// default port 3000 
// The json-graphql-server accepts queries in GET and POST
// By convention, json-graphql-server expects all entities to have an id field that is unique for their type - it's the entity primary key. 
module.exports = {
    users: [
        {
            id: 0,
            name: "nnamdi",
            age: 27
        },
        {
            id: 1,
            name: "chidume",
            age: 29
        },
        {
            id: 2,
            name: "david",
            age: 20
        }
    ]
}

/*

Let’s see a simple users query:
query {
    User(id: 2) {
        id
        name
        age
    }
}
We are querying for a user with “id” value of 2, and we are telling GraphQL that we want the “id”, “name”, and “age” properties to be included in the user. The result will be:
{
    "data": {
        "user": {
            "id": 0,
            "name": "david",
            "age": 20
        }
    }
}

*/




/*

To get a list of all users, we perform the below query:
query {
    allUsers {
        name
        age
    }
}
This query will return all the users in the “users” array with the properties “name”, and “age” on each user:
{
    "data": {
        "allUsers": [
            {
                name: "nnamdi",
                age: 27
            },
            {
                name: "chidume",
                age: 29
            },
            {
                name: "david",
                age: 20
            }
        ]
    }
}

*/