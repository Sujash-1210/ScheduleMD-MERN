import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-36 h-12" src={assets.ScheduleMd} alt="" />
          <p className="w-full md:w-2/3 text-gr leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nobis
            nostrum, rerum pariatur similique, sunt omnis optio dignissimos,
            excepturi neque nemo dolor! Iste maiores quasi cum molestiae ab
            architecto ipsa?
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-202-456-7890</li>
            <li>doctorapp@dev.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-center py-5 text-sm">
          Copyright 2025 @DoctorApp - ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
};

export default Footer;
