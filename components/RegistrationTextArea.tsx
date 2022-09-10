import { Button, Textarea } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import React, { useContext, useState } from "react";
import { insertTeams } from "../pages/api/supabase.api";
import { UserContext } from "../pages/_app";
import { parseRegisterTeamsInput } from "../utils/registerTeams";

export const RegistrationTextArea = () => {
  const [input, setInput] = useState("");
  const { setRefetchData } = useContext(UserContext);

  const handleSubmit = async () => {
    const teams = parseRegisterTeamsInput(input);
    await insertTeams(teams);

    showNotification({
      color: "green",
      id: "load-data",
      message: "Teams Registered!",
      autoClose: 1000,
      disallowClose: true,
    });

    setRefetchData(true);
  };

  return (
    <>
      <Textarea
        placeholder="<Team Name> <Registration date in DD/MM> <Group number>"
        label="Register Teams"
        radius="md"
        size="lg"
        onChange={(e) => setInput(e.target.value)}
      />

      <Button onClick={handleSubmit} style={{ marginTop: 10 }}>
        {" "}
        Register Teams
      </Button>
    </>
  );
};
