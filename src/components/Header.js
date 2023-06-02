import React from "react";
// images

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a className="text-[30px] font-bold" href="#">
            HOME
          </a>
          {/* button */}
          <a className="text-[30px] font-bold" href="#contact">
          <button className="btn btn-sm">
          Work with me</button></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
