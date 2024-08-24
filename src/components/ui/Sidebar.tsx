import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaHome, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { GrServices } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { BsInfoCircle } from 'react-icons/bs';
import { GrContactInfo } from 'react-icons/gr';

function Sidebar() {
  const menus = [
    { name: 'Home', Link: '/', icon: FaHome },
    { name: 'Services', Link: '/', icon: GrServices },
    { name: 'Clients', Link: '/', icon: FaUsers },
    { name: 'Profile', Link: '/', icon: CgProfile },
    { name: 'About', Link: '/', icon: BsInfoCircle },
    { name: 'Contact', Link: '/', icon: GrContactInfo },
    { name: 'Sign Out', Link: '/', icon: FaSignOutAlt },
  ];

  const [isOpen, setiOOpen] = useState(true);
  return (
    <div
      className={`bg-slate-900 h-screen p-2 text-gray-100 ${isOpen ? 'w-60' : 'w-14'} duration-500 fixed`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          onClick={() => {
            setiOOpen(!isOpen);
          }}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-col mt-4 gap-4 relative">
        {menus.map((link, i) => (
          <Link
            to={link.Link}
            key={i}
            className="flex items-center text-sm gap-3.5 font-medium p-2  hover:bg-gray-600 rounded-md"
          >
            <div>{React.createElement(link.icon, { size: '26' })}</div>
            <h2
              style={{ transitionDelay: `${i + 3}00ms` }}
              className={`whitespace-pre duration-500 ${!isOpen && 'opacity-0 translate-x-28 overflow-hidden'}`}
            >
              {isOpen && link.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
