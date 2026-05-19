import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { EILIcenseAgricultural, EILIcenseAgriculturalSchema } from "./types";

export const EILIcenseAgriculturalTemplate: FunctionComponent<
  TemplateProps<EILIcenseAgriculturalSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as EILIcenseAgricultural;

  const {
    // --- Document Identifiers ---
    documentIdentifier: licenseRef,
    permitNumber,

    // --- Dates ---
    issueDate,
    permitExpiryDate,

    // --- Parties & Authorities ---
    permitIssuer: {
      name: issuingAgency,
      addressLine: issuerAddress,
      city: issuerCity,
      country: issuerCountry,
      email: issuerEmail,
    } = {},
    managementAuthority: {
      name: governingBody,
      addressLine: governingAddress,
      city: governingCity,
      country: governingCountry,
      email: governingEmail,
    } = {},

    // --- Routing / Locations ---
    destinationCountry,
    exportationCountry,
    originCountry,

    // --- Quantities ---
    quantity: totalLicensedVolume,

    // --- Goods Details ---
    goods = [],
  } = data;

  // Helper for rendering Party/Authority details cleanly within a table cell
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
      <div className="max-w-4xl mx-auto my-10 font-sans text-black bg-transparent">
        
        {/* Bulletproof HTML Table for strict border enforcement */}
        <table className="w-full border-collapse border-2 border-black table-fixed bg-transparent">
          <tbody>
            
            {/* --- Header Row --- */}
            <tr>
              <td colSpan={2} className="border border-black p-6 align-top w-2/3">
                <h1 className="text-3xl font-black uppercase tracking-widest leading-none mb-2">
                  Agricultural License
                </h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
                  Export / Import Permit
                </p>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-3 border-b border-black">
                  <div className="text-[10px] font-black uppercase tracking-widest text-black mb-1">
                    License Reference Number
                  </div>
                  <div className="text-lg font-mono font-black tracking-widest">
                    {licenseRef || "DRAFT"}
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

            {/* --- Authorities Row --- */}
            <tr>
              <td colSpan={2} className="border border-black p-4 align-top w-1/2">
                <PartyCellContent 
                  title="1. Permit Issuer / Agency"
                  name={issuingAgency}
                  address={issuerAddress}
                  city={issuerCity}
                  country={issuerCountry}
                  email={issuerEmail}
                />
              </td>
              <td className="border border-black p-4 align-top w-1/2">
                <PartyCellContent 
                  title="2. Management Authority"
                  name={governingBody}
                  address={governingAddress}
                  city={governingCity}
                  country={governingCountry}
                  email={governingEmail}
                />
              </td>
            </tr>

            {/* --- Locations & Routing Row --- */}
            <tr>
              <td className="border border-black p-4 align-top w-1/3">
                <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
                  3. Country of Origin
                </div>
                <div className="text-sm font-bold uppercase">
                  {originCountry || "-"}
                </div>
              </td>
              <td className="border border-black p-4 align-top w-1/3">
                <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
                  4. Exporting Country
                </div>
                <div className="text-sm font-bold uppercase">
                  {exportationCountry || "-"}
                </div>
              </td>
              <td className="border border-black p-4 align-top w-1/3">
                <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
                  5. Country of Destination
                </div>
                <div className="text-sm font-bold uppercase">
                  {destinationCountry || "-"}
                </div>
              </td>
            </tr>

            {/* --- Total Volume/Quantity Row --- */}
            <tr>
              <td colSpan={3} className="border border-black p-4 align-top">
                <div className="flex justify-between items-center">
                  <div className="text-[10px] font-black uppercase tracking-widest text-black">
                    6. Total Approved Quantity / Licensed Volume
                  </div>
                  <div className="text-lg font-mono font-black border border-black px-3 py-1">
                    {totalLicensedVolume !== undefined ? totalLicensedVolume : "NOT SPECIFIED"}
                  </div>
                </div>
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
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-left w-5/12">
                        7. Description of Agricultural Goods
                      </th>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-3/12">
                        8. Product Identifier
                      </th>
                      <th className="border-b border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-3/12">
                        9. HS Code
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {goods.length > 0 ? (
                      goods.map((item, i) => (
                        <tr key={i}>
                          <td className="border-b border-r border-black p-4 text-xs font-mono font-bold text-center align-top">
                            {i + 1}
                          </td>
                          <td className="border-b border-r border-black p-4 text-xs font-bold uppercase leading-relaxed whitespace-pre-wrap align-top">
                            {item.description || "-"}
                          </td>
                          <td className="border-b border-r border-black p-4 text-center text-xs font-mono align-top">
                            {item.productIdentifier || "-"}
                          </td>
                          <td className="border-b border-black p-4 text-center text-xs font-mono font-bold align-top">
                            {item.hsCode || "-"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="border-b border-black p-8 text-center text-xs italic uppercase">
                          No Authorized Goods Declared
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