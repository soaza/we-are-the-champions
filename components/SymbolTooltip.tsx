import React from "react";

export const SymbolTooltip = () => {
  return (
    <div
      style={{
        // display: "inline-block",
        marginTop: 20,
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#b9fc9a",
          height: 25,
          width: 25,
          display: "inline-block",
          verticalAlign: "middle",
          marginRight: 5,
        }}
      />
      <i> {`represents "Qualifed for next round"`}</i>
    </div>
  );
};
