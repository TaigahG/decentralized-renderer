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
        documentId,
        shipmentId,
        certificateOfOriginNumber,

        // --- Parties & Authorities ---
        exporter: {
            name: exporterName,
            addressLine: exporterAddress,
            city: exporterCity,
            country: exporterCountry,
            email: exporterEmail,
        } = {},
        certificateIssuer: {
            name: issuerName,
            addressLine: issuerAddress,
            city: issuerCity,
            country: issuerCountry,
            email: issuerEmail,
            seal: issuerSeal,
        } = {},
        managementAuthority: {
            name: authorityName,
            addressLine: authorityAddress,
            city: authorityCity,
            country: authorityCountry,
            email: authorityEmail,
            seal: authoritySeal,
        } = {},

        // --- Shipment Details ---
        countryOrigin,
        grossWeight,

        // --- Goods Details ---
        goods = [],
    } = data;

    // Strict B&W Box Helper
    const DataBox = ({ label, value, className = "", inverted = false, large = false }: { label: string; value?: string | React.ReactNode; className?: string; inverted?: boolean; large?: boolean }) => (
        <div className={`p-4 border-r border-b border-black last:border-r-0 ${inverted ? "bg-black text-white" : "bg-white text-black"} ${className}`}>
            <label className={`block text-[9px] uppercase font-bold mb-1 tracking-widest leading-none ${inverted ? "text-gray-400" : "text-gray-600"}`}>
                {label}
            </label>
            <div className={`${large ? "text-xl md:text-2xl" : "text-sm"} font-bold uppercase leading-tight whitespace-pre-wrap break-words`}>
                {value || "-"}
            </div>
        </div>
    );

    return (
        <Wrapper>
            <div className="max-w-4xl mx-auto bg-white font-sans text-black border-2 border-black my-10 relative overflow-hidden">

                {/* --- Header Section --- */}
                <div className="flex justify-between items-start border-b-4 border-black mb-0 pt-6 pb-6 pl-6 pr-6">
                    <div className="flex-1">
                        <h1 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">
                            Certificate of Origin
                        </h1>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
                            Blockchain-Verified Trade Document
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-[9px] font-bold uppercase tracking-widest mb-1">Certificate Number</p>
                        <p className="text-2xl font-mono font-black tracking-widest bg-black text-white px-3 py-1">
                            {certificateOfOriginNumber || "PENDING"}
                        </p>
                    </div>
                </div>

                {/* --- Top Grid: Exporter & Issuer (UN Layout Standard) --- */}
                <div className="grid grid-cols-2 border-b-2 border-black">
                    {/* Exporter (Top Left) */}
                    <div className="border-r border-black p-4">
                        <div className="flex items-center space-x-2 mb-3">
                            <div className="w-3 h-3 bg-black"></div>
                            <h3 className="text-xs font-black uppercase tracking-widest">1. Exporter</h3>
                        </div>
                        <div className="text-sm font-bold uppercase mb-1">{exporterName}</div>
                        <div className="text-xs mb-2">
                            {exporterAddress}<br />
                            {exporterCity}, {exporterCountry}
                        </div>
                        {exporterEmail && <div className="text-[10px] font-mono text-gray-600">{exporterEmail}</div>}
                    </div>

                    {/* Issuing Body (Top Right) */}
                    <div className="p-4 bg-gray-50">
                        <div className="flex items-center space-x-2 mb-3">
                            <div className="w-3 h-3 border-2 border-black"></div>
                            <h3 className="text-xs font-black uppercase tracking-widest">2. Certificate Issuer</h3>
                        </div>
                        <div className="text-sm font-bold uppercase mb-1">{issuerName || "Chamber of Commerce"}</div>
                        <div className="text-xs mb-2">
                            {issuerAddress}<br />
                            {issuerCity}, {issuerCountry}
                        </div>
                        {issuerEmail && <div className="text-[10px] font-mono text-gray-600">{issuerEmail}</div>}
                    </div>
                </div>

                {/* --- Country of Origin (The most critical field) --- */}
                <div className="grid grid-cols-1 border-b-2 border-black bg-black text-white p-6 text-center">
                    <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-[0.2em]">
                        3. Country of Origin
                    </label>
                    <div className="text-5xl font-black uppercase tracking-widest">
                        {countryOrigin || "NOT SPECIFIED"}
                    </div>
                </div>

                {/* --- Transport / Shipment Details --- */}
                {/* {
                    <div className="grid grid-cols-3 border-b-2 border-black">
                    <DataBox label="4. Shipment ID / Reference" value={shipmentId} fontMono />
                    <DataBox label="5. Document ID" value={documentId} fontMono />
                    <DataBox label="6. Gross Weight" value={grossWeight} className="border-r-0" />
                    </div>
                } */}

                {/* --- Goods Table --- */}
                <div className="border-b-2 border-black min-h-[250px] flex flex-col">
                    <div className="bg-gray-100 p-2 border-b border-black text-[9px] font-black uppercase tracking-widest flex items-center space-x-2">
                        <span>7. Particulars of Goods</span>
                    </div>
                    <table className="w-full text-left table-fixed flex-1">
                        <thead className="bg-white text-[9px] font-bold uppercase tracking-widest text-gray-500 border-b border-black">
                            <tr>
                                <th className="p-3 w-16 text-center border-r border-black">Item</th>
                                <th className="p-3 w-3/4 border-r border-black">Marks, Numbers, Number and Kind of Packages, Description of Goods</th>
                                <th className="p-3 w-1/4 text-center">Quantity / Packages</th>
                            </tr>
                        </thead>
                        <tbody className="text-xs font-mono">
                            {goods.length > 0 ? goods.map((item, i) => (
                                <tr key={i} className="border-b border-gray-200 last:border-0 align-top">
                                    <td className="p-3 text-center border-r border-black font-bold text-gray-500">{i + 1}</td>
                                    <td className="p-3 border-r border-black whitespace-pre-wrap leading-relaxed">
                                        {item.description}
                                    </td>
                                    <td className="p-3 text-center font-black text-sm">
                                        {item.numberOfPackages}
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={3} className="p-8 text-center text-gray-400 italic uppercase">No goods particulars provided</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* --- Certification & Stamps (Bottom Row) --- */}
                <div className="grid grid-cols-2">
                    {/* Exporter Declaration */}
                    <div className="p-6 border-r border-black flex flex-col justify-between">
                        <div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest mb-4">8. Declaration by the Issuer</h3>
                            <p className="text-xs text-justify font-serif leading-relaxed mb-6">
                                It is hereby declares that the above-mentioned goods were produced or manufactured in the country shown in box 3 and comply with the rules of origin governing international trade.
                            </p>
                        </div>
                        <div className="mx-auto w-28 h-28">
                            {(() => {
                                const seal = issuerSeal;
                                if (!seal) return "Digital Stamp Authenticated";
                                if (seal.startsWith("http") || seal.startsWith("data:image")) {
                                    return <img src={seal} alt="Authority Seal" className="w-full h-full object-contain" />;
                                }
                                return seal;
                            })()}
                        </div>
                    </div>

                    {/* Authority Certification */}
                    <div className="p-6 bg-gray-50 flex flex-col justify-between relative overflow-hidden">
                        <div>
                            <div>
                                <h3 className="text-[10px] font-black uppercase tracking-widest mb-4">9. Certification</h3>
                                <p className="text-xs text-justify font-serif leading-relaxed mb-4">
                                    It is hereby certified, on the basis of control carried out, that the declaration by the exporter is correct.
                                </p>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="text-xs font-bold uppercase">{authorityName}</div>
                                    <div className="text-[10px] text-gray-600">{authorityAddress}</div>
                                    <div className="text-[10px] text-gray-600">{authorityCity}, {authorityCountry}</div>
                                    <div className="text-[10px] text-gray-600 mb-6">{authorityEmail}</div>
                                </div>
                                <div>
                                    {/* Seal Watermark/Placeholder */}
                                    <div className="w-28 h-28 flex items-center justify-center pointer-events-none">
                                        {(() => {
                                            const seal = authoritySeal;
                                            if (!seal) return "Digital Stamp Authenticated";
                                            if (seal.startsWith("http") || seal.startsWith("data:image")) {
                                                return <img src={seal} alt="Authority Seal" className="w-full h-full object-contain" />;
                                            }
                                            return seal;
                                        })()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Footer & Authenticator --- */}
                <div className="border-t-4 border-black p-4 flex justify-between items-center bg-black text-white mt-0">
                    <div className="text-[9px] font-bold uppercase tracking-widest">
                        UN/CEFACT International Certificate of Origin
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-[9px] font-bold uppercase">Chaindox Authenticated</span>
                        </div>
                    </div>
                </div>

            </div>
        </Wrapper>
    );
}