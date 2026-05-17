import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { PhytosanitaryCertificate, PhytosanitaryCertificateSchema } from "./types";

export const PhytosanitaryCertificateTemplate: FunctionComponent<
  TemplateProps<PhytosanitaryCertificateSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as PhytosanitaryCertificate;

  const {
    // --- Document & Shipment Identifiers ---
    documentIdentifier: certificateRef,
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
    } = {},
    consignor: {
      name: exporterName,
      addressLine: exporterAddress,
    } = {},

    // --- Issuance ---
    permitIssuerName: nppoAuthority,
    placeOfIssue,

    // --- Locations & Routing ---
    destinationCountry,
    originCountry,
    regionOfOrigin,
    transitLocation,

    // --- Weights, Quantities & Conditions ---
    grossWeight,
    grossWeightUnit,
    transportTemperature,
    transportTemperatureUnit,

    // --- Goods Details ---
    goods = [],

    // --- Transport Details ---
    conveyanceReferenceNumber: voyageOrFlight,
    transportMeansIdentifier: vesselName,
    sealIdentifier,

    // --- Declarations ---
    certificationText,
  } = data;

  // Helper for rendering Party details cleanly within a table cell
  const PartyCellContent = ({
    title,
    name,
    address,
    city,
    country,
  }: {
    title: string;
    name?: string;
    address?: string;
    city?: string;
    country?: string;
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
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto my-10 font-sans text-black bg-transparent">
        
        {/* Bulletproof HTML Table for strict border enforcement */}
        <table className="w-full border-collapse border-2 border-black table-fixed">
          <tbody>
            
            {/* --- Header Row --- */}
            <tr>
              <td colSpan={2} className="border border-black p-6 align-top w-2/3">
                <h1 className="text-3xl font-black uppercase tracking-widest leading-none mb-2">
                  Phytosanitary Certificate
                </h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
                  Plant Protection Organization
                </p>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-4 border-b border-black text-center">
                  <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
                    Certificate Number
                  </div>
                  <div className="text-xl font-mono font-black border border-black p-2 inline-block">
                    {certificateRef || "DRAFT"}
                  </div>
                </div>
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Issue Date</div>
                  <div className="text-xs font-mono font-bold">{issueDate || "-"}</div>
                </div>
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Approval Number</div>
                  <div className="text-xs font-mono font-bold">{approvalNumber || "-"}</div>
                </div>
                <div className="p-3">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Permit No. / Expiry</div>
                  <div className="text-xs font-mono font-bold">{permitNumber || "-"}</div>
                  {permitExpiryDate && <div className="text-[10px] mt-1 uppercase">Expires: {permitExpiryDate}</div>}
                </div>
              </td>
            </tr>

            {/* --- Exporter & Consignee Row --- */}
            <tr>
              <td className="border border-black p-4 align-top w-1/3">
                <PartyCellContent 
                  title="1. Name and Address of Exporter"
                  name={exporterName}
                  address={exporterAddress}
                />
              </td>
              <td colSpan={2} className="border border-black p-4 align-top w-2/3">
                <PartyCellContent 
                  title="2. Declared Name and Address of Consignee"
                  name={receiverName}
                  address={receiverAddress}
                  city={receiverCity}
                  country={receiverCountry}
                />
              </td>
            </tr>

            {/* --- NPPO Routing & Locations Row --- */}
            <tr>
              <td colSpan={2} className="border border-black p-0 align-top w-2/3">
                <div className="p-4 border-b border-black">
                  <div className="text-[10px] font-black uppercase tracking-widest mb-1">
                    3. Plant Protection Organization of:
                  </div>
                  <div className="text-sm font-bold uppercase mb-2">
                    {originCountry || "-"} {nppoAuthority ? `(${nppoAuthority})` : ""}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest mb-1">
                    To: Plant Protection Organization(s) of:
                  </div>
                  <div className="text-sm font-bold uppercase">
                    {destinationCountry || "-"}
                  </div>
                </div>
                <div className="flex">
                  <div className="p-4 border-r border-black w-1/2">
                    <div className="text-[9px] uppercase font-bold tracking-widest mb-1">4. Place of Origin / Region</div>
                    <div className="text-xs font-bold uppercase">{regionOfOrigin || originCountry || "-"}</div>
                  </div>
                  <div className="p-4 w-1/2">
                    <div className="text-[9px] uppercase font-bold tracking-widest mb-1">5. Declared Point of Entry / Transit</div>
                    <div className="text-xs font-bold uppercase">
                      {destinationCountry || "-"} {transitLocation ? `(via ${transitLocation})` : ""}
                    </div>
                  </div>
                </div>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">6. Declared Means of Conveyance</div>
                  <div className="text-xs font-bold uppercase">{vesselName || "-"}</div>
                  <div className="text-xs font-mono mt-1">{voyageOrFlight || "-"}</div>
                </div>
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">7. Transport Temperature</div>
                  <div className="text-xs font-mono font-bold">
                    {transportTemperature ? `${transportTemperature} ${transportTemperatureUnit || "°C"}` : "AMBIENT / NOT DECLARED"}
                  </div>
                </div>
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">8. Seal / Container No.</div>
                  <div className="text-xs font-mono font-bold">{sealIdentifier || "NONE DECLARED"}</div>
                </div>
                <div className="p-3">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Actual Departure Date</div>
                  <div className="text-xs font-mono font-bold">{actualDepartureDate || "-"}</div>
                </div>
              </td>
            </tr>

            {/* --- Goods Table Row --- */}
            <tr>
              <td colSpan={3} className="border border-black p-0">
                <table className="w-full border-collapse table-fixed">
                  <thead>
                    <tr>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-left w-6/12">
                        9. Distinguishing Marks; Number and Description of Packages; Name of Produce
                      </th>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-4/12">
                        10. Botanical Name of Plants
                      </th>
                      <th className="border-b border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-2/12">
                        11. Quantity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {goods.length > 0 ? (
                      goods.map((item: any, i) => (
                        <tr key={i}>
                          <td className="border-b border-r border-black p-4 text-xs font-bold uppercase leading-relaxed whitespace-pre-wrap align-top">
                            {item.description || "-"}
                          </td>
                          <td className="border-b border-r border-black p-4 text-center text-xs font-serif italic align-top">
                            {item.botanicalName || "As Described"}
                          </td>
                          <td className="border-b border-black p-4 text-center text-sm font-mono align-top">
                            {item.quantity || "-"} {item.quantityUnit || ""}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={3} className="border-b border-black p-8 text-center text-xs italic uppercase">
                          No Produce Declared
                        </td>
                      </tr>
                    )}
                  </tbody>
                  {/* Totals Footer */}
                  <tfoot>
                    <tr className="bg-transparent">
                      <td colSpan={2} className="border-r border-black p-2 text-right text-[9px] uppercase font-bold tracking-widest">
                        Total Gross Weight
                      </td>
                      <td className="p-2 text-center text-sm font-mono font-black">
                        {grossWeight ? `${grossWeight} ${grossWeightUnit || ""}` : "-"}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </td>
            </tr>

            {/* --- Certification Statement Row --- */}
            <tr>
              <td colSpan={3} className="border border-black p-6 bg-transparent">
                <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
                  12. Certifying Statement
                </div>
                <p className="text-sm font-serif leading-relaxed text-justify">
                  {certificationText || "This is to certify that the plants, plant products or other regulated articles described herein have been inspected and/or tested according to appropriate official procedures and are considered to be free from the quarantine pests specified by the importing contracting party and to conform with the current phytosanitary requirements of the importing contracting party, including those for regulated non-quarantine pests."}
                </p>
                <div className="flex justify-between items-end mt-8 pt-4 border-t border-dashed border-black">
                  <div>
                    <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Place of Issue</div>
                    <div className="text-xs font-mono font-bold">{placeOfIssue || "-"}</div>
                  </div>
                  <div className="text-center">
                    <div className="w-48 border-t border-black mb-1 mx-auto"></div>
                    <div className="text-[9px] uppercase font-bold tracking-widest">Signature of Authorized Officer</div>
                  </div>
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};