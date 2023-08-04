import React, { useState } from "react";
import "./App.css";
import { useFormik } from "formik";
import { GrClose } from "react-icons/gr";
import { databases } from "./appWriter/appWriterConfig";
import { v4 as uuidv4 } from "uuid";
const ModelPopup = ({ setshowModal, setEmployeeData }) => {
  const [loading, setLoading] = useState(false);
  //const [imageURL, setImageURL] = useState('')
  //console.log(empById)

  const createEmployee = async (values) => {
    console.log("values", values);
    const id = uuidv4();
    values.id = id;
    setLoading(true);
    const createDoc = databases.createDocument(
      "64c8cc474dd27a0e17dd",
      "64c8ccb3926165c1099a",
      id,
      values
    );
    createDoc.then(
      function (response) {
        console.log("reso", response);
      },
      function (error) {
        console.log("error", error);
      }
    );
    setEmployeeData((pre) => [...pre, { id: 234, ...values }]);

    setLoading(false);
    setshowModal(false);
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      job: "",
      dateofjoining: "",
      image: "",
    },
    onSubmit: (values) => {
      createEmployee(values);
    },
  });
  return (
    <div className="modalContainer">
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="modalBox">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 35px",
              alignItems: "center",
            }}
          >
            <div className="modalHeader">
              <h2>New Employee Details</h2>
            </div>
            <div onClick={() => setshowModal(false)}>
              <GrClose />
            </div>
          </div>
          {/* <ImageUpload setImageURL={setImageURL}/> */}

          <div className="modalInner">
            <div className="input-container">
              <div className="input-box">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.firstname}
                />
              </div>
              <div className="input-box">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.lastname}
                />
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="">image</label>
              <input
                type="text"
                name="image"
                required
                onChange={formik.handleChange}
                values={formik.values.image}
              />
            </div>

            <div className="input-container">
              <div className="input-box">
                <label htmlFor="">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.email}
                />
              </div>
              <div className="input-box">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  name="phone"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.phone}
                />
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="">Job-position</label>
              <input
                type="text"
                name="job"
                required
                onChange={formik.handleChange}
                values={formik.values.job}
              />
            </div>
            <div className="input-box">
              <label htmlFor="">Date of Joining</label>
              <input
                type="date"
                name="dateofjoining"
                required
                onChange={formik.handleChange}
                values={formik.values.dateofjoining}
              />
            </div>
            <div className="modalFooter">
              <button className="add-btn" type="submit">
                {loading ? "Saving..." : "Save Details"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModelPopup;
