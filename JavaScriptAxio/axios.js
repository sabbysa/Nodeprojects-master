const axios = require("axios");

const BASE_URL = "http://localhost:10101/api";

//get all users
const getUsers = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/get`);

    const users = res.data;

    console.log(`GET: Here's the list of users`, users);

    return users;
  } catch (e) {
    console.error(e);
  }
};
//get specificUser
const getSpecificUser = async (userName) => {
  try {
    const res = await axios.get(`${BASE_URL}/get/${userName}`);

    const users = res.data;

    console.log(`GET: specificUser`, users);

    return users;
  } catch (e) {
    console.error(e);
  }
};
// add user
const addUser = async (user) => {
  try {
    const res = await axios.post(`${BASE_URL}/post`, user);
    const addedUsers = res.data;

    console.log(`Added a new user!`, addedUsers);

    return addedUsers;
  } catch (e) {
    console.error(e);
  }
};
// change password

const changePassword = async (user, newPassword) => {
  const password = {
    patch: newPassword,
  };
  try {
    const res = await axios.patch(`${BASE_URL}/patch/${user}`, password);
    const addedUsers = res.data;

    console.log(`password changed`, addedUsers);

    return addedUsers;
  } catch (e) {
    console.error(e);
  }
};
// delete a user

const deleteSpecificUser = async (userName) => {
  try {
    const res = await axios.delete(`${BASE_URL}/delete/${userName}`);

    const users = res.data;

    console.log(`Deleted user ${userName}`, users);

    return users;
  } catch (e) {
    console.error(e);
  }
};

// getUsers();
//getSpecificUser("Sagar");

// const user = {
//   username: "Siddu",
//   email: "Siddu@gmail.com",
//   password: "Siddu@sagar",
// };
// addUser(user);

// changePassword("anil", "8977@Anil");

// deleteSpecificUser("Siddu");
