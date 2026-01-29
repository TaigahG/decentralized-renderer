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
    // --- Header Information ---
    billNumber,
    billType,
    dateOfIssue,
    placeOfIssue,
    status: billStatus,

    // --- Maturity / Tenor ---
    maturityDate,
    maturityType,
    tenorDays,
    tenorDescription,

    // --- Parties ---
    drawer: {
      name: drawerName,
      registrationNumber: drawerReg,
      address: drawerAddress,
      bankDetails: drawerBank,
      signature: drawerSignature,
    } = {},
    drawee: {
      name: draweeName,
      address: draweeAddress,
      contactPerson: draweeContact,
    } = {},
    payee: {
      name: payeeName,
      payeeType,
      bankDetails: payeeBank,
    } = {},

    // --- Financials ---
    amount: {
      amountValue: billAmount,
      currencyCode: billCurrency,
      amountInWords,
    } = {},
    interestClause: {
      interestApplicable,
      interestRate,
      interestFromDate,
      interestCalculation,
    } = {},

    // --- Payment Instructions ---
    placeOfPayment,
    paymentInstructions,

    // --- Acceptance ---
    acceptance: {
      acceptanceStatus,
      acceptanceDate,
      acceptorName,
      acceptorSignature,
      acceptanceText,
    } = {},

    // --- Chains of Transfer ---
    endorsements = [],

    // --- Guarantee (Aval) ---
    aval: {
      avalGiven,
      avalistName,
      avalForWhom,
      avalistSignature,
    } = {},

    // --- Legal / Protest ---
    protest: {
      protestRequired,
      protestType,
      protestDate,
    } = {},

    // --- Banking Chain ---
    collectingBank: {
      bankName: collectingBankName,
    } = {},

    // --- Governance ---
    governingLaw,
    jurisdiction,
  } = data;

  // Helper for formatting addresses
  const formatAddress = (addr: any) => {
    if (!addr) return null;
    return `${addr.streetAddress || ""} ${addr.city || ""} ${addr.countryCode || ""}`.trim();
  };

  // Strict B&W Box Helper
  const InfoBox = ({ label, value, className = "", inverted = false, large = false }: { label: string; value?: string | React.ReactNode; className?: string; inverted?: boolean; large?: boolean }) => (
    <div className={`p-3 border-r border-b border-black last:border-r-0 ${inverted ? "bg-black text-white" : "bg-white text-black"} ${className}`}>
      <label className={`block text-[9px] uppercase font-bold mb-1 tracking-widest leading-none ${inverted ? "text-gray-400" : "text-gray-500"}`}>
        {label}
      </label>
      <div className={`${large ? "text-lg md:text-xl" : "text-xs md:text-sm"} font-bold uppercase leading-tight whitespace-pre-wrap break-words font-mono`}>
        {value || "-"}
      </div>
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-black border-2 border-black my-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        
        {/* --- Top Bar: No. and Amount --- */}
        <div className="flex justify-between items-start mb-6 border-b-4 border-black pb-6">
          <div className="flex flex-col">
             <div className="text-[10px] font-bold uppercase tracking-widest mb-1">Exchange For</div>
             <div className="text-4xl font-black font-mono tracking-tighter">
                {billCurrency} {billAmount?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
             </div>
          </div>
          <div className="text-right">
             <div className="text-[10px] font-bold uppercase tracking-widest mb-1">Bill Number</div>
             <div className="text-xl font-mono font-black">{billNumber || "DRAFT"}</div>
             <div className="mt-2 text-[10px] font-bold uppercase border border-black px-2 py-1 inline-block">
                {placeOfIssue}, {dateOfIssue}
             </div>
          </div>
        </div>

        {/* --- The Instrument (Legal Text) --- */}
        <div className="border border-black p-8 bg-gray-50 mb-6 relative">
           {/* Watermark */}
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
              <span className="text-[8rem] font-black uppercase text-gray-900 leading-none text-center block">
                 {billType === "Sight Draft" ? "SIGHT" : "TERM"}
              </span>
           </div>

           <div className="text-sm md:text-lg font-serif leading-relaxed text-justify">
              <span className="font-bold uppercase font-sans text-xs mr-2 border border-black px-1">Tenor:</span>
              {maturityType === 'At Sight' ? (
                 <span>At <strong>Sight</strong> of this <strong>{billType || "FIRST"}</strong> Bill of Exchange </span>
              ) : (
                 <span>At <strong>{tenorDays || "___"} Days</strong> after <strong>{tenorDescription || "Sight"}</strong> of this <strong>{billType || "FIRST"}</strong> Bill of Exchange </span>
              )}
              <span>
                 (Second of the same tenor and date being unpaid), Pay to the Order of <strong>{payeeName}</strong>
              </span>
              <div className="my-4 p-4 border-y border-black bg-white font-mono text-center font-bold uppercase">
                 {amountInWords || `*** ${billCurrency} ${billAmount?.toLocaleString()} ***`}
              </div>
              <span>
                 Value received and charge the same to account of <strong>{drawerName}</strong>.
              </span>
              
              {interestApplicable && (
                 <div className="mt-4 text-xs font-mono">
                    * Plus Interest at {interestRate}% per annum from {interestFromDate}.
                 </div>
              )}
           </div>
        </div>

        {/* --- Parties Grid --- */}
        <div className="grid grid-cols-2 gap-8 mb-8">
           {/* Left: To (Drawee) */}
           <div className="border border-black p-0">
              <div className="bg-black text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest">To: Drawee</div>
              <div className="p-4">
                 <div className="font-bold text-sm uppercase">{draweeName}</div>
                 <div className="text-xs text-gray-600 mt-1 whitespace-pre-line">{formatAddress(draweeAddress)}</div>
                 {draweeContact && <div className="text-[10px] mt-2 font-mono text-gray-500">Attn: {draweeContact.name}</div>}
              </div>
           </div>

           {/* Right: Drawer Signature */}
           <div className="border border-black p-0 flex flex-col">
              <div className="bg-white text-black px-3 py-1 text-[9px] font-black uppercase tracking-widest border-b border-black">Signed: Drawer</div>
              <div className="p-4 flex-1 flex flex-col justify-end items-end text-right">
                 <div className="font-script text-2xl mb-2">{drawerSignature || "Authorized Signature"}</div>
                 <div className="h-px bg-black w-32 mb-1"></div>
                 <div className="font-bold text-xs uppercase">{drawerName}</div>
                 <div className="text-[10px] text-gray-500">{drawerReg}</div>
              </div>
           </div>
        </div>

        {/* --- Acceptance Section (Crucial for Time Drafts) --- */}
        {acceptanceStatus === "Accepted" && (
           <div className="mb-8 border-4 border-double border-black p-1 relative bg-white transform -rotate-1 shadow-lg">
              <div className="border border-black p-4 text-center">
                 <div className="text-2xl font-black uppercase tracking-widest mb-2">ACCEPTED</div>
                 <div className="text-xs font-mono mb-2">Date: {acceptanceDate}</div>
                 <div className="text-xs font-bold uppercase mb-4">Payable at: {placeOfPayment || "Designated Bank"}</div>
                 
                 <div className="font-script text-xl mb-1">{acceptorSignature || "Signed"}</div>
                 <div className="h-px bg-black w-48 mx-auto mb-1"></div>
                 <div className="text-[10px] uppercase font-bold">{acceptorName}</div>
              </div>
           </div>
        )}

        {/* --- Aval / Guarantee --- */}
        {avalGiven && (
           <div className="mb-8 p-4 border border-black bg-gray-100 flex items-center justify-between">
              <div>
                 <div className="text-[10px] font-black uppercase tracking-widest mb-1">Pour Aval (Guarantee)</div>
                 <div className="text-xs">Good for guarantee on behalf of <strong>{avalForWhom}</strong></div>
              </div>
              <div className="text-right">
                 <div className="font-script text-lg">{avalistSignature}</div>
                 <div className="text-[10px] font-bold uppercase">{avalistName}</div>
              </div>
           </div>
        )}

        {/* --- Back of Bill (Endorsements) --- */}
        {endorsements.length > 0 && (
           <div className="mt-8 pt-8 border-t-2 border-dashed border-gray-400">
              <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-4">Endorsements (Transfer History)</h3>
              <div className="grid grid-cols-1 divide-y divide-black border border-black">
                 {endorsements.map((end, i) => (
                    <div key={i} className="p-3 flex justify-between items-center text-xs">
                       <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-black text-[10px] mr-4">{i+1}</div>
                       <div className="flex-1">
                          <span className="font-bold">Pay to: </span>
                          <span className="font-mono">{end.endorseeName || "BEARER"}</span>
                          {end.withoutRecourse && <span className="ml-2 text-[9px] border border-black px-1">WITHOUT RECOURSE</span>}
                       </div>
                       <div className="text-right">
                          <div className="font-script">{end.endorserSignature}</div>
                          <div className="text-[9px] uppercase font-bold text-gray-500">{end.endorserName}</div>
                          <div className="text-[8px] font-mono">{end.endorsementDate}</div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        )}

        {/* --- Footer Details --- */}
        <div className="grid grid-cols-3 mt-8 border-t-2 border-black pt-4">
           <div>
              <label className="block text-[8px] uppercase font-bold text-gray-500 mb-1">Banking Chain</label>
              <div className="text-[10px] font-mono">Coll: {collectingBankName || "N/A"}</div>
           </div>
           <div>
              <label className="block text-[8px] uppercase font-bold text-gray-500 mb-1">Protest Instructions</label>
              <div className="text-[10px] font-bold uppercase">
                 {protestRequired === "No" ? "NO PROTEST / SANS FRAIS" : "PROTEST REQUIRED"}
              </div>
           </div>
           <div>
              <label className="block text-[8px] uppercase font-bold text-gray-500 mb-1">Governing Law</label>
              <div className="text-[10px] font-mono">{governingLaw || "Geneva Convention 1930"}</div>
           </div>
        </div>

        {/* --- Authenticator --- */}
        <div className="mt-8 bg-black text-white p-4 flex justify-between items-center">
           <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${billStatus === 'Dishonored' ? 'bg-red-500' : 'bg-white'} animate-pulse`}></div>
              <span className="text-[9px] font-black uppercase tracking-widest">
                 {billStatus === 'Dishonored' ? "INSTRUMENT DISHONORED" : "NEGOTIABLE INSTRUMENT"}
              </span>
           </div>
           <div className="text-right">
              <div className="text-[8px] font-mono text-gray-500 mb-1">HASH: {data.documentHash?.substring(0, 32)}...</div>
              <div className="flex items-center space-x-2 justify-end">
                <span className="text-[9px] font-bold uppercase">Powered by</span>
                <span className="text-[11px] font-black tracking-tighter uppercase">Chaindox</span>
              </div>
           </div>
        </div>

      </div>
    </Wrapper>
  );
}