import React, { useState } from "react";
import { useFormik } from "formik";
import "./App.css";
import { GrClose } from "react-icons/gr";
import { databases } from "../src/appWriter/appWriterConfig";

const EditDetailsModal = ({
  empData,
  setEditModal,
  setEmployeeData,
  setshowModal,
}) => {
  const { firstname, lastname, email, phone, job, dateofjoining, image } =
    empData;
  //const date = new Date(dateofjoining)
  const [loading, setLoading] = useState(false);
  const handleEdit = async (values) => {
    setLoading(true);
    try {
      const deleteDoc = databases.updateDocument(
        "64c8cc474dd27a0e17dd",
        "64c8ccb3926165c1099a",
        empData.id,
        values
      );
      deleteDoc.then(
        function (response) {
          console.log("resp", response);
        },
        function (error) {
          console.log("error", error);
        }
      );

      setEmployeeData((val) =>
        val.map((i) => {
          return i.id == empData.id ? { ...values, id: i.id } : i;
        })
      );
      setLoading(false);
      setEditModal(false);
    } catch (err) {
      console.log(err);
    }
  };
  const formik = useFormik({
    initialValues: {
      firstname,
      lastname,
      email,
      phone,
      job,
      dateofjoining,
      image,
    },
    onSubmit: (values) => {
      handleEdit(values);
    },
  });
  console.log(formik.initialValues);

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
              <h2>Edit Employee Details</h2>
            </div>
            <div onClick={() => setshowModal(false)}>
              <GrClose />
            </div>
          </div>
          <div className="modalInner">
            <div className="input-container">
              <div className="input-box">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  required
                  defaultValue={firstname}
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
                  defaultValue={lastname}
                  onChange={formik.handleChange}
                  values={formik.values.lastname}
                />
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="">Image</label>
              <input
                type="text"
                name="lastname"
                required
                defaultValue={image}
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
                  defaultValue={email}
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
                  defaultValue={phone}
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
                defaultValue={job}
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
                defaultValue={dateofjoining}
                onChange={formik.handleChange}
                values={formik.values.dateofjoining}
              />
            </div>
          </div>
          <div className="modalFooter">
            <button className="add-btn" type="submit">
              {loading ? "Editing" : "Edit and Save"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditDetailsModal;
