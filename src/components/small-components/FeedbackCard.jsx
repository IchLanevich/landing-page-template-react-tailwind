import React from "react";
import { avatar } from "../../assets";

const FeedbackCard = () => {
  return (
    <div className="feedback-card max-w-[486px] max-h-[184px] flex bg-[#F3F4F6] p-8 rounded-md">
      <div className="profile mr-4 md:mr-8 flex items-start">
        <span className="avatar">
          <img src={avatar} alt="avatar" className="w-16 h-16" />
        </span>
        <div className="name-and-title my-2 ml-3">
          <h5 className="text-base font-semibold text-gray-900 mb-[6px]">
            Client Name
          </h5>
          <p className="font-normal text-sm">Director</p>
        </div>
      </div>
      <p className="review max-w-[219px]">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis
        nisi, justo, integer dignissim ornare leo euismod ac."
      </p>
    </div>
  );
};

export default FeedbackCard;
