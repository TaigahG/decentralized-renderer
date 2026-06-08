import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { CITESPermit, CITESPermitSchema, CITESParty } from "./types";

export const CITESPermitTemplate: FunctionComponent<
  TemplateProps<CITESPermitSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as CITESPermit;

  const {
    // --- Cross-References & Identifiers ---
    transportContractDocument: transportRef,
    permitNumber,

    // --- Crucial Temporal Windows ---
    issueDate,
    permitExpiryDate,

    // --- Parties & Enforcement Authorities ---
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
    permitIssuer: {
      name: localIssuingOffice,
    } = {},
    managementAuthority: {
      name: nationalCitesAuthority,
    } = {},

    // --- Chain of Origin & Geography ---
    consignmentDestinationCountry: destinationCountry,
    specimenCountryOfReExport: reExportCountry,
    specimenCountryOfOrigin: originalCountry,

    // --- Regulatory Classifications ---
    citesAppendixReference: appendixTier,
    purposeOfCITESTradeTransaction: tradePurposeCode,

    // --- Quotas & Ledger Math ---
    quantity: currentShipmentQuantity,
    annualQuota,
    exportedQuantity: totalQuantityToDate,

    // --- Biological & Specimen Identifiers ---
    nameOfAnimalOrPlant: biologicalName,
    specimenDescription: structuralType,
  } = data;

  // --- Helpers ---
  const Label = ({ text }: { text: string }) => (
    <div className="text-[9px] uppercase font-black tracking-widest mb-1 text-black">
      {text}
    </div>
  );

  const Value = ({ text, italic = false }: { text?: string | number, italic?: boolean }) => (
    <div className={`text-xs font-bold text-black break-words ${italic ? "italic font-serif" : "font-mono uppercase"}`}>
      {text || "-"}
    </div>
  );

  const PartyBox = ({ title, name, address, city, country, email }: any) => (
    <div className="p-3 h-full flex flex-col border-b border-black last:border-b-0">
      <Label text={title} />
      <div className="text-sm font-bold uppercase mb-1">{name || "-"}</div>
      <div className="text-xs text-black leading-snug flex-grow">
        {address && <div>{address}</div>}
        {[city, country].filter(Boolean).join(", ")}
      </div>
      {email && (
        <div className="text-[10px] font-mono mt-1 pt-1 border-t border-black/20">
          {email}
        </div>
      )}
    </div>
  );

  const DataCell = ({ label, value, className = "", italicValue = false }: { label: string; value?: string | number; className?: string, italicValue?: boolean }) => (
    <div className={`p-2 h-full flex flex-col justify-start ${className}`}>
      <Label text={label} />
      <Value text={value} italic={italicValue} />
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-5xl mx-auto my-10 font-sans text-black bg-transparent">
        <table className="w-full border-collapse border-2 border-black table-fixed bg-transparent">
          <tbody>

            {/* --- Header Row --- */}
            <tr>
              <td colSpan={2} className="border-b-2 border-black p-4 w-1/2 align-middle">
                <h1 className="text-3xl font-black tracking-widest leading-none text-left mb-1">
                  CITES
                </h1>
                <p className="text-[9px] font-bold uppercase tracking-widest max-w-sm">
                  Convention on International Trade in Endangered Species of Wild Fauna and Flora
                </p>
              </td>
              <td colSpan={2} className="border-l-2 border-b-2 border-black p-0 w-1/2 align-top">
                <div className="flex h-full">
                  <div className="w-1/2 border-r border-black flex flex-col justify-center p-3">
                    <Label text="Permit / Certificate No." />
                    <div className="text-lg font-mono font-black">{permitNumber || "-"}</div>
                  </div>
                  <div className="w-1/2 flex flex-col">
                    <div className="border-b border-black flex-grow p-2">
                      <Label text="Valid Until (Expiry)" />
                      <Value text={permitExpiryDate} />
                    </div>
                    <div className="flex-grow p-2">
                      <Label text="Date of Issue" />
                      <Value text={issueDate} />
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            {/* --- Parties Row --- */}
            <tr>
              <td colSpan={2} className="border border-black p-0 align-top w-1/2">
                <PartyBox
                  title="3. Importer (Consignee)"
                  name={importerName}
                  address={importerAddress}
                  city={importerCity}
                  country={importerCountry}
                  email={importerEmail}
                />
              </td>
              <td colSpan={2} className="border border-black p-0 align-top w-1/2">
                <PartyBox
                  title="4. Exporter (Consignor)"
                  name={exporterName}
                  address={exporterAddress}
                  city={exporterCity}
                  country={exporterCountry}
                  email={exporterEmail}
                />
              </td>
            </tr>

            {/* --- Authorities & Transport --- */}
            <tr>
              <td colSpan={2} className="border border-black p-0 align-top w-1/2">
                <div className="p-3 h-full flex flex-col justify-start">
                  <Label text="5. Management Authority" />
                  <div className="text-sm font-bold uppercase">{nationalCitesAuthority || "-"}</div>
                </div>
              </td>
              <td colSpan={2} className="border border-black p-0 align-top w-1/2">
                <div className="p-3 h-full flex flex-col justify-start">
                  <Label text="6. Transport Contract Document (AWB/BOL)" />
                  <Value text={transportRef} />
                </div>
              </td>
            </tr>

            {/* --- Routing & Purpose --- */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-0">
                <div className="grid grid-cols-4 divide-x divide-black border-b border-black">
                  <DataCell label="Destination Country" value={destinationCountry} />
                  <DataCell label="Country of Re-Export" value={reExportCountry} />
                  <DataCell label="Original Country of Origin" value={originalCountry} />
                  <DataCell label="Purpose of Trade (Code)" value={tradePurposeCode} />
                </div>
              </td>
            </tr>

            {/* --- Specimen Details Header --- */}
            <tr>
              <td colSpan={4} className="border-b border-black p-2 bg-black text-white text-center">
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Specimen Details & Quota Accounting
                </span>
              </td>
            </tr>

            {/* --- Specimen Main Info --- */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-0">
                <div className="grid grid-cols-4 divide-x divide-black border-b border-black">
                  <div className="col-span-2 p-2">
                    <Label text="Scientific Name of Animal or Plant" />
                    <div className="text-sm font-serif font-bold italic mt-1">
                      {biologicalName || "-"}
                    </div>
                  </div>
                  <DataCell label="Description of Specimen" value={structuralType} className="col-span-1" />
                  <DataCell label="CITES Appendix" value={appendixTier} className="col-span-1" />
                </div>
              </td>
            </tr>

            {/* --- Quotas --- */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-0">
                <div className="grid grid-cols-3 divide-x divide-black">
                  <DataCell label="Current Consignment Quantity" value={currentShipmentQuantity} />
                  <DataCell label="Exported to Date (Quota Used)" value={totalQuantityToDate} />
                  <DataCell label="Total Annual Quota" value={annualQuota} />
                </div>
              </td>
            </tr>

            {/* --- Signatures --- */}
            <tr>
              <td colSpan={4} className="border border-black p-0 align-top h-40">
                <div className="flex h-full">
                  <div className="w-full border-r border-black p-4 flex flex-col justify-between">
                    <div>
                      <Label text="13. Issuing Office" />
                      <div className="text-xs uppercase font-bold max-w-sm">
                        {localIssuingOffice || "-"}
                      </div>
                    </div>
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