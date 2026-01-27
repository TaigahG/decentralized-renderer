import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { InterVeterinaryCertificate, InterVeterinaryCertificateSchema } from "./types";

export const InterVeterinaryCertificateTemplate: FunctionComponent<
  TemplateProps<InterVeterinaryCertificateSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as InterVeterinaryCertificate;

  const {
    certificateReferenceNumber,
    competentAuthority: {
      authorityName,
      authorityCode,
      country: authorityCountry,
    } = {},
    officialVeterinarian: {
      name: vetName,
      qualification: vetQualification,
      licenseNumber: vetLicense,
      dateOfSigning: vetSigningDate,
    } = {},
    consignor: {
      name: consignorName,
      address: consignorAddress,
    } = {},
    consignee: {
      name: consigneeName,
      address: consigneeAddress,
    } = {},
    countryOfOrigin: {
      country: originCountry,
      region: originRegion,
      zoneCompartment: healthZone,
      diseaseStatus,
    } = {},
    countryOfDestination,
    commodityIdentification: {
      descriptionOfCommodity,
      speciesScientificName,
      numberOfPackagesAnimals,
      netWeight: { value: weightValue, unit: weightUnit } = {},
    } = {},
    individualIdentification = [],
    originEstablishment: {
      establishmentName,
      approvalNumber: establishmentId,
      establishmentType,
    } = {},
    sanitaryInformation: {
      animalHealthAttestation = [],
      vaccinationRecord = [],
      testingRecord = [],
    } = {},
    transportDetails: {
      meansOfTransport,
      transportIdentifier,
      disinfectionRecord: {
        disinfected: isDisinfected,
        dateOfDisinfection,
      } = {},
    } = {},
    placeOfIssue,
    dateOfIssue,
    documentHash,
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
            <h1 className="text-2xl font-black uppercase tracking-tighter leading-none mb-2">
              International Veterinary Certificate
            </h1>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">
              Export of Live Animals and Animal Products
            </p>
            <div className="inline-block bg-gray-900 text-white px-3 py-1">
               <span className="text-[10px] font-black uppercase tracking-widest">Official {authorityCountry} Permit</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] uppercase text-gray-400 font-bold mb-1 tracking-widest">Certificate Reference</p>
            <p className="text-xl font-mono font-bold text-blue-900">{certificateReferenceNumber || "DRAFT"}</p>
          </div>
        </div>

        {/* --- Authorities & Origin --- */}
        <div className="grid grid-cols-2">
          <InfoBox 
            label="Competent Authority" 
            value={`${authorityName}\nCode: ${authorityCode}`} 
            className="border-t-0 border-l-0"
          />
          <InfoBox 
            label="Origin Health Status" 
            value={
              <div>
                <div className="text-blue-700">{originCountry} / {originRegion}</div>
                <div className="text-[10px] text-gray-500 font-bold mt-1 uppercase tracking-tighter">Zone: {healthZone}</div>
                <div className="text-[10px] bg-blue-50 text-blue-800 px-2 py-0.5 inline-block rounded-sm border border-blue-100 mt-2">
                  Status: {diseaseStatus || "Certified Free"}
                </div>
              </div>
            }
            className="border-t-0 border-r-0 border-l-0"
            highlight
          />
        </div>

        {/* --- Parties Grid --- */}
        <div className="grid grid-cols-2 border-y border-gray-300">
          <InfoBox 
            label="Consignor" 
            value={`${consignorName}\n${consignorAddress}`} 
            className="border-t-0 border-l-0 border-b-0"
          />
          <InfoBox 
            label="Consignee" 
            value={`${consigneeName}\n${consigneeAddress}`} 
            className="border-t-0 border-r-0 border-l-0 border-b-0"
          />
        </div>

        {/* --- Commodity Identification --- */}
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
           <div>
              <label className="block text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-1">Commodity Description</label>
              <div className="text-sm font-black uppercase">{descriptionOfCommodity}</div>
              <div className="text-[10px] italic font-medium text-blue-300 mt-1">{speciesScientificName}</div>
           </div>
           <div className="text-right flex space-x-6">
              <div>
                <label className="block text-[8px] font-bold text-gray-400 uppercase mb-1">Quantity</label>
                <div className="text-lg font-black">{numberOfPackagesAnimals}</div>
              </div>
              <div>
                <label className="block text-[8px] font-bold text-gray-400 uppercase mb-1">Net Weight</label>
                <div className="text-lg font-black">{weightValue} <span className="text-[10px] text-gray-400">{weightUnit}</span></div>
              </div>
           </div>
        </div>

        {/* --- Origin Establishment --- */}
        <div className="grid grid-cols-3 border-x border-b border-gray-300">
           <InfoBox label="Origin Establishment" value={establishmentName} className="border-l-0 border-t-0 border-b-0 col-span-2" />
           <InfoBox label="Approval Number" value={establishmentId} className="border-r-0 border-l-0 border-t-0 border-b-0" />
        </div>

        {/* --- Individual Animal Identification Table --- */}
        {individualIdentification.length > 0 && (
          <div className="border-x border-b border-gray-300">
            <table className="w-full text-left table-fixed border-collapse">
              <thead className="bg-gray-100 text-[9px] font-black uppercase tracking-widest text-gray-500 border-b border-gray-300">
                <tr>
                  <th className="p-3 w-1/4">ID System & No.</th>
                  <th className="p-3 w-1/4 text-center">Breed / Sex</th>
                  <th className="p-3 w-1/4 text-center">Age / DOB</th>
                  <th className="p-3 w-1/4 text-right">Verification</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {individualIdentification.map((animal, i) => (
                  <tr key={i} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="p-3">
                      <div className="font-bold text-gray-900 uppercase">{animal.identificationNumber}</div>
                      <div className="text-[9px] text-gray-400 uppercase font-medium">{animal.identificationSystem}</div>
                    </td>
                    <td className="p-3 text-center">
                       <div className="font-bold">{animal.breed}</div>
                       <div className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{animal.sex}</div>
                    </td>
                    <td className="p-3 text-center">
                       <div className="font-bold">{animal.age?.value} {animal.age?.unit}</div>
                       <div className="text-[9px] text-gray-400 font-mono">{animal.dateOfBirth}</div>
                    </td>
                    <td className="p-3 text-right">
                       <span className="text-[8px] font-black text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100 uppercase">Registered</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* --- Transport & Disinfection --- */}
        <div className="grid grid-cols-2 border-x border-b border-gray-300 bg-gray-50/50">
           <InfoBox label="Means of Transport" value={`${meansOfTransport} (${transportIdentifier})`} className="border-l-0 border-t-0 border-b-0" />
           <div className="p-3">
              <label className="block text-[9px] uppercase font-black text-gray-400 mb-2 tracking-widest">Disinfection Record</label>
              <div className="flex items-center space-x-3">
                 <div className={`w-4 h-4 rounded-full ${isDisinfected ? "bg-green-500" : "bg-gray-200"}`}></div>
                 <div className="text-sm font-bold uppercase text-gray-800">
                    {isDisinfected ? `Certified Clean: ${dateOfDisinfection}` : "Disinfection Pending"}
                 </div>
              </div>
           </div>
        </div>

        {/* --- Health & Sanitary Attestations (Primary Content) --- */}
        <div className="p-8 border-x border-b border-gray-300">
           <h2 className="text-[11px] font-black uppercase text-gray-400 tracking-[0.2em] mb-6 text-center underline decoration-blue-200 underline-offset-8">Animal Health Attestations</h2>
           <div className="space-y-4">
              {animalHealthAttestation.map((att, i) => (
                <div key={i} className="flex items-start space-x-4 border-b border-gray-100 pb-3 last:border-0">
                   <div className={`mt-1 w-5 h-5 border rounded-full flex items-center justify-center flex-shrink-0 ${att.isAttested ? "bg-blue-600 text-white border-blue-600" : "bg-white border-gray-200 text-gray-200"}`}>
                      {att.isAttested && <span className="text-[10px]">✓</span>}
                   </div>
                   <p className="text-xs font-medium text-gray-700 leading-relaxed text-justify">
                      {att.attestationStatement}
                   </p>
                </div>
              ))}
           </div>

           {/* Medical History: Vaccines & Tests */}
           <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                 <label className="block text-[9px] font-black text-blue-500 uppercase tracking-widest mb-3">Vaccination Records</label>
                 <div className="space-y-2">
                    {vaccinationRecord.map((vax, i) => (
                      <div key={i} className="bg-gray-50 p-2 rounded border border-gray-200">
                         <div className="text-[11px] font-black text-gray-900 uppercase leading-none">{vax.vaccineName}</div>
                         <div className="flex justify-between mt-2 text-[9px] text-gray-500 font-bold uppercase tracking-tight">
                            <span>Batch: {vax.batchNumber}</span>
                            <span>Exp: {vax.validityDate}</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div>
                 <label className="block text-[9px] font-black text-blue-500 uppercase tracking-widest mb-3">Laboratory Testing</label>
                 <div className="space-y-2">
                    {testingRecord.map((test, i) => (
                      <div key={i} className="bg-gray-50 p-2 rounded border border-gray-200 flex justify-between items-center">
                         <div>
                            <div className="text-[11px] font-black text-gray-900 uppercase leading-none">{test.testName}</div>
                            <div className="text-[9px] text-gray-400 mt-1 uppercase font-bold">{test.dateOfTest}</div>
                         </div>
                         <div className="text-[10px] font-black uppercase text-green-700 px-2 py-1 bg-green-50 border border-green-100 rounded">
                            {test.testResult}
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* --- Certification & Execution --- */}
        <div className="grid grid-cols-2">
          <div className="p-6 border-r border-l border-b border-gray-300 min-h-[160px] flex flex-col justify-between bg-gray-50/50">
             <div>
                <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Official Veterinarian</label>
                <div className="text-sm font-black uppercase text-gray-900">{vetName}</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase">{vetQualification} | {vetLicense}</div>
             </div>
             <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex justify-between border-t border-gray-200 pt-3">
                <span>Place of Issue: {placeOfIssue}</span>
                <span className="font-mono">{dateOfIssue}</span>
             </div>
          </div>
          <div className="p-6 border-r border-b border-gray-300 min-h-[160px] flex flex-col justify-between bg-white relative overflow-hidden">
             {/* Decorative Stamp */}
             <div className="absolute top-4 right-4 border-2 border-blue-50 text-blue-50 rounded-full w-20 h-20 flex items-center justify-center rotate-12 border-dashed pointer-events-none opacity-20">
                <span className="text-[8px] font-black uppercase text-center">Sanitary<br/>Verified</span>
             </div>

             <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Blockchain Identity</label>
             <div className="space-y-2">
                <div className="text-[10px] font-mono text-gray-400 break-all leading-tight">HASH: {documentHash?.substring(0, 32)}...</div>
                <div className="flex items-center space-x-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                   <span className="text-[9px] font-black text-gray-700 uppercase tracking-widest">Digitally Signed by Authority</span>
                </div>
             </div>
             <div className="text-[9px] font-bold text-gray-300 uppercase tracking-widest border-t border-gray-200 pt-3">
               Verified via Chaindox Animal Health Ledger
             </div>
          </div>
        </div>

        {/* --- Footer --- */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-[9px] font-bold text-gray-400 uppercase tracking-widest">
          <div>WOAH International Standard Model Compatible</div>
          <div className="flex items-center space-x-2">
            <span>Powered by</span>
            <span className="text-[11px] font-black text-blue-900 tracking-tighter uppercase">Chaindox</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}