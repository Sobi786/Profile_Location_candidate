import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"; // Importing useSelector from react-redux
import { Link } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  // Using useSelector to get the user data from the Redux store
  const user = useSelector((state) =>
    state.users.find((user) => user.id === id)
  );

  return (
    <div className="flex flex-col">
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <div className="max-w-lg w-full bg-blue rounded-md shadow-md overflow-hidden">
            <div className="flex items-center justify-center bg-gray-500 h-32">
              <img
                className="h-24 w-24 rounded-full object-cover"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{user.firstName}</div>
              <div className="mb-2">
                <span className="text-gray-700">About:</span> {user.about}
              </div>
              <div className="mb-2">
                <span className="text-gray-700">Contact No:</span>{" "}
                {user.contact}
              </div>
              <div className="mb-2">
                <span className="text-gray-700">Email:</span> {user.email}
              </div>
              <div className="flex justify-between pt-8">
                <div className="flex justify-start">
                  <Link to="/details">
                    <button className="btn btn-primary">Back</button>
                  </Link>
                </div>
                <Link to={`/map/${user.id}`}>
                  <div className="flex justify-end">
                    <button className="btn btn-primary">Location</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
