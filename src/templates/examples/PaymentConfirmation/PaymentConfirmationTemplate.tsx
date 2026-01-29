import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { PaymentConfirmation, PaymentConfirmationSchema } from "./types";

export const PaymentConfirmationTemplate: FunctionComponent<
  TemplateProps<PaymentConfirmationSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as PaymentConfirmation;

  const {
    // --- Header Information ---
    confirmationNumber,
    confirmationType,
    confirmationDateTime,
    valueDate,
    paymentMethod,
    paymentChannel,

    // --- Parties ---
    payer: {
      name: payerName,
      accountNumber: payerAccount,
      bankName: payerBank,
      swiftBic: payerSwift,
      iban: payerIban,
      address: {
        countryCode: payerCountry = undefined
      } = {},
    } = {},
    payee: {
      name: payeeName,
      accountNumber: payeeAccount,
      bankName: payeeBank,
      swiftBic: payeeSwift,
      iban: payeeIban,
    } = {},
    intermediaryBank: {
      bankName: intermediaryName,
      swiftCode: intermediarySwift,
    } = {},

    // --- Financials ---
    paymentAmount: {
      currencyCode: sentCurrency,
      amountValue: sentAmount,
    } = {},
    exchangeRate: {
      sourceCurrency,
      targetCurrency,
      rate: fxRate,
    } = {},
    deductions = [],
    charges: {
      chargeBearer,
      bankChargesAmount,
      bankChargesCurrency,
    } = {},
    netAmountReceived: {
      amountValue: receivedAmount,
      currencyCode: receivedCurrency,
    } = {},

    // --- References ---
    transactionReference: {
      senderReference,
      endToEndReference,
      uetr,
    } = {},
    relatedDocuments = [],

    // --- Purpose & Remittance ---
    paymentPurpose: {
      purposeCode,
      remittanceInformation,
    } = {},

    // --- Status & Reporting ---
    paymentStatus: {
      status: currentStatus,
      statusCode,
      reason: statusReason,
    } = {},
    regulatoryReporting: {
      reportingCode,
    } = {},

    // --- Authentication ---
    issuingBankConfirmation: {
      bankName: issuingBankName,
      authorizedSignatory,
    } = {},
  } = data;

  // Strict B&W Box Helper
  const InfoBox = ({ label, value, className = "", inverted = false, fontMono = false }: { label: string; value?: string | React.ReactNode; className?: string; inverted?: boolean; fontMono?: boolean }) => (
    <div className={`p-3 border-r border-b border-black last:border-r-0 ${inverted ? "bg-black text-white" : "bg-white text-black"} ${className}`}>
      <label className={`block text-[9px] uppercase font-bold mb-1 tracking-widest leading-none ${inverted ? "text-gray-400" : "text-gray-500"}`}>
        {label}
      </label>
      <div className={`text-xs md:text-sm font-bold uppercase leading-tight whitespace-pre-wrap break-words ${fontMono ? "font-mono" : ""}`}>
        {value || "-"}
      </div>
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-black border-2 border-black my-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
        {/* --- Header --- */}
        <div className="border-b-4 border-black pb-4 mb-0 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tighter leading-none mb-1">
              Payment Confirmation
            </h1>
            <div className="flex gap-2 text-[10px] font-bold uppercase">
              <span className="border border-black px-2 py-1">{confirmationType || "Credit Advice"}</span>
              <span className="border border-black px-2 py-1 bg-gray-100">{paymentChannel || "SWIFT"}</span>
              <span className="border border-black px-2 py-1">{paymentMethod || "Wire Transfer"}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-bold uppercase tracking-widest mb-1">Confirmation Ref</p>
            <p className="text-xl font-mono font-black tracking-widest text-black mb-2">
              {confirmationNumber || "PENDING"}
            </p>
            <span className={`text-[10px] font-black uppercase px-2 py-1 border-2 ${currentStatus === 'Rejected' || currentStatus === 'Failed' ? 'border-red-600 text-red-600' : 'border-black text-black'}`}>
               Status: {currentStatus || "Processed"}
            </span>
          </div>
        </div>

        {/* --- Hero: Net Amount --- */}
        <div className="grid grid-cols-12 border-b-2 border-black">
           <div className="col-span-8 bg-black text-white p-6 border-r border-white">
              <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-[0.2em]">Net Amount Credited</label>
              <div className="text-4xl font-black font-mono tracking-tighter">
                 {receivedCurrency} {receivedAmount?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>
           </div>
           <div className="col-span-4 p-4 flex flex-col justify-center bg-gray-100">
              <label className="block text-[9px] uppercase font-bold text-gray-500 mb-1">Value Date</label>
              <div className="text-xl font-bold border-b-2 border-black pb-1 mb-2 inline-block">
                 {valueDate}
              </div>
              {statusCode && <div className="text-[10px] font-mono text-gray-600">Code: {statusCode}</div>}
           </div>
        </div>

        {/* --- Transaction References (Critical for Tracking) --- */}
        <div className="grid grid-cols-2 border-b-2 border-black">
           <InfoBox label="UETR (Unique Tracker ID)" value={uetr} fontMono className="bg-gray-50" />
           <InfoBox label="End-to-End Reference (Field 21)" value={endToEndReference} fontMono />
        </div>

        {/* --- Parties: Payer & Payee --- */}
        <div className="grid grid-cols-2 border-b-2 border-black">
           {/* Payer / Ordering Customer */}
           <div className="p-4 border-r border-black">
              <div className="flex items-center space-x-2 mb-3">
                 <div className="w-3 h-3 bg-black"></div>
                 <h3 className="text-xs font-black uppercase tracking-widest">Ordering Customer (50K)</h3>
              </div>
              <div className="font-bold uppercase text-sm">{payerName}</div>
              <div className="text-xs text-gray-600 mt-1">{payerCountry}</div>
              
              <div className="mt-4 pt-3 border-t border-gray-300">
                 <label className="block text-[8px] uppercase font-bold text-gray-400 mb-1">Payer Details</label>
                 <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                       <span className="block text-[8px] text-gray-500">Account/IBAN</span>
                       <span className="font-mono font-bold">{payerIban || payerAccount}</span>
                    </div>
                    <div>
                       <span className="block text-[8px] text-gray-500">Bank BIC</span>
                       <span className="font-mono font-bold">{payerSwift}</span>
                    </div>
                 </div>
                 <div className="text-[10px] mt-1 font-bold text-gray-700">{payerBank}</div>
              </div>
           </div>

           {/* Payee / Beneficiary */}
           <div className="p-4 bg-gray-50">
              <div className="flex items-center space-x-2 mb-3">
                 <div className="w-3 h-3 border-2 border-black"></div>
                 <h3 className="text-xs font-black uppercase tracking-widest">Beneficiary Customer (59)</h3>
              </div>
              <div className="font-bold uppercase text-sm">{payeeName}</div>
              
              <div className="mt-4 pt-3 border-t border-gray-300">
                 <label className="block text-[8px] uppercase font-bold text-gray-400 mb-1">Credit To</label>
                 <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                       <span className="block text-[8px] text-gray-500">Account/IBAN</span>
                       <span className="font-mono font-bold">{payeeIban || payeeAccount}</span>
                    </div>
                    <div>
                       <span className="block text-[8px] text-gray-500">Bank BIC</span>
                       <span className="font-mono font-bold">{payeeSwift}</span>
                    </div>
                 </div>
                 <div className="text-[10px] mt-1 font-bold text-gray-700">{payeeBank}</div>
              </div>
           </div>
        </div>

        {/* --- Financial Breakdown --- */}
        <div className="border-b-2 border-black">
           <div className="bg-black text-white p-2 text-[9px] font-black uppercase tracking-widest">
              Financial Breakdown
           </div>
           <div className="grid grid-cols-4">
              <InfoBox label="Instructed Amount (32A)" value={`${sentCurrency} ${sentAmount?.toLocaleString()}`} />
              <InfoBox label="Exchange Rate (36)" value={fxRate ? `1 ${sourceCurrency} = ${fxRate} ${targetCurrency}` : "N/A"} />
              <InfoBox label="Charges (71A)" value={chargeBearer} />
              <InfoBox label="Fees Deducted" value={`${bankChargesCurrency || ""} ${bankChargesAmount || "0.00"}`} />
           </div>
           
           {/* Detailed Deductions */}
           {deductions.length > 0 && (
             <div className="p-3 bg-gray-100 text-xs border-t border-black">
                <label className="block text-[8px] uppercase font-bold text-gray-500 mb-1">Specific Deductions</label>
                {deductions.map((ded, i) => (
                   <div key={i} className="flex justify-between w-1/2 font-mono">
                      <span>{ded.description || ded.deductionType}</span>
                      <span>-{ded.currencyCode} {ded.amount}</span>
                   </div>
                ))}
             </div>
           )}
        </div>

        {/* --- Remittance Information (Field 70) --- */}
        <div className="grid grid-cols-1 border-b-2 border-black">
           <div className="p-4">
              <label className="block text-[9px] uppercase font-black text-black mb-2 tracking-widest border-b border-black pb-1 w-fit">Remittance Information (70)</label>
              <div className="font-mono text-xs uppercase whitespace-pre-wrap leading-relaxed">
                 {remittanceInformation || "NO REMITTANCE INFORMATION PROVIDED"}
              </div>
              {purposeCode && (
                 <div className="mt-2 text-[10px] font-bold text-gray-600 bg-gray-100 inline-block px-2 py-1 rounded-sm border border-gray-300">
                    Purpose: {purposeCode}
                 </div>
              )}
           </div>
        </div>

        {/* --- Related References --- */}
        {relatedDocuments.length > 0 && (
          <div className="grid grid-cols-1 border-b-2 border-black bg-gray-50">
             <div className="p-4">
                <label className="block text-[9px] uppercase font-black text-gray-500 mb-2">Related Documents</label>
                <div className="grid grid-cols-3 gap-4">
                   {relatedDocuments.map((doc, i) => (
                      <div key={i} className="border border-black p-2 bg-white">
                         <div className="text-[9px] font-bold text-gray-500">{doc.documentType}</div>
                         <div className="text-xs font-bold">{doc.documentNumber}</div>
                         <div className="text-[9px] font-mono">{doc.documentDate}</div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        )}

        {/* --- Intermediary / Regulatory (Conditional) --- */}
        {(intermediaryName || reportingCode) && (
           <div className="grid grid-cols-2 border-b-2 border-black">
              <InfoBox label="Intermediary Bank (56A)" value={intermediaryName} className="border-b-0" />
              <InfoBox label="Regulatory Reporting (77B)" value={reportingCode} className="border-b-0" />
           </div>
        )}

        {/* --- Footer & Authenticator --- */}
        <div className="p-8 bg-white flex justify-between items-end">
           <div>
              <div className="font-script text-3xl mb-2">Authorized Signature</div>
              <div className="h-px bg-black w-48 mb-1"></div>
              <div className="text-[9px] font-bold uppercase tracking-widest">
                 {issuingBankName || "Issuing Institution"}
              </div>
              <div className="text-[8px] uppercase text-gray-500">{authorizedSignatory}</div>
           </div>

           <div className="text-right">
              <div className="flex items-center justify-end space-x-2 mb-2">
                 <span className="w-3 h-3 border border-black bg-black"></span>
                 <span className="text-[10px] font-black uppercase tracking-widest">Authenticated Payment Advice</span>
              </div>
              <div className="font-mono text-[8px] text-gray-500">
                 HASH: {data.documentHash?.substring(0, 32)}...
              </div>
              <div className="mt-2 text-[8px] uppercase font-bold text-gray-400">
                 Powered by Chaindox
              </div>
              <div className="text-[8px] uppercase text-gray-400 mt-1">
                 ISO 20022 / SWIFT Compatible
              </div>
           </div>
        </div>

      </div>
    </Wrapper>
  );
}