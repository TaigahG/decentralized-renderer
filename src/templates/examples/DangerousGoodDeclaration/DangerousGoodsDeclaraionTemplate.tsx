import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { DangerousGoodsDeclaration, DangerousGoodsDeclarationSchema } from "./types";

export const DangerousGoodsDeclarationTemplate: FunctionComponent<
  TemplateProps<DangerousGoodsDeclarationSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as DangerousGoodsDeclaration;

  const {
    // --- Document Identifier ---
    dangerousGoodsDeclarationIdentifier: dgdReference,

    // --- Parties ---
    consignee: {
      name: consigneeName,
      addressLine: consigneeAddress,
      city: consigneeCity,
      country: consigneeCountry,
      email: consigneeEmail,
    } = {},
    consignor: {
      name: consignorName,
      addressLine: consignorAddress,
      city: consignorCity,
      country: consignorCountry,
      email: consignorEmail,
    } = {},

    // --- Emergency Info ---
    emergencyContact: {
      name: contactPerson,
      email: contactEmail,
      phoneNumber: emergencyPhone,
    } = {},

    // --- Goods Details ---
    dangerousGoods = [],
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
    <div className="flex flex-col h-full">
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
      <div className="max-w-4xl mx-auto my-10 font-sans text-black">
        
        {/* Bulletproof HTML Table for strict border enforcement */}
        <table className="w-full border-collapse border-2 border-black table-fixed">
          <tbody>
            
            {/* --- Header Row --- */}
            <tr>
              <td colSpan={2} className="border border-black p-4">
                <h1 className="text-2xl font-black uppercase tracking-widest leading-none mb-1 text-center">
                  Dangerous Goods Declaration
                </h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-center">
                  Shipper's Declaration for Dangerous Goods
                </p>
              </td>
            </tr>

            {/* --- Consignor & Reference Row --- */}
            <tr>
              <td className="border border-black p-4 align-top w-1/2">
                <PartyCellContent 
                  title="1. Shipper / Consignor"
                  name={consignorName}
                  address={consignorAddress}
                  city={consignorCity}
                  country={consignorCountry}
                  email={consignorEmail}
                />
              </td>
              <td className="border border-black p-0 align-top w-1/2">
                <div className="p-4 border-b border-black h-1/2">
                  <div className="text-[10px] font-black uppercase tracking-widest text-black mb-1">
                    DGD Reference Number
                  </div>
                  <div className="text-lg font-mono font-black">
                    {dgdReference || "DRAFT"}
                  </div>
                </div>
                <div className="p-4 h-1/2">
                   {/* Blank/Reserved space per UN standard */}
                   <span className="text-[8px] uppercase tracking-widest text-black">Reserved for Carrier</span>
                </div>
              </td>
            </tr>

            {/* --- Consignee & Emergency Contact Row --- */}
            <tr>
              <td className="border border-black p-4 align-top w-1/2">
                <PartyCellContent 
                  title="2. Consignee"
                  name={consigneeName}
                  address={consigneeAddress}
                  city={consigneeCity}
                  country={consigneeCountry}
                  email={consigneeEmail}
                />
              </td>
              <td className="border border-black p-4 align-top w-1/2">
                <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
                  24-Hour Emergency Contact
                </div>
                <div className="text-sm font-bold uppercase mb-1">{contactPerson || "-"}</div>
                {emergencyPhone && (
                  <div className="text-xs font-mono font-bold mb-1">Tel: {emergencyPhone}</div>
                )}
                {contactEmail && (
                  <div className="text-[10px] font-mono">Email: {contactEmail}</div>
                )}
              </td>
            </tr>

            {/* --- Dangerous Goods Table Row --- */}
            <tr>
              <td colSpan={2} className="border border-black p-0">
                <table className="w-full border-collapse table-fixed">
                  <thead>
                    <tr>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-left w-2/12">
                        UN Number
                      </th>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-left w-6/12">
                        Proper Shipping / Technical Name
                      </th>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-2/12">
                        Class / Div
                      </th>
                      <th className="border-b border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-2/12">
                        Packing Group
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dangerousGoods.length > 0 ? (
                      dangerousGoods.map((item, i) => (
                        <tr key={i}>
                          <td className="border-b border-r border-black p-3 text-xs font-mono font-bold">
                            {item.undgNumber || "-"}
                          </td>
                          <td className="border-b border-r border-black p-3 text-xs font-bold uppercase leading-relaxed">
                            {item.goodsTechnicalName || "-"}
                          </td>
                          <td className="border-b border-r border-black p-3 text-center text-xs font-mono font-bold">
                            {item.goodsClassNumber || "-"}
                          </td>
                          <td className="border-b border-black p-3 text-center text-xs font-mono font-bold">
                            {item.packagingDangerLevelCode || "-"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="border-b border-black p-8 text-center text-xs italic uppercase">
                          No Dangerous Goods Declared
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