import React, { useState, useEffect } from "react";
import EmployeeGrid from "./EmployeeGrid";
import "./App.css";
import HeaderSection from "./HeaderSection";
import Preview from "./Preview";
import ModelPopup from "./ModelPopup";
import EditDetailsModal from "./EditDetailsModal";
import { databases } from "../src/appWriter/appWriterConfig";

function App() {
  const [activePreview, setActivePreview] = useState({
    open: false,
    data: {},
  });
  const [showModal, setshowModal] = useState(false);
  const [editModal, seteditModal] = useState(false);
  const [empData, setempData] = useState({});
  const [employeeData, setEmployeeData] = useState([]);
  const [filterData, setFilterData] = useState({
    isfilterData: false,
    data: [],
  });

  useEffect(() => {
    const promise = databases.listDocuments(
      "64c8cc474dd27a0e17dd",
      "64c8ccb3926165c1099a"
    );
    promise.then(
      function (response) {
        console.log(">>>>", response);
        setEmployeeData(response.documents);
      },
      function (error) {
        console.log("error", error);
      }
    );
  }, []);
  const handleDelete = (id) => {
    const deleteDoc = databases.deleteDocument(
      "64c8cc474dd27a0e17dd",
      "64c8ccb3926165c1099a",
      id
    );
    deleteDoc.then(
      function (response) {
        console.log("resp", response);
      },
      function (error) {
        console.log("error", error);
      }
    );

    setEmployeeData((prev) => prev.filter((i) => i.id !== id));
  };
  const handleEdit = (id) => {
    setempData(() => employeeData.find((i) => i.id === id));
    seteditModal(true);
  };

  return (
    <div>
      {showModal && (
        <ModelPopup
          setshowModal={setshowModal}
          setEmployeeData={setEmployeeData}
        />
      )}
      {editModal && (
        <EditDetailsModal
          setEditModal={seteditModal}
          empData={empData}
          setEmployeeData={setEmployeeData}
          setshowModal={setshowModal}
        />
      )}
      <Preview active={activePreview} setActivePreview={setActivePreview} />
      <HeaderSection
        setshowModal={setshowModal}
        data={employeeData}
        // setEmployeeData={setEmployeeData}
        setFilterData={setFilterData}
      />
      <EmployeeGrid
        employeeData={filterData.isfilterData ? filterData.data : employeeData}
        setActivePreview={setActivePreview}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;