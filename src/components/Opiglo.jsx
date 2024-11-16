import React from "react";

function Opiglo() {
  return (
    <div className="ml-[10vw]">
      <div className="flex h-[15vw] justify-around items-center w-[50vw]">
        <div className="text-[1.2vw] font-medium flex flex-col gap-[1vw] uppercase">
          <div>
            <h4 className="font-light text-[0.8vw] capitalize">Bank logo</h4>
            <h3>Bank :</h3>
          </div>
          <h3>Account Name :</h3>
          <h3>Account Number :</h3>
          <h3>Branch Code :</h3>
        </div>
        <div className="text-[1.2vw] font-medium flex flex-col gap-[1vw] uppercase">
          <div>
            <h4 className="font-light text-[0.8vw] capitalize">Bank logo</h4>
            <h3>Bank :</h3>
          </div>
          <h3>Account Name :</h3>
          <h3>Account Number :</h3>
          <h3>Branch Code :</h3>
        </div>
      </div>
      <div className="h-[5vw] w-[20vw]  flex justify-center items-center ml-[6vw]">
        <h3 className="font-bold text-[1.2vw]">
          Use Reference - <span className="ml-[1vw]">CSAOB2CT789</span>
        </h3>
      </div>
      <div className="h-[20vw] w-[70vw]">
        <ul className="list-disc text-[#000000] ml-[8vw] text-[1vw] tracking-wide">
          <li className="text-black marker:text-[#3dc8e2] marker:text-[2vw]">
            To facilitate timely processing, please add OPIGLO as a beneficiary
            in your bank and forward proof of payment directly to
            payments@opiglo.co.za. Keep in mind that if bank imports are
            unavailable or the payment is submitted outside business hours,
            processing may be delayed until the system resumes.
          </li>
          <li className="text-black marker:text-[#3dc8e2] marker:text-[2vw]">
            For accurate account allocation, avoid making payments in similar
            amounts within a 24-hour period, as the system may flag these as
            duplicates. Such payments will only be manually reconciled during
            OPIGLO’s business hours, Monday through Friday, 08:00 – 17:00.
          </li>
          <li className="text-black marker:text-[#3dc8e2] marker:text-[2vw]">
            Please double-check reference numbers and payment details, as OPIGLO
            cannot take responsibility for transactions with errors or duplicate
            entries. Payments made with incorrect details or duplicated amounts
            will only be reviewed and corrected within our business hours.
          </li>
        </ul>
      </div>
      <div className="h-[3vw] w-[70vw] flex justify-end items-center gap-[2vw]">
        <div className="h-[2vw] w-[6vw] flex justify-center text-[1vw] items-center text-[#ffffff] rounded-lg bg-[#eb1a19]">
          <h6>Cancel</h6>
        </div>
        <div className="h-[2vw] w-[6vw] flex justify-center text-[1vw] items-center text-[#ffffff] rounded-lg bg-[#82d80d]">
          <h6>Continue</h6>
        </div>
      </div>
    </div>
  );
}

export default Opiglo;
