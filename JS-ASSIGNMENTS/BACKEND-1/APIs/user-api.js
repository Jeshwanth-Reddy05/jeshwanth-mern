import exp from 'express';

// create a mini express application 
export const userApp = exp.Router();

// contains only http application
// users array (in-memory storage)
let users = [];

// get req handling route (read users)
userApp.get('/users', (req, res) => {
  // send response to client
  res.status(200).json({ message: "all users", payload: users });
});

// post req handling route
userApp.post('/users', (req, res) => {
  // get users resources from req
  let newUser = req.body;
  console.log("new user", newUser);

  // insert new user into user array
  users.push(newUser);

  // send response
  res.json({ message: "User added successfully", payload: newUser });
});

// put req handling route
userApp.put('/users', (req, res) => {
  // get modified user from client
  let modifiedUser = req.body;

  // find the user with id exists in array
  let userIndex = users.findIndex(userObj => userObj.id === modifiedUser.id);

  // if user not found, send res as user not found
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  // replace user with modified one
  users.splice(userIndex, 1, modifiedUser);

  // send res as modified
  res.status(200).json({ message: "user modified", payload: modifiedUser });
});


// read user by id   // if we add : it acts as url parameter
userApp.get('/users/:id', (req, res) => {
  // read id from parameter
  console.log(req.params); // return an object key value pair
  let userId = Number(req.params.id);

  // read user by this id
  let user = users.find(userObj => userObj.id === userId);

  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }

  // send res
  res.status(200).json({ message: "user", payload: user });
});


// delete req handling route
userApp.delete('/users/:id', (req, res) => {
  // read id from parameter
  let deleteId = Number(req.params.id);

  // find user index
  let userIndex = users.findIndex(userObj => userObj.id === deleteId);

  // if user not found
  if (userIndex === -1) {
    return res.status(404).json({ message: "user not found" });
  }

  // delete user
  let deletedUser = users.splice(userIndex, 1);

  // send res
  res.status(200).json({ message: "deleted user", payload: deletedUser });
});