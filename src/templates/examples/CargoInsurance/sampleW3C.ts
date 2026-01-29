import { CargoInsuranceW3C } from "./types";

export const CargoInsuranceSampleW3C: CargoInsuranceW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/cargo-insurance-context.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "CargoInsurance",
    documentTypeCode: "35",
    certificateIdentifier: "INS-2024-883921",
    openPolicyReference: "OP-GLOBAL-2024",
    issueDate: "2024-10-24",
    placeOfIssue: "Singapore",
    insuredParty: {
      name: "Apex Tech Manufacturing Ltd.",
      address: "88 Ayer Rajah Crescent, #05-10 LaunchPad",
      countryCode: "SG",
      unId: "UEN-201829910W"
    },
    insuranceProvider: {
      name: "ChainDox Assurance Group",
      address: "12 Marina Boulevard, MBFC Tower 3",
      countryCode: "SG"
    },
    claimsPayableTo: {
      name: "PT Global Solusi Digital",
      address: "Gedung Cyber 2, Jakarta Selatan"
    },
    claimsSettlingAgent: {
      name: "Lloyds Agency Jakarta",
      address: "Tanjung Priok, Jakarta",
      contactDetails: "+62 21 555 9999"
    },
    transportInformation: {
      modeOfTransport: "1",
      meansOfTransportName: "WAN HAI 305",
      transportServiceIdentifier: "IMO 9238129",
      carrierName: "Wan Hai Lines",
      loadingLocation: "Singapore",
      dischargeLocation: "Jakarta",
      placeOfDelivery: "Jakarta Cyber Building",
      departureDate: "2024-10-25",
      containerNumber: "WHLU1234567",
      blReference: "WH-SG-ID-99281"
    },
    goodsDetails: [
      {
        goodsDescription: "Electronic Components - HS Code 854231",
        packageType: "Cartons",
        packageQuantity: 50,
        shippingMarks: "APEX-24-A",
        grossWeight: {
          value: 1200.5,
          unit: "KGM"
        },
        volume: {
          value: 15.5,
          unit: "MTQ"
        }
      },
      {
        goodsDescription: "Lithium Batteries - HS Code 850650",
        packageType: "Pallets",
        packageQuantity: 5,
        shippingMarks: "APEX-24-B",
        grossWeight: {
          value: 300,
          unit: "KGM"
        },
        volume: {
          value: 5,
          unit: "MTQ"
        }
      }
    ],
    valuation: {
      invoiceReference: "INV-OCT-2024-001",
      invoiceDate: "2024-10-20",
      incoterms: "CIF",
      basisOfValuation: "110% of CIF Value",
      insuredValue: {
        currencyCode: "USD",
        amount: 75000,
        percentage: 110
      }
    },
    coverage: {
      coverageConditionCode: "ICC-A",
      warClauseIncluded: true,
      strikesClauseIncluded: true,
      surveyClause: "Claims payable at destination",
      coverageExpiry: "2025-01-24",
      deductible: {
        currencyCode: "USD",
        amount: 500
      }
    }
  },
  validUntil: "2026-04-15T13:08:30.494Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "CARGO_INSURANCE"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "61c3e35829e1c2bcb51283ded978cdba3bb361f3806b1a7b61e7e4de7fe3ef41"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-15T13:08:33.721Z",
  id: "urn:uuid:019bc1c5-a343-700d-b9a9-3f6d49462bf8",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-15T13:08:33Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhA0c1QpnB-qyUR51ISAG9xVTrsoKc60H3P0qcnvb0U_HDHB-i8hAPq0UarOX7IsFqK6BYCHJpgZ1u94fVfZoF3G1gjgCQDo3v_VrzpHjJvx3F68d63_QlUlK3BzDWY0439bISowuJYIFpKxwgS_4r3V0bwKM-g-9B6wf-H6Tjo8yiVJuIXeRSVmFVYQICWxegJ7Jk_pebz0s6ZrCTIkh7SOcbk1ZjmVuMh8T28H1tC4BqRYgoYFyIRH0KEQ7Lq3w2nICwzBBfMyMcmkI5YQAx5AvWMWNOCB1hAWw7t0ryysvltCQGxnvRPhxd_Yh6sYlaGFg7gu9czdEHhNovnkzLzLZP8LQZs35el8iFpg69YQD_SGFdyubewN_3LAIz7EiPnbyVdviK2oOrzpUlLI86vR-LnSkWAslgB6wbsvXuZ4n7JWxqphTEMrYnLlPixPY9YQFguBPJ0e_t97c06Gox_byOacGlJpB2cRunEMOAQx37COVImBTvVIsghtGjPK85dnmpUZEBe0LrzclBRKOV-4K5YQAt5Ef5oW3R6Y0VzlZLHRNKz_wi1nA2aVyzSIZOqn49U5_6yGYLxJjShmznIm6AR__sgQfeca9OjiatICOdHMVBYQPKufdXZyIthfaQaMWlwTttzakmhyuUHXY5p0622D4rwMUz358tOHzPwNBa2ZTKdx3TMF3w95a2j0XoT_mna2xlYQKTkaqsOWvuULGYagb-DzbKz6Nl0HYYPJmiVHsmKbf8Fkb0x0nu60TzGVq7Vs1QwCTeo3HjPvaCe7U42wKHW6LRYQD--KusBKwuQSC2hkSFQyOyvWjRI31aE-BHPQg_BFpJ5vIzFrNLZvA7RY9qBZQ-X9YKMNfIRo714kfw05GPWMBRYQI8FmfV3HLQo_rLydaDSLqZZZuhn6YFoejW-e1TQbDJQ6nQt69jTlF0PRqbOgND5pkgPCGiqxbXKpWK7M128GaJYQEL9RQsOIdUpf3OFbc3S4Cm3X1Ft10JsCrIhKrEoOWkQuCrUvOPxETw2ilzRV2LLEW1JhimOgdbRYiHjxop7c_VYQAqRloJ5wS4wdUxyIsAe_2wzSs2bhgZ1Y9ObSikP0cs3JHg6e3_74osSDVM0sj2gImBHK8YHwReH54uSG0fzVoJYQGWgUbijaMNnzRn2vmKUFbbIHhycIp98o_5wr6SJUF-ROrf6HXb6UOCjes_NAsTlbuSgHk5wMCbiL24M2UxQJiVYQCOQ09L3mskgSYe0mZzcatXu2PqQW44G8p017LROSvtZvL0wK4hnOL7f4a31N2S6WInWUNQ8CoIaYCZ3mjO_Xp5YQIcJv2FT09CDrgxn6n2dARMkbvJqKRNwoa5ZSTSF0ZNh_3ZNcGTHKp43qvxB5eoI2XYwNGMqUFDqw7xcjEaGCSVYQE8ItFtkUN5pfKvfG1Shn0u2li9rCq1d2LcG39o72eULZOrVQe427auUW6lCpOFiKQN_F78rchQKyNTG-K0wQzpYQOr-lfBQnweuxSVS_LexwagQbL-2gg_h-6ZhxcF31ah-9h_RuIbVqqu2E6eyF9SNNklhCdy3X01blD51KhE7itFYQFhh_5JORjSBGtAAu9b8wofzo3aHXxL0fo4QUr1iFCsVfuiIubVcFAZQGv1eWh8p10dzFH44kMaLlpDh1OII6u1YQHl-lmGWfXvXPJCuYW_zqWQUKo8GXxggt3PbqNvXWVN1RwJnI2Vn1_z_KlNP6gnA7dHJLUUFhypvjjisyxrHjL9YQBZTpLROKMmytRiH6-tfoBJnzCq0now2B_vuvZSd5vLk49f6yQpv84zGJNBs7W2aAQQ4c9w1jKkIySFRqW_avg5YQJ-re2czCjLxdWyQUJjBxXOwbfgi8h-oTQyGhX0UDQVP_VbAP-aDzRsBxz_CbIdBiR4CubQD9quv_73PYwEVUf5YQCQJlFWxVJMA3cS9QJcDQ3JBO66_79pornFz9gDiiur_lN_QGgq58_lVLNq2wvn2C_lqjaYtJQsbAahmlnl21SBYQO89TBYj-nLj8o1uqwaZ9TXU3cOZg-rgO9b1TtVXXKkhT7_tCknyboHWTfUhNO9eGwnJBGh6Yb4XufkzbdftRq5YQOIH_F9IGpfnEMR7NW92XhCpXHhCCc_Y44xQayq10GYCZtwsRlQtDcCzPdisM1WkJRsc6jhqQJQfQ2xk7KRiCtZYQIemIK_EoOHVPnXEIzYL7HgoiCUt0NdhYoTjHPkxuWXKNU6_XoK1rzZ5hzFKysmutE05js12rhdV6bY_J7LUTVpYQEFtCRcfEw-QlyF-uhf1EVtvqdTNYzmBGmBpKV3_GYYUxw4dQ0Xaxq6DaRTDnSHpt0EAzBlfkMfc-KdFQyvnSAZYQNU0P2iqgNjixQ5kZRVq_IUmOboN9KEqyohZFxVEoqwNwpXc3MfAHIqHn6AmwJnwOa0qaTpiAc1VyG6vX4KnNPdYQDMC7RMZ4ouAH_R_tbxN0lnDLKYJjWDJ1zZ79BWmrtRxBPg4YxTC5f7CXP3GYO5nHhNEPYpRgAgtVUWvo2wmtx9YQGIm2GFnrk0L6btjRlh_vBfC2aptSwyz7coHPcE2Fwim5MHKc38M2WP5tLTzlB9q92EX0Q3aqIP30BlEOxdE_odYQA2WyCZwqnaf4j5hGbRutr2rP1SV-jK5atbtAK498uJcPT6WtBNaIdcV-gdkpLFnmTWXSOEINQk8sT0TopK2EX9YQKkNxsY7Wln35qBSYC2wjNraq7ohk9iSXp-n7QzXhSQCTtk1Ucl0g4EPPVkNPmoHnZU892dqF3xU3i6TqM6xN7VYQGDnl6JfRSijMZkLw6FM0OrD5grZj2jPbbIfZ1ZPlCVTjlCPGeTbiGsNYA345JPh3zcfEEvKrVHD8xfMBWG0yjBYQG_e_q1pjl4BCcoD2fdoxBG2RFIpXxTOg58gSwybmosFEDwof50s2QQjG9cPWVpg7UADom-c8YpWOnvBdAVnRIxYQL_Tscl693BXgIj46TINMb4lPL1Lzu6y2exsnHi7-N8eQKjYQ_PtBuldOe311EOLGQK5F6rXJKbovy8nGA5QoIFYQIowLbmtXFQ9lBn7UVXKHF0dvy_PS88GlPawO0l8Hef-b41CH3H9uKCiiImJ6fGTrndzmssryMIxyTsW4yGO0cJYQKiwhbsv7ut8KKo4q0j46rzakMWwxSwWk-6nwgfmtBXfHSVINJctozch_frFKj2M5z5M4K99OYbWKolSxGYz-I1YQKWy5r-f-1-vhGUVqJdFrZblNZtOF28xGAyU_hBiHuKGrbvb92y2jYKiqPIp6Fnvzj5uPE-oV_TeO3EwC-8oVSNYQGPqsTn1L9mVi9KqvT_2pXM4i2UPHL_quzENHoOF_9liZlUjABZ_oUrc_rPlQUFcYmEwuOGFfMVMLJA00NSsQ8FYQFXgVA9iceNMkVMfrbZdVUOd8uCPlhEwA7llV64Kn4iy8df-ucVyzLr_-KEF_fnYk-ivUS-0mRQdA6wpsSr5rwhYQOY_h5RsdYDc7VyLAbtrYbCOtY9M92kthXQigqEk2dTs1mZKGstdKKG2q4XYR4vwbjX5VlR7E3v4TUF9IsEGEsFYQIdQQnK3JE7hXOF9QGBu10MwYZr2p8MD8macEtsmBE_NzgDI2cX0lywJ8p-qofMmcx0F5PQ4k6hRmPtik9l8DMVYQJm_iJT3ltdI2QYrl4b6U46jE5RLuziNtuZHASF3FQ3N1HrygnF5oYwfkeLKdQYXmW24Pm0GDTUI07Vp4LVKM4dYQDatbk4pGeCGLiEMOCm0EQyuRi-pC3NdpFXYn5lLK5QfddhREiDjHIzaiXbaX1mjMipThEyjjIY2v8Qc1UG_ejhYQIG46prDoVh2vvRYJFSTyDchAPK2VLhMIvaF4Tynp7I1HX8Ue6sMCmmXLDfBKfjvJnO91dYo78uDDD0ZfUay3lFYQPrzoodwaT4Gg69_tQPGjqWcJIiYQv8DF_FK2-n90xL8dCU2IdeHfuiujgx1uwfSDL478XDNkYMwEj52mg3VJBpYQCKU7a6ErKMLRXa4VUQ6L994ZuGSF21v1xr08fRXlPuqSmAy-IVbVhTMExgUy0usGNmPsvElelN3iwDHZ_0PMM9YQEp8fJo-gRTn8vsggkhaYnNtcEGR9SUgFpxnX2dult3rLF59QzwO0vM-prYwsFST5Cah3ljFReK0F7_Kod75e3ZYQFJ128jWM4mpEB8foxhGDLahxuLG7j46QyeFe4FmhsPa8yNOK5A40KkolWQp0QKLuVKuRJnGfmS4jPfXZZR4G8pYQHcBwsrc1ZfCryOXenYdOO37fUoUDieoglSE56jIoasYFCTxf2E1YERfOv1cKUgiibE7GwXhD4rbNuN5XmKvNl5YQO-22OptoGkDhIjSsT4BCfb0mgM64TV3WmeeqeqSJn4Skk5w1mpz_C1tRbZnKVbL-U8oaZ0ct9dnhzRuR4BBTwxYQEQRHeu0prSpH-tWFk9Y5FzraTDvYrPalfNpFjf9HKFLi4IW8iprcJ3u6KwnpxRbPLyHQXO7Q1rlwxJoHytLPP9YQBYLDdASilkqQ3Dr2eAiiAcRAocV1d_6HmhAD-9WW275a5FEUveHj_o4mtelOvgEkuPxZEikRIng4ZKZH5XHw0lYQJqzzUCEWKbgwLua3v5ZAaRloJCi1e2W6SqkDs4kU02CBcJeUOlon7vhlMCE4Drh4Lo1kFL5EJ5vHyU0O2SqrJtYQO09yscvMJTj5nF8UByy2KjInq2DHPFUsajU3tA3W61GkC4Cd6CCs4RBZKhMLm6H-qFDBWGOchVxHakwZZF14UNYQHvLZJk3G-IQnN3BwePhtPCBVcLFpPrP5roTzPjrzcXpbzUmjB2-9ZzNhJ-uZUxs-K_hjFggNCbkn3x6539y3rVYQMQjvOCVMvCB9UgNUPUtHiy-wEuekFEHW32XYnlQy2UFPWjKtKEDXZjckh0g_i_N0uAWzebtPj5KI4UwDEp_1_VYQPM8Kn9jaJDH3PT0WvRozfh24lZdnqJv7E9lKGDCT55D-12SBy5AgWDSVXf6nAn4ejXI-Hc4oXNZhOTgZEl9FHxYQJUMTuAKf72oIoBL8R3nIRDmxFYDMOcLAo39M5JL3hoH6x1AYZT_ks1k6m5qMG77VvEa3LPc8iZx7Rvr3iRz5y5YQP9gbDrl0Uy1mHyeZLRWMGOd2ZeVNErx-cVsjtFOTcO4R-6GJR21CrugwNLQRZdU6nB9bW9DTRCF7yxLWYNyep1YQKmM4VLR46upOrZWWL2lgQmon-6vXUrANOwO8KNrguVP5F-sBtahp7r0CPb-DtKnAT6OAm5VmzYZPncgXJFmniNYQNqYH5Fts6nUG5A6Kx_ZU36IP-c7QVqbUsv2bgFh3PiZsdhsL8dAuoC7RaPgLu61gVjfkeEyqXMHyUWTd0BYAcxYQGIhSryPqMpBoCldalTYOciqjvSqvIrjmUErvSXjwXA4JS3eEWvW4ua4nLqzSBo-pcMv8ERYElgs1szSy1kryFFYQNXbNeZxcg3M1adwuIvj8TURCFbNhVp3tRQpzkc5IfyS4BIYWQ6wXpI2GRRS3N0mtbd11JiN17tACo5LXWKZYydYQHS_Xa3DFtJvdedV2EuEWdY6aJr_uSpAeIwToOLc9p7dBZoZ-TOPVvBm_ZNCV2QPqgCbY4am3bLcprFxTd-fxLZYQG7RWM0OwJnDSSAmqjGjMK7YBn6hhnuJ2ErZ89-uxPxbzxYthM2oVEgEPvyr866OQVLfut5HBofN3GMoShojBRlYQL0OCfGj7XFo39B0ghxbROMZTADjK_esBqZzTJ8bLXpadXmIRrMA2TbtICbSD0oWuEwglGIqT-Ak9zE0wxm3Z6pYQM4v3aymnygCGnyGTyyycpIWA4WnvvoHliU16jtEOwtirsm6zN8XkswR-0InpEjFCxue8nQ5B9JKGPumrybpTXlYQJyrskIFpnLMWdAOIrW3TJ6OKR-Wu3StLzWajQnHiwUExHoNRpd7IM44C1WdJ2v9v0RU9qvanGwYV1bAV1cU9Q5YQCsTUd7VnDqIm5M_DvJtfdYD3hzN8WTDWZAM4Ua7P8T_8m3TXV5QA7xKaoGJevjy1MOtvDvCCm5j05ts5hBCcsdYQNhU3mTeOFhFJpa5uIY36vB4a-UN7VKSEWB3YpRVsAydnlvOaIjknuf2KprYh8zZb9DmVc7tAIqGq1mbdDWFwmVYQEsK3F0Zfc0np_7KuxuB9m3R4wd32XSWxWpaBGaONX2H68iWtpgECDDEAIfpNebKWEW3fojPkppOis45iB6ocNdYQN8DsDalzQLlJ4i9pGkygvO3zcZJN-JmVjsZOCsCaeqVxePdbQUcoKLeS1dV1Io-EiaSGmxSlmAFTPEIlslJRWxYQMQUXwzxqohoERMvFwaBSXA8rF0iKmVQDU5xywJEkh8CtFIJN9o9o-aZOmeR7K0Lk4RcYe0zWT1hNQBVVddKkrxYQNigJ3Lyb57V3xMIUGVI_xtTq7Pd5YPsdrv9bRCzhWFoQ7CBQ-0mtua9DrdpEr0lmiB_-9cRGLqcH7CTehHLwPhYQMfBd_zgMesZOUd7OD-toUb62n7p1FdHmOYIUgA79QFEYeUpg6dYN-KHpblCDkF6-XMzjUUdG_RSNcDuMI4H7DZYQOTOEz2nD37h1nX4VWTSWs_aRySFbV4SLL6tF6GznQKpqAp9hQWrRDZ7TzkzrXrloUseA9AnVqg0weL9U1Fc6uhYQNmcKZDjCMBBdPzPE8455IKeehReRfVIaygsvsHTyAhSy7hzjyqYCtT_osgifMxlB87RKL4YDzd2-HB1M7MqJC5YQLduaOfzQH9p_1eTZBgLXjVCVgrrYpEWTSQLwJBzEZf-TlcehH9x5sM75URPAuCCwZJqr312Zkn26rAsfVK9hZFYQHrW_SpGKpJv3EGf28Q6mtOeChG5yD4Qv7DEG4TEsbJknjrwR2ITwez1u--gntmm61p82Thk7NZ587h_afjH0ydYQBnUUy6G2tOpgZlrGlXNNcXQMVUuz2mTVJyri-uzZiTfu0rrqqiCEUUL7r-kSdjx9Ka7aEikX2tI7k8KXraog9xYQGEpyjLQBgWEwbQJ_lR0xGcVvxWFDHeiegFqI1-GjRayylrcjEKOIb0QQVuab18rHXBe7GFGLyf586uFdJ26qoNYQEbeH6OqMKY0skajVzyilQwSZGhs7XuS2jCLrLPt9iqFV1-W0pifP5s21BdPUgn9dPp9mNOcMsG96_fJAp5IIOlYQOdt7j7ZFwwATtwKYg70YgeAteWamYnDtE0UdAI6u-MXqxvTIfsUHxo1iYXArxdesbTIE9yy-7owqZxl4nLOfiNYQGGps14xvSlJ8eS1fN8Tl754HmhsSc80mmBlsQdD7NIYCSDiytWXqxX9tmDUF7dj6_jbFkHsfZCg-XoOsRhbzIRYQBDUDFy_MXIZhGp-SHcjH-DWaPBdgsQHCj7tG7S_RqFzpDca8g_SvtcOpBOZ6qs6-MlbfPKTG7qmxqB8XxMXkPtYQGEEVazezsAT-6jV95kD5SRNjH4CCDBAnglmwA8MAMDAGI-KsvK-vhyOxVDDllbswNYUdM3JIVKjj6OOW99xHq2CZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};
