import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/user/userSlice";

const Userform = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [about, setAbout] = useState("");
  const [latitude, setLatitude] = useState(""); // New latitude state
  const [longitude, setLongitude] = useState(""); // New longitude state

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        firstName,
        lastName,
        email,
        contact,
        about,
        latitude,
        longitude, // Include latitude and longitude in the user object
      })
    );

    // Reset all form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setAbout("");
    setLatitude(""); // Reset latitude field
    setLongitude(""); // Reset longitude field
  };

  const handleReset = () => {
    // Reset all state variables here
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setAbout("");
    setLatitude(""); // Reset latitude field
    setLongitude(""); // Reset longitude field
  };

  return (
    <div className="flex items-center justify-center h-screen mt-7">
      <div className="w-full max-w-md p-5 bg-base-200 rounded-md shadow-md">
        <h1 className="text-3xl font-semibold mb-4 text-center">User Form</h1>

        <form
          className="space-y-4"
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          {/* Existing form fields */}
          {/* First Name */}
          <div className="flex items-center">
            <label className="block w-1/4 text-right pr-4" htmlFor="firstname">
              First Name*
            </label>
            <input
              className="input w-3/4"
              type="text"
              name="firstname"
              id="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter First Name"
              required
            />
          </div>
          {/* Last Name */}
          <div className="flex items-center">
            <label className="block w-1/4 text-right pr-4" htmlFor="lastname">
              Last Name*
            </label>
            <input
              className="input w-3/4"
              type="text"
              name="lastname"
              id="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Last Name"
              required
            />
          </div>
          {/* Email */}
          <div className="flex items-center">
            <label className="block w-1/4 text-right pr-4" htmlFor="email">
              Enter Email*
            </label>
            <input
              className="input w-3/4"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>
          {/* Contact */}
          <div className="flex items-center">
            <label className="block w-1/4 text-right pr-4" htmlFor="contact">
              Contact*
            </label>
            <input
              className="input w-3/4"
              type="tel"
              name="contact"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter Mobile number"
              required
            />
          </div>
          {/* About */}
          <div className="flex items-center">
            <label className="block w-1/4 text-right pr-4" htmlFor="about">
              About
            </label>
            <textarea
              className="textarea w-3/4"
              name="about"
              id="about"
              rows="2"
              onChange={(e) => setAbout(e.target.value)}
              placeholder="About your self"
              required
            ></textarea>
          </div>

          {/* New form fields for latitude and longitude */}
          {/* Latitude */}
          <div className="flex items-center">
            <label className="block w-1/4 text-right pr-4" htmlFor="latitude">
              Latitude
            </label>
            <input
              className="input w-3/4"
              type="text"
              name="latitude"
              id="latitude"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              placeholder="Enter Latitude"
            />
          </div>
          {/* Longitude */}
          <div className="flex items-center">
            <label className="block w-1/4 text-right pr-4" htmlFor="longitude">
              Longitude
            </label>
            <input
              className="input w-3/4"
              type="text"
              name="longitude"
              id="longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              placeholder="Enter Longitude"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="btn btn-outline mr-2"
              type="reset"
              onClick={handleReset}
            >
              Reset
            </button>
            <button className="btn btn-primary" type="submit">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Userform;
