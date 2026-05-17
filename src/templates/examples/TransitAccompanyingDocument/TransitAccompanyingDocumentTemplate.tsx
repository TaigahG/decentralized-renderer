import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { TransitAccompanyingDocument, TransitAccompanyingDocumentSchema } from "./types";

export const TransitAccompanyingDocumentTemplate: FunctionComponent<
  TemplateProps<TransitAccompanyingDocumentSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as TransitAccompanyingDocument;

  const {
    // --- Document Identifier ---
    documentIdentifier: mrnNumber,

    // --- Customs Offices ---
    customsOfficeOfDestinationName: destinationOffice,
    customsOfficeOfTransitName: transitOffice,
    customsOfficeOfGuaranteeLocation: guaranteeOffice,

    // --- Parties ---
    consignee: {
      name: consigneeName,
      addressLine: consigneeAddress,
      city: consigneeCity,
      country: consigneeCountry,
      email: consigneeEmail,
    } = {},
    agent: {
      name: agentName,
      addressLine: agentAddress,
      city: agentCity,
      country: agentCountry,
      email: agentEmail,
    } = {},
    consignor: {
      name: consignorName,
      addressLine: consignorAddress,
      city: consignorCity,
      country: consignorCountry,
      email: consignorEmail,
    } = {},

    // --- Guarantee & Financials ---
    typeOfTransitGuarantee,
    monetaryAmount: guaranteeAmount,
    monetaryAmountCurrency,
    customsValue,
    customsValueCurrency,

    // --- Weights & Measures ---
    netWeight,
    netWeightUnit,
    quantity,

    // --- Goods Details ---
    goods = [],

    // --- Transport Details ---
    conveyanceReferenceNumber,
    modeOfTransport,
    sealIdentifier,
  } = data;

  // Helper for rendering Party details cleanly within a table cell
  const PartyCellContent = ({
    title,
    name,
    address,
    city,
    country,
    email,
  }: {
    title: string;
    name?: string;
    address?: string;
    city?: string;
    country?: string;
    email?: string;
  }) => (
    <div className="flex flex-col h-full bg-transparent">
      <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
        {title}
      </div>
      <div className="text-sm font-bold uppercase mb-1">{name || "-"}</div>
      <div className="text-xs leading-relaxed text-black">
        {address && <>{address}<br /></>}
        {[city, country].filter(Boolean).join(", ")}
      </div>
      {email && <div className="text-[10px] font-mono mt-2">Email: {email}</div>}
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto my-10 font-sans text-black bg-transparent">
        
        {/* Bulletproof HTML Table for strict border enforcement */}
        <table className="w-full border-collapse border-2 border-black table-fixed">
          <tbody>
            
            {/* --- Header Row --- */}
            <tr>
              <td colSpan={2} className="border border-black p-6 align-top w-2/3">
                <h1 className="text-2xl font-black uppercase tracking-widest leading-none mb-2">
                  Transit Accompanying Document
                </h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
                  Customs Transit Procedure
                </p>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-4 flex flex-col h-full justify-center text-center">
                  <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
                    Master Reference Number (MRN)
                  </div>
                  <div className="text-xl font-mono font-black border border-black p-2 inline-block">
                    {mrnNumber || "DRAFT"}
                  </div>
                </div>
              </td>
            </tr>

            {/* --- Consignor & Consignee Row --- */}
            <tr>
              <td className="border border-black p-4 align-top w-1/3">
                <PartyCellContent 
                  title="1. Consignor / Principal"
                  name={consignorName}
                  address={consignorAddress}
                  city={consignorCity}
                  country={consignorCountry}
                  email={consignorEmail}
                />
              </td>
              <td colSpan={2} className="border border-black p-4 align-top w-2/3">
                <PartyCellContent 
                  title="2. Consignee"
                  name={consigneeName}
                  address={consigneeAddress}
                  city={consigneeCity}
                  country={consigneeCountry}
                  email={consigneeEmail}
                />
              </td>
            </tr>

            {/* --- Agent & Customs Offices Row --- */}
            <tr>
              <td className="border border-black p-4 align-top w-1/3">
                <PartyCellContent 
                  title="3. Agent / Representative"
                  name={agentName}
                  address={agentAddress}
                  city={agentCity}
                  country={agentCountry}
                  email={agentEmail}
                />
              </td>
              <td colSpan={2} className="border border-black p-0 align-top w-2/3">
                <table className="w-full border-collapse h-full">
                  <tbody>
                    <tr>
                      <td className="border-b border-r border-black p-3 align-top w-1/2">
                        <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Office of Destination</div>
                        <div className="text-xs font-bold uppercase">{destinationOffice || "-"}</div>
                      </td>
                      <td className="border-b border-black p-3 align-top w-1/2">
                        <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Office of Transit</div>
                        <div className="text-xs font-bold uppercase">{transitOffice || "-"}</div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="border-r border-black p-3 align-top">
                        <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Office of Guarantee</div>
                        <div className="text-xs font-bold uppercase">{guaranteeOffice || "-"}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* --- Transport, Financials, and Seals Row --- */}
            <tr>
              <td className="border border-black p-0 align-top w-1/3">
                 <div className="p-3 border-b border-black">
                   <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Mode of Transport</div>
                   <div className="text-xs font-bold uppercase">{modeOfTransport || "-"}</div>
                 </div>
                 <div className="p-3">
                   <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Conveyance Ref No.</div>
                   <div className="text-xs font-mono font-bold">{conveyanceReferenceNumber || "-"}</div>
                 </div>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                 <div className="p-3 border-b border-black">
                   <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Customs Value</div>
                   <div className="text-xs font-mono font-bold">{customsValue ? `${customsValueCurrency || ""} ${customsValue}` : "-"}</div>
                 </div>
                 <div className="p-3">
                   <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Guarantee Type & Amount</div>
                   <div className="text-xs font-bold uppercase mb-1">{typeOfTransitGuarantee || "-"}</div>
                   <div className="text-xs font-mono font-bold">{guaranteeAmount ? `${monetaryAmountCurrency || ""} ${guaranteeAmount}` : "-"}</div>
                 </div>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                 <div className="p-3 border-b border-black">
                   <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Net Weight / Quantity</div>
                   <div className="text-xs font-mono font-bold">
                     {netWeight ? `${netWeight} ${netWeightUnit || ""}` : "-"} {quantity ? `/ Qty: ${quantity}` : ""}
                   </div>
                 </div>
                 <div className="p-3">
                   <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Customs Seal Identifier</div>
                   <div className="text-sm font-mono font-black">{sealIdentifier || "NO SEALS AFFIXED"}</div>
                 </div>
              </td>
            </tr>

            {/* --- Goods Table Row --- */}
            <tr>
              <td colSpan={3} className="border border-black p-0">
                <table className="w-full border-collapse table-fixed">
                  <thead>
                    <tr>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-1/12">
                        Item
                      </th>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-left w-7/12">
                        Description of Goods
                      </th>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-2/12">
                        HS Code
                      </th>
                      <th className="border-b border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-2/12">
                        Packages
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {goods.length > 0 ? (
                      goods.map((item, i) => (
                        <tr key={i}>
                          <td className="border-b border-r border-black p-3 text-xs font-mono font-bold text-center align-top">
                            {i + 1}
                          </td>
                          <td className="border-b border-r border-black p-3 text-xs font-bold uppercase leading-relaxed whitespace-pre-wrap align-top">
                            {item.description || "-"}
                          </td>
                          <td className="border-b border-r border-black p-3 text-center text-xs font-mono font-bold align-top">
                            {item.hsCode || "-"}
                          </td>
                          <td className="border-b border-black p-3 text-center text-sm font-black align-top">
                            {item.numberOfPackages || "-"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="border-b border-black p-8 text-center text-xs italic uppercase">
                          No Transit Goods Declared
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};