import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { WarehouseReceipt, WarehouseReceiptSchema } from "./types";

export const WarehouseReceiptTemplate: FunctionComponent<
    TemplateProps<WarehouseReceiptSchema>
> = ({ document }) => {
    const data = getDocumentData(document) as WarehouseReceipt;

    const {
        // Identifiers
        wrId,
        receiptNumber,
        documentIdentifier,
        // Dates
        issueDate,
        receiptDate,
        expiryDate,
        storageStartDate,
        storageEndDate,
        // Warehouse Keeper
        warehouseKeeperName,
        warehouseKeeperAddress,
        warehouseKeeperLicense,
        warehouseKeeperContact,
        // Depositor
        depositorName,
        depositorAddress,
        depositorId,
        depositorContact,
        /*
        // Holder (i remove it since you say you don't need it)
        holderName,
        holderAddress,
        holderId,
        Notify Party
        */
        notifyPartyName,
        notifyPartyContact,
        // Warehouse Location
        warehouseName,
        warehouseAddress,
        warehouseCode,
        warehouseCountry,
        warehouseZone,
        storageBin,
        // Goods
        goodsDescription,
        commodityCode,
        hsCode,
        productIdentifier,
        batchNumber,
        serialNumbers,
        // Quantity & Packaging
        quantity,
        quantityUnit,
        numberOfPackages,
        packagingType,
        packagingMarks,
        // Weight & Volume
        grossWeight,
        netWeight,
        weightUnit,
        volume,
        volumeUnit,
        dimensions,
        // Storage Conditions
        temperatureRange,
        humidityRange,
        specialHandlingInstructions,
        hazardClass,
        // Charges
        storageCharges,
        handlingCharges,
        otherCharges,
        totalCharges,
        paymentTerms,
        paymentStatus,
        // Insurance
        insuranceValue,
        insuranceProvider,
        insurancePolicyNumber,
        // Inbound Transport
        inboundReference,
        inboundDate,
        transportMode,
        vehicleNumber,
        // Status & Flags
        receiptStatus,
        isNegotiable,
        isTransferable,
        // Legal & Signature
        termsAndConditions,
        liabilityClause,
        signature,
        signatureDate,
        authorizedSignatory,
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

    const formatMoney = (val?: number | string) => {
        if (val === undefined || val === null) return "";
        const num = Number(val);
        return isNaN(num) ? String(val) : `$${num.toFixed(2)}`;
    };

    // Reusable Label Component
    const Label = ({ children }: { children: React.ReactNode }) => (
        <div className="text-[10px] uppercase font-bold text-gray-500 mb-0.5 tracking-wider leading-none">
            {children}
        </div>
    );

    // Reusable Field Component
    const Field = ({ label, value, className = "" }: any) => (
        <div className={`mb-2 ${className}`}>
            <Label>{label}</Label>
            <div className="text-xs font-medium text-black break-words">
                {display(value)}
            </div>
        </div>
    );

    return (
        <Wrapper data-testid="warehouse-receipt-template">
            <div className="max-w-[210mm] mx-auto bg-white text-black p-8 font-sans antialiased box-border">
                {/* Main Document Border */}
                <div className="border-2 border-black">

                    {/* 1. Header & Status */}
                    <div className="flex border-b border-black">
                        <div className="w-1/2 p-4 bg-gray-50 border-r border-black flex flex-col justify-center">
                            <h1 className="text-3xl font-bold tracking-tight">WAREHOUSE RECEIPT</h1>
                            <div className="flex gap-2 mt-2">
                                <span className={`px-2 py-0.5 text-[10px] uppercase font-bold border border-black ${isNegotiable ? 'bg-black text-white' : 'bg-white text-gray-400'}`}>
                                    Negotiable
                                </span>
                                <span className={`px-2 py-0.5 text-[10px] uppercase font-bold border border-black ${!isNegotiable ? 'bg-black text-white' : 'bg-white text-gray-400'}`}>
                                    Non-Negotiable
                                </span>
                            </div>
                        </div>
                        <div className="w-1/2 p-4 flex flex-col justify-between">
                            <div className="text-right">
                                <Label>Receipt Number</Label>
                                <div className="text-xl font-mono font-bold">{display(receiptNumber)}</div>
                                {receiptStatus && <div className="text-xs uppercase font-bold text-gray-500 mt-1">Status: {receiptStatus}</div>}
                            </div>
                            <div className="flex justify-end gap-6 mt-2">
                                <div>
                                    <Label>Issue Date</Label>
                                    <div className="font-bold text-sm text-right">{formatDate(issueDate)}</div>
                                </div>
                                <div>
                                    <Label>Receipt Date</Label>
                                    <div className="font-bold text-sm text-right">{formatDate(receiptDate)}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Parties Grid */}
                    <div className="flex border-b border-black divide-x divide-black">
                        {/* Keeper */}
                        <div className="w-1/3 p-3 h-40 overflow-hidden">
                            <Label>Warehouse Keeper (Issuer)</Label>
                            <div className="mt-1 font-bold text-sm">{display(warehouseKeeperName)}</div>
                            <div className="text-xs mt-1 whitespace-pre-wrap">{display(warehouseKeeperAddress)}</div>
                            <div className="mt-auto pt-2 text-[10px] text-gray-600">
                                {warehouseKeeperLicense && <div>Lic: {warehouseKeeperLicense}</div>}
                                {warehouseKeeperContact && <div>Tel: {warehouseKeeperContact}</div>}
                            </div>
                        </div>

                        {/* Depositor */}
                        <div className="w-1/3 p-3 h-40 overflow-hidden">
                            <Label>Depositor (Owner)</Label>
                            <div className="mt-1 font-bold text-sm">{display(depositorName)}</div>
                            <div className="text-xs mt-1 whitespace-pre-wrap">{display(depositorAddress)}</div>
                            <div className="mt-auto pt-2 text-[10px] text-gray-600">
                                {depositorId && <div>ID: {depositorId}</div>}
                                {depositorContact && <div>Contact: {depositorContact}</div>}
                            </div>
                        </div>

                        {/* Notify Party */}
                        <div className="w-1/3 p-3 h-40 overflow-hidden">
                            <Label>Notify Party</Label>
                            <div className="mt-1 font-bold text-sm">{display(notifyPartyName)}</div>
                            <div className="text-xs mt-1 whitespace-pre-wrap">{display(notifyPartyContact) || "Same as Depositor"}</div>
                        </div>
                    </div>

                    {/* 3. Logistics & Inbound Details */}
                    <div className="flex border-b border-black divide-x divide-black bg-gray-50">
                        <div className="w-1/2 p-0 flex flex-col">
                            <div className="p-2 border-b border-black">
                                <Label>Warehouse Location</Label>
                                <div className="font-bold text-sm">{display(warehouseName)}</div>
                                <div className="text-xs">{display(warehouseAddress)}</div>
                            </div>
                            <div className="flex divide-x divide-black flex-1">
                                <div className="w-1/3 p-2"><Field label="Code" value={warehouseCode} /></div>
                                <div className="w-1/3 p-2"><Field label="Zone" value={warehouseZone} /></div>
                                <div className="w-1/3 p-2"><Field label="Bin" value={storageBin} /></div>
                            </div>
                        </div>
                        <div className="w-1/2 p-0 flex flex-col">
                            <div className="p-2 border-b border-black"><Label>Inbound Transport</Label></div>
                            <div className="grid grid-cols-2 gap-2 p-2">
                                <Field label="Inbound Ref" value={inboundReference} />
                                <Field label="Arrival Date" value={formatDate(inboundDate)} />
                                <Field label="Transport Mode" value={transportMode} />
                                <Field label="Vehicle / Container" value={vehicleNumber} />
                            </div>
                        </div>
                    </div>

                    {/* 4. Goods Table */}
                    <div className="border-b border-black min-h-[200px]">
                        {/* Headers */}
                        <div className="flex border-b border-black bg-gray-100">
                            <div className="w-1/6 p-2 border-r border-black"><Label>Marks / Batch</Label></div>
                            <div className="w-1/6 p-2 border-r border-black"><Label>Qty / Pkg</Label></div>
                            <div className="w-1/2 p-2 border-r border-black"><Label>Description of Goods</Label></div>
                            <div className="w-1/6 p-2 text-right"><Label>Weight / Vol</Label></div>
                        </div>

                        {/* Row */}
                        <div className="flex items-start">
                            <div className="w-1/6 p-2 text-xs border-r border-black min-h-[220px]">
                                <div className="font-mono">{display(packagingMarks)}</div>
                                {batchNumber && (
                                    <div className="mt-2">
                                        <Label>Batch No</Label>
                                        <div>{batchNumber}</div>
                                    </div>
                                )}
                                {productIdentifier && (
                                    <div className="mt-2">
                                        <Label>Product ID</Label>
                                        <div>{productIdentifier}</div>
                                    </div>
                                )}
                            </div>

                            <div className="w-1/6 p-2 text-xs border-r border-black min-h-[220px]">
                                <div className="font-bold text-sm">{display(quantity)} {display(quantityUnit)}</div>
                                <div className="mt-1">{display(numberOfPackages)} {display(packagingType)}</div>
                            </div>

                            <div className="w-1/2 p-2 text-xs border-r border-black min-h-[220px]">
                                <p className="font-bold uppercase text-sm mb-1">{display(goodsDescription)}</p>
                                {serialNumbers && (
                                    <div className="mb-2 text-[10px] font-mono text-gray-600">S/N: {serialNumbers}</div>
                                )}

                                <div className="flex gap-4 mt-2">
                                    {hsCode && <Field label="HS Code" value={hsCode} />}
                                    {commodityCode && <Field label="Commodity Code" value={commodityCode} />}
                                </div>

                                {/* Warnings / Conditions Block */}
                                <div className="mt-4 p-2 bg-gray-50 border border-gray-200">
                                    <div className="flex gap-4 mb-2">
                                        {temperatureRange && <Field label="Temp" value={temperatureRange} />}
                                        {humidityRange && <Field label="Humidity" value={humidityRange} />}
                                        {hazardClass && <Field label="Hazard Class" value={hazardClass} className="text-red-600 font-bold" />}
                                    </div>
                                    {specialHandlingInstructions && (
                                        <div className="text-[10px] italic">
                                            <span className="font-bold">Instructions:</span> {specialHandlingInstructions}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="w-1/6 p-2 text-xs text-right min-h-[220px]">
                                <div className="mb-2">
                                    <Label>Gross Weight</Label>
                                    <div>{display(grossWeight)} {display(weightUnit)}</div>
                                </div>
                                <div className="mb-2">
                                    <Label>Net Weight</Label>
                                    <div>{display(netWeight)} {display(weightUnit)}</div>
                                </div>
                                {(volume || dimensions) && (
                                    <div className="mt-4 pt-2 border-t border-gray-200">
                                        {volume && <div>{display(volume)} {display(volumeUnit)}</div>}
                                        {dimensions && <div className="text-[10px] text-gray-500">{dimensions}</div>}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* 5. Storage Period & Insurance */}
                    <div className="flex border-b border-black divide-x divide-black">
                        <div className="w-1/2 p-3">
                            <Label>Storage Period</Label>
                            <div className="flex gap-8 mt-1">
                                <div>
                                    <span className="text-gray-500 text-[10px] uppercase block">Start</span>
                                    <span className="font-bold">{formatDate(storageStartDate)}</span>
                                </div>
                                <div>
                                    <span className="text-gray-500 text-[10px] uppercase block">End/Expires</span>
                                    <span className="font-bold">{formatDate(storageEndDate)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 p-3 bg-gray-50">
                            <Label>Insurance Details</Label>
                            <div className="grid grid-cols-2 gap-2 mt-1">
                                <Field label="Provider" value={insuranceProvider || "N/A"} />
                                <Field label="Policy No" value={insurancePolicyNumber || "N/A"} />
                                <div className="col-span-2">
                                    <Label>Insured Value</Label>
                                    <div className="font-mono font-bold">{insuranceValue ? formatMoney(insuranceValue) : "Not Insured by Warehouse"}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 6. Financials & Signatures */}
                    <div className="flex flex-col md:flex-row border-b border-black">
                        {/* Charges */}
                        <div className="w-full md:w-1/2 border-r border-black p-3">
                            <Label>Charges & Payment</Label>
                            <div className="mt-2 text-xs space-y-1">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Storage Charges:</span>
                                    <span className="font-mono">{formatMoney(storageCharges)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Handling Charges:</span>
                                    <span className="font-mono">{formatMoney(handlingCharges)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Other Charges:</span>
                                    <span className="font-mono">{formatMoney(otherCharges)}</span>
                                </div>
                                <div className="flex justify-between pt-2 border-t border-dashed border-gray-300 font-bold text-sm">
                                    <span>Total Due:</span>
                                    <span className="font-mono">{formatMoney(totalCharges)}</span>
                                </div>
                            </div>
                            <div className="mt-3 flex gap-4">
                                <Field label="Terms" value={paymentTerms} />
                                <Field label="Status" value={paymentStatus} className="font-bold uppercase" />
                            </div>
                        </div>

                        {/* Signatures & Legal */}
                        <div className="w-full md:w-1/2 p-3 flex flex-col justify-between">
                            <div className="mb-4">
                                <Label>Liability Clause</Label>
                                <p className="text-[9px] text-justify leading-tight text-gray-600">
                                    {liabilityClause || "The Warehouse Keeper claims a lien for all lawful charges for storage and preservation of the goods. Liability is limited to the terms stated in the Standard Contract Terms and Conditions."}
                                </p>
                            </div>

                            {/* <div className="flex gap-4 mt-2 items-end">
                                <div className="flex-1">
                                    <Label>Date Signed</Label>
                                    <div className="text-sm font-medium">{formatDate(signatureDate)}</div>
                                </div>
                                <div className="flex-[2]">
                                    <Label>Authorized Signatory</Label>
                                    <div className="h-8 border-b border-black mb-1 relative">
                                        // Signature Image Placeholder
                                        {signature && <img src={signature} alt="Sig" className="h-full absolute bottom-0 left-0" />}
                                    </div>
                                    <div className="text-[10px] italic">{authorizedSignatory || display(warehouseKeeperName)}</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-4 text-[9px] text-justify text-gray-500 leading-tight">
                    {termsAndConditions ? termsAndConditions : "This Receipt is issued subject to the Standard Contract Terms and Conditions for Merchandise Warehousemen. If this Receipt is Negotiable, the goods herein described will be delivered to the bearer or to the order of the named person, upon surrender of this Receipt and payment of all charges."}
                </div>

            </div>
        </Wrapper>
    );
}