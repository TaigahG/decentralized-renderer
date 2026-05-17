import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { AdvanceRulingApplication, AdvanceRulingApplicationSchema } from "./types";

export const AdvanceRulingApplicationTemplate: FunctionComponent<
  TemplateProps<AdvanceRulingApplicationSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as AdvanceRulingApplication;

  const {
    documentIdentifier: applicationRef,
    issueDate,
    advanceRulingApplicant: {
      name: applicantName,
      addressLine: applicantAddress,
      city: applicantCity,
      country: applicantCountry,
      email: applicantEmail,
    } = {},
    advanceRulingApplicationRecipient: {
      name: authorityName,
      addressLine: authorityAddress,
      city: authorityCity,
      country: authorityCountry,
      email: authorityEmail,
    } = {},
    natureOfTransaction,
    goods = [],
  } = data;

  const PartyCellContent = ({
    title,
    name,
    address,
    city,
    country,
    email,
  }: {
    title: string;
    name?: string;
    address?: string;
    city?: string;
    country?: string;
    email?: string;
  }) => (
    <div className="flex flex-col h-full">
      <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
        {title}
      </div>
      <div className="text-sm font-bold uppercase mb-1">{name || "-"}</div>
      <div className="text-xs leading-relaxed text-black">
        {address && <>{address}<br /></>}
        {[city, country].filter(Boolean).join(", ")}
      </div>
      {email && <div className="text-[10px] font-mono mt-2">Email: {email}</div>}
    </div>
  );

  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto my-10 font-sans text-black">
        <table className="w-full border-collapse border-2 border-black table-fixed">
          <tbody>
            <tr>
              <td className="border border-black p-6 align-top w-1/2">
                <h1 className="text-2xl font-black uppercase tracking-widest leading-none mb-2">
                  Advance Ruling Application
                </h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
                  Tariff Classification / Origin
                </p>
              </td>
              <td className="border border-black p-0 align-top w-1/2">
                <div className="p-4 border-b border-black h-1/2">
                  <div className="text-[10px] font-black uppercase tracking-widest text-black mb-1">
                    Application Reference Number
                  </div>
                  <div className="text-lg font-mono font-black">
                    {applicationRef || "DRAFT"}
                  </div>
                </div>
                <div className="p-4 h-1/2 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black block mb-1">Issue Date</span>
                    <span className="text-sm font-mono font-bold">{issueDate || "-"}</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td className="border border-black p-4 align-top w-1/2">
                <PartyCellContent
                  title="1. Applicant"
                  name={applicantName}
                  address={applicantAddress}
                  city={applicantCity}
                  country={applicantCountry}
                  email={applicantEmail}
                />
              </td>
              <td className="border border-black p-4 align-top w-1/2">
                <PartyCellContent
                  title="2. Customs Authority (Recipient)"
                  name={authorityName}
                  address={authorityAddress}
                  city={authorityCity}
                  country={authorityCountry}
                  email={authorityEmail}
                />
              </td>
            </tr>

            <tr>
              <td colSpan={2} className="border border-black p-4 align-top">
                <div className="text-[10px] font-black uppercase tracking-widest text-black mb-2">
                  3. Nature of Transaction
                </div>
                <div className="text-sm font-bold uppercase">
                  {natureOfTransaction || "-"}
                </div>
              </td>
            </tr>

            <tr>
              <td colSpan={2} className="border border-black p-0">
                <table className="w-full border-collapse table-fixed">
                  <thead>
                    <tr>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-1/12">
                        Item
                      </th>
                      <th className="border-b border-r border-black p-3 text-[10px] font-black uppercase tracking-widest text-left w-8/12">
                        4. Description of Goods
                      </th>
                      <th className="border-b border-black p-3 text-[10px] font-black uppercase tracking-widest text-center w-3/12">
                        5. Proposed HS Code
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {goods.length > 0 ? (
                      goods.map((item, i) => (
                        <tr key={i}>
                          <td className="border-b border-r border-black p-3 text-xs font-mono font-bold text-center align-top">
                            {i + 1}
                          </td>
                          <td className="border-b border-r border-black p-3 text-xs font-bold uppercase leading-relaxed whitespace-pre-wrap align-top">
                            {item.description || "-"}
                          </td>
                          <td className="border-b border-black p-3 text-center text-sm font-mono font-black align-top">
                            {item.hsCode || "-"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={3} className="border-b border-black p-8 text-center text-xs italic uppercase">
                          No Goods Items Declared
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
