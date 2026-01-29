import React, { FunctionComponent } from "react";
import { BillOfExchangeTemplate } from "./BillOfExchangeTemplate";
import { BillOfEcxhangeSampleW3C } from "./sampleW3C"

export default {
    title: "Bill Of Exchange",
    component: BillOfExchangeTemplate,
    parameters: {
        componentSubtitle: "Modern & Minimal Bill Of Exchange Template",
    },
};


export const DefaultBillOfExchange: FunctionComponent = () => {
    return (
        <BillOfExchangeTemplate
            document={BillOfEcxhangeSampleW3C}
            handleObfuscation={() => { }}
        />
    );
};