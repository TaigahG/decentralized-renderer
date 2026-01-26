import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { AirWaybill, AirWaybillSchema } from "./types";

export const AirWaybillTemplate: FunctionComponent<
  TemplateProps<AirWaybillSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as AirWaybill;

  const {
    mawbNumber,
    airlinePrefix,
    serialNumber,
    hawbNumber,
    issueDate,
    shipper: {
      name: shipperName,
      address: shipperAddress,
      city: shipperCity,
      contactPerson: shipperContact,
      accountNumber: shipperAccountNumber,
    } = {},
    consignee: {
      name: consigneeName,
      address: consigneeAddress,
      city: consigneeCity,
      contactPerson: consigneeContact,
      accountNumber: consigneeAccountNumber,
    } = {},
    issuingCarrierAgent: {
      name: agentName,
      iataCode: agentIata,
      address: agentAddress,
      accountNumber: agentAccountNumber,
    } = {},
    routing: {
      airportOfDeparture,
      airportOfDestination,
      requestedFlight,
      requestedDate,
      routingDestination = [],
    } = {},
    accounting: {
      currency,
      chargeCode,
      valueForCarriage,
      valueForCustoms,
      insuranceAmount,
    } = {},
    goodsDetails = [],
    handlingInformation: {
      specialServiceRequest = [],
      handlingInformationText,
    } = {},
    chargesSummary: {
      weightCharge,
      valuationCharge,
      taxCharges,
      totalOtherChargesDueAgent,
      totalOtherChargesDueCarrier,
      totalPrepaid,
      totalCollect,
    } = {},
    executionDetails: {
      placeOfExecution,
      dateOfExecution,
      signatureOfShipper,
      signatureOfIssuingCarrier,
    } = {},
  } = data;

  // --- Helpers ---
  const display = (value: any) => (value ? String(value) : "");
  
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    try {
      return new Date(dateStr).toISOString().split("T")[0];
    } catch (e) {
      return dateStr;
    }
  };

  const formatMoney = (val?: number) => {
    if (val === undefined || val === null) return "";
    return val.toFixed(2);
  };

  const Label = ({ children }: { children: React.ReactNode }) => (
    <div className="text-[8px] uppercase text-gray-500 mb-0.5 tracking-wider leading-none">
      {children}
    </div>
  );

  return (
    <Wrapper data-testid="air-waybill-template">
      <div className="max-w-[210mm] mx-auto bg-white text-black p-6 font-sans antialiased box-border">
        
        {/* Main Document Border */}
        <div className="border-2 border-black">
          
          {/* Top Header Strip: AWB Numbers */}
          <div className="flex border-b border-black">
             <div className="w-1/2 p-2 border-r border-black relative">
                <div className="absolute top-1 left-2 text-[8px] font-bold">000-0000 0000</div>
                <div className="text-xl font-bold pl-2">{airlinePrefix} - {mawbNumber}</div>
             </div>
             <div className="w-1/2 p-2 text-right">
                <div className="text-sm font-bold">{airlinePrefix}-{mawbNumber}</div>
                <div className="text-[10px] text-gray-500">Not Negotiable</div>
                <div className="text-lg font-bold uppercase">Air Waybill</div>
             </div>
          </div>

          {/* Parties Section (Top Half) */}
          <div className="flex border-b border-black h-64">
             {/* Left Column: Shipper & Consignee */}
             <div className="w-1/2 border-r border-black flex flex-col">
                {/* Shipper */}
                <div className="flex-1 p-2 border-b border-black">
                   <Label>Shipper's Name and Address</Label>
                   <div className="text-xs font-bold">{display(shipperName)}</div>
                   <div className="text-[10px] whitespace-pre-wrap">{display(shipperAddress)}</div>
                   <div className="text-[10px]">{display(shipperCity)}</div>
                   <div className="mt-1 text-[9px] text-gray-500">
                      Shipper's Account Number: {display(shipperAccountNumber)}
                   </div>
                </div>
                {/* Consignee */}
                <div className="flex-1 p-2">
                   <Label>Consignee's Name and Address</Label>
                   <div className="text-xs font-bold">{display(consigneeName)}</div>
                   <div className="text-[10px] whitespace-pre-wrap">{display(consigneeAddress)}</div>
                   <div className="text-[10px]">{display(consigneeCity)}</div>
                   <div className="mt-1 text-[9px] text-gray-500">
                      Consignee's Account Number: {display(consigneeAccountNumber)}
                   </div>
                </div>
             </div>

             {/* Right Column: Agent & Accounting */}
             <div className="w-1/2 flex flex-col">
                <div className="h-1/2 p-2 border-b border-black">
                   <Label>Issuing Carrier's Agent Name and City</Label>
                   <div className="text-xs font-bold">{display(agentName)}</div>
                   <div className="text-[10px] whitespace-pre-wrap">{display(agentAddress)}</div>
                </div>
                <div className="h-1/4 p-2 border-b border-black flex">
                   <div className="w-1/2 border-r border-gray-300">
                      <Label>Agent's IATA Code</Label>
                      <div className="text-xs font-mono">{display(agentIata)}</div>
                   </div>
                   <div className="w-1/2 pl-2">
                      <Label>Account No.</Label>
                      <div className="text-xs font-mono">{display(agentAccountNumber)}</div>
                   </div>
                </div>
                <div className="h-1/4 p-2">
                   <Label>Airport of Departure (Addr. of First Carrier) and Requested Routing</Label>
                   <div className="text-xs font-bold uppercase">{display(airportOfDeparture)}</div>
                </div>
             </div>
          </div>

          {/* Routing & Accounting Strip */}
          <div className="flex border-b border-black text-[10px]">
             {/* To */}
             <div className="w-[5%] border-r border-black p-1 text-center">
                <Label>To</Label>
                <div className="font-bold">{display(airportOfDestination)}</div>
             </div>
             {/* By First Carrier */}
             <div className="w-[15%] border-r border-black p-1">
                <Label>By First Carrier</Label>
                <div className="font-bold">{routingDestination[0]?.carrier || "Requested Carrier"}</div>
             </div>
             {/* To/By/To/By Routing */}
             <div className="w-[5%] border-r border-black p-1 text-center"><Label>To</Label></div>
             <div className="w-[5%] border-r border-black p-1 text-center"><Label>By</Label></div>
             <div className="w-[5%] border-r border-black p-1 text-center"><Label>To</Label></div>
             <div className="w-[5%] border-r border-black p-1 text-center"><Label>By</Label></div>
             
             {/* Currency */}
             <div className="w-[5%] border-r border-black p-1 text-center">
                <Label>Currency</Label>
                <div className="font-bold">{display(currency)}</div>
             </div>
             {/* CHGS Code */}
             <div className="w-[5%] border-r border-black p-1 text-center">
                <Label>CHGS</Label>
                <div>{display(chargeCode)}</div>
             </div>
             {/* WT/VAL P/C */}
             <div className="w-[5%] border-r border-black p-1 text-center bg-gray-100">
                <Label>WT/VAL</Label>
                <div className="flex justify-between text-[8px]"><span>PPD</span><span>COLL</span></div>
             </div>
             {/* Other P/C */}
             <div className="w-[5%] border-r border-black p-1 text-center bg-gray-100">
                <Label>Other</Label>
                <div className="flex justify-between text-[8px]"><span>PPD</span><span>COLL</span></div>
             </div>
             
             {/* Declared Values */}
             <div className="w-[15%] border-r border-black p-1">
                <Label>Declared Value for Carriage</Label>
                <div className="font-bold text-center">{display(valueForCarriage?.declaredValue) || "NVD"}</div>
             </div>
             <div className="w-[15%] border-r border-black p-1">
                <Label>Declared Value for Customs</Label>
                <div className="font-bold text-center">{display(valueForCustoms?.amount) || "NCV"}</div>
             </div>
             <div className="w-[15%] p-1">
                <Label>Amount of Insurance</Label>
                <div className="font-bold text-center">{display(insuranceAmount?.amount) || "XXX"}</div>
             </div>
          </div>

          {/* Handling Info */}
          <div className="border-b border-black p-2 min-h-[40px]">
             <Label>Handling Information</Label>
             <div className="text-[10px]">
                {display(handlingInformationText)}
                {specialServiceRequest.map(req => req.description).join(", ")}
             </div>
          </div>

          {/* Goods Table */}
          <table className="w-full border-collapse text-[9px]">
             <thead>
                <tr className="bg-black text-white font-bold uppercase text-center">
                   <th className="border-r border-white p-1 w-[6%]">No. of<br/>Pieces</th>
                   <th className="border-r border-white p-1 w-[8%]">Gross<br/>Weight</th>
                   <th className="border-r border-white p-1 w-[4%]">kg/lb</th>
                   <th className="border-r border-white p-1 w-[5%]">Rate<br/>Class</th>
                   <th className="border-r border-white p-1 w-[10%]">Commodity<br/>Item No.</th>
                   <th className="border-r border-white p-1 w-[10%]">Chargeable<br/>Weight</th>
                   <th className="border-r border-white p-1 w-[8%]">Rate /<br/>Charge</th>
                   <th className="border-r border-white p-1 w-[8%]">Total</th>
                   <th className="p-1">Nature and Quantity of Goods (incl. Dimensions or Volume)</th>
                </tr>
             </thead>
             <tbody className="border-b border-black">
                {goodsDetails.length > 0 ? (
                   goodsDetails.map((item, idx) => (
                      <tr key={idx} className="text-[10px] border-b border-gray-200 last:border-0">
                         <td className="border-r border-black p-1 text-center font-bold align-top">{display(item.numberOfPieces)}</td>
                         <td className="border-r border-black p-1 text-right align-top">{display(item.grossWeight?.value)}</td>
                         <td className="border-r border-black p-1 text-center uppercase align-top">{display(item.grossWeight?.unit)}</td>
                         <td className="border-r border-black p-1 text-center align-top">{display(item.rateClass)}</td>
                         <td className="border-r border-black p-1 text-center align-top">{display(item.commodityItemNumber)}</td>
                         <td className="border-r border-black p-1 text-right font-bold align-top">{display(item.chargeableWeight?.value)}</td>
                         <td className="border-r border-black p-1 text-right align-top">{formatMoney(item.chargePerUnit)}</td>
                         <td className="border-r border-black p-1 text-right font-bold align-top">{formatMoney(item.totalCharge)}</td>
                         <td className="p-1 whitespace-pre-wrap uppercase font-mono text-[9px] leading-tight align-top">
                            {display(item.natureAndQuantityOfGoods)}
                            {item.dimensions && item.dimensions.length > 0 && (
                               <div className="mt-2 text-gray-500">
                                  {item.dimensions.map(d =>
                                     `${d.length}x${d.width}x${d.height} ${d.unit} (${d.pieces} pcs)`
                                  ).join("\n")}
                               </div>
                            )}
                         </td>
                      </tr>
                   ))
                ) : (
                   <tr>
                      <td colSpan={9} className="text-center p-10 italic text-gray-400 h-[300px]">No goods details available</td>
                   </tr>
                )}
                {/* Empty rows to maintain minimum height */}
                {goodsDetails.length > 0 && goodsDetails.length < 5 && (
                   <tr>
                      <td colSpan={9} className="h-[200px]"></td>
                   </tr>
                )}
             </tbody>
          </table>

          {/* Charges Summary Section */}
          <div className="flex border-b border-black h-32 text-[10px]">
             {/* Left: Prepaid */}
             <div className="w-1/2 border-r border-black flex flex-col">
                <div className="bg-gray-100 p-1 text-center font-bold border-b border-black">Prepaid</div>
                <div className="flex flex-1">
                   <div className="w-1/2 p-2 space-y-1">
                      <div className="flex justify-between"><span>Weight Charge:</span> <span className="font-bold">{formatMoney(weightCharge)}</span></div>
                      <div className="flex justify-between"><span>Valuation Charge:</span> <span>{formatMoney(valuationCharge)}</span></div>
                      <div className="flex justify-between"><span>Tax:</span> <span>{formatMoney(taxCharges)}</span></div>
                   </div>
                   <div className="w-1/2 p-2 border-l border-gray-300 space-y-1">
                      <div className="flex justify-between"><span>Total Other Charges Due Agent:</span> <span>{formatMoney(totalOtherChargesDueAgent)}</span></div>
                      <div className="flex justify-between"><span>Total Other Charges Due Carrier:</span> <span>{formatMoney(totalOtherChargesDueCarrier)}</span></div>
                      <div className="flex justify-between border-t border-black mt-2 pt-1 font-bold">
                         <span>Total Prepaid:</span> <span>{formatMoney(totalPrepaid)}</span>
                      </div>
                   </div>
                </div>
             </div>

             {/* Right: Collect */}
             <div className="w-1/2 flex flex-col">
                <div className="bg-gray-100 p-1 text-center font-bold border-b border-black">Collect</div>
                <div className="flex flex-1">
                   <div className="w-1/2 p-2 space-y-1">
                      <div className="flex justify-between text-gray-400"><span>Weight Charge:</span> <span>-</span></div>
                      <div className="flex justify-between text-gray-400"><span>Valuation Charge:</span> <span>-</span></div>
                   </div>
                   <div className="w-1/2 p-2 border-l border-gray-300 space-y-1">
                      <div className="flex justify-between border-t border-black mt-auto pt-1 font-bold">
                         <span>Total Collect:</span> <span>{formatMoney(totalCollect)}</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Footer: Execution */}
          <div className="flex h-32">
             <div className="w-1/2 p-3 border-r border-black flex flex-col justify-between">
                <div className="text-[9px] text-justify leading-tight">
                   Shipper certifies that the particulars on the face hereof are correct and that insofar as any part of the consignment contains dangerous goods, such part is properly described by name and is in proper condition for carriage by air according to the applicable Dangerous Goods Regulations.
                </div>
                <div className="mt-4 border-t border-dashed border-gray-400 pt-2">
                   <Label>Signature of Shipper or his Agent</Label>
                   <div className="font-script text-lg text-gray-500">{display(signatureOfShipper) || "Signed"}</div>
                </div>
             </div>
             
             <div className="w-1/2 p-3 flex flex-col justify-between">
                <div className="flex gap-4">
                   <div className="w-1/2">
                      <Label>Executed on (Date)</Label>
                      <div className="font-bold">{formatDate(dateOfExecution)}</div>
                   </div>
                   <div className="w-1/2">
                      <Label>at (Place)</Label>
                      <div className="font-bold">{display(placeOfExecution)}</div>
                   </div>
                </div>
                <div className="mt-4 border-t border-black pt-2">
                   <Label>Signature of Issuing Carrier or its Agent</Label>
                   <div className="font-script text-lg">{display(signatureOfIssuingCarrier) || "Signed"}</div>
                </div>
             </div>
          </div>

        </div>
        
        {/* Footer Info */}
        <div className="flex justify-between mt-2 text-[10px] font-bold">
           <div>{airlinePrefix}-{mawbNumber}</div>
           <div className="uppercase">Original 3 (For Shipper)</div>
        </div>

      </div>
    </Wrapper>
  );
};