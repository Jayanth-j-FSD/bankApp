import "./App.css";
import { Provider, useDispatch } from "react-redux";
import store from "./store";
import Fade from "react-bootstrap/Fade";
import BodyNav from "./components/BodyNav";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import TableData from "./components/TableData";
import AccordionComponent from "./components/AccordianComponent";
import { useEffect, useState } from "react";
import MenuSearchNavbar from "./components/MenuSearchNavbar";
import axios from "axios";
import "./App.css";
import { useSelector } from "react-redux";
import LoadingSpinner from "./loaders/LoadingSpinner";
import {
  setAllData,
  setSavingsData,
  setInvestmentData,
  setCurrentData,
  setSelectedCard,
  setHeaders,
  setActive,
  setInactive,
  setAccNumbers,
  setCustom,
} from "./reducers/tableDataReducer";

function App() {
  const dispatch = useDispatch();
  const selectedCard = useSelector((state) => state.tableData.selectedCard);
  const allData = useSelector((state) => state.tableData.allData);
  const savingsData = useSelector((state) => state.tableData.savingsData);
  const investmentData = useSelector((state) => state.tableData.investmentData);
  const currentData = useSelector((state) => state.tableData.currentData);
  const headers = useSelector((state) => state.tableData.headers);
  const custom = useSelector((state) => state.tableData.custom);
  const selectedOption = useSelector((state) => state.tableData.selectedOption);
  const selectedOption2 = useSelector(
    (state) => state.tableData.selectedOption2
  );
  const active = useSelector((state) => state.tableData.active);
  const inActive = useSelector((state) => state.tableData.inActive);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  // const [searchedBalance, setSearchedBalance] = useState(null);
  const updatedHeaders = [...headers, { COLUMN_NAME: "none" }];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseAll = await axios.get("http://localhost:5000/allData");
        dispatch(setAllData(responseAll.data));
        //custom
        const resCustom = await axios.get("http://localhost:5000/custom");
        dispatch(setCustom(resCustom.data));

        //savings account
        const responseSavings = await axios.get(
          "http://localhost:5000/accountDetails/savings"
        );
        dispatch(setSavingsData(responseSavings.data));

        //Investors
        const responseInvest = await axios.get(
          "http://localhost:5000/accountDetails/investors"
        );
        dispatch(setInvestmentData(responseInvest.data));

        //current

        const responseCurrent = await axios.get(
          "http://localhost:5000/accountDetails/current"
        );
        dispatch(setCurrentData(responseCurrent.data));
        //active
        const resActive = await axios.get("http://localhost:5000/active");
        dispatch(setActive(resActive.data));

        const resInActive = await axios.get("http://localhost:5000/inActive");
        dispatch(setInactive(resInActive.data));

        //headers
        const resHeaders = await axios.get(
          "http://localhost:5000/tableHeaders"
        );
        dispatch(setHeaders(resHeaders.data));

        // account numbers
        const resAllAccNum = await axios.get(
          "http://localhost:5000/all/AccNum"
        );
        dispatch(setAccNumbers(resAllAccNum.data));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleCardClick = (cardName) => {
    dispatch(setSelectedCard(cardName));
  };

  return (
    <Provider store={store}>
      {loading ? (
        <div className="loader">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="main">
          <div className="App-Header">
            <Navbar />
          </div>
          <div className="body-container">
            <div className="App-body">
              <BodyNav />
              <Cards onCardClick={handleCardClick} />
            </div>
            <hr className="breaker" />
            {selectedCard === "All" && (
              <div
                className={`App-Card-Data flex align-items-center  ${
                  selectedCard === "All" ? "slide-down" : ""
                }`}
              >
                <div className="MenuSearchNavbar">
                  <MenuSearchNavbar colsData={updatedHeaders} />
                </div>
                {selectedOption === "" || selectedOption === "NONE" ? (
                  <div>
                    <AccordionComponent
                      name="CURRENT"
                      count={currentData.length}
                      data={<TableData data={currentData} />}
                    />
                    <AccordionComponent
                      name="INVESTMENT"
                      count={investmentData.length}
                      data={<TableData data={investmentData} />}
                    />
                    <AccordionComponent
                      name="SAVINGS"
                      count={savingsData.length}
                      data={<TableData data={savingsData} />}
                    />
                  </div>
                ) : selectedOption === "STATUS" ? (
                  <>
                    <AccordionComponent
                      name="Active"
                      count={active.length}
                      data={active.map((user, index) => (
                        <AccordionComponent
                          key={index}
                          name={`${user.first_name}`}
                          count={active.length}
                          onClick={(e) => e.stopPropagation()}
                          data={<TableData data={[user]} />}
                        />
                      ))}
                    />
                    <AccordionComponent
                      name="Inactive"
                      count={inActive.length}
                      data={inActive.map((user, index) => (
                        <AccordionComponent
                          key={index}
                          name={`${user.first_name}`}
                          count={inActive.length}
                          onClick={(e) => e.stopPropagation()}
                          data={<TableData data={[user]} />}
                        />
                      ))}
                    />
                  </>
                ) : selectedOption === "ACC_NO" ? (
                  custom.map((user, index) => (
                    <AccordionComponent
                      key={index}
                      name={`${user.acc_no}`}
                      count={1}
                      data={<TableData data={[user]} />}
                    />
                  ))
                ) : selectedOption === "IFSC_CODE" ? (
                  custom.map((user, index) => (
                    <AccordionComponent
                      key={index}
                      name={`${user.Ifsc_code}`}
                      count={custom.length}
                      data={<TableData data={[user]} />}
                    />
                  ))
                ) : selectedOption === "ACC_TYPE" ? (
                  <>
                    <AccordionComponent
                      name="Current"
                      count={currentData.length}
                      data={currentData.map((user, index) => (
                        <AccordionComponent
                          key={index}
                          name={`${user.first_name}`}
                          count={1}
                          onClick={(e) => e.stopPropagation()}
                          data={<TableData data={[user]} />}
                        />
                      ))}
                    />
                    <AccordionComponent
                      name="Investors"
                      count={investmentData.length}
                      data={investmentData.map((user, index) => (
                        <AccordionComponent
                          key={index}
                          name={`${user.first_name}`}
                          count={1}
                          onClick={(e) => e.stopPropagation()}
                          data={<TableData data={[user]} />}
                        />
                      ))}
                    />
                    <AccordionComponent
                      name="Savings"
                      count={savingsData.length}
                      data={savingsData.map((user, index) => (
                        <AccordionComponent
                          key={index}
                          name={`${user.first_name}`}
                          count={1}
                          data={<TableData data={[user]} />}
                        />
                      ))}
                    />
                  </>
                ) : selectedOption === "FIRST_NAME" ? (
                  custom.map((user, index) => (
                    <AccordionComponent
                      key={index}
                      name={`${user.first_name}`}
                      count={custom.length}
                      data={<TableData data={[user]} />}
                    />
                  ))
                ) : selectedOption === "LAST_NAME" ? (
                  custom.map((user, index) => (
                    <AccordionComponent
                      key={index}
                      name={`${user.last_name}`}
                      count={custom.length}
                      data={<TableData data={[user]} />}
                    />
                  ))
                ) : (
                  ""
                )}
              </div>
            )}
            {selectedCard === "Bank" && (
              <>
                <button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-fade-text"
                  aria-expanded={open}
                >
                  Toggle text
                </button>
                <Fade in={open}>
                  <div id="example-fade-text">dfgdfgxdfhbxdfbcgxgfbxf</div>
                </Fade>
              </>
            )}
          </div>
        </div>
      )}
    </Provider>
  );
}

export default App;
