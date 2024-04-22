import React, { useState } from "react";
import { useSelector } from "react-redux";
import { debounce } from "lodash";
import { Link } from "react-router-dom";

const UserSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const users = useSelector((state) => state.users);

  const handleSearch = debounce((query) => {
    const filtered = users.filter((user) =>
      user.firstName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, 300);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredUsers([]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        className="input input-bordered w-24 md:w-auto"
        onChange={handleInputChange}
      />

      {searchQuery && <button onClick={clearSearch}>Clear</button>}
      {filteredUsers.length > 0 && (
        <ul>
          <Link to={`/profile/${user.id}`}>
            <button>
              {filteredUsers.map((user) => (
                <li key={user.id}>{user.firstName}</li>
              ))}
            </button>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default UserSearch;
