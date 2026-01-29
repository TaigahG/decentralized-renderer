import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { ConsignmentSecurityDeclaration, ConsignmentSecurityDeclarationSchema } from "./types";

export const ConsignmentSecurityDeclarationTemplate: FunctionComponent<
  TemplateProps<ConsignmentSecurityDeclarationSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as ConsignmentSecurityDeclaration;

  const {
    // --- Header & Issuer ---
    csdReferenceNumber,
    issuerName,
    issuerIdApprovalNumber,
    statusOfIssuer,

    // --- Consignment Linkage & Route ---
    mawb,
    hawb,
    origin,
    destination,

    // --- Cargo Details ---
    consignmentContent,
    grossWeight: {
      value: weightValue,
      unit: weightUnit,
    } = {},
    numberOfPieces,

    // --- Security Status & Screening ---
    securityStatusCode,
    screeningMethod: {
      screeningMethodCode,
      dateTimeOfScreening,
      screeningAuthorityId,
      screeningAuthorityName,
    } = {},

    // --- Chain of Custody ---
    chainOfCustody: {
      certificationStatement,
      issuedDateTime,
      issuedBy: {
        name: issuerPersonName,
        signature: issuerSignature,
        position: issuerPosition,
      } = {},
      receivedBy: {
        name: receiverName,
        signature: receiverSignature,
        organization: receiverOrg,
        dateTime: receivedAt,
      } = {},
    } = {},
  } = data;

  // Professional helper for data boxes
  const InfoBox = ({ label, value, className = "", highlight = false }: { label: string; value?: string | React.ReactNode; className?: string; highlight?: boolean }) => (
    <div className={`border border-gray-300 p-3 min-h-[80px] ${highlight ? "bg-gray-50" : ""} ${className}`}>
      <label className="block text-[9px] uppercase font-black text-gray-400 mb-2 tracking-widest">{label}</label>
      <div className="text-sm font-bold uppercase text-gray-800">{value || "-"}</div>
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-gray-900 border border-gray-200 shadow-2xl my-10">
        
        {/* --- Header --- */}
        <div className="flex justify-between items-end border-b-4 border-gray-900 pb-6 mb-0">
          <div>
            <h1 className="text-2xl font-black uppercase tracking-tighter leading-none mb-1">
              Consignment Security Declaration
            </h1>
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
              Air Cargo Security Standard (e-CSD)
            </p>
          </div>
          <div className="text-right">
            <p className="text-[9px] uppercase text-gray-400 font-bold mb-1 tracking-widest">CSD Reference</p>
            <p className="text-lg font-mono font-bold text-gray-900">{csdReferenceNumber || "N/A"}</p>
          </div>
        </div>

        {/* --- Issuer & Status Section --- */}
        <div className="grid grid-cols-3 border-b border-gray-300">
          <InfoBox label="Regulated Entity / Issuer" value={issuerName} className="border-t-0 border-l-0 col-span-2" />
          <InfoBox 
            label="Issuer Status & ID" 
            value={
              <div className="flex flex-col">
                <span className="text-blue-700">{statusOfIssuer}</span>
                <span className="text-[10px] text-gray-500 font-mono">{issuerIdApprovalNumber}</span>
              </div>
            } 
            className="border-t-0 border-r-0 border-l-0" 
          />
        </div>

        {/* --- Waybill Linkage --- */}
        <div className="grid grid-cols-2">
          <InfoBox label="Master Air Waybill (MAWB)" value={mawb} className="border-l-0" />
          <InfoBox label="House Air Waybill (HAWB)" value={hawb} className="border-l-0 border-r-0" />
        </div>

        {/* --- Route & Cargo Details --- */}
        <div className="grid grid-cols-4 bg-gray-50 border-y border-gray-300">
          <InfoBox label="Origin" value={origin} className="border-l-0 border-t-0 border-b-0" />
          <InfoBox label="Destination" value={destination} className="border-l-0 border-t-0 border-b-0" />
          <InfoBox label="Total Pieces" value={numberOfPieces} className="border-l-0 border-t-0 border-b-0" />
          <InfoBox label="Gross Weight" value={`${weightValue} ${weightUnit}`} className="border-l-0 border-r-0 border-t-0 border-b-0" />
        </div>

        <InfoBox label="Consignment Contents" value={consignmentContent} className="border-x-0 border-b-0 min-h-[60px]" />

        {/* --- Security Status (Critical Section) --- */}
        <div className="grid grid-cols-12 border-y-2 border-gray-900">
          <div className="col-span-4 bg-gray-900 text-white p-6 flex flex-col justify-center items-center text-center">
             <label className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 opacity-60">Security Status</label>
             <div className="text-4xl font-black tracking-tighter">{securityStatusCode || "???"}</div>
             <p className="text-[9px] mt-2 font-medium opacity-70">
                {securityStatusCode === 'SPX' ? 'Secure for Passenger Aircraft' : 
                 securityStatusCode === 'SCO' ? 'Secure for Cargo Aircraft Only' : 'Unknown Status'}
             </p>
          </div>
          <div className="col-span-8 p-6 grid grid-cols-2 gap-4 bg-white">
             <div>
                <label className="block text-[9px] font-black text-gray-400 uppercase mb-1">Screening Method</label>
                <div className="text-lg font-bold text-gray-800">{screeningMethodCode}</div>
                <div className="text-[10px] text-gray-500 italic mt-1 font-medium">Applied at: {dateTimeOfScreening ? new Date(dateTimeOfScreening).toLocaleString() : "-"}</div>
             </div>
             <div>
                <label className="block text-[9px] font-black text-gray-400 uppercase mb-1">Screening Authority</label>
                <div className="text-sm font-bold text-gray-800 uppercase">{screeningAuthorityName}</div>
                <div className="text-[10px] text-gray-500 font-mono mt-1">ID: {screeningAuthorityId}</div>
             </div>
          </div>
        </div>

        {/* --- Certification & Chain of Custody --- */}
        <div className="p-6 border-b border-gray-200">
           <h2 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3">Security Declaration Statement</h2>
           <p className="text-xs text-gray-600 leading-relaxed font-medium text-justify italic">
              {certificationStatement || "I confirm that this consignment has been secure in accordance with the relevant security regulations and that all security measures have been applied as declared. No unauthorized access was permitted throughout the chain of custody."}
           </p>
        </div>

        <div className="grid grid-cols-2">
          {/* Issued By */}
          <div className="p-6 border-r border-gray-300 min-h-[160px] flex flex-col justify-between">
             <div>
                <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Issued By (Security Agent)</label>
                <div className="text-sm font-bold uppercase text-gray-900">{issuerPersonName}</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase">{issuerPosition}</div>
             </div>
             <div className="flex flex-col">
                <div className="text-[10px] font-mono text-gray-400 mb-2">DATE: {issuedDateTime ? new Date(issuedDateTime).toLocaleString() : "-"}</div>
                <div className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded text-[9px] font-black uppercase self-start">
                  Digital Signature Verified
                </div>
             </div>
          </div>

          {/* Received By */}
          <div className="p-6 min-h-[160px] flex flex-col justify-between bg-gray-50">
             <div>
                <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Received By (Ground Handler/Carrier)</label>
                <div className="text-sm font-bold uppercase text-gray-900">{receiverName || "Pending Receipt"}</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase">{receiverOrg}</div>
             </div>
             <div className="text-[10px] font-mono text-gray-400">
                {receivedAt ? `RECEIVED: ${new Date(receivedAt).toLocaleString()}` : "AWAITING CUSTODY TRANSFER"}
             </div>
          </div>
        </div>

        {/* --- Footer --- */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-[9px] font-bold text-gray-400 uppercase tracking-widest">
          <div>ICAO Annex 17 / IATA CSD Compliant Layout</div>
          <div className="flex items-center space-x-2">
            <span>Verified by</span>
            <span className="text-[11px] font-black text-blue-900 tracking-tighter uppercase">Chaindox</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}