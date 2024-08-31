// ./src/components/NavBar.js

"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
  const [modalType, setModalType] = useState(null);

  const handleModalOpen = (type) => setModalType(type);
  const handleModalClose = () => setModalType(null);

  return (
    <>
      <nav className="w-full bg-white py-5 px-10 flex flex-wrap gap-2 shadow-custom-light">
        {/* Top Row */}
        <section className="navsec w-full flex items-center justify-between mb-2">
          <section className="logo flex items-center gap-2">
            <div>
              <img
                src="/images/healthwire_logo.png"
                alt="Healthwire Logo"
                width={40}
                height={40}
              />
            </div>
            <div className="text-xl font-semibold font-sans">Healthwire</div>
          </section>
          <div className="searchsec w-600 flex items-center">
            <div className="search h-12 flex items-center border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="px-2 h-8 border-r border-blue-400 flex items-center justify-center gap-2 text-center">
                <div className="location flex items-center justify-center text-blue-700">
                  <FontAwesomeIcon icon={faLocationCrosshairs} className="size-4" />
                </div>
                <div className="drop flex items-center justify-center text-center">
                  <select name="" id="" className="w-20 border-0 outline-none">
                    <option value="">Select</option>
                    <option value="">Islamabad</option>
                    <option value="">Karachi</option>
                    <option value="">Lahore</option>
                    <option value="">Multan</option>
                  </select>
                </div>
              </div>
              <div className="inp px-4">
                <input
                  className="w-96 outline-none border-0 text-gray-600"
                  placeholder="Search for medicines, lab tests, and doctors...."
                  type="text"
                />
              </div>
              <div className="flex items-center justify-center text-center">
                <button
                  className="searchbtn w-16 h-12 flex items-center text-center justify-center bg-blue-500 text-white border-none"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="size-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="btnCart flex items-center justify-between gap-8">
            <div className="cart text-blue-900">
              <FontAwesomeIcon icon={faCartShopping} className="size-6" />
            </div>
            <div className="btn-sign w-36 h-9 border-2 rounded-lg border-blue-900 flex items-center justify-center gap-2 size-4 text-blue-900 font-sans font-semibold">
              <button className="login">Login</button>
              /
              <button className="signup">Signup</button>
            </div>
          </div>
        </section>

        {/* Bottom Row with Navigation Links */}
        <section className="navsec nav-links w-full py-2 flex justify-between gap-8">
          <div className="flex justify-center gap-8">
            <a href="/" className="text-blue-900 hover:underline">
              Home
            </a>
            <a
              href="#"
              onMouseEnter={() => handleModalOpen('pharmacy')}
              onMouseLeave={handleModalClose}
              className="text-blue-900 hover:underline"
            >
              Pharmacy
            </a>
            <a
              href="#"
              onMouseEnter={() => handleModalOpen('labTests')}
              onMouseLeave={handleModalClose}
              className="text-blue-900 hover:underline"
            >
              Lab Tests
            </a>
            <a
              href="#"
              onMouseEnter={() => handleModalOpen('doctors')}
              onMouseLeave={handleModalClose}
              className="text-blue-900 hover:underline"
            >
              Doctors
            </a>
            <a
              href="#"
              onMouseEnter={() => handleModalOpen('hospitals')}
              onMouseLeave={handleModalClose}
              className="text-blue-900 hover:underline"
            >
              Hospitals
            </a>
          </div>
          <div className="pharm text-blue-900 font-semibold font-sans border-b border-blue-900">
            <a href="/">Pharmacy Franchise</a>
          </div>
        </section>
      </nav>

    </>
  );
};

export default NavBar;
