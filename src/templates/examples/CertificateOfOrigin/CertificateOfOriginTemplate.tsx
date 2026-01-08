import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { CertificateOfOrigin, CertificateOfOriginSchema } from "./types";

export const CertificateOfOriginTemplate: FunctionComponent<
    TemplateProps<CertificateOfOriginSchema>
> = ({ document }) => {
    const data = getDocumentData(document) as CertificateOfOrigin;

    const {
        // Identifiers
        cooId,
        issueDateTime,
        firstSignatoryAuthentication, // Usually the Chamber's stamp/signature
        signature, // Exporter's signature

        // Exporter
        exporterName,
        exporterLine1,
        exporterLine2,
        exporterCityName,
        exporterPostcode,
        exporterCountryCode,
        exportCountry,

        // Importer (Consignee)
        importerName,
        importerLine1,
        importerLine2,
        importerCityName,
        importerPostcode,
        importerCountryCode,
        importCountry,

        // Logistics
        loadingBaseportLocationName,
        unloadingBaseportLocationName,
        usedTransportMeansName, // Vessel Name
        departureDateTime,

        // Goods
        includedConsignmentItems, // The description string
        supplyChainConsignmentInformation, // Extra remarks
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

    const Label = ({ children }: { children: React.ReactNode }) => (
        <div className="text-[9px] uppercase font-bold text-gray-500 mb-0.5 tracking-wider leading-none">
            {children}
        </div>
    );

    return (
        <Wrapper data-testid="certificate-of-origin-template">
            <div className="max-w-[210mm] mx-auto bg-white text-black p-8 font-sans antialiased box-border">

                {/* Main Document Border */}
                <div className="border-2 border-black">

                    {/* Header & Title */}
                    <div className="flex border-b border-black">
                        {/* Left: Exporter (Box 1) */}
                        <div className="w-1/2 border-r border-black p-3 h-40">
                            <Label>1. Exporter (Name, Address, Country)</Label>
                            <div className="mt-2 text-sm font-bold">{display(exporterName)}</div>
                            <div className="text-xs mt-1">
                                {display(exporterLine1)}<br />
                                {exporterLine2 && <>{display(exporterLine2)}<br /></>}
                                {display(exporterCityName)} {display(exporterPostcode)}<br />
                                <span className="font-bold uppercase">{display(exportCountry || exporterCountryCode)}</span>
                            </div>
                        </div>

                        {/* Right: Certificate Ref */}
                        <div className="w-1/2 p-3 bg-gray-50 flex flex-col">
                            <div className="flex-1">
                                <Label>Reference No.</Label>
                                <div className="text-xl font-mono font-bold">{display(cooId)}</div>
                            </div>
                            <div className="text-right mt-4">
                                <h1 className="text-2xl font-bold uppercase tracking-tight text-gray-800">
                                    Certificate of Origin
                                </h1>
                                <p className="text-[10px] uppercase font-bold text-gray-400">
                                    Original
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Consignee & Transport */}
                    <div className="flex border-b border-black">
                        {/* Left: Consignee (Box 2) */}
                        <div className="w-1/2 border-r border-black p-3 h-40">
                            <Label>2. Consignee (Name, Address, Country)</Label>
                            <div className="mt-2 text-sm font-bold">{display(importerName)}</div>
                            <div className="text-xs mt-1">
                                {display(importerLine1)}<br />
                                {importerLine2 && <>{display(importerLine2)}<br /></>}
                                {display(importerCityName)} {display(importerPostcode)}<br />
                                <span className="font-bold uppercase">{display(importCountry || importerCountryCode)}</span>
                            </div>
                        </div>

                        {/* Right: Transport (Box 3) */}
                        <div className="w-1/2 p-3 h-40 flex flex-col justify-between">
                            <div>
                                <Label>3. Transport Details (Optional)</Label>
                                <div className="mt-2 text-xs">
                                    <div className="flex mb-1">
                                        <span className="w-24 text-gray-500">Mode/Means:</span>
                                        <span className="font-bold uppercase">{display(usedTransportMeansName)}</span>
                                    </div>
                                    <div className="flex mb-1">
                                        <span className="w-24 text-gray-500">Loading Port:</span>
                                        <span>{display(loadingBaseportLocationName)}</span>
                                    </div>
                                    <div className="flex mb-1">
                                        <span className="w-24 text-gray-500">Discharge Port:</span>
                                        <span>{display(unloadingBaseportLocationName)}</span>
                                    </div>
                                    <div className="flex mb-1">
                                        <span className="w-24 text-gray-500">Departure:</span>
                                        <span>{formatDate(departureDateTime)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-2 border-t border-gray-200">
                                <Label>Country of Origin</Label>
                                <div className="text-sm font-bold uppercase">{display(exportCountry)}</div>
                            </div>
                        </div>
                    </div>

                    {/* Remarks Section (Optional Box) */}
                    {supplyChainConsignmentInformation && (
                        <div className="border-b border-black p-2 bg-gray-50 text-xs">
                            <Label>Remarks</Label>
                            <div>{display(supplyChainConsignmentInformation)}</div>
                        </div>
                    )}

                    {/* Goods Table Header (Box 5, 6, 7) */}
                    <div className="flex border-b border-black bg-gray-100">
                        <div className="w-1/6 p-2 border-r border-black"><Label>Item No.</Label></div>
                        <div className="w-2/3 p-2 border-r border-black"><Label>Marks & Numbers / Description of Goods</Label></div>
                        <div className="w-1/6 p-2 text-right"><Label>Quantity / Weight</Label></div>
                    </div>

                    {/* Goods Body */}
                    <div className="border-b border-black min-h-[350px] flex">
                        <div className="w-1/6 p-2 border-r border-black text-xs text-center">1</div>

                        {/* The Main Description Area */}
                        <div className="w-2/3 p-4 border-r border-black text-sm whitespace-pre-wrap font-mono leading-relaxed">
                            {display(includedConsignmentItems) || "No goods description provided."}
                        </div>

                        <div className="w-1/6 p-2 text-xs text-right">
                            {/* Since we don't have separate weight fields in the interface, we rely on the description string usually. 
                    If specific weight fields existed, they would go here. */}
                            <span className="italic text-gray-400">See Desc.</span>
                        </div>
                    </div>

                    {/* Footer: Certification & Declaration */}
                    <div className="flex h-60">
                        {/* Left: Exporter Declaration (Box 11) */}
                        <div className="w-1/2 border-r border-black p-4 flex flex-col justify-between">
                            <div>
                                <Label>11. Declaration by the Exporter</Label>
                                <p className="text-[10px] mt-2 text-justify leading-tight">
                                    The undersigned hereby declares that the above details and statements are correct;
                                    that all the goods were produced in <strong>{display(exportCountry)}</strong> and that
                                    they comply with the origin requirements specified for these goods.
                                </p>
                            </div>

                            <div className="mt-4">
                                <Label>Place and Date, Signature</Label>
                                <div className="mt-1 font-medium text-xs">
                                    {display(exporterCityName)}, {formatDate(issueDateTime)}
                                </div>

                                <div className="mt-4 h-16 border-b border-black relative">
                                    {/* Digital Signature Placeholder */}
                                    {signature && (
                                        <div className="absolute bottom-0 left-0 text-xs italic text-gray-500">
                                            [Digitally Signed by Exporter]
                                        </div>
                                    )}
                                </div>
                                <div className="text-[10px] mt-1 font-bold">{display(exporterName)}</div>
                            </div>
                        </div>

                        {/* Right: Certification (Box 12) */}
                        <div className="w-1/2 p-4 flex flex-col justify-between bg-gray-50">
                            <div>
                                <Label>12. Certification</Label>
                                <p className="text-[10px] mt-2 text-justify leading-tight">
                                    It is hereby certified, on the basis of control carried out, that the declaration
                                    by the exporter is correct.
                                </p>
                            </div>

                            <div className="mt-4">
                                <Label>Issuing Authority Signature & Stamp</Label>

                                <div className="mt-4 h-24 border border-dashed border-gray-400 rounded flex items-center justify-center relative">
                                    {/* Stamp Placeholder */}
                                    <div className="text-gray-300 text-center font-bold uppercase rotate-12 text-xs">
                                        Official Stamp<br />Issuing Authority
                                    </div>

                                    {/* Auth Code from data */}
                                    {firstSignatoryAuthentication && (
                                        <div className="absolute bottom-1 right-1 text-[8px] font-mono bg-white px-1 border border-gray-200">
                                            Auth: {firstSignatoryAuthentication.substring(0, 10)}...
                                        </div>
                                    )}
                                </div>

                                <div className="text-[10px] mt-2 text-center text-gray-500">
                                    Authorized Signatory
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-4 text-[9px] text-center text-gray-400">
                    This digitally rendered Certificate of Origin is verified by TradeTrust.
                </div>

            </div>
        </Wrapper>
    );
};