import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { ExciseGuarantee, ExciseGuaranteeSchema } from "./types";

export const ExciseGuaranteeTemplate: FunctionComponent<
  TemplateProps<ExciseGuaranteeSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as ExciseGuarantee;

  const {
    // --- Dates ---
    issueDate,

    // --- Parties ---
    importer: {
      name: importerName,
      addressLine: importerAddress,
      city: importerCity,
      country: importerCountry,
      email: importerEmail,
    } = {},
    exporter: {
      name: exporterName,
      addressLine: exporterAddress,
      city: exporterCity,
      country: exporterCountry,
      email: exporterEmail,
    } = {},
    guarantor: {
      name: guarantorName,
      addressLine: guarantorAddress,
      city: guarantorCity,
      country: guarantorCountry,
      email: guarantorEmail,
    } = {},
    exciseGuaranteeBeneficiary: {
      name: beneficiaryAuthority,
      addressLine: beneficiaryAddress,
      city: beneficiaryCity,
      country: beneficiaryCountry,
    } = {},

    // --- Guarantee Terms & Financials ---
    conditionsOfGuarantee,

    taxOrFeeAssessmentBasisAmount: assessmentBasis,
    taxOrFeeAssessmentBasisAmountCurrency: assessmentCurrency,

    exciseDutyAmount: totalGuaranteedAmount,
    exciseDutyAmountCurrency: guaranteeCurrency,

    typeOfExciseDuty,

    // --- Volume/Quantity ---
    quantity,

    // --- Goods Details ---
    goods = [],
  } = data;

  // Clean, white-background DataBox helper
  const DataBox = ({
    label,
    value,
    className = "",
    fontMono = false,
  }: {
    label: string;
    value?: string | React.ReactNode;
    className?: string;
    fontMono?: boolean;
  }) => (
    <div className={`p-3 border-r border-b border-black last:border-r-0 bg-white text-black ${className}`}>
      <label className="block text-[9px] uppercase font-bold mb-1 tracking-widest leading-none text-gray-500">
        {label}
      </label>
      <div className={`text-sm font-bold uppercase leading-tight whitespace-pre-wrap break-words ${fontMono ? "font-mono" : ""}`}>
        {value || "-"}
      </div>
    </div>
  );

  // Helper for rendering Party details consistently
  const PartyBox = ({
    title,
    name,
    address,
    city,
    country,
    email,
    className = "",
  }: {
    title: string;
    name?: string;
    address?: string;
    city?: string;
    country?: string;
    email?: string;
    className?: string;
  }) => (
    <div className={`p-4 border-black bg-white ${className}`}>
      <div className="flex items-center space-x-2 mb-3">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500">{title}</h3>
      </div>
      <div className="text-sm font-bold uppercase mb-1">{name || "-"}</div>
      <div className="text-xs mb-2 leading-relaxed">
        {address && <>{address}<br /></>}
        {[city, country].filter(Boolean).join(", ")}
      </div>
      {email && <div className="text-[10px] font-mono text-gray-600 mt-2">Email: {email}</div>}
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto bg-white font-sans text-black border-2 border-black my-10 relative overflow-hidden">

        {/* --- Header Section --- */}
        <div className="flex justify-between items-start border-b-2 border-black p-6">
          <div className="flex-1">
            <h1 className="text-3xl font-black uppercase tracking-tighter leading-none mb-2">
              Excise Guarantee
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
              Financial Security Document
            </p>
          </div>
          <div className="text-right flex flex-col gap-2">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-widest mb-1 text-gray-500">Issue Date</p>
              <p className="text-xl font-mono font-black tracking-widest border border-black text-black px-3 py-1">
                {issueDate || "DRAFT"}
              </p>
            </div>
          </div>
        </div>

        {/* --- Parties Grid (2x2 Layout) --- */}
        <div className="grid grid-cols-2 border-b-2 border-black">
          <PartyBox
            title="Guarantor (Financial Institution)"
            name={guarantorName}
            address={guarantorAddress}
            city={guarantorCity}
            country={guarantorCountry}
            email={guarantorEmail}
            className="border-r border-b"
          />
          <PartyBox
            title="Beneficiary (Customs/Tax Authority)"
            name={beneficiaryAuthority}
            address={beneficiaryAddress}
            city={beneficiaryCity}
            country={beneficiaryCountry}
            className="border-b"
          />
          <PartyBox
            title="Principal / Exporter"
            name={exporterName}
            address={exporterAddress}
            city={exporterCity}
            country={exporterCountry}
            email={exporterEmail}
            className="border-r"
          />
          <PartyBox
            title="Consignee / Importer"
            name={importerName}
            address={importerAddress}
            city={importerCity}
            country={importerCountry}
            email={importerEmail}
          />
        </div>

        {/* --- Financial & Guarantee Details --- */}
        <div className="grid grid-cols-4 border-t-2 border-b-2 border-black">
          <DataBox
            label="Type of Excise Duty"
            value={typeOfExciseDuty}
          />
          <DataBox
            label="Assessment Basis Amount"
            value={assessmentBasis ? `${assessmentBasis} ${assessmentCurrency || ""}`.trim() : "N/A"}
            fontMono
          />
          <DataBox
            label="Total Guaranteed Amount"
            value={totalGuaranteedAmount ? `${totalGuaranteedAmount} ${guaranteeCurrency || ""}`.trim() : "N/A"}
            fontMono
            className="col-span-2 border-r-0 text-lg"
          />
        </div>

        {/* --- Conditions of Guarantee --- */}
        <div className="border-b-2 border-black p-4 bg-white">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Conditions of Guarantee</h3>
          <p className="text-xs font-serif leading-relaxed text-justify whitespace-pre-wrap">
            {conditionsOfGuarantee || "No specific conditions attached to this guarantee. Subject to standard statutory excise regulations."}
          </p>
        </div>

        {/* --- Goods Details Table --- */}
        <div className="min-h-[200px] flex flex-col">
          <div className="flex justify-between items-center bg-white p-2 border-b border-black">
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">
              Excise Goods Covered Under Guarantee
            </span>
            {quantity && (
              <span className="text-[10px] font-mono font-bold uppercase border border-black px-2 py-0.5">
                Total Quantity: {quantity}
              </span>
            )}
          </div>
          <table className="w-full text-left table-fixed flex-1 border-collapse">
            <thead className="bg-white text-[9px] font-bold uppercase tracking-widest text-gray-500 border-b-2 border-black">
              <tr>
                <th className="p-3 w-16 text-center border-r border-black">Item</th>
                <th className="p-3 w-6/12 border-r border-black">Description of Goods</th>
                <th className="p-3 w-3/12 text-center border-r border-black">Product ID (EPC)</th>
                <th className="p-3 w-2/12 text-center">HS Code</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {goods.length > 0 ? goods.map((item, i) => (
                <tr key={i} className="border-b border-gray-300 last:border-0 align-top">
                  <td className="p-3 text-center border-r border-black font-mono text-xs text-gray-500">{i + 1}</td>
                  <td className="p-3 border-r border-black whitespace-pre-wrap leading-relaxed font-bold uppercase text-xs">
                    {item.description || "-"}
                  </td>
                  <td className="p-3 text-center border-r border-black text-xs font-mono break-words">
                    {item.productIdentifier || "-"}
                  </td>
                  <td className="p-3 text-center text-xs font-mono">
                    {item.hsCode || "-"}
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-400 italic uppercase font-sans text-xs">
                    No explicit goods items declared
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </Wrapper>
  );
};