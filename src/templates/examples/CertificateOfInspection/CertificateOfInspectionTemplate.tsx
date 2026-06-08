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
    // --- Core References & Links ---
    houseWaybillDocumentIdentifier: hawbNumber,
    invoiceNumber,
    permitNumber: coiControlNumber,

    // --- Temporal Baseline ---
    issueDate,

    // --- Parties & Oversight Bodies ---
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
      name: inspectionBody,
    } = {},
    managementAuthority: {
      name: endorsingAuthority,
    } = {},

    // --- Geography & Customs Routing ---
    destinationCountry,
    consignmentDestinationCountry,
    exportationCountry,
    originCountry,

    // --- Mass Metrics ---
    netWeight: inspectedNetWeight,
    netWeightUnit,

    // --- Goods Details ---
    goods = [],

    // --- Transport Equipment Logistics ---
    vehicleRegistrationNumber: transportVehicle,
    transportEquipmentIdentifier: containerNumber,
  } = data;

  // --- Helper Components ---
  const Label = ({ text }: { text: string }) => (
    <div className="text-[9px] uppercase font-black tracking-widest mb-1 text-black">
      {text}
    </div>
  );

  const Value = ({ text }: { text?: string | number }) => (
    <div className="text-xs font-mono font-bold text-black break-words">
      {text || "-"}
    </div>
  );

  const DataCell = ({ label, value, className = "" }: { label: string; value?: string | number; className?: string }) => (
    <div className={`p-2 h-full flex flex-col justify-start ${className}`}>
      <Label text={label} />
      <Value text={value} />
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

  return (
    <Wrapper>
      <div className="max-w-5xl mx-auto my-10 font-sans text-black bg-transparent">
        <table className="w-full border-collapse border-2 border-black table-fixed bg-transparent">
          <tbody>

            {/* --- Header Row --- */}
            <tr>
              <td colSpan={2} className="border-b-2 border-black p-4 w-1/2 align-middle">
                <h1 className="text-2xl font-black uppercase tracking-widest leading-none text-left mb-1">
                  Certificate of Inspection
                </h1>
                <p className="text-[9px] font-bold uppercase tracking-widest">
                  For Import of Products from Organic Production
                </p>
              </td>
              <td colSpan={2} className="border-l-2 border-b-2 border-black p-0 w-1/2 align-top">
                <div className="flex h-full">
                  <div className="w-1/2 border-r border-black flex flex-col justify-center p-3">
                    <Label text="COI Control Number" />
                    <div className="text-lg font-mono font-black">{coiControlNumber || "-"}</div>
                  </div>
                  <div className="w-1/2 flex flex-col justify-center p-3">
                    <Label text="Date of Issue" />
                    <div className="text-sm font-mono font-bold">{issueDate || "-"}</div>
                  </div>
                </div>
              </td>
            </tr>

            {/* --- Parties Row 1: Exporter & Importer --- */}
            <tr>
              <td colSpan={2} className="border border-black p-0 align-top w-1/2">
                <PartyBox
                  title="1. Exporter / Producer"
                  name={exporterName}
                  address={exporterAddress}
                  city={exporterCity}
                  country={exporterCountry}
                  email={exporterEmail}
                />
              </td>
              <td colSpan={2} className="border border-black p-0 align-top w-1/2">
                <PartyBox
                  title="2. Importer / Consignee"
                  name={importerName}
                  address={importerAddress}
                  city={importerCity}
                  country={importerCountry}
                  email={importerEmail}
                />
              </td>
            </tr>

            {/* --- Parties Row 2: Authorities --- */}
            <tr>
              <td colSpan={2} className="border border-black p-0 align-top w-1/2">
                <div className="p-3 h-full flex flex-col justify-start">
                  <Label text="3. Issuing / Inspection Body" />
                  <div className="text-sm font-bold uppercase">{inspectionBody || "-"}</div>
                </div>
              </td>
              <td colSpan={2} className="border border-black p-0 align-top w-1/2">
                <div className="p-3 h-full flex flex-col justify-start">
                  <Label text="4. Endorsing Management Authority" />
                  <div className="text-sm font-bold uppercase">{endorsingAuthority || "-"}</div>
                </div>
              </td>
            </tr>

            {/* --- Routing & Countries --- */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-0">
                <div className="grid grid-cols-4 divide-x divide-black border-b border-black">
                  <DataCell label="Country of Origin" value={originCountry} />
                  <DataCell label="Country of Exportation" value={exportationCountry} />
                  <DataCell label="Destination Country" value={destinationCountry} />
                  <DataCell label="Consignment Dest. Country" value={consignmentDestinationCountry} />
                </div>
              </td>
            </tr>

            {/* --- References & Logistics --- */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-0">
                <div className="grid grid-cols-5 divide-x divide-black">
                  <DataCell label="HAWB Number" value={hawbNumber} />
                  <DataCell label="Commercial Invoice No." value={invoiceNumber} />
                  <DataCell label="Transport Vehicle Reg." value={transportVehicle} />
                  <DataCell label="Container Number" value={containerNumber} />
                  <DataCell label="Net Weight" value={inspectedNetWeight ? `${inspectedNetWeight} ${netWeightUnit || ""}` : undefined} />
                </div>
              </td>
            </tr>

            {/* --- Goods Header --- */}
            <tr>
              <td colSpan={4} className="border-t-2 border-b border-black p-2 bg-black text-white text-center">
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Description of Certified Organic Products
                </span>
              </td>
            </tr>

            {/* --- Goods Table --- */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-0">
                <table className="w-full border-collapse table-fixed">
                  <thead>
                    <tr>
                      <th className="border-b border-r border-black p-2 w-2/12 text-center"><Label text="HS Code" /></th>
                      <th className="border-b border-r border-black p-2 w-3/12 text-center"><Label text="Batch / Product ID" /></th>
                      <th className="border-b border-black p-2 w-7/12 text-left"><Label text="Description of Goods" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    {goods.length > 0 ? (
                      goods.map((item, idx) => (
                        <tr key={idx}>
                          <td className="border-b border-r border-black p-2 align-top text-center">
                            <Value text={item.hsCode} />
                          </td>
                          <td className="border-b border-r border-black p-2 align-top text-center">
                            <Value text={item.productIdentifier} />
                          </td>
                          <td className="border-b border-black p-2 align-top text-xs uppercase font-bold leading-tight">
                            {item.description || "-"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={3} className="border-b border-black p-8 text-center text-xs italic uppercase">
                          No Products Declared
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