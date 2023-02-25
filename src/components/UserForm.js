import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

const UserForm = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const save = () => {
    props.save({
      login,
      password,
      email,
      index: props.editUser ? props.editUser.index : undefined,
    });
    setLogin("");
    setPassword("");
    setEmail("");
  };
  useEffect(() => {
    if (props.editUser === undefined) {
      return;
    }
    setLogin(props.editUser.login);
    setPassword(props.editUser.password);
    setEmail(props.editUser.email);
  }, [props.editUser]);
  return (
    <Form className={"UserForm"}>
      <Form.Group className="mb-3">
        <Form.Label>Login</Form.Label>
        <Form.Control
          type="text"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          placeholder="Enter login"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter password"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter email"
        />
      </Form.Group>
      <Button onClick={() => save()} variant="success" type="button">
        {props.editUser ? "Edit user" : "Add user"}
      </Button>
    </Form>
  );
};

export default UserForm;
