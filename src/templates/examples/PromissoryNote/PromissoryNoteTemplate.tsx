import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { ElectronicPromissoryNote, PromissoryNoteSchema } from "./types";

export const PromissoryNoteTemplate: FunctionComponent<
    TemplateProps<PromissoryNoteSchema>
> = ({ document }) => {
    const data = getDocumentData(document) as ElectronicPromissoryNote;

    const {
        // Identifiers
        promissoryNoteNumber,
        // Dates & Places
        issueDate,
        issuePlace,
        maturityDate,
        // Maker
        makerName,
        makerAddress,
        makerId,
        // Payee
        payeeName,
        payeeAddress,
        // Financials
        principalAmount,
        currency,
        amountInWords,
        interestRate,
        totalAmountPayable,
        // Bank Details (Domicile)
        bankName,
        bankAddress,
        bankSwiftCode,
        bankAccountNumber,
        // Underlying Contract
        contractReference,
        // Negotiability
        isNegotiable,
        // Legal
        governingLaw,
        defaultClause,
        // Witness & Notary
        witnessName,
        notaryName,
        // Collateral
        collateralDescription,
    } = data;

    // --- Helpers ---
    const display = (value: any) => (value ? String(value) : "");

    const formatDate = (dateStr?: string) => {
        if (!dateStr) return "";
        try {
            const d = new Date(dateStr);
            return d.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
            });
        } catch (e) {
            return dateStr;
        }
    };

    const formatMoney = (val?: number | string, curr?: string) => {
        if (val === undefined || val === null) return "";
        const num = Number(val);
        const c = curr || "";
        return isNaN(num) ? String(val) : `${c} ${num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
    };

    const Label = ({ children }: { children: React.ReactNode }) => (
        <div className="text-[9px] uppercase font-bold text-gray-500 mb-0.5 tracking-wider leading-none">
            {children}
        </div>
    );

    const SectionTitle = ({ children }: { children: React.ReactNode }) => (
        <h3 className="text-xs font-bold uppercase border-b border-black pb-1 mb-2 mt-4 text-gray-800">
            {children}
        </h3>
    );

    return (
        <Wrapper data-testid="promissory-note-template">
            <div className="max-w-[210mm] mx-auto bg-white text-black p-12 font-serif antialiased box-border relative">

                {/* Decorative Border */}
                <div className="border-4 border-double border-gray-800 p-8 h-full min-h-[800px] relative">

                    {/* Watermark-like background text */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden select-none">
                        <span className="text-[150px] font-bold transform -rotate-45">PROMISSORY</span>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold tracking-widest text-gray-900 uppercase mb-2">Promissory Note</h1>
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                            {isNegotiable ? "Negotiable Instrument" : "Non-Negotiable Instrument"}
                        </p>
                    </div>

                    {/* Key Details Bar */}
                    <div className="flex justify-between items-end border-b-2 border-black pb-4 mb-8">
                        <div>
                            <Label>Note Number</Label>
                            <div className="text-lg font-bold font-mono">{display(promissoryNoteNumber)}</div>
                        </div>
                        <div className="text-right">
                            <Label>Principal Amount</Label>
                            <div className="text-3xl font-bold font-mono">
                                {formatMoney(principalAmount, currency)}
                            </div>
                        </div>
                    </div>

                    {/* The Promise (Core Legal Text) */}
                    <div className="mb-8 text-justify leading-relaxed text-sm">
                        <p className="mb-4">
                            <strong>FOR VALUE RECEIVED</strong>, the undersigned <strong>{display(makerName)}</strong> ("Maker"),
                            located at {display(makerAddress)}, hereby unconditionally promises to pay to the order of
                            <strong> {display(payeeName)}</strong> ("Payee"), located at {display(payeeAddress)},
                            the principal sum of <strong>{display(currency)} {display(amountInWords)}</strong>
                            {interestRate ? ` together with interest thereon at the rate of ${interestRate}% per annum` : " (Interest Free)"}.
                        </p>
                        <p>
                            Payment shall be made in full on or before <strong>{formatDate(maturityDate)}</strong> ("Maturity Date").
                            This Note is issued at <strong>{display(issuePlace)}</strong> on <strong>{formatDate(issueDate)}</strong>.
                        </p>
                    </div>

                    {/* Financial Details Grid */}
                    <div className="grid grid-cols-2 gap-8 mb-6">
                        {/* Left: Payment Instructions */}
                        <div className="border p-4 bg-gray-50">
                            <SectionTitle>Place of Payment (Domicile)</SectionTitle>
                            <div className="space-y-2 text-sm">
                                <div>
                                    <Label>Bank Name</Label>
                                    <div className="font-bold">{display(bankName)}</div>
                                </div>
                                <div>
                                    <Label>Address</Label>
                                    <div>{display(bankAddress)}</div>
                                </div>
                                <div className="flex gap-4">
                                    <div>
                                        <Label>SWIFT / BIC</Label>
                                        <div className="font-mono">{display(bankSwiftCode)}</div>
                                    </div>
                                    <div>
                                        <Label>Account No.</Label>
                                        <div className="font-mono">{display(bankAccountNumber)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Summary */}
                        <div className="border p-4 bg-gray-50 flex flex-col justify-between">
                            <div>
                                <SectionTitle>Payment Summary</SectionTitle>
                                <div className="flex justify-between mb-1 text-sm">
                                    <span>Principal:</span>
                                    <span className="font-mono">{formatMoney(principalAmount, currency)}</span>
                                </div>
                                {interestRate && (
                                    <div className="flex justify-between mb-1 text-sm text-gray-600">
                                        <span>Interest ({interestRate}%):</span>
                                        <span className="font-mono italic">As Calculated</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-2 border-t border-black mt-2 font-bold text-sm">
                                    <span>Total Due:</span>
                                    <span className="font-mono">{formatMoney(totalAmountPayable || principalAmount, currency)}</span>
                                </div>
                            </div>
                            {contractReference && (
                                <div className="mt-4 pt-2 border-t border-gray-300">
                                    <Label>Underlying Contract Ref</Label>
                                    <div className="text-xs">{contractReference}</div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Clauses Section */}
                    <div className="mb-8">
                        <SectionTitle>Terms & Conditions</SectionTitle>
                        <div className="text-xs text-justify text-gray-600 space-y-2">
                            <p>
                                <strong>GOVERNING LAW:</strong> This Note shall be governed by and construed in accordance with the laws of {display(governingLaw)}.
                            </p>
                            {defaultClause && (
                                <p>
                                    <strong>DEFAULT:</strong> {defaultClause}
                                </p>
                            )}
                            {collateralDescription && (
                                <p>
                                    <strong>COLLATERAL:</strong> This Note is secured by: {collateralDescription}.
                                </p>
                            )}
                            <p>
                                <strong>WAIVER:</strong> Maker waives presentment, demand, protest, and notice of dishonor.
                            </p>
                        </div>
                    </div>

                    {/* Signatures Section */}
                    <div className="mt-12">
                        <div className="flex justify-between items-end gap-12">

                            {/* Maker Signature */}
                            <div className="flex-1">
                                {/*                                 
                                <Label>Signed by Maker</Label>
                                <div className="h-16 border-b border-black mb-2 flex items-end pb-2">
                                    <span className="text-3xl font-script opacity-60">
                                        //Visual placeholder for digital signature if available
                                        Signed
                                    </span>
                                </div> 
                                */}
                                <div className="font-bold text-sm">{display(makerName)}</div>
                                <div className="text-xs text-gray-500">Authorized Signatory</div>
                                {makerId && <div className="text-[10px] text-gray-400">ID: {makerId}</div>}
                            </div>

                            {/* Witness / Notary */}
                            {(witnessName || notaryName) && (
                                <div className="flex-1">
                                    <Label>Witness / Notary</Label>
                                    <div className="h-16 border-b border-black mb-2 flex items-end pb-2">
                                        {/* Seal placeholder */}
                                        {notaryName && (
                                            <div className="border-2 border-gray-300 rounded-full w-12 h-12 flex items-center justify-center text-[8px] text-gray-300 uppercase text-center leading-none rotate-12 ml-auto mr-4">
                                                Notary Seal
                                            </div>
                                        )}
                                    </div>
                                    <div className="font-bold text-sm">{display(witnessName || notaryName)}</div>
                                    <div className="text-xs text-gray-500">{notaryName ? "Notary Public" : "Witness"}</div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </Wrapper>
    );
};