import { CODEXCertificateW3C } from "./types";

export const CODEXCertificateSampleW3C: CODEXCertificateW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/codex-generic-model-official-certificate.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "CODEXOfficialCertificate",
    certificateNumber: "CODEX-NZ-2024-8899",
    countryOfOrigin: "New Zealand",
    countryOfDestination: "United Kingdom",
    competentAuthority: {
      authorityName: "Ministry for Primary Industries (MPI)",
      authorityCode: "MPI-NZ",
      address: "Charles Fergusson Building, 34-38 Bowen Street, Wellington",
      country: "New Zealand"
    },
    certifyingBody: {
      bodyName: "AsureQuality Ltd",
      bodyId: "AQ-NZ-001",
      address: "7a Pacific Rise, Mt Wellington, Auckland"
    },
    consignor: {
      name: "Manuka Health New Zealand",
      address: "66 Weona Court, Te Awamutu 3800, New Zealand"
    },
    consignee: {
      name: "London Health Foods Ltd",
      address: "45 Oxford Street, London W1D 1BS, United Kingdom"
    },
    productIdentification: {
      descriptionOfProduct: "Premium Manuka Honey UMF 15+",
      hsCode: "0409.00",
      natureOfFood: "Natural Honey",
      typeOfPackaging: "Glass Jars in Cardboard Cartons",
      numberOfPackages: 500,
      identificationMarks: "Batch-2024-A",
      netWeight: {
        value: 250,
        unit: "KGM"
      }
    },
    traceabilityData: {
      lotBatchNumber: "L-240115-MH",
      dateOfProduction: "2024-01-15",
      dateOfExpiry: "2027-01-15",
      bestBeforeDate: "2027-01-15"
    },
    attestations: {
      publicHealthAttestation: [
        {
          attestationStatement: "The product described above has been produced, processed, and handled under conditions that comply with the Codex Alimentarius General Principles of Food Hygiene.",
          isAttested: true
        },
        {
          attestationStatement: "The product is fit for human consumption.",
          isAttested: true
        }
      ],
      fairTradeAttestation: [
        {
          attestationStatement: "Produced in accordance with Fair Trade standards.",
          isAttested: true
        }
      ],
      temperatureDeclaration: {
        requiredTemperature: {
          value: 20,
          unit: "CEL"
        },
        storageConditions: "Store in a cool, dry place away from direct sunlight."
      }
    },
    officialInspector: {
      name: "Sarah Jenkins",
      title: "Senior Food Safety Officer",
      signature: "Signed by Sarah Jenkins",
      dateOfSigning: "2024-02-01"
    }
  },
  validUntil: "2026-04-21T16:15:08.104Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "CODEX"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "62d79e512e04e4671e4d1f8db7d66205b380e29c81f92f3672af7898b3ea76ed"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-21T16:15:09.369Z",
  id: "urn:uuid:019be156-a047-7ffe-a293-6011a643c089",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-21T16:15:09Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAdWbalFpU0PAVYn_gJ7vChh8AJskDijaKPtbK2hEX0CYdRhiQAZwHljmFrtJT9h1gYlsc3tgx7Euk8QN-vct3WVgjgCQDe0P2T3SBDFv4CnutpSGU35Qqe3HbnZLbtlCV22zYTBhYIO6kDZRA3ZIEGpxXHmLrUFZJhU21WDekPkG7oWKTwK3nmEJYQEpFBbBh-yI_sa6hOxsoGo2XYWGdmmsWPfy9jrqOHDlq9bey9AnLR_VsIdbPMGzlTgz7hwwgELYKsypxS4Zd0_9YQEd_NuSM2ONsFdbD1VrHSvDyWf_7nptK6-Yjzpi3jX-QrsP8YfemcBFF09jJoVnnYYJbIxSVAmEXOkufxcWQgx5YQBlByPHW2IPC66DuaHy3XZNJAuUuufoYqLDhOWZkBPghZHuuX67UnfYfNa9C6CbkncGZgzOrSr_TFc00Bc6HLGdYQEQ0qYEGJROfn-4JRELH-1-8M-vrN7ihly5MfC78yhi4liX5Dgmdtavy8aV3Ar8gknFHWViBdTxlbNWiMO39G59YQAtug5UXwiYyES66C4O9gh5aMn8NcW49Q_RRTwIKnm95PPmJn8NgQ--XQu4Ucjb3LR1UvGRA-_nmXedzlFVUL-9YQFQZcQaYrlwsk2RcQKUXRJ3BlZ7HoiWTWRPZW2sc66skuLD4BUvkeLAKyq08oI6QVRUGSeou5366t3NmIcO67_NYQMVP4lpEpfWv5Uav0L2YGonIEikp9m1C0u8QxIfKR0mqAJ4q5E-RjPBqDSYrJfZv5wQm_2SSUT5T5MFUyH35cIhYQIlyTUS0-kRvbzop29hcmjQ0tYxtOzYynC1x-dx27VdtmvDpfdg9lX60Ge_q1W32-WdFZFpMi_IJjmSeihr-AtJYQKMYnCh1SOropHygmvD6Vz3TImvgbFZ_TD1EszXUI49L_Ep0rBLLItW2W34TRcU-6gfm7rDUHeCiwoa7NcNWmcBYQIoF67uQi_hgrd8CKtI_w7I_O7OuJOhOi99OjEz2SzbUOxzSG2_1A2ljNAf2YyM1yKVsIW79NNsjKKhm_ghUTGVYQLmLdl_48uWoIFnyOFf-mB2k-DUAzlkNxJLosrNLcXm9nhWTR6MEB4V6LNvCDMWJNRjbcF-t4H_fNB-mmq4kwHNYQHw1kF_7K6PvcgpL23V2F2wIBwp9enHYPU5hvsZWdUpeJH-pelK7t0e-lJnBpnBdHC8QlFNsNjwOCoHBT05x-ztYQPjUr1SEOZpGc19jc4CJnXREiJtHZ3sZMGyq_pcmHDN4roh2qVaRiSObjhWq-mv2L67C1vZvtHP117huOrlWphRYQMp_unr0o0gK47ptthtnPkHNVzML7Cba_ofmcBy-STGsW5trNEkZk0VTX4-W1ge-mL44zmiBPUXh5tImw9ESFFRYQDGqKsRn-eNFHTM0EzL_oaj4-94NFAR4G94ND88ijVRpW3-sKcXQwpmK-7ptLqocgDCtcu-3UT64sIbR9Fur1gVYQN0iTjUxrZBx6vr08s_05hN5EuzOXZmhQKbQDTz9fZ0gLyJlcW8IGsSMv3xDCOPzzB1r5IAiZrKFb5D6W1yKxplYQEGCZ0a1p2IEjvvdI2Qt4gl4_BculcYkqHGC1jyXHvLQM4LqaieT4LfbXPgUBbiblUW-b-PajNDWjZi0hGZjgbFYQEa1bXjJhyzo7aQ-OH1dPPLQ2UgMJiqDypiHkofsOqogR2C2RfqkkYG1iaHbuv4-bCTmm9Hj0lNnLdvGcrIwMZNYQHBI3m6-9kwSWDKYlkkPlMqih-EoRBUM1dkooVuKrMNZ3v79QLbAzqEPXPuOC_ABUY5_liN3vzbiygfyEMZoxq9YQCzADWarTo8kKmhmt99n0-SH-Xzd1F7_LmT-ztm0Ccu4qGZcUpgaysKmszZUmOyrq5WKAuTLtlS6z01fjVb-r4JYQPk21mnklEEESzL122WE67JiAppOOAcWSze5rP-BUfwVFPwEToDHCRO6HwX7Q-Ct4FFznVb-AzwzCE0T38wzX59YQA6gji_m5i5u1dI5J6H56eC-b4-QQ9SZ0RvWgESbPNyp1kVk59PHeYM54bVgxXjUZheX2CQ243cgsmvZD46S6dpYQIN32qL0VJ5AgzBiaERAQ9X2P3CyZoMHCP2sRvwFLhwJEokVbvpXgS1rksR1A0YwBbUqZECahO3gRL00ArAREbFYQDcXH-BwGyY93WQGPAoCs3MzTNnb8WmjgqTOBsvRhfk2Lyc4uwMCSdCqAWi2P_TV99oT8bIxTqoNTEvchZt9i-FYQESH637G_BHGt45BOj5zrHx30ZEWdZ_eCN2P39vOpy21VlEvOhHblwdiyqQB5OyD1YJ3nSK81TDZUoMJXi7-TUlYQBkBBJ32Io-af-MQmcE3bKu9KX1clMpp6lzfrsrYcoJKuiYhxZr01I2c8DYvssB4r9NVSl6hAy7iXvTXs_DOrohYQDSDH6PHx5am-RzAEFFVWRgTsLDHMo0HH-CqdYfJyyudymC42Kx_42SCaL0JJ8qUbNew0R4dwanzA6B2d8kmOo1YQK5p9bmBjl5h5Dfq9MxclQ71bd9MlaEp0dBGA49vorW888vRPNlDqyRRKhI_rwbOJvM8afyr1QmWRKCA212ocmtYQE184FbOQMLaNkSuQ0H8BvOX_iFbEUbQtaeyNLRvazRRXZNrH4kcCTWL-h9DkIIh0AYvCU55TggIkULSX1DVKXZYQHcJ-a9nqf6ZQDIhv8tO-l2CICZqE7S61Ub5xlUKSYfFRxn414Yt26CI_ujI0TSlC4XQQgrEj9tyXxM4eZNuHbFYQCawe281N0itpbhwFZUIeV8jVwL8qsYQVs3hw85AFJapiyDP_lElSB-GqySx-_YDztNCIWOEpA0dxgsQTmJOuctYQI7vDD7uRzKcbnLJof9sRQ0PAZOwTC8lElCfR3rRmteq7kR05XmzntGP6wtCnQPwK6TlnS38bCfG98X4baCOV1VYQFAOuF_S31UdP3v3jnJJY2RL6fYgwYrnJ8B3r2JrYOsaa2_Li9bzBvfSqS6SBHeP-4pcrLShoAWyEwpjXBJ026xYQCBA_7ktmEnH3RZGeLPzYjZ3OI-BE-Z2UW_hReLC0fXf4qzxcTXx41Ve-DFIZNvGVC_Zxncx3_8p-mN3QlM-CQZYQGNgqd5Kz9wjii9jLfw6gMeuay_npoA5Epn1qNmVWoHJKmfczM8jh2APUTOEBEUGulCbpPYEos2qFYBFdRQTzF5YQBS64RaH-0j0QSXtUEnUt8i02dgeRrW6SQbim6YAOaB3np10a4YTyKzupkKz72p3xhj8dyiqEcNhatl7S-E_AOBYQHZU39WNYuOZUvIfgrHsSLNyPoXsZXgpAL8-9iFIszbI7ykzTBfg754i0wNzAQppU07nA1pt9GJJePbWaYJ3I7ZYQIiUEgBV9e46AMISQ6SGV-knopKrTcI_fW5T9xJzIYSVsrQXL1hW0AV1szybf9OKwWPb7_bdXPjnMh81CwfP_NZYQBtyHh_rAlGKt9sDtKcvyFhVhN6bV_4VBaP6OSFF20KM55CNgbQ-xaim9udROikUHGwC5t9L0Kuc9WyfNY7E5kpYQIkxgLlvV2Vn6Evjx7mOFmYjO_4kkgILLlX8aTtEH4YuYsO7NhornVl49cntrmjtcnZ6pGrV2nVwzg9buBY_lhRYQOQpLIf-h90ztR48ydKdrOAVMC7sCY6m9M-oJn9DAOe2Fjr8fj7I9H7iqfz9E2tio5AEToRm7xhvm2jFpKdMRJtYQGMfbQjfVbORhDcXgbPebNXYrn5GsBaH4UUnByCeG4MwXELyMbONvTPg7HhtnW54jvxGb3wxIYA1Qt2AhIg66ztYQFxq6lt_U-xpHB7B3QApV19oFT9f7O2NR215cUQFoGo8Hc0_eLuFfdgVR1j1sb2YIbfW43HR6PrWZtRJtqBkK0xYQPXuoxDtHV_mb7I9yHk3hhLo2ra-NCPliCi34_fcUmRh02l0cUiBGTwAiRHaD44FdeJrt2DhAmEJAq6kabs8wdtYQNmSD7EEG_A_ghWtNjI5eMprWqvN3gwhsZpO9WsNKqsGTkzqAUCn_5wTZuOFP3rapU1uw9iZTQRrXhQcEU7jzcJYQItkfZcFiKVqTBlcQxRcSiVsR4xGWwMg31DC1WR4_HFtAFIvIJIwM0UP__l7Z5IAttfctbdiTD4S_AbcXjku0fVYQFx_y2Q3kpSEstMRXjx7cibgk73T_WjzONYAyb7In6FUp8cwU4Bd2RFqproi6M6Nlu7Sxi7IRVgruhTACuNWoXdYQBr1bJA8XiKWe5qZhaHrf8qxkgQGHf8zCbijUCt5OIOf-YxFWAMeFoNQPyQFHEcIGaHYIVpOcJw7wsu5GsTp3ypYQGMCJpY6-xvkwyzZ0X6hT0FXpxs42HqY7wRPV9oAc1zK_VL2UgVRjNIspFLPx32awwMnlq_eV8ndPs4MwIrV5A5YQJ6G2WLldbr13VlmoTamg0JVQNw0dlmj8W7cNAr4Th0kaFn3vSwhoGqWZeAd4ZGIjF5yCfB1kqopyoEwJWlhCeVYQLJKr5LhEkmeSF-3SQFtoDR23Yh8jvvd3gjEl43woqVJA5_QnEywrs8NzGwEYqVRuODPJ-yJxGX-K74MWM048mRYQFwW30keRYQYJLoKYN1rkxg1zWVv0WPRXAV1LD-kwakEhwMBmwRG1p4DniT7730LVQBre1uXwhWT1vzcrN8ZWRxYQMSNdthGVOCRVS8RV4PKA7vVxi0DLAaCxdC3zPi0tayftpS2PfgD-Hfky4wmD5uimjTw0h5WBDTB9xWRWxhxOXtYQLyhwG93-XPn4fZOEDzWvW79FgUEAxHnrgYvlgU2r-SkobAt3Q9DWZyUm15R1BwBYsP2Cx52xab8Hfemgh2znRdYQKLZQ59qELdvbteEl3gPTrlGidbOBxlN53e7c9Og4N7pwSLDcCrOEgUVpl5gmpDK2Whhi1JPz-dDkhPsLuxpZ7ZYQFpHIPMCm7JRKJCgNIDCr375xrDZTxjHojDhYzh8Gmyg3dibn2HYwrTU1ufN4PGmB8D84ST9tyaK2R3AJ-jHpXZYQM1O8Up7RYMr1BroHVJ8DO0siqdTH0JK8eDuxUsTyUaVtTBfg2UDBmt-LD_03IYqzRwv_I5CHC9h_8-7vX6duPdYQAXa3sqkqicPVMqInmYlkAM0WKF4ztbTuVXigPvQqtQcmUkOOsZi8eCz2Nc00TsKqA_2IissvEH17TH6UsK6AfhYQFEjTxJTZHB64Ki3w0TyrSVAsCCoDuwd2Mk-5x8L4vsjdrb6tMCPZn9Gxg5tNmp98Bp1PbMdRgruTLLZQXLoII1YQEknkB9NH2YAfnpG5vw6knSJHVuFjH9SlOlWvGhCOay3eao6kRje9Whcnl2NMbrCZiPSAcMLyeZWi25ebfoF3nxYQG6kXOUZSKMVThma5rqWA4LeYlMy3wMccR5Yn25j6Rf89Cwg16QnU6gYNqsmIAt5vXT2zUbjg3x2ERu5U1WTa5JYQELirtmlB2pRaTJhRPRhuG8F0ngFvZ2XB6STCEsejGGMHr94pH2lUrw1v4jKGHdCJwnzWL4EQl1Igry2fUBwIu5YQOFLi0-Ldgc0nxp1_olN1QQT-0ULmvByr81xwytQy7hajpER73-5WmnpVYRSlj6v128pUMqTEnw0c5xo7Qz2wxhYQE3nyHWx6HtcIDdZUqv49yI3f_YXVxBm1AW-6DnuCTtj62LqcqEMBqWV7G5dgjg6d82vXH7KJCYkEJyxQeoAUctYQJXVXPSyoH12T4eqSRWQUthCV5KXAnsh-iafKMuKKUQKV83JEvUUaSzttXiiReCrgydfBuxeoAVKNDbMGdYggxxYQHz1EAsHnOkgMontTeSh3Zage-vo0Z3K6oFNbzXOSBhwRqegic8fePS9pNxitlCxeQCLpcWqDvsED-J5HfNc9CuCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};