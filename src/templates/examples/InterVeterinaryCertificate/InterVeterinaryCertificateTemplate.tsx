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
    // --- Document Identifiers ---
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
    consignorName: senderName,
    manufacturer: {
      name: farmOrAbattoir,
      addressLine: sourceAddress,
      city: sourceCity,
      country: sourceCountry,
      email: sourceEmail,
    } = {},
    permitIssuer: {
      name: veterinaryAuthority,
      addressLine: authorityAddress,
      city: authorityCity,
      country: authorityCountry,
      email: authorityEmail,
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

    // --- Environment & Metrics ---
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
                  International Veterinary Certificate
                </h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
                  For Animal Products and Live Animals
                </p>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-3 border-b border-black">
                  <div className="text-[10px] font-black uppercase tracking-widest text-black mb-1">
                    Approval / Registration Number
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
                  <div className="text-sm font-bold uppercase mb-4">{senderName || "-"}</div>
                  
                  <PartyCellContent 
                    title="2. Manufacturer / Farm / Abattoir"
                    name={farmOrAbattoir}
                    address={sourceAddress}
                    city={sourceCity}
                    country={sourceCountry}
                    email={sourceEmail}
                  />
                </div>
              </td>
              <td colSpan={2} className="border border-black p-4 align-top w-2/3">
                <div className="flex flex-col h-full bg-transparent">
                  <PartyCellContent 
                    title="3. Consignee (Receiver)"
                    name={receiverName}
                    address={receiverAddress}
                    city={receiverCity}
                    country={receiverCountry}
                    email={receiverEmail}
                  />
                  <div className="mt-4 border-t border-black pt-4">
                    <PartyCellContent 
                      title="4. Veterinary Authority (Permit Issuer)"
                      name={veterinaryAuthority}
                      address={authorityAddress}
                      city={authorityCity}
                      country={authorityCountry}
                      email={authorityEmail}
                    />
                  </div>
                </div>
              </td>
            </tr>

            {/* --- Geography & Routing Row --- */}
            <tr>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">5. Country of Origin</div>
                  <div className="text-xs font-bold uppercase">{originCountry || "-"}</div>
                </div>
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">6. Region / Zone of Origin</div>
                  <div className="text-xs font-bold uppercase">{regionOfOrigin || "-"}</div>
                </div>
                <div className="p-3">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">7. Original Loading Location</div>
                  <div className="text-xs font-bold uppercase">{originalLoadingLocation || "-"}</div>
                </div>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">8. Country of Destination</div>
                  <div className="text-xs font-bold uppercase">{destinationCountry || "-"}</div>
                </div>
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">9. Arrival Location</div>
                  <div className="text-xs font-bold uppercase">{arrivalLocation || "-"}</div>
                </div>
                <div className="p-3">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">10. Baseport Unloading Location</div>
                  <div className="text-xs font-bold uppercase">{baseportUnloadingLocation || "-"}</div>
                </div>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">11. Place of Issue</div>
                  <div className="text-xs font-bold uppercase">{placeOfIssue || "-"}</div>
                </div>
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">12. Transit Location (if applicable)</div>
                  <div className="text-xs font-bold uppercase">{transitLocation || "-"}</div>
                </div>
                <div className="p-3">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">13. Actual Departure Date</div>
                  <div className="text-xs font-mono font-bold">{actualDepartureDate || "-"}</div>
                </div>
              </td>
            </tr>

            {/* --- Transport, Equipment & Environmental Row --- */}
            <tr>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">14. Mode & Means of Transport</div>
                  <div className="text-xs font-bold uppercase">{modeOfTransport || "-"}</div>
                  <div className="text-xs font-bold uppercase mt-1">{transportMeansIdentifier || "-"}</div>
                </div>
                <div className="p-3">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">15. Conveyance & Vehicle Reg.</div>
                  <div className="text-xs font-mono font-bold">{conveyanceReferenceNumber || "-"}</div>
                  <div className="text-xs font-mono font-bold mt-1">{vehicleRegistrationNumber || "-"}</div>
                </div>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">16. Transport Equipment (Container)</div>
                  <div className="text-xs font-mono font-bold">{transportEquipmentIdentifier || "-"}</div>
                </div>
                <div className="p-3">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">17. Official Seal Identifier</div>
                  <div className="text-sm font-mono font-black">{sealIdentifier || "NONE DECLARED"}</div>
                </div>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-4 flex flex-col h-full justify-center">
                  <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">18. Transport Temperature</div>
                  <div className="text-lg font-mono font-black border border-black p-2 inline-block w-fit">
                    {transportTemperature !== undefined ? `${transportTemperature} ${transportTemperatureUnit || ""}` : "AMBIENT"}
                  </div>
                </div>
              </td>
            </tr>

            {/* --- Weights & Quantities Row --- */}
            <tr>
              <td className="border border-black p-3 align-top w-1/3">
                <div className="text-[9px] uppercase font-bold tracking-widest mb-1">19. Total Quantity</div>
                <div className="text-sm font-mono font-bold">{quantity !== undefined ? quantity : "-"}</div>
              </td>
              <td className="border border-black p-3 align-top w-1/3">
                <div className="text-[9px] uppercase font-bold tracking-widest mb-1">20. Net Weight</div>
                <div className="text-sm font-mono font-bold">{netWeight !== undefined ? `${netWeight} ${netWeightUnit || ""}` : "-"}</div>
              </td>
              <td className="border border-black p-3 align-top w-1/3">
                <div className="text-[9px] uppercase font-bold tracking-widest mb-1">21. Gross Weight</div>
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
                        22. Description & Shipping Marks
                      </th>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-left w-3/12">
                        23. Animal / Biological Specimen
                      </th>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-2/12">
                        24. HS Code / ID
                      </th>
                      <th className="border-b border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-2/12">
                        25. Packages
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
                            {item.nameOfAnimal || "-"}
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