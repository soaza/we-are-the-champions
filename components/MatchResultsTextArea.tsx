import { Textarea, Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import React, { useContext, useState } from "react";
import { updateTeam } from "../pages/api/supabase.api";
import { UserContext } from "../pages/_app";
import { parseMatchResultsInput } from "../utils/matchResults";

export const MatchResultsTextArea = () => {
  const [input, setInput] = useState("");
  const { setRefetchData } = useContext(UserContext);

  const handleSubmit = async () => {
    const results = parseMatchResultsInput(input);

    await Promise.all(
      Array.from(results)
        .map(([key, value]) => ({ key, value }))
        .map(async ({ value, key }) => {
          await updateTeam(value, key);
        })
    ).then(() => {
      showNotification({
        color: "green",
        id: "load-data",
        message: "Match Results updated!",
        autoClose: 1000,
        disallowClose: true,
      });

      setRefetchData(true);
      setInput("");
    });
  };

  return (
    <>
      <Textarea
        value={input}
        style={{ marginTop: 20 }}
        placeholder="<Team Name> <Registration date in DD/MM> <Group number>"
        label="Enter Match Results"
        radius="md"
        size="lg"
        onChange={(e) => setInput(e.target.value)}
        autosize
      />

      <Button onClick={handleSubmit} style={{ marginTop: 10 }}>
        Submit
      </Button>
    </>
  );
};
