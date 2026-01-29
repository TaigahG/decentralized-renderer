import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { EILIcenseAgricultural, EILIcenseAgriculturalSchema } from "./types";

export const EILIcenseAgriculturalTemplate: FunctionComponent<
  TemplateProps<EILIcenseAgriculturalSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as EILIcenseAgricultural;

  const {
    // --- License Header ---
    licenseNumber,
    licenseTypeCode,
    status,
    dateOfIssue,
    expiryDate,

    // --- Parties ---
    issuingAuthority: {
      authorityName,
      authorityCode,
      country: authorityCountry,
    } = {},
    licenseHolder: {
      name: holderName,
      businessRegistrationNumber: holderReg,
      taxId: holderTaxId,
      address: holderAddress,
    } = {},
    supplierBuyer: {
      name: partnerName,
      address: partnerAddress,
      isOpenLicense,
    } = {},

    // --- Trade Route ---
    countryOfOrigin,
    countryOfDestination,

    // --- Product Details ---
    goodsDetails: {
      hsCode,
      productDescription,
      cropYear,
      usageIntention,
    } = {},

    // --- Quotas & Financials ---
    quotaAndBalances: {
      authorizedQuantityTotal: totalQty = {},
      authorizedValueTotal: totalVal = {},
      utilizedQuantity: usedQty = {},
      remainingQuantity: remQty = {},
      tolerancePercentage,
    } = {},
    financialsAndConditions: {
      incoterms,
      currency,
      specialConditions = [],
    } = {},
    utilizationHistory = [],
  } = data;

  // Professional helper for data boxes
  const InfoBox = ({ label, value, className = "", highlight = false }: { label: string; value?: string | React.ReactNode; className?: string; highlight?: boolean }) => (
    <div className={`border border-gray-300 p-3 min-h-[85px] ${highlight ? "bg-gray-50" : ""} ${className}`}>
      <label className="block text-[9px] uppercase font-black text-gray-400 mb-2 tracking-widest">{label}</label>
      <div className="text-sm font-bold uppercase text-gray-800 leading-tight">{value || "-"}</div>
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-gray-900 border border-gray-200 shadow-2xl my-10 relative overflow-hidden">
        
        {/* --- Status Watermark (Subtle) --- */}
        <div className="absolute top-10 right-[-45px] rotate-45 bg-gray-100 border-y border-gray-200 w-[220px] text-center py-1 pointer-events-none opacity-20">
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">{status}</span>
        </div>

        {/* --- Header --- */}
        <div className="flex justify-between items-end border-b-4 border-gray-900 pb-6 mb-0">
          <div>
            <h1 className="text-2xl font-black uppercase tracking-tighter leading-none mb-1">
              Agricultural Product License
            </h1>
            <div className="flex items-center space-x-2">
              <span className={`text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-widest ${licenseTypeCode === 'EXPORT' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                {licenseTypeCode} Permit
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-widest italic ${status === 'ACTIVE' ? 'text-green-600' : 'text-red-500'}`}>
                {status}
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] uppercase text-gray-400 font-bold mb-1 tracking-widest">License Reference</p>
            <p className="text-xl font-mono font-bold text-gray-900">{licenseNumber || "DRAFT"}</p>
          </div>
        </div>

        {/* --- Issuing Authority & Validity --- */}
        <div className="grid grid-cols-3 border-b border-gray-300">
          <InfoBox 
            label="Issuing Authority" 
            value={`${authorityName}\n${authorityCountry}\nCode: ${authorityCode}`} 
            className="border-t-0 border-l-0 col-span-2 whitespace-pre-line" 
          />
          <div className="grid grid-cols-1">
            <InfoBox label="Date of Issue" value={dateOfIssue} className="border-t-0 border-r-0 border-l-0 min-h-[42px] border-b" />
            <InfoBox label="Expiry Date" value={<span className="text-red-600">{expiryDate}</span>} className="border-r-0 border-l-0 border-b-0 min-h-[42px]" />
          </div>
        </div>

        {/* --- Parties --- */}
        <div className="grid grid-cols-2">
          <InfoBox 
            label="License Holder" 
            value={
              <div className="space-y-1">
                <div>{holderName}</div>
                <div className="text-[10px] text-gray-500 font-mono tracking-tight">REG: {holderReg} | TAX: {holderTaxId}</div>
                <div className="text-[10px] normal-case font-normal leading-tight opacity-70">{holderAddress}</div>
              </div>
            } 
            className="border-l-0 border-b-0"
          />
          <InfoBox 
            label="Buyer / Consignee" 
            value={
              isOpenLicense ? 
              <div className="flex items-center space-x-2 text-blue-600 italic">
                <span className="text-lg">🌍</span>
                <span>Open License (Global Partners)</span>
              </div> : 
              <div className="space-y-1">
                <div>{partnerName}</div>
                <div className="text-[10px] normal-case font-normal leading-tight opacity-70">{partnerAddress}</div>
              </div>
            } 
            className="border-l-0 border-r-0 border-b-0"
          />
        </div>

        {/* --- Trade Route & Product Highlights --- */}
        <div className="grid grid-cols-4 bg-gray-900 text-white border-t border-gray-800">
          <div className="p-4 border-r border-gray-800">
            <label className="block text-[8px] uppercase font-bold text-gray-500 mb-1">Origin</label>
            <div className="text-xs font-black">{countryOfOrigin}</div>
          </div>
          <div className="p-4 border-r border-gray-800">
            <label className="block text-[8px] uppercase font-bold text-gray-500 mb-1">Destination</label>
            <div className="text-xs font-black">{countryOfDestination}</div>
          </div>
          <div className="p-4 border-r border-gray-800">
            <label className="block text-[8px] uppercase font-bold text-gray-500 mb-1">Crop Year</label>
            <div className="text-xs font-black">{cropYear}</div>
          </div>
          <div className="p-4">
            <label className="block text-[8px] uppercase font-bold text-gray-500 mb-1">HS Code</label>
            <div className="text-xs font-black tracking-widest">{hsCode}</div>
          </div>
        </div>

        {/* --- Product & Usage --- */}
        <div className="grid grid-cols-3 border-x border-gray-300">
           <InfoBox label="Product Description" value={productDescription} className="col-span-2 border-l-0 border-t-0 border-b-0" />
           <InfoBox label="Usage Intention" value={usageIntention} className="border-l-0 border-t-0 border-r-0 border-b-0" />
        </div>

        {/* --- Quotas & Financials (The Critical Section) --- */}
        <div className="border-y-2 border-gray-900 grid grid-cols-12">
          <div className="col-span-8 p-6 bg-white border-r border-gray-200">
            <h2 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-4">Quota Allocation & Utilization</h2>
            <div className="space-y-5">
              {/* Progress Bar for Quantity */}
              <div>
                <div className="flex justify-between text-[10px] font-bold uppercase mb-2">
                  <span className="text-gray-500">Authorized Quantity Consumption</span>
                  <span className="text-blue-700">{usedQty.value || 0} / {totalQty.value} {totalQty.unit}</span>
                </div>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden flex border border-gray-100">
                  <div 
                    className="bg-blue-600 h-full transition-all duration-500" 
                    style={{ width: `${Math.min(((usedQty.value || 0) / (totalQty.value || 1)) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-2">
                <div>
                  <label className="block text-[8px] uppercase font-black text-gray-400 mb-1">Authorized</label>
                  <div className="text-sm font-black">{totalQty.value} {totalQty.unit}</div>
                </div>
                <div>
                  <label className="block text-[8px] uppercase font-black text-gray-400 mb-1">Remaining</label>
                  <div className="text-sm font-black text-blue-700">{remQty.value} {remQty.unit}</div>
                </div>
                <div>
                  <label className="block text-[8px] uppercase font-black text-gray-400 mb-1">Tolerance</label>
                  <div className="text-sm font-black text-gray-400">± {tolerancePercentage || 0}%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 p-6 bg-gray-50">
            <h2 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-4">Financials</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-[8px] uppercase font-black text-gray-400 mb-1">Total Value</label>
                <div className="text-lg font-black text-gray-900">{totalVal.currencyCode} {totalVal.amount?.toLocaleString()}</div>
              </div>
              <div className="pt-2 border-t border-gray-200">
                <label className="block text-[8px] uppercase font-black text-gray-400 mb-1 tracking-tighter">Incoterms / Currency</label>
                <div className="text-xs font-bold text-gray-600 uppercase">{incoterms || "N/A"} | {totalVal.currencyCode}</div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Utilization History (Audit Trail) --- */}
        <div className="border-x border-gray-300">
          <table className="w-full text-left table-fixed">
            <thead className="bg-gray-100 border-b border-gray-300 text-[9px] font-black uppercase tracking-widest text-gray-500">
              <tr>
                <th className="p-3 w-1/4">Date</th>
                <th className="p-3 w-1/4">Ref / Customs No.</th>
                <th className="p-3 w-1/4 text-right">Quantity Utilized</th>
                <th className="p-3 w-1/4 text-right">Value Utilized</th>
              </tr>
            </thead>
            <tbody className="text-[11px]">
              {utilizationHistory.length > 0 ? utilizationHistory.map((rec, i) => (
                <tr key={i} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="p-3 font-semibold text-gray-600">{rec.utilizationDate}</td>
                  <td className="p-3 font-mono">
                    <div className="font-bold text-gray-800">{rec.shipmentReference}</div>
                    <div className="text-[9px] text-gray-400 uppercase leading-none mt-1">Decl: {rec.customsDeclarationNumber}</div>
                  </td>
                  <td className="p-3 text-right font-black text-gray-900">{rec.quantityUtilized?.value} {rec.quantityUtilized?.unit}</td>
                  <td className="p-3 text-right font-bold text-blue-900">
                    {rec.valueUtilized?.currencyCode} {rec.valueUtilized?.amount?.toLocaleString()}
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={4} className="p-10 text-center text-gray-300 italic uppercase text-[10px] tracking-[0.2em]">
                    No utilization history recorded for this license
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* --- Special Conditions --- */}
        <div className="p-6 border border-gray-300 border-t-0 bg-gray-50">
          <h2 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 leading-none">Special Conditions & Clauses</h2>
          <div className="space-y-2">
            {specialConditions.length > 0 ? specialConditions.map((cond, i) => (
              <div key={i} className="text-[11px] font-medium text-gray-600 italic border-l-2 border-gray-200 pl-3 py-1">
                {cond}
              </div>
            )) : (
              <div className="text-[11px] text-gray-400 italic">Standard regulatory conditions apply.</div>
            )}
          </div>
        </div>

        {/* --- Signatures & Verification --- */}
        <div className="grid grid-cols-2 border-x border-b border-gray-300">
          <div className="p-6 border-r border-gray-300 min-h-[160px] flex flex-col justify-between">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Issuing Authority Signature</label>
            <div className="text-center p-4 bg-gray-50 border border-dashed border-gray-200 rounded-sm">
              <div className="text-[10px] font-bold text-gray-400 uppercase italic mb-1">Digitally Validated by</div>
              <div className="text-sm font-black uppercase text-gray-900 tracking-tight">{authorityName}</div>
              <div className="text-[9px] text-gray-400 font-mono mt-1">{authorityCode}</div>
            </div>
          </div>
          <div className="p-6 min-h-[160px] flex flex-col justify-between">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Blockchain Verification</label>
            <div className="space-y-3">
              <div className="text-[9px] font-mono text-gray-400 break-all leading-tight">ID: {data.documentHash}</div>
              <div className="flex items-center space-x-2 bg-green-50 p-2 border border-green-100 rounded-sm w-fit">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[9px] font-black text-green-700 uppercase tracking-widest">Active Credential</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Footer --- */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-[9px] font-bold text-gray-400 uppercase tracking-widest">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-gray-200 rounded-full"></span>
            <span>UN/EDIFACT Compliant EIL Template</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-medium">Powered by</span>
            <span className="text-[11px] font-black text-blue-900 tracking-tighter uppercase">Chaindox</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}