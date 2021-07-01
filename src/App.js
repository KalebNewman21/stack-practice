import React, {useState, useEffect} from 'react'
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get("/api/users")
      .then((users) => setUsers(users))
      .catch((err) => console.log(err));
  }, []);


const submitForm = () => {
  if(name === "") {
    alert("Bro, enter your name");
    return;
  }
  if (email === "") {
    alert("Dude, enter your email");
    return;
  }

  axios
    .post("/api/users", {
      name: name,
      email: email
    })
    .then(function (){
      alert("Account Successfully Created");
      window.location.reload();
    })
    .catch(function() {
      alert("Could not make that account, sorry.")
    });
}

return (
  <div>
    <h1>My Project</h1>
    {users === null ? (
      <p>Loading...</p>
    ) : users.length === 0 ? (
      <p>No User Available</p>
    ) : (
      <React.Fragment>
        <h2>Available Users</h2>
        <ol>
          {users.map((user, index) => (
            <li key={index}>
              Name: {user.name} - Email: {user.email}
            </li>
          ))}
        </ol>
      </React.Fragment>
    )}
  <form onSubmit={submitForm}>
    <input
      onChange = {(e) => setName(e.target.value)}
      type="text"
      placeholder="Enter your name"
      />
    <input
      onChange={(e) => setEmail(e.target.value)}
      type="text"
      placeholder="Enter Email Address"/>
    <input type="submit"/>
  </form>
</div>
  );
};

export default App
