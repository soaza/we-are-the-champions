import { Button, Textarea } from "@mantine/core";
import React, { useState } from "react";
import { supabase } from "../common/supabase";
import { parseRegisterTeamsInput } from "../utils/registerTeams";

export const RegistrationTextArea = () => {
  const [input, setInput] = useState("");

  const handleSubmit = async () => {
    const teams = parseRegisterTeamsInput(input);
    console.log(teams);
    await supabase.from("teams").insert(teams);
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
