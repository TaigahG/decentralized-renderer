import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { CargoInsurance, CargoInsuranceSchema } from "./types";

export const CargoInsuranceTemplate: FunctionComponent<
  TemplateProps<CargoInsuranceSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as CargoInsurance;

  const {
    certificateIdentifier,
    openPolicyReference,
    issueDate,
    placeOfIssue,
    insuredParty: {
      name: insuredPartyName,
      address: insuredPartyAddress,
    } = {},
    insuranceProvider: {
      name: insuranceProviderName,
      address: insuranceProviderAddress,
    } = {},
    claimsPayableTo: {
      name: claimsPayableToName,
      address: claimsPayableToAddress,
    } = {},
    claimsSettlingAgent: {
      name: claimsSettlingAgentName,
      address: claimsSettlingAgentAddress,
      contactDetails: claimsSettlingAgentContactDetails,
    } = {},
    transportInformation: {
      meansOfTransportName,
      loadingLocation,
      dischargeLocation,
      departureDate,
      blReference,
    } = {},
    goodsDetails = [],
    valuation: {
      invoiceReference,
      incoterms,
      insuredValue: {
        currencyCode: insuredValueCurrencyCode = undefined,
        amount: insuredValueAmount = undefined,
      } = {},
      basisOfValuation,
    } = {},
    coverage: {
      coverageConditionCode,
      warClauseIncluded,
      strikesClauseIncluded,
      deductible: {
        currencyCode: deductibleCurrencyCode = undefined,
        amount: deductibleAmount = undefined,
      } = {},
      surveyClause,
    } = {},
  } = data;

  // --- Helpers ---
  const display = (value: any) => (value ? String(value) : "");
  
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    try {
      return new Date(dateStr).toISOString().split("T")[0];
    } catch (e) {
      return dateStr;
    }
  };

  const formatMoney = (val?: number | string, curr?: string) => {
    if (val === undefined || val === null) return "";
    const num = Number(val);
    const c = curr || "";
    return isNaN(num) ? String(val) : `${c} ${num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  };

  const Label = ({ children }: { children: React.ReactNode }) => (
    <div className="text-[9px] uppercase font-bold text-gray-500 mb-0.5 tracking-wider leading-none">
      {children}
    </div>
  );

  return (
    <Wrapper data-testid="cargo-insurance-template">
      <div className="max-w-[210mm] mx-auto bg-white text-black p-8 font-sans antialiased box-border">
        
        {/* Main Document Frame */}
        <div className="border-4 border-gray-800 p-1">
          <div className="border border-gray-400 p-6">

            {/* Header: Provider & Reference */}
            <div className="flex justify-between items-start mb-8 border-b-2 border-black pb-4">
               <div>
                  <h1 className="text-3xl font-serif font-bold tracking-wide text-gray-900 mb-2">
                     CERTIFICATE OF INSURANCE
                  </h1>
                  <div className="text-sm font-bold uppercase">{display(insuranceProviderName)}</div>
                  <div className="text-xs text-gray-600 whitespace-pre-wrap max-w-sm">{display(insuranceProviderAddress)}</div>
               </div>
               <div className="text-right">
                  <div className="mb-2">
                     <Label>Certificate No.</Label>
                     <div className="text-xl font-mono font-bold">{display(certificateIdentifier)}</div>
                  </div>
                  <div>
                     <Label>Open Policy / Cover Ref</Label>
                     <div className="font-mono">{display(openPolicyReference)}</div>
                  </div>
               </div>
            </div>

            {/* Assured Party */}
            <div className="mb-6 p-3 bg-gray-50 border border-gray-200">
               <Label>This is to Certify that this Company has insured the goods described below for the account of:</Label>
               <div className="text-sm font-bold mt-1">{display(insuredPartyName)}</div>
               <div className="text-xs">{display(insuredPartyAddress)}</div>
            </div>

            {/* Transport Grid */}
            <div className="grid grid-cols-4 gap-4 border-y border-black py-4 mb-6">
               <div>
                  <Label>Vessel / Conveyance</Label>
                  <div className="font-bold text-sm">{display(meansOfTransportName)}</div>
               </div>
               <div>
                  <Label>Sailing On/About</Label>
                  <div className="font-bold text-sm">{formatDate(departureDate)}</div>
               </div>
               <div>
                  <Label>From</Label>
                  <div className="font-bold text-sm">{display(loadingLocation)}</div>
               </div>
               <div>
                  <Label>To</Label>
                  <div className="font-bold text-sm">{display(dischargeLocation)}</div>
               </div>
            </div>

            {/* Goods & Valuation Section */}
            <div className="flex mb-6 border-b border-black pb-6">
               {/* Left: Goods Description */}
               <div className="w-2/3 pr-6 border-r border-gray-300">
                  <div className="mb-2 flex justify-between">
                      <Label>Marks & Numbers</Label>
                      <Label>Description of Goods</Label>
                  </div>
                  
                  {goodsDetails.length > 0 ? (
                     goodsDetails.map((item, index) => (
                        <div key={index} className="flex text-xs mb-3">
                           <div className="w-1/3 pr-2 font-mono text-gray-600 break-words">
                              {display(item.shippingMarks)}
                           </div>
                           <div className="w-2/3">
                              <span className="font-bold">{item.packageQuantity} {item.packageType}</span> <br/>
                              {display(item.goodsDescription)}
                              {item.grossWeight && (
                                 <div className="mt-1 text-gray-500">
                                    GW: {item.grossWeight.value} {item.grossWeight.unit}
                                 </div>
                              )}
                           </div>
                        </div>
                     ))
                  ) : (
                     <div className="text-xs italic text-gray-400">No goods details provided</div>
                  )}
                  
                  {blReference && (
                     <div className="mt-4 pt-2 border-t border-dashed border-gray-300">
                        <Label>Bill of Lading Ref</Label>
                        <div className="text-xs font-mono">{blReference}</div>
                     </div>
                  )}
               </div>

               {/* Right: Insured Value (The Big Number) */}
               <div className="w-1/3 pl-6 flex flex-col justify-center">
                  <Label>Sum Insured</Label>
                  <div className="text-2xl font-bold font-mono text-gray-900 mt-1 mb-1">
                     {formatMoney(insuredValueAmount, insuredValueCurrencyCode)}
                  </div>
                  <div className="text-xs text-gray-500 mb-4 uppercase">
                     {basisOfValuation ? `Basis: ${basisOfValuation}` : "Agreed Value"}
                  </div>

                  <div className="text-xs space-y-1 pt-4 border-t border-gray-300">
                     {invoiceReference && <div><span className="text-gray-500">Inv Ref:</span> {invoiceReference}</div>}
                     {incoterms && <div><span className="text-gray-500">Term:</span> {incoterms}</div>}
                  </div>
               </div>
            </div>

            {/* Coverage & Conditions */}
            <div className="mb-8 p-4 border border-gray-300 bg-gray-50 text-xs">
               <Label>Conditions of Coverage</Label>
               <div className="font-bold mt-1 mb-2 text-sm">{display(coverageConditionCode)}</div>
               
               <div className="grid grid-cols-2 gap-4">
                  <div>
                     <ul className="list-disc pl-4 space-y-1 text-gray-700">
                        <li>
                           Institute War Clauses: <strong>{warClauseIncluded ? "INCLUDED" : "EXCLUDED"}</strong>
                        </li>
                        <li>
                           Institute Strikes Clauses: <strong>{strikesClauseIncluded ? "INCLUDED" : "EXCLUDED"}</strong>
                        </li>
                        {surveyClause && <li>{surveyClause}</li>}
                     </ul>
                  </div>
                  <div>
                     {deductibleAmount && (
                        <div className="border p-2 bg-white">
                           <Label>Deductible / Excess</Label>
                           <div className="font-mono text-red-600 font-bold">
                              {formatMoney(deductibleAmount, deductibleCurrencyCode)}
                           </div>
                           <div className="text-[10px] text-gray-400">each and every loss</div>
                        </div>
                     )}
                  </div>
               </div>
            </div>

            {/* Claims & Survey Agent (Actionable Info) */}
            <div className="grid grid-cols-2 gap-8 mb-8">
               <div className="p-3 border-l-4 border-black">
                  <Label>Claims Payable By (Settling Agent)</Label>
                  <div className="font-bold text-sm mt-1">{display(claimsPayableToName)}</div>
                  <div className="text-xs text-gray-600 whitespace-pre-wrap">{display(claimsPayableToAddress)}</div>
               </div>

               <div className="p-3 border-l-4 border-black">
                  <Label>Survey Agent (In event of loss/damage notify:)</Label>
                  <div className="font-bold text-sm mt-1">{display(claimsSettlingAgentName)}</div>
                  <div className="text-xs text-gray-600 whitespace-pre-wrap">{display(claimsSettlingAgentAddress)}</div>
                  <div className="mt-2 text-xs font-mono">{display(claimsSettlingAgentContactDetails)}</div>
               </div>
            </div>

            {/* Footer: Date & Signature */}
            <div className="flex justify-between items-end pt-6 border-t-2 border-black">
               <div>
                  <Label>Place and Date of Issue</Label>
                  <div className="text-sm font-bold">
                     {display(placeOfIssue)}, {formatDate(issueDate)}
                  </div>
               </div>
               
               <div className="text-center">
                  <div className="mb-2 h-12 w-48 border-b border-black flex items-end justify-center">
                     {/* Signature Image would go here */}
                     <span className="text-[10px] italic text-gray-400 opacity-50">Authorized Signature</span>
                  </div>
                  <div className="text-xs font-bold uppercase">For {display(insuranceProviderName)}</div>
               </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 text-[9px] text-gray-400 text-center leading-tight max-w-2xl mx-auto">
               This certificate represents the insurance cover effected under the Open Policy referenced above. 
               The original policy remains the sole contract of insurance. In the event of any conflict between this 
               certificate and the policy, the policy shall prevail. Liability of the Insurers is limited to the terms, 
               conditions, and limits of the policy.
            </div>

          </div>
        </div>
      </div>
    </Wrapper>
  );
};