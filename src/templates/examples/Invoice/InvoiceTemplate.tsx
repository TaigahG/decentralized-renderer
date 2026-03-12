import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { InvoiceDocument, InvoiceSchema } from "./types";

export const InvoiceTemplate: FunctionComponent<
  TemplateProps<InvoiceSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as InvoiceDocument;

  const {
    documentId,
    shipmentId,
    invoiceNumber,

    // --- Dates ---
    issueDate,
    invoiceDate,
    paymentDueDate,

    // --- Parties ---
    billFrom: {
      name: fromName,
      addressline: fromAddress,
      city: fromCity,
      country: fromCountry,
      email: fromEmail,
    } = {},
    billTo: {
      name: toName,
      addressline: toAddress,
      city: toCity,
      country: toCountry,
      email: toEmail,
      bankName,
      accountName,
      accountNumber,
    } = {},

    // --- Line Items ---
    billableItem = [],

    // --- Totals ---
    tax,
    totalAmount,
  } = data;

  // Strict B&W Box Helper
  const DataBox = ({ label, value, className = "", inverted = false, fontMono = false }: { label: string; value?: string | React.ReactNode; className?: string; inverted?: boolean; fontMono?: boolean }) => (
    <div className={`p-4 border-r border-b border-black last:border-r-0 ${inverted ? "bg-black text-white" : "bg-white text-black"} ${className}`}>
      <label className={`block text-[9px] uppercase font-bold mb-1 tracking-widest leading-none ${inverted ? "text-gray-400" : "text-gray-600"}`}>
        {label}
      </label>
      <div className={`text-sm font-bold uppercase leading-tight whitespace-pre-wrap break-words ${fontMono ? "font-mono" : ""}`}>
        {value || "-"}
      </div>
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl bg-white font-sans text-black border-2 border-black relative overflow-hidden">
        
        {/* --- Header Section --- */}
        <div className="flex justify-between items-start border-b-4 border-black pt-6 pb-6 px-3 mb-0">
          <div className="flex-1">
            <h1 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">
              Invoice Document
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
              Blockchain-Verified Trade Document
            </p>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-bold uppercase tracking-widest mb-1">Invoice Number</p>
            <p className="text-2xl font-mono font-black tracking-widest bg-black text-white px-3 py-1">
              {invoiceNumber || "DRAFT"}
            </p>
          </div>
        </div>

        {/* --- Key Dates & References --- */}
        <div className="grid grid-cols-4 border-b-2 border-black">
          <DataBox label="Invoice Date" value={invoiceDate || issueDate} fontMono />
          <DataBox label="Payment Due" value={paymentDueDate} className="bg-gray-100" />
          <DataBox label="Document ID" value={documentId} fontMono />
          <DataBox label="Shipment ID" value={shipmentId} fontMono className="border-r-0" />
        </div>

        {/* --- Parties Section --- */}
        <div className="grid grid-cols-2 border-b-2 border-black">
          {/* Bill From (Exporter/Seller) */}
          <div className="border-r border-black p-4">
             <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-black"></div>
                <h3 className="text-xs font-black uppercase tracking-widest">Bill From (Seller)</h3>
             </div>
             <div className="text-lg font-bold uppercase mb-1">{fromName}</div>
             <div className="text-sm mb-2 leading-relaxed">
               {fromAddress}<br/>
               {fromCity}, {fromCountry}
             </div>
             {fromEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {fromEmail}</div>}
          </div>

          {/* Bill To (Importer/Buyer) */}
          <div className="p-4 bg-gray-50">
             <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 border-2 border-black"></div>
                <h3 className="text-xs font-black uppercase tracking-widest">Bill To (Buyer)</h3>
             </div>
             <div className="text-lg font-bold uppercase mb-1">{toName}</div>
             <div className="text-sm mb-2 leading-relaxed">
               {toAddress}<br/>
               {toCity}, {toCountry}
             </div>
             {toEmail && <div className="text-[10px] font-mono text-gray-700 mt-2">Email: {toEmail}</div>}
          </div>
        </div>

        {/* --- Billable Items Table --- */}
        <div className="border-b-2 border-black min-h-[250px] flex flex-col">
          <div className="bg-black text-white p-2 text-[9px] font-black uppercase tracking-widest">
            Line Items
          </div>
          <table className="w-full text-left table-fixed flex-1">
            <thead className="bg-white text-[9px] font-bold uppercase tracking-widest text-gray-600 border-b border-black">
              <tr>
                <th className="p-3 w-12 text-center border-r border-black">No.</th>
                <th className="p-3 w-7/12 border-r border-black">Description of Goods / Services</th>
                <th className="p-3 w-2/12 text-center border-r border-black">Quantity</th>
                <th className="p-3 w-2/12 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="text-sm font-mono">
              {billableItem.length > 0 ? billableItem.map((item, i) => (
                <tr key={i} className="border-b border-gray-200 last:border-0 align-top">
                  <td className="p-3 text-center border-r border-black font-bold text-gray-400">{i + 1}</td>
                  <td className="p-3 border-r border-black whitespace-pre-wrap leading-relaxed uppercase font-sans font-bold text-xs">
                    {item.description}
                  </td>
                  <td className="p-3 text-center border-r border-black font-black">
                    {item.quantity}
                  </td>
                  <td className="p-3 text-right font-black">
                    {item.amount?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-400 italic uppercase font-sans text-xs">No billable items declared</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* --- Financial Summary & Payment Details --- */}
        <div className="grid grid-cols-12 border-b-2 border-black">
           {/* Payment / Bank Details */}
           <div className="col-span-7 p-6 border-r border-black">
              <h3 className="text-[10px] font-black uppercase tracking-widest mb-4">Remittance / Bank Details</h3>
              {bankName || accountNumber ? (
                <div className="space-y-3">
                   <div>
                      <label className="block text-[8px] uppercase font-bold text-gray-500 mb-1">Bank Name</label>
                      <div className="text-sm font-bold uppercase">{bankName}</div>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div>
                         <label className="block text-[8px] uppercase font-bold text-gray-500 mb-1">Account Name</label>
                         <div className="text-xs font-bold uppercase">{accountName || toName}</div>
                      </div>
                      <div>
                         <label className="block text-[8px] uppercase font-bold text-gray-500 mb-1">Account Number</label>
                         <div className="text-xs font-mono font-black bg-gray-100 p-1 border border-gray-300 inline-block">{accountNumber}</div>
                      </div>
                   </div>
                </div>
              ) : (
                <div className="text-xs italic text-gray-500">Payment details to be arranged as per contract.</div>
              )}
           </div>

           {/* Totals */}
           <div className="col-span-5 bg-gray-50 flex flex-col min-h-[160px]">
              <div className="flex justify-between p-5 border-b border-black">
                 <span className="text-[10px] font-bold uppercase tracking-widest">Subtotal</span>
                 <span className="font-mono font-bold text-sm">
                   {(totalAmount && tax) ? (totalAmount - tax).toLocaleString(undefined, { minimumFractionDigits: 2 }) : (totalAmount?.toLocaleString(undefined, { minimumFractionDigits: 2 }) || "0.00")}
                 </span>
              </div>
              <div className="flex justify-between p-4 border-b border-black">
                 <span className="text-[10px] font-bold uppercase tracking-widest">Tax / VAT</span>
                 <span className="font-mono font-bold text-sm">{tax ? tax.toLocaleString(undefined, { minimumFractionDigits: 2 }) : "0.00"}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-black text-white flex-1">
                 <span className="text-xs font-black uppercase tracking-[0.2em]">Total Due</span>
                 <span className="font-mono font-black text-2xl tracking-tighter">
                   {totalAmount?.toLocaleString(undefined, { minimumFractionDigits: 2 }) || "0.00"}
                 </span>
              </div>
           </div>
        </div>
      </div>
    </Wrapper>
  );
};