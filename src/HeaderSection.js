import React from "react";
import "./App.css";

const HeaderSection = ({ data, setshowModal, setFilterData }) => {
  return (
    <div className="flex-column">
      <div className="flex">
        <h2>People</h2>
        <div>{data?.length}</div>
      </div>
      <div className="flexContent">
        <div class="searchBox">
          <input
            type="text"
            placeholder="Search by name, email "
            onChange={(e) => {
              const search = e.target.value.trim().toLocaleLowerCase();
              if (search) {
                setFilterData({
                  isfilterData: true,
                  data: data.filter(
                    (i) =>
                      i.firstname.includes(search) ||
                      i.lastname.includes(search) ||
                      i.email.includes(search)
                  ),
                });
              } else
                setFilterData({
                  isfilterData: false,
                  data: [],
                });
            }}
          />
        </div>

        <button onClick={() => setshowModal(true)}>Add Employee</button>
      </div>
    </div>
  );
};

export default HeaderSection;