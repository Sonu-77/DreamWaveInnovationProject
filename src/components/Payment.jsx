import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { MdFilterList } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function Payment() {
  return (
    <div>
      <div>
        <div className="flex flex-col gap-[1vw] ml-[18vw] mt-[4vw]">
          <h3 className="font-bold text-[1.2vw]">
            Account Number{" "}
            <span className="font-normal underline ml-[1vw]">
              26736573634567
            </span>{" "}
          </h3>
          <h3 className="font-bold text-[1.2vw]">
            Statement Balance{" "}
            <span className="font-normal underline ml-[1vw]">R 34569.98</span>{" "}
          </h3>
          <h3 className="font-bold text-[1.2vw]">
            OPIGLO Prepaid Available Balance{" "}
            <span className="font-normal underline ml-[1vw]">R 34569.9</span>{" "}
          </h3>
          <h3 className="font-bold text-[1.2vw]">
            Current Payment Method{" "}
            <span className="font-normal underline ml-[2vw]">Prepaid(EFT)</span>{" "}
          </h3>
          <div className="h-[3vw] w-[10vw] flex justify-center items-center rounded-lg mt-[0.5vw] bg-[#87d9d9]">
            <p className="font-medium text-[1.2vw]">Add Balance</p>
          </div>
        </div>
      </div>
      <div className="min-h-[15vw] w-[70vw] bg-[#ececec] ml-[18vw] mt-[3vw] rounded-xl">
        <div className="flex h-[3vw] w-[100%]  items-center pt-[1vw]">
          <h4 className="ml-[1vw] text-[1.2vw] h-[100%] w-[25vw] flex justify-start font-medium tracking-wide items-center">
            Transaction Overview
          </h4>
          <div className="flex gap-[1vw] ml-[18vw] text-[#ffffff] ">
            <div className="flex pr-[1vw] items-center  gap-[0.5vw] rounded-md pl-[1vw] bg-[#15b2b2]">
              <h4>Date</h4>
              <BsCalendarDate />
            </div>
            <div className="flex pr-[1vw] items-center  gap-[0.5vw] rounded-md pl-[1vw] bg-[#15b2b2]">
              <h4>Filter</h4>
              <MdFilterList />
            </div>
            <div className="flex  h-[1.5vw] w-[10vw] pr-[1vw] items-center justify-between  gap-[1vw] rounded-xl pl-[1.5vw] bg-[#15b2b2]">
              <h4>Search</h4>
              <FaSearch />
            </div>
          </div>
        </div>
        <div className="h-[2vw] w-[68vw] bg-[#15b2b2] mt-[2vw] flex items-center justify-around font-bold rounded-md ml-[1vw] mr-[1vw] ">
          <h4 className=" ">User Name</h4>
          <h4 className="">Transaction ID</h4>
          <h4 className="">Company Name</h4>
          <h4 className="">Dates and Time</h4>
          <h4 className="">Amount</h4>
          <h4 className="">Status</h4>
        </div>
        <div className="h-[4vw] w-[68vw] ml-[1vw] relative mr-[1vw]  flex items-center justify-around border-b-[0.1vw] border-solid border-[#757374]">
          <h4 className=" h-[100%] w-[10vw] flex justify-center items-center flex-wrap  font-medium ">
            John Doa
          </h4>
          <h4 className=" h-[100%] w-[10vw] flex justify-start items-center flex-wrap  font-medium ">
            #1234329790
          </h4>
          <h4 className=" h-[100%] w-[10vw] flex justify-center items-center flex-wrap  font-medium ">
            Lorem, ipsum dolor.
          </h4>
          <h4 className=" h-[100%] w-[10vw]  flex justify-end items-center flex-wrap  font-medium ">
            2024-11-10 12:34
          </h4>
          <h4 className=" h-[100%] w-[5vw]  flex justify-end items-center flex-wrap  font-medium ">
            1000
          </h4>
          <h4 className=" h-[100%] w-[10vw] flex justify-end items-center flex-wrap font-medium ">
            Completed
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Payment;
