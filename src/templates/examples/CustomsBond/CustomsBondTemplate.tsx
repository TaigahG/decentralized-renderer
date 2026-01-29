import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { CustomsBond, CustomsBondSchema } from "./types";

export const CustomsBondTemplate: FunctionComponent<
  TemplateProps<CustomsBondSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as CustomsBond;

  const {
    // --- Header Information ---
    bondNumber,
    bondType,
    activityCode,
    effectiveDate,
    expirationDate,

    // --- Parties ---
    principal: {
      name: principalName,
      address: principalAddress,
      city: principalCity,
      stateProvince: principalState,
      postalCode: principalZip,
      countryCode: principalCountry,
      taxId: principalTaxId,
      ein: principalEin,
      eoriNumber: principalEori,
      contactPerson: principalContact,
    } = {},
    surety: {
      name: suretyName,
      suretyCode,
      address: suretyAddress,
      licenseNumber: suretyLicense,
    } = {},
    obligee: {
      name: obligeeName,
      customsAuthority,
    } = {},

    // --- Financials ---
    financials: {
      totalLiability: {
        amount: liabilityAmount = undefined,
        currencyCode: liabilityCurrency = undefined
      } = {},
      limitOfLiability: {
        amount: limitAmount = undefined
      } = {},
      premiumAmount: {
        amount: premiumVal = undefined
      } = {},
    } = {},

    // --- Scope ---
    scopeAndLocation: {
      portOfExecution,
      coverageScope,
      coveredPorts = [],
    } = {},

    // --- Execution & Signatures ---
    execution: {
      dateOfExecution,
      placeOfExecution,
      signatureOfPrincipal,
      signatureOfSurety,
      officialSeal,
      witness: {
        name: witnessName = undefined,
        signature: witnessSignature = undefined,
        dateOfWitnessing = undefined,
      } = {},
    } = {},
  } = data;

  // Professional box helper
  const InfoBox = ({ label, value, className = "", highlight = false }: { label: string; value?: string | React.ReactNode; className?: string; highlight?: boolean }) => (
    <div className={`border border-gray-300 p-3 min-h-[85px] ${highlight ? "bg-gray-50" : ""} ${className}`}>
      <label className="block text-[9px] uppercase font-black text-gray-400 mb-2 tracking-widest leading-none">{label}</label>
      <div className="text-sm font-bold uppercase text-gray-800 leading-tight whitespace-pre-line">{value || "-"}</div>
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-gray-900 border border-gray-200 shadow-2xl my-10 relative">
        
        {/* --- Header Section --- */}
        <div className="flex justify-between items-start border-b-4 border-gray-900 pb-6 mb-0">
          <div className="flex-1">
            <h1 className="text-3xl font-black uppercase tracking-tighter leading-none mb-1 text-gray-900">
              Customs Bond
            </h1>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">
              Revenue & Import Compliance Guarantee
            </p>
            <div className="flex gap-2">
              <div className="bg-gray-900 text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                Activity Code: {activityCode || "1"}
              </div>
              <div className="border border-gray-900 text-gray-900 px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                {bondType || "Continuous"} Bond
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] uppercase text-gray-400 font-bold mb-1 tracking-widest">Bond No.</p>
            <p className="text-xl font-mono font-bold text-blue-900">{bondNumber || "PENDING"}</p>
            <div className="mt-2 text-[10px] font-bold uppercase text-gray-500">
               Effective: {effectiveDate || "N/A"}
            </div>
          </div>
        </div>

        {/* --- Obligee (The Government) --- */}
        <div className="bg-gray-50 border border-gray-300 border-t-0 p-4 border-b-0">
           <label className="block text-[9px] uppercase font-black text-gray-400 mb-1 tracking-widest">Bond Obligee (Beneficiary)</label>
           <div className="text-lg font-black text-gray-900 uppercase">{obligeeName || "United States of America"}</div>
           <div className="text-xs text-gray-600 font-bold uppercase tracking-wide">{customsAuthority || "U.S. Customs and Border Protection"}</div>
        </div>

        {/* --- Parties Grid --- */}
        <div className="grid grid-cols-2 border border-gray-300 border-t-0">
          {/* Principal */}
          <div className="p-4 border-r border-gray-300">
             <label className="block text-[9px] uppercase font-black text-gray-400 mb-2 tracking-widest">Principal (Importer)</label>
             <div className="mb-2">
                <div className="font-bold text-sm uppercase">{principalName}</div>
                <div className="text-[10px] text-gray-500 leading-tight mt-1">
                  {principalAddress}<br/>
                  {principalCity} {principalState} {principalZip}<br/>
                  {principalCountry}
                </div>
             </div>
             <div className="bg-blue-50 p-2 border border-blue-100 rounded-sm">
                <label className="block text-[8px] uppercase font-black text-blue-400 mb-1">Identification Number</label>
                <div className="font-mono font-bold text-blue-900 text-xs">
                   {principalEin ? `EIN: ${principalEin}` : principalEori ? `EORI: ${principalEori}` : `TAX ID: ${principalTaxId}`}
                </div>
             </div>
          </div>

          {/* Surety */}
          <div className="p-4">
             <label className="block text-[9px] uppercase font-black text-gray-400 mb-2 tracking-widest">Surety (Insurer)</label>
             <div className="mb-2">
                <div className="font-bold text-sm uppercase">{suretyName}</div>
                <div className="text-[10px] text-gray-500 leading-tight mt-1">{suretyAddress}</div>
             </div>
             <div className="flex gap-4">
               <div>
                  <label className="block text-[8px] uppercase font-black text-gray-400 mb-1">Surety Code</label>
                  <div className="font-mono font-bold text-gray-700 text-xs">{suretyCode}</div>
               </div>
               <div>
                  <label className="block text-[8px] uppercase font-black text-gray-400 mb-1">License No.</label>
                  <div className="font-mono font-bold text-gray-700 text-xs">{suretyLicense}</div>
               </div>
             </div>
          </div>
        </div>

        {/* --- Financial Liability (The Money) --- */}
        <div className="grid grid-cols-3 bg-gray-900 text-white border-b border-gray-800">
           <div className="p-4 border-r border-gray-800">
              <label className="block text-[8px] uppercase font-black text-gray-500 mb-1">Total Liability Amount</label>
              <div className="text-xl font-black">{liabilityCurrency} {liabilityAmount?.toLocaleString()}</div>
           </div>
           <div className="p-4 border-r border-gray-800">
              <label className="block text-[8px] uppercase font-black text-gray-500 mb-1">Limit of Liability</label>
              <div className="text-sm font-bold text-gray-300">{limitAmount ? `${liabilityCurrency} ${limitAmount.toLocaleString()}` : "No Limit Specified"}</div>
           </div>
           <div className="p-4">
              <label className="block text-[8px] uppercase font-black text-gray-500 mb-1">Premium</label>
              <div className="text-sm font-bold text-gray-300">{premiumVal ? `${liabilityCurrency} ${premiumVal.toLocaleString()}` : "As Agreed"}</div>
           </div>
        </div>

        {/* --- Scope & Execution Location --- */}
        <div className="grid grid-cols-3 border-x border-b border-gray-300">
           <InfoBox label="Port of Execution" value={portOfExecution} className="border-l-0 border-t-0 border-b-0" />
           <InfoBox label="Date of Execution" value={dateOfExecution} className="border-l-0 border-t-0 border-b-0" />
           <InfoBox label="Coverage Scope" value={coverageScope} className="border-r-0 border-l-0 border-t-0 border-b-0" highlight />
        </div>

        {/* --- Legal Text --- */}
        <div className="p-6 border-x border-b border-gray-300 bg-gray-50">
           <p className="text-[9px] text-gray-500 italic text-justify leading-relaxed">
             Witness, our hands and seals this <span className="font-bold text-gray-700">{dateOfExecution}</span>. By signing below, the Principal and Surety bind themselves, their heirs, executors, administrators, successors, and assigns, jointly and severally, to pay the amount of this bond to the Obligee upon failure to comply with the conditions of the bond.
           </p>
        </div>

        {/* --- Signatures Section --- */}
        <div className="grid grid-cols-2 border-x border-b border-gray-300">
           {/* Principal Signature */}
           <div className="p-8 border-r border-gray-300 relative">
              <label className="block text-[9px] uppercase font-black text-gray-400 mb-6 tracking-widest text-center">Signed for Principal</label>
              
              <div className="font-script text-2xl text-blue-900 text-center mb-2">{signatureOfPrincipal || "Electronic Signature"}</div>
              <div className="h-px bg-gray-300 w-2/3 mx-auto mb-2"></div>
              
              <div className="text-center">
                 <div className="text-[10px] font-bold uppercase text-gray-800">{principalName}</div>
                 <div className="text-[8px] font-bold text-gray-400 uppercase mt-1">Principal / Importer of Record</div>
              </div>
           </div>

           {/* Surety Signature */}
           <div className="p-8 relative bg-gray-50/50">
              {/* Digital Seal Watermark */}
              <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
                 <div className="w-16 h-16 border-4 border-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-[6px] font-black text-center text-gray-800">CORPORATE<br/>SEAL</span>
                 </div>
              </div>

              <label className="block text-[9px] uppercase font-black text-gray-400 mb-6 tracking-widest text-center">Signed for Surety</label>
              
              <div className="font-script text-2xl text-blue-900 text-center mb-2">{signatureOfSurety || "Electronic Signature"}</div>
              <div className="h-px bg-gray-300 w-2/3 mx-auto mb-2"></div>
              
              <div className="text-center">
                 <div className="text-[10px] font-bold uppercase text-gray-800">{suretyName}</div>
                 <div className="text-[8px] font-bold text-gray-400 uppercase mt-1">Attorney-in-Fact</div>
              </div>
           </div>
        </div>

        {/* --- Witness & Verification --- */}
        <div className="grid grid-cols-2 border-x border-b border-gray-300">
           <div className="p-4 border-r border-gray-300">
              <label className="block text-[8px] uppercase font-black text-gray-400 mb-1">Witnessed By</label>
              <div className="text-xs font-bold text-gray-700">{witnessName}</div>
              <div className="text-[8px] text-gray-400 italic">{witnessSignature ? "Digitally Witnessed" : ""} {dateOfWitnessing}</div>
           </div>
           <div className="p-4 flex flex-col justify-center">
               <div className="flex items-center space-x-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Active Chaindox Bond</span>
              </div>
              <div className="text-[8px] font-mono text-gray-400 mt-1">HASH: {data.documentHash?.substring(0, 32)}...</div>
           </div>
        </div>

        {/* --- Footer --- */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-[9px] font-bold text-gray-400 uppercase tracking-widest">
          <div>CBP Form 301 / International Surety Standard Compatible</div>
          <div className="flex items-center space-x-2">
            <span>Powered by</span>
            <span className="text-[11px] font-black text-blue-900 tracking-tighter uppercase">Chaindox</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}