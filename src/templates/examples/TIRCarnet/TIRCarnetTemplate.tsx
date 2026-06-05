import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { TIRCarnet, TIRCarnetSchema, TIRParty } from "./types";

export const TIRCarnetTemplate: FunctionComponent<
  TemplateProps<TIRCarnetSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as TIRCarnet;

  const {
    // --- Document & Shipment Identifiers ---
    documentIdentifier,
    bookingReferenceNumber,
    customsDeclarationDocument,
    goodsDeclarationNumber,
    freightForwarderReferenceNumber,
    goodsItemSequenceIdentifier,
    approvalNumber,
    permitNumber,

    // --- Dates ---
    issueDate,
    despatchDate,
    permitExpiryDate,

    // --- Parties ---
    carrier = {},
    consignee = {},
    insuredParty = {},
    freightForwarder = {},
    consignor = {},
    managementAuthority = {},

    // --- Other Named Entities ---
    transportEquipmentOperatorName,
    permitIssuerName,

    // --- Locations & Routing ---
    consignmentRoute,
    customsOfficeOfDestinationName,
    customsOfficeOfEntryName,
    consignmentExitCustomsOfficeName,
    destinationCountry,
    originalLoadingLocation,
    consignmentDestinationCountry,
    exportationCountry,
    arrivalLocation,
    baseportUnloadingLocation,
    placeOfIssue,

    // --- Financials & Weights ---
    customsValue,
    customsValueCurrency,
    goodsGrossWeight,
    goodsGrossWeightUnit,
    quantityOrdered,
    transportMeansGrossWeight,
    transportMeansGrossWeightUnit,

    // --- Goods Details ---
    goods = [],

    // --- Transport & Equipment ---
    conveyanceReferenceNumber,
    modeOfTransport,
    containerSize,
    containerType,
    transportMeansTypeCode,
    transportMeansIdentifier,
    vehicleRegistrationNumber,
    transportEquipmentIdentifier,
    sealIdentifier,

    // --- Additional Text ---
    certificationText,
  } = data;

  // --- Helpers ---
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

  const PartyBox = ({ title, party }: { title: string; party: TIRParty }) => (
    <div className="p-3 h-full flex flex-col">
      <Label text={title} />
      <div className="text-sm font-bold uppercase mb-1">{party.name || "-"}</div>
      <div className="text-xs text-black leading-snug flex-grow">
        {party.addressLine && <div>{party.addressLine}</div>}
        {[party.city, party.country].filter(Boolean).join(", ")}
      </div>
      {party.email && (
        <div className="text-[10px] font-mono mt-1 pt-1 border-t border-black/20">
          {party.email}
        </div>
      )}
    </div>
  );

  const DataCell = ({ label, value }: { label: string; value?: string | number }) => (
    <div className="p-2 border-b border-black last:border-b-0 h-full">
      <Label text={label} />
      <Value text={value} />
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-5xl mx-auto my-10 font-sans text-black">
        {/* Main Outer Table */}
        <table className="w-full border-collapse border-2 border-black table-fixed">
          <tbody>
            {/* Header Row */}
            <tr>
              <td colSpan={2} className="border-b-2 border-black p-4 w-1/2">
                <h1 className="text-3xl font-black uppercase tracking-widest leading-none text-left">
                  TIR CARNET
                </h1>
                <p className="text-[10px] font-bold uppercase tracking-widest mt-1">
                  International Transport of Goods under Cover of TIR Carnets
                </p>
              </td>
              <td colSpan={2} className="border-l-2 border-b-2 border-black p-0 w-1/2 align-top">
                <div className="flex h-full">
                  <div className="w-1/2 border-r border-black flex flex-col justify-center p-3">
                    <Label text="Carnet Number (Document ID)" />
                    <div className="text-xl font-mono font-black">{documentIdentifier || "-"}</div>
                  </div>
                  <div className="w-1/2 flex flex-col">
                    <DataCell label="Date of Issue" value={issueDate} />
                    <DataCell label="Place of Issue" value={placeOfIssue} />
                  </div>
                </div>
              </td>
            </tr>

            {/* Row 2: Authorities & Dates */}
            <tr>
              <td colSpan={2} className="border border-black p-0 align-top">
                <PartyBox title="Issuing / Management Authority" party={managementAuthority} />
              </td>
              <td colSpan={2} className="border border-black p-0 align-top">
                <div className="grid grid-cols-2 h-full">
                  <div className="border-r border-black">
                    <DataCell label="Permit Number" value={permitNumber} />
                    <DataCell label="Permit Issuer Name" value={permitIssuerName} />
                  </div>
                  <div>
                    <DataCell label="Approval Number" value={approvalNumber} />
                    <DataCell label="Permit Expiry Date" value={permitExpiryDate} />
                  </div>
                </div>
              </td>
            </tr>

            {/* Row 3: Consignor & Consignee */}
            <tr>
              <td colSpan={2} className="border border-black p-0 align-top h-32">
                <PartyBox title="Consignor (Sender)" party={consignor} />
              </td>
              <td colSpan={2} className="border border-black p-0 align-top h-32">
                <PartyBox title="Consignee (Receiver)" party={consignee} />
              </td>
            </tr>

            {/* Row 4: Carrier, Insured & Freight Forwarder */}
            <tr>
              <td colSpan={2} className="border border-black p-0 align-top">
                <PartyBox title="Carrier" party={carrier} />
              </td>
              <td colSpan={2} className="border border-black p-0 align-top">
                <div className="grid grid-cols-2 h-full">
                  <div className="border-r border-black">
                    <PartyBox title="Insured Party" party={insuredParty} />
                  </div>
                  <div>
                    <PartyBox title="Freight Forwarder" party={freightForwarder} />
                  </div>
                </div>
              </td>
            </tr>

            {/* Row 5: Routing & Customs Offices (Complex Grid) */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-0 bg-transparent">
                <div className="grid grid-cols-4 divide-x divide-black border-b border-black">
                  <DataCell label="Customs Office of Entry" value={customsOfficeOfEntryName} />
                  <DataCell label="Customs Office of Destination" value={customsOfficeOfDestinationName} />
                  <DataCell label="Consignment Exit Customs" value={consignmentExitCustomsOfficeName} />
                  <DataCell label="Consignment Route" value={consignmentRoute} />
                </div>
                <div className="grid grid-cols-4 divide-x divide-black border-b border-black">
                  <DataCell label="Original Loading Location" value={originalLoadingLocation} />
                  <DataCell label="Arrival Location" value={arrivalLocation} />
                  <DataCell label="Baseport Unloading" value={baseportUnloadingLocation} />
                  <DataCell label="Exportation Country" value={exportationCountry} />
                </div>
                <div className="grid grid-cols-3 divide-x divide-black">
                  <DataCell label="Destination Country" value={destinationCountry} />
                  <DataCell label="Consignment Dest. Country" value={consignmentDestinationCountry} />
                  <DataCell label="Despatch Date" value={despatchDate} />
                </div>
              </td>
            </tr>

            {/* Row 6: Transport Means & Equipment */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-0">
                <div className="grid grid-cols-4 divide-x divide-black border-b border-black">
                  <DataCell label="Transport Identifier / Vessel Name" value={transportMeansIdentifier} />
                  <DataCell label="Vehicle Registration / Plates" value={vehicleRegistrationNumber} />
                  <DataCell label="Mode of Transport" value={modeOfTransport} />
                  <DataCell label="Transport Means Type Code" value={transportMeansTypeCode} />
                </div>
                <div className="grid grid-cols-5 divide-x divide-black">
                  <DataCell label="Container Number" value={transportEquipmentIdentifier} />
                  <DataCell label="Container Size" value={containerSize} />
                  <DataCell label="Container Type" value={containerType} />
                  <DataCell label="Conveyance Reference No." value={conveyanceReferenceNumber} />
                  <DataCell label="Transport Equip. Operator" value={transportEquipmentOperatorName} />
                </div>
              </td>
            </tr>

            {/* Row 7: Financials & References */}
            <tr>
              <td colSpan={4} className="border border-black p-0">
                <div className="grid grid-cols-5 divide-x divide-black border-b border-black">
                  <DataCell label="Customs Value" value={customsValue ? `${customsValue} ${customsValueCurrency || ""}` : undefined} />
                  <DataCell label="Goods Gross Wt." value={goodsGrossWeight ? `${goodsGrossWeight} ${goodsGrossWeightUnit || ""}` : undefined} />
                  <DataCell label="Vehicle Gross Wt." value={transportMeansGrossWeight ? `${transportMeansGrossWeight} ${transportMeansGrossWeightUnit || ""}` : undefined} />
                  <DataCell label="Quantity Ordered" value={quantityOrdered} />
                  <DataCell label="Customs Seal ID" value={sealIdentifier} />
                </div>
                <div className="grid grid-cols-5 divide-x divide-black">
                  <DataCell label="Booking Ref. Number" value={bookingReferenceNumber} />
                  <DataCell label="Customs Declaration Doc." value={customsDeclarationDocument} />
                  <DataCell label="Goods Declaration No." value={goodsDeclarationNumber} />
                  <DataCell label="Forwarder Ref. No." value={freightForwarderReferenceNumber} />
                  <DataCell label="Goods Sequence ID" value={goodsItemSequenceIdentifier} />
                </div>
              </td>
            </tr>

            {/* Row 8: Goods Details Table */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-0">
                <table className="w-full border-collapse table-fixed">
                  <thead>
                    <tr>
                      <th className="border-b border-r border-black p-2 w-2/12 text-left"><Label text="Marks / Numbers" /></th>
                      <th className="border-b border-r border-black p-2 w-1/12 text-center"><Label text="Packages" /></th>
                      <th className="border-b border-r border-black p-2 w-4/12 text-left"><Label text="Description of Goods" /></th>
                      <th className="border-b border-r border-black p-2 w-2/12 text-left"><Label text="Consignment Summary" /></th>
                      <th className="border-b border-r border-black p-2 w-1/12 text-center"><Label text="HS Code" /></th>
                      <th className="border-b border-r border-black p-2 w-1/12 text-center"><Label text="Product ID" /></th>
                      <th className="border-b border-black p-2 w-1/12 text-center"><Label text="Specimen" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    {goods.length > 0 ? (
                      goods.map((item, idx) => (
                        <tr key={idx}>
                          <td className="border-b border-r border-black p-2 align-top"><Value text={item.shippingMarks} /></td>
                          <td className="border-b border-r border-black p-2 align-top text-center"><Value text={item.numberOfPackages} /></td>
                          <td className="border-b border-r border-black p-2 align-top text-xs uppercase leading-tight font-bold">{item.description || "-"}</td>
                          <td className="border-b border-r border-black p-2 align-top"><Value text={item.consignmentSummaryDescription} /></td>
                          <td className="border-b border-r border-black p-2 align-top text-center"><Value text={item.hsCode} /></td>
                          <td className="border-b border-r border-black p-2 align-top text-center"><Value text={item.productIdentifier} /></td>
                          <td className="border-b border-black p-2 align-top text-center"><Value text={item.specimenDescription} /></td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="border-b border-black p-8 text-center text-xs italic uppercase">
                          No Goods Declared
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