import React from "react";

const Nav = () => {
  return (
    <nav className="header-nav">
      <div className="header-nav_logo">
        <h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="31"
            viewBox="0 0 124 31"
            fill="none"
          >
            <path
              d="M18.88 30V24.24H6.95999V1.52002H0.23999V30H18.88Z"
              fill="#4A99D3"
            />
            <path
              d="M21.4591 15.76C21.4591 24.8 27.8591 31 37.2191 31C46.5391 31 52.9791 24.8 52.9791 15.76C52.9791 6.76002 46.5391 0.52002 37.2191 0.52002C27.8591 0.52002 21.4591 6.76002 21.4591 15.76ZM28.1791 15.76C28.1791 10.2 31.8991 6.28002 37.2191 6.28002C42.5391 6.28002 46.2591 10.2 46.2591 15.76C46.2591 21.32 42.5391 25.24 37.2191 25.24C31.8991 25.2 28.1791 21.32 28.1791 15.76Z"
              fill="#4A99D3"
            />
            <path
              d="M81.1306 18.24C80.8906 22.2 77.2506 25.24 72.7306 25.24C67.3706 25.24 63.5306 21.24 63.5306 15.76C63.5306 10.24 67.2906 6.28002 72.5306 6.28002C75.8906 6.28002 78.9306 8.20002 79.8506 10.84L86.0106 9.48002C84.6106 4.24002 79.0906 0.52002 72.5706 0.52002C63.4106 0.52002 56.8106 6.92002 56.8106 15.76C56.8106 24.6 63.4106 31 72.5706 31C82.1706 31 88.5306 23.8 87.6106 13.84H72.3306V18.24H81.1306Z"
              fill="#4A99D3"
            />
            <path
              d="M91.5372 15.76C91.5372 24.8 97.9372 31 107.297 31C116.617 31 123.057 24.8 123.057 15.76C123.057 6.76002 116.617 0.52002 107.297 0.52002C97.9372 0.52002 91.5372 6.76002 91.5372 15.76ZM98.2572 15.76C98.2572 10.2 101.977 6.28002 107.297 6.28002C112.617 6.28002 116.337 10.2 116.337 15.76C116.337 21.32 112.617 25.24 107.297 25.24C101.977 25.2 98.2572 21.32 98.2572 15.76Z"
              fill="#4A99D3"
            />
          </svg>
        </h1>
      </div>
      <ul className="header-nav_list">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Nav;
