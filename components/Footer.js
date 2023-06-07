import React from 'react';

export default function Footer() {
  return (
    <footer className=" w-full  bg-black">
      <div className="footer_content flex justify-around items-center shadow-inner pt-[70px] mb-[50px]">
        <div className="contact_detail ">
          <h3 className="text-gray-200 font-[500] mb-[20px] text-[20px]">
            GET IN TOUCH
          </h3>
          <p>
            <span className="text-gray-200 font-[700]">Phone No: </span>
            <span className="text-gray-200 font-[700]">0416611889</span> <br />
            <span className="text-gray-200 font-[700]">Address: </span>
            <span className="text-gray-200 font-[700]">Unknow</span> <br />
            <span className="text-gray-200 font-[700]">Email: </span>
            <span className="text-gray-200 font-[700]">
              sales@kennykitchen.com.au
            </span>
          </p>
        </div>
        <div className="trading_hour">
          <h3 className="text-gray-200 font-[500] mb-[20px] text-[20px]">
            TRADING HOURS
          </h3>
          <p>
            <span className="text-gray-200 font-[700] ">Mon- Fri: </span>
            <span className="text-gray-200 font-[700]">9am - 5pm</span> <br />
            <span className="text-gray-200 font-[700] ">Sat: </span>
            <span className="text-gray-200 font-[700]">
              Appointment Only
            </span>{' '}
            <br />
            <span className="text-gray-200 font-[700] ">
              Sun + Public Holidays:{' '}
            </span>
            <span className="text-gray-200 font-[700]">Closed</span> <br />
          </p>
        </div>
      </div>
      <p className="text-center pb-[70px] text-gray-200 text-xl shadow-inner ">
        Copyright 2023 Duc Tran
      </p>
    </footer>
  );
}
