import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { Wrapper } from "../../../core/Wrapper";
import { DocumentQrCode } from "../../../core/DocumentQrCode";
import { getDocumentData, getQRCodeLink } from "../../../utils";
import { BillOfLadingData, BillOfLadingCarrierSchema } from "./types";

/**
 * Bill of Lading Carrier Template
 * 
 * A professional Bill of Lading template compatible with:
 * - TradeTrust official BILL_OF_LADING_CARRIER format
 * - ChainDox Bill of Lading format
 * - OpenAttestation v2/v3 documents
 * - W3C Verifiable Credentials
 */
export const BillOfLadingCarrierTemplate: FunctionComponent<
  TemplateProps<BillOfLadingCarrierSchema>
> = ({ document }) => {
  const data = getDocumentData(document) as BillOfLadingData;
  const qrCodeUrl = getQRCodeLink(document);

  // Helper to get shipper info (supports both nested and flat structures)
  const getShipperName = () => {
    return data.shipper?.name || data.consignorName || data.consignor?.consignorName || "";
  };

  const getShipperAddress = () => {
    if (data.shipper?.address) {
      const addr = data.shipper.address;
      return [addr.street, addr.city, addr.state, addr.country, addr.postalCode]
        .filter(Boolean)
        .join(", ");
    }
    return data.consignorAddress || data.consignor?.consignorAddress || "";
  };

  // Helper to get consignee info
  const getConsigneeName = () => {
    return data.consignee?.name || data.consigneeName || data.consignee?.consigneeName || "";
  };

  const getConsigneeAddress = () => {
    if (data.consignee?.address) {
      const addr = data.consignee.address;
      return [addr.street, addr.city, addr.state, addr.country, addr.postalCode]
        .filter(Boolean)
        .join(", ");
    }
    return data.consigneeAddress || data.consignee?.consigneeAddress || "";
  };

  // Helper to get notify party info
  const getNotifyPartyName = () => {
    return data.notifyParty?.name || data.notifyPartyName || data.notifyParty?.notifyPartyName || "";
  };

  const getNotifyPartyAddress = () => {
    if (data.notifyParty?.address) {
      const addr = data.notifyParty.address;
      return [addr.street, addr.city, addr.state, addr.country, addr.postalCode]
        .filter(Boolean)
        .join(", ");
    }
    return data.notifyPartyContact || "";
  };

  // Get BL Number
  const getBlNumber = () => {
    return data.blNumber || data.bolId || data.documentIdentifier || "N/A";
  };

  // Get carrier info
  const getCarrierName = () => {
    return data.carrierName || data.carrier?.carrierName || "";
  };

  // Get dates
  const getIssueDate = () => {
    return data.dateOfIssue || data.issueDate || "";
  };

  const getShippedDate = () => {
    return data.shippedOnBoardDate || data.onBoardDate || data.loadingDate || "";
  };

  // Get cargo details
  const getGoodsDescription = () => {
    return data.descriptionOfGoods || data.goodsDescription || "";
  };

  const getGrossWeight = () => {
    if (typeof data.grossWeight === "number") {
      return `${(data.grossWeight as number).toLocaleString()} KGS`;
    }
    return data.grossWeight || "";
  };

  const getMeasurement = () => {
    if (typeof data.volume === "number") {
      return `${data.volume} CBM`;
    }
    return data.measurement || "";
  };

  const getNumberOfPackages = () => {
    if (typeof data.numberOfPackages === "number") {
      return (data.numberOfPackages as number).toString();
    }
    return data.numberOfPackages || "";
  };

  return (
    <Wrapper data-testid="bill-of-lading-carrier-template">
      <div className="max-w-4xl mx-auto bg-white border border-gray-300 shadow-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-1">BILL OF LADING</h1>
              <p className="text-blue-200 text-sm">FOR COMBINED TRANSPORT SHIPMENT OR PORT TO PORT SHIPMENT</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-blue-200">B/L No.</div>
              <div className="text-xl font-bold">{getBlNumber()}</div>
              {data.scac && (
                <div className="text-sm text-blue-200 mt-1">SCAC: {data.scac}</div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="p-6">
          {/* Parties Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Shipper */}
            <div className="border border-gray-300 p-4">
              <h3 className="text-sm font-bold text-gray-600 uppercase mb-2 border-b pb-1">
                Shipper / Exporter
              </h3>
              <div className="text-gray-800">
                <p className="font-semibold">{getShipperName()}</p>
                <p className="text-sm whitespace-pre-line">{getShipperAddress()}</p>
              </div>
            </div>

            {/* Consignee */}
            <div className="border border-gray-300 p-4">
              <h3 className="text-sm font-bold text-gray-600 uppercase mb-2 border-b pb-1">
                Consignee
              </h3>
              <div className="text-gray-800">
                {data.consignee?.toOrder ? (
                  <p className="font-semibold">TO ORDER</p>
                ) : (
                  <>
                    <p className="font-semibold">{getConsigneeName()}</p>
                    <p className="text-sm whitespace-pre-line">{getConsigneeAddress()}</p>
                  </>
                )}
              </div>
            </div>

            {/* Notify Party */}
            <div className="border border-gray-300 p-4">
              <h3 className="text-sm font-bold text-gray-600 uppercase mb-2 border-b pb-1">
                Notify Party
              </h3>
              <div className="text-gray-800">
                <p className="font-semibold">{getNotifyPartyName()}</p>
                <p className="text-sm whitespace-pre-line">{getNotifyPartyAddress()}</p>
              </div>
            </div>

            {/* Carrier */}
            <div className="border border-gray-300 p-4">
              <h3 className="text-sm font-bold text-gray-600 uppercase mb-2 border-b pb-1">
                Carrier
              </h3>
              <div className="text-gray-800">
                <p className="font-semibold">{getCarrierName()}</p>
                {data.carrier?.carrierLicenseNumber && (
                  <p className="text-sm">License: {data.carrier.carrierLicenseNumber}</p>
                )}
              </div>
            </div>
          </div>

          {/* Voyage Information */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="border border-gray-300 p-3 bg-gray-50">
              <div className="text-xs font-semibold text-gray-500 uppercase">Vessel Name</div>
              <div className="text-gray-800 font-medium">{data.vessel || data.vehicleRegistration || "-"}</div>
            </div>
            <div className="border border-gray-300 p-3 bg-gray-50">
              <div className="text-xs font-semibold text-gray-500 uppercase">Voyage No.</div>
              <div className="text-gray-800 font-medium">{data.voyageNo || data.journeyIdentifier || "-"}</div>
            </div>
            <div className="border border-gray-300 p-3 bg-gray-50">
              <div className="text-xs font-semibold text-gray-500 uppercase">Port of Loading</div>
              <div className="text-gray-800 font-medium">{data.portOfLoading || data.despatchLocation?.despatchAddress || "-"}</div>
            </div>
            <div className="border border-gray-300 p-3 bg-gray-50">
              <div className="text-xs font-semibold text-gray-500 uppercase">Port of Discharge</div>
              <div className="text-gray-800 font-medium">{data.portOfDischarge || data.unloadingLocation?.unloadingPortCode || "-"}</div>
            </div>
          </div>

          {/* Place of Receipt/Delivery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-300 p-3">
              <div className="text-xs font-semibold text-gray-500 uppercase">Place of Receipt</div>
              <div className="text-gray-800">{data.placeOfReceipt || "-"}</div>
            </div>
            <div className="border border-gray-300 p-3">
              <div className="text-xs font-semibold text-gray-500 uppercase">Place of Delivery</div>
              <div className="text-gray-800">{data.placeOfDelivery || data.deliveryLocation?.deliveryAddress || "-"}</div>
            </div>
          </div>

          {/* Container Information */}
          {(data.containerNo || data.sealNo || data.sealIdentifier) && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="border border-gray-300 p-3 bg-blue-50">
                <div className="text-xs font-semibold text-blue-600 uppercase">Container No.</div>
                <div className="text-gray-800 font-medium">{data.containerNo || data.equipmentIdentifier || "-"}</div>
              </div>
              <div className="border border-gray-300 p-3 bg-blue-50">
                <div className="text-xs font-semibold text-blue-600 uppercase">Seal No.</div>
                <div className="text-gray-800 font-medium">{data.sealNo || data.sealIdentifier || "-"}</div>
              </div>
              <div className="border border-gray-300 p-3 bg-blue-50">
                <div className="text-xs font-semibold text-blue-600 uppercase">Container Size</div>
                <div className="text-gray-800 font-medium">{data.containerSizeType || "-"}</div>
              </div>
              <div className="border border-gray-300 p-3 bg-blue-50">
                <div className="text-xs font-semibold text-blue-600 uppercase">Status</div>
                <div className="text-gray-800 font-medium">{data.containerStatus || "FCL/FCL"}</div>
              </div>
            </div>
          )}

          {/* Cargo Details Table */}
          <div className="border border-gray-300 mb-6">
            <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
              <h3 className="text-sm font-bold text-gray-700 uppercase">Particulars of Goods</h3>
            </div>
            <div className="p-4">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2 text-xs font-semibold text-gray-600 uppercase">Description of Goods</th>
                    <th className="text-center py-2 text-xs font-semibold text-gray-600 uppercase w-24">No. of Pkgs</th>
                    <th className="text-right py-2 text-xs font-semibold text-gray-600 uppercase w-32">Gross Weight</th>
                    <th className="text-right py-2 text-xs font-semibold text-gray-600 uppercase w-28">Measurement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 pr-4">
                      <div className="whitespace-pre-line text-gray-800">{getGoodsDescription() || "-"}</div>
                      {data.shippingMarks && (
                        <div className="mt-2 text-sm text-gray-600">
                          <span className="font-semibold">Marks: </span>{data.shippingMarks}
                        </div>
                      )}
                      {data.packagingType && (
                        <div className="text-sm text-gray-600">
                          <span className="font-semibold">Packaging: </span>{data.packagingType}
                        </div>
                      )}
                    </td>
                    <td className="py-3 text-center text-gray-800">{getNumberOfPackages() || "-"}</td>
                    <td className="py-3 text-right text-gray-800">{getGrossWeight() || "-"}</td>
                    <td className="py-3 text-right text-gray-800">{getMeasurement() || "-"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Freight & Payment */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="border border-gray-300 p-3">
              <div className="text-xs font-semibold text-gray-500 uppercase">Freight Payable At</div>
              <div className="text-gray-800 font-medium">{data.freightPayableAt || data.paymentLocation || "-"}</div>
            </div>
            <div className="border border-gray-300 p-3">
              <div className="text-xs font-semibold text-gray-500 uppercase">Freight Payment</div>
              <div className="text-gray-800 font-medium">{data.freightPayment || (data.prepaidAmount ? "PREPAID" : "COLLECT")}</div>
            </div>
            <div className="border border-gray-300 p-3">
              <div className="text-xs font-semibold text-gray-500 uppercase">No. of Original B/Ls</div>
              <div className="text-gray-800 font-medium">{data.numberOfOriginals || "3"}</div>
            </div>
          </div>

          {/* Freight Charges (if available) */}
          {(data.freightCharges || data.prepaidAmount || data.collectCharges) && (
            <div className="grid grid-cols-3 gap-4 mb-6">
              {data.freightCharges && (
                <div className="border border-gray-300 p-3 bg-green-50">
                  <div className="text-xs font-semibold text-green-600 uppercase">Total Freight</div>
                  <div className="text-gray-800 font-bold">${data.freightCharges.toLocaleString()}</div>
                </div>
              )}
              {data.prepaidAmount && (
                <div className="border border-gray-300 p-3 bg-green-50">
                  <div className="text-xs font-semibold text-green-600 uppercase">Prepaid Amount</div>
                  <div className="text-gray-800 font-bold">${data.prepaidAmount.toLocaleString()}</div>
                </div>
              )}
              {data.collectCharges && (
                <div className="border border-gray-300 p-3 bg-yellow-50">
                  <div className="text-xs font-semibold text-yellow-600 uppercase">Collect Amount</div>
                  <div className="text-gray-800 font-bold">${data.collectCharges.toLocaleString()}</div>
                </div>
              )}
            </div>
          )}

          {/* Trade Terms (if available) */}
          {(data.transportConditions || data.tradeTermsCode || data.tradeTermsDescription) && (
            <div className="border border-gray-300 p-4 mb-6 bg-gray-50">
              <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Trade Terms</div>
              <div className="text-gray-800">
                {data.tradeTermsCode && <span className="font-bold">{data.tradeTermsCode}</span>}
                {data.tradeTermsDescription && <span> - {data.tradeTermsDescription}</span>}
                {data.transportConditions && <span> ({data.transportConditions})</span>}
              </div>
            </div>
          )}

          {/* Footer - Dates and Signature */}
          <div className="border-t border-gray-300 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <div className="text-xs font-semibold text-gray-500 uppercase">Place of Issue</div>
                  <div className="text-gray-800">{data.placeOfIssue || "-"}</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase">Date of Issue</div>
                    <div className="text-gray-800">{getIssueDate() || "-"}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase">Shipped on Board</div>
                    <div className="text-gray-800">{getShippedDate() || "-"}</div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 p-4 bg-gray-50">
                <div className="text-xs font-semibold text-gray-500 uppercase mb-4">Carrier's Signature</div>
                <div className="h-16 border-b border-gray-400 mb-2"></div>
                <div className="text-sm text-gray-600 text-center">
                  {getCarrierName() || "Authorized Signatory"}
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 text-xs text-gray-500 text-center border-t border-gray-200 pt-4">
            <p>
              SHIPPED in apparent good order and condition (unless otherwise stated herein) the total number 
              or quantity of Containers or other packages or units indicated in this Bill of Lading for 
              carriage subject to all the terms and conditions herein.
            </p>
          </div>
        </div>

        {/* QR Code for printing */}
        {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
      </div>
    </Wrapper>
  );
};