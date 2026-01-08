import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface WarehouseReceipt {
    wrId?: string;
    receiptNumber?: string;
    documentIdentifier?: string;

    issueDate?: string;
    receiptDate?: string;
    expiryDate?: string;
    storageStartDate?: string;
    storageEndDate?: string;

    warehouseKeeperName?: string;
    warehouseKeeperAddress?: string;
    warehouseKeeperLicense?: string;
    warehouseKeeperContact?: string;

    depositorName?: string;
    depositorAddress?: string;
    depositorId?: string;
    depositorContact?: string;

    holderName?: string;
    holderAddress?: string;
    holderId?: string;

    notifyPartyName?: string;
    notifyPartyContact?: string;

    warehouseName?: string;
    warehouseAddress?: string;
    warehouseCode?: string;
    warehouseCountry?: string;
    warehouseZone?: string;
    storageBin?: string;

    goodsDescription?: string;
    commodityCode?: string;
    hsCode?: string;
    productIdentifier?: string;
    batchNumber?: string;
    serialNumbers?: string[];

    quantity?: number;
    quantityUnit?: string;
    numberOfPackages?: number;
    packagingType?: string;
    packagingMarks?: string;

    grossWeight?: number;
    netWeight?: number;
    weightUnit?: string;
    volume?: number;
    volumeUnit?: string;
    dimensions?: string;

    temperatureRange?: string;
    humidityRange?: string;
    specialHandlingInstructions?: string;
    hazardClass?: string;

    storageCharges?: number;
    handlingCharges?: number;
    otherCharges?: number;
    totalCharges?: number;
    paymentTerms?: string;
    paymentStatus?: string;

    insuranceValue?: number;
    insuranceProvider?: string;
    insurancePolicyNumber?: string;

    inboundReference?: string;
    inboundDate?: string;
    transportMode?: string;
    vehicleNumber?: string;

    receiptStatus?: string;
    isNegotiable?: boolean;
    isTransferable?: boolean;

    termsAndConditions?: string;
    liabilityClause?: string;
    signature?: string;
    signatureDate?: string;
    authorizedSignatory?: string;
}

export type WarehouseReceiptW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & WarehouseReceipt;
};

export type WarehouseReceiptSchema = WarehouseReceiptW3C