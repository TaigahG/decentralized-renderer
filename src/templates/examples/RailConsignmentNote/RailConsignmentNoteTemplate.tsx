import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { RailConsignmentNote, RailConsignmentNoteSchema } from "./types";

export const RailConsignmentNoteTemplate: FunctionComponent<
    TemplateProps<RailConsignmentNoteSchema>
> = ({ document }) => {
    const data = getDocumentData(document) as RailConsignmentNote;

    const {
        consignmentNoteNumber,
        contractType,
        destinationStationDateStamp,
        consignor,
        consignee,
        railwayUndertaking,
        departureStation,
        destinationStation,
        wagonNumber,
        borderCrossings = [], // Included now
        goodsDetails = [],
        frankingInstructions,
    } = data;

    // Simple, professional data box without numbers
    const DataBox = ({ label, value, className = "" }: { label: string; value?: string | number; className?: string }) => (
        <div className={`border border-gray-300 p-3 min-h-[70px] ${className}`}>
            <label className="block text-[9px] uppercase font-bold text-gray-500 mb-1 tracking-tight">{label}</label>
            <div className="text-sm font-semibold uppercase break-words text-gray-800">{value || "-"}</div>
        </div>
    );

    return (
        <Wrapper>
            <div className="max-w-4xl mx-auto p-6 bg-white font-sans shadow-sm border border-gray-200">

                {/* --- Header --- */}
                <div className="flex justify-between items-end border-b-2 border-gray-900 pb-4 mb-0">
                    <div>
                        <h1 className="text-2xl font-black uppercase tracking-tighter">Rail Consignment Note</h1>
                        <p className="text-sm font-bold text-gray-600 tracking-widest">{contractType || "CIM"} SYSTEM</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] uppercase text-gray-400 font-bold">Document Identification</p>
                        <p className="text-lg font-mono font-bold text-blue-900">{consignmentNoteNumber || "N/A"}</p>
                    </div>
                </div>

                {/* --- Top Section --- */}
                <div className="grid grid-cols-2">
                    <DataBox
                        label="Consignor"
                        value={`${consignor?.name}\n${consignor?.address}\n${consignor?.countryCode}`}
                        className="whitespace-pre-line border-t-0 border-l-0"
                    />
                    <DataBox
                        label="Carrier"
                        value={`${railwayUndertaking?.carrierName}\nRICS: ${railwayUndertaking?.carrierCode}`}
                        className="whitespace-pre-line border-t-0 border-r-0 border-l-0"
                    />
                    <DataBox
                        label="Consignee"
                        value={`${consignee?.name}\n${consignee?.address}\n${consignee?.countryCode}`}
                        className="whitespace-pre-line border-l-0"
                    />
                    <div className="grid grid-cols-2">
                        <DataBox label="Departure" value={departureStation} className="border-l-0 border-t-0" />
                        <DataBox label="Destination" value={destinationStation} className="border-r-0 border-t-0 border-l-0" />
                    </div>
                </div>

                {/* --- Conditional Border Crossings Section --- */}
                {borderCrossings && borderCrossings.length > 0 && (
                    <div className="border-x border-gray-300 bg-gray-50 p-3">
                        <label className="block text-[9px] uppercase font-bold text-gray-500 mb-2 tracking-widest">
                            Planned Transit Points
                        </label>
                        <div className="flex flex-wrap gap-4">
                            {borderCrossings.map((bc, i) => (
                                <div key={i} className="flex items-center space-x-2 bg-white border border-gray-200 px-3 py-1 rounded-sm shadow-sm">
                                    <span className="text-[10px] font-bold text-blue-600 uppercase">{bc.crossingType || "Point"}</span>
                                    <span className="text-xs font-bold text-gray-700">{bc.stationName}</span>
                                    <span className="text-[10px] text-gray-400">({bc.stationCode})</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- Transport Details --- */}
                <div className="grid grid-cols-3">
                    <DataBox label="Wagon ID" value={wagonNumber} className="border-l-0" />
                    <DataBox label="Date Processed" value={destinationStationDateStamp ? new Date(destinationStationDateStamp).toLocaleDateString() : ""} className="border-l-0" />
                    <DataBox label="Payment Terms" value={frankingInstructions?.paymentTerms} className="border-r-0 border-l-0" />
                </div>

                {/* --- Goods Table --- */}
                <div className="border border-gray-300 mt-0 overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-800 text-white text-[10px] uppercase tracking-wider font-bold">
                            <tr>
                                <th className="p-3">Goods Description & Commodity Codes</th>
                                <th className="p-3 text-center">Gross Weight</th>
                                <th className="p-3 text-center">Hazardous</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {goodsDetails.map((item, idx) => (
                                <tr key={idx} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                                    <td className="p-3">
                                        <div className="font-bold text-gray-900">{item.descriptionOfGoods}</div>
                                        <div className="text-[10px] text-gray-500 mt-1 uppercase">NHM: {item.nhmCode} | HS: {item.hsCode}</div>
                                    </td>
                                    <td className="p-3 text-center font-mono font-semibold">
                                        {item.mass?.value} <span className="text-[10px] text-gray-400">{item.mass?.unit}</span>
                                    </td>
                                    <td className="p-3 text-center">
                                        {item.isDangerous ? (
                                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded-sm text-[10px] font-black uppercase">
                                                Class {item.ridDangerousGoods?.ridClass}
                                            </span>
                                        ) : <span className="text-gray-300 text-[10px]">None</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* --- Footer / Signatures --- */}
                <div className="grid grid-cols-2 mt-0">
                    <div className="border border-gray-300 border-t-0 border-l-0 p-4 min-h-[140px] flex flex-col justify-between">
                        <label className="text-[9px] font-bold uppercase text-gray-400 tracking-widest">Sender Signature</label>
                        <div className="border-b border-gray-200 mb-2"></div>
                    </div>
                    <div className="border border-gray-300 border-t-0 border-r-0 border-l-0 p-4 min-h-[140px] flex flex-col justify-between bg-gray-50">
                        <label className="text-[9px] font-bold uppercase text-gray-400 tracking-widest">Carrier Verification</label>
                        <div className="text-center p-2">
                            <div className="text-[10px] font-mono text-gray-400 break-all mb-1 opacity-50">HASH: {data.documentHash?.substring(0, 32)}...</div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest border border-gray-300 p-2 inline-block rounded-sm">
                                Digitally Authenticated
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}