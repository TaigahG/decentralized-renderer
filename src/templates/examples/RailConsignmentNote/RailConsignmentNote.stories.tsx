import React, { FunctionComponent } from "react";
import { RailConsignmentNoteTemplate } from "./RailConsignmentNoteTemplate";
import { RailConsignmentNoteSampleW3C } from "./sampleW3C";

export default {
  title: "Rail Consignment Note",
  component: RailConsignmentNoteTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Rail Consignment Note Template",
  },
};


export const DefaultSeaCargoManifest: FunctionComponent = () => {
  return (
    <RailConsignmentNoteTemplate
      document={RailConsignmentNoteSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};