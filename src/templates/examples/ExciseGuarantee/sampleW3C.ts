import { ExciseGuaranteeW3C } from "./types";

export const ExciseGuaranteeSampleW3C: ExciseGuaranteeW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/excise-guarantee.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "ExciseGuarantee",
    guaranteeNumber: "EG-GB-2024-001",
    guaranteeType: "Comprehensive Guarantee",
    issueDate: "2024-01-15",
    effectiveDate: "2024-02-01",
    expiryDate: "2025-01-31",
    guaranteeStatus: "Active",
    principal: {
      name: "British Spirits Ltd",
      tradingName: "BS Spirits",
      registrationNumber: "GB12345678",
      exciseNumber: "GB00123456789",
      economicOperatorId: "EORI-GB123456789000",
      taxIdentificationNumber: "GB123456789",
      address: {
        streetAddress: "10 Distillery Lane",
        city: "Edinburgh",
        stateProvince: "Scotland",
        postalCode: "EH1 1AA",
        countryCode: "GB"
      },
      contactPerson: {
        name: "James McTavish",
        phone: "+44 131 555 0100",
        email: "james.mctavish@bsspirits.co.uk"
      }
    },
    guarantor: {
      name: "Royal Bank of Scotland",
      institutionType: "Bank",
      registrationNumber: "SC090312",
      bankIdentifierCode: "RBOSGB2L",
      leiCode: "2138001S2MWIYVFH7U11",
      licenseNumber: "FCA-123456",
      address: {
        streetAddress: "36 St Andrew Square",
        city: "Edinburgh",
        stateProvince: "Scotland",
        postalCode: "EH2 2YB",
        countryCode: "GB"
      },
      contactPerson: {
        name: "Sarah Henderson",
        phone: "+44 131 555 0200",
        email: "sarah.henderson@rbs.co.uk"
      }
    },
    beneficiary: {
      authorityName: "HM Revenue and Customs",
      authorityCode: "HMRC",
      countryCode: "GB",
      department: "Excise and Customs Duty",
      address: "100 Parliament Street, Westminster, London SW1A 2BQ, GB"
    },
    guaranteeAmount: {
      currencyCode: "GBP",
      amountValue: 500000,
      amountInWords: "Five Hundred Thousand Pounds Sterling"
    },
    guaranteeUtilization: {
      utilizationMethod: "Multiple Movements",
      utilizationLimit: {
        currencyCode: "GBP",
        amountValue: 500000
      },
      currentUtilization: {
        currencyCode: "GBP",
        amountValue: 125000
      },
      availableBalance: {
        currencyCode: "GBP",
        amountValue: 375000
      }
    },
    coveredActivities: [
      {
        activityType: "Warehousing",
        activityCode: "WH-01",
        description: "Tax warehouse operations for spirits",
        warehouseNumber: "GB00WH123456",
        warehouseAddress: "10 Distillery Lane, Edinburgh EH1 1AA"
      },
      {
        activityType: "Movement",
        activityCode: "MV-01",
        description: "Duty suspended movements within EU",
        warehouseNumber: "GB00WH123456",
        warehouseAddress: "10 Distillery Lane, Edinburgh EH1 1AA"
      }
    ],
    exciseProducts: [
      {
        productCategory: "Spirits",
        exciseProductCode: "S200",
        hsCode: "2208",
        description: "Whisky and other spirits",
        measurementUnit: "Litres of Pure Alcohol",
        estimatedQuantity: 50000,
        exciseRate: {
          rateType: "Per Litre",
          rateValue: 28.74,
          currencyCode: "GBP"
        }
      }
    ],
    validityTerritory: {
      territoryScope: "European Union",
      memberStates: [
        "GB",
        "FR",
        "DE",
        "NL",
        "BE"
      ],
      customsOffices: [
        "GBLBA001",
        "FRCAL001",
        "DEHAM001"
      ]
    },
    guaranteeConditions: {
      termsAndConditions: "Standard HMRC excise guarantee terms apply",
      claimProcedure: "Written notification required within 30 days of duty liability",
      noticePeriod: {
        days: 90,
        description: "90 days notice required for cancellation"
      },
      renewalTerms: "Annual renewal subject to review",
      cancellationTerms: "Cancellation requires clearance of all outstanding liabilities"
    },
    referenceToAuthorization: {
      authorizationType: "Warehouse Keeper Authorization",
      authorizationNumber: "WK-GB-2024-001",
      authorizationDate: "2024-01-10",
      issuingAuthority: "HMRC Excise Division"
    },
    guarantorDeclaration: {
      declarationText: "We hereby guarantee payment of excise duties up to the stated amount",
      signatoryName: "Sarah Henderson",
      signatoryPosition: "Authorized Signatory",
      signatureDate: "2024-01-15",
      digitalSignature: "sig_guarantor_abc123"
    },
    acceptanceByAuthority: {
      acceptanceStatus: "Accepted",
      acceptanceDate: "2024-01-20",
      acceptanceReference: "HMRC-ACC-2024-001",
      officerName: "Michael Davies",
      officerPosition: "Senior Excise Officer",
      conditions: [
        "Annual review required",
        "Notify changes in business operations within 14 days"
      ]
    }
  },
  validUntil: "2026-04-28T09:26:36.203Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "EXCISE_GUARANTEE"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "3c9d2b5ac3b1fa135a01d95b9ad8b5846c50bec2ac4730e93082832e390f7f25"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-28T08:26:37.050Z",
  id: "urn:uuid:019c03b6-2e81-7ccb-bf88-b3e11b2f10be",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-28T08:26:37Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAd4zrJkNuDsHQ9OafWAe0YtuML38-FsHzO-PlAKyb5Jay27sg8vYriQA5_SawclHe4CHd_mRIiy2g2x5e0L6ZPFgjgCQDoFuavBv62zF3vXg2xkyTq_lnjakXUe3Z7oaNfQiKv05YIIFSqI5hFbt5WHf-PifzJV9OrM7rwXiw3Hy8wLmYeGBWmIZYQEO6Ja2wuwjSbNvjfAKCA7i8DZuCdk83HZ7eRv4M5B__l-TUn_w14faO-iLYA9R5XB6APfW3NWNWnYB2LaVPPehYQBOMEccY2HetkWlTSRMs_RWXy3734pZ8BtqOhZyJvVt0c1qIQJxFc_m6d8Y9mNwFyz_Nk-5fte44SrjmVDNBt-RYQDy7DRcJBdrH9QA-UhXLK2R2J7zIw_kSaJ3X0sLSYt7pT3CH31Qb55iNBPTw6fd5Q-MQiP7m48VDuZkuu-xKclJYQCwlPpuphWf9zbZLY4rxSu1nYcs_etAbOeTHu1mfEWho9XJnTZqiLNi_rc0uUMeMQRtzhoWkIEVW0e9njxQ8YL9YQOIKo0c1G7J3L6ne6ykMGz_gfUJaWDeW5Io8hVSaLGx90yraxWiO2sA43bL--qv63vRy6IYR_zHayqrSoad0v8JYQIz01LrPu8ft7blNubkvSRGtfBfSDLbmf__Z7iOAwtGb_PBeTHysclxA5GN7iZXzNrFVjZWJPggTAHegpTpVPmNYQHgNyI71ZRWfAOHx0D0WSMdnIwmXHzDT9iq9oA4a8uujYiLEouEk4vTlDKN8CNWBXnBvFQi9nAMl9-t2u_iZR2tYQJ5I6aFIgHIDnSCKsFflAlgcDaKoy9Pnu6nmtK6Wun-ajFK4_9OovdXGDnQCGcX-qfT6gpesNbysjqDph7lQ_z9YQLBDLet-cKIqxThrOZsmPTX5ol61kVu2w2jRsdsT6MX8gJjfLV80EDPuXbqEsS7LW00_i6r9HjFcDsK5iFuoEy1YQOYAJ-qNMk2p_BJlK3bq49fk_oJ1Q8Tj7ssGJoJBpTnfjTsPkVLopWVNUfxJxnW0-M-KqCICFfyKpGcl0fJ8FqFYQMT1PAyOShc5d3GZp1kUlkZv0MjbeA7LmomXmt6vvlGreRDBawckAC0QrgHY5kdAsYKGJw9RYAnCDBHA4LJrTVdYQDlnmMTQoaN0B1sArgirOFSlh_jakXirct2YEHl1sqV_PIFOuvF3N37zdb6mZD0RhSjlNKmpeCrCO-oSgeHYzx1YQOhHC5dOVnQGLSP9nWXdRM2wxKvJrdu-NLuEiMINCyPAAST6jxBLSSwFfN3xn4-QM34WMFHS7kIBZkLVtBzblUdYQG3aFahA_mzvDcghET1XAcsReUFj2w6idoDmOl8alQ4GVlyDg1x9yqtFpOqrkB86jP7BDvTNIQroC56RaosiyzpYQOhQkSUOvgLetVFYPFwdsV3rYT5AHkLM8NansyzndMmXeMewlFmpLpCgQO6QIeT026MUApiyZOo13Z-VusgNxORYQAdINDyf5kA5kc0RMfFkgRjNNviNKhTI6_0xhibiH4SM5oH5PuQaFupZptE5HMoWPxHekufDUEHfvHTn3ID5_JdYQLNyctXfDIzlR8S-UEb2LjvIobYApm47cZcSGayDIpFWrx7iTuy6DaLrYK5Ueof8hXMgUXKwHGJUvoQaGtnCCKVYQLiIv3ZdPsO4sCBrrl5LQIp-RnfD9n10dm5Rc8oBRI6tcU0Th8ABsXx0a237-yg8uEnS1sMwPnSb_a0-h1Agpy1YQCpuPDZ8XmghmByPFZxfHOhkM8DwG_o9krWuNBidQfHmb1Sqwb3o7lOEiQleqyhh3X0DuOyOL_z3jnSaQ2LGfFFYQMsDUXu4ckPgkUTKO1_7Qh2or_cMZjvmgc57dh89irCvSW1ZashYlMGDV4aPcopGfeEndUfY96RHwijZA2VQay1YQLKfLzD57jfSqx-c6qPHXrq9K5vcqLUBn-zEUqMuc0EudxR44pTx79oKyVWPIBdZe7a9DlXVWDa8PeF_53Zmo0hYQITShl57T364ru1qjI0I1Q-8rRpgL07M9nvMUdxAiAqUsb2nhB4mT0lkUeLax2OYb6BT7iiaF7--JWW4rdbscYRYQH_syYjy6uy5R5pXPdfJaW49sevnoF-Pwf1jkICIB6T6EfKEUh0w0yaBDtgf0xQybSP-kp9hOAvpT8N2cmQCNVFYQJABIrXu15Mq3UL1HYZXT-Z8WwALc7Qt_Pic8mHHMDWxLVaV4b6fnOWvOTGeusEJmlI2woGULGK09xhlHjloSJxYQO9xmYJro8flZFNc5cQZKHB-UXU9yQHbgqyVrtON2yh84QKkIwUwy3VVKj97uHzoo4SsaO7UpKHziCsgSQm7kTBYQE9YP0Uj9ow3Ps4safXWRDvoDzqjCVNOkwB8Y0tzTLOuuPfn38syXNTeyLmleFB-FTbkY8oIzY55h7buKZd2LqdYQO8PAhINcwZULhyEWqayDJJ1G8I_rlurXOzX0GwB45eEi2cNWrno9r-1X494OhvTGZBmT377_03Nz_AlXUjbDR5YQIipkZHgaUSvJimWhze4MRAmw_HyP0GHfnDB0ReEFC161miQ3J7jG78r92LBDP4rjt2ye6LlaYcjjTR9ggjWhwdYQCI-m51hPHIECFLNpbOQSP1N6MsD2OblbgGZ5bGzj3tlyE4lgAYUGH4z8QqjVUt0xYvPWtohVRZsx-IgMoparYVYQO_GUkZbKrOugT2iNQhQbPW8XWWF6kuIhzsQVJjSULhoEvlw4X9Tc1dIOECnqIsqe0rS3x1OpoRiQxfBBGpPZKRYQM9dJBGX5908r2whW5wC4N4A1hcEkDk6jQSoL3A8a7r5Yy6cQV48zFvYpIYQYCnTx7bbDl4FGBOEqaUl0S5yf7ZYQP7Khce7dVQwTGA4vmtDvmoKgDjwftCpbLu7BHMWZILXVPKsMcwljF_OvMlAIXbyEGcE3aL4zEXmwAb_nWFAW6NYQLDJCTJ0CAx8H2jtZN_6DihxMpVWxwlVaroLu3_wM4xo_1itRbzqfwCnmT4xpeNyhm4DU_ESqjlXECIoTafvJA1YQND0nuenloOxtp8hMv3poCFNRSXziutYNgqiW7n7jdG78LG3Vix4_UXNoRF59yGcjUIyCOiIAMEeEqRsqGtEgZBYQJVqilJ1pb424utKHa1131j-I3kKqCs5ecs-SkXSEL5c1DCk6vzLyusAfbPtRzxWqckZHqiW-iso63FPtZ7sPbVYQF_nrpsKu9392zgJfq6tWqlg60v-OZsXuqVYWc8VyOEjd4ihaidOHAYHIfEcDl2FpnmiGYFRqvqSB8wT4ZDW9klYQAfWV0q4R8vtxPQt3sRaAk9piuWFjIWC8RoLI0FIdlPLbvraaZQIxEok_-n44-8uWOyL88-M6wFgV00SnsrJEAVYQE-TDabrQ9MPMcC-78lO3flppjukRTKHM81OaAXUpIayYMKFtnR5ImXwfmjonBBST62Sw-_N-uttJTN9MAJa2kZYQPb4ZyOQKGZ1vHZKgc4-OJG8jTUelBx-a1MPv-NDXykJGaC_kSA19_iXshpCZ2eaSiOoQb6rCDRqld2GyOQuaN9YQPczxnt9hsl7KM9eWh43QTO25zTjesvj6bRDJb5Tfx-jIUViZ7gNfwNWVirdnYOXSWNdvY0vZZttcXd8XGmS3j1YQOCRGSjoA-FIM4GgzoQF4ao0SMDXQF8a7c-ptAwyHJUJ78nbO9AceohG0cIonKbTtxIBCEf5XK2a_3OvFAB2l29YQCY9YT3T_UhhRLzdQQPzjtyEFF-M0Q5RbjdnbB1FOhO5yfdRBNhLk1FOuQ-iz5UwZdnP2MZzTlBhjy44-F6gyWhYQONkLHg4gZMtXLnfPUQQn6M29Jekjucy_TDBwQPU1e_J7xXVr08wy2EC1AWMiQr1nnNkQRBO6ytTW5SxXuoKeyJYQDueZ9Abm--biH5crf6EAok9dAPxznh669tSftRxYXnw9PgsnHn_-v_GKoNBigJhaOaBXc3rRZtA-sVbmIq3sc9YQLwpDMebzdlqutd8vSeulIFfWFU1E1ueFVGPjNk58KmPtixsz5GOty2VCrqUeMu44X0San730VQX3dkE78QWmhVYQIKzs7cxaBbnhN_wb3WfMEIpZB9zxfNBoCBfV6o0HgWL2EGbdyhYNS02DR_nUVs9lbJAV2zQeq3914SDVm2cd8pYQIyzI1BQheYAiTY6Brwd-APt9dzvphdAIvcRLMdoZomYVI_eet4oKYaNUT7cXyFZ0W3uSBvzg1PT5lOFAdLc2EpYQEYMjVjOw2sVSAYITWvI52Ff-LDn9q6xvsN-3eMY48LMiCeZVHzes_8Xwp_L0Aq0w_uJ6wZzXO1Vfp1gp27OYaVYQGKJbZZJMphRedfXAG2y2xfghMKXdVQcZi7qZSg5_6mzTwCQ40lXFu42My6SmFvb0BpNdTD-RTFcIXlKzXoUpvNYQAMuFUmQ7rbu7mWxlQenRLLOiOvwNOb5r1u7JNtv3OHJKcopjRdxS9EEqPsoLsMzRr5SQBaeq7o-P6Bnty7PAeRYQJ6mn6rDi_yjWDdeKTs0mgmIBhcCMp9nG6uLYXFMzxpjWyOpW0nxFPQQWMrwkJzjbMGMKVrGNmPWZdGU5nJVVItYQG4-pWgKEG0PEy9PlHcWG0tmd26yRtZWzyMXP7A983Cv9EAJQJJJX6QAZB3f8U9FmtCqzEbbJBbqD-nLz5QIBcZYQEcml-1tkQM-ERZ2k1Zy9FcyvlAvDguIf7DANbhVhSmBof7IEOmrWKwylwtBjuPIyHl1G1_4Ug3HLVGp2_DwzoVYQGe279atql9_o3DrvtDklzDNGvy2jUFsFTqf2DQGt1wlzTX4YFYwpfeLefCfl15wcrwAVRPHZrpb_15hksMJCGBYQAyujiOgHknY7wLWz30bb8lHOe4jdb2GgXjgITKdVg_T_2qHQjMhPIt66ch8XCLZY_ho0cdJwaMqgowsJ3bSvvVYQMUOewTxfz5_BIw-VO_FjBt1_JW2DTwEmf33hylhcD1-uZBNGAZA_rHI8sVQU2VvOHlsWFBrl3n3__ipypVE1fNYQJshveS6qlsPsG3k5OzZC1GaPk9trCTJYEfqepDRARmvCRHyraoxsocnfTaf_hCdSCX2otexUNpMLCreRMqUVFpYQJjci6Ac1wo41RpyCkhU-mHqAiux15-jEFSmnFMC_HURpV7Zbjuf1uUhpah4n0kReUKej2algpR6Y19NHzlIATxYQIPPbgZr0-X4afEkwGFLBFJ1YldsSCw5tA-7ywgTQW3EJ4SpUWLGB41FMIFeXMFrVL6pLNlIPobu09HmAt-IxaxYQIUXdiSq8rBapTpGrPxvN7nEZ0HkaeJSl9JnhLWR2VUV-fsmcjoxGOmrf6dNS1eeYRN6Nid_PD12TGfDdZjCahVYQP2i-u8YvB1-lanoM8ppMdV7U-OKY64L7nlhaSQazFoFtGFUrCAcYiKy2u8XOrTVzmWY2t_tXJaTVc12UpReypVYQONkyFwoGbrStzZPG0jo3PPgg_u4D3leJxjiBGSJABSOQ2-3RvPscyTQmJsJwHxvi2KI0IdI4N5thLU2RxlWysxYQF1ss9KruRhGwtq-AopuLIZsIhJjb5Z6AdjzuOnh6FuXGWdDwstDTBrkdNVJipUbfJKJQ-8Q3XySK3Cs8VySqiBYQCsJxWRehyx18e0zcQ0U18LdGHu2mCPfdTM1HhkS700Ntasj4imb2Btp1ePdRf0dSSD9rx3Zwc1LvoF4c3bs5Q1YQA3oN6UnaMfb27PmDM7hamVOkm9kCN_Fqpz2W6voa3CxWBVXzGKpNZPgBclEqgG4oThpJ05uBbnbnD04ft341ENYQGFGYKk8mQhkW8pcNIjSxacEZ5EH594GA6Z5_HGOMgjbQC0uwjXnftFtwM3hQiYztn8hPQUOQrqNEeF9T6AxJ8lYQDOGyBb3go4cOVEClxI244-frb7nmUsBFYB76Ro9aXK6ghukoyhGvqzypMppkCd3ZUZtgRpuhurgsQX3Kp5k29JYQEg5Gsi4cPeDVmtzo9se8kkzMWMlySmPjcOwDItFoVVogOJ2qpCwXj1JD16uo5WJ1UFaSiJXmTkbfm0E-i4y4exYQMbD0ByyJf08mx1ltyXrGHMRIviL1uYKn13LYgSgWISaSutO06i-VTV6p4DFoL3SLmInJsRujiyblG0WIGtqJoVYQDwJhXnxzz4tGjpc7ZCSQ8gEA6L4fMGgLR0pn6dBJ39povNOw0qmoCBhPMAzulaudx0QNyyCuSzVciq2qu53U3lYQE_QEgWV5e6M3ntEJnBr0DGdtcdEw42zY-D6ZaenfEaAHj2fRfviK1M6fqQCEKWgwL8jUI_0ylXPal6099xxI9VYQPtdPcyeSrLV6HNCGyJesJRbP97IuwdW2XVhe3QJb-hCJ4ZAbm-POj2weHZvCLuTlIL_jOSYgSWhytRXZKisUItYQMw_suinHA-5exBnnV38YSjkUngkzcmvANe39wJBF3NOTSfKhotgG_Q5NG1q3GaqXjYK7blkIq43G07Xgu3EIJZYQMrOIn3ncmMeyL4EZ5UZOdjepoFSooe23crCRItrLdp1eUT2YntLdXXcyg8fJxsm1FCYkxFFJ6uByPfu4byVCdxYQJ03xB76k7nrAQzsg-vcDsaHQbAb0OESySh4yq1FcwdImJda8-k3w8ITH38IlxPhjO0eALP5awHzeb-g_i-0TyZYQOaSkQHO828ZiIkAGtkpDBt-QdWrghBJQTCOt2ZpuT5c3FT1kYSEmUAHUwon9klolfiB-J7H2CSQX295VUdodJVYQNwQo0AAhEILN9c_OdUzfD7lIOs6t5oWeah7WkJp_hSuDGwwEpPsmGbWD25-25i3n7M1i2FRMniiJHIC9HXAZ6BYQNqj8VimHn8cYEszBl58YdAI9zngkcW-IUPQxzI1KBmsFYwayW6dXsb1UsbK2kVj3jLLj7AcPuaG6ps3ES4f2mJYQNl2lkYRI_3cYEYhdgOMCpKkA8I0qE0HSodcAh9SM4RsKy-SniJxPyFz-pv1Io6IxIF7fIX5zz8Ri2WNM6T-DaFYQMqhnbOmOT-IVza2OCeF4DGfOYG-ajvEMuha8ovbFw8D928uBC8Hc-Y8pd5Cc_Q5ECwhSvfAN1Pr8pYH5QMt_bRYQHk5Dc0454LvyDQV_YjkG47QmnuUdF4l4lpduVk3WR7nLYKy8m1iRaKs_1UnRqY_O3EPHstEXG8Eo1J_76TDbPJYQNE9SAsEWSnbfEf7L5rwptrYMofOP8XIic9H3QdSUQjxcoq-__65m0AO5dWHVXJ9aSofum5YCBr3SfpL65sybWBYQGaRKIC71b9F9FEw0PdT38ezkm3W2jWKzPbdpXav9LsXESALu9GcjWEKqYjOHrdL2I-BOwN50XyjSUt5YJhr4kNYQHSC6Uow0PM3fkO3nmREy_E-a8RSKT7vO-SN8FZOlU0HbhVjd0Ttro5wxfnf8O1BdlJJNhBI6gfPKk_ISpva2uRYQCDa8DV21ZWYSE2hNyoHS8pLz_9KqUQ1hBag8-U796yDB0B2CxC2oA463aKMrlJ5A-1tT2NufwvxOYsrWrleTcNYQBCKg4TVYmAUk-1ubHlLQxcbWEAzXfqQA4MPEv_7gTtWq7cPOJxApqGi81e7Y6EYp_CjStMX4Iy47S5zPfQrR2FYQLpewQWKkvg_zJGkRQ6uXNw4NMQu3rK1-uMI74HM5cIj9zs4xYtNc-kxiwNOutzRXqIXrACiXj5D8k_v4rkEydpYQNrucL1hhYZbgRjf4oi5mbJ0cBGTnDr-egRJlcXEE_qqiFxovNAhSugDgwfvlJaar25RqMq24o_PkQj1yZRXn2lYQFPm6BilLpNTBD1qJ-K-FYIuLglUBe0R969ZcwMOy1eXtSzukltpZrWCrklMNrM5lJzIk8lD9yU2we1Nq3vX6QNYQMQjDs0LitoE2Srxxw_60IWshR9tBDwfeDRB5eTD3JTlZFiOseDNcLQNHtCsG5LGKBq6NrTEfmn0QZsMZkVUTy9YQKwIARS780N44PHDdjFJzDWjjPSQKaUPUa2vH6QRNzPEc6Wn3vEt0lQK1KZZJYLPZH92kBCdFk3fRQBkHhoFz7FYQCLUScmWWWYtz2trKIlab2J10Tlq3Sa8k5Pg49KLLB2gQkj6K9cpMwU8yEMINAm4yF16ZOm5kGkRa3D97jca3YtYQEXJRytoycZ5x3WeD2lov6IryVWEWlMjx5-STUHsHAkjjwsAFvX5zh4KUALvA4he1fu1hkKnudtL_cyuo6Fg3ntYQFA_0RxGFaQr_5ddVroP48Asb2ARthx1O5iqi8NJjzlBDPAWsGlRo7r22tCJ37bc9xnLr0LYHgbP7dKfhnhY7oVYQAp-QLTgF1jnBBuAROE4YzOgfpTP3gwwjiB1y1HEJMSKEAkrsAeRk4Rca6fvzPbTK_cfl6bQDZCe3fFnLcSxCB1YQO_YPNP-a-24_Li-hJTfd6fP4Y7F-SLwvxJFvCZmc1fmqOoV3UZLVLHm9_JRMft8T2EeTL3xfknT3WS8lAQhGd9YQELOSI2HmDxG3asFlFy2A1eBiD63imtYDcQiDu1Hy3COa891b-Frze-l-Ad-jrVUxEiQHkV_tiOCqQZd1P4aIF5YQATr-zgZsCdVZkUjdyopqVHG036ia0UlqY3lYaLf5sPUcR5S12Hpb9kG5X-37DH7vEi7swNF1yUcwlluZL4WPAxYQFDq6nwgGMXT6-xG0s39bThKiqFD0FF0gA4qTLWS_Yuyp-m0q_ISTavVTn6itxBuJ064n2Q3JQ-AzOfBXcwXX4BYQMFzkpeTjjf9uej3mJ8nOi70zHlfVKFVxvx28C4O_76Qys3d9qvjmexuDndpLbllyB1g6z9NzEKgdi2VNyTu3jBYQJe9RtIRTsPS56oorhfUj-2QMLqZLdVu2hw3c2w33ULsubjIyhqT6d1fsXcEhClYOLpPhi4RfcLMisDbNXg0FMxYQBBcWWLwKb2tSnjbG4eAl1uDkgPIKC3xq8m4kCbFWydkg-PUyoyAtHeru6cXXjBmFobgS44dwKjey_Lg2RqQB0RYQA_PUOqanqt1SipWKKvqM8jUfgFzXA6e6E5LnxOX--d738rr6lraTniqOK_wFs3RPZioMNQikH6TLU8-KAN7g1lYQOXlk3rBDyAzqeOYU1Aj2-GhIlk46AfrN6xBPPPA3rKfgIRZRl-drfCEFh4mpDvNbghjNypaiuHUFgYFVxOp9mtYQGf3AJIVhFxoubhjAd8eGTxdizArubIS_cb2D3iMzGKqkRSdW8FzKZD-rmh9pDXMTyyxXU0kFOGtLTaow_DNmb9YQJr25SYQrpsshz0s22wUBu7Y4F5f0qLKG7gVTZQnW7OkBZAPhobZQcTT3fF20AMmxUrYzVYHQuOt0xpuOaxKc6hYQJn8l4HEGwQeEOvxl6R3_7OsVtpNDxNLvY77zwv4eylOSsoRKWsWsTkrSVAjdGykjRdp_j4HFCX2JTRNAgwt4c9YQJJldmMSxBsIqNSbR6F7nTcv8OnWbUE9USnmhvWrlDwLO_P5wyDB0oRVpP6GzXNgtI94ZxoA8DXAouOn3PtHG6BYQLIYNTDij41AiPvdLEhEZwt31PPwFa1yLjGwTvLKzlIWUPP6u5Zpjs-FUNrBbcwNA9o5XkbaYFk-PEnDCjGriipYQOIWdLnRvJderEZNtdVoiYqulp909WiW5OSKeFUJHxqwWYudLJ_N-P2Ca7vnjtYQVzer0CMjUeRCrirGkxt8XnNYQCHDSNDx4-YzAiUb7erZDG5WNp63AyHriYLPA69qNcxVa62L7j0_LE6iAb7aLsx4jsKaoIc8Wf-qG1YQ7T-f2khYQCI1GJNU20JCTIeI3PcKj7R60w7kW6CkBwtQuu0EowuT8XjlKiSAKk0BCsCZCXPbFyf9hngAOtv50bEMdA11ctRYQF5mfPAzCCyh5WWg-ipVpMkRPm-edvNu3RGgj0OGMM37fsNA-WHIqyzH6_tdkZIDav0oO0XhO7Vvv4MFEJXZXjZYQMOrFzxWu5NTnx-2v6IGITR7XbPGgz_SF2MiTQN8Fs6FRQpnWpq3YUV81W6duaA94mQePeF68J-7uw8JBKoERcJYQPs7tFuXbzwxHIsI3aHEKAOgPnDcldgf_2yZMMjubVFJraxTSxALzCDSWu_IG9KsEqP_026wvJV-NfHBikgWQcZYQGiP1lEA3HCccYhaXMWYU5pTCwWNC2SxC4ptyQAJUpqJ-3mxZGIX4mPEXdY4CP8jL0GZz8OUxL_wFeXJXrslPc5YQAqRpJgdrIDc12Fqprb1sQ4p3XaTfYdavvKBgPfTOBMBNTJpkLiXx8at58Pwsa7bMSGVzr2E6REmC-c6SO2oXhFYQOtanYPfmYxbds4Hx8dkPRQS-KxnklMsHvrNJR7D1qddn6jpS1SMHHokxsQOTFMMAzDTCvgC90Ubm0-4HGWaiAdYQE-LA6pAj45W4mqLItO1aHF-J3d4Dpi1W7qTyv3UMNxlzc4U7e1RDpoY7zyNnRQwYhpJcAx59tKHrvUATG4WuIZYQDpTGhMXjsZAlVYe9vnT2DdzJqQKnRIdLKdj9K3mK014tjZ1EgEA0XxNQkJSn6_cXgMFGffacR00Uo5vXZY7yPhYQKuyucErL3vZTgexIPQD319MP_n4MBJm0ZVyxV3lxoc614z6cuSfcAOkt0RwUkMwcJKnlKt8PJhnpVWN54_RuqtYQLyVEVY6_qy_phSpMMCL95vI0pzMnwOC51mFvVSDdvFTKZdOzkFTsbXmQEb_nqRQ7CybAHJQEkEhdv1hICETQJxYQMQkUqHJ35fWG-Xicp6gbbjoIq7bla6xksuco_Az5HddCUeRUuYusyZRvUSkt0mxpxEExD8Lu8VQgNqkyrqtMjNYQGcZXhrbwes8Xu8aZoHeBgaN1Ql0Hd5ypXwJzJhriFBh0xohCCbIsHOC7PBT0Fp2Sh_E59wWCg9uSCceIndMlt9YQLgOck7CLpwp5WlWlJdOMSy9WpzbboB_U5d59LJAgY0w5Di4YbH079vTr9IbsdDBSSHe8Tn70-QhUrSHhmIXZL5YQI-jTqjYGyJtS77Ob-n9-pA5faWVWHPXZPv3urXAfeY8dxBfLhYY06U5azdMvXKnVOSqHSQfoCkkS_27fcfWtFVYQHbALWlB-AGEQcrLkxd6ym9jDSXTuqwYzuOrpnRiZEUd4dalWlqyhHcYOKJlx3hU7HZ3JW_geRfPTYpWLwQzci9YQNDH5UkgLCQbieTkPFOSahBhl0kM1_9vmO0a1rcgY15dov-gM4xKI2dW8plb95bJv4pZ8X9EraZyojgwZL0FVlpYQEa1z_qXeL9gacL11ohL6WDf99AuL4A6WiHBzkkcVxxSHaUO0Sjxhoqy9Z0G3G0f2IEGqyaaS-tyK_mJklV2OSJYQFiHM5hfNX0vz5H6LNnBK4MbEGsfDxgjpqPw6VDthFS8Ccu7MiNK83w-aeCQi6uLvgKjSFkZ2MSNt3g88FkGfmFYQK0ybrU0geWo-35ON0uftm2zSSv0y4lUFiN1hB1jY9OaBAS2bFjANYtnPZzi53Kz6I5lS9vCSKn8sSpdyaazAeNYQDBTW8atUiZJ9ruG9-E7gv-dKtkHHVmdG2noxVNzgwBUav_Cl67ehvS8sRSOGxgsbFeIdRoh01LW83Szid3o0mpYQJzyBBVvocr9HREMj1VoZjnxGOOUeT-KmNTooQT9fhl0FXx-rjkctzqLbK-weFF3RQ94WK46D9KwNqY55vDrlEZYQMIbzoQvXzKPU0nzWMwV_5Uvv576W6acOPaRTrPUk0zK6qyBSG3_KKV2C-2TR1GPPM5qo8kAzdKZrU_aCWKeFpCCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};