import React from 'react';
import './UserList.css'; // Import the CSS file

const UserList = ({ users }) => {
  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <table className="user-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Branch</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) =>{
            return(
                <>
                {user['Full Name'] && user['flag']===1 && <tr key={index}>
                <td>{user["Full Name"]}</td>
                <td>{user['Branch']}</td>
                <td>{user['Year']}</td>
              </tr>}
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
