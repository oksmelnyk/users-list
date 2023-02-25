import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const UserTable = (props) => {
  return (
    <div className={"UserTable"}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Login</th>
            <th>Password</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user, index) => (
            <tr key={user.email}>
              <td>{index + 1}</td>
              <td>{user.login}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>
                <Button
                  onClick={() => props.edit(index)}
                  variant="warning"
                  type="button"
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => props.delete(index)}
                  variant="danger"
                  type="button"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
