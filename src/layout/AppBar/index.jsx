import React from "react";
import Logo from "../../assets/logo.png";
import "./style.css";

export default function AppMenu() {
  return (
    <div
      style={{
        background: "#091E3A",
        fontFamily: "Libre Franklin !important",
        fontWeight: 600,
      }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid p-0">
            <a className="navbar-brand" href="#">
              <img
                src={Logo}
                style={{
                  maxWidth: "40px",
                  maxHeight: "40px",
                  minHeight: "38px",
                  minWidth: "38px",
                }}
                alt={"Logo"}
              />
            </a>
            <button
              className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="toggler-icon top-bar"></span>
              <span className="toggler-icon middle-bar"></span>
              <span className="toggler-icon bottom-bar"></span>
            </button>
            <div
              className="collapse navbar-collapse text-center"
              id="navbarText"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    Katalog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Kompaniya haqida
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Bloglar
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Kalkulyator
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Kontaktlar
                  </a>
                </li>
              </ul>
              <span className="navbar-text text-white d-flex align-items-center">
                +998 99 000 00 00
                <svg
                  style={{ marginLeft: "10px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M13.75 4.53125H6.25C6.12568 4.53125 6.00645 4.58064 5.91854 4.66854C5.83064 4.75645 5.78125 4.87568 5.78125 5V8.75C5.78125 8.87432 5.83064 8.99355 5.91854 9.08146C6.00645 9.16936 6.12568 9.21875 6.25 9.21875H13.75C13.8743 9.21875 13.9935 9.16936 14.0815 9.08146C14.1694 8.99355 14.2188 8.87432 14.2188 8.75V5C14.2188 4.87568 14.1694 4.75645 14.0815 4.66854C13.9935 4.58064 13.8743 4.53125 13.75 4.53125ZM13.2812 8.28125H6.71875V5.46875H13.2812V8.28125ZM15.625 2.03125H4.375C4.08492 2.03125 3.80672 2.14648 3.6016 2.3516C3.39648 2.55672 3.28125 2.83492 3.28125 3.125V16.875C3.28125 17.1651 3.39648 17.4433 3.6016 17.6484C3.80672 17.8535 4.08492 17.9688 4.375 17.9688H15.625C15.9151 17.9688 16.1933 17.8535 16.3984 17.6484C16.6035 17.4433 16.7188 17.1651 16.7188 16.875V3.125C16.7188 2.83492 16.6035 2.55672 16.3984 2.3516C16.1933 2.14648 15.9151 2.03125 15.625 2.03125ZM15.7812 16.875C15.7812 16.9164 15.7648 16.9562 15.7355 16.9855C15.7062 17.0148 15.6664 17.0312 15.625 17.0312H4.375C4.33356 17.0312 4.29382 17.0148 4.26451 16.9855C4.23521 16.9562 4.21875 16.9164 4.21875 16.875V3.125C4.21875 3.08356 4.23521 3.04382 4.26451 3.01451C4.29382 2.98521 4.33356 2.96875 4.375 2.96875H15.625C15.6664 2.96875 15.7062 2.98521 15.7355 3.01451C15.7648 3.04382 15.7812 3.08356 15.7812 3.125V16.875ZM7.65625 11.5625C7.65625 11.717 7.61043 11.8681 7.52459 11.9965C7.43874 12.125 7.31673 12.2252 7.17397 12.2843C7.03122 12.3434 6.87413 12.3589 6.72259 12.3287C6.57104 12.2986 6.43183 12.2242 6.32257 12.1149C6.21331 12.0057 6.13891 11.8665 6.10876 11.7149C6.07862 11.5634 6.09409 11.4063 6.15322 11.2635C6.21235 11.1208 6.31248 10.9988 6.44096 10.9129C6.56944 10.8271 6.72048 10.7812 6.875 10.7812C7.0822 10.7812 7.28091 10.8636 7.42743 11.0101C7.57394 11.1566 7.65625 11.3553 7.65625 11.5625ZM10.7812 11.5625C10.7812 11.717 10.7354 11.8681 10.6496 11.9965C10.5637 12.125 10.4417 12.2252 10.299 12.2843C10.1562 12.3434 9.99913 12.3589 9.84759 12.3287C9.69604 12.2986 9.55683 12.2242 9.44757 12.1149C9.33831 12.0057 9.26391 11.8665 9.23376 11.7149C9.20362 11.5634 9.21909 11.4063 9.27822 11.2635C9.33735 11.1208 9.43748 10.9988 9.56596 10.9129C9.69444 10.8271 9.84548 10.7812 10 10.7812C10.2072 10.7812 10.4059 10.8636 10.5524 11.0101C10.6989 11.1566 10.7812 11.3553 10.7812 11.5625ZM13.9062 11.5625C13.9062 11.717 13.8604 11.8681 13.7746 11.9965C13.6887 12.125 13.5667 12.2252 13.424 12.2843C13.2812 12.3434 13.1241 12.3589 12.9726 12.3287C12.821 12.2986 12.6818 12.2242 12.5726 12.1149C12.4633 12.0057 12.3889 11.8665 12.3588 11.7149C12.3286 11.5634 12.3441 11.4063 12.4032 11.2635C12.4623 11.1208 12.5625 10.9988 12.691 10.9129C12.8194 10.8271 12.9705 10.7812 13.125 10.7812C13.3322 10.7812 13.5309 10.8636 13.6774 11.0101C13.8239 11.1566 13.9062 11.3553 13.9062 11.5625ZM7.65625 14.6875C7.65625 14.842 7.61043 14.9931 7.52459 15.1215C7.43874 15.25 7.31673 15.3502 7.17397 15.4093C7.03122 15.4684 6.87413 15.4839 6.72259 15.4537C6.57104 15.4236 6.43183 15.3492 6.32257 15.2399C6.21331 15.1307 6.13891 14.9915 6.10876 14.8399C6.07862 14.6884 6.09409 14.5313 6.15322 14.3885C6.21235 14.2458 6.31248 14.1238 6.44096 14.0379C6.56944 13.9521 6.72048 13.9062 6.875 13.9062C7.0822 13.9062 7.28091 13.9886 7.42743 14.1351C7.57394 14.2816 7.65625 14.4803 7.65625 14.6875ZM10.7812 14.6875C10.7812 14.842 10.7354 14.9931 10.6496 15.1215C10.5637 15.25 10.4417 15.3502 10.299 15.4093C10.1562 15.4684 9.99913 15.4839 9.84759 15.4537C9.69604 15.4236 9.55683 15.3492 9.44757 15.2399C9.33831 15.1307 9.26391 14.9915 9.23376 14.8399C9.20362 14.6884 9.21909 14.5313 9.27822 14.3885C9.33735 14.2458 9.43748 14.1238 9.56596 14.0379C9.69444 13.9521 9.84548 13.9062 10 13.9062C10.2072 13.9062 10.4059 13.9886 10.5524 14.1351C10.6989 14.2816 10.7812 14.4803 10.7812 14.6875ZM13.9062 14.6875C13.9062 14.842 13.8604 14.9931 13.7746 15.1215C13.6887 15.25 13.5667 15.3502 13.424 15.4093C13.2812 15.4684 13.1241 15.4839 12.9726 15.4537C12.821 15.4236 12.6818 15.3492 12.5726 15.2399C12.4633 15.1307 12.3889 14.9915 12.3588 14.8399C12.3286 14.6884 12.3441 14.5313 12.4032 14.3885C12.4623 14.2458 12.5625 14.1238 12.691 14.0379C12.8194 13.9521 12.9705 13.9062 13.125 13.9062C13.3322 13.9062 13.5309 13.9886 13.6774 14.1351C13.8239 14.2816 13.9062 14.4803 13.9062 14.6875Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
