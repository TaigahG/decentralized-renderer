import { LetterOfCreditW3C } from "./types";

export const LetterOfCreditSampleW3C: LetterOfCreditW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/letter-of-credit.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "LetterOfCredit",
    documentId: "LOC-2026-009988",
    shipmentId: "SHP-SG-ID-554433",
    documentaryCreditIdentifier: "LC-DBS-77665544",
    documentaryCreditDocumentIssueDate: "2026-05-07",
    documentaryCreditDocumentEffectiveEndDate: "2026-08-07",
    applicant: {
      name: "PT Bali Tech Importers",
      addressLine: "Jl. Sunset Road No. 45",
      city: "Denpasar",
      country: "Indonesia",
      email: "tradefinance@balitech.id"
    },
    documentaryCreditAvailableBank: {
      name: "DBS Bank Ltd",
      addressLine: "12 Marina Boulevard, Marina Bay Financial Centre, Singapore"
    },
    documentaryCreditBeneficiary: {
      name: "Singapore Electronics Manufacturing Pte Ltd",
      addressLine: "50 Tuas South Avenue 2, Singapore 637123"
    },
    documentaryCreditAmount: 250000,
    currencyCode: "USD"
  },
  validUntil: "2026-08-07T05:48:19.331Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "LETTER_OF_CREDIT"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "ea50ff1c801f54f07da84dff7c7d1aae1e4e079b680b0cf758f90e2b85d2d0a2"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-07T05:48:26.828Z",
  id: "urn:uuid:019e00fa-f358-7773-8678-67ffd1b15ab9",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-07T05:48:26Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAMW58NCapwy3d7OL8I3vS3qMBzqPmg63mbVpt88i_9gT02UEVhlDrDGI0SAgDUHbr5m80pA2Xcz-yrZMBns2BG1gjgCQCCXuOXMM_9-aA7_PSOqOFAeIR1mOuH_BV6WUkoLJGd4RYIKPwRoV1FnlQ3m0iizlFwmzVN5Z6WRNHtU1vyCMsrxy5mCBYQOL0JlnXrng0W0cn2nQgbfedF6ZDT0P8k8dW2rEz3Y9yWTgYdoGOcvVDznZLB4UP0yvf8VK-cynyS1P8qRcmoV1YQCegiye8GE4VjtlqyRgMzZDMq-3TNiCnyt_x3knosg-u2qdYHqXKxSZLYGHC_P0t-qNASoT9e6xYZ0i58zrcpSNYQKC-IsuQOBhaGwSvy0-EvFNQ1klEFdDGav6M3HMTngSboxgP7majxEJixUcp7CsQazVAvSQbQObyWc_Fi_UVP4tYQFyWv20EtEMvw-C8-wS4g97FOrvUG33wnqhkJgAOvJzxp5Wg0oG8gjFXMmkOG1HBs9xW98hNdQ-SHaDCkS8I9YxYQGFmdVowhluBozOaeDjpOGbMADuLnnpl2I_tooKT7-H5czegH5aKLoMAv8NJebVuMnuzR88AtYEB8y-IUIFfWxFYQNwsvGWgMhocntTzsQluRcU4jsEWLMfVAWFVlD01GMJtXE_XEw2cXjh57Zc9qRc5G2xSb7Gna8PqQ0eyYX09F4lYQPNT6PHWqCQZbgS5mmPRPFy6b_jRR8Ri3BMgO6owEeeboKDzyEVwMbpTRIX_N2B7jZvuAa6mFgrw4Rwgq79DOuNYQOPpl-UTFEEcU7o2OEQ6Ra2A_8l5YR8vOJEfxasQiZybXyTd0MfTZWHPuZRRDJC7Ke6jyWz8hxyqvBEYWMIZ0cxYQLCnAcXbDGmAI2bvl_0HiD136TZkDFlQxlkYoo1FJe1bR10yxcrEiad8Ut8gSd_MnIxx63hZVCFQWnDRwn3MHDpYQHLdfPFHCVORjS-i8bqkjtDP1kLvGAPUUTlZZkDJU9mm_vxuWDn9Ttfi_kHR0sZ9u8CifD-SEsUX_5gXyc8SRj1YQDoS7cMzIAPnZhvpY8cqRh8Uqc6D8fjA8F4voVid2iz-u12bD-gjtYbOEaCGe4jB6QSeSb5IvDe2kc3uaO6wJnVYQOYg3_2JmiM0iHr5ocYQak9FcfRW03DhmFeRF6cFkTMscnugQPzVdYCEJzWl__j190Uxgv_pwEjxQZ01jJTEEbNYQPWINbzorJBJClZDV7gFa48OkmBbbunLNZABU4zfb9gCG1eUzZVWNzio6BgklJLU985bESksBy9GliDS9g1PNThYQAJ8YJuwK5ZimwLcXi7EDwMpPM9Xy79omCDgPMB0EtgdXY2BpFe7XhqmjfsALceAuM8P8qvvf7ucqxTPPGXFKR5YQAPqgsi47pKYM7YUptzTxyjXDx933jn0aCd9OFdgjw-VqsPNy9Desj9DvgXqFx7kFIZYPtLBg4ghWxk1XtOK5LhYQFKzoZJT7XNggfLZKRYS2m4IYzljhuV90hM3uPMq_snVJvlsWalQBa5YJAXA5onkfjZC57LtefJXPlluAVO6DttYQDvOLUqnlSkvwbickEMyPa3TqY5Y1C9YAsaMiABoF3jJ5Xsj417LijUiIJWdA4JKVlVOWRTrpZOzVBtRp-xZnP5YQF7wOnftDk_41bu0J2HNXf-HlDftrK9nPTT2cf-Y8I8oQ2tPwp6GsjK9QW4fAYJhdI-U0E1rT6PJOWm6fYprrL1YQEgAdRLNNQGuGQOEyup2ygC3fURXsvlVo9Sy0ofZ20WVcBc0FTNVauQ8WVZSy743EY_N4Ck0uFitt-eiDrVYj2BYQKXbWcj9UAmcEjwp5RJVKhVG2pouMexZlLCrVz94ia5LA1LmxEc9eLV3QvDmQt9lEae5bHDsebqkJwIhenpu8pVYQIbe0gb1cvz-lEStrxdLzS7RXBbnUD2F8HzzD7EGo_77NjsuFb8_A_5XG1AejI_66qqJaCGkcFD_1kz1sBdpM_ZYQPI5k9FX9JWoE3W4bgkIm1cbzvZxOr9aBSsx82wJatNJ-8OXtX_jxoFPuTGfNJ74l6Qmbg6mHWAaPmfTW7cDuttYQBsLHFFpm0aqdz2FWkDs3VIiJFuoFuZz3HnF_PEjER-W98YFQpReJcLDjqOOCC5B_e1RexgRsQbPIKWXNQS2iatYQKGrDn6uJQ5QcIPuSBNMGW_OHYfqhp7y99jrr0jaaz583HTLjrwwiRi3zMPYjzEvqRFmHYStk8mqSDQVJdZbER1YQEDpWvSatDk1H6U1YJ1QzYQvtG-PWOUzH2xgsfgnn71kIvoZxVu4XkooiVZ-_JBGY1tMug8LWKzQ-XoRfnEGYh1YQC3iBA2l1HaPwKni1w3cUyjSxvc9vkjTNTrdJLFRMAPFpX7ObLq0U-UMllQr0CJzMktEKdoiD36kA5qsBLZAxjNYQKHLQvD7p5RLpugcDdU_PSST1CTQI6Awrw59NewGXz6CkBlwmPkArW83_BmbKJhe7tIu3RaIA1qWrI3RNOy5OudYQKb99jmA_yOItFeivdRxQ8-nX479VNa9uZ8DwSyVumrMfNL_7bvsvEW-krp3y3FatmP7j1-t9AUU_5DV8ma7fYZYQBRt-PN3ylyWki-dtDQ7On-Nv5_5R4m1U5mW_RSSn7yJI-C6WH8i01PrUHvSCgFeO6qHqwgGoLIeYpD7r_jkMzBYQPTh6VAbx5MOAVPmDhgRUF7q8kQxwiY_u2Y-jK3kvIIAnlz6BTbKnYWgtrY8aEA5bCBYNpekoB7RvzFLvYaJqvlYQGQWz1EOqsJ14VMdapIlpM0Qi8teYq2hlK4jy3JeSlOQuNGtQDAd4ck16XlL68twKHw5SXrL4pDGi4Yfaf__2MZYQF6fvdwmYUscinkQ-DRTSjWrsH2PXbohHO7QykYsrpSbaSb1E3h-HwA3DUrmHkLybEJNY9_1Dlu4DWlFn-nijnyCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};