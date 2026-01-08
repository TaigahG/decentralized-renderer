import React, { FunctionComponent } from "react";
import { WarehouseReceiptTemplate } from "./WarehouseReceiptTemplate";
import { WarehouseReceiptSampleW3C } from "./sampleW3C";

export default {
    title: "WarehouseReceipt",
    component: WarehouseReceiptTemplate,
    parameters: {
        componentSubtitle: "Profesional warehouse receipt template",
    }
}

export const DefaultWarehouseReceipt: FunctionComponent = () => {
    return (
        <WarehouseReceiptTemplate
            document={WarehouseReceiptSampleW3C}
            handleObfuscation={() => { }}
        />
    )
}