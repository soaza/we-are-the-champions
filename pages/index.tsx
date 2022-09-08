import { Button } from "@mantine/core";
import type { NextPage } from "next";
import { MatchResultsTextArea } from "../components/MatchResultsTextArea";
import { RegistrationTextArea } from "../components/RegistrationTextArea";
import { SymbolTooltip } from "../components/SymbolTooltip";
import { TeamsTable } from "../components/TeamsTable";

const Home: NextPage = () => {
  return (
    <div style={{ padding: "5% 10%" }}>
      <h1 style={{ textAlign: "center" }}>We are the Champions</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div style={{ width: "45%" }}>
          <TeamsTable />
        </div>

        <div style={{ width: "45%" }}>
          <TeamsTable />
        </div>
      </div>

      <SymbolTooltip />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button style={{ marginTop: 10 }}>Reset Data</Button>
      </div>

      <div style={{}}>
        <RegistrationTextArea />

        <MatchResultsTextArea />
      </div>
    </div>
  );
};

export default Home;
