import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { PhytosanitaryCertificate, PhytosanitaryCertificateSchema, PhytoParty } from "./types";

export const PhytosanitaryCertificateTemplate: FunctionComponent<
  TemplateProps<PhytosanitaryCertificateSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as PhytosanitaryCertificate;

  const {
    // --- Document & Shipment Identifiers ---
    documentIdentifier: certificateNumber,
    approvalNumber,
    permitNumber,

    // --- Dates ---
    issueDate,
    actualDepartureDate,
    permitExpiryDate,

    // --- Parties ---
    consignee: {
      name: buyerName,
      addressLine: buyerAddress,
      city: buyerCity,
      country: buyerCountry,
      email: buyerEmail,
    } = {},
    consignor: {
      name: exporterName,
      addressLine: exporterAddress,
      city: exporterCity,
      country: exporterCountry,
      email: exporterEmail,
    } = {},

    // --- Issuance ---
    permitIssuerName: nppoAuthority,
    placeOfIssue,

    // --- Locations & Routing ---
    destinationCountry,
    originCountry,
    regionOfOrigin,
    originalLoadingLocation,
    arrivalLocation,
    baseportUnloadingLocation,
    transitLocation,

    // --- Weights, Quantities & Conditions ---
    grossWeight,
    grossWeightUnit,
    netWeight,
    netWeightUnit,
    quantity,
    transportTemperature: coldChainTemp,
    transportTemperatureUnit,

    // --- Goods Details ---
    goods = [],

    // --- Transport Details ---
    conveyanceReferenceNumber: voyageOrFlightNumber,
    modeOfTransport,
    transportMeansIdentifier: vesselName,
    vehicleRegistrationNumber,
    transportEquipmentIdentifier: containerNumber,
    sealIdentifier,

    // --- Declarations ---
    certificationText,
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
    <div className={`p-2 border-b border-black last:border-b-0 h-full flex flex-col justify-start ${className}`}>
      <Label text={label} />
      <Value text={value} />
    </div>
  );

  const PartyBox = ({ title, name, address, city, country, email }: any) => (
    <div className="p-3 h-full flex flex-col">
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
      <div className="max-w-5xl mx-auto my-10 font-sans text-black">
        <table className="w-full border-collapse border-2 border-black table-fixed bg-transparent">
          <tbody>
            
            {/* --- Row 1: Header --- */}
            <tr>
              <td colSpan={2} className="border-b-2 border-black p-4 w-1/2 align-middle">
                <h1 className="text-2xl font-black uppercase tracking-widest leading-none text-left mb-1">
                  Phytosanitary Certificate
                </h1>
                <p className="text-[9px] font-bold uppercase tracking-widest">
                  Plant Protection Organization
                </p>
              </td>
              <td colSpan={2} className="border-l-2 border-b-2 border-black p-0 w-1/2 align-top">
                <div className="flex h-full">
                  <div className="w-1/2 border-r border-black flex flex-col justify-center p-3">
                    <Label text="Certificate Number" />
                    <div className="text-lg font-mono font-black">{certificateNumber || "-"}</div>
                  </div>
                  <div className="w-1/2 flex flex-col">
                    <DataCell label="Place of Issue" value={placeOfIssue} />
                    <DataCell label="Date of Issue" value={issueDate} />
                  </div>
                </div>
              </td>
            </tr>

            {/* --- Row 2: Parties & Authorities --- */}
            <tr>
              <td colSpan={2} className="border border-black p-0 align-top w-1/2">
                <PartyBox 
                  title="1. Name and Address of Exporter" 
                  name={exporterName} 
                  address={exporterAddress} 
                  city={exporterCity} 
                  country={exporterCountry} 
                  email={exporterEmail} 
                />
              </td>
              <td colSpan={2} className="border border-black p-0 align-top w-1/2">
                 <div className="p-3 h-full flex flex-col justify-start border-b border-black">
                    <Label text="2. Plant Protection Organization of (NPPO)" />
                    <div className="text-sm font-bold uppercase">{nppoAuthority || "-"}</div>
                </div>
              </td>
            </tr>

            {/* --- Row 3: Consignee & Permits --- */}
            <tr>
              <td colSpan={2} className="border border-black p-0 align-top h-32 w-1/2">
                <PartyBox 
                  title="3. Declared Name and Address of Consignee" 
                  name={buyerName} 
                  address={buyerAddress} 
                  city={buyerCity} 
                  country={buyerCountry} 
                  email={buyerEmail} 
                />
              </td>
              <td colSpan={2} className="border border-black p-0 align-top w-1/2">
                <div className="grid grid-cols-2 h-full">
                  <div className="border-r border-black">
                    <DataCell label="Permit Number" value={permitNumber} />
                    <DataCell label="Approval Number" value={approvalNumber} />
                  </div>
                  <div>
                    <DataCell label="Permit Expiry Date" value={permitExpiryDate} />
                    <DataCell label="Actual Departure Date" value={actualDepartureDate} />
                  </div>
                </div>
              </td>
            </tr>

            {/* --- Row 4: Locations & Routing --- */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-0">
                <div className="grid grid-cols-4 divide-x divide-black border-b border-black">
                  <DataCell label="Country of Origin" value={originCountry} />
                  <DataCell label="Region of Origin" value={regionOfOrigin} />
                  <DataCell label="Country of Destination" value={destinationCountry} />
                  <DataCell label="Transit Location" value={transitLocation} />
                </div>
                <div className="grid grid-cols-3 divide-x divide-black">
                  <DataCell label="Original Loading Location" value={originalLoadingLocation} />
                  <DataCell label="Arrival Location (Port of Entry)" value={arrivalLocation} />
                  <DataCell label="Baseport Unloading Location" value={baseportUnloadingLocation} />
                </div>
              </td>
            </tr>

            {/* --- Row 5: Transport Means --- */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-0">
                <div className="grid grid-cols-5 divide-x divide-black">
                  <DataCell label="Mode of Transport" value={modeOfTransport} />
                  <DataCell label="Conveyance Ref (Voyage/Flight)" value={voyageOrFlightNumber} />
                  <DataCell label="Transport Name (Vessel)" value={vesselName} />
                  <DataCell label="Vehicle Registration" value={vehicleRegistrationNumber} />
                  <DataCell label="Container Number" value={containerNumber} />
                </div>
              </td>
            </tr>

            {/* --- Row 6: Weights, Temp & Seal --- */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-0">
                <div className="grid grid-cols-5 divide-x divide-black">
                  <DataCell label="Gross Weight" value={grossWeight ? `${grossWeight} ${grossWeightUnit || ""}` : undefined} />
                  <DataCell label="Net Weight" value={netWeight ? `${netWeight} ${netWeightUnit || ""}` : undefined} />
                  <DataCell label="Quantity" value={quantity} />
                  <DataCell label="Required Temp" value={coldChainTemp ? `${coldChainTemp} ${transportTemperatureUnit || ""}` : undefined} />
                  <DataCell label="Official Seal No." value={sealIdentifier} />
                </div>
              </td>
            </tr>

            {/* --- Row 7: Goods Table --- */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-0">
                <table className="w-full border-collapse table-fixed">
                  <thead>
                    <tr>
                      <th className="border-b border-r border-black p-2 w-2/12 text-left"><Label text="Marks / Numbers" /></th>
                      <th className="border-b border-r border-black p-2 w-2/12 text-center"><Label text="Number & Type of Packages" /></th>
                      <th className="border-b border-r border-black p-2 w-4/12 text-left"><Label text="Name of Produce & Botanical Name" /></th>
                      <th className="border-b border-r border-black p-2 w-2/12 text-center"><Label text="HS Code" /></th>
                      <th className="border-b border-black p-2 w-2/12 text-center"><Label text="Product ID" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    {goods.length > 0 ? (
                      goods.map((item, idx) => (
                        <tr key={idx}>
                          <td className="border-b border-r border-black p-2 align-top"><Value text={item.shippingMarks} /></td>
                          <td className="border-b border-r border-black p-2 align-top text-center">
                            <Value text={`${item.numberOfPackages || "-"} ${item.typeOfPackaging || ""}`} />
                          </td>
                          <td className="border-b border-r border-black p-2 align-top">
                            <div className="text-xs uppercase leading-tight font-bold mb-1">{item.description || "-"}</div>
                            {item.animalOrPlantScientificName && (
                              <div className="text-[10px] italic font-serif text-black">{item.animalOrPlantScientificName}</div>
                            )}
                          </td>
                          <td className="border-b border-r border-black p-2 align-top text-center"><Value text={item.hsCode} /></td>
                          <td className="border-b border-black p-2 align-top text-center"><Value text={item.productIdentifier} /></td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="border-b border-black p-8 text-center text-xs italic uppercase">
                          No Plant Products Declared
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