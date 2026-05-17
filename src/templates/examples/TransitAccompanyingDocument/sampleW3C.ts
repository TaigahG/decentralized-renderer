import { TransitAccompanyingDocumentW3C } from "./types";

export const TransitAccompanyingDocumentSampleW3C: TransitAccompanyingDocumentW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/transit-accompanying-document.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "TransitAccompanyingDocument",
    documentId: "TAD-2026-NCTS-001",
    shipmentId: "SHP-NL-IT-554433",
    documentIdentifier: "MRN-26NL1234567890ABCD",
    customsOfficeOfDestinationName: "Milano Dogana (IT012345)",
    customsOfficeOfTransitName: "Chiasso Customs (CH001122)",
    consignee: {
      name: "Milano Fashion Retailers S.p.A.",
      addressLine: "Via della Spiga 50",
      city: "Milan",
      country: "Italy",
      email: "import@milanofashion.it"
    },
    agent: {
      name: "Rotterdam Fast Customs Brokers",
      addressLine: "Waalhaven Z.Z. 10",
      city: "Rotterdam",
      country: "Netherlands",
      email: "transit@fastcustoms.nl"
    },
    consignor: {
      name: "Euro Hub Distribution B.V.",
      addressLine: "Maasvlakte Boulevard 1",
      city: "Rotterdam",
      country: "Netherlands",
      email: "logistics@eurohub.nl"
    },
    customsOfficeOfGuaranteeLocation: "Rotterdam Douane (NL000555)",
    typeOfTransitGuarantee: "Comprehensive Guarantee (Code 1)",
    monetaryAmount: 50000,
    monetaryAmountCurrency: "EUR",
    customsValue: 250000,
    customsValueCurrency: "EUR",
    netWeight: 4500.5,
    netWeightUnit: "KGM",
    quantity: 15,
    goods: [
      {
        description: "Men's Cotton Designer Shirts",
        numberOfPackages: 50,
        hsCode: "620520"
      },
      {
        description: "Women's Leather Handbags",
        numberOfPackages: 20,
        hsCode: "420221"
      }
    ],
    conveyanceReferenceNumber: "TRK-NL-8899",
    modeOfTransport: "Road Transport (30)",
    sealIdentifier: "NL-CUSTOMS-SEAL-778899"
  },
  validUntil: "2026-08-10T06:15:33.335Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "TRANSIT_ACCOMPANYING_DOCUMENT"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#24",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 24,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-10T06:15:37.221Z",
  id: "urn:uuid:019e1086-e808-7dd1-9b6b-818a74030c86",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-10T06:15:37Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhANRgNz9bXOgDRHODJUL5Psx-mldSUx7clmL9hnQ2BBVRHGXSiWn0tN3P92yljTW93F5Ip_Z_sIGZOhV_l3UnjrlgjgCQC2Gew0FOMAz3lZ4ZOs-3RftGFQd110pIPEo7w7857Oh9YIMtSw0taxaL3QHtb8sGqz-5OA-zyn9nnmiGFdVt4DdQkmDZYQOpNNTwfIvoekBgKEi-bwsfgyzIuB1dnYnkHTHrtl1przEzmbk1DAXBrHZaV2-xAz_uTgj-z-3JzoSkis8ZuxqRYQEu8yKEAmWHTMsBdvJYpoDdbe_tXbJqpy6Yj7z_uGW_QIo6FOeR5AI8amotiBbFqQyacET8OlBuNBaMpTs35ZUxYQEccM6n-HrMi2CZTyfDKgmuW1ePlir66RnUkwMr7H2ZN1kAbYjrtOzFRt5whvEYpenYAKbY5tWnkq5nZ2L--ZsFYQEcgvq-O1-aHPvFv5xbAF5ZUc4oGGawQ_pboo7-MwgaTEWYWc6_pX0xie6DBnsDXuEO5NMujtGb57Lf0UlqdQWtYQLHWHXG740u2VA-mJhQObkeRHcZKusDtyDQe_EwOwrVeyUtlEXDDePi5Ucn8744Lo4ZKX8qGR5Xo6W2XwwHtpx1YQDQGgGqxHBM0J-JkvTaHjVDjW13Qg-ys-3vrUVXNQr-2bTdbBLRfQM0d5eo57iYGf5PV8wKSQHfDJn8N6-8EaQ9YQAT4eOPNgETKeKaFDQepjP7FF6SPdogzt83VdJ1MSvVK_i9y8SQfzGxNPovK1mQdmmh5eIrbtGGG5lh1quancFhYQB5gnJZJycbvpbqkOV3k_2WUBTEV6m95WnXoy0cRXzrPQtNQl7i3YJ1tEpatcwNYjSRVVIIKalobz1cQxcPnQPNYQChxW6LiYS9WCkU7qgxdHYy0cALCCWOiXDl_pHq4bu8LhlgG1beYchpl9ssMTawr46jrLhmifbNjBtYvEb0UrrhYQD6Mt2r0DifpF2viY_3FoMrvULV3hstptDptDSM-ilWb0F-A06bNs6ItdS0Z6WpneF3kAVCdeFFT4N2yfMryw-pYQM5pHkSX4ZXhxBe5F6FkzeXNyVZ_KsZ-eTE8pfBH-B9yZitd2v8MQH4djXq8gfPJ9Jjtx1vNrwRRVOAFkbAHa3lYQNdh4BQ7hxtYUviEG273yqFyjaB1wS6lPG2vAdwlZcpMV1DfUIQg8lLUyI1OyWCbo-QOxNHFCEetPFShyr52vnxYQGpWDca02zytdBAnyAzliiPwThNn8gM69hOl_iidfnsDQ7ZGnPRBsfZpxMdXwWBA-CY_ad0leR7QXj4Eo2Oh97hYQCE6RxWa1_nsAoTN5C8WZSnKXmcImBl4IOGSQgAf1P5vNzJnwN4Gf6eAMSrFwuS_wHTwctV4ZbXvBQ4-obWg82BYQBrrXUqb8iEllkhY21i_ejlVTNpCMzhGPYYByZzUsT2X2dz6A3NjMDGiXj1csMR6tHapmCie8wQXi7ZGjUCAk5hYQIjgtrTLCSObuBJbEVI2faoKuyjGUetgE5fQxY6kAx6XI-RdpaVti6ectBBkhh9N1httDrwDvPxaJOLq1mwf9LNYQJm-expaxVOBP53GrJ-iGrm2iCDweqzupKNaAnzFWsthsJ_62MEeO6lM4Rsd5qI3IyFcFQ-Ae43EIdeFD_yH6A9YQE9A6mWExVGIzQmOVFYhbWkceyUlisZWsvUnObq9_Q1wDjb9Ijm-eSrfK7yLrhXga1c7crEdkDLRCrb9q5d4lQpYQFnlRX9gZgexZjSlk6WFgyRvV6_EEe62tm_Y5wmHVRjVya2NEAbZDTQDKcVrZ0iJMAzHQ5-VBYidKRd23b_K4S1YQElCp0EU9Sl6TFb36N5eel0w_aKOcZt_g6swslKkC_AWfVtmljyvDGEdSs5lRkH2Fgc8_iZY8yoQldvgEQL8dnZYQMYh5TM_6-WZuPj6m-roiqAQusmi5y3X3qTwb_zuzFrvLGwX5yjf5PJ6zbN92Dk1Cbp69A2_geXkAxcIsOHF27FYQNV0svqFAIZFp9YCH-jx-WPJ-hSWaQ8QlLWwtxCVaGsgGtJfaTFBIamhtq8hNZ8xh2XjbcJUMghshZeUNwmk5BBYQCBCJUSsDkF8gt3BNFqYvqRRCM4GkNwhLUPEXN8EtfdC2bEmzKBbU2eFIi7c-gmQf27Hh5nA3Zfnvq-0xN8myPJYQBGC2UPxtzakbHhd0Nl4G89PrQ2Zj9Nc6EGDnEQE2IS7SPJaqqRZxifJXv0ADkuFdTyoAhalkCIMGk_wGt6Z_c9YQOW5tvEe_YDexd4I2LGX0m2GJT6-AFOKoKYVsZTOF9zQqSMM7xJauYneHlex9zwxTlMrX8Lq475QX-Ry8Rqdv-VYQCPEeHqffgW-RZDR_UzQM1cS2VsPZV73D99WrqC-HXpQERR5JrwXRrKCit9wizayCSGFyck0ChQySnv_woYOjptYQGkDvbkHLps8bbDgpHaDijWfWVj-A0n473aIHqSGgKozCTzH98CEcS_vly5PiwGkGC3XSM-FvmnuYZR-f3Zep_1YQAlq1v-5ONQOdsAN6PKSazatXZGxZdC7bhKWV5L2-EMYTxBVVGEIuFNvkdRYiu_1GES1CsDrCZeppHsJZLETFCxYQP-s6YXPWtTanIIPuZpN49P--XgmjTsQp0mq9halcNCdjH7cr9rZJ8sQ4f_g_h_rfU7JUZYXStseVxWlkaToCulYQAtrlygPVnaRR3ONZ3pwbqiyKyl8WuU9Pa-x2Tygu8I-rXgjAsnAJK59qKiHH0qb1KxKcTU574bpOV9jxm1C8nNYQL0I1GiaCfOOOfFu6HLkv_8tubf5Q_Cox2FTZtLdGPLqoNS8PCYkws669NAfSeNJKDU2FcvLkXPL2QQHRM9F8tNYQMwloSPIq6VLQr4TwcYS-0xJvpTcWbUFKGKyknUaxoAG-by6Xf-rx3kuSjHDMDmfxq8v04GbduN01Dw7xTqBcSZYQEU-s7QCKib7U2dGPoGGs_cAT46BogOvA2uK4dZxwDwdS-67OsZ5gdiw7mWRp0qmngE5WOAxP_JXexhZXEks-xtYQOtKDduNDNmtQIA6VUjUMmP1sSIfQDyITjENJPZYgFBGGCqwCS59PAlzSUTDB9QtGd-c6HCmvwHUxd_Zkt6dOlFYQANF6G_QURdekKmUNBN41_gDLvMU0MG2CSbpHsIRj2qVM1UomeFhljrTU8a7tkqoo0FSlG5aUv6YlIXWIfTqMDxYQCLC-yyQXfWSiQQ66K-XKQr_nFeSnKIkoP1Lq-_Y9B5gAfMOH50rQZ9n8oF038U_knUAHTfREnEsxXuW5DC6ggZYQPeVmx76NM6RWc4Bhij3m-53ve5zKYH3L6fnWAw6hFL_tmAgngjAvp6XltKuwp8BDZxHktSbUDdymddbA65_aFhYQKBznMzs7FCSzXKaIQpVGCoI1s3O-MnoBTg_nwbBm-RdPuBmPS0WCy3-9IzJCo1TIII6A5LtJzjMskqpdhmR35NYQMFyuxDkYY0CHDFZkcouHznx49mKEH_YbpQFtaGVBhjyPIkD7oC9z49OTy2OHPBr9n_J867F00YFfeCgaQWmJChYQJF067ztCVDjis06mAC3Cr4irmfw2jAmq5k1SvCSXoG3d2lDmZD0VMU3Sbl2LTB7xHnB8cE4XFbZsl7mTQo2-NdYQHcaVRUvY3gOl2ce_hL4_uoBQoPhAUEhedzwPKUn9V3t6gBobUmQ_mfV9EyITKrqdcVNzzvIC7xAOEOqxfFtxVJYQIyEi5p318sOPPWm3QBAdYZ4yRz22dzpRkuKZMZJz5c36DvLLlbFD5SADJ8JrWovPv38WqdVayrvtF7Ul_rUUXFYQKUVTLBMNCxU6KTV6VDsXS8aNXhLgHT1JXmS86EJAG-K3hgDXcLOPGtyFs-loIbvXagnmU4g482feeZ_BPMpCClYQHN1_-sFKTGgH2FVg2OQaimU-ELoYLFoM_JZXUtk4ud1d4Z2_neLn8XHM5Zcz_bdUPk4PHpQ2HeeB3K34V0d5XtYQGt-NSzmdg2rZF9O5o4HxaFRhavIXtl26CbNXja1YmEYrjWV4bU73ZKT7fe7NgN6vBJqvsrTfgXdZkC7L2V0H8NYQPCTMrPLSzWb375tf5pIqQnn2LVDXarHntXiJ8gHpoFoHZECq30rArVvseTNle5zlAuVbLctYj0hTEzAMQTw999YQEgGyoZVNL6jImgX86f3JLVsAEGsAY6HW0ipLsqkXqkYKuOMoYtRtIUqFbdWeetVU_TQ9uryMUGm_hZyd-KseU1YQIZqYUh51OFf_XqHSI3qGNgyNZbEEA5EDyJXl5h9LwsviObDAJUgPFkmyNjqKyxPjN--0aX9XfJOKDNWKwvtXQBYQFn4_J_XzQEjfz1M_4d2Koux1Nk-GDTgpYAI9-amaE07XO9RWofOlKP1t4317B-pQzvlxrgWUQWaP3ScgmKjFqtYQCvMQWzMmnpiJ0q_5rrZlBpk75rKyVSGY0eK_xeqfG8sNdSECoLpLEph7J_DF3uFS2cBqc6n207P9cY0Bh6TqARYQKOZ7jigXwlPe3RRDKMTBVilJrXlxxSt7RR52XYe13lJJ5aTP0gw35xqc2AkyBcSDHu0BGCirHjYxGnNyzYSIO9YQKSDnBl3t6SC1Nvz8J25FIKhSfqRF4YMc2aEf88eH3_5vGVNDBnto8H5m5bodMY2nQU_zb2tKg7bd6M6_I1L9JpYQCTSAYgeAaWoc4zaPNGncomwFMlglMDPBetSgJ4qUgDu-miDnqIu943KL6tkVaFI3K3ABof9MvLJkTV6auM4ZLJYQCJLpxKGCRrRsdhxPreI7gnlRgJfw6doPsG01jl2Mfsehs1LvplYtz_edP07F1CS5Um9wUDrJBlpU8IEeQDLHTuCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};