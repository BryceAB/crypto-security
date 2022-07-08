const bcrypt = require("bcryptjs");
const users = [];

module.exports = {
  login: (req, res) => {
    console.log("Logging In User");
    console.log(req.body);
    const { username, password } = req.body;
    const salt = bcrypt.genSaltSync(5);
    const passwordHash = bcrypt.hashSync(password, salt);
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].username === username &&
        users[i].passwordHash === passwordHash
      ) {
        const userLogin = users[i];
        delete user.passwordHash;
        res.status(200).send(userLogin);
        return;
      }
    }
    res.status(400).send("User not found.");
  },
  register: (req, res) => {
    console.log("Registering User");
    const { username, email, firstName, lastName, password } = req.body;

    const salt = bcrypt.genSaltSync(5);
    const passwordHash = bcrypt.hashSync(password, salt);

    const user = {
      username,
      email,
      firstName,
      lastName,
      passwordHash,
    };

    users.push(user);
    delete user.passwordHash;
    res.status(200).send(user);
  },
};
