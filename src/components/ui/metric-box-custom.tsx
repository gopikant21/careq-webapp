import React from "react";
interface MetricBoxCustomProps {
    number: number;
    heading: string;
};

const MetricBoxCustom: React.FC<MetricBoxCustomProps> = ({number,heading}) => {
  return (
    <div className="flex flex-row justify-between  border-1  border-radius: 13.391px bg-white shadow-lg border border-slate-200 rounded-lg p-3 w-[23%] h-[120px] ml-[1.3rem]"
    style={{
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
    }}
    >
      <div>
        <div>
          <div className="font-bold">{heading}</div>
          <div className="text-green-600 font-bold">Today</div>
        </div>
        <div className="text-sm text-gray-500">Set the dimensions for the layer.</div>
      </div>
      <div className="bg-primary-accent text-primary text-3xl h-max p-2 font-bold rounded-md">{number}</div>
    </div>
  );
};

export default MetricBoxCustom;

