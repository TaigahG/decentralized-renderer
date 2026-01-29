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
    // --- Header & General Info ---
    lcNumber,
    lcType,
    formOfDocumentaryCredit,
    status: lcStatus,
    dateOfIssue,
    dateOfExpiry,
    placeOfExpiry,
    applicableRules,
    transferable,
    standbyIndicator,

    // --- Banks ---
    issuingBank: {
      bankName: issuingBankName,
      swiftBic: issuingSwift,
      address: issuingAddress,
      contactPerson: issuingContact,
    } = {},
    advisingBank: {
      bankName: advisingBankName,
      swiftCode: advisingSwift,
      address: advisingAddress,
    } = {},
    confirmingBank: {
      bankName: confirmingBankName,
      swiftCode: confirmingSwift,
      confirmationInstructions,
    } = {},
    nominatedBank: {
      bankName: nominatedBankName,
    } = {},
    reimbursementBank: {
      bankName: reimbursementBankName,
    } = {},

    // --- Commercial Parties ---
    applicant: {
      name: applicantName,
      accountNumber: applicantAccount,
      address: applicantAddress,
    } = {},
    beneficiary: {
      name: beneficiaryName,
      accountNumber: beneficiaryAccount,
      address: beneficiaryAddress,
    } = {},

    // --- Financials ---
    creditAmount: {
      currencyCode: lcCurrency,
      amountValue: lcAmount,
      amountInWords,
      tolerance: {
        positivePercentage: tolerancePlus = undefined,
        negativePercentage: toleranceMinus = undefined,
      } = {},
    } = {},
    availableBalance: {
      amountValue: balanceAmount,
    } = {},

    availableWith,
    availableBy,
    draftsAt,
    drawee,
    deferredPaymentDetails: {
      deferredPaymentTerms,
    } = {},
    chargesInstructions: {
      chargesOutsideIssuingBank,
      confirmationCharges,
    } = {},

    // --- Shipment & Goods ---
    partialShipments,
    transshipment,
    shipmentDetails: {
      placeOfTakingInCharge,
      portOfLoading,
      portOfDischarge,
      placeOfFinalDestination,
      latestDateOfShipment,
      shipmentPeriod,
      incotermCode,
      incotermLocation,
    } = {},
    goodsDescription: {
      descriptionOfGoods,
      hsCode,
      quantity: goodsQuantity,
      unitPrice: { amountValue: unitPriceValue = undefined } = {},
      countryOfOrigin,
    } = {},

    // --- Documents & Conditions ---
    documentsRequired = [],
    additionalConditions = [],
    periodForPresentation: {
      days: presentationDays,
      afterEvent: presentationEvent,
    } = {},

    // --- Lifecycle History ---
    amendments = [],
  } = data;

  // Helper for address objects
  const formatAddress = (addr: any) => {
    if (!addr) return null;
    if (typeof addr === "string") return addr;
    return `${addr.streetAddress || ""} ${addr.city || ""} ${addr.stateProvince || ""} ${addr.postalCode || ""} ${addr.countryCode || ""}`.trim();
  };

  // Strict B&W Box Helper
  const DataBox = ({ label, value, className = "", inverted = false, large = false }: { label: string; value?: string | React.ReactNode; className?: string; inverted?: boolean; large?: boolean }) => (
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
      <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-black border-2 border-black my-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
        {/* --- Header: SWIFT MT700 Style --- */}
        <div className="border-b-4 border-black pb-4 mb-0 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">
              Documentary Credit
            </h1>
            <div className="flex gap-2 text-[10px] font-bold uppercase">
              <span className="border border-black px-2 py-1">{formOfDocumentaryCredit || "Irrevocable"}</span>
              {transferable && <span className="border border-black bg-gray-100 px-2 py-1">Transferable</span>}
              {standbyIndicator && <span className="border border-black bg-gray-100 px-2 py-1">Standby</span>}
              <span className="border border-black px-2 py-1">Rule: {applicableRules || "UCP 600"}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-bold uppercase tracking-widest mb-1">Credit Number (20)</p>
            <p className="text-2xl font-mono font-black tracking-widest bg-black text-white px-3 py-1 mb-2">
              {lcNumber || "DRAFT"}
            </p>
            <span className={`text-[10px] font-black uppercase px-2 py-1 border-2 ${lcStatus === 'Expired' || lcStatus === 'Cancelled' ? 'border-red-600 text-red-600' : 'border-black text-black'}`}>
               Status: {lcStatus || "Issued"}
            </span>
          </div>
        </div>

        {/* --- Key Dates (31C / 31D) --- */}
        <div className="grid grid-cols-3 border-b-2 border-black">
           <DataBox label="Date of Issue (31C)" value={dateOfIssue} />
           <DataBox label="Date of Expiry (31D)" value={dateOfExpiry} inverted />
           <DataBox label="Place of Expiry (31D)" value={placeOfExpiry} />
        </div>

        {/* --- Parties (50 / 59) --- */}
        <div className="grid grid-cols-2 border-b-2 border-black">
          {/* Applicant */}
          <div className="p-4 border-r border-black">
             <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-black"></div>
                <h3 className="text-xs font-black uppercase tracking-widest">Applicant (50)</h3>
             </div>
             <div className="font-bold uppercase text-sm">{applicantName}</div>
             <div className="text-xs text-gray-700 mt-1 whitespace-pre-line leading-tight">{formatAddress(applicantAddress)}</div>
             {applicantAccount && <div className="text-[10px] font-mono mt-2 pt-2 border-t border-gray-300">Acc: {applicantAccount}</div>}
          </div>

          {/* Beneficiary */}
          <div className="p-4 bg-gray-50">
             <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 border-2 border-black"></div>
                <h3 className="text-xs font-black uppercase tracking-widest">Beneficiary (59)</h3>
             </div>
             <div className="font-bold uppercase text-sm">{beneficiaryName}</div>
             <div className="text-xs text-gray-700 mt-1 whitespace-pre-line leading-tight">{formatAddress(beneficiaryAddress)}</div>
             {beneficiaryAccount && <div className="text-[10px] font-mono mt-2 pt-2 border-t border-gray-300">Acc: {beneficiaryAccount}</div>}
          </div>
        </div>

        {/* --- Financials (32B) --- */}
        <div className="grid grid-cols-12 border-b-2 border-black">
           <div className="col-span-8 bg-black text-white p-6 border-r border-white">
              <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-[0.2em]">Currency Code & Amount (32B)</label>
              <div className="text-4xl font-black font-mono tracking-tighter">
                 {lcCurrency} {lcAmount?.toLocaleString()}
              </div>
              {amountInWords && <div className="text-xs font-mono uppercase mt-2 text-gray-400">{amountInWords}</div>}
           </div>
           <div className="col-span-4 p-4 flex flex-col justify-center">
              <label className="block text-[9px] uppercase font-bold text-gray-500 mb-1">Tolerance (39A)</label>
              <div className="text-sm font-bold border border-black px-2 py-1 inline-block bg-gray-50 mb-2">
                 +{tolerancePlus || 0}% / -{toleranceMinus || 0}%
              </div>
              <label className="block text-[9px] uppercase font-bold text-gray-500 mb-1">Drafts At</label>
              <div className="text-xs font-bold">{draftsAt || "Sight"}</div>
           </div>
        </div>

        {/* --- Availability (41A / 42C) --- */}
        <div className="grid grid-cols-3 border-b-2 border-black bg-gray-100">
           <DataBox label="Available With (41A)" value={availableWith || "Advising Bank"} className="bg-transparent" />
           <DataBox label="By (41A)" value={availableBy || "Negotiation"} className="bg-transparent" />
           <DataBox label="Deferred Payment (42P)" value={deferredPaymentTerms || "N/A"} className="bg-transparent border-r-0" />
        </div>

        {/* --- Banks Chain --- */}
        <div className="grid grid-cols-3 border-b-2 border-black">
           <div className="p-4 border-r border-black">
              <label className="block text-[8px] uppercase font-black text-gray-500 mb-2">Issuing Bank</label>
              <div className="font-bold text-xs uppercase">{issuingBankName}</div>
              <div className="font-mono text-[10px]">{issuingSwift}</div>
           </div>
           <div className="p-4 border-r border-black">
              <label className="block text-[8px] uppercase font-black text-gray-500 mb-2">Advising Bank (57A)</label>
              <div className="font-bold text-xs uppercase">{advisingBankName || "Any Bank"}</div>
              <div className="font-mono text-[10px]">{advisingSwift}</div>
           </div>
           <div className="p-4">
              <label className="block text-[8px] uppercase font-black text-gray-500 mb-2">Confirming Bank</label>
              <div className="font-bold text-xs uppercase">{confirmingBankName || "None"}</div>
              <div className="text-[10px] italic">{confirmationInstructions}</div>
           </div>
        </div>

        {/* --- Shipment (43P - 45A) --- */}
        <div className="border-b-2 border-black">
           <div className="bg-black text-white p-2 text-[9px] font-black uppercase tracking-widest">
              Shipment Details & Goods Description
           </div>
           <div className="grid grid-cols-3">
              <div className="col-span-1 border-r border-black p-4">
                 <div className="mb-3">
                    <label className="block text-[8px] uppercase font-bold text-gray-500">Loading (44E)</label>
                    <div className="font-bold text-xs">{portOfLoading || placeOfTakingInCharge}</div>
                 </div>
                 <div className="mb-3">
                    <label className="block text-[8px] uppercase font-bold text-gray-500">Discharge (44F)</label>
                    <div className="font-bold text-xs">{portOfDischarge || placeOfFinalDestination}</div>
                 </div>
                 <div className="mb-3">
                    <label className="block text-[8px] uppercase font-bold text-gray-500">Latest Shipment (44C)</label>
                    <div className="font-bold text-xs">{latestDateOfShipment}</div>
                 </div>
                 <div>
                    <label className="block text-[8px] uppercase font-bold text-gray-500">Incoterms</label>
                    <div className="font-bold text-xs">{incotermCode} {incotermLocation}</div>
                 </div>
              </div>
              <div className="col-span-2 p-4">
                 <label className="block text-[8px] uppercase font-black text-gray-500 mb-2 tracking-widest">Description of Goods (45A)</label>
                 <div className="font-mono text-xs leading-relaxed whitespace-pre-wrap mb-4 border-l-2 border-gray-200 pl-3">
                    {descriptionOfGoods}
                 </div>
                 <div className="flex gap-4 border-t border-gray-200 pt-2">
                    <div>
                       <label className="block text-[8px] uppercase font-bold text-gray-500">HS Code</label>
                       <div className="font-bold text-xs">{hsCode}</div>
                    </div>
                    <div>
                       <label className="block text-[8px] uppercase font-bold text-gray-500">Origin</label>
                       <div className="font-bold text-xs">{countryOfOrigin}</div>
                    </div>
                    <div>
                       <label className="block text-[8px] uppercase font-bold text-gray-500">Quantity</label>
                       <div className="font-bold text-xs">{goodsQuantity}</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* --- Documents & Conditions (46A / 47A) --- */}
        <div className="grid grid-cols-2 border-b-2 border-black">
           <div className="p-4 border-r border-black">
              <label className="block text-[9px] uppercase font-black text-black mb-3 tracking-widest border-b border-black pb-1">Documents Required (46A)</label>
              <ul className="list-disc list-outside ml-3 text-xs space-y-2 font-mono">
                 {documentsRequired.length > 0 ? documentsRequired.map((doc, i) => (
                    <li key={i}>
                       <span className="font-bold">{doc.documentType}</span>
                       {(doc.numberOfOriginals || doc.numberOfCopies) && (
                          <span className="text-[10px] ml-1 block text-gray-600">
                             [{doc.numberOfOriginals || 0} Original(s), {doc.numberOfCopies || 0} Copie(s)]
                          </span>
                       )}
                    </li>
                 )) : <li className="italic text-gray-400">As per standard practice</li>}
              </ul>
           </div>
           <div className="p-4">
              <label className="block text-[9px] uppercase font-black text-black mb-3 tracking-widest border-b border-black pb-1">Additional Conditions (47A)</label>
              <div className="text-xs space-y-1 font-mono whitespace-pre-wrap">
                 {additionalConditions.length > 0 ? additionalConditions.map((cond, i) => (
                    <div key={i} className="mb-2">+ {cond}</div>
                 )) : <span className="italic text-gray-400">UCP 600 applies</span>}
              </div>
              <div className="mt-6 pt-4 border-t border-black">
                 <label className="block text-[8px] uppercase font-bold text-gray-500">Presentation Period (48)</label>
                 <div className="text-xs font-bold">
                    {presentationDays} Days {presentationEvent}
                 </div>
              </div>
           </div>
        </div>

        {/* --- Charges (71D) --- */}
        <div className="border-b-2 border-black p-4 bg-gray-100 text-xs font-mono">
           <span className="font-bold uppercase mr-2">Charges (71D):</span>
           Outside Issuing Bank: <span className="font-bold">{chargesOutsideIssuingBank || "BENEFICIARY"}</span>. 
           Confirmation: <span className="font-bold">{confirmationCharges || "BENEFICIARY"}</span>.
        </div>

        {/* --- Footer & Authenticator --- */}
        <div className="p-8 bg-white flex justify-between items-end">
           <div>
              <div className="font-script text-3xl mb-2">Authorized Signature</div>
              <div className="h-px bg-black w-48 mb-1"></div>
              <div className="text-[9px] font-bold uppercase tracking-widest">Issuing Bank Authorized Officer</div>
           </div>

           <div className="text-right">
              <div className="flex items-center justify-end space-x-2 mb-2">
                 <span className="w-3 h-3 border border-black bg-black"></span>
                 <span className="text-[10px] font-black uppercase tracking-widest">Authenticated Instrument</span>
              </div>
              <div className="font-mono text-[8px] text-gray-500">
                 HASH: {data.documentHash?.substring(0, 32)}...
              </div>
              <div className="mt-2 text-[8px] uppercase font-bold text-gray-400">
                 Powered by Chaindox
              </div>
           </div>
        </div>

      </div>
    </Wrapper>
  );
}