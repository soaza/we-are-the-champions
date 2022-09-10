import { Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import React, { useContext } from "react";
import { resetTeams } from "../pages/api/supabase.api";
import { UserContext } from "../pages/_app";

export const ResetButton = () => {
  const { setRefetchData } = useContext(UserContext);

  const handleResetTeams = async () => {
    await resetTeams();

    showNotification({
      color: "green",
      id: "load-data",
      message: "Teams reseted!",
      autoClose: 1000,
      disallowClose: true,
    });

    setRefetchData(true);
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
