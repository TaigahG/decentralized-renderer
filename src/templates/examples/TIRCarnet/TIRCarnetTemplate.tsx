import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { TIRCarnet, TIRCarnetSchema } from "./types";

export const TIRCarnetTemplate: FunctionComponent<
  TemplateProps<TIRCarnetSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as TIRCarnet;

  const {
    // --- Document & Shipment Identifiers ---
    documentIdentifier: tirNumber,
    customsDeclarationDocument: declarationRef,
    approvalNumber,
    permitNumber,

    // --- Dates ---
    issueDate,
    despatchDate,
    permitExpiryDate,

    // --- Parties ---
    carrier: {
      name: carrierName,
      addressLine: carrierAddress,
      city: carrierCity,
      country: carrierCountry,
    } = {},
    consignee: {
      name: receiverName,
      addressLine: receiverAddress,
    } = {},
    consignor: {
      name: senderName,
      addressLine: senderAddress,
    } = {},
    managementAuthority: {
      name: guaranteeingAssociation,
    } = {},

    // --- Locations & Routing ---
    consignmentRoute,
    customsOfficeOfEntryName: officeOfDeparture,
    customsOfficeOfDestinationName: officeOfDestination,
    consignmentExitCustomsOfficeName: officeOfExit,
    destinationCountry,

    // --- Financials & Weights ---
    customsValue,
    customsValueCurrency,
    goodsGrossWeight: cargoWeight,
    goodsGrossWeightUnit,
    transportMeansGrossWeight: totalVehicleWeight,

    // --- Goods Details ---
    goods = [],

    // --- Transport & Equipment ---
    transportMeansIdentifier: vesselOrVehicleName,
    vehicleRegistrationNumber: truckPlate,
    transportEquipmentIdentifier: containerNumber,
    sealIdentifier,

    // --- Certification ---
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
      <div className="max-w-5xl mx-auto my-10 font-sans text-black bg-transparent">
        
        {/* Bulletproof HTML Table for strict border enforcement */}
        <table className="w-full border-collapse border-2 border-black table-fixed">
          <tbody>
            
            {/* --- Header Row --- */}
            <tr>
              <td colSpan={2} className="border border-black p-6 align-top w-2/3">
                <h1 className="text-3xl font-black uppercase tracking-widest leading-none mb-2">
                  TIR Carnet
                </h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
                  International Transport of Goods under Cover of TIR Carnets
                </p>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-4 border-b border-black text-center">
                  <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
                    TIR Carnet Number
                  </div>
                  <div className="text-2xl font-mono font-black border border-black p-2 inline-block tracking-widest">
                    {tirNumber || "DRAFT"}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-[10px] font-black uppercase tracking-widest text-black mb-1">Issue Date</div>
                  <div className="text-sm font-mono font-bold">{issueDate || "-"}</div>
                </div>
              </td>
            </tr>

            {/* --- Issuing Association & Approvals Row --- */}
            <tr>
              <td className="border border-black p-4 align-top w-1/3">
                <PartyCellContent 
                  title="1. Guaranteeing Association"
                  name={guaranteeingAssociation}
                />
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Vehicle Approval Number</div>
                  <div className="text-sm font-mono font-bold">{approvalNumber || "-"}</div>
                </div>
                <div className="p-3 border-b border-black">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Permit Number</div>
                  <div className="text-xs font-mono font-bold">{permitNumber || "-"}</div>
                </div>
                <div className="p-3">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Declaration Ref / Validity</div>
                  <div className="text-xs font-mono font-bold">{declarationRef || "-"}</div>
                  <div className="text-[10px] mt-1 uppercase">Expires: {permitExpiryDate || "-"}</div>
                </div>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                <div className="p-4 flex flex-col h-full">
                  <div className="text-[9px] uppercase font-bold tracking-widest mb-2">Itinerary / Consignment Route</div>
                  <div className="text-xs font-bold uppercase leading-relaxed">
                    {consignmentRoute || "-"}
                  </div>
                </div>
              </td>
            </tr>

            {/* --- Consignor, Consignee & Carrier Row --- */}
            <tr>
              <td className="border border-black p-4 align-top w-1/3">
                <PartyCellContent 
                  title="2. Consignor / Sender"
                  name={senderName}
                  address={senderAddress}
                />
              </td>
              <td className="border border-black p-4 align-top w-1/3">
                <PartyCellContent 
                  title="3. Consignee / Receiver"
                  name={receiverName}
                  address={receiverAddress}
                />
              </td>
              <td className="border border-black p-4 align-top w-1/3">
                <PartyCellContent 
                  title="4. Carrier / Holder of the Carnet"
                  name={carrierName}
                  address={carrierAddress}
                  city={carrierCity}
                  country={carrierCountry}
                />
              </td>
            </tr>

            {/* --- Transport & Route Details Row --- */}
            <tr>
              <td className="border border-black p-0 align-top w-1/3">
                 <div className="p-3 border-b border-black">
                   <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Customs Office of Departure</div>
                   <div className="text-xs font-bold uppercase">{officeOfDeparture || "-"}</div>
                 </div>
                 <div className="p-3 border-b border-black">
                   <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Customs Office of Destination</div>
                   <div className="text-xs font-bold uppercase">{officeOfDestination || "-"}</div>
                 </div>
                 <div className="p-3">
                   <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Customs Office of Exit / Country</div>
                   <div className="text-xs font-bold uppercase">{officeOfExit || "-"} <br/> {destinationCountry || "-"}</div>
                 </div>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                 <div className="p-3 border-b border-black">
                   <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Vehicle Reg No. / Vessel Name</div>
                   <div className="text-xs font-mono font-bold">{truckPlate || vesselOrVehicleName || "-"}</div>
                 </div>
                 <div className="p-3 border-b border-black">
                   <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Container Number</div>
                   <div className="text-xs font-mono font-bold">{containerNumber || "-"}</div>
                 </div>
                 <div className="p-3 border-b border-black">
                   <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Total Vehicle Weight</div>
                   <div className="text-xs font-mono font-bold">{totalVehicleWeight ? `${totalVehicleWeight} KGM` : "-"}</div>
                 </div>
                 <div className="p-3">
                   <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Despatch Date</div>
                   <div className="text-xs font-mono font-bold">{despatchDate || "-"}</div>
                 </div>
              </td>
              <td className="border border-black p-0 align-top w-1/3">
                 <div className="p-3 border-b border-black">
                   <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Customs Value</div>
                   <div className="text-xs font-mono font-bold">{customsValue ? `${customsValueCurrency || ""} ${customsValue}` : "-"}</div>
                 </div>
                 <div className="p-3 border-b border-black">
                   <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Total Cargo Gross Weight</div>
                   <div className="text-xs font-mono font-bold">{cargoWeight ? `${cargoWeight} ${goodsGrossWeightUnit || ""}` : "-"}</div>
                 </div>
                 <div className="p-3">
                   <div className="text-[9px] uppercase font-bold tracking-widest mb-1">Customs Seals Applied</div>
                   <div className="text-sm font-mono font-black">{sealIdentifier || "NONE"}</div>
                 </div>
              </td>
            </tr>

            {/* --- Goods Table Row --- */}
            <tr>
              <td colSpan={3} className="border border-black p-0">
                <table className="w-full border-collapse table-fixed">
                  <thead>
                    <tr>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-1/12">
                        Item
                      </th>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-left w-5/12">
                        Description of Goods & Marks
                      </th>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-2/12">
                        HS Code
                      </th>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-2/12">
                        Packages
                      </th>
                      <th className="border-b border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-2/12">
                        Gross Wt.
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
                            {item.shippingMarks && <div className="font-mono text-[10px] mb-1">{item.shippingMarks}</div>}
                            {item.description || "-"}
                            {item.consignmentSummaryDescription && <div className="font-serif italic mt-1 text-[10px]">{item.consignmentSummaryDescription}</div>}
                          </td>
                          <td className="border-b border-r border-black p-3 text-center text-xs font-mono font-bold align-top">
                            {item.hsCode || "-"}
                          </td>
                          <td className="border-b border-r border-black p-3 text-center text-sm font-black align-top">
                            {item.numberOfPackages || "-"}
                          </td>
                          <td className="border-b border-black p-3 text-center text-xs font-mono align-top">
                            {/* Assuming goodsGrossWeight is mapped at the item level if available, fallback to empty */}
                            -
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