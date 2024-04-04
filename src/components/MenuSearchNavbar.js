import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedOption,
  setSelectedOption2,
} from "../reducers/tableDataReducer";

const MenuSearchNavbar = ({colsData }) => {
  const selectedOption = useSelector((state) => state.tableData.selectedOption);
  const selectedOption2 = useSelector(
    (state) => state.tableData.selectedOption2
  );
  const dispatch = useDispatch();
  const [filteredColsData, setFilteredColsData] = useState(colsData);
  useEffect(() => {
    const newFilteredColsData = colsData.filter((item) =>
      [
        "first_name",
        "last_name",
        "acc_type",
        "acc_no",
        "Ifsc_code",
        "Status",
        "balance",
        "none",
      ].includes(item.COLUMN_NAME)
    );

    const filteredCols = newFilteredColsData.filter(
      (item) => item.COLUMN_NAME !== selectedOption.toLowerCase()
    );

    setFilteredColsData(filteredCols);

    // console.log(filteredColsData, "filteredColsData"); // This will log the previous state
  }, [colsData, selectedOption]); // Include filteredColsData in the dependencies array
  const handleOptionSelect = (option) => {
    dispatch(setSelectedOption(option.toUpperCase()));
  };

  const handleOptionSelect2 = (option) => {
    dispatch(setSelectedOption2(option.toUpperCase()));
  };

  return (
    <div>
      <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item menu-item d-flex align-items-center">
                <i className="fa-solid fa-list"></i>
              </li>
              <Dropdown
                options={filteredColsData.map((column) => column.COLUMN_NAME)}
                onSelect={handleOptionSelect}
                selectedOption={selectedOption}
              />
              <Dropdown
                options={filteredColsData.map((column) => column.COLUMN_NAME)}
                onSelect={handleOptionSelect2}
                selectedOption={selectedOption2}
              />
            </ul>
            <form className="d-flex">
              <input
                className="form-control searchBar me-3"
                type="search"
                placeholder="Search For Balance..."
                aria-label="Search"/>
              <button className="buttonINR">
                INR <i className="fa-solid fa-rotate-right"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

const Dropdown = ({ options, onSelect, selectedOption }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btndrp dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        style={{ maxHeight: "120px", overflowY: "auto" }}
        aria-expanded="false"
      >
        {selectedOption === "NONE" || selectedOption === ""
          ? "GROUP BY"
          : selectedOption}
      </button>
      <ul
        className="dropdown-menu"
        style={{ maxHeight: "200px", overflowY: "auto" }}
        aria-labelledby="dropdownMenuButton"
      >
        {options.map((option, index) => (
          <li
            className="dropdown-item"
            key={index}
            onClick={() => onSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSearchNavbar;
