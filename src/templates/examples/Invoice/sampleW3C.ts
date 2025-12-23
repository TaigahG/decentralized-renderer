import { InvoiceW3C } from "./types";

/**
 * Sample Invoice Document based on your actual VC structure
 * This matches the format of your provided Verifiable Credential
 */
export const InvoiceSampleW3C: InvoiceW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/invoice-context.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: ["VerifiableCredential"],
  credentialSubject: {
    invoiceId: "INV-1765122785",
    invoiceName: "Server Billing",
    date: "2025-12-07T16:00:00.000Z",
    customerId: "67",
    terms: "transfer via swift",
    billFromName: "Simon",
    billFromStreetAddress: "Sanur number 24",
    billFromCity: "Badung",
    billFromPostalCode: "80228",
    billFromPhoneNumber: "081345123",
    billToName: "Trahwidhi",
    billToEmail: "trahwidhi@gmail.com",
    billToCompanyName: "Chaindox",
    billToCompanyStreetAddress: "Kertha Dalem",
    billToCompanyCity: "Denpasar",
    billToCompanyPostalCode: "80224",
    billToCompanyPhoneNumber: "081765987",
    billableItemsDescription: "this is Chaindox server via vercel",
    billableItemsQuantity: "1",
    billableItemsAmount: 20,
    subtotal: 20,
    taxTotal: 0,
    total: 20,
    billableItemsRate: "20"
  },
  validUntil: "2026-03-07T15:57:03.175Z",
  renderMethod: [
    {
      id: "http://localhost:3000", // Change to your Vercel URL after deployment
      type: "EMBEDDED_RENDERER",
      templateName: "INVOICE"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "92ad63a2573f5f62e3b4baf9f3e7333ee15ba74309b5e68d9b14202e9e1f5857"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2025-12-07T15:57:04.048Z",
  id: "urn:uuid:019af987-e4bb-700f-91db-d3fa39f8deda",
  proof: {
    type: "DataIntegrityProof",
    created: "2025-12-07T15:57:04Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhA9X-1kpwf7Ovfi5_iqQphRsaa7mwDjoTeDUMwS4mYpICEchgoGo9Yy5JP4IJA4bOClIiMTgSxOd0GiY938StakVgjgCQCQhuAqsVyKF-_-8_d_PsUo1Ffh14Iu1ddbZwTSWrxM45YIGkuFHbItIDjNaukXg5sSr_YgoP1ZaPM8LlzUVkiU4QcmCRYQEfmTibKFSr_aDXDpsNOKVPKIK-ZgbUJYP9a15V1hRmWpUk4LkoyJI_IPxBIwf4-8UTUX0Rgugg-0csMX0MR_hhYQHZcGhVNmMQYAK7seQoo5kqZuSkP89ZV8SEQKqEFtvF_LDfjYSGdp7MNSk8jIMsYDAPRhkcs38MCK9QO_qAIN19YQFM-vCNQ-3fuh-ldxE6SH0I3Ky9kRJRpUtDLZGh1d21RYU8-lvidMNvmAWtcOlpd2qauzCvJom4QHvCWSR_U0kdYQA9qDpP8PQ-wiSV2T-zbbCiHeo42bOK9VDJw7P0y05-NZDtR-eZGL3IIJdXBLsJ4txvioigWcuPrbtZxhbSIt65YQIqXB-cJ6yNKLYU9XBHsbn15iO3qRs29Xzy6Dw3kSMNqpx_jIiRhW_zkCVENZbh0sqUQijhuJT209iXDgRKrHbVYQBmKpJ-k3KgHpzCFjlafvlL74tQrFKHjUcd88YoM40KVncle4oE0aXTemb4kn_kPGwtITnSJNEuXxGsJMnlb67BYQDyY7tnOqashT_8k7vUEgPyv3dH81xzHPJ_19eC5evNGnGjD301EewsxJ4And6MsL3jyyjh_mo9dvzqQBL6LzY9YQNYmb7O5QC11RkkDUWAORGP5Vf9VanQSx2i5sV2itVSHJJP2Rxv1RCFdcZEuorOOZa7-aT4zgXlYGlP5OLY0XkpYQCnP8KFqQLTdy52TjunYrO9rCPn7qGazQldcWakYSovgVFAq0qORLVgA3VTGnO1QPUt7_pJdbFEPqUzBz3AG2pVYQK6x1zFUVfKqWBojcrAgZCL7lFW19tQzZBmB0DIy2w1Xs-VLMH0XxBdDbF7s4xW6Q53zVcI2jUbHOtWyAXTcoO9YQN__kiPhb183-1diCgfPazLbMBJy8DfeTyUKLYbX5s8Zvrh1S9OnUmD2X3fLizF2_WEDewg72xr0KJoshp1zQw5YQDsuxDsjSzFJjdCs1gys0Bw12B4Q4SwM5fqzqP0Qy_iJTVhzmMgpS5Y6p-3ErPOSCY6gnJIrwXHd3mvIgtj5e_BYQH_490p9H9OqdewRehdNStTOQlxjd5KBcOOatoT-bu3FTh6RlrThOM3MFGpwN4Y986-Ke2c6DmdXdHEOq9YBHv5YQMFfFoMMnQcgfYVH4V8tje2lsAT7iJnnq2pdPle4N_EE6-gcbkftls137X7Zd0BQdipxZecuNE5CaoN7mTcLo6dYQPrTCHNk0WOVlGbTs5IUjBN3cM-3_pR8GfxcCwDRr4zHUem1KLNxvpa0B9RuyvDoqGGcoCrwISfOqodA1NO6o1pYQJGvDr0cxTjcOG2QL304rJnwHONkpPkiOWq63PYuRP7cV3KKCrmr-ZEbJg15iqpkw89i7aeXmHJ0EWoVTY_pDaRYQG-QXdfn0luoPdoS_n0PiyPxUWtSQvY3mQVTo4CeSKiqkVFsg7ltK6QgEYlxgTjp-CqkC4rtyJplnVeSz3zZ4ERYQJiV9uNPVC8gLPcaVRVQpID7XvDUxTsaiFw9VYonD20H3PEGUpX_LrnRb6HzmV6ID38MIZgehNwTBd3VrOGEhyRYQA785d4MBMjzBLy7U8I5f9XepHseLyQ3Xe1R9dpHmX77ChOtGs0ldRsmioZEDQA-Gp9bH-KCugggb9sJMOSFX39YQLky5grsAs2LGJ6GBXKeJIX6_E-Q33K5ZRAMgYbVfDd2ZtxmOjqMz8vb9yRrbEBmlHvGAdHt7tbOrTmE9Ux0JjhYQAeuUc4ReYef8q7oKCOlpOKMQ5JKn61xrWA6mpQcW8s821qYQneihScpNco8n75xBbGoJxhpN7k0EN8otd2oGadYQE-ke9aQE3DqxNOu1BuwM_mUdiGSxBuU4AhZeUD16WEN5RJ9QEZubpji6uvff-K8JkNwdk5MTvl5X-LnkSmvqMlYQMSOEMZgSne7BYsbCudWO0STYSLbomREjRqj-ZR-xv59A4e21a1iohSE8jmcmei-Go6jgzO_H1MrXplxOhN-cjpYQDYxmwv25iVwJPsgpCVlC8SE7lNM1p1sOTcGGvfd00IpmfInuP_ePbRvq2RiXD12l2JxUTEpzFy-LC15KpEJgClYQD23gEYMcL7r1V3BPtPJHmYzet7YaNgqySbcwtDLTfivWSoGTioDRxAqtaVgGv-uh_PRUP4ZnL66DLNTzf-9JSJYQOamRgl6G6K9RCRfXv-dfpN63LR0qN3Vv9HhQSFFqNpvCCkKoBf_YHAxvMN7tvljQQKSaoxllF8JZDca7X5RnLVYQD243NVblfFoQrbekkYn9X546x-dw92WYdWoIVTRYS80GShCvtvsNUrxvRS4G3LIN7CFTHMUCu09Xrgy2Fk0Vo5YQM5qB4YpFHF0JjBazGNWdYM5a41SRP3diLQ5dPFZN1ZcUGsPtjtx9cXlxmWPylq7yJiBloIbVp4l-X7P7pHVajBYQO-NN5XX1aYOuHk0zkgHaVCdrwQqIIU4f0JQ0rKe_1L4izBTj_EPVCUYP6y_AQCqa3cLqCk8i1ObfSw6pKEIoiFYQIMqXkmoRJ21Gb0jXQAnb5x-tKYjI3cXahzqKdWeclB3hCOAnnnAwHGcTUoWrVS4fwiI-XZA_kMq28J3id899n1YQJVpZsBmtLPqKBEdvIJavlOrq9zfnXH6joWHm0ojzzEL7ce3mSlOlhlphIDLmSREi_DudsEcP1pLONOFPeRcwMZYQKfoDmelaXcvk0d-qp2JIbjmlbKNVEXxGfxuAoHS-IsIMwE6yPYueAfQLb0bmQtqy35Ypje-Y7_vgfFQvxIND4dYQBpzMS5TMp4HuV610qernPmQgQRC3RCb1GpLzhpPx1L-yUh9Yivt9uV9xuIFsC0Abn2KfEm908Tqcskox5lelFNYQGSNZMivH6Fh9uschxfqCHum1YZJw-hsVPOpRzocwBZa49EVinay2XJznVJX-xw7PkgrgzX1BqDj_imEOZo1zBtYQMAfIzqaT70oixPHVCRWi6gge8G9Z-C2Px1cHdjhKmhim0TmrBzw3QB7fBapjsW1acjm-BLROuSbRagIVdlVkdJYQJd0lEbVQVuH69VpEsJiWQxV0dRLD43gx7PfxTVCjL_yd6_bRFXQ9BXk20fLfeESUxr_XTlhp3g0MGfOD-Umyw2CZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};