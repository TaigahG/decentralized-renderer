import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { ShipDeliveryOrder, ShipDeliveryOrderSchema } from "./types";

export const ShipDeliveryOrderTemplate: FunctionComponent<
    TemplateProps<ShipDeliveryOrderSchema>
> = ({ document }) => {
    const data = getDocumentData(document) as ShipDeliveryOrder;

    const {
        deliveryOrderNumber,
        billOfLadingNumber,
        issueDate,
        validityDate,
        expiryDate,
        voyageNumber,
        vesselName,
        portOfDischarge,
        arrivalDate,
        issuedBy: {
            shippingLineName,
            localAgentName,
            address: issuedByAddress,
            contactPerson: issuedByContact,
        } = {},
        issuedTo: {
            terminalOperatorName,
            terminalName,
            terminalCode,
            address: issuedToAddress,
        } = {},
        consignee: {
            name: consigneeName,
            address: consigneeAddress,
            taxId: consigneeTaxId,
        } = {},
        haulageCompany: {
            companyName: haulageCompanyName,
            driverName,
            truckLicensePlate,
            contactPhone: haulagePhone,
        } = {},
        containerDetails = [],
        returnInstructions: {
            emptyReturnDepot: {
                depotName,
                address: depotAddress,
                operatingHours,
            } = {},
            returnValidityDate,
            specialInstructions,
        } = {},
        financialStatus: {
            freightStatus,
            detentionTerms,
            demurrageTerms,
            outstandingCharges,
        } = {},
        releaseConditions = [],
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
        if (val === undefined || val === null) return "";
        return `${curr || ""} ${val.toFixed(2)}`;
    };

    const Label = ({ children }: { children: React.ReactNode }) => (
        <div className="text-[9px] uppercase font-bold text-gray-500 mb-0.5 tracking-wider leading-none">
            {children}
        </div>
    );

    const SectionTitle = ({ title }: { title: string }) => (
        <div className="bg-black text-white px-2 py-1 font-bold text-xs uppercase tracking-wide mb-2 mt-4">
            {title}
        </div>
    );

    return (
        <Wrapper data-testid="ship-delivery-order-template">
            <div className="max-w-[210mm] mx-auto bg-white text-black p-8 font-sans antialiased box-border">

                {/* Main Document Border */}
                <div className="border-4 border-black p-1">
                    <div className="border border-black p-4">

                        {/* Header */}
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-1/2">
                                <h1 className="text-4xl font-black uppercase tracking-tighter">Delivery Order</h1>
                                <p className="text-xs font-bold text-gray-500 mt-1">
                                    Release Instructions to Terminal Operator
                                </p>
                            </div>
                            <div className="w-1/2 text-right">
                                <div className="inline-block border-2 border-black p-2 min-w-[200px]">
                                    <Label>DO Number</Label>
                                    <div className="text-xl font-mono font-bold">{display(deliveryOrderNumber)}</div>
                                </div>
                                <div className="flex justify-end gap-4 mt-2">
                                    <div>
                                        <Label>Validity Date</Label>
                                        <div className="font-bold text-sm">{formatDate(validityDate)}</div>
                                    </div>
                                    <div>
                                        <Label>Expiry Date</Label>
                                        <div className="font-bold text-sm text-red-600">{formatDate(expiryDate)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Core Reference Grid */}
                        <div className="grid grid-cols-4 gap-4 bg-gray-100 p-3 border-y border-black mb-4 text-xs">
                            <div>
                                <Label>Bill of Lading No.</Label>
                                <div className="font-bold">{display(billOfLadingNumber)}</div>
                            </div>
                            <div>
                                <Label>Vessel / Voyage</Label>
                                <div className="font-bold">{display(vesselName)} / {display(voyageNumber)}</div>
                            </div>
                            <div>
                                <Label>Port of Discharge</Label>
                                <div className="font-bold">{display(portOfDischarge)}</div>
                            </div>
                            <div>
                                <Label>Arrival Date</Label>
                                <div className="font-bold">{formatDate(arrivalDate)}</div>
                            </div>
                        </div>

                        {/* Parties Section */}
                        <div className="flex border border-black mb-4">
                            {/* Carrier (Issuer) */}
                            <div className="w-1/3 p-3 border-r border-black">
                                <Label>Issued By (Carrier/Agent)</Label>
                                <div className="font-bold text-sm mt-1">{display(localAgentName || shippingLineName)}</div>
                                <div className="text-xs whitespace-pre-wrap">{display(issuedByAddress)}</div>
                                {issuedByContact?.name && (
                                    <div className="text-[10px] mt-2 text-gray-500">Ctc: {issuedByContact.name}</div>
                                )}
                            </div>

                            {/* Terminal (Receiver of Instruction) */}
                            <div className="w-1/3 p-3 border-r border-black bg-gray-50">
                                <Label>To Terminal / Depot</Label>
                                <div className="font-bold text-sm mt-1">{display(terminalName || terminalOperatorName)}</div>
                                {terminalCode && <div className="text-xs font-mono">Code: {terminalCode}</div>}
                                <div className="text-xs mt-1">{display(issuedToAddress)}</div>
                            </div>

                            {/* Consignee */}
                            <div className="w-1/3 p-3">
                                <Label>Consignee</Label>
                                <div className="font-bold text-sm mt-1">{display(consigneeName)}</div>
                                <div className="text-xs whitespace-pre-wrap">{display(consigneeAddress)}</div>
                                {consigneeTaxId && <div className="text-[10px] mt-2 text-gray-500">Tax ID: {consigneeTaxId}</div>}
                            </div>
                        </div>

                        {/* Instructions Text */}
                        <div className="mb-6 text-xs text-justify leading-relaxed">
                            Please deliver the goods described below to the order of <strong>{display(consigneeName)}</strong>
                            or their authorized haulage contractor <strong>{display(haulageCompanyName)}</strong>
                            {truckLicensePlate && `(Truck: ${truckLicensePlate})`} upon presentation of this Delivery Order.
                        </div>

                        {/* Container Table */}
                        <SectionTitle title="Cargo & Container Details" />
                        <div className="border border-black mb-6">
                            <div className="flex bg-black text-white text-[10px] font-bold uppercase p-1">
                                <div className="w-1/4 pl-2">Container No.</div>
                                <div className="w-1/6">Seal No.</div>
                                <div className="w-1/6">Type</div>
                                <div className="w-1/6">Pkgs</div>
                                <div className="w-1/4 text-right pr-2">Gross Weight</div>
                            </div>
                            {containerDetails.length > 0 ? (
                                containerDetails.map((cntr, idx) => (
                                    <div key={idx} className="flex text-xs border-t border-gray-300 p-2 items-center">
                                        <div className="w-1/4 font-mono font-bold">{display(cntr.containerNumber)}</div>
                                        <div className="w-1/6 font-mono">{display(cntr.sealNumber)}</div>
                                        <div className="w-1/6">{display(cntr.containerSize)} {display(cntr.containerType)}</div>
                                        <div className="w-1/6">{display(cntr.numberOfPackages)} {display(cntr.packageType)}</div>
                                        <div className="w-1/4 text-right font-mono">
                                            {cntr.grossWeight?.value} {cntr.grossWeight?.unit}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-4 text-center text-gray-400 italic text-xs">No container details available</div>
                            )}
                        </div>

                        {/* Return Instructions (Crucial for Drivers) */}
                        <div className="flex border-2 border-black border-dashed mb-6">
                            <div className="w-2/3 p-3 bg-yellow-50">
                                <Label>Empty Container Return Instruction</Label>
                                <div className="font-bold text-sm mt-1">{display(depotName)}</div>
                                <div className="text-xs whitespace-pre-wrap">{display(depotAddress)}</div>
                                <div className="mt-2 text-[10px] grid grid-cols-2">
                                    <div>Hours: <span className="font-semibold">{display(operatingHours)}</span></div>
                                    <div>Valid Until: <span className="font-semibold text-red-600">{formatDate(returnValidityDate)}</span></div>
                                </div>
                                {specialInstructions && (
                                    <div className="mt-2 text-[10px] italic bg-white p-1 border border-gray-200">
                                        Note: {specialInstructions}
                                    </div>
                                )}
                            </div>
                            <div className="w-1/3 p-3 border-l-2 border-black border-dashed flex flex-col justify-center">
                                <Label>Financial Status</Label>
                                <div className="text-lg font-bold uppercase mt-1 mb-2">
                                    {freightStatus || "COLLECT"}
                                </div>
                                {outstandingCharges?.amount ? (
                                    <div className="text-red-600 font-bold text-xs">
                                        Outstanding: {formatMoney(outstandingCharges.amount, outstandingCharges.currencyCode)}
                                    </div>
                                ) : (
                                    <div className="text-green-600 font-bold text-xs">ALL CHARGES PAID</div>
                                )}
                            </div>
                        </div>

                        {/* Detention / Demurrage Info */}
                        <div className="grid grid-cols-2 gap-4 text-[10px] mb-6 text-gray-600">
                            <div className="border p-2">
                                <strong>Detention Terms:</strong> {detentionTerms?.freeDays} Free Days.
                                {detentionTerms?.terms}
                            </div>
                            <div className="border p-2">
                                <strong>Demurrage Terms:</strong> {demurrageTerms?.freeDays} Free Days.
                                {demurrageTerms?.terms}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-end justify-between border-t border-black pt-4">
                            <div className="w-2/3 text-[9px] text-justify pr-4 text-gray-500">
                                <p className="mb-2">
                                    <strong>CONDITIONS:</strong> This Delivery Order is issued subject to the terms and conditions of the Carrier's Bill of Lading.
                                    The Receiver acknowledges receipt of the goods in apparent good order and condition unless otherwise stated.
                                </p>
                                {releaseConditions.length > 0 && (
                                    <ul className="list-disc pl-3">
                                        {releaseConditions.map((cond, i) => <li key={i}>{cond}</li>)}
                                    </ul>
                                )}
                            </div>
                            <div className="w-1/3 text-center">
                                <Label>For and on behalf of Carrier</Label>
                                <div className="h-16 border-b border-black mb-1"></div>
                                <div className="text-xs font-bold uppercase">{display(localAgentName)}</div>
                                <div className="text-[9px]">Authorized Signatory</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Wrapper>
    );
};