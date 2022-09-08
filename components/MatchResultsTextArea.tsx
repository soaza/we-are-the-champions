import { Textarea, Button } from "@mantine/core";
import React, { useState } from "react";

export const MatchResultsTextArea = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <Textarea
        style={{ marginTop: 20 }}
        placeholder="<Team Name> <Registration date in DD/MM> <Group number>"
        label="Enter Match Results"
        radius="md"
        size="lg"
        onChange={(e) => setInput(e.target.value)}
      />

      <Button style={{ marginTop: 10 }}>Submit</Button>
    </>
  );
};
