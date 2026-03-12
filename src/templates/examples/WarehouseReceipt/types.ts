import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface WarehouseReceipt {
    // --- Document Identifiers ---
    documentId?: string;
    shipmentId?: string;

    /** Date format: YYYY-MM-DD */
    issueDate?: string;

    // --- Parties ---
    warehouseDepositor?: WarehouseParty;
    warehouseKeeper?: WarehouseParty;

    // --- Location & Weights ---
    warehouseAddress?: string;
    grossWeight?: number;
    transportMeanGrossWeight?: number;

    // --- Goods Details ---
    /** List of goods deposited in the warehouse */
    goods?: WarehouseGoodsItem[]; // Mapped from @set container
}

// --- Sub-Interfaces ---

/**
 * Base representation of a party in the Warehouse Receipt (Depositor or Keeper).
 */
export interface WarehouseParty {
    name?: string;
    addressline?: string;
    city?: string;
    country?: string;
    email?: string;
}

/**
 * Represents an individual goods line item stored in the warehouse.
 */
export interface WarehouseGoodsItem {
    description?: string;
    numberOfPackages?: number;
}

export type WarehouseReceiptW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & WarehouseReceipt;
};

export type WarehouseReceiptSchema = WarehouseReceiptW3C