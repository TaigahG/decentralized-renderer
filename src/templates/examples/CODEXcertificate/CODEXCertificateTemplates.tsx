import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { CODEXCertificate, CODEXCertificateSchema } from "./types";

export const CODEXCertificateTemplate: FunctionComponent<
  TemplateProps<CODEXCertificateSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as CODEXCertificate;

  const {
    // --- Document & Shipment Identifiers ---
    approvalNumber,
    permitNumber,

    // --- Dates ---
    issueDate,
    actualDepartureDate,
    permitExpiryDate,

    // --- Parties ---
    consignee: {
      name: receiverName,
      addressLine: receiverAddress,
      city: receiverCity,
      country: receiverCountry,
      email: receiverEmail,
    } = {},
    consignorName,
    manufacturer: {
      name: facilityName,
      addressLine: facilityAddress,
      city: facilityCity,
      country: facilityCountry,
      email: facilityEmail,
    } = {},
    permitIssuer: {
      name: healthAuthority,
      addressLine: authorityAddress,
      city: authorityCity,
      country: authorityCountry,
    } = {},

    // --- Locations & Routing ---
    destinationCountry,
    originCountry,
    regionOfOrigin,
    originalLoadingLocation,
    arrivalLocation,
    baseportUnloadingLocation,
    placeOfIssue,
    transitLocation,

    // --- Weights, Quantities & Environment ---
    grossWeight,
    grossWeightUnit,
    netWeight,
    netWeightUnit,
    transportTemperature,
    transportTemperatureUnit,
    quantity,

    // --- Goods Details ---
    goods = [],

    // --- Transport & Equipment ---
    conveyanceReferenceNumber,
    modeOfTransport,
    transportMeansIdentifier,
    vehicleRegistrationNumber,
    transportEquipmentIdentifier,
    sealIdentifier,
  } = data;

  // Helper for rendering Party details cleanly within a table cell
  const PartyCellContent = ({
    title,
    name,
    address,
    city,
    country,
    email,
  }: {
    title: string;
    name?: string;
    address?: string;
    city?: string;
    country?: string;
    email?: string;
  }) => (
    <div className="flex flex-col h-full bg-transparent">
      <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
        {title}
      </div>
      <div className="text-sm font-bold uppercase mb-1">{name || "-"}</div>
      <div className="text-xs leading-relaxed text-black">
        {address && <>{address}<br /></>}
        {[city, country].filter(Boolean).join(", ")}
      </div>
      {email && <div className="text-[10px] font-mono mt-2">Email: {email}</div>}
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-5xl mx-auto my-10 font-sans text-black bg-transparent">
        
        {/* Bulletproof HTML Table for strict border enforcement */}
        <table className="w-full border-collapse border-2 border-black table-fixed bg-transparent">
          <tbody>
            
            {/* --- Header Row --- */}
            <tr>
              <td colSpan={2} className="border border-black p-6 align-top w-2/3">
                <h1 className="text-3xl font-black uppercase tracking-widest leading-none mb-2">
                  CODEX Alimentarius
                </h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
                  International Food & Health Certificate
                </p>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-3 border-b border-black">
                  <div className="text-[10px] font-black uppercase tracking-widest text-black mb-1">
                    Approval Number
                  </div>
                  <div className="text-lg font-mono font-black tracking-widest">
                    {approvalNumber || "DRAFT"}
                  </div>
                </div>
                <div className="p-3 border-b border-black">
                  <div className="text-[10px] font-black uppercase tracking-widest text-black mb-1">
                    Permit Number
                  </div>
                  <div className="text-sm font-mono font-bold">
                    {permitNumber || "-"}
                  </div>
                </div>
                <div className="p-3 flex justify-between">
                   <div>
                     <div className="text-[9px] font-bold uppercase tracking-widest text-black mb-1">Issue Date</div>
                     <div className="text-xs font-mono font-bold">{issueDate || "-"}</div>
                   </div>
                   <div className="text-right">
                     <div className="text-[9px] font-bold uppercase tracking-widest text-black mb-1">Expiry Date</div>
                     <div className="text-xs font-mono font-bold">{permitExpiryDate || "-"}</div>
                   </div>
                </div>
              </td>
            </tr>

            {/* --- Parties Row --- */}
            <tr>
              <td className="border border-black p-4 align-top w-1/3">
                <div className="flex flex-col h-full bg-transparent">
                  <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
                    1. Consignor (Sender)
                  </div>
                  <div className="text-sm font-bold uppercase mb-4">{consignorName || "-"}</div>
                  
                  <PartyCellContent 
                    title="2. Manufacturer / Processing Facility"
                    name={facilityName}
                    address={facilityAddress}
                    city={facilityCity}
                    country={facilityCountry}
                    email={facilityEmail}
                  />
                </div>
              </td>
              <td className="border border-black p-4 align-top w-1/3">
                <PartyCellContent
                  title="3. Consignee (Receiver)"
                  name={receiverName}
                  address={receiverAddress}
                  city={receiverCity}
                  country={receiverCountry}
                  email={receiverEmail}
                />
              </td>
              <td className="border border-black p-4 align-top w-1/3">
                <PartyCellContent
                  title="4. Issuing Health Authority"
                  name={healthAuthority}
                  address={authorityAddress}
                  city={authorityCity}
                  country={authorityCountry}
                />
                {placeOfIssue && (
                  <div className="mt-3 pt-3 border-t border-black">
                    <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Place of Issue</div>
                    <div className="text-xs font-mono font-bold">{placeOfIssue}</div>
                  </div>
                )}
              </td>
            </tr>

            {/* --- Geography & Logistics Row --- */}
            <tr>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">4. Country & Region of Origin</div>
                  <div className="text-xs font-bold uppercase">{originCountry || "-"} {regionOfOrigin ? `(${regionOfOrigin})` : ""}</div>
                </div>
                <div className="p-3">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">5. Destination Country</div>
                  <div className="text-xs font-bold uppercase">{destinationCountry || "-"}</div>
                </div>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">6. Original Loading Location</div>
                  <div className="text-xs font-bold uppercase">{originalLoadingLocation || "-"}</div>
                </div>
                <div className="p-3">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">7. Arrival Location</div>
                  <div className="text-xs font-bold uppercase">{arrivalLocation || "-"}</div>
                </div>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">8. Unloading & Transit</div>
                  <div className="text-xs font-bold uppercase">
                    {baseportUnloadingLocation ? `Unload: ${baseportUnloadingLocation}` : "-"}
                    {transitLocation ? <><br/>Transit: {transitLocation}</> : ""}
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">9. Actual Departure Date</div>
                  <div className="text-xs font-mono font-bold">{actualDepartureDate || "-"}</div>
                </div>
              </td>
            </tr>

            {/* --- Transport, Equipment & Environmental Row --- */}
            <tr>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">10. Mode & Means of Transport</div>
                  <div className="text-xs font-bold uppercase">{modeOfTransport || "-"}</div>
                  <div className="text-xs font-bold uppercase mt-1">{transportMeansIdentifier || "-"}</div>
                </div>
                <div className="p-3">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">11. Conveyance & Vehicle Reg.</div>
                  <div className="text-xs font-mono font-bold">{conveyanceReferenceNumber || "-"}</div>
                  <div className="text-xs font-mono font-bold mt-1">{vehicleRegistrationNumber || "-"}</div>
                </div>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">12. Transport Equipment (Container)</div>
                  <div className="text-xs font-mono font-bold">{transportEquipmentIdentifier || "-"}</div>
                </div>
                <div className="p-3">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">13. Official Seal Identifier</div>
                  <div className="text-sm font-mono font-black">{sealIdentifier || "NONE DECLARED"}</div>
                </div>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-3 border-b border-black h-full flex flex-col justify-center bg-gray-50">
                  <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">14. Transport Temperature</div>
                  <div className="text-lg font-mono font-black border border-black p-2 inline-block bg-transparent w-fit">
                    {transportTemperature !== undefined ? `${transportTemperature} ${transportTemperatureUnit || ""}` : "AMBIENT"}
                  </div>
                </div>
              </td>
            </tr>

            {/* --- Weights & Quantities Row --- */}
            <tr>
              <td className="border border-black p-3 align-top w-1/3">
                <div className="text-[9px] uppercase font-bold tracking-widest mb-1">15. Total Quantity</div>
                <div className="text-sm font-mono font-bold">{quantity !== undefined ? quantity : "-"}</div>
              </td>
              <td className="border border-black p-3 align-top w-1/3">
                <div className="text-[9px] uppercase font-bold tracking-widest mb-1">16. Net Weight</div>
                <div className="text-sm font-mono font-bold">{netWeight !== undefined ? `${netWeight} ${netWeightUnit || ""}` : "-"}</div>
              </td>
              <td className="border border-black p-3 align-top w-1/3">
                <div className="text-[9px] uppercase font-bold tracking-widest mb-1">17. Gross Weight</div>
                <div className="text-sm font-mono font-bold">{grossWeight !== undefined ? `${grossWeight} ${grossWeightUnit || ""}` : "-"}</div>
              </td>
            </tr>

            {/* --- Goods Table Row --- */}
            <tr>
              <td colSpan={3} className="border border-black p-0">
                <table className="w-full border-collapse table-fixed bg-transparent">
                  <thead>
                    <tr>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-1/12">
                        Item
                      </th>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-left w-4/12">
                        18. Description & Shipping Marks
                      </th>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-left w-3/12">
                        19. Biological / Specimen Name
                      </th>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-2/12">
                        20. Classification
                      </th>
                      <th className="border-b border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-2/12">
                        21. Pkg / Type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {goods.length > 0 ? (
                      goods.map((item, i) => (
                        <tr key={i}>
                          <td className="border-b border-r border-black p-3 text-xs font-mono font-bold text-center align-top">
                            {i + 1}
                          </td>
                          <td className="border-b border-r border-black p-3 text-xs font-bold uppercase leading-relaxed whitespace-pre-wrap align-top">
                            {item.description || "-"}
                            {item.shippingMarks && <div className="font-mono text-[10px] mt-1 text-gray-800">Marks: {item.shippingMarks}</div>}
                          </td>
                          <td className="border-b border-r border-black p-3 text-xs font-serif italic align-top">
                            {item.nameOfAnimalOrPlant || "-"}
                            {item.specimenDescription && <div className="text-[10px] mt-1 font-sans not-italic text-gray-800">{item.specimenDescription}</div>}
                          </td>
                          <td className="border-b border-r border-black p-3 text-center text-xs font-mono align-top">
                            {item.hsCode ? <div>HS: {item.hsCode}</div> : ""}
                            {item.productIdentifier ? <div>ID: {item.productIdentifier}</div> : ""}
                            {!item.hsCode && !item.productIdentifier && "-"}
                          </td>
                          <td className="border-b border-black p-3 text-center text-xs align-top">
                            <span className="font-black">{item.numberOfPackages !== undefined ? item.numberOfPackages : "-"}</span>
                            {item.typeOfPackaging ? <div className="text-[10px] mt-1 uppercase">{item.typeOfPackaging}</div> : ""}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="border-b border-black p-8 text-center text-xs italic uppercase">
                          No Goods Items Declared
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};