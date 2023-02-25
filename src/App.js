import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(undefined);
  const saveUser = (user) => {
    if (user.index === undefined) {
      return setUsers([...users, ...[user]]);
    }
    setUsers((oldUsers) => {
      return oldUsers.map((oldUser, i) => {
        return i === user.index ? user : oldUser;
      });
    });
  };

  const deleteUser = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  const callEditUser = (index) => {
    setEditUser({ ...users[index], index });
  };

  return (
    <div className="App">
      <UserForm save={saveUser} editUser={editUser} />
      <UserTable users={users} delete={deleteUser} edit={callEditUser} />
    </div>
  );
};

export default App;
