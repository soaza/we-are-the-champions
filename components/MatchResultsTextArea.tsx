import { Textarea, Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import React, { useState } from "react";
import { updateTeam } from "../pages/api/supabase.api";
import { parseMatchResultsInput } from "../utils/matchResults";

export const MatchResultsTextArea = () => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    const results = parseMatchResultsInput(input);

    results.forEach(updateTeam);

    showNotification({
      color: "green",
      id: "load-data",
      message: "Match Results updated!",
      autoClose: 1000,
      disallowClose: true,
    });
  };

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

      <Button onClick={handleSubmit} style={{ marginTop: 10 }}>
        Submit
      </Button>
    </>
  );
};
