import React, { FunctionComponent } from "react";
import { RoadConsignmentNoteTemplate } from "./RoadConsignmentNoteTemplate";
import { RoadConsignmentNoteSampleW3C } from "./sampleW3C";

export default {
  title: "Road Consignment Note",
  component: RoadConsignmentNoteTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Road Consignment Note Template",
  },
};


export const DefaultRoadConsignmentNote: FunctionComponent = () => {
  return (
    <RoadConsignmentNoteTemplate
      document={RoadConsignmentNoteSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};