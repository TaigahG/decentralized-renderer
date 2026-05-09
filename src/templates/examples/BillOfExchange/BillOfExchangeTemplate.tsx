import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { BillOfExchange, BillOfEcxhangeSchema } from "./types";

export const BillOfExchangeTemplate: FunctionComponent<
  TemplateProps<BillOfEcxhangeSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as BillOfExchange;

  const {
    // --- Document Identifiers ---
    contractNumber,

    // --- Dates ---
    issueDate,
    paymentDueDate: maturityDate,

    // --- Parties ---
    payee: {
      name: payeeName,
      addressLine: payeeAddress,
      city: payeeCity,
      country: payeeCountry,
      email: payeeEmail,
    } = {},
    issuer: {
      name: drawerName,
      addressLine: drawerAddress,
      city: drawerCity,
      country: drawerCountry,
      email: drawerEmail,
    } = {},
    drawee: {
      name: draweeName,
      addressLine: draweeAddress,
      city: draweeCity,
      country: draweeCountry,
      email: draweeEmail,
    } = {},
    guarantor: {
      name: guarantorName,
      addressLine: guarantorAddress,
      city: guarantorCity,
      country: guarantorCountry,
      email: guarantorEmail,
    } = {},

    // --- Issuance & Terms ---
    placeOfIssue,
    paymentTerm,

    // --- Financials ---
    monetaryAmount,
    currencyCode,
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
    <div className="flex flex-col h-full">
      <div className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-2">
        {title}
      </div>
      <div className="text-sm font-bold uppercase mb-1">{name || "-"}</div>
      <div className="text-xs leading-relaxed text-black">
        {address && <>{address}<br /></>}
        {[city, country].filter(Boolean).join(", ")}
      </div>
      {email && <div className="text-[10px] font-mono text-gray-600 mt-2">Email: {email}</div>}
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto my-10 font-sans text-black bg-transparent">
        
        {/* We use standard HTML tables for bulletproof border rendering. */}
        <table className="w-full border-collapse border-2 border-black table-fixed">
          <tbody>
            
            {/* --- Header Row --- */}
            <tr>
              <td colSpan={2} className="border border-black p-6 align-top">
                <h1 className="text-3xl font-black uppercase tracking-widest leading-none mb-2">
                  Bill of Exchange
                </h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
                  Negotiable Instrument
                </p>
              </td>
              <td className="border border-black p-0 align-top">
                <div className="h-full flex flex-col">
                  <div className="p-3 border-b border-black">
                    <div className="text-[9px] uppercase font-bold text-gray-600 tracking-widest mb-1">Contract / Ref Number</div>
                    <div className="text-sm font-mono font-bold">{contractNumber || "DRAFT"}</div>
                  </div>
                  <div className="p-3 flex-1 flex flex-col justify-center bg-gray-50">
                     <div className="text-[9px] uppercase font-bold text-gray-600 tracking-widest mb-1">Amount</div>
                     <div className="text-xl font-mono font-black border border-black px-3 py-1 inline-block w-fit bg-white">
                        {currencyCode} {monetaryAmount || "0.00"}
                     </div>
                  </div>
                </div>
              </td>
            </tr>

            {/* --- Terms & Dates Row --- */}
            <tr>
              <td className="border border-black p-4 align-top w-1/3">
                 <div className="text-[9px] uppercase font-bold text-gray-600 tracking-widest mb-1">Place and Date of Issue</div>
                 <div className="text-sm font-semibold uppercase">{placeOfIssue || "-"} <br/> {issueDate || "-"}</div>
              </td>
              <td className="border border-black p-4 align-top w-1/3">
                 <div className="text-[9px] uppercase font-bold text-gray-600 tracking-widest mb-1">Payment Term</div>
                 <div className="text-sm font-semibold uppercase">{paymentTerm || "At Sight"}</div>
              </td>
              <td className="border border-black p-4 align-top w-1/3">
                 <div className="text-[9px] uppercase font-bold text-gray-600 tracking-widest mb-1">Due Date (Maturity)</div>
                 <div className="text-sm font-mono font-bold">{maturityDate || "-"}</div>
              </td>
            </tr>

            {/* --- The Order Clause --- */}
            <tr>
              <td colSpan={3} className="border border-black p-8 text-center bg-gray-50">
                <p className="text-sm font-serif leading-loose text-justify px-8">
                  For value received, <span className="font-bold underline underline-offset-4 decoration-1 px-1">{paymentTerm || "at sight"}</span>, pay against this Bill of Exchange to the order of the Payee named below the sum of <span className="font-bold font-mono underline underline-offset-4 decoration-1 px-1">{currencyCode || ""} {monetaryAmount || "0.00"}</span>.
                </p>
              </td>
            </tr>

            {/* --- Payee & Guarantor Row --- */}
            <tr>
              <td colSpan={2} className="border border-black p-4 align-top">
                <PartyCellContent 
                  title="Pay to the order of (Payee)"
                  name={payeeName}
                  address={payeeAddress}
                  city={payeeCity}
                  country={payeeCountry}
                  email={payeeEmail}
                />
              </td>
              <td className="border border-black p-4 align-top">
                <PartyCellContent 
                  title="Guarantor (Aval) - Optional"
                  name={guarantorName}
                  address={guarantorAddress}
                  city={guarantorCity}
                  country={guarantorCountry}
                  email={guarantorEmail}
                />
              </td>
            </tr>

            {/* --- Drawee & Drawer Row --- */}
            <tr>
              <td colSpan={1} className="border border-black p-4 align-top w-1/2">
                 <PartyCellContent 
                  title="To (Drawee / Payer)"
                  name={draweeName}
                  address={draweeAddress}
                  city={draweeCity}
                  country={draweeCountry}
                  email={draweeEmail}
                />
              </td>
              <td colSpan={2} className="border border-black p-4 align-top w-1/2">
                <div className="flex flex-col h-full justify-between">
                  <PartyCellContent
                    title="For and on behalf of (Issuer / Drawer)"
                    name={drawerName}
                    address={drawerAddress}
                    city={drawerCity}
                    country={drawerCountry}
                    email={drawerEmail}
                  />
                  <div className="mt-10 border-t border-black pt-2 text-center w-3/4 mx-auto">
                    <span className="text-[9px] uppercase font-bold text-gray-600 tracking-widest">
                      Blockchain Authorized
                    </span>
                  </div>
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};