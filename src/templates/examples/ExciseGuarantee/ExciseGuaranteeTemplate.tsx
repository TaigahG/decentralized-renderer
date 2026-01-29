import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { ExciseGuarantee, ExciseGuaranteeSchema } from "./types";

export const ExciseGuaranteeTemplate: FunctionComponent<
  TemplateProps<ExciseGuaranteeSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as ExciseGuarantee;

  const {
    // --- Header Information ---
    guaranteeNumber, // GRN
    guaranteeType,
    guaranteeStatus,
    issueDate,
    effectiveDate,
    expiryDate,

    // --- Parties ---
    principal: {
      name: principalName,
      tradingName: principalTradingName,
      exciseNumber: principalSeed,
      taxIdentificationNumber: principalTaxId,
      address: {
        streetAddress: principalStreet,
        city: principalCity,
        countryCode: principalCountry,
      } = {},
      contactPerson: principalContact,
    } = {},
    guarantor: {
      name: guarantorName,
      institutionType,
      bankIdentifierCode: guarantorBic,
      address: {
        streetAddress: guarantorStreet,
        city: guarantorCity,
        countryCode: guarantorCountry,
      } = {},
      contactPerson: guarantorContact,
    } = {},
    beneficiary: {
      authorityName: beneficiaryName,
      authorityCode: beneficiaryCode,
      countryCode: beneficiaryCountry,
    } = {},

    // --- Financials ---
    guaranteeAmount: {
      amountValue: totalAmount,
      currencyCode: guaranteeCurrency,
    } = {},
    guaranteeUtilization: {
      utilizationMethod,
      currentUtilization: { amountValue: usedAmount } = {},
      availableBalance: { amountValue: availableAmount } = {},
    } = {},

    // --- Scope ---
    coveredActivities = [],
    exciseProducts = [],
    validityTerritory: {
      territoryScope,
      memberStates = [],
    } = {},

    // --- Legal & Administrative ---
    guaranteeConditions: {
      termsAndConditions,
      claimProcedure,
      noticePeriod: { days: noticeDays } = {},
    } = {},
    referenceToAuthorization: {
      authorizationNumber,
      authorizationType,
    } = {},

    // --- Execution & Approval ---
    guarantorDeclaration: {
      signatoryName: guarantorSignatory,
      signatoryPosition: guarantorPosition,
      signatureDate: guarantorSignDate,
    } = {},
    acceptanceByAuthority: {
      acceptanceStatus,
      acceptanceDate,
      acceptanceReference,
      officerName,
    } = {},

    // --- History ---
    amendmentHistory = [],
  } = data;

  // Strict B&W Helper
  const DataBox = ({ label, value, className = "", inverted = false }: { label: string; value?: string | React.ReactNode; className?: string; inverted?: boolean }) => (
    <div className={`p-3 min-h-[60px] border-b border-r border-black last:border-r-0 ${inverted ? "bg-black text-white" : "bg-white text-black"} ${className}`}>
      <label className={`block text-[9px] uppercase font-bold mb-1 tracking-widest leading-none ${inverted ? "text-gray-400" : "text-gray-600"}`}>
        {label}
      </label>
      <div className="text-sm font-bold uppercase leading-tight break-words font-mono">
        {value || "-"}
      </div>
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-black border-2 border-black my-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
        {/* --- Header --- */}
        <div className="border-b-4 border-black pb-6 mb-0 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">
              Excise Guarantee
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
              Movement of Excise Goods under Duty Suspension
            </p>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-bold uppercase tracking-widest mb-1">Guarantee Reference Number (GRN)</p>
            <p className="text-2xl font-mono font-black tracking-widest bg-black text-white px-2 py-1">
              {guaranteeNumber || "PENDING"}
            </p>
          </div>
        </div>

        {/* --- Key Dates & Status --- */}
        <div className="grid grid-cols-4 border-b-2 border-black">
          <DataBox label="Guarantee Type" value={guaranteeType} />
          <DataBox label="Issue Date" value={issueDate} />
          <DataBox label="Effective Date" value={effectiveDate} />
          <div className="p-3 border-b border-black flex flex-col justify-center items-center">
            <label className="block text-[9px] uppercase font-bold text-gray-600 mb-1 tracking-widest">Status</label>
            <div className={`text-sm font-black uppercase px-3 py-1 border-2 ${guaranteeStatus === 'Active' ? 'border-black text-black' : 'border-red-600 text-red-600'}`}>
              {guaranteeStatus || "Draft"}
            </div>
          </div>
        </div>

        {/* --- Parties Section --- */}
        <div className="grid grid-cols-2 border-b-2 border-black">
          {/* Principal */}
          <div className="border-r border-black p-4">
             <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-black"></div>
                <h3 className="text-xs font-black uppercase tracking-widest">Principal (Economic Operator)</h3>
             </div>
             <div className="text-sm font-bold uppercase mb-1">{principalName}</div>
             {principalTradingName && <div className="text-xs italic mb-2">T/A {principalTradingName}</div>}
             <div className="text-xs mb-3">
               {principalStreet}<br/>
               {principalCity}, {principalCountry}
             </div>
             <div className="border border-black p-2 inline-block">
               <label className="block text-[8px] uppercase font-bold text-gray-500">SEED / Excise Number</label>
               <div className="font-mono font-bold text-sm">{principalSeed}</div>
             </div>
          </div>

          {/* Guarantor */}
          <div className="p-4 bg-gray-50">
             <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 border-2 border-black"></div>
                <h3 className="text-xs font-black uppercase tracking-widest">Guarantor (Financial Inst.)</h3>
             </div>
             <div className="text-sm font-bold uppercase mb-1">{guarantorName}</div>
             <div className="text-xs mb-3">
               {guarantorStreet}<br/>
               {guarantorCity}, {guarantorCountry}
             </div>
             <div className="flex gap-4">
               <div>
                 <label className="block text-[8px] uppercase font-bold text-gray-500">Institution Type</label>
                 <div className="font-mono font-bold text-xs">{institutionType}</div>
               </div>
               <div>
                 <label className="block text-[8px] uppercase font-black text-gray-500">BIC / SWIFT</label>
                 <div className="font-mono font-bold text-xs">{guarantorBic}</div>
               </div>
             </div>
          </div>
        </div>

        {/* --- Beneficiary & Coverage Scope --- */}
        <div className="grid grid-cols-3 border-b-2 border-black">
           <DataBox 
             label="Beneficiary Authority" 
             value={`${beneficiaryName} (${beneficiaryCode}) - ${beneficiaryCountry}`} 
             className="col-span-2"
           />
           <DataBox 
             label="Territorial Validity" 
             value={
               <div>
                 <div>{territoryScope}</div>
                 {memberStates.length > 0 && <div className="text-[8px] mt-1">{memberStates.join(", ")}</div>}
               </div>
             } 
             className="border-r-0"
           />
        </div>

        {/* --- Financials (Inverted Block for Emphasis) --- */}
        <div className="bg-black text-white p-6 border-b-2 border-black">
           <div className="flex justify-between items-end">
              <div>
                 <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-[0.2em]">Total Guarantee Amount</label>
                 <div className="text-4xl font-black font-mono tracking-tighter">
                    {guaranteeCurrency} {totalAmount?.toLocaleString()}
                 </div>
              </div>
              <div className="text-right">
                 <label className="block text-[9px] uppercase font-bold text-gray-400 mb-1">Utilization Method</label>
                 <div className="text-lg font-bold border border-white px-2 inline-block">{utilizationMethod || "Fixed"}</div>
              </div>
           </div>
           
           {/* Utilization Details (If Applicable) */}
           {utilizationMethod === 'Revolving' && (
             <div className="mt-6 pt-4 border-t border-gray-700 grid grid-cols-2 gap-8">
                <div>
                   <label className="block text-[8px] uppercase font-bold text-gray-500 mb-1">Current Utilization</label>
                   <div className="w-full bg-gray-800 h-2 mt-1">
                      <div className="bg-white h-2" style={{ width: `${Math.min(((usedAmount || 0) / (totalAmount || 1)) * 100, 100)}%` }}></div>
                   </div>
                   <div className="text-xs font-mono mt-1">{guaranteeCurrency} {usedAmount?.toLocaleString()}</div>
                </div>
                <div>
                   <label className="block text-[8px] uppercase font-bold text-gray-500 mb-1">Available Balance</label>
                   <div className="text-xl font-mono font-bold">{guaranteeCurrency} {availableAmount?.toLocaleString()}</div>
                </div>
             </div>
           )}
        </div>

        {/* --- Covered Activities --- */}
        <div className="border-b border-black">
          <div className="bg-gray-100 p-2 border-b border-black text-[9px] font-black uppercase tracking-widest">
             Covered Activities & Products
          </div>
          <div className="grid grid-cols-2 min-h-[100px]">
             <div className="p-4 border-r border-black">
                <ul className="list-disc list-inside text-xs font-mono space-y-1">
                   {coveredActivities.length > 0 ? coveredActivities.map((act, i) => (
                      <li key={i}>{act.activityType} <span className="text-[10px] text-gray-500">({act.activityCode})</span></li>
                   )) : <li>All Authorized Activities</li>}
                </ul>
             </div>
             <div className="p-4">
                <div className="flex flex-wrap gap-2">
                   {exciseProducts.length > 0 ? exciseProducts.map((prod, i) => (
                      <span key={i} className="border border-black px-2 py-1 text-[10px] font-bold uppercase">
                         {prod.productCategory} ({prod.exciseProductCode})
                      </span>
                   )) : <span className="text-xs italic">All Excise Categories</span>}
                </div>
             </div>
          </div>
        </div>

        {/* --- Legal Conditions --- */}
        <div className="p-4 border-b border-black text-[10px] text-justify font-serif leading-relaxed">
           <span className="font-bold uppercase mr-2">Terms:</span>
           {termsAndConditions || "The Guarantor hereby undertakes to pay, up to the maximum amount of the guarantee, the sums of excise duty which the Principal may be liable to pay in respect of the excise goods listed above. This guarantee is valid for movements starting on or after the effective date."}
           <div className="mt-2 font-mono text-[9px]">
              AUTH REF: {authorizationNumber} ({authorizationType})
           </div>
        </div>

        {/* --- Execution Block --- */}
        <div className="grid grid-cols-2">
           {/* Guarantor Signature */}
           <div className="p-8 border-r border-black flex flex-col justify-between min-h-[200px]">
              <div>
                 <label className="block text-[9px] uppercase font-bold text-gray-500 mb-4 tracking-widest text-center">Executed for the Guarantor</label>
                 <div className="font-script text-3xl text-center mb-2 transform -rotate-2">{guarantorSignatory || "Signed"}</div>
                 <div className="h-px bg-black w-2/3 mx-auto mb-2"></div>
                 <div className="text-center text-xs font-bold uppercase">{guarantorSignatory}</div>
                 <div className="text-center text-[10px] uppercase text-gray-500">{guarantorPosition}</div>
              </div>
              <div className="mt-4 text-center font-mono text-[10px]">
                 Date: {guarantorSignDate}
              </div>
           </div>

           {/* Authority Acceptance */}
           <div className="p-8 bg-gray-50 flex flex-col justify-between min-h-[200px] relative overflow-hidden">
              {/* Stamp Placeholder */}
              <div className="absolute top-4 right-4 border-4 border-double border-black rounded-full w-24 h-24 flex items-center justify-center opacity-10 rotate-12">
                 <div className="text-[8px] font-black text-center leading-tight">OFFICIAL<br/>ACCEPTANCE<br/>STAMP</div>
              </div>

              <div>
                 <label className="block text-[9px] uppercase font-bold text-gray-500 mb-4 tracking-widest text-center">Accepted by Competent Authority</label>
                 <div className="border-2 border-black p-2 text-center bg-white mb-2">
                    <span className="text-xl font-black uppercase">{acceptanceStatus || "PENDING"}</span>
                 </div>
                 <div className="text-center text-xs font-bold uppercase">{officerName}</div>
                 <div className="text-center text-[10px] font-mono mt-1">Ref: {acceptanceReference}</div>
              </div>
              <div className="mt-4 text-center font-mono text-[10px]">
                 Date: {acceptanceDate}
              </div>
           </div>
        </div>

        {/* --- Footer --- */}
        <div className="border-t-4 border-black p-4 flex justify-between items-center bg-black text-white">
           <div className="text-[9px] font-bold uppercase tracking-widest">
              UN/CEFACT International Trade Guarantee
           </div>
           <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                 <div className="w-2 h-2 bg-white rounded-full"></div>
                 <span className="text-[9px] font-bold uppercase">Chaindox Verified</span>
              </div>
              <div className="text-[8px] font-mono text-gray-400">
                 HASH: {data.documentHash?.substring(0, 16)}...
              </div>
           </div>
        </div>

      </div>
    </Wrapper>
  );
}