import React from 'react';
import './App.css';
import Card from './Card';

const EmployeeGrid = ({
  setActivePreview,
  employeeData,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className="grid">
      {employeeData?.map((i, n) => (
        <Card
          key={n}
          num={n}
          setActivePreview={setActivePreview}
          empData={i}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default EmployeeGrid;
