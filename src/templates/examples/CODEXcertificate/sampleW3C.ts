import { CODEXCertificateW3C } from "./types";

export const CODEXCertificateSampleW3C: CODEXCertificateW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/codex.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "CODEX",
    documentId: "CDX-ID-JP-2026-0518",
    shipmentId: "SHP-ID-JP-778899",
    approvalNumber: "EST-ID-1122",
    permitNumber: "HC-ID-2026-9005",
    issueDate: "2026-05-18",
    actualDepartureDate: "2026-05-19",
    permitExpiryDate: "2026-11-18",
    consignee: {
      name: "Tokyo Fine Seafoods Co., Ltd.",
      addressLine: "5-2-1 Tsukiji, Chuo-ku",
      city: "Tokyo",
      country: "Japan",
      email: "import@tokyoseafoods.co.jp"
    },
    consignorName: "PT Bali Ocean Fishery",
    manufacturer: {
      name: "PT Bali Ocean Fishery Processing Plant",
      addressLine: "Pelabuhan Benoa, Jl. Raya Pelabuhan",
      city: "Denpasar",
      country: "Indonesia",
      email: "qa@balioceanfishery.id"
    },
    permitIssuer: {
      name: "Fish Quarantine and Inspection Agency (BKIPM)",
      addressLine: "Ngurah Rai Airport Complex",
      city: "Denpasar",
      country: "Indonesia",
      email: "bkipm.denpasar@kkp.go.id"
    },
    destinationCountry: "Japan",
    originalLoadingLocation: "Benoa Port, Bali, Indonesia",
    originCountry: "Indonesia",
    arrivalLocation: "Port of Yokohama, Japan",
    regionOfOrigin: "Bali",
    baseportUnloadingLocation: "Yokohama Terminal",
    placeOfIssue: "Denpasar, Indonesia",
    transitLocation: "None",
    grossWeight: 2500,
    grossWeightUnit: "KGM",
    netWeight: 2300,
    netWeightUnit: "KGM",
    transportTemperature: -18,
    transportTemperatureUnit: "CEL",
    quantity: 2300,
    goods: [
      {
        description: "Frozen Yellowfin Tuna Loins (Export Grade A)",
        numberOfPackages: 100,
        typeOfPackaging: "Insulated Master Cartons",
        shippingMarks: "TFS-YOK-001 TO 100",
        productIdentifier: "SKU-YFT-L-01",
        hsCode: "030487",
        nameOfAnimalOrPlant: "Thunnus albacares",
        specimenDescription: "Frozen at sea, processed and vacuum packed."
      }
    ],
    conveyanceReferenceNumber: "VOY-883N",
    modeOfTransport: "10",
    transportMeansIdentifier: "IMO 9876543 (PACIFIC REEFER V.2)",
    vehicleRegistrationNumber: "DK 1234 XY",
    transportEquipmentIdentifier: "RFCU1122334",
    sealIdentifier: "ID-BKIPM-556677"
  },
  validUntil: "2026-08-18T06:22:05.080Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "CODEX"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#34",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 34,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-18T06:22:05.831Z",
  id: "urn:uuid:019e39bf-b609-7334-a719-798111418361",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-18T06:22:05Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAZYDKhnTN-jwnEJUHJLGEYdfzcXRACv5cHJUqknxJSa-fSgsOqPm5-gUAMaOju3hMZNSle_PR6My0oSKuXlzBslgjgCQD-zY7l1lZuJ5Wsf9F4cgovbbY0DwiSIa6Gb5U5acYuSFYIM8_caNlT04co5-DwqKy_hE5JsHNuHIzBNc9OZRWdbw7mENYQFoOd1swo_KkV0EM0StYsX38OJm-WafQ3lfT20PBfDF_nSZpSgKYw8p4knSPWfqs0GyQjAoJ98mJ7cVn9KdpkHdYQPCe34zWc4lYftlylKIYqkzKa5ZIBtDCvqgzrxqshFZ4yoH6TfvRjMb9Ml7naH9SfFUqEyZvZ0MX8jqycsfvqkBYQPqz6GKwtyChAsHpcdZPE5buNFxTcGYrWagCZK0h7W6JVw4d7XJL41oQE3kpZib5mYXMAy3t2OBGkFW49mlLn79YQM8p09hxaFkb3FEPoGLV2OSMPov-QtXQ3Tx_DAMVsrdm9JmTD08eBuscbDObVK-XUhXWz9YK1_OXp3kA7VfK5q9YQL3ComUJFgYQetSoLgLaTeNiigGE8k3fHJtizma7g9Die9MX5ic_-0cOakZthefc1FS1U08tzCHCCdge0XRxRaNYQA2Qzw3zGdtkoFIEwGWEAk0X4WSr4gnjJzConWeKBubSKguRs-XX9ad4TszcccRfjCdm9BzsFz-UgKnw3_37pVRYQCwngje5fgRzTLLHWJQ0rpps2RCmmhrsqWN6_J0L-43dnMixJka9lOzQOsiZh4sduRGFs_Kd_-z3IMY0m-Pm1KtYQFm2GFJWy1ClgKvB4Pzolzck9Y_gDMDePjqEA_YzKMWHCM3otaWjTiFTcZ_qGGYFgFb4HY9vyUKXG_0EmYjKoFNYQE0oZ9ByPzfUvywhrJF7dXjV9PR-e0fVUOQ0vFlPxm37fp9rZoYFXOjQrwd079b2GF2r2WwPIdlV1rz9SRkhiplYQHFZ0m-EYZrRBp_hMwLLx_vnQIubLesEoGRDW10d1SUmVdgmlQu5oNDWAiRKZ0JoK6Oad00XUR8B6AsHWMA7poNYQCPDFiOx3D9SXhGlrQRNi_RQRah5PRFbV2EjoILE6j5rW4oonpfTKqejrADJrysPjddQf4tVhy_GVQHQFeZSVMVYQIZe-bqs-sXCR_AXgeMPVTbme40IZkJGokeYUuKBqrZ1uCn969CLf7VV6ObRN3jrrQPHqMNxNy0e1qUzl_gPeitYQIFiJmIt3d5i9seOmp6TVi5QrtB_VUXQxjCCBrzlWBgCBbjPhVk81ELx7vOz0gzqYDuV4GeShG5H54-_BWvxF4BYQAZRxu4UxaOvfEVRjxftpLIIvfY_URdHyLn2PgEhS1q9W_ITqEHhJQI_hXu0gIv8aYo8s2Wy7VMFUmGO7e9ixWlYQOd4JHUbvbGxjrjbpM7UHpc03WZKmGyJXPF8d4xyycui2-JU9OFeEkItLCZ5MDGAVSZXWZRhNHjSqhNUcs3FURdYQObT843adDJXEpZUtv1CnalTB5NEM5FFOafTePQLdoDSZfTZWPVQUnZiASAf5a0REeXM7BUZ6U9OdZVSYGxBDCFYQMA84o3-zQZvUj2KC4bod0QrUqQFxSMhH05Y7h0BhhR0T_wq-I_1Nn73f5-SBxDHl8Zeiqa75MZ8fxiH2kTvx0JYQHbrZionVE2jD9DvFVUtJcrP0vZnVWih--jxbqLtna4PlBVBuj0zfmFT5Xon0crC2IeuzCBLsfpWLggTVPOT2QtYQKexiR9quD1VH8uqhgRFc0387r_tjvyEjUxbHqJaf1E1LPAnM0cI9fD6Z2wdt_uadfFAWXWRoY60uszBkkHApstYQCV-34Uhs86Lsi3VRjTAvcJHrzu-zI3R4-GjNtB4jJhpIRIsIcCWjfP5BuI6Te1Oevhny8anOw6qrGvYeHf9Y9tYQKkajlNmmqR9kMHY305AUGEsaPDrijW6PSDoxxzax8U7IxxxtO7DbEb2T48rY9tC0TANPjZ5p-CIeeC5Jf6eJ9BYQOpLTxgU6T4DtPrwZLbwjONq60H2s-T2AsbcpWNl1rn79TbScii-cS-x8Un6U0MU62l7cWiaWAozVeWPU8iNUHNYQK47NbRtl0XmOTCHCKEjm6komoMoDbbyhqk197ulnY4Ctp3u5mw8w3afTdoN2JuGR1XU-swDZqYeQLrhxrNqKVlYQKyrtNbZOimc1VAgZCAp8wHqZy4Cej-7eYJqU96bjtHRT54a_zuVRKLX9bSkohCEiUPK2vhUhZYDGV9ZXruYPNdYQFYg--j9-EC8tGSg2vdfaEaqEQi-lDTCIvhjKgH0qCcy-GQNN08jG9xr3GnUVVMv7tz3uUXS4pX2JQguO5ewAaJYQCSpBeerY7VCSFZMOxa_4wmAKsijw93C1-V2klkoxRr5yre15txzR2t_HBDVPi03QbETPySq-yoa58apYaY-bfBYQInPVU2NtqvsI-_Xg_Ic7vKt6yJsk85ilQrqSVoBl6I3ELgvIvbFnsFfkTBoVKcCbyMu8ZvbLPcJvGW4sslbdSxYQK2uWRrTdkpa-QGIHpuSeXsYnswSaXU-JYc_xkvODlUaHN8JAQe5kF_UaGuOF1OJ0p6aJrxCnh-0fyvHEZO2eylYQDXc7Cj92hjOkr4j8-K_ql5COwjN28LzZCWYEknll9nUXtV_b3N9-Jro4nTzyhDUnrevULZZE_L12jOtEHeKqmNYQL97N0QeMRCBZ-RFUeyIdYBUkTb_OdbdNXsoKkm6hyaL7gaQbGWw18cgO8ODrAf9SgvusYfiNK5mpisE9GFeRnhYQLUHVh3T6CbHP-b3AFH47fH7LnxnDAGLw7yRAJQgN22BL8Xc2Y6szxHR_VV1yi-dpaBIv8qxCs93k0yExxeEGUZYQIssueZj8APHpgnr0OM99M9vShkhkpRb_eUn7P0OocbRtWXImv22Xn5ABNlLxAVu9vFs5Ka64G4s9dV8owoN-ixYQGQRjkonZ6O0ziN556AiJOZzuLmdqcb2JKbAfu7mWs_vp5rrLyXMtGPxijGCLAaDSaGkAfh2Tq8KtMn4qM3NC6NYQG44h5lnLM9Q79F5qcb8LD383fB8P9A0PzMKf5YJGL8_mZCD9f02v6nb7yR4mHB0J9DYLgu9-9G3npYI42-IP4RYQK6YGhaEk891HZsmb_upzgC1t8G05jn3uqLkt0IarXZMW-7in78-eFagVIU6NYFnxhkN3IA2pWU2CjcDVkziAztYQDEAV2EtkdPpD38ET8KfN_4dgy7gvSCbnMAS-3mQh8B7hU-mxnYgD3-LCXweedW_xBdy0IkUhgW6b2mCw_WuhuBYQGdGlJxel9lh7AU5dJjRuSRjX3oLDL21krGg3YFr6HJ5Npo2iG6S9YhOezPDTRQvxUct955AmU_SiABycI4SXSVYQKP8cWpiBtNHKcKXDeKVGqxfa2WAGOHnsgsTvSQ88eABCfMF6ks9huY_64kGfm6v7AYynmkRDdfFpQUCV5uZuBZYQP_hsV38N7V16zZn-dUfSOZ5H0uf4nK0mzOW091s8Q4puLWxRqkGy79MaukpyVtCTNpWcY58txeQM3CgGqO3E85YQHun-3gVfNa-CGPOmGetPfpNkekkhRfJByfhHkIGbZY7u3mv5tHd43BF7kmt4IXTU9ZFbs1m5cafULA0SERCw4dYQDks-Kh-rTHGE7SJaqM13niTAjnicpxfpllSdjk4_YDVQlweKNZu3kV497ooqfp8RQiVjq7vvTrjPkICzsXcLBZYQE0f22OAWxsUWWHjKwvjKIULh8jlZIu014Pd1iXfCiOTfV0k3wq3cnhvKzT68Ixl2tEyuhRHyNbBMsLCAkzl2VtYQGliHo9kmBhT1uV5R3EwE9T4mKZ0zASmyfm4UHS8wUdpaZljeZ1zFJI0biP2L534V0c0gvDBij-WOB3-4td3LcNYQKGkWd_3sxMctqpUM81jIVH3gzHsbCfjoXepVEEXY7zifX5F1YtwFw5HpJOoTMwpiKCobrK6EdsWt5nSsliXjNtYQKsAKMK6Ptx2nzjlfDIdh_Djzw1WTeq8x3tq3dqdtGuOSb_ThconjCOCh0FXRhfHPIcBMq8nAJq9A60fcP6UTPlYQINGNpvF5PzQ-w4TiG3ogoZkOx1EldExrTqLmNtg6P6n_A-Fw6RG-Wq8t7q7imj-QuqofIlKZDaX28GBVX3roi1YQCdIqnJV41N392cQ42Mz_-xj6cbDaU2M5OeXCOw-tUXVG39Qda29oEzat53OhH8jAU1ED7jT-LYXFpjOU1_XUV9YQNXRjGengnUSonuTRdCUOWoFNWtEPx6gv4wa4kqr8eUWBguK3K4Y-t7h-6iY7RiDsg9ZvtarVkFvmADyirLMw81YQHZ2LIKC3E0CeBlR3_EYZGrAn0V1Hhj3QEf0KnCzj2pzDpOfoMRMWQmsl4-niS-AfAbYLBmQg6l8E3ymXs1_vJ9YQHC0gWhQT1N6DAAIhmruAOVjygs56qdTPw26DfbXme4k6I8R3gYr2R6H8S-ccjfkNdRSvmFVEfYw7zsAF2drcYBYQLomvBpPZ2I0EqdF7rCBtJ6fXBsx8aKGON-Stu_dy2a5LGfkJPrqq61uWI7k4TDZYb1q0pxbRhlOEWDMjcFSyhpYQODh7Q6ZnRaumfHpWegpQ67YDRB2Iw0K2KTGkmkgBkUCvSMh-WGU1yw5Vhu4aBYB83lnYFfmKexshIA545mLiUZYQBEtJ0oQ0I_ruuAjxXCOsCZpv8lG6nbc6IQcRTDKTxVJSwEb-weXL1RwoBECB0aHhtbLzO-K2knpDefNL6yD82lYQMgk5JrHyuh5QtnF1MvIX3wmAXOllsensjZqwgSKvmv-rS5VX9kvTzQDMsY_DbsbpUx9NMLTlOqFa_Q02B3bwiFYQObjoDH0-wYqy9DKt7NtQoVA93lS3Q3AlEvpDECuwhxLcmgOlKiZibdXpAy_jgpIZQ8KEwrgtUX7CNtbuCveiopYQMHkMgSum-9o2Vt-PQKzuUaMazqLG0GIKN-B7bw8ySgJSL_WwkOSRVHmBvk3y5MI8CCSFWRruh08GY-ta7_pVs5YQHcyt6EKsknldRhexz0ktKdPoqEXm706RdIrfOF8QE_vxpyGx_91_0KIHb3zHKma-qk7KTn2WjNMqYwKC9NrniVYQBeAyym3OXKaARSLIYf56o9nyWdD-pI2bzX_DZFAQTWBa_rV7zij5G2rrbjOCH4DWs2boafSUSgOhE7ORxJmKK1YQJ-XpRVWVRiU9l7fCknMioZjxeDZQIMWbJcXCi8nq4p1gCH39Suzpyry8OIEjpv5qCv8nncZdzWjv_1qGPw46MpYQNbp1bQNZl83eA2jqzlxbZqwJw-W6q-w7inOX9guxzoNXNBPGbQG8UdqlTJkOvZy-fxgWa8fm0kJUvEDvFOzdtRYQM_ZTi6wIK-eSyBiH6TYCdLyuaPXf7k6fVvLYlJBgI8k6X3vLFay4V_HE35rwXJE0KspXMYZpl-wx67e1PlkeI9YQCXoF2QxdlAYSSRbvQQgAb0Qjq-3W7N46ldaB-zHH9hVaeAYl3nrwaHf6l9zI9h8wyOWfpbWmcSp0u5xOqrxGV1YQIK5Y60lOJa319ckD0wyqGVmsltVmURvjvChJ1bL4RD_tLLVtSxJcXiYBjm0obo_X_vJyKnqdj8BAQ4CwubhldZYQOJ3dFGMAZp6rPq7PZ5Xbd-s57jfrGX1byY6r8BNTJgv8DPpI4GfAp7woy4kAeZ48aoY3QFYgoJw91SOA9JY3NpYQMezUlSonvTogoyL1eE11n-lrhqEN4-AOt4CBV282Of-T4MkNhgvEgH9wOWsBMzHj43tgCbRCayLAv-ztNSHLNBYQGN9jJg-imVMQ1EIZZL2HJIQGXPY-yar8An89mvE00IWH6YBXhgbEpB-yBX1TQqFRmm3uqPe5sebQYKmPvEHU0FYQGS9maZU0zhgun_sNiuOoLlkAxECCXRnLkjnZvN-PcJT7VEyAzyRmMHdz00Pzsov-Dvfa4gmjsuZTm9sRp1iAiSCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};