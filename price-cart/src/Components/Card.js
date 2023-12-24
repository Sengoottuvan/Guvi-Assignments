import React from "react";

export default function Card({ name, plancost, Plandetails }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {name}
          </h5>
          <h6 className="card-price text-center">
            {plancost}
            <span className="period">/month</span>
          </h6>
          <hr></hr>
          <ul className="fa-ul">
            {(name=="Plus"||name=="Pro")?<li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              <strong>{Plandetails[0]}</strong>
            </li>:<li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {Plandetails[0]}
            </li>}
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {Plandetails[1]}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {Plandetails[2]}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {Plandetails[3]}
            </li>
            <li className={name == "Free" ? "text-muted" : "text-body"}>
              <span className="fa-li">
                <i
                  className={name == "Free" ? "fas fa-times" : "fas fa-check"}
                ></i>
              </span>
              {Plandetails[4]}
            </li>
            <li className={name == "Free" ? "text-muted" : "text-body"}>
              <span className="fa-li">
                <i
                  className={name == "Free" ? "fas fa-times" : "fas fa-check"}
                ></i>
              </span>
              {Plandetails[5]}
            </li>
            {(name=="Pro")?<li className={name == "Free" ? "text-muted" : "text-body"}>
              <span className="fa-li">
              <i
                  className={name == "Free" ? "fas fa-times" : "fas fa-check"}
                ></i>
              </span>
              <strong>{Plandetails[6]}</strong>
            </li>:<li className={name == "Free" ? "text-muted" : "text-body"}>
              <span className="fa-li">
              <i
                  className={name == "Free" ? "fas fa-times" : "fas fa-check"}
                ></i>
              </span>
              {Plandetails[6]}
            </li>}
            <li
              className={
                name == "Free" || name == "Plus" ? "text-muted" : "text-body"
              }
            >
              <span className="fa-li">
                <i
                  className={
                    name == "Free" || name == "Plus"
                      ? "fas fa-times"
                      : "fas fa-check"
                  }
                ></i>
              </span>
              {Plandetails[7]}
            </li>
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Buy Plan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}