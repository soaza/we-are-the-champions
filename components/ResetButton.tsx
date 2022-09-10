import { Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import React from "react";
import { resetTeams } from "../pages/api/supabase.api";

export const ResetButton = () => {
  const handleResetTeams = async () => {
    await resetTeams();

    showNotification({
      color: "green",
      id: "load-data",
      message: "Teams reseted!",
      autoClose: 1000,
      disallowClose: true,
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        onClick={handleResetTeams}
        color={"gray"}
        style={{ marginTop: 10 }}
      >
        Reset Data
      </Button>
    </div>
  );
};
