import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./App.css";

const Card = ({ empData, handleEdit, handleDelete, num, setActivePreview }) => {
  const [dropDown, setDropdown] = useState(false);
  return (
    <div className="card-component">
      <div className="card-inner">
        <div className="dropdownContainer">
          <BsThreeDotsVertical
            size={20}
            onClick={() => setDropdown(!dropDown)}
          />
          {dropDown && (
            <ul className="dropdown" onMouseLeave={() => setDropdown(false)}>
              <li onClick={() => handleEdit(empData.id)}>Edit</li>
              <li onClick={() => handleDelete(empData.id)}>Delete</li>
            </ul>
          )}
        </div>
        <div
          className="profileImage"
          onClick={() => setActivePreview({ open: true, data: empData })}
        >
          <img
            src={`https://source.unsplash.com/100x100/?nature&${num}`}
            alt={empData?.firstname}
          />
        </div>
        <div className="emp-detail">
          <h3>
            {empData?.firstname} {empData?.lastname}
          </h3>
          <p>{empData?.email}</p>
        </div>
      </div>
      <div className="job-role">
        <p>{empData?.job}</p>
      </div>
    </div>
  );
};

export default Card;
