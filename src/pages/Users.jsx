import { useState } from "react";
import { fakeUsers } from "../constants/users";

const Users = () => {
  const [users, setUsers] = useState(fakeUsers);
  const [asc, setAsc] = useState(true);

  const sortUsers = () => {
    const sorted = [...users].sort((a, b) =>
      asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setUsers(sorted);
    setAsc(!asc);
  };

  return (
    <div className="bg-[#1a1a1a] p-4 rounded-xl border border-[#2f2f2f]">
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400">
            <th
              className="p-2 cursor-pointer text-cyan-400 hover:underline hover:brightness-125 transition"
              onClick={sortUsers}
            >
              Name {asc ? "▲" : "▼"}
            </th>
            <th className="p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className="border-t border-[#2f2f2f] hover:bg-[#2a2a2a]"
            >
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
