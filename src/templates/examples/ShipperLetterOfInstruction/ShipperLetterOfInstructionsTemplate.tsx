import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { ShipperLetterOfInstructions, ShipperLetterOfInstructionsSchema } from "./types";

export const ShipperLetterOfInstructionsTemplate: FunctionComponent<
    TemplateProps<ShipperLetterOfInstructionsSchema>
> = ({ document }) => {
    const data = getDocumentData(document) as ShipperLetterOfInstructions;

    const {
        shipperReferenceNumber,
        forwarderReferenceNumber,
        dateOfInstruction,
        relatedDocumentIds = [],
        principalShipper: {
            name: principalShipperName,
            address: principalShipperAddress,
            taxId: principalShipperTaxId,
            contactPerson: principalShipperContact,
        } = {},
        consignee: {
            name: consigneeName,
            address: consigneeAddress,
            contactPerson: consigneeContact,
        } = {},
        intermediateConsignee: {
            name: intermediateConsigneeName,
            address: intermediateConsigneeAddress,
        } = {},
        forwardingAgent: {
            name: forwardingAgentName,
            address: forwardingAgentAddress,
        } = {},
        transportInstructions: {
            modeOfTransport,
            incoterms,
            portOfExport,
            portOfDischarge,
            finalDestination,
            freightPaymentTerms,
            freightPaymentDetails,
        } = {},
        goodsDetails = [],
        valueAndInsurance: {
            valueForCustoms,
            insuranceInstructions: {
                insureGoods,
                insuredValue,
                notes: insuranceNotes,
            } = {},
        } = {},
        documentDistribution: {
            documentationInstructions,
            billOfLadingInstructions: {
                numberOfOriginals,
                releaseType,
            } = {},
            exportControl: {
                licenseRequired,
                licenseNumber,
                eccn,
            } = {},
        } = {},
        additionalInstructions,
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

    const formatMoney = (val?: number, curr?: string) => {
        if (val === undefined || val === null) return "-";
        return `${curr || ""} ${val.toFixed(2)}`;
    };

    const Label = ({ children }: { children: React.ReactNode }) => (
        <div className="text-[9px] uppercase font-bold text-gray-500 mb-0.5 tracking-wider leading-none">
            {children}
        </div>
    );

    const CheckBox = ({ label, checked }: { label: string; checked?: boolean }) => (
        <div className="flex items-center gap-2">
            <div className={`w-4 h-4 border border-black flex items-center justify-center ${checked ? 'bg-black text-white' : 'bg-white'}`}>
                {checked && <span className="text-xs">✓</span>}
            </div>
            <span className="text-xs font-bold uppercase">{label}</span>
        </div>
    );

    const SectionHeader = ({ title }: { title: string }) => (
        <div className="bg-gray-100 border-y border-black px-2 py-1 font-bold text-xs uppercase tracking-wide">
            {title}
        </div>
    );

    return (
        <Wrapper data-testid="sli-template">
            <div className="max-w-[210mm] mx-auto bg-white text-black p-8 font-sans antialiased box-border">

                {/* Main Document Border */}
                <div className="border-2 border-black">

                    {/* Header */}
                    <div className="flex border-b border-black">
                        <div className="w-1/2 p-4 bg-gray-800 text-white flex flex-col justify-center">
                            <h1 className="text-2xl font-bold uppercase tracking-tight">Shipper's Letter of Instructions</h1>
                            <p className="text-[10px] opacity-80 mt-1">
                                The Shipper issues this instruction for the Forwarding Agent to arrange shipment of goods.
                            </p>
                        </div>
                        <div className="w-1/2 p-4 bg-white text-black grid grid-cols-2 gap-4">
                            <div>
                                <Label>Date</Label>
                                <div className="font-bold">{formatDate(dateOfInstruction)}</div>
                            </div>
                            <div>
                                <Label>Shipper Ref No.</Label>
                                <div className="font-bold font-mono">{display(shipperReferenceNumber)}</div>
                            </div>
                            <div>
                                <Label>Forwarder Ref No.</Label>
                                <div className="font-mono">{display(forwarderReferenceNumber)}</div>
                            </div>
                        </div>
                    </div>

                    {/* 1. Parties */}
                    <div className="flex border-b border-black divide-x divide-black">
                        {/* Shipper */}
                        <div className="w-1/3 p-3 h-40 overflow-hidden">
                            <Label>1. Principal Shipper / Exporter</Label>
                            <div className="mt-1 font-bold text-sm">{display(principalShipperName)}</div>
                            <div className="text-xs mt-1 whitespace-pre-wrap">{display(principalShipperAddress)}</div>
                            <div className="mt-2 text-[10px] text-gray-500">
                                {principalShipperTaxId && <div>Tax ID: {principalShipperTaxId}</div>}
                                {principalShipperContact?.name && <div>Ctc: {principalShipperContact.name}</div>}
                            </div>
                        </div>

                        {/* Consignee */}
                        <div className="w-1/3 p-3 h-40 overflow-hidden">
                            <Label>2. Ultimate Consignee</Label>
                            <div className="mt-1 font-bold text-sm">{display(consigneeName)}</div>
                            <div className="text-xs mt-1 whitespace-pre-wrap">{display(consigneeAddress)}</div>
                            {consigneeContact?.phone && (
                                <div className="mt-2 text-[10px] text-gray-500">Tel: {consigneeContact.phone}</div>
                            )}
                        </div>

                        {/* Forwarder */}
                        <div className="w-1/3 p-3 h-40 overflow-hidden bg-gray-50">
                            <Label>3. Forwarding Agent</Label>
                            <div className="mt-1 font-bold text-sm">{display(forwardingAgentName)}</div>
                            <div className="text-xs mt-1 whitespace-pre-wrap">{display(forwardingAgentAddress)}</div>
                            {intermediateConsigneeName && (
                                <div className="mt-2 pt-2 border-t border-gray-300">
                                    <Label>Intermediate Consignee</Label>
                                    <div className="text-xs font-bold">{intermediateConsigneeName}</div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 2. Transport & Routing */}
                    <SectionHeader title="Transport & Routing Instructions" />
                    <div className="flex border-b border-black divide-x divide-black">
                        <div className="w-1/4 p-2">
                            <Label>Mode of Transport</Label>
                            <div className="font-bold">{display(modeOfTransport)}</div>
                        </div>
                        <div className="w-1/4 p-2">
                            <Label>Incoterms</Label>
                            <div className="font-bold">{display(incoterms)}</div>
                        </div>
                        <div className="w-1/4 p-2">
                            <Label>Port of Export</Label>
                            <div className="font-bold text-xs">{display(portOfExport)}</div>
                        </div>
                        <div className="w-1/4 p-2">
                            <Label>Final Destination</Label>
                            <div className="font-bold text-xs">{display(finalDestination)}</div>
                        </div>
                    </div>

                    {/* 3. Goods Details */}
                    <SectionHeader title="Shipment Details" />
                    <div className="border-b border-black">
                        {/* Headers */}
                        <div className="flex border-b border-black bg-gray-50 text-[10px] font-bold uppercase">
                            <div className="w-1/5 p-2 border-r border-black">Marks & Nos</div>
                            <div className="w-1/6 p-2 border-r border-black">Qty & Pkgs</div>
                            <div className="w-5/12 p-2 border-r border-black">Description of Goods</div>
                            <div className="w-1/12 p-2 border-r border-black text-right">Gross Wt</div>
                            <div className="w-1/12 p-2 text-right">Meas.</div>
                        </div>

                        {/* Rows */}
                        <div className="min-h-[150px]">
                            {goodsDetails.length > 0 ? (
                                goodsDetails.map((item, idx) => (
                                    <div key={idx} className="flex text-xs border-b border-gray-100 last:border-0">
                                        <div className="w-1/5 p-2 border-r border-black font-mono text-[10px] break-words">
                                            {display(item.shippingMarks)}
                                        </div>
                                        <div className="w-1/6 p-2 border-r border-black">
                                            {display(item.packageQuantity)} {display(item.packageType)}
                                        </div>
                                        <div className="w-5/12 p-2 border-r border-black">
                                            <div className="font-bold uppercase">{display(item.goodsDescription)}</div>
                                            <div className="flex gap-4 mt-1 text-[10px] text-gray-500">
                                                {item.hsCode && <span>HS: {item.hsCode}</span>}
                                                {item.countryOfOrigin && <span>Origin: {item.countryOfOrigin}</span>}
                                            </div>
                                        </div>
                                        <div className="w-1/12 p-2 border-r border-black text-right font-mono">
                                            {item.grossWeight?.value}
                                        </div>
                                        <div className="w-1/12 p-2 text-right font-mono">
                                            {item.volume?.value}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-4 text-center text-gray-400 italic">No goods details provided</div>
                            )}
                        </div>
                    </div>

                    {/* 4. Financials & Insurance */}
                    <div className="flex border-b border-black divide-x divide-black">
                        {/* Values */}
                        <div className="w-1/2 p-3">
                            <Label>Value for Customs</Label>
                            <div className="font-mono font-bold mb-4">
                                {formatMoney(valueForCustoms?.amount, valueForCustoms?.currencyCode)}
                            </div>

                            <Label>Export Control / License</Label>
                            <div className="text-xs mt-1">
                                {licenseRequired ? (
                                    <span className="text-red-600 font-bold">LICENSE REQUIRED: {licenseNumber}</span>
                                ) : (
                                    <span className="text-gray-500">No specific license required (NLR)</span>
                                )}
                                {eccn && <div className="mt-1">ECCN: {eccn}</div>}
                            </div>
                        </div>

                        {/* Insurance */}
                        <div className="w-1/2 p-3 bg-blue-50">
                            <div className="mb-4">
                                <Label>Insurance Instructions</Label>
                                <div className="flex gap-8 mt-2">
                                    <CheckBox label="Insurance Required" checked={insureGoods} />
                                    <CheckBox label="Do Not Insure" checked={!insureGoods} />
                                </div>
                            </div>

                            {insureGoods && (
                                <div className="border-t border-blue-200 pt-2">
                                    <div className="flex justify-between">
                                        <span className="text-xs">Insured Value:</span>
                                        <span className="font-bold font-mono">
                                            {formatMoney(insuredValue?.amount, insuredValue?.currencyCode)}
                                        </span>
                                    </div>
                                    <div className="text-[10px] mt-1 italic text-blue-800">
                                        {insuranceNotes || "Cover as per Institute Cargo Clauses (A)"}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 5. Charges & Documentation */}
                    <div className="flex border-b border-black divide-x divide-black">
                        <div className="w-1/2 p-3">
                            <Label>Freight Charges</Label>
                            <div className="font-bold text-sm mt-1 mb-2">{display(freightPaymentTerms)}</div>

                            {freightPaymentDetails?.paymentBy === "ThirdParty" && (
                                <div className="text-xs border border-gray-300 p-2 bg-gray-50">
                                    <span className="font-bold block">Bill to Third Party:</span>
                                    {display(freightPaymentDetails.thirdPartyName)}
                                </div>
                            )}

                            <div className="mt-4">
                                <Label>Special Instructions</Label>
                                <div className="text-xs italic">{display(additionalInstructions) || "None"}</div>
                            </div>
                        </div>

                        <div className="w-1/2 p-3">
                            <Label>Bill of Lading Instructions</Label>
                            <div className="grid grid-cols-2 gap-4 mt-2">
                                <div>
                                    <span className="text-[10px] text-gray-500 block">No. of Originals</span>
                                    <span className="font-bold">{display(numberOfOriginals)}</span>
                                </div>
                                <div>
                                    <span className="text-[10px] text-gray-500 block">Release Type</span>
                                    <span className="font-bold uppercase">{display(releaseType)}</span>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 border-t border-gray-200">
                                <Label>Documentation Notes</Label>
                                <div className="text-xs">{display(documentationInstructions)}</div>
                            </div>
                        </div>
                    </div>

                    {/* 6. Authorization Footer */}
                    <div className="p-4 bg-gray-50">
                        <p className="text-[9px] text-justify text-gray-600 mb-6">
                            AUTHORIZATION: The Shipper certifies that the information provided herein is true and correct.
                            The Shipper hereby authorizes the Forwarding Agent to prepare and execute any and all documents
                            necessary for the export of the merchandise described above. The Shipper authorizes the Forwarding
                            Agent to act as its agent for export control and customs purposes.
                        </p>

                        <div className="flex items-end justify-between">
                            <div>
                                <Label>Place and Date</Label>
                                <div className="font-bold text-sm">
                                    {formatDate(dateOfInstruction)}
                                </div>
                            </div>
                            <div className="w-1/2">
                                <Label>Authorized Signature of Shipper</Label>
                                <div className="h-12 border-b border-black mb-1"></div>
                                <div className="text-xs font-bold uppercase">{display(principalShipperName)}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Wrapper>
    );
};