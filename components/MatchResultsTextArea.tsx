import { Textarea, Button } from "@mantine/core";
import React, { useState } from "react";
import { supabase } from "../common/supabase";
import { parseMatchResultsInput } from "../utils/matchResults";

export const MatchResultsTextArea = () => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    const results = parseMatchResultsInput(input);

    results.forEach(async (value: any, key: string) => {
      if (!key) {
        return;
      }
      const { data: team } = await supabase
        .from("teams")
        .select()
        .eq("team_name", key)
        .single();

      await supabase
        .from("teams")
        .update({
          goals_scored: team.goals_scored + value.goals_scored,
          match_points: team.match_points + value.match_points,
          alternate_match_points:
            team.alternate_match_points + value.alternate_match_points,
        })
        .match({ team_name: key });
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
