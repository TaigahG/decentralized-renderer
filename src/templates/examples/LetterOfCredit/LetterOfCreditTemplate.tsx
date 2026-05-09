import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { LetterOfCredit, LetterOfCreditSchema } from "./types";

export const LetterOfCreditTemplate: FunctionComponent<
  TemplateProps<LetterOfCreditSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as LetterOfCredit;

  const {
    // --- Document Identifiers ---
    documentaryCreditIdentifier: lcNumber,

    // --- Dates ---
    documentaryCreditDocumentIssueDate: issueDate,
    documentaryCreditDocumentEffectiveEndDate: expiryDate,

    // --- Parties ---
    applicant: {
      name: applicantName,
      addressLine: applicantAddress,
      city: applicantCity,
      country: applicantCountry,
      email: applicantEmail,
    } = {},
    documentaryCreditAvailableBank: {
      name: advisingBankName,
      addressLine: advisingBankAddress,
    } = {},
    documentaryCreditBeneficiary: {
      name: beneficiaryName,
      addressLine: beneficiaryAddress,
    } = {},

    // --- Financials ---
    documentaryCreditAmount: lcAmount,
    currencyCode,
  } = data;

  // Clean, white-background DataBox helper
  const DataBox = ({
    label,
    value,
    className = "",
    fontMono = false,
  }: {
    label: string;
    value?: string | React.ReactNode;
    className?: string;
    fontMono?: boolean;
  }) => (
    <div className={`p-3 bg-white text-black ${className}`}>
      <label className="block text-[9px] uppercase font-bold mb-1 tracking-widest leading-none text-gray-500">
        {label}
      </label>
      <div className={`text-sm font-bold uppercase leading-tight whitespace-pre-wrap break-words ${fontMono ? "font-mono" : ""}`}>
        {value || "-"}
      </div>
    </div>
  );

  // Helper for rendering Party details consistently
  const PartyBox = ({
    title,
    name,
    address,
    city,
    country,
    email,
    className = "",
  }: {
    title: string;
    name?: string;
    address?: string;
    city?: string;
    country?: string;
    email?: string;
    className?: string;
  }) => (
    <div className={`p-4 bg-white ${className}`}>
      <div className="flex items-center space-x-2 mb-3">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500">{title}</h3>
      </div>
      <div className="text-sm font-bold uppercase mb-1">{name || "-"}</div>
      <div className="text-xs mb-2 leading-relaxed">
        {address && <>{address}<br /></>}
        {[city, country].filter(Boolean).join(", ")}
      </div>
      {email && <div className="text-[10px] font-mono text-gray-600 mt-2">Email: {email}</div>}
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto bg-white font-sans text-black border-2 border-black my-10 relative overflow-hidden">
        
        {/* --- Header Section --- */}
        <div className="flex justify-between items-start border-b-2 border-black p-6">
          <div className="flex-1">
            <h1 className="text-3xl font-black uppercase tracking-tighter leading-none mb-2">
              Letter of Credit
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
              Documentary Credit
            </p>
          </div>
          <div className="text-right flex flex-col gap-2">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-widest mb-1 text-gray-500">Documentary Credit Number</p>
              <p className="text-xl font-mono font-black tracking-widest border border-black text-black px-3 py-1">
                {lcNumber || "DRAFT"}
              </p>
            </div>
          </div>
        </div>

        {/* --- Main Layout Grid --- */}
        <div className="grid grid-cols-2 border-b-2 border-black">
          
          {/* Left Column (Applicant & Beneficiary) */}
          <div className="border-r-2 border-solid border-black flex flex-col">
            <PartyBox 
              title="Applicant" 
              name={applicantName} 
              address={applicantAddress} 
              city={applicantCity} 
              country={applicantCountry} 
              email={applicantEmail}
              className="border-b-2 border-black flex-1"
            />
            <PartyBox 
              title="Beneficiary" 
              name={beneficiaryName} 
              address={beneficiaryAddress} 
              className="flex-1"
            />
          </div>

          {/* Right Column (Dates, Bank, Financials) */}
          <div className="flex flex-col">
            
            {/* Dates Row */}
            <div className="grid grid-cols-2 border-b-2 border-black">
              <DataBox 
                label="Date of Issue" 
                value={issueDate} 
                fontMono 
                className="border-r border-black"
              />
              <DataBox 
                label="Date of Expiry" 
                value={expiryDate} 
                fontMono 
              />
            </div>

            {/* Bank Detail */}
            <PartyBox 
              title="Available With... By..." 
              name={advisingBankName} 
              address={advisingBankAddress} 
              className="border-b-2 border-black flex-1"
            />

            {/* Financials Row */}
            <div className="grid grid-cols-3">
              <DataBox 
                label="Currency" 
                value={currencyCode} 
                fontMono 
                className="border-r border-black"
              />
              <DataBox 
                label="Documentary Credit Amount" 
                value={lcAmount ? lcAmount.toString() : "N/A"} 
                fontMono 
                className="col-span-2 text-lg"
              />
            </div>
            
          </div>
        </div>

        {/* --- Terms Footer --- */}
        <div className="p-4 bg-white">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Standard Conditions</h3>
          <p className="text-[10px] font-serif leading-relaxed text-justify text-gray-800">
            This documentary credit is subject to the Uniform Customs and Practice for Documentary Credits (UCP 600) of the International Chamber of Commerce, unless otherwise explicitly stated herein. The nominated bank is authorized to negotiate or pay against documents presented in strict compliance with the terms and conditions of this credit.
          </p>
        </div>

      </div>
    </Wrapper>
  );
};