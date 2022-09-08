import { Button } from "@mantine/core";
import React from "react";

export const ResetButton = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button color={"gray"} style={{ marginTop: 10 }}>
        Reset Data
      </Button>
    </div>
  );
};
