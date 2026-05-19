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
    // --- Dates ---
    issueDate,

    // --- Routing & Locations ---
    consignmentRouteDescription: routeDetails,
    arrivalLocation: {
      name: arrivalPointName,
      address: arrivalAddress,
    } = {},

    // --- Security Details ---
    securityInformation: securityStatus,

    // --- Goods Details ---
    goods = [],
  } = data;

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
                  Consignment Security Declaration
                </h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
                  Aviation / Transport Security Verification
                </p>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-4 flex flex-col h-full justify-center text-center">
                  <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
                    Date of Issue
                  </div>
                  <div className="text-xl font-mono font-black border border-black p-2 inline-block">
                    {issueDate || "DRAFT"}
                  </div>
                </div>
              </td>
            </tr>

            {/* --- Routing & Arrival Location Row --- */}
            <tr>
              <td colSpan={1} className="border border-black p-4 align-top w-1/2">
                <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
                  1. Consignment Route Description
                </div>
                <div className="text-sm font-bold uppercase leading-relaxed whitespace-pre-wrap">
                  {routeDetails || "-"}
                </div>
              </td>
              <td colSpan={2} className="border border-black p-4 align-top w-1/2">
                <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
                  2. Arrival Location
                </div>
                <div className="text-sm font-bold uppercase mb-1">
                  {arrivalPointName || "-"}
                </div>
                <div className="text-xs leading-relaxed text-black whitespace-pre-wrap">
                  {arrivalAddress || ""}
                </div>
              </td>
            </tr>

            {/* --- Security Information Row --- */}
            <tr>
              <td colSpan={3} className="border border-black p-6 align-top">
                <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
                  3. Security Information / Status
                </div>
                <div className="text-xl font-mono font-black uppercase tracking-widest border-2 border-black p-3 inline-block">
                  {securityStatus || "STATUS NOT DECLARED"}
                </div>
                <p className="text-[10px] font-serif mt-3 italic text-gray-800">
                  * Indicate the security status (e.g., SPX, SCO, SHR) and the screening methods applied in accordance with international supply chain security standards.
                </p>
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
                        4. Description of Goods
                      </th>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-left w-3/12">
                        5. Consignment Summary
                      </th>
                      <th className="border-b border-black p-3 text-[10px] font-black uppercase tracking-widest text-left w-3/12">
                        6. Security Risk Details
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
                          <td className="border-b border-r border-black p-4 text-xs uppercase leading-relaxed whitespace-pre-wrap align-top">
                            {item.consignmentSummaryDescription || "-"}
                          </td>
                          <td className="border-b border-black p-4 text-xs font-mono uppercase leading-relaxed whitespace-pre-wrap align-top">
                            {item.riskObjectText || "NO RISK DECLARED"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="border-b border-black p-8 text-center text-xs italic uppercase">
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