import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../features/user/userSlice";
import { Link } from "react-router-dom";

const Usermenu = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="mt-32 ml-56 text-3xl font-weight: 700;">USERS:</h1>
      <div className="overflow-x-auto pl-44 pt-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-weight: 700">
              <th>Name</th>
              <th>Contact No.</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          {users.map((user) => (
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.firstName}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user.contact}
                  <br />
                </td>
                <td>{user.email}</td>
                <th>
                  <Link to={`/profile/${user.id}`}>
                    <button className="user-detail-button btn btn-primary">
                      User Detail
                    </button>
                  </Link>
                </th>

                <th>
                  <button
                    onClick={() => dispatch(removeUser(user.id))}
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md "
                  >
                    delete
                  </button>
                </th>
              </tr>
            </tbody>
          ))}

          {/* foot */}
        </table>
      </div>
    </>
  );
};

export default Usermenu;
