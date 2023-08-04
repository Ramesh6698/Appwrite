import React from "react";
import { GrClose } from "react-icons/gr";
import "./App.css";

const Preview = ({ active, setActivePreview, empData }) => {
  const { firstname, lastname, email, phone, job, dateofjoining } =
    active?.data;
  return (
    <div className={active.open ? "preview active-preview " : "preview"}>
      <div style={{ padding: "20px", textAlign: "end" }}>
        <GrClose
          onClick={() => {
            setActivePreview({
              open: false,
              data: {},
            });
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div class="employeeDetail">
        <h2>Full Detail</h2>
        <img
          src="https://source.unsplash.com/100x100/?nature&amp;amp;0"
          alt="don"
        />
        <h1>
          {firstname} {lastname}
        </h1>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{job}</p>
        <p class="date">{dateofjoining}</p>
      </div>{" "}
    </div>
  );
};

export default Preview;
