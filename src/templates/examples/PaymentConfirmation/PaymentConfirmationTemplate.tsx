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
    invoiceNumber,

    // --- Parties ---
    invoicee: {
      name: payerName,
      addressLine: payerAddress,
      city: payerCity,
      country: payerCountry,
      email: payerEmail,
    } = {},
    payee: {
      name: payeeName,
      addressLine: payeeAddress,
      city: payeeCity,
      country: payeeCountry,
      email: payeeEmail,
    } = {},

    // --- Payment Details ---
    accountHolderName,

    // --- Financials ---
    monetaryAmount: amountPaid,
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
    <div className={`p-3 bg-white text-black border-r border-b border-black last:border-r-0 ${className}`}>
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
    <div className={`p-4 bg-white border-black ${className}`}>
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
              Payment Confirmation
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
              Proof of Settlement
            </p>
          </div>
          <div className="text-right flex flex-col gap-2">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-widest mb-1 text-gray-500">Related Invoice No.</p>
              <p className="text-xl font-mono font-black tracking-widest border border-black text-black px-3 py-1">
                {invoiceNumber || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* --- Parties Grid --- */}
        <div className="grid grid-cols-2 border-b-2 border-black">
          <PartyBox 
            title="Payee (Beneficiary)" 
            name={payeeName} 
            address={payeeAddress} 
            city={payeeCity} 
            country={payeeCountry} 
            email={payeeEmail}
            className="border-r-2"
          />
          <PartyBox 
            title="Invoicee (Payer)" 
            name={payerName} 
            address={payerAddress} 
            city={payerCity} 
            country={payerCountry} 
            email={payerEmail}
          />
        </div>

        {/* --- Payment Details Grid --- */}
        <div className="grid grid-cols-4 border-b-2 border-black">
          <DataBox 
            label="Account Holder Name" 
            value={accountHolderName} 
            className="col-span-2 border-b-0"
          />
          <DataBox 
            label="Currency" 
            value={currencyCode} 
            fontMono 
            className="col-span-1 border-b-0"
          />
          <DataBox 
            label="Amount Paid" 
            value={amountPaid ? amountPaid.toString() : "N/A"} 
            fontMono 
            className="col-span-1 border-b-0 border-r-0 text-xl"
          />
        </div>

        {/* --- Footer Acknowledgment --- */}
        <div className="p-4 bg-white text-center">
          <p className="text-[10px] font-serif uppercase tracking-widest text-gray-800">
            This document serves as formal confirmation that the financial settlement for the above-referenced amount has been processed.
          </p>
        </div>

      </div>
    </Wrapper>
  );
};