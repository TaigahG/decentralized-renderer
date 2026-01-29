import { ShipDeliveryOrderW3C } from "./types";

export const ShipDeliveryOrderSampleW3C: ShipDeliveryOrderW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/ship-delevery-order.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "ShipDeliveryOrder",
    deliveryOrderNumber: "DO-SG-2024-8899",
    billOfLadingNumber: "MEDU123456789",
    issueDate: "2024-11-10",
    validityDate: "2024-11-15",
    expiryDate: "2024-11-20",
    voyageNumber: "MC442R",
    callSign: "9HA4881",
    vesselName: "MSC GULSUN",
    portOfDischarge: "Singapore",
    arrivalDate: "2024-11-09",
    issuedBy: {
      shippingLineName: "Mediterranean Shipping Company",
      localAgentName: "MSC Singapore Pte Ltd",
      address: "1 Marina Boulevard, #28-00, Singapore 018989",
      scac: "MSCU",
      contactPerson: {
        name: "Operations Desk",
        phone: "+65 6477 6611",
        email: "sg.import@msc.com"
      }
    },
    issuedTo: {
      terminalOperatorName: "PSA Singapore",
      terminalName: "Pasir Panjang Terminal",
      terminalCode: "SGPPT",
      address: "70 Ocean Drive, Singapore",
      portLocation: "SG SIN"
    },
    consignee: {
      name: "Apex Tech Manufacturing Ltd.",
      address: "88 Ayer Rajah Crescent, Singapore 139968",
      taxId: "UEN-201829910W",
      contactPerson: {
        name: "Logistics Manager",
        phone: "+65 6777 8888",
        email: "logistics@apextech.com.sg"
      }
    },
    haulageCompany: {
      companyName: "Speedy Container Haulage",
      address: "12 Tuas Ave 1, Singapore",
      licenseNumber: "L-998811",
      driverName: "Tan Ah Meng",
      driverLicenseNumber: "D-112233",
      truckLicensePlate: "XB1234K",
      contactPhone: "+65 9123 4567"
    },
    containerDetails: [
      {
        containerNumber: "MSKU9012345",
        sealNumber: "SL-991122",
        containerType: "40HC",
        containerSize: "40",
        numberOfPackages: 500,
        packageType: "Cartons",
        marksAndNumbers: "APEX-SG-001",
        goodsDescription: "Computer Parts and Accessories",
        grossWeight: {
          value: 18500,
          unit: "KGM"
        }
      },
      {
        containerNumber: "MSKU5678901",
        sealNumber: "SL-334455",
        containerType: "20GP",
        containerSize: "20",
        numberOfPackages: 20,
        packageType: "Pallets",
        marksAndNumbers: "APEX-SG-002",
        goodsDescription: "Cables and Wiring",
        grossWeight: {
          value: 9200,
          unit: "KGM"
        }
      }
    ],
    returnInstructions: {
      returnValidityDate: "2024-11-20",
      specialInstructions: "Container must be swept clean.",
      emptyReturnDepot: {
        depotName: "Cogent Container Depot",
        depotCode: "COG01",
        address: "1 Buroh Crescent, Singapore",
        operatingHours: "Mon-Fri 0800-1800",
        contactPhone: "+65 6266 1234"
      },
      freeTimeAllowed: {
        days: 5,
        startDate: "2024-11-10",
        endDate: "2024-11-15"
      }
    },
    financialStatus: {
      freightStatus: "Prepaid",
      freightPaymentReference: "INV-FRT-9988",
      detentionTerms: {
        freeDays: 5,
        terms: "Standard detention clause applies after free time.",
        dailyRate: {
          currencyCode: "SGD",
          amount: 150
        }
      },
      demurrageTerms: {
        freeDays: 3,
        terms: "Demurrage applicable at terminal tariff.",
        dailyRate: {
          currencyCode: "SGD",
          amount: 200
        }
      },
      outstandingCharges: {
        description: "Cleaning Fee",
        currencyCode: "SGD",
        amount: 50
      }
    },
    releaseConditions: [
      "Customs Clearance Permit (CCP) approved",
      "Terminal Handling Charges (THC) paid",
      "Original Bill of Lading Surrendered"
    ]
  },
  validUntil: "2026-04-18T06:58:12.099Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "SHIP_DELEVERY_ORDER"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "2afb5de2767dcc3e12d1e6a41c52ea132dc1d3678f9b284baf696e175333865a"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-18T06:58:14.431Z",
  id: "urn:uuid:019bcfe5-ad2c-799d-b219-9c11cc4ffb57",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-18T06:58:14Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAUnQwrhwl6Md-5cJ5Tzx6S8CczX6j-riF_QHWBIDR3A17pWgCeiijHOjhHQ20UY-Zk6zEEehNjlMxVk0Nebc8aVgjgCQDkhOZUbiaJNumzSExVGy6hpqcvOscakRUMqUSfT9IYGFYIJy5g_1A_MpFDyrWVti07xxb9mk1UYXu1fQfvpwxKwpbmHFYQF8zMyVeCpt6nreZgxMr3uSuQtzcVIGpUpUx0tH7ZyKqZAIe-6XbRqZK5rhL_l-EGAUdfj_WZr2k97BavxPdu21YQKYvEUquP7G1yizUrQw3TVoWDQ26IgxZjPlR6Z-1deAS03-qL7P-iFIoHD0Z5k52HALmlH-I8OLeeWM3sa9rFQ9YQBMoVdIrjg8H0FSXXtRrFqCXosA0lAuNud2Ce1xUcQmQycbWNs4NU3fNDLNpIAOmJHuzjGxpf2CLugY44awLk9VYQPQaUVabHCOqUO4I11JX1MY9R0v498949ItWh7IUmIE6hkT6AN4UAkVaw5usNmsfndSh49grS-MB_B2HICNd6U9YQLZWtHyqvvFtfcY-pEt-Wfs21uanXPPd-iVafvvEWGHKlrkz39dtGpVXIBrKxaSHJ1pnITZuJG-lvYhMlKl1erVYQPdxy0buNnaW-dlTdRVRtzWdbBKvAtMEvZKhDSwTsg3YlyOvMixqTW-uZ91I_h3dPZcx9zduAAxyuePcRNFNTjdYQLf71ZaMFKm0UfY-R1dhOJa3GsM2cLCCr04QURKyg_kjWwULDX0IHnhcSCCqqN93jg-C9Lt46vknOwxVCN7eovlYQEN5JNEe_aT3fnDMWypGGUkUMef9ik3UIBlUvIHxlbbFnVaP1mVl83E4vBDyCKhv2Df1c4JkhIRSIOjREoi0C_pYQEYE3HN0W6aSD6SfgvUE0KDEi0354rexvZTmozAgyS3BZZd5hpTBvJ4gS-RcZtZ5CEORROYtaK0gYc10ORT3fxhYQPIaEcgRQLRa1UJ4mWM-MzS7BB69H-eqKxOXi318SjxV29v7dfJ7FSMRzR37Jb3FLQt40jNH_8K-nzGyl4BTYDFYQMPgJfjc_-YnRYjLShBA4yRRm6erMhqtEV4NQHhYNwroO_MHrwp1VjmYjqpdifdFAokmTxjfln9xP0FrK_2njuxYQJSPlVRU79iSqS_VtoqUzFRpLMn-RRizDvy_rh8OK1dqBzc9xTqi6lqfy5I2zkpbSgUh9CCX7BlKgXQsonm_hT5YQJF3_vUGpLUO-4trNsr3HN8LwKAs5IX8XSe3kbpJ61v4Or9fSIBpR-hsRw2HPM1LKZObl536Qx6HS9kYMcbi5JtYQBQ_EwDgxIfELlvDMmelEQqmnLATWv4Cdclix3U8O9hfyOWY5eT0gvxMO3e4XinjjnpoBW1FLE2Qd1RxJjKDV_tYQCDZWJp4qMog9cxWIQT1CuPYXG1123ultJKRPgCiu3TCQmKUzPEqMsj1uK9vjzXQJYd86wQK9HgwQGzJBRzSxNZYQCoOkDiMOqM6liDzhu9OeDr6UVqoEXJvBRgoJ5AhkaSS3zVfL4d5pHopZV-SeFysBxmHFK0c2Mvh9uB9FyCN-T9YQL1yaHqYeEaor3tQKFifAv2IgYrLmIxwreOHFu7DLunV-43na18kYc-_jMU8MrwI-yf7t3vemZGQPBLK5U1I_htYQORm0CGFJsHtrJK5KHbvX9AjPMHEPY_V81ACPYB7Zfr3ZXZ-fvL2TmW8Pb5HMvD5MMATP5j9EKNXsXvIzSTenNBYQNMjMolmdjyiCuT9mET3SBO0wONNNLM0VUoGOiXYo5xt-NTU3rlJxqVbxrDKVLpHhy8y2RNBMO2nutMGNRm-s2VYQOqHZT78ay229nt6g7TIDRdcb8AqJz-hOjRAn1xebKFt02JfVgRo4sRB6RcphSQXJnunEHEgYGeHcRDeca2jk6ZYQOv-HJpAy0hZfLaOcyFY5chAfSTGKHWcuqtKQXvVeguFM6vyRvC_n7uah0TbuYnBYL3j-dYKVk8denRtVFqW42dYQMOdkp0pKabVUvsUJwwl9agy5ZQL-i1p5HDeY1NmDAFG-1vV76Ro-bX89fLHVqUX9mIgPCbjWhy9otdqQbx8EZRYQLVxA_m22dAHBJjuy1tbG588FzOkSVpYPHhQLMAXjU9ScBzppsqWIUwzgmpRteEs0ivAhNx5LxfRVDqTxZhkv6FYQAhomP_87H1VlThX6cGNCVXo75llJfUEMddruZ3vRCHO1JT2sifm4Al1aTDfgrJ5A10AAp2CUVw5PoLkugbDJhRYQHv653Zcr9cuR02dObdqg8ffKOy2oJR5TmyCsXfasrAbagdxH7zo5ZMuicbfZVjHlTj1I0mYpA_leVYLJK0SDfRYQOLJRDjQo0M_XQcrQ-pH3UdEL4WAY9o5YZhHGe13QfXfkavtIHUB8p3EisVkiBMHdHVs7Y2xpYQT33xpttFv749YQFqNW8RhQUWu6It-z84Wb_8fy_LKwFc0oqkiV4qSO-PEaTmLWv0ATpHkLMgfHAyeWe2yB33kS7hHVnovIp2jmYdYQK7ZNpEtjbpduGflQtxz2ayLQ0uv_EyLBCYOqYn73JRzuKw0efmp0z4INwCUN9cqs-JlJX_KxLobtyCpfAtGnrtYQAg1t2ilsqlhW_4R-14mBDSjFtn1OS4ZdiE93uaC-QIpY-0UjZWJfdHONG7uigDN1p3xicA_1u61sG2HR3NszP9YQHuC8MSOYhAVJXd455FLWltuQptImfgPvTvNo-EY0dcmCOIf5VL6JiGkMo8aEArBrp3LA-vpXIqsjgVxzl2h755YQKnh9c8Q1gy7NRlSm9zemKZAS6uNI5qOFBF3tjRQHyyxGdU14tGDBvyUE0oXFBBwh0VRadeAabvnEOjzZXQY3QdYQM9uPJiYuYfIyIBWaOKypkFQ02Kv2KWnMI18SDk_M_eUpalDlgVfbo41sstQ3iZTyuUcKkH0i6JDYHi0QRJ5s4ZYQOTl7jSEv8LumrjKAR9bZd-3PgdpC6swjNc1QZgfW_eVZk8mN60qJqX_VMPd9jjG_-jhvBUtd51dpL-VN1vkuhBYQPyVofbXHOO8Mf5pNPq2wI8j8UlP1wH2_0rwoQuOy0FcJ-LeQsmn7gKDzCQWSGcLh1zNF5Mc_EQzl019aEUALg5YQP8-YIxg0cnDvBLmKbSWyqIwIeSml_CBKNcZNor2SwsSX5UWdj7SPsUHWpGZbH_O3IFp3UrE_I8V0-816SKVUWNYQOwLfLRmFi3d9bxWhlU9PIW_QYNy9DLlAGE7i9I_ki8Lau9oFTepLIfnRs9ZDCUfijnMnSD_phRuXn93VLHeHvdYQHxbjT52bueU8hayT9MwQrTLBeXelCuS0dhbKZZMz0J79veHAH4Fx1vWvuKfEfgJLnSFPkHCVwZ7w47-cZow2p5YQOGRU-msKp2uFhtNm_lEN9-04ryB0dR1AjmjJmh0fOzAFyZgMrlb8mFmHQGMg56P2vqomGMVn1QCwjWiA-Q-BTRYQAC9JwlLEZJPuxTrcFV2jAVEnTjdjL96hXnIl2b_lWJTkMG_P_gz5A9EcItmYM7NwxnVcRGFPMPV524sGpRnr4FYQDcYis4oXbdo7MLkMV3X_HKF76LHgJxo1V02lWbtrCyWJrADxCJa1ohz2OJeEaXORL6aJy4311reooIOZMGDeaZYQD3hFEl00gzXnVnCj6U0NSFjbz80ndeLIZCLAhM9ykog9RUH5oaXkjl2Vh7BMsdloPBFklEAGlWvo0GbJGFPzABYQBQjvl50QrfaA4Txv76kffiJ18pz2q5KYoThvpVeSopTXaEqE5-LpozkGmgha7K4j8xxr8l_odiz0CDMJMnQa-dYQCbEOGviVWf70vu1C14CImMla6XP5qJAedfseMQCtMXkX5L9wqbwHI_BZ4mxu7JbRISA87FcYeyqO8aEHz7khttYQEWBqCb3ySrftdUS6oigQ1g4jFX8OjpfAENP9cc_g-jEZTnurfNN-4DgTpMvIysdUy-n_lhHnnmovq91fluyW7xYQLQpzpu8dd_3OZLZcTdTQHXHtWszeC2JJ7cvMoQe_LywmsOiiEaWeOvLOsDcb1d51QYcjXWGHTNOeCh-YFajOjZYQOtLWphSGCGaaCp5mG92bKAOnCFj0Q647qlRJUXGHw09uV6Lm7EPqW-OInQ-CMXOgnfmn-EJao-a12jShlhpsNBYQDukg_Hys2zxWBoXa0YRdrPSiVbCd_nVek_et4IPuAIOhWjjGt4Hu5DrJpKibfelHaC0mqkxntO5vAQKmbFGNYVYQBpg62GvTerNGq0S5WQeOXGVgSp64blKRCDWa4dIpfcAXy7V-yMBfWkcy8JB6ddRTEny-LzH4zgZqvGhFtaY5MFYQJNAXe7Pi_OYSCu77OkmP-8ujXzeEsdbiLvOcDU7fKQ644FKigLyqI3INFmBOk9NtbPZW5Gwq4H5VnmSEnsv3k9YQNAdjuPD8-WfKIl8EMOXR8nw0t5JpsnoDlodZwVvrWVM6bwsXEh8qiUcSR6CHHp-Wozj1Sg0j6hF2JXHySwIoExYQH4XjTTtAp_s91gRFM8BW6XSWEB4tJwsPF0arEqBLfWgQ8DonnbT73SwQMiGT6VP6IEbF19wM2865FLgj-yzWu9YQCf2KKbHFNm0y_fIsQFONiScAxcup_iwbe_THoQAU9nqeA4vq0xHzi2SRv3MJUfQ-S5UTeoEwYpxZf2xkU6VAJBYQDEsSEKi3sZLh3xU09LGBcUh0Urp2mZSSBgUpF7LwLsJZklRgLOT8L9IruFALJ6m09_MUuZaIlSmJbz6CP8rLPRYQOyoc60TlDdTmSJw3ZjR8zLR-oeMddxmIMboYh9HSsRLgKFwT7sJA_4jR0qk6suHQgF4-nDdIbUtO8681aYSr3NYQPazOLoFKP2AOZ5VN6vQSGD2qHbIH8f6VKmxAA-Wmt77yK5vxfUsY7V4GGLN0dARUfP3qEAHXHxgqlYvOq3EYXhYQE33r8NVO_TiN_K2SifZbBG0A-mNNov9xuIs9DCxVf3veSAcoUlLKmYzU-yOObe2R6kUZtokbUw4CnR1M1oD0NlYQIUobxOCIlzr3ky8AVYEhZz_2j3pyNOWLkEJoWLVaVM2iXK19xXkctVsATPXi5ymsC_EBo6Q3gp_KIGwdRJ8_KlYQL9B6SfhFIiLepCqmHpf5pirDv0qUHpazwnYT3gAdYodutV7oVYC2ahWnZnqZF5ynsyWjg2lLpuzcjExDL5pMnJYQGZWZOEqMAziKqz5VdxZfMRL5PCxEq1JCmxJFDYjylMtBYHgRBLuGLJS_2ile3Xalh48HDO2ePyU_yCRanupghlYQB7syuEpy6_Gn6JAz8Ci7EPOPgybHdS8UzxbFNq-4biQ1cWSvZoUd74pbrVoZRos5F4sEVZc_KNRWhxEpyWxXHFYQPXSD4c99-V-E1RKx0phmiJTiIIj9l8OVhyIP70niA_yPLL118qju6gZh320OJlXWbLpJ1R5ZpD7fzgkEj5TZ95YQA5i_Ve5MrMuvjIMPyyzntzVcQ0qDpTpScg3b94lCR2PIKCFmQP-azvHETkDarksXQZwq4L4S7J5FiKvogMrqyNYQLUoZL3YRnN9Vn4V0yUdSverCWXB--AdsgvqN3CN3ZugkRiTqgp6pw7aouqy34DFwg9f3-pvbJvbetv3ib3H7hdYQNDieOe3tZadEDwwKQMJrMWwnq0BI4HiklzA_wlEUNwoZXEXnkZcMIXSbmEnR-C0bpZixjHQaWw2r9bxVmyWaKpYQNR52UHir8ixhJ9n8A9pIeAA59nZtMTbyCoSPU0obv9qlLm8sGi7IvDZfC_rvB5wPoWiID4Kh9rH0XyTmq1WmSJYQMmWWSf58W3vYoFyUW7fXGxujtyvFQTICQrB3Mc9w5At-_1Ot5CHEGbsoulRqYev-23SwIXkGkokoh8QX1Mh6aVYQF4x91is5FBOVJaoHJ5uIzcmd5hzeTYL4SMUvBIJpG3-atE8snX_P5DFdOzdESk3odVvX_I9j5CbCMbDBrYZuqVYQEOO_3q6OXHM1Qjhs89QOK_7RnXGASW3l2lXJx1HG9Abv-MpxAsYgj7k2PYGN804L8nUPmcfWp2PHdPRFFeTBqVYQG6WG8YITRBLTSokbD7h6ciENeP6EyfbSCe6gQB0RGSrkK9kPPg9BU5G-zR4cwjurNABk0dUuvs6gtbUHf6-4wxYQPQ6deFibOMT_NFsG-VGEE1cJ0O74dHznM3u-WiSXQejWHtfb37TGp4MTsRr_EjkjT5Nn0atwfdSCNW_fNfPCSpYQEMswxlIjDkU1B6JrNfu9perUhry-VSxsQSZA4v0gPN5WKunl0kxKtpscEA8VwV0WOG3ibSZVw8eARTt2g22kiRYQG19KMf1dZ6-BzgwieVUG2zqKMX9We8z2HJcFk_eY1fRlccvmluphT5PAurUqGVWMSGGwBXWyeDQ2w0c9X-GOWlYQB2DUDPCQIiYEOAwKoL6qIPSwgqp3ftm1_wXW0Gos1zffIcBol7YMRIdnkgWCB0vI4j8KIQ3M8kJRisMEbbyRPJYQIrkUlhh5YCOGDyc3-nOuecOGvZfFA_WBKDZKVwupxwAy2NE3UkmP7ENktyAQGpIPAmokD0xa2W2rZ8SuuCy8x1YQMD9j7UjmVkddvQBwljmiQXLYzAhPPye8yAqPsxzQpBpSVRUeMdpBwPxJaCUArgQMiyELuSTw2FZFaMwgh9KMURYQMWxeSVV68zgOvq98_VQHAq2WKX83VbuhPNfuSnkPSfWWy-n5w7VcW9OTqvjSo1DFS81IP_wiGIdk1GtGEVvYDVYQF11D7_sRcmtKBNEcgzx4MOtG7NQeUjpYqPGTFXUVwUBGif7TAbcfIXRT4tuYqUIwpE5SJkq1DFvssc08NHNSitYQEr4bovWIa9BItOjvK1b6kFOyHq6O_u_5WSa0PCcZf_Yf1fETp4r-mQX1Bp8TGZ0pSOeRCLujmRiDS9dcI1YmLxYQDP0aHL-fc-j-e_MmK19t2EXkyyPE4hgQSU8tVE51dNAKhzVsYuPgyeqh2m2bTYAh2Q9j3GEg7wRuS32Scmh9QpYQDvHdRgH4KCPGznBkGQqKI8Lp0uv7ZMOp-XGG0k8U6-InGrX-zwNiuMy51aw1N6_CiIJDXzODTwN5KCXADj-jZNYQL1Fgc1UEowY6A6Lg0DEJNz41SLQLYjf7rc-m9IaZ21LqkcgCY34t3xDYdw2e4EDD6viVdHg1pZFdQyjI05BQ6BYQMX7eAKQA7SUDc8T8yQwGUIRwhpjORdCOnvB-12VD98bH7OX5nK85S3HmGkIqGxHxaxSpPnC5J-kDQ9krVhSh-JYQO827_Ys3uvsu3KQM2rBg_JDvn79vdlb4e5iP8p7tFYzxct8rTpxiBj27ag8-E1Rcu8IfN19597g6CSTOS3_lcNYQPwzaXJDebCYCvasdx4e0H680l-oxWUoHG7rcubW55sL7klU-KxF8swNqh1YE-oUlDSfgOMyrl-gKbtJk3rG0TVYQJOZ3Mq3VpU8eZ9CHx38kgClsEUfMlRDnqWMXqN7Xtez6SlBaaL1tWTv337Gg-ZSCDjBTVwwljn8dmZSP0zt66pYQJBjo0sGU1mg_3LX7Dob-TJuvztxdVbK-fCbIFAbCe5kNKRMSXPJyFYnlN3xtob2oX1WJoiupXjhJfFQj_yf97xYQFp_33BdPr3IQEVQj2Kcg9ifXEHnbvjl-1iTjWT_mTuUjDjPsN-ocGpFoLtpFF89_yNIV92NTECYcnR943a9OTNYQK55lMYzdbBI9uwhU6b7RMU-rM05G2mm_bI1PO_ZG6pPrWBRuVk-nec-6Hfeaz0I5G6z-g7Y-LgXsIiRHAVsKnZYQDKeVxZ6p-rvcqqY3BtNvRz9V1CZAv9S1Dmc2BzVGB5JsyojD2hIewns_yQxBBmgQEDRfXl4970wtQdLUYbgUXxYQJir7u9-v_iPsdwkrO4sV5hjoK2Z6ehJmFlJyzvlQv9DEVyxTTiCyvq8RC9IFerq33xN3AQdTp_5tsUXhSe_BhJYQBvA-rUkCLkVrxd2sYTsAQ-mZnvKaqTgWXPAcuSZZgga2DPNrs4D4zAEBBYuAJnyJs4uklE-NVqh1NAnaFNsKgBYQOEJl0Z9Spm8TmQ8O8K-54YVnVF-_M63SpTqWjaV6IK334SXPmXpL7hxExWGI2kwG4biwaB3N_eegbTIKtC6gqhYQPrPF_9O5Up2yFCNP3l7YNwBR1T_m9ZpqdHUiDDVO31tIqlaDmIqNCl5mphe9_51fDsq6GXooj9vxlqUS4Uad29YQG-nk59ijwAPBLoYJ2_0_fj2IR7NaOXjcNysIi5TF0_-IQ8cu8ZgeFde7K-ekC6COU4c32_D-V4xijml7FIQhbJYQGhpt8ayeyYgVwVy6QoKxM1DhlPxx3KDYIpl6is76cY8NXPam0G0PsZf1a9i5AG4f1QiYhgs4UA7HxMeRny8svhYQOuHhSiwd9_NQ6VCdiU9iEIa3P0V8vibXKPWvqnKdBdXacl26YbUgPoKjaUyVYqjgn_dA98jgdZt-Y2ZN2l36uNYQLHr11bmDu9xcIO25bhbUebOpAwpx0hvjtdkOHnTyVF3zJeZD7c9VTiiNYBKn-UPYGWZIVTbkg6a_nDhPEegPGZYQHPVEfv0dbUUnSdmw8hY9YSNTc-Xy7JGp8P-fcz-F27rN5N9uq_K5O2ThZQYb25AHCz_x7rU9gux1j1sDuAFk8lYQDAaKy79-bIGiMFVsttP--lRoGnYvlsN5qJFef9NEcxLK8jWPJwq77OhiXwNzCUJV1Ib5473zt8YxCjX7sYhc6lYQBv1r_02neypUBGLHgHyrCS4HWCvki4rqfFVWdi8dlIF7xvG9mOB9sMU6FzDxJC0jZqy8Ye7UBiuIqCXovedAJZYQFB7FxnMwYExTa60W8kUNm3FAzArrB6gCAcN7f6ZXtd4zqavC8qDuEQ05erZEzMOOnmGm0GY8TxI4wpy7Unc17RYQPZELNzP2G0Qr4j5B8hxOrCvNr2KC2OQt7csjv0ZwPGjlV0HBpA29b50mBDSayCpz9g3gHQfLC2snT6u_-22JNZYQMlEZ1aR0tzTBb3f6KujCTyjXype-E0fEonixaDrpLeogKiThyiAHjQ3NVmrmi3qkZPSOHlwiUcaQt0SieGNRENYQOvcaO-oWGGwwKLJ4MCc5zQ3pL15DEeAgtn8VsgGaoYM1I233Wi-x7f2D1O3cUsoWyxEwFgolhZl3n4QTsOjxKlYQAEdpGFOW9lTsRbhpzJRSrh-wEYCKz6MZsDznfJcO4UmN5Dayu9bI0Dnf8Ujet_ql8rKwpb2ursZ5uYFkbwtK4dYQCbwUiJuEi2srXdQvee7y5w_TeOgDSS6vZPXFSBvDu7Ik5PH2pN_2V__Nn1l7dSSkaQ58W20Phv91yoWdnU6i2BYQKVJDmWdElBpAyf4Hq_ZhqYRMczr8_WMfRpnBJPNHzy-gOZLXu26FhS7V_CqnPFnuJJALsiGKf3cu_rXoZoT_kZYQCdXwVjr25MqNpF5vvADChvMn72Tbo2lsNuyDsP3K6asxEPHkNWlIoQcgNzziSvdiCqdqiiKxGR7yZgQqYYNMtdYQGgqvE2Iq4bB3j_klYwKUGcXv8FvR2JfC7RZNMGuExp4qbgP5-JCQEO1dMXoxdCJytwt4BOzMjOK2MSYMqwEYjNYQKvU1YUKgSttau-yGTWLEvBvjcdtcUCM4Jx0m4DvymqX91ovr0v7vXR4quNFeL3LzI7P7EQgx3vfng4iPm1p0oZYQBgpX50VRgB0WDaX9CygSncScG27qIeiXx6DjtbsiqCRYRaIAz_5hzFQObIq9oE1XKr1xQndzasQ7tSsx1tsVHhYQOJgpp3PKZh7r-VViZUplmVuNhwm7colYfZxSkyl7yieN7Z6Um8lq87gaYOK8xxGv3GzY1_nT-fANrGt6I0ltJVYQCWY_BP6VSSm2-fa3sISGyovEjJwLPaL2yEvsNtn1uTlvjDWPWa-EVNPLPuvGmkUj0mSt0jtyj_Qesr9WTbPvEeCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};