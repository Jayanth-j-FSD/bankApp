import React, { useState } from "react";
import leafLogo from "../assets/image/leafIcon.svg";
import image from "../assets/image/vh3ko7ob.png";
import MessageIcon from "../assets/image/message.svg";
import Badge from "./Badge";

function Navbar() {
  const [decision, setDecision] = useState("TCS-MAKER-TCS");
  const [badgeCounts, setBadgeCounts] = useState({
    message: 5,
  });

  return (
    <nav className="navbar navbar-expand-sm bg-blue-500 p-2">
      <div className="navbar-brand d-flex align-items-center">
        <img className="leafLogo" alt="leafLogo" src={leafLogo}></img>
        <h4 className="BankName">Bank Of India</h4>
      </div>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <i className="fa-solid navMenuBar fa-bars d-lg-none d-sm-none"></i>
            <div className="dropdown">
              <a
                className="nav-link dropdown-toggle dropdownName-nav"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                {decision}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setDecision("TCS-MAKER-TCS")}
                  >
                    TCS-MAKER-TCS
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setDecision("TCS-RECIEVER-TCS")}
                  >
                    TCS-RECIEVER-TCS
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <div className="d-flex align-items-center">
              <img alt="Logo" src={image} className="logo-img topNav" />
            </div>
          </li>
          <li className="nav-item">
            <div className="d-flex align-items-center">
              <i className="fa-regular icons fa-clipboard p-1"></i>
              <Badge count={badgeCounts.message} colour="red" />
            </div>
          </li>
          <li className="nav-item">
            <div className="d-flex align-items-center">
              <img
                className="icons messageimg"
                src={MessageIcon}
                alt="Message"
              />
              <Badge count={badgeCounts.message} colour="red" />
            </div>
          </li>
          <li className="nav-item">
            <div className="d-flex align-items-center">
              <i className="fa-solid icons fa-clipboard-check p-1"></i>
              <Badge count={badgeCounts.message} colour="red" />
            </div>
          </li>
          <li className="nav-item">
            <div className="d-flex align-items-center">
              <i className="fa-solid icons fa-arrow-trend-up p-1"></i>
              <Badge count={badgeCounts.message} colour="red" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
//////////////////////////////////////////
// import React, { useState } from "react";
// import "../App.css";
// import image from "../assets/image/vh3ko7ob.png";
// import MessageIcon from "../assets/image/message.svg";
// import leafLogo from "../assets/image/leafIcon.svg";
// import Badge from "./Badge";
// function Navbar() {
//   const [decision, setDecision] = useState("TCS-MAKER-TCS");
//   const [badgeCounts, setBadgeCounts] = useState({
//     message: 5,
//   });
//   return (
//     <div>
//       <nav className="navbar bg-blue-500 d-flex justify-content-between align-items-center flex-wrap p-2">
//         <div className="d-flex align-items-center">
//           <i className="fa-solid navMenuBar fa-bars d-sm-none"></i>
//           <img className="leafLogo" alt="leafLogo" src={leafLogo}></img>
//           <h4 className="BankName">Bank Of India</h4>
//         </div>

//         <div className="d-flex align-items-center">
//           <img alt="Logo" src={image} className="logo-img topNav" />
//           <div className="dropdown">
//             <a
//               className="nav-link dropdownName-nav  dropdown-toggle"
//               href="#"
//               role="button"
//               data-bs-toggle="dropdown"
//             >
//               {decision}
//             </a>
//             <ul className="dropdown-menu ">
//               <li>
//                 <a
//                   className="dropdown-item"
//                   href="#"
//                   onClick={() => setDecision("TCS-MAKER-TCS")}
//                 >
//                   TCS-MAKER-TCS
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className="dropdown-item "
//                   href="#"
//                   onClick={() => setDecision("TCS-RECIEVER-TCS")}
//                 >
//                   TCS-RECIEVER-TCS
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="d-flex flex-row justify-content-center ">
//             <i className="fa-regular icons fa-clipboard p-1"></i>
//             <Badge count={badgeCounts.message} colour="red" />
//           </div>

//           <div className="d-flex flex-row justify-content-center">
//             <img
//               className="icons messageimg "
//               src={MessageIcon}
//               alt="Message"
//             />
//             <Badge count={badgeCounts.message} colour="red" />
//           </div>
//           <div className="d-flex flex-row justify-content-center">
//             <i className="fa-solid icons fa-clipboard-check p-1"></i>
//             <Badge count={badgeCounts.message} colour="red" />
//           </div>
//           <div className="d-flex flex-row justify-content-center">
//             <i className="fa-solid icons fa-arrow-trend-up p-1"></i>
//             <Badge count={badgeCounts.message} colour="red" />
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
