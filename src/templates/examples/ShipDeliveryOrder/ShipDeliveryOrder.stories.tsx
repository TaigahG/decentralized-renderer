import React, { FunctionComponent } from "react";
import { ShipDeliveryOrderTemplate } from "./ShipDeliveryOrderTemplate";
import { ShipDeliveryOrderSampleW3C } from "./sampleW3C";

export default {
  title: "Ship Delivery Order",
  component: ShipDeliveryOrderTemplate,
  parameters: {
    componentSubtitle: "Modern & Minimal Ship Delivery Order Template",
  },
};


export const DefaultShipDeliveryOrder: FunctionComponent = () => {
  return (
    <ShipDeliveryOrderTemplate
      document={ShipDeliveryOrderSampleW3C}
      handleObfuscation={() => {}}
    />
  );
};