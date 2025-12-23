import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { getDocumentData } from "../../../utils";
import { InvoiceDocument, InvoiceSchema } from "./types";

/**
 * Modern & Minimal Invoice Template
 * Professional neutral design with clean layout
 */
export const InvoiceTemplate: FunctionComponent<
  TemplateProps<InvoiceSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as InvoiceDocument;

  const {
    invoiceId,
    invoiceName,
    date,
    customerId,
    terms,
    billFromName,
    billFromStreetAddress,
    billFromCity,
    billFromPostalCode,
    billFromPhoneNumber,
    billToName,
    billToEmail,
    billToCompanyName,
    billToCompanyStreetAddress,
    billToCompanyCity,
    billToCompanyPostalCode,
    billToCompanyPhoneNumber,
    billableItemsDescription,
    billableItemsQuantity,
    billableItemsRate,
    billableItemsAmount,
    subtotal = 0,
    tax = 0,
    taxTotal = 0,
    total = 0,
  } = data;

  // Format currency
  const formatCurrency = (amount: number | string | undefined): string => {
    if (amount === undefined || amount === null) return "$0.00";
    const num = typeof amount === "string" ? parseFloat(amount) : amount;
    return `$${num.toFixed(2)}`;
  };

  // Format date
  const formatDate = (dateStr: string | undefined): string => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toISOString().split("T")[0]; // Returns YYYY-MM-DD format
  };

  return (
    <Wrapper data-testid="invoice-template">
      <div className="max-w-4xl mx-auto bg-white">
        {/* Header Section */}
        <div className="border-b-2 border-gray-200 pb-8 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                INVOICE
              </h1>
              {invoiceName && (
                <p className="text-lg text-gray-600">{invoiceName}</p>
              )}
            </div>
            <div className="text-right">
              <div className="mb-2">
                <span className="text-sm text-gray-500 block">Invoice #</span>
                <span className="text-lg font-semibold text-gray-800">
                  {invoiceId}
                </span>
              </div>
              <div className="mb-2">
                <span className="text-sm text-gray-500 block">Date</span>
                <span className="text-gray-800">{formatDate(date)}</span>
              </div>
              {customerId && (
                <div className="mb-2">
                  <span className="text-sm text-gray-500 block">
                    Customer ID
                  </span>
                  <span className="text-gray-800">{customerId}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bill From & Bill To Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Bill From */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
              From
            </h3>
            <div className="text-gray-800">
              {billFromName && (
                <p className="font-semibold text-lg mb-1">{billFromName}</p>
              )}
              {billFromStreetAddress && <p>{billFromStreetAddress}</p>}
              {(billFromCity || billFromPostalCode) && (
                <p>
                  {billFromCity}
                  {billFromCity && billFromPostalCode && ", "}
                  {billFromPostalCode}
                </p>
              )}
              {billFromPhoneNumber && (
                <p className="mt-1">Tel: {billFromPhoneNumber}</p>
              )}
            </div>
          </div>

          {/* Bill To */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
              Bill To
            </h3>
            <div className="text-gray-800">
              {billToName && (
                <p className="font-semibold text-lg mb-1">{billToName}</p>
              )}
              {billToCompanyName && (
                <p className="font-medium">{billToCompanyName}</p>
              )}
              {billToCompanyStreetAddress && <p>{billToCompanyStreetAddress}</p>}
              {(billToCompanyCity || billToCompanyPostalCode) && (
                <p>
                  {billToCompanyCity}
                  {billToCompanyCity && billToCompanyPostalCode && ", "}
                  {billToCompanyPostalCode}
                </p>
              )}
              {billToCompanyPhoneNumber && (
                <p className="mt-1">Tel: {billToCompanyPhoneNumber}</p>
              )}
              {billToEmail && <p className="mt-1">{billToEmail}</p>}
            </div>
          </div>
        </div>

        {/* Payment Terms */}
        {terms && (
          <div className="mb-8 p-4 bg-gray-50 rounded">
            <span className="text-sm font-semibold text-gray-500 uppercase">
              Payment Terms:{" "}
            </span>
            <span className="text-gray-800">{terms}</span>
          </div>
        )}

        {/* Items Table */}
        <div className="mb-8">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700 uppercase">
                  Description
                </th>
                <th className="text-center py-3 px-2 text-sm font-semibold text-gray-700 uppercase w-24">
                  Qty
                </th>
                <th className="text-right py-3 px-2 text-sm font-semibold text-gray-700 uppercase w-32">
                  Rate
                </th>
                <th className="text-right py-3 px-2 text-sm font-semibold text-gray-700 uppercase w-32">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {billableItemsDescription && (
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-2 text-gray-800">
                    {billableItemsDescription}
                  </td>
                  <td className="py-4 px-2 text-center text-gray-800">
                    {billableItemsQuantity}
                  </td>
                  <td className="py-4 px-2 text-right text-gray-800">
                    {formatCurrency(billableItemsRate)}
                  </td>
                  <td className="py-4 px-2 text-right text-gray-800 font-medium">
                    {formatCurrency(billableItemsAmount)}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Totals Section */}
        <div className="flex justify-end">
          <div className="w-full md:w-80">
            {/* Subtotal */}
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-800 font-medium">
                {formatCurrency(subtotal)}
              </span>
            </div>

            {/* Tax */}
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Tax ({tax}%)</span>
              <span className="text-gray-800 font-medium">
                {formatCurrency(taxTotal)}
              </span>
            </div>

            {/* Total */}
            <div className="flex justify-between py-3 border-t-2 border-gray-800 mt-2">
              <span className="text-lg font-bold text-gray-800">Total</span>
              <span className="text-lg font-bold text-gray-800">
                {formatCurrency(total)}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          Thank you for your business
        </div>
      </div>
    </Wrapper>
  );
};