import React from 'react';

export default function Footer() {
  return (
    <footer className=" w-full  bg-black ">
      <div className="footer_content flex justify-around items-center shadow-inner pt-[70px] mb-[50px]">
        <div className="contact_detail ml-[4px] ">
          <h3 className="text-gray-200  mb-[20px] font-[500] text-[20px] h3-responsive">
            GET IN TOUCH
          </h3>
          <p>
            <span className="text-footer-responsive">Phone No: </span>
            <span className="text-footer-responsive">0416677889</span> <br />
            <span className="text-footer-responsive">Address: </span>
            <span className="text-footer-responsive">Unknow</span> <br />
            <span className="text-footer-responsive">Email: </span>
            <span className="text-footer-responsive">
              sales@kennykitchen.com.au
            </span>
          </p>
        </div>
        <div className="trading_hour mr-[4px]">
          <h3 className="text-gray-200 text-right font-[500] mb-[20px] text-[20px] h3-responsive">
            TRADING HOURS
          </h3>
          <p className="text-right">
            <span className=" text-footer-responsive ">Mon- Sat: </span>
            <span className=" text-footer-responsive">7am - 5pm</span> <br />
            {/*   <span className=" text-footer-responsive ">Sat: </span>
              <span className=" text-footer-responsive">
                Appointment Only
              </span>{' '} */}
            <br />
            <span className=" text-footer-responsive ">
              Sun + Public Holidays:
            </span>
            <span className=" text-footer-responsive"> Appointment Only</span>{' '}
            <br />
          </p>
        </div>
      </div>
      <p className="text-center pb-[70px] text-gray-200 text-xl shadow-inner max-[640px]:text-[16px] ">
        Copyright 2023 Duc Tran
      </p>
    </footer>
  );
}
