import { ConsignmentSecurityDeclarationW3C } from "./types";

export const ConsignmentSecurityDeclarationSampleW3C: ConsignmentSecurityDeclarationW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/consignment-security-declaration.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "ConsignmentSecurityDeclaration",
    documentId: "CSD-DPS-2026-0518",
    shipmentId: "SHP-DPS-SIN-998877",
    issueDate: "2026-05-18",
    consignmentRouteDescription: "Denpasar (DPS) to Singapore (SIN) via SQ939",
    arrivalLocation: {
      name: "Changi Airfreight Centre",
      address: "Terminal 5, Changi Coast Road, Singapore"
    },
    securityInformation: "SPX (Secure for Passenger and All-Cargo Aircraft). Screened by X-Ray (XRY) under secure supply chain protocols.",
    goods: [
      {
        description: "Handcrafted Balinese Silver Jewelry",
        consignmentSummaryDescription: "Valuable Cargo (VAL)",
        riskObjectText: "Cargo has been physically inspected and X-ray screened. No undeclared explosives, incendiary devices, or restricted articles present."
      }
    ]
  },
  validUntil: "2026-08-18T05:51:54.537Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "CONSIGNMENT_SECURITY_DECLARATION"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#29",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 29,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-18T05:51:57.951Z",
  id: "urn:uuid:019e39a4-2002-7775-b800-908e01e61623",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-18T05:51:57Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAqL8vjqruraRVJRYyY5cd42RSaSrvlsMWRgc_GYXEp8bGHlVPLWs7YBlVRMjUorfZs2s7lELnk30QNTDq1M47tlgjgCQCoFr99rdchFglspcZbYYiRr0lKS9-I9sY7oYy6TB3r8lYIDG-_prroIkDeIKGkVXyG4vHP-rEzd9H3rFWNEgqXl2ql1hAoe_SuIcau84xPsPg9kgjLBTDHSZpNcwLtgFJ9N3E7GFrwBbRmWkNhj1v62vbKeFhPpk4ecflixBMmXf_QhlItVhAzOegRqOKN7nh-K0KdvQW4u7B3KRhGuSKwwjZGieez5H-Z_Pk3wKDpnsD1EJgtOsoDaYaB9niwKWuj6991ESIe1hAXp7-GxYvgs-JHjCdwLvf50b1DIMpLsffhGJ03LvRE2iDUdMnIAKGtpxEVkE9vXmZfLJPQydykSs015c9n3X0A1hA3fqyZma1L9iMvxZ1eLy_QbA401XoXeh77E6zwyJyqdBaAG9xtLIeAuHvlqg90XltIcqsnO_KQdkh7NLK5oOalVhAd58xaHuM6M99hOIjv5ZAlaNY2VDyEARzo2UdyqheMcs_oS5WHZvFVQLOUeN18f2tasj3sDdyzIzmBA9jGQxZclhAbnEt9y_m9bSgwqI3RUb4qJiJlnTrUXj56fIaPrHUaFG37D9JitZbjFPknhKA5A4LzMqI-gHujcRRM18oZfyuI1hA_IjjcCRoQBP2IH9Zj-iqDE-QEYmloNYdR7p8AZ8fBJVoupxWALK9-yMFgTrd_QFk-_C1DH9ac3VISGBvhBPy_lhAlGjFgW1-GABMNO9_diJKhR0BdaILeKuci1_VJmNPzBPZS2Nt8UPFJ2rtCmxXSM1Ite8nxCHUyD47S9Q6Fpiji1hAMYCd21cWRRhk6e5u69Z-2Pr6zb3-tKgN5TLxaZuV5SNGUcQeLWnqiaSKuaveGHKDcPQVEgK2MQhlmPTwrSgMQVhAdpQpkzLOt_OPbtwE6egoY_f-2xSZuVouP28i89yo-bGlO0pZal4FvPZth8l3Qx7G-5fM_2lFTelJucFXhzzkvVhAadKG-KDrlxJ0XVlrPgSg_C555xuqNOm4RpgS5ocSdegXJjsukjpczWQKFy-fBPrYWxMMcoq3CkjO4R3t_z-_ZlhAsDuyJGzDgDSvMaL7K006mu2FF3JtSeEv4ConV2iPhHXOqI7crhRB7pTZGevkWEPMp6dhBvTPxSHpYDx8xGtA7VhA4TqhsxrEC3Ld6ETg903XCvNW8Dc850zQsI7yDkLXafzzVTnrpV2FKyIVP_BAR8aaAaUOowQQpXiybCDUXNcVdFhA0-Fl-rd6a9yFUNImZDNXFFsPOeUnKdxOnYI9ifVuXWUcVkJf6GNSAQMeJd8JtFR6tHaE_lCJz8qUpoGbK5S4FlhAyyP6TT_Hsl1ZG2o6jIDpa3ziIDv547kLhkLpqUHp_gF_HWZjxJOAjPOXww2iHQrewG6mUiCJ9g0hvDAN5S4VelhAN0qxYhn5_gYG1iFb2oxDctKGs3FosXDO3FnwAYM8mxffRelSquYqzh0WZovMReOhGwTGvMDEHMxzvrhdTub8EVhAqpE-wXw4zbsal68jj92Rw9-U5p49M5RgE4g7AAhQxYeIxFezG5lls5C9bMHUeOZe1aLEt_DYZzXW1p1SA-U1FlhAl8ASf48nAazjnsAJ512m5ULrrL11Bp571ztw8xQN0evJY25dCK3pAhJjdb98Y03BXNEn48JFwLvJ9CF9tB3SylhArV6CxupSlF_m4v0Y69XByNFDYIiVKmhldjpMh_wE2tp1YmstiFrtLgC24csVxNRpXjkj8LDtv1rY4DAUQfWAe1hAKhd-OQeDnJ4CBKjj0TcixD_L1VxPURY_0UaLqfQADTnxybZmi2ZAG8vMi6L-wImlzoNj3n6GHUGoCUh9cUCrvVhAibp1K7bMfmsQxLF25WLV8zbGpVh8u3g93wggQr38Yh_NnUZvvptC6Nq5QOj3ffV2DTNFqL6gvgsDXF2g_dw8TVhAiKs2SskSvIW76RjcUnjmN9M385xSUexaNxC8dSDpoPEyWKOC3wPtQKNnxvNJX9WxxJvyrt7TdRNxDZEVFKAqGlhA0US587pHvNFyoASeRJ61-QfFiOQsvxUGTOaHb5ttzVMCYFIl4PMDzeg4FdKuZq0ZjZ9D7OEo1hp2iK7To837qIJnL2lzc3VlcmovdmFsaWRGcm9t"
  }
};