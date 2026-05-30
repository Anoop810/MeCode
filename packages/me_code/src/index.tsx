import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { Header } from "./components/header";
import { StatusBar } from "./components/status-bar";

function App() {
  return (
    <box
      justifyContent="center"
      alignItems="center"
      backgroundColor="black"
      width="100%"
      height="100%"
      gap={1}
    >
      <Header />
      <StatusBar />
    </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);