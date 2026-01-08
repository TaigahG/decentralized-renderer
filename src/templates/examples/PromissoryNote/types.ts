import { SignedVerifiableCredential } from "@trustvc/trustvc";
import { CredentialSubject } from "@trustvc/trustvc/w3c/vc";

export interface ElectronicPromissoryNote {
    epnId?: string;
    promissoryNoteNumber?: string;
    documentIdentifier?: string;

    issueDate?: string;
    issuePlace?: string;
    maturityDate?: string;
    paymentDueDate?: string;

    // maker
    makerName?: string;
    makerAddress?: string;
    makerId?: string;
    makerTaxId?: string;
    makerContact?: string;

    //payee
    payeeName?: string;
    payeeAddress?: string;
    payeeId?: string;
    payeeBankAccount?: string;

    //beneficiary
    beneficiaryName?: string;
    beneficiaryAddress?: string;
    beneficiaryAccount?: string;


    // endorser
    endorserName?: string;
    endorserSignature?: string;
    endorsementDate?: string;

    principalAmount?: number;
    currency?: string;
    amountInWords?: string;
    interestRate?: number;
    interestCalculationMethod?: string;
    totalAmountPayable?: number;

    paymentTerms?: string;
    paymentMethod?: string;
    paymentPlace?: string;
    paymentInstructions?: string;

    //bank details
    bankName?: string;
    bankAddress?: string;
    bankSwiftCode?: string;
    bankAccountNumber?: string;
    bankRoutingNumber?: string;

    //underlyingcontract
    contractReference?: string;
    invoiceReference?: string;
    purchaseOrderReference?: string;

    isNegotiable?: boolean;
    isTransferable?: boolean;
    transferRestrictions?: string;

    governingLaw?: string;
    disputeResolution?: string;
    termsAndConditions?: string;

    //digitalsignature
    signatureTimestamp?: string;
    signatureMethod?: string;
    certificateAuthority?: string;

    noteStatus?: string;
    paymentStatus?: string;
    defaultClause?: string;
    acceleration?: string;

    witnessName?: string;
    witnessSignature?: string;
    witnessAddress?: string;

    //notary public
    notaryName?: string;
    notarySeal?: string;
    notarizationDate?: string;

    //collateral
    collateralDescription?: string;
    collateralValue?: number;

    // amenmenthistory
    amendmentDate?: string;
    amendmentDetails?: string;
}

export type PromissoryNoteW3C = SignedVerifiableCredential & {
    credentialSubject: CredentialSubject & ElectronicPromissoryNote;
}

export type PromissoryNoteSchema = PromissoryNoteW3C;