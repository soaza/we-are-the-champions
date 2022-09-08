import { Button, Textarea } from "@mantine/core";
import React, { useState } from "react";

export const RegistrationTextArea = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <Textarea
        placeholder="<Team Name> <Registration date in DD/MM> <Group number>"
        label="Register Teams"
        radius="md"
        size="lg"
        onChange={(e) => setInput(e.target.value)}
      />

      <Button style={{ marginTop: 10 }}> Register Teams</Button>
    </>
  );
};
