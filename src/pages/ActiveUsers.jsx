import React, { useState } from "react";

const ActiveUsers = () => {
  const [users, setUsers] = useState([
    { name: "prayag", job: "Dev", favoriteColor: "blue" },
  ]);
  const [selectAll, setSelectAll] = useState(false);

  const addUser = () => {
    setUsers([...users, { name: "", job: "", favoriteColor: "" }]);
  };

  const renderUsers = () => {
    return users.map((user, index) => (
      <tr key={index}>
        <td>
          <input
            type="checkbox"
            className="checkbox"
            checked={selectAll || user.checked}
            onChange={() => {
              setUsers([
                ...users,
                { ...user, checked: !selectAll || !user.checked },
              ]);
            }}
          />
        </td>
        <td>{user.name}</td>
        <td>{user.job}</td>
        <td>{user.favoriteColor}</td>
        <td>
          <button className="btn btn-ghost btn-xs">details</button>
        </td>
      </tr>
    ));
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setUsers(users.map((user) => ({ ...user, checked: !selectAll })));
  };

  return (
    <>
      <div className="overflow-x-auto bg-slate-300 text-black w-screen h-screen pt-20 px-52">
        <h1 className="text-4xl font-semibold text-center">Active Users</h1>
        <table className="table mt-10 ">
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderUsers()}</tbody>
        </table>
        <button onClick={addUser} className="btn hover:bg-purple-500 hover:text-white border-black">Add User</button>
      </div>
    </>
  );
};

export default ActiveUsers;
