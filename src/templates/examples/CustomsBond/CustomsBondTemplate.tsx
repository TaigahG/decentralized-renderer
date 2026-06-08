import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { CustomsBond, CustomsBondSchema } from "./types";

export const CustomsBondTemplate: FunctionComponent<
  TemplateProps<CustomsBondSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as CustomsBond;

  const {
    // --- Parties (The Legal Contract) ---
    importer: {
      name: principalName,
      addressLine: principalAddress,
      city: principalCity,
      country: principalCountry,
      email: principalEmail,
    } = {},
    insuranceCompany: {
      name: suretyName,
      addressLine: suretyAddress,
      city: suretyCity,
      country: suretyCountry,
      email: suretyEmail,
    } = {},

    // --- Locations & Routing ---
    placeOfTheDeliveryOfTheGoods: deliveryLocation,
    despatch: pointOfOrigin,
    exportationCountry,

    // --- Valuation & Financials ---
    customsValue,
    customsValueCurrency: currency,
    statisticalValue,
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

  const PartyBox = ({ title, name, address, city, country, email }: any) => (
    <div className="p-3 h-full flex flex-col border-b border-black last:border-b-0">
      <Label text={title} />
      <div className="text-sm font-bold uppercase mb-1">{name || "-"}</div>
      <div className="text-xs text-black leading-snug flex-grow">
        {address && <div>{address}</div>}
        {[city, country].filter(Boolean).join(", ")}
      </div>
      {email && (
        <div className="text-[10px] font-mono mt-1 pt-1 border-t border-black/20">
          {email}
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
              <td colSpan={4} className="border-b-2 border-black p-4 text-center align-middle">
                <h1 className="text-2xl font-black uppercase tracking-widest leading-none mb-1">
                  Customs Bond
                </h1>
                <p className="text-[9px] font-bold uppercase tracking-widest">
                  Guarantee for Customs Duties and Taxes
                </p>
              </td>
            </tr>

            {/* --- Parties Row: Principal & Surety --- */}
            <tr>
              <td colSpan={2} className="border border-black p-0 align-top w-1/2">
                <PartyBox 
                  title="1. Principal / Importer" 
                  name={principalName} 
                  address={principalAddress} 
                  city={principalCity} 
                  country={principalCountry} 
                  email={principalEmail} 
                />
              </td>
              <td colSpan={2} className="border border-black p-0 align-top w-1/2">
                <PartyBox 
                  title="2. Surety / Insurance Company" 
                  name={suretyName} 
                  address={suretyAddress} 
                  city={suretyCity} 
                  country={suretyCountry} 
                  email={suretyEmail} 
                />
              </td>
            </tr>

            {/* --- Locations & Routing --- */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-0">
                <div className="grid grid-cols-3 divide-x divide-black">
                  <DataCell label="Point of Origin (Despatch)" value={pointOfOrigin} />
                  <DataCell label="Exportation Country" value={exportationCountry} />
                  <DataCell label="Place of Delivery (Termination of Bond)" value={deliveryLocation} />
                </div>
              </td>
            </tr>

            {/* --- Valuation Section --- */}
            <tr>
              <td colSpan={4} className="border-t-2 border-black p-2 bg-black text-white text-center">
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Financial Valuation & Liability
                </span>
              </td>
            </tr>
            <tr>
              <td colSpan={4} className="border-2 border-black p-0">
                <div className="grid grid-cols-2 divide-x divide-black">
                  <DataCell 
                    label="Customs Appraised Value" 
                    value={customsValue ? `${customsValue} ${currency || ""}` : undefined} 
                  />
                  <DataCell 
                    label="Statistical Value" 
                    value={statisticalValue ? `${statisticalValue} ${currency || ""}` : undefined} 
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};