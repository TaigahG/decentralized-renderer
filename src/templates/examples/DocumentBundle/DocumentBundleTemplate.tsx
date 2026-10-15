import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { BundleDocument, BundleSchema } from "./types";

export const DocumentBundleTemplate: FunctionComponent<
  TemplateProps<BundleSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as BundleDocument;
  const { attachments = [] } = data;
  const documentId = (document as any)?.id as string | undefined;

  return (
    <Wrapper>
      <div className="max-w-4xl bg-white font-sans text-black border-2 border-black relative overflow-hidden">

        {/* --- Header Section --- */}
        <div className="flex justify-between items-start border-b-4 border-black pt-6 pb-6 px-3 mb-0">
          <div className="flex-1">
            <h1 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">
              Document Bundle
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] border border-black px-2 py-1 inline-block">
              Blockchain-Verified Trade Document
            </p>
          </div>
          <div className="text-right max-w-xs">
            <p className="text-[9px] font-bold uppercase tracking-widest mb-1">Document ID</p>
            <p className="text-[10px] font-mono font-black bg-black text-white px-3 py-1 break-all">
              {documentId || "DRAFT"}
            </p>
          </div>
        </div>

        {/* --- ChainDox Logo Band --- */}
        <div className="flex justify-center items-center py-10 border-b-2 border-black">
          <div className="flex flex-col leading-none select-none" style={{ fontFamily: 'Arial, sans-serif' }}>
            <div className="text-4xl font-extrabold tracking-tight">
              <span style={{ color: '#000000' }}>CHA</span>
              <span style={{ color: '#D23931' }}>IN</span>
              <span style={{ color: '#000000' }}>D</span>
              <span style={{ color: '#D23931' }}>OX</span>
            </div>
            <div className="font-bold text-[0.65rem]" style={{ letterSpacing: '0.03em', marginTop: '0.2em', paddingLeft: '0.4em' }}>
              <span style={{ color: '#000000' }}>Verifiable </span>
              <span style={{ color: '#D23931' }}>data;</span>
              <span style={{ color: '#000000' }}> made </span>
              <span style={{ color: '#D23931' }}>TRANSFERABLE</span>
            </div>
          </div>
        </div>

        {/* --- Attachments Table --- */}
        <div className="border-b-2 border-black min-h-[250px] flex flex-col">
          <div className="bg-black text-white p-2 text-[9px] font-black uppercase tracking-widest">
            Attachments
          </div>
          <table className="w-full text-left table-fixed flex-1">
            <thead className="bg-white text-[9px] font-bold uppercase tracking-widest text-gray-600 border-b border-black">
              <tr>
                <th className="p-3 w-12 text-center border-r border-black">No.</th>
                <th className="p-3 w-6/12 border-r border-black">Filename</th>
                <th className="p-3 w-3/12 border-r border-black">MIME Type</th>
                <th className="p-3 w-3/12 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm font-mono">
              {attachments.length > 0 ? attachments.map((att, i) => (
                <tr key={i} className="border-b border-gray-200 last:border-0 align-top">
                  <td className="p-3 text-center border-r border-black font-bold text-gray-400">{i + 1}</td>
                  <td className="p-3 border-r border-black whitespace-pre-wrap break-all leading-relaxed font-sans font-bold text-xs">
                    {att.filename || "-"}
                  </td>
                  <td className="p-3 border-r border-black font-mono text-xs break-all">
                    {att.mimeType || "-"}
                  </td>
                  <td className="p-3 text-center">
                    {att.data && att.mimeType ? (
                      <a
                        href={`data:${att.mimeType};base64,${att.data}`}
                        download={att.filename}
                        className="inline-block bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest"
                      >
                        Download
                      </a>
                    ) : (
                      <span className="text-gray-400 italic text-xs">N/A</span>
                    )}
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-400 italic uppercase font-sans text-xs">No attachments bundled</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};
