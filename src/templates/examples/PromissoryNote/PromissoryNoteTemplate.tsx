import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { ElectronicPromissoryNote, PromissoryNoteSchema } from "./types";

export const PromissoryNoteTemplate: FunctionComponent<
  TemplateProps<PromissoryNoteSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as ElectronicPromissoryNote;

  const {
    // --- Dates ---
    issueDate,
    paymentDueDate,

    // --- Parties ---
    payee: {
      name: payeeName,
      addressline: payeeAddress,
      city: payeeCity,
      country: payeeCountry,
      email: payeeEmail,
    } = {},
    drawer: { // The maker/issuer of the note
      name: drawerName,
      addressline: drawerAddress,
      city: drawerCity,
      country: drawerCountry,
      email: drawerEmail,
    } = {},

    // --- Issuance & Terms ---
    placeOfIssue,
    issuerStamp,
    paymentTerm,

    // --- Financials ---
    monetaryAmount,
  } = data;

  // Helper to format addresses cleanly
  const formatAddress = (address?: string, city?: string, country?: string) => {
    const parts = [address, city, country].filter(Boolean);
    return parts.join(", ");
  };

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto p-1 bg-white font-serif text-black border-4 border-black my-12 relative shadow-lg">
        {/* Inner Border for Traditional Look */}
        <div className="border border-black p-8 md:p-12 relative">
          
          {/* Background Watermark (Subtle) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
             <span className="text-[12rem] font-black uppercase text-center leading-none transform -rotate-12 whitespace-nowrap">
                PROMISE<br/>TO PAY
             </span>
          </div>

          {/* --- Header: Amount and Date --- */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b-2 border-black pb-6 relative z-10">
             <div>
                <label className="block text-[10px] uppercase font-sans font-bold tracking-widest text-gray-500 mb-1">Place & Date of Issue</label>
                <div className="text-lg font-bold uppercase tracking-wide">
                   {placeOfIssue || "City, Country"}, {issueDate || "YYYY-MM-DD"}
                </div>
             </div>
             <div className="mt-4 md:mt-0 text-right">
                <label className="block text-[10px] uppercase font-sans font-bold tracking-widest text-gray-500 mb-1">Principal Amount</label>
                <div className="text-3xl font-black font-mono tracking-tighter border-2 border-black px-4 py-2 inline-block bg-gray-50">
                   {monetaryAmount != null ? monetaryAmount.toLocaleString(undefined, { minimumFractionDigits: 2 }) : "0.00"}
                </div>
             </div>
          </div>

          {/* --- Title --- */}
          <div className="text-center mb-10 relative z-10 pt-6">
             <h1 className="text-4xl md:text-5xl font-black uppercase tracking-[0.2em] text-black">
                Promissory Note
             </h1>
          </div>

          {/* --- The Promise (Legal Body) --- */}
          <div className="text-lg md:text-xl leading-loose text-justify mb-12 relative z-10 pb-6">
             <span className="font-bold uppercase tracking-widest text-sm mr-4 font-sans">For Value Received,</span>
             the undersigned Maker, <strong>{drawerName || "[Maker Name]"}</strong>, hereby unconditionally promises to pay to the order of <strong>{payeeName || "[Payee Name]"}</strong> (the "Payee"), the principal sum of <strong>{monetaryAmount != null ? monetaryAmount.toLocaleString(undefined, { minimumFractionDigits: 2 }) : "[Amount]"}</strong>.
             
             <br/><br/>
             Payment shall be due and payable <span className="underline decoration-1 underline-offset-4 font-bold">{paymentTerm || "as per agreed terms"}</span>, on or before the due date of <strong>{paymentDueDate || "[Date]"}</strong>.
             
             <br/><br/>
             All payments under this Note shall be made in immediately available funds at the address of the Payee or at such other place as the Payee may designate in writing. This Note constitutes a primary, absolute, and unconditional obligation of the Maker.
          </div>

          {/* --- Parties Detailed Information --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 border-t border-b border-black pt-6 pb-6 relative z-10 font-sans">
             {/* Maker/Drawer Info */}
             <div>
                <h3 className="text-xs font-black uppercase tracking-widest mb-3 border-b border-black pb-1 inline-block">Details of Maker (Drawer)</h3>
                <div className="text-sm font-bold uppercase">{drawerName}</div>
                <div className="text-xs mt-1 leading-relaxed text-gray-800">
                   {formatAddress(drawerAddress, drawerCity, drawerCountry)}
                </div>
                {drawerEmail && <div className="text-xs mt-1 text-gray-600 font-mono">Email: {drawerEmail}</div>}
             </div>

             {/* Payee Info */}
             <div>
                <h3 className="text-xs font-black uppercase tracking-widest mb-3 border-b border-black pb-1 inline-block">Details of Payee</h3>
                <div className="text-sm font-bold uppercase">{payeeName}</div>
                <div className="text-xs mt-1 leading-relaxed text-gray-800">
                   {formatAddress(payeeAddress, payeeCity, payeeCountry)}
                </div>
                {payeeEmail && <div className="text-xs mt-1 text-gray-600 font-mono">Email: {payeeEmail}</div>}
             </div>
          </div>

          {/* --- Signatures & Stamps --- */}
          <div className="flex flex-col md:flex-row justify-between items-end relative z-10 pt-6">
             {/* Issuer Stamp Area */}
             {/* <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <div className="w-32 h-32 border-2 border-dashed border-gray-400 rounded-full flex flex-col items-center justify-center text-center p-2 mx-auto md:mx-0 relative">
                   <div className="text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-1">Official<br/>Stamp</div>
                   <div className="text-xs font-serif font-bold text-black border-t border-black pt-1 px-2">
                     {issuerStamp || "VALIDATED"}
                   </div>
                </div>
             </div> */}

             {/* Signature Area */}
             <div className="w-full md:w-1/2 text-left">
                <label className="block text-[10px] uppercase font-sans font-bold tracking-widest text-gray-500 mb-6">Issued By (Maker)</label>
                <div className="font-script text-3xl mb-2 pr-4">Digitally Signed</div>
                <div className="h-px bg-black w-full mb-2"></div>
                <div className="text-xs font-bold uppercase tracking-widest font-sans">{drawerName}</div>
                <div className="text-[10px] uppercase text-gray-500 font-sans mt-1">Power by Chaindox</div>
             </div>
          </div>

        </div>
      </div>
    </Wrapper>
  );
};