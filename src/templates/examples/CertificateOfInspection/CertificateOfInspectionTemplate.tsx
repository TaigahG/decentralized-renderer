import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { CertificateOfInspection, CertificateOfInspectionSchema } from "./types";

export const CertificateOfInspectionTemplate: FunctionComponent<
  TemplateProps<CertificateOfInspectionSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as CertificateOfInspection;

  const {
    // --- Header Information ---
    certificateNumber,
    countryOfOrigin,

    // --- Control Body (The certifier) ---
    issuingControlBody: {
      name: controlBodyName,
      codeNumber: controlBodyCode,
      address: controlBodyAddress,
      contactDetails: controlBodyContact,
    } = {},

    // --- Parties ---
    exporter: {
      name: exporterName,
      address: exporterAddress,
      city: exporterCity,
      countryCode: exporterCountry,
      contactPerson: { name: exporterContactName = undefined } = {},
    } = {},
    producer: {
      name: producerName,
      address: producerAddress,
      scopeCertificateReference,
    } = {},
    importer: {
      name: importerName,
      address: importerAddress,
      eoriNumber: importerEori,
    } = {},
    firstConsignee: {
      name: consigneeName,
      address: consigneeAddress,
    } = {},

    // --- Goods Details ---
    productDetails = [],

    // --- Transport ---
    transportInformation: {
      modeOfTransport,
      containerNumber,
      sealNumber,
      vesselName,
      flightNumber,
      departureDate,
    } = {},

    // --- Certification Declaration ---
    declarationOfControlBody: {
      declarationText,
      regulationReference,
      dateOfIssue,
      placeOfIssue,
      certifierName,
      certifierSignature,
      officialStamp,
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
        
        {/* --- Header --- */}
        <div className="flex justify-between items-start border-b-4 border-gray-900 pb-6 mb-0">
          <div className="flex-1">
            <h1 className="text-3xl font-black uppercase tracking-tighter leading-none mb-1 text-gray-900">
              Certificate of Inspection
            </h1>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">
              For Import of Products from Organic Production
            </p>
            <div className="inline-block bg-green-700 text-white px-3 py-1">
               <span className="text-[10px] font-black uppercase tracking-widest">Certified Organic</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] uppercase text-gray-400 font-bold mb-1 tracking-widest">Certificate No.</p>
            <p className="text-xl font-mono font-bold text-blue-900">{certificateNumber || "PENDING"}</p>
            <div className="mt-2 text-[10px] font-bold uppercase text-gray-500 border border-gray-200 bg-gray-50 px-2 py-1 inline-block">
               Origin: {countryOfOrigin || "Unknown"}
            </div>
          </div>
        </div>

        {/* --- Control Body (The Authority) --- */}
        <div className="border border-gray-300 border-t-0 p-4 bg-gray-50">
           <div className="flex justify-between items-start">
              <div>
                 <label className="block text-[9px] uppercase font-black text-gray-400 mb-1 tracking-widest">Issuing Control Body / Authority</label>
                 <div className="text-lg font-black text-gray-900 uppercase">{controlBodyName}</div>
                 <div className="text-xs text-gray-600 mt-1">{controlBodyAddress}</div>
                 <div className="text-[10px] text-gray-400 mt-1">{controlBodyContact}</div>
              </div>
              <div className="text-right">
                 <div className="text-2xl font-black text-green-800 tracking-tighter border-2 border-green-800 px-2 py-1 rounded-sm inline-block">
                    {controlBodyCode}
                 </div>
                 <div className="text-[8px] font-bold text-gray-400 mt-1 uppercase text-center">Control Code</div>
              </div>
           </div>
        </div>

        {/* --- Parties Grid --- */}
        <div className="grid grid-cols-2">
          <InfoBox 
            label="Exporter" 
            value={
              <div>
                <div>{exporterName}</div>
                <div className="text-[10px] font-normal text-gray-500">{exporterAddress}, {exporterCity}, {exporterCountry}</div>
                {exporterContactName && <div className="text-[9px] italic text-gray-400 mt-1">Contact: {exporterContactName}</div>}
              </div>
            } 
            className="border-t-0 border-l-0"
          />
          <InfoBox 
            label="Producer" 
            value={
              <div>
                <div>{producerName}</div>
                <div className="text-[10px] font-normal text-gray-500">{producerAddress}</div>
                <div className="mt-2 text-[9px] font-mono font-bold text-blue-600 bg-blue-50 px-1 inline-block rounded">
                   Scope Cert: {scopeCertificateReference || "N/A"}
                </div>
              </div>
            }
            className="border-t-0 border-r-0 border-l-0"
          />
          <InfoBox 
            label="Importer" 
            value={
              <div>
                 <div>{importerName}</div>
                 <div className="text-[10px] font-normal text-gray-500">{importerAddress}</div>
                 {importerEori && <div className="text-[10px] font-mono font-bold text-gray-600 mt-1">EORI: {importerEori}</div>}
              </div>
            } 
            className="border-t-0 border-l-0"
          />
          <InfoBox 
            label="First Consignee" 
            value={
              consigneeName ? (
                <div>
                   <div>{consigneeName}</div>
                   <div className="text-[10px] font-normal text-gray-500">{consigneeAddress}</div>
                </div>
              ) : <span className="text-gray-400 italic font-normal">Same as Importer</span>
            }
            className="border-t-0 border-r-0 border-l-0"
          />
        </div>

        {/* --- Transport --- */}
        <div className="grid grid-cols-4 bg-gray-50 border-y border-gray-300">
           <InfoBox label="Transport Mode" value={modeOfTransport} className="border-l-0 border-t-0 border-b-0" />
           <InfoBox label="Identifier (Vessel/Flight)" value={vesselName || flightNumber} className="border-l-0 border-t-0 border-b-0 col-span-2" />
           <InfoBox label="Departure Date" value={departureDate} className="border-l-0 border-r-0 border-t-0 border-b-0" />
           <div className="col-span-4 border-t border-gray-300 p-3 flex space-x-6">
              <div>
                 <label className="block text-[9px] uppercase font-black text-gray-400 mb-1">Container No.</label>
                 <div className="text-xs font-mono font-bold">{containerNumber}</div>
              </div>
              <div>
                 <label className="block text-[9px] uppercase font-black text-gray-400 mb-1">Seal No.</label>
                 <div className="text-xs font-mono font-bold">{sealNumber}</div>
              </div>
           </div>
        </div>

        {/* --- Organic Product Table --- */}
        <div className="border-x border-b border-gray-300">
          <table className="w-full text-left table-fixed border-collapse">
            <thead className="bg-green-900 text-white text-[9px] font-black uppercase tracking-widest">
              <tr>
                <th className="p-3 w-1/6 border-r border-green-800">CN Code</th>
                <th className="p-3 w-1/3 border-r border-green-800">Trade Name</th>
                <th className="p-3 w-1/6 text-center border-r border-green-800">Category</th>
                <th className="p-3 w-1/6 text-center border-r border-green-800">Lot No.</th>
                <th className="p-3 w-1/6 text-right">Net Weight</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {productDetails.length > 0 ? productDetails.map((prod, i) => (
                <tr key={i} className="border-b border-gray-200 last:border-0 hover:bg-green-50 transition-colors">
                  <td className="p-3 font-mono font-bold text-gray-500 border-r border-gray-200">{prod.cnCode}</td>
                  <td className="p-3 font-bold uppercase border-r border-gray-200">{prod.tradeName}</td>
                  <td className="p-3 text-center border-r border-gray-200 text-[10px] uppercase font-bold text-gray-500">{prod.category}</td>
                  <td className="p-3 text-center border-r border-gray-200 font-mono text-[10px]">{prod.lotNumber}</td>
                  <td className="p-3 text-right font-black">
                     {prod.netWeight?.value} <span className="text-[9px] text-gray-400 font-bold">{prod.netWeight?.unit}</span>
                  </td>
                </tr>
              )) : (
                <tr><td colSpan={5} className="p-8 text-center text-gray-300 italic uppercase">No organic products listed</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* --- Declaration of Control Body --- */}
        <div className="grid grid-cols-12 mt-0">
           <div className="col-span-8 p-6 border border-gray-300 border-t-0 border-r-0">
              <h2 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-4">Declaration of Control Body</h2>
              <div className="text-xs font-medium text-gray-700 leading-relaxed text-justify mb-4 italic">
                 {declarationText || "The control body hereby certifies that the products designated above have been obtained in accordance with the rules of production and inspection of the organic production method."}
              </div>
              <div className="bg-gray-100 p-2 border border-gray-200 inline-block mb-4">
                 <label className="block text-[8px] uppercase font-black text-gray-500 mb-1">Regulation Reference</label>
                 <div className="text-[10px] font-bold text-gray-800">{regulationReference || "Council Regulation (EC) No 834/2007"}</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-2">
                 <div>
                    <label className="block text-[9px] uppercase font-black text-gray-400 mb-1">Place & Date</label>
                    <div className="text-sm font-bold uppercase">{placeOfIssue}, {dateOfIssue}</div>
                 </div>
                 <div>
                    <label className="block text-[9px] uppercase font-black text-gray-400 mb-1">Name of Certifier</label>
                    <div className="text-sm font-bold uppercase">{certifierName}</div>
                 </div>
              </div>
           </div>
           
           <div className="col-span-4 p-6 border border-gray-300 border-t-0 flex flex-col justify-between items-center bg-gray-50 relative overflow-hidden">
               {/* Digital Stamp */}
               <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
                  <div className="w-20 h-20 border-4 border-green-800 rounded-full flex items-center justify-center">
                     <span className="text-[8px] font-black text-center text-green-800">ORGANIC<br/>APPROVED</span>
                  </div>
               </div>
               
               <div className="z-10 w-full text-center mt-8">
                  <div className="font-script text-2xl text-blue-900 mb-2 transform -rotate-3">{certifierSignature || "Digitally Signed"}</div>
                  <div className="h-px bg-gray-300 w-3/4 mx-auto mb-2"></div>
                  <label className="block text-[8px] font-black text-gray-400 uppercase">Authorized Signature</label>
               </div>
               
               <div className="z-10 w-full mt-4">
                   <div className="text-[10px] font-bold text-center text-gray-500 uppercase border border-gray-200 bg-white p-2">
                      {officialStamp || "Digital Stamp Verified"}
                   </div>
               </div>
           </div>
        </div>

        {/* --- Footer & Verification --- */}
        <div className="border border-gray-300 border-t-0 bg-gray-900 text-white p-4 flex justify-between items-center">
           <div>
              <div className="flex items-center space-x-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                 <span className="text-[10px] font-black uppercase tracking-widest">Valid Chaindox Organic Credential</span>
              </div>
              <div className="text-[8px] font-mono text-gray-500 mt-1">HASH: {data.documentHash?.substring(0, 32)}...</div>
           </div>
           <div className="flex items-center space-x-2">
             <span className="text-[9px] font-bold text-gray-400 uppercase">Powered by</span>
             <span className="text-[11px] font-black text-white tracking-tighter uppercase">Chaindox</span>
           </div>
        </div>
      </div>
    </Wrapper>
  );
}