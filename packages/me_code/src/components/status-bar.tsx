import {TextAttributes} from "@opentui/core";

export function StatusBar() {
return (
    <box
      flexDirection="row" gap={1}>
        <text fg="cyan">Build Mode</text>
        <text attributes={TextAttributes.DIM} fg="grey"> {" > "}</text>
        <text>Gemini basic</text>
      </box>

)}