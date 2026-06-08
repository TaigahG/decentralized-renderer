import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { ATACarnet, ATACarnetSchema } from "./types";

export const ATACarnetTemplate: FunctionComponent<
  TemplateProps<ATACarnetSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as ATACarnet;

  const {
    // --- Document & Reference Identifiers ---
    customsDeclarationDocumentReference: declarationRef,
    goodsDeclarationNumber,
    permitNumber: carnetNumber,

    // --- Crucial Validity Dates ---
    issueDate,
    actualArrivalDate,
    permitExpiryDate: carnetExpiryDate,

    // --- Parties & Authorities ---
    importer = {},
    exporter = {},
    carrier = {},
    freightForwarder = {},
    permitIssuer = {},
    managementAuthority = {},
    transportEquipmentOperatorName: driverOrOperator,

    // --- Customs Offices ---
    customsOfficeOfDestination,
    customsOfficeOfEntry: officeOfEntry,
    customsOfficeOfTransit: officeOfTransit,
    consignmentExitCustomsOffice: officeOfExit,

    // --- Geography & Routing ---
    destinationCountry,
    consignmentDestinationCountry,
    exportationCountry,
    originCountry,
    placeOfIssue,

    // --- Terms & Declarations ---
    insuranceCondition,
    certificationText,
    natureOfTransaction: transactionType,
    typeOfTransitGuarantee,

    // --- Financial Values & Currencies ---
    monetaryAmount,
    monetaryAmountCurrency,
    insuredValueAmount,
    insuredValueAmountCurrency,
    customsValue,
    customsValueCurrency,
    unitPrice,
    unitPriceCurrency,
    goodsValue,
    goodsValueCurrency,
    statisticalValue,

    // --- Weights & Dimensions ---
    grossWeight,
    grossWeightUnit,
    netWeight,
    netWeightUnit,
    quantityOrdered,
    quantity,
    packageLength,
    packageLengthUnit,
    packageWidth,
    packageWidthUnit,

    // --- Goods Details ---
    goods = [],

    // --- Transport & Equipment ---
    conveyanceReferenceNumber: flightOrVoyageRef,
    modeOfTransport,
    transportMeansIdentifier: transportVehicleName,
    vehicleRegistrationNumber: plateNumber,
    transportEquipmentIdentifier: containerNumber,
    transportMeansAtBorderCrossing,
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

  const PartyBox = ({ title, party }: { title: string; party: any }) => (
    <div className="p-3 h-full flex flex-col border-b border-black last:border-b-0">
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

  return (
    <Wrapper>
      <div className="max-w-5xl mx-auto my-10 font-sans text-black bg-transparent">
        <table className="w-full border-collapse border-2 border-black table-fixed bg-transparent">
          <tbody>
            
            {/* --- Header Row --- */}
            <tr>
              <td colSpan={2} className="border-b-2 border-black p-4 w-1/2 align-middle">
                <h1 className="text-3xl font-black tracking-widest leading-none text-left mb-1">
                  A.T.A. CARNET
                </h1>
                <p className="text-[9px] font-bold uppercase tracking-widest">
                  For Temporary Admission of Goods
                </p>
              </td>
              <td colSpan={2} className="border-l-2 border-b-2 border-black p-0 w-1/2 align-top">
                <div className="flex h-full">
                  <div className="w-1/2 border-r border-black flex flex-col justify-center p-3">
                    <Label text="A. Carnet Number" />
                    <div className="text-xl font-mono font-black">{carnetNumber || "-"}</div>
                  </div>
                  <div className="w-1/2 flex flex-col">
                    <div className="border-b border-black flex-grow p-2">
                       <Label text="B. Valid Until" />
                       <Value text={carnetExpiryDate} />
                    </div>
                    <div className="flex-grow p-2">
                       <Label text="Date & Place of Issue" />
                       <Value text={[issueDate, placeOfIssue].filter(Boolean).join(" - ")} />
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            {/* --- Issuance Authorities --- */}
            <tr>
              <td colSpan={2} className="border border-black p-0 align-top w-1/2">
                <PartyBox title="C. Issuing Association (Permit Issuer)" party={permitIssuer} />
              </td>
              <td colSpan={2} className="border border-black p-0 align-top w-1/2">
                <PartyBox title="Management Authority (Customs)" party={managementAuthority} />
              </td>
            </tr>

            {/* --- Core Parties --- */}
            <tr>
              <td colSpan={2} className="border border-black p-0 align-top w-1/2 h-32">
                <PartyBox title="D. Holder / Exporter" party={exporter} />
              </td>
              <td colSpan={2} className="border border-black p-0 align-top w-1/2 h-32">
                <PartyBox title="E. Represented By / Importer" party={importer} />
              </td>
            </tr>

            {/* --- Logistics Parties --- */}
            <tr>
              <td colSpan={2} className="border border-black p-0 align-top w-1/2">
                <div className="grid grid-cols-2 h-full">
                  <div className="border-r border-black">
                    <PartyBox title="Carrier" party={carrier} />
                  </div>
                  <div>
                    <PartyBox title="Freight Forwarder" party={freightForwarder} />
                  </div>
                </div>
              </td>
              <td colSpan={2} className="border border-black p-0 align-top w-1/2">
                <div className="grid grid-cols-2 h-full">
                  <div className="border-r border-black">
                    <DataCell label="Transport Equipment Operator" value={driverOrOperator} />
                  </div>
                  <div>
                    <DataCell label="Nature of Transaction (Intended Use)" value={transactionType} />
                  </div>
                </div>
              </td>
            </tr>

            {/* --- Customs Routing --- */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-0">
                <div className="grid grid-cols-4 divide-x divide-black border-b border-black">
                  <DataCell label="Origin Country" value={originCountry} />
                  <DataCell label="Exportation Country" value={exportationCountry} />
                  <DataCell label="Destination Country" value={destinationCountry} />
                  <DataCell label="Consignment Dest. Country" value={consignmentDestinationCountry} />
                </div>
                <div className="grid grid-cols-4 divide-x divide-black border-b border-black">
                  <DataCell label="Customs Office of Entry" value={officeOfEntry} />
                  <DataCell label="Consignment Exit Customs" value={officeOfExit} />
                  <DataCell label="Customs Office of Transit" value={officeOfTransit} />
                  <DataCell label="Customs Office of Destination" value={customsOfficeOfDestination} />
                </div>
                <div className="grid grid-cols-3 divide-x divide-black">
                  <DataCell label="Customs Declaration Ref" value={declarationRef} />
                  <DataCell label="Goods Declaration No." value={goodsDeclarationNumber} />
                  <DataCell label="Actual Arrival Date" value={actualArrivalDate} />
                </div>
              </td>
            </tr>

            {/* --- Transport & Equipment --- */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-0">
                <div className="grid grid-cols-6 divide-x divide-black">
                  <DataCell label="Mode" value={modeOfTransport} />
                  <DataCell label="Conveyance Ref" value={flightOrVoyageRef} />
                  <DataCell label="Transport Identifier" value={transportVehicleName} />
                  <DataCell label="Vehicle Reg / Plate" value={plateNumber} />
                  <DataCell label="Container No." value={containerNumber} />
                  <DataCell label="Means at Border Crossing" value={transportMeansAtBorderCrossing} />
                </div>
              </td>
            </tr>

            {/* --- Financial Values & Conditions --- */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-0">
                <div className="grid grid-cols-6 divide-x divide-black border-b border-black">
                  <DataCell label="Monetary Amount" value={monetaryAmount ? `${monetaryAmount} ${monetaryAmountCurrency || ""}` : undefined} />
                  <DataCell label="Insured Value" value={insuredValueAmount ? `${insuredValueAmount} ${insuredValueAmountCurrency || ""}` : undefined} />
                  <DataCell label="Customs Value" value={customsValue ? `${customsValue} ${customsValueCurrency || ""}` : undefined} />
                  <DataCell label="Goods Value" value={goodsValue ? `${goodsValue} ${goodsValueCurrency || ""}` : undefined} />
                  <DataCell label="Unit Price" value={unitPrice ? `${unitPrice} ${unitPriceCurrency || ""}` : undefined} />
                  <DataCell label="Statistical Value" value={statisticalValue} />
                </div>
                <div className="grid grid-cols-2 divide-x divide-black">
                  <DataCell label="Insurance Condition" value={insuranceCondition} />
                  <DataCell label="Type of Transit Guarantee" value={typeOfTransitGuarantee} />
                </div>
              </td>
            </tr>

            {/* --- Weights & Dimensions --- */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-0">
                <div className="grid grid-cols-6 divide-x divide-black">
                  <DataCell label="Gross Weight" value={grossWeight ? `${grossWeight} ${grossWeightUnit || ""}` : undefined} />
                  <DataCell label="Net Weight" value={netWeight ? `${netWeight} ${netWeightUnit || ""}` : undefined} />
                  <DataCell label="Quantity Ordered" value={quantityOrdered} />
                  <DataCell label="Actual Quantity" value={quantity} />
                  <DataCell label="Package Length" value={packageLength ? `${packageLength} ${packageLengthUnit || ""}` : undefined} />
                  <DataCell label="Package Width" value={packageWidth ? `${packageWidth} ${packageWidthUnit || ""}` : undefined} />
                </div>
              </td>
            </tr>

            {/* --- Goods Header --- */}
            <tr>
              <td colSpan={4} className="border-t-2 border-b border-black p-2 bg-black text-white text-center">
                <span className="text-[10px] font-black uppercase tracking-widest">
                  General List (Goods Inventory)
                </span>
              </td>
            </tr>

            {/* --- Goods Table --- */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-0">
                <table className="w-full border-collapse table-fixed">
                  <thead>
                    <tr>
                      <th className="border-b border-r border-black p-2 w-2/12 text-left"><Label text="Marks & Nos." /></th>
                      <th className="border-b border-r border-black p-2 w-1/12 text-center"><Label text="Packages" /></th>
                      <th className="border-b border-r border-black p-2 w-3/12 text-left"><Label text="Consignment Summary" /></th>
                      <th className="border-b border-black p-2 w-6/12 text-left"><Label text="Description of Goods" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    {goods.length > 0 ? (
                      goods.map((item, idx) => (
                        <tr key={idx}>
                          <td className="border-b border-r border-black p-2 align-top text-xs font-mono font-bold text-black break-words">
                            {item.shippingMarks || "-"}
                          </td>
                          <td className="border-b border-r border-black p-2 align-top text-center text-xs font-mono font-bold text-black break-words">
                            {item.numberOfPackages || "-"}
                          </td>
                          <td className="border-b border-r border-black p-2 align-top text-xs font-bold uppercase text-black break-words">
                            {item.consignmentSummaryDescription || "-"}
                          </td>
                          <td className="border-b border-black p-2 align-top text-xs uppercase leading-tight text-black break-words">
                            {item.description || "-"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="border-b border-black p-8 text-center text-xs italic uppercase">
                          No Goods Declared in General List
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