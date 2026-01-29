import { BillOfExchangeW3C } from "./types";

export const BillOfEcxhangeSampleW3C: BillOfExchangeW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/bill-of-exchange.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "BillOfExchange",
    billNumber: "BOE-2026-001",
    billType: "Sole Bill of Exchange",
    dateOfIssue: "2026-03-15",
    placeOfIssue: "London, UK",
    maturityDate: "2026-06-13",
    maturityType: "90 Days after Bill of Lading Date",
    tenorDays: 90,
    tenorDescription: "Payable 90 days after sight of this First Bill of Exchange",
    drawer: {
      name: "Global Exports Ltd",
      registrationNumber: "UK-CO-123456",
      taxIdentificationNumber: "GB123456789",
      leiCode: "54930012345678901234",
      address: {
        streetAddress: "10 Export Drive, Canary Wharf",
        city: "London",
        postalCode: "E14 5AB",
        countryCode: "GB"
      },
      contactPerson: {
        name: "John Smith",
        phone: "+44 20 7123 4567",
        email: "finance@globalexports.co.uk"
      },
      bankDetails: {
        bankName: "Barclays Bank PLC",
        swiftCode: "BARCGB22",
        accountNumber: "87654321",
        iban: "GB29BARC20202087654321"
      },
      signature: "sig_drawer_xyz123"
    },
    drawee: {
      name: "American Importers Inc.",
      registrationNumber: "US-DE-987654",
      taxIdentificationNumber: "EIN-98-7654321",
      leiCode: "54930098765432109876",
      address: {
        streetAddress: "500 Import Blvd",
        city: "New York",
        stateProvince: "NY",
        postalCode: "10001",
        countryCode: "US"
      },
      contactPerson: {
        name: "Jane Doe",
        phone: "+1 212 555 0199",
        email: "accounts@americanimporters.com"
      }
    },
    payee: {
      name: "Global Exports Ltd",
      payeeType: "Drawer",
      registrationNumber: "UK-CO-123456",
      leiCode: "54930012345678901234",
      address: {
        streetAddress: "10 Export Drive, Canary Wharf",
        city: "London",
        postalCode: "E14 5AB",
        countryCode: "GB"
      },
      bankDetails: {
        bankName: "Barclays Bank PLC",
        swiftCode: "BARCGB22",
        accountNumber: "87654321",
        iban: "GB29BARC20202087654321"
      }
    },
    amount: {
      currencyCode: "USD",
      amountValue: 50000,
      amountInWords: "Fifty Thousand United States Dollars Only"
    },
    placeOfPayment: "New York, USA",
    paymentInstructions: "Telegraphic Transfer to Payee Bank Account",
    acceptance: {
      acceptanceStatus: "Accepted",
      acceptanceDate: "2026-03-20",
      acceptorName: "Jane Doe, CFO",
      acceptorSignature: "sig_drawee_abc987",
      acceptanceText: "ACCEPTED PAYABLE AT MATURITY"
    },
    endorsements: [
      {
        endorsementNumber: 1,
        endorsementType: "To Order of Bank",
        endorserName: "Global Exports Ltd",
        endorserSignature: "sig_drawer_endorse_001",
        endorseeName: "Barclays Bank PLC",
        endorsementDate: "2026-03-22",
        endorsementPlace: "London",
        withoutRecourse: true
      }
    ],
    aval: {
      avalGiven: "Yes",
      avalistName: "Chase Bank NA",
      avalistAddress: "270 Park Avenue, New York, NY",
      avalForWhom: "American Importers Inc.",
      avalDate: "2026-03-20",
      avalistSignature: "sig_bank_aval_777"
    },
    protest: {
      protestRequired: "No",
      protestWaived: "Yes"
    },
    interestClause: {
      interestApplicable: "Yes",
      interestRate: 3.5,
      interestFromDate: "2026-03-15",
      interestCalculation: "360 Day Basis"
    },
    relatedDocuments: [
      {
        documentType: "Commercial Invoice",
        documentNumber: "INV-2026-001",
        documentDate: "2026-03-10",
        description: "Invoice for shipment of Electronics"
      }
    ],
    collectingBank: {
      bankName: "Chase Bank NA",
      swiftCode: "CHASUS33",
      collectionReference: "COLL-US-9988",
      collectionInstructions: "Release documents against acceptance (D/A)"
    },
    presentingBank: {
      bankName: "Chase Bank NA",
      swiftCode: "CHASUS33",
      presentationReference: "PRES-NY-1122"
    },
    status: "Negotiated",
    governingLaw: "English Law",
    jurisdiction: "London Courts"
  },
  validUntil: "2026-04-28T04:47:34.187Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "BILL_OF_EXCHANGE"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "302caa10814113feed641176e1c5ae9dbdf037614c95ff517fe657a51303e4f2"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-28T03:47:34.950Z",
  id: "urn:uuid:019c02b6-b7b7-7ccb-bf88-27a90b926a87",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-28T03:47:34Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAqX4xmF1-Jfe3WCw7oHey63ETyDfen6zAmJFF-FZ5izcxBcko1prvYejjaOWj10RrV4Xr2TQ2yWMmD8eYzkAXq1gjgCQCuH0tGIuVlYkfoFUtHpNpHe5soPwaDiqFj9o2zG5EhA5YIBGDCB7o_Iq7QDXU22CkrFoGpO7E3s4f2jka3vxl9u-vmHxYQPsToNJfRGEzw5i30sOmcl6tCKrEjE5Nd76qAhd80s_OVUrgvxyR5yIbowFk6giUm6uqQcPeKoYRxfA9eXZHvPJYQITYcvaGF2x9yxr2UV5sjnz9nVRr-mtNUvNTI5p7AdhHyFFk-kXVNUVOnfnemYUEiPaq1gHmcITxRMo9IdtOI-BYQIMSnD5t_hGl8XNkp03hN1j3mjreggZ_HhJ-7Q2SuiTEniKriB0NQogu0bgQiWychCp6M72f-wWDKr0D7REM3eVYQCjYDTXS68FN3JZ6O4nRb9wgrXfgu93xixZhoF9ZLnzUuI5WVfVpB1SVliGmYGQy_ahQYC8kKIhzmZbvPgXKP3BYQI4ZmwEdOUpmGrWoaqO2CEDlyMlH8leJXL-pnejbE1SIWXT1nvce3tdBm3TrHjzQ372C9gbxrs2aGEr4lpz7Eg5YQC4-Q0SXQkJ48JacdAF8LxFHVGoMMccgI4km2YvtEUXDvXCyCIZO3riVvwGCfcc_gItYLAUvtcDb6rS1DaC4qP5YQG4SjSuQIzK5YiKOR8PMNwkpSQgK3BjeoqbLhqhMGKu0f0GzxcXukZTeoyh_Qiq6_yeQKIUkEumfLm9hFcJE34RYQOFIloKgZoZ1klbd-Pn7uLUDKusLCGJS2REsHvy3qbLfK_qaG0XM0Rfn7Noid-cjDVoUziEnoTdpigY9sVaKgnBYQAeQ5bCF0jXAUoSty7IounaS0OlADO_XX9LF5P_NuuW53i3U05oCVObjDFBP52Ih2eFH0HhTGm3F1ShCqHLptPVYQPuW0AxYDavDzdW5w_kSEBg22fP6R8L-jNFzNXauXRUFViQFEbIB-RAmUruJwWIyTHE0yDBtKLf-Et2j4SD5jPFYQGrOKk8ond_A9eQCkj_HchYTL8mq4bqWeFh8iLbDgED6xYqVe-qP2wJ64zZS8Sce8CDcYTKHREvJQX3YMNBSZBFYQBYpOb7ZmMF0pfoaqj4ENkGO1_tKklwDqZnuzX2_y3D8jDIsttr2-Drt44VN7eGSJsx2ySXziTuFRej3fzWTepZYQP2XFBOlsECuUML2QAja7PvWGpvmoMZ8UK7FK7ftxuIeBbUxBWRMLaQNQzJaLAJmJgbqrP8vgqs1ucsPKHl6ntRYQE_Jio0hk4jAbjHvILEAGvR57-yRly6jpVrjqLGuGnWbST2FMHzPi5Dp96-xuhVhR0BZSh9oX-gpABvIVgGoljVYQJZKi71QB7-Y4bgjXfHLpu5ReSd9Qd0mrucnsPM5RCROn28mpHYXjqrIt1jYZm-M898hExCX1R4JohLqipU4eEBYQHNhiIqt5Js0bz8adMk4DDx3_RBn8OCs7Wu6s1NXscULuoc8fWs4_io-eVKEq7HiKH1L2PUYH_zEx5dsfDvLbINYQG2zmBxpPlsFkTHFvGix5owhBOcugGMwECshPrem81ObqSnmPTodPmFQpGx9h04aXR4U_phvr_aPD4D5T0Cf_YhYQByZb3ksyrVJB0U0edSb1RrYFSJs-GOr_IMGsoUexsUEeY--sXbSyWxyR_N51bQb_1TpIvYBBvPM0J8Gpek-V-lYQFavQHDwQ3iVuGu_4S7iOy-eU-L61smg1TnJZQ3L8sjm0YKRVx_2wEm-G2jSaih8tybhaaPhlYImD4Lsta-PIuNYQCsQ8tSdrWtyrxQ812Y0dhDuwGt5tcUm5nFVPB5_pZGstl7awK0k62y-oiiPrT5kfexwdWdmlBN8iF6_hSC37_VYQOgI8vGGdjxBZihv24K7eFMQpEXDnh0Xl0WZAAmvQKwX4hOiz5Ai1F03G9gUCm0wzVCjGaigJwTafhlXl03APVVYQDoU3rpQQ1ZlEGRect_yxV0rciLUuBEemgRGjvhSw7Fse8ISRSgN1ZqUdSnc-ckNu5-0vJYDiGn0YTfzqqkj5-lYQDL5yw2FhQWo846YqXgb368wjSAo_UiMYUT5LhsackW8ShEK1BkEcrA9QOC8NXDCyKouWKOl7tSjnb1ammLSvOFYQLk0FvKsP0TLXx7GMbhK78FpBVcSaQ0tXAKrhOEjXVlHZJattdG6ZtWGlhwDZgayqE0qCwdxZ2vGVOi5T7YFlAhYQDwbXZgtrLZ7Ipc1msggIfksWbXK_phimqcssKtaVQxH4DxKFXgMFYFm_uXHEQAbl3LO7fivpxFCtba5A5qzGctYQBaYmyjvGruwFtQfezm83ygYv38XoTV5L9Yh53IDi9djXCQh9lk4MTzLLAd79JeIXCCCM4jeH-o_yAPmy6KNrqZYQLq7G29O8hiUDgIzg4svLAwK5HyrqbYpJFPt4R-PiCnoRnH0ihFB5mTj7vjyJXPhjCvYI2XnRRKz8XLgr79O42hYQHLs42j9yslHmUPSUoyAaPHeo3hRFtbyF-_g50d4h7W6TRaF9fyr_9CFSQEnlMFKSN17h8xm0DOHST0LatcMxS1YQPSSnR6P8nzCW1rAbSdc9_pNZ34SbM8ci8zY9BZj085wk24DXGR_UlMkGwN_Pq9QfwuMLHatFEo9hBuougjUk0dYQPocdD9feE5MEkT26Qa34wQtlO1Dlq7b16cqTMblaiHYJ1KPNsiAFN086jVK6f6X1GSF0Hf7whoa9rA09p3z5JRYQMVoPDRJmAVV1DZabNJe4Z2JPXv3TTUYesLWDT8ThyEnxV6Px0uK-Vq9M3DgqI0ZvQ2iPNkh7EGA2YCysBwk2nhYQNRBAWfpGdd8eGtariBv2gMzNEC2U-ZqfJqytCzdS1HHm6EeSycB6pX66wM4__kX8X93Y-JhgHbIFBhB90suxERYQBlreaQ4xWOmdXjk9qcJsKD9VywBXeX1Flq2s6CA7M0UKh7CitgzPfmtOC_M6QLgTCNG2iQv8D8Lg-7nntv5R3VYQN3hKl9XsvJXvxFDseCqTUU4k6YFMnplpJAVLNDPI4_lxyuGj3T0UfWXYKX51jfhorBEredEfPkEAujkuM4tlbBYQHiZzO3mEAkZzN0FSxpC1OX4FKdQRiqCOnM28KvWov_kRyNmNPuJBa2d9qyay5YqHa4mF5OETgDjbP2lRFUMkWZYQC7IxV0IRg8I2QLrXkkKOmZ0CG7dKV0MiilpNoxSF7ZoVNmg3rj1dRGWyGlh0wUG5XOKcqGShziQif3oAINz4RJYQN4Dy8icT2mDJLCXOw2BZ_P-Npu5ih5Cqipt4rqnJvCEyfjQcN0BVMe578ONg52KiWnK54CzO88K06fWnlakUFVYQBoyGihJbR_VsSc9AZzvIYbYCVH_zcj50F2WlMlaGqNqoaNX90oYQHVxpUQtyIVkqNwafZ--4mYasUdFtewDV35YQLzJHJR-oZ3BHdcgq8HituK2GupmADkd1qkROY7UCV3OpRWFMF7vAZ38Rh9KmGN0N_EP9dhg2ik3ccMg_GdDZ2ZYQOFQLoYPusiabG8ui5rbTEfDPMmUklwDw7VR1Z7BHuzcKrDgEFYaaxMyho4wedDCez2t4_OoVbaN0Ys3VDfC36NYQAI4TL6NuVOsZG7aTBQKcSzZJOEYzawSxlaZpdaOduNY7z8slShOPB4hMoNYwqnOLR5qRD2J3q-tsjhy4GkA4BJYQMc86LRVDJNLU6wuXKZ6DknngBObtY0QpaStyjaz28DKHbN8TSxF6BYIgtPr09aQr6xUtVIENQlzrlYQbr9fYK5YQJf08Ste3wdzDj1qUGteg_uJyb0ofBDoTQH83cB293KigV85qNPK5qw5l_oXg2d9A5_MrHi6cVfBpkPIrhj-Ft1YQPOuQ5f3ADay_SsK2_UhaCuyqlcpWJ3vIcioypb9Kw1gCbg7LD3zY_4p1NIKGoFcZzHN4PirSpoTI6B9QDER_aBYQNfyELf0UVlpQWS2NP7FUlo5oNgSHTIta-dumrbUwPIBp-EryMOgoMY0AUEBmIjGFmkao35TzfXwoP_m14VbCJJYQHFOswazHB7h7PQ42Z8r3YoIf8bFP4P5CGqQUn_q5N3P9PJ4EwMVIHhgkK3JaafRtTMDFyfJOJ6UaY9DWdal6W1YQCLC5SjEuX_xDGd7D2elT5B7Spq0D_jqZ4jdw-P8YYzljCg15PvbRBliPKhf2jtH3FDbSNzN_pzXHQnOs16X2rlYQKNvLBXco2cEjMIRNga8HJ2rDycuaylr87Rb70iB1W1fgNwq-AbRumtW8gGNLYsnOlENST2AUD273on-tnzS3FhYQMXN1SEIyt0CaJZv2fIu5Em1FeD7fFVmOb7n1-DHNnXRfhBHSGuO3sQISWCSI7CLcqmrNHUpCiAd_Tvk5ZXmkjZYQKYRhnRkOzfrtMDQ1p0VmePfXH11cwOkXDIE9ERZDdd5AjZLs_RmNb_SLS0-JSFuPuCXc6WW_z9OMm2DV9rnPfZYQFZ2Zra5e0ViC1cOaBs7NYYQgOnDz_Qqu9GtEeWovrfR1zwu8jBo9kBwTywdjRikkkhEyiJH0jdyfI42tNM_k1dYQAjcCz1nGdnKj2FqCwi7tPYzkBa62HCpAbe0kL9V3uN6DdwyBWl8Oi8h4BOJA0udnYiMnLM8jBvjh2HlsEpwoKdYQEULN-jqKYqDAIWatBsa7FwrsbZjA7F6gklj5EuWjePdIcX_F8uXztjIgtpR_1-2eDdIA-3jUM9lqWTtgu_9FZRYQFdbUO3n3Qf2rmjWVq1p415EryXHCHBf7GdXkrTPXP9p6xlJ77wpcLaPyQo8NkkRqlVHDTX6ZxzMdDpdaRAztsdYQC6XP8p9vIpcWIeAmmbzX_3L-x0fuZ_4VJ50lPBuMNFbtuR1cxGrJLPLbXty1CI4x1gSSz6n-8dF9wHMN7sO3YhYQMY9fIijMjJrbJgP_GuvHsBFuLtaRK9eKRUJq8nA3wt7-BYh1FmQQhytuXZWeSWGiT0CcA7Gr9aiPdbazr6B09ZYQNm-AUR7p8jnf1m6cER1pF6KNMk6bSDOZKGtyTgm8JZO0Xr91Q9GZOzHK5mWuSAzrubjiFp2DLpw0ZNqJo9ceERYQKWVV1ij4sdldcuq5SulDwKkTPq2q36-e0i0nudMue4XNDTNZvjV1PFiYQCRg1hLFk9QPTtH7L05Hy6DvR1DZypYQN4RCfyUHG4mJOhJpA8TBf_RSDHf41b4LB0HJm8OIgLjaAWX6AvVM3VQuUx2C-lcy55nquf3HyJniXHIGkp3yE5YQObYBDBtYXepql0F0OCjeUnhnshDoknqUQ2aAlU0cqXsacgy8EqSp0fAtzcZ1OjHPfWLSfY_yjrNpADS2Js92alYQAHgHRCw6Qx0r-o8MfozKywWHLMpKwfAoTpnYblZGYaRAUfLMwpgRO6e7nb2dYI-nfQP4SEH1BtuFc04IqNnJJJYQPJ1QqK5Nq0fwRJ5TxaumUlLxH0RIegNZ-KmyCntht4VBXM1xfjPXJNs6TXJjA2Ti-tc93ydNXWsa30UKJdvZMtYQGYDdSF2UIkZIGeJXZJSLMZwy2KnOLVkJb7fxIzNKi9Ppm410JEMYndnzA_Cpir58Fg9356yDeFZSqLiAZeK_TRYQKEv4k0jt2lbmLQEJopP3MpVbAQVZk_aloD-F4WDTy6ZYWWRiNXuMj51l7lmA3wD94KNvpX2u2ZjbOY0sLH1syVYQKrCsR3F3LYaxg_Yr4nhIld9EkEpM58QW8EC4q4SNKX2QrQ2fBkP_kC2UbZy5AvBvTxvpzEPnFkv89-i_RE5FYNYQKt8ueRL7vFATmz9WPLxXgFnMhWhQ84I2Ux1g1QQHGiPhwScy3B7qV2nvo-rlIwD794gkANUmcgDv49w_KzpKFdYQOKFn6ZlSS996kU09kKU9Z0059cdeKhsIQcWms79ysBVVKHsOQM2gefuPVfi-Qop6TlXJ75X6iFIqbC1gPsEYQZYQOVDrl7yz1YRSfMcmka0AA6mEDOZiqMrwjnwdcAol9RxdjsT_3gTBmSM2Ek2unkH7rt7AaQKIOAfRtkLW_Mp7htYQLE-UxM4nMe5a64T3MsF8T3swpFFVRcSfYo4az5L6QzYIYJQG-3Lzgyaqx5damlmGX_UNP7JNIicTqT2Zs4YznNYQM6OQaX0c6qKsoWft_dC7L8Q6h5EKLjE5RpGvNKVmHyTx4Fhk8O2zzQnGowJW9nimgYBoop9B1kkDc45EJl_bz5YQNC9QC_a8gpxWoa6KxRJ1OVe4Qc8rHiPOAB96Z4mbC7MLgLtIW_0REEeZvDuacIq8RX863z380KbFVIJ8SDdCidYQIDksypmbPgUyHzUfPTb6izvu3EvnOGHA3chgGdQ4D0muWwKalnivYW8mgIIq4H5JRhB9Og9je1Yo29U_OI0jrRYQJSW8tOHJL7wZ-Oabbpp7S3DOY_I7l2IBijRutaBaQillZgWtXK0yIWE6KslyPcccyzsfknM0h0tlANjZZmGuTRYQDSk7-5uH8TBawC751olZSbt1NTJrrCU0osc3xgTVYvY4BE6_iik_jFn9EBORw7DFZ4y_2nQT84fxT4lZhuBl7VYQI3fGmD2sGzmIlUJguHTj8S7pem0vcaZMq7FG9Z6BozVrbbxA-1BWZdpyiw5VDqFBhw_W0yAbMjZjWa009UYl5VYQM8dpB7aEff5mrVItTS-reUDNXTXvEU8J-Y7muqLAmp-9RS2UXlow_qwYbP24kV_yP2TCJ8iTPGPduYPz0ZE_nJYQGT3-ztJqIA3Z219NwbaZS-73mLG9KE8vIbLJicrd0qoqCzkaW3qRcJ5JCWDR0RIrvzG7yrNswwjgDlzILygDgtYQFjnPAF1d-kog95WhUr3clkc8084kS45_dVJHq36ryxLtu-tnZKcm5kGw7VVy9klsq_IVxx0YOXH0JbbuOlYqhhYQMba4QIIhqflB7DzdwPIMSn34mjw-mBrnEwQgVoX3EqW198OKVLdLHdsNPRZjWWHfpnulnnvkEOQS_aLOC_244dYQCFYL6RGttYC6qUJGZqib3DAJMsFPC0W4Q9v_SM7P_IuHnRkKe7KmE_OXM_tStBT8ewqgl0a0_KBN2tpTlxzNbdYQJYVH9SUhUperCKtfypQ1rTUj5i5GFS8c441aoPLrKuCfMoAwiJEivMMP0bHAiqqEI4glEroToN4CUmqEHsWU9BYQG3eTxYnARH8UbtDJ0HkxC_CVbAc4jSCEIhVwbT4pjp3nuyYZ_wseJAoVWzEHgkCLoR7cipsoLuVL-LgDpwfX9tYQIwH6wiiAEKtdKJJsBnzPh_-vGsnuFPMTMj3HfjGrvkZDyWtlHb9-oZSVf-HCOa2tg-SqAwYN_pMN4gb2bj5SOFYQCNfyjR2-N6SrjLH3t1O3hB7ZvSYC5SVy5U5dm7b2FuV1CSKSfOWqCg8mf15DPbfIeVZU0OoCJ_hr47axw6XeNVYQGePGUX5K9r5kcmTmiACKqNh2LjRTpBvZRiSVSC19YpKjsBAkz0VVDK5fvbvYN8MKBNSb0jgZ1xR3IcAOmtvm5dYQK4nPYbRyeWgLiAApTA-0YgHw0jIxphoc2yZcuwvNA97Qs7DRzyqSsTKdw2VhbRKZv3AS6KEdp90Y9KMEgfMKEdYQPLth-SxKNKoXX9iHpVA1KUtsLArjZ4R38Hbd-3s-4H4rasK_z8pj6IsxpPw5V6wDJBeRpbdrSh6v7eJ79dfoL5YQJnAlMCJbDx5-DC9-XFNIslMBdU1mGS1Sc1jlRR7F_1bDwLfs543L44s-aOsibZJXrLYg7Rtxp7u9v5nLww3HZRYQKny52Pl_nqBOELcSoOJL8cc7Y7AR6JvZehFbfc8zer5rDMP7nfsiXpE9FJi3-kxoUWxW2qW6xq0KzdfMykB8V1YQJD_sMolHbN0EavGwS5lXqXy_0MPvomqcAajjmcuXG8_oDMnJ2kHry9uRWDy6g3midpL7X7VSv1786ja4XM9ZwdYQKKk70v7yp0Pcro4wnvg2gqntmW4EcXQKaiQMsZHNop-mxgKZ2W2mwf8T8DxyS-V2YtGTKaJpB8BvPIguaabechYQOr0z1AGQsGbUvcV-9OqehKFiHxEnPdK8RnNs7FaAs_5CkvzhoSywGj3YznQmDwOqgw5d1VIIDvBlegT9utu2V1YQOQirx_YzdkXxOIpEj0yKJ29MfXUdCXr4tIoJse4goydXJnzCX7B1mjv3oDUuLYmP3khLy_7NpqO3B6-GYL8hRxYQAuHxxm3_3A319p254wf4oHQ56u8h8SY2wNgclqVPDdrFK-imt-JkrMBKTuBAbJskep9mg8bacpaTSx1ZzHJG8lYQOHw9iw5rySne4QnLN1lnA0Xh2OWp-nuL_Dj2TBV_8mW87oJb5WL-lswVnZa8VUyBT-x177lyIBxUDANBsGc83FYQFv8jm0pBR7S1XUS4gdrHIO5M9J4UP7dj63jCfyGNCVJdX5kszWZVM4P77JSbDZPWH--xBFPCEMfF_mN1lzmBuVYQLOq3WUb5zFFkrSBlEzdFWoXz2HflynyUjiC5nLwtKW6en3FbSo4eN53ztU_LphwyyUoaCS2SANsvIk5LxfBMJdYQCP_btQ7w8HpA31oXFX8UuegpivCiWjmo9Mj3qmgsxFmgt72RxVzyxBZJCBenwSe_eZkbk-QZNaJNG4xgtt5f5BYQM-RGmEHkRjGTc_hS8R3QQr66bpmmWnwZQjtmZ6Rz1gCYTF4NdaFH-Nf6aw9ElVhvu0rrRHWaw3F3Nzum56FYLZYQE0rUbEWTUfJXkXADXn1CDctdNG-wX-RjigNEZLBj_xfkiOhbRENzmpYqjC4ro7NZTlNsZ0iWm3hlLnqe9gzsZRYQHtqMieAs_Ld5qcKnGBpB65EA_6cmrneZtmdH_NAF1OmhFcAKbpQOFF9vQUkJYP-jdbJiIQ540Rr_LHFUzllqptYQIE2ahVYUmtQADZnhWtXWLQgkxgOP8AHGUsDPTKWQ7oleF7oqASrIZCWKCIz2zY_jNiS4NBjrssF_E5isUAs73xYQDOuLkNVSmsJnDlh-T4pvt43BpG7JypiO4I3nAg6XbE-tDNanhJdF6QuiLXSrGE9rcpab-dRHWMqp4EVuqYRQeBYQIXLXHkIyM_8Ts-_VsAaNIlJBAVfLSN8d5sfXbR6XBIBFkowLAJh9W7xW1H0Wzfaf9Qau9S0sKryvUbvtwtrDyZYQP3PDu31_-xv12Vjc7lCxpBqGVlz6yOhkMrBIykBN09EWT1FDk1I02Vg23TQaLxkzudmHsgoBBxiwPyHyYGuZsdYQIFqEHaJNS8QQ38ANu_FqLsJIL3zdAbD4avuHOWbnfi7xsxVbdvr6vYv3uEjcd2evlUnSO2M-RB_BkHgCpuAvjFYQLEkVG6iOFIVi3r4WDIl_kdXvqQpLJRzluN6-zRVNdS0y_QARs0B7b39A2fFWMAWKwcnVw4lr9p96bvw7cenqQZYQFqjBGb1VQBP9rQAf6ahAMykCkFDOVcN5C43EVExBe5ExTuw6uAJqbdJbrjn-UvMYDidmkEXW9fTSRauOLBhBiRYQKyX8JzRWvDXcyAAHjZCWZ6ahDXThEoxI3zzKOjcr6L07EGEHUFr3ET1mPcvu2LAL6jAueeH8w7tWZQZHtyn08lYQBe60RtABufbglTzBCv4VS7dJrMKBCTih716erY_psZnLqi_qChlSntwO_NVWtUnZ2mHNrXJIisk7Q_nEmbLMydYQGXYVB9I3dKDE8d9zVh-MWItHkVJ_93g80UmVV0xW6_95znBDc3sfYxu69KDOAQ-KPmkVKgL-d59m67ZNftS7s9YQFwyYK3q73Sd93Aa9lWcr8xhGDzmuLeuUaktrJGTL1TJxxJn_Nku8U-TY443P-z7IOGJYOnuZnO5mCxQpmXJrUdYQJ0MrgSQ5W0sTj8XYtwvY9Cjs58rHh7UySxFZsMEnTkFOyWg90zDKMI88-21l20bhvKyKaKqdI0spD4vwrpWD3dYQKTn7la2Bc4lULQoXrIvRPhe25MK9PXrRRjvjtJ0Abkv6v7oMbpKtEw2V8f6kV1wJRyWOTzZe2bQFAGIAVa1J8lYQCqgkmnGx857HEm06tn9nmmxpB7jm5OoWKH7J36aGXl3UX7lBERLbAcKev_s1e8lhdpTWJgmFBhSM4jyhSksCE9YQL3EKXW_VsqPKCUQ0gZHW47qE8r_9EeRObNsxzqalWV02QWcLAP1rfAshsVV-YytxWfncBSeaepBJ-ZYI95KjF9YQFenTNrm0OPbzpPuo-e3jqm0htQmhrl-yVo91Hd3vQ-X4HOdYgz14ZSRsFr2qjZQnJE2cckxFVKg0soNqMclDExYQEjeOUH4-z4SRKA1yIF_ZQ55QqXPxSZ_aG-KG42rDMDgqY4mIBLSDzsZxlGeoWVBCx0gg_6-2Y6rgIUB1daBol5YQM3l1TyLByG2Ab6Bo8y2GNxLSZ2Kr8_cSqOzA-YAyb6Ft7oscVPQBtzGixDwzhpZd4GGvHS7Dsyxf858wlk8ZFZYQNR0_kGLl2mrWNqJAV7OyjRBWkykUQ88JKcT1KY9-khubDdaez6jSMkpOWX6b6FtXIoNXleGdvlwZtTHUB8PVaVYQJNerk9C3vt124Q8lvcRr29dSyaOjc15I_NP6rjQxnNa34TpNEApaCe03z2Wz7M2xRb0ThuHaf51k0qm9jE368pYQOsX83-n-FFZB9E_oOnWB4xENDGbX7WyJxc_xuwNjmagq25Hdy0D1VR-xnZd_61wwZyFjLDBXADNs_qyoaqk_xhYQAAJGWago2Hr9s3VEMr2ydPbhMx8I3_BCDDEBHt8kpOxFI0YJ7oZ397ulJahNvZv11WYnxiKjOv9k2UYTsYk7HlYQMFB_GzWD-w154ZXSZFSs9JIuHR9kLO56JHnJ0w-6A_lehzxVNR8-G9U5NjR52Hq9aMi4Ao-zG3-bFYJttVbzwiCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};