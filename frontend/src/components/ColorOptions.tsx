"use client";

import React, { useState } from "react";

const Title = ({ selected, title }: { selected: string; title: string }) => {
  return (
    <span
      style={{
        color: selected,
        fontWeight: selected ? "500" : "400",
        background: selected,
        borderRadius: 4,
      }}
      className={`text-[20px]  transition-all duration-500`}
    >
      {title}
    </span>
  );
};

const ColorOption = ({
  isSelected,
  color,
  setSelected,
}: {
  isSelected?: boolean;
  color: string;
  setSelected: (val: string) => void;
}) => {
  const customClassName = isSelected ? "translate-x-[-90px] opacity-0" : "";
  return (
    <div
      style={{ background: color }}
      onClick={() => setSelected(color)}
      className={`cursor-pointer transition-all duration-200 rounded-full size-5 ${customClassName}`}
    />
  );
};

const ColorOptions = ({
  colors,
  title,
}: {
  colors: string[];
  title: string;
}) => {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex items-center gap-6">
      <Title selected={selected} title={title} />
      <div className="flex gap-2 items-center">
        {colors?.map((item) => (
          <ColorOption
            setSelected={setSelected}
            key={item}
            color={item}
            isSelected={selected === item}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorOptions;
