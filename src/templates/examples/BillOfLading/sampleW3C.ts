import { BillOfLadingW3C } from "./types";

/**
 * Sample Bill of Lading Document based on your actual VC structure
 */
export const BillOfLadingSampleW3C: BillOfLadingW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/bol-context.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  "type": [
    "VerifiableCredential"
  ],
  "credentialSubject": {
    "bolId": "BOL-1766908615",
    "documentIdentifier": "423",
    "bookingReference": "this is chaindox booking reference",
    "houseWaybillId": "1",
    "transportContractNumber": "887",
    "contractNumber": "089443665213",
    "freightForwarderReference": "Gita Pradnya",
    "issueDate": "2025-12-27T16:00:00.000Z",
    "loadingDate": "2025-12-29T16:00:00.000Z",
    "estimatedDeparture": "2025-12-30T16:00:00.000Z",
    "actualDepartureDate": "2025-12-29T16:00:00.000Z",
    "estimatedArrival": "2026-01-05T16:00:00.000Z",
    "actualArrivalDate": "2026-01-05T16:00:00.000Z",
    "buyerName": "Donald Duck",
    "buyerAddress": "Disneyland number 12",
    "consignorName": "Ahsoka Tano",
    "consignorAddress": "courosant number 30",
    "consigneeName": "Spongebob Squarepants",
    "consigneeAddress": "Bikini Bottom, pinaple under the sea",
    "carrierName": "Kryptonite",
    "carrierLicenseNumber": "6767",
    "notifyPartyName": "Batman",
    "notifyPartyContact": "900",
    "despatchAddress": "invisigal",
    "despatchCountryCode": "canada",
    "deliveryAddress": "tukad badung 20",
    "deliveryCountryCode": "CN",
    "unloadingPortCode": "taiwan",
    "unloadingCountry": "taiwan",
    "exportationCountry": "philipines",
    "originCountry": "bikini bottom",
    "goodsDescription": "this is a very awsome thing to kill superman",
    "numberOfPackages": "1",
    "packagingType": "hazardous",
    "shippingMarks": "fun",
    "grossWeight": "1",
    "netWeight": "0",
    "volume": "8",
    "journeyIdentifier": "kingkong gor",
    "transportMeansId": "8",
    "vehicleRegistration": "1655",
    "containerSizeType": "69ft",
    "containerStatus": "good",
    "equipmentIdentifier": "21",
    "sealIdentifier": "21",
    "freightCharges": "100",
    "collectCharges": 90,
    "prepaidAmount": "10",
    "tradeTermsCode": "CIF",
    "tradeTermsDescription": "cool"
  },
  "validUntil": "2026-03-28T08:07:25.772Z",
  "renderMethod": [
    {
      "id": "https://decentralizedrenderer.netlify.app/",
      "type": "EMBEDDED_RENDERER",
      "templateName": "BILL_OF_LADING"
    }
  ],
  "credentialStatus": {
    "type": "TransferableRecords",
    "tokenNetwork": {
      "chain": "XDC",
      "chainId": 50
    },
    "tokenRegistry": "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    "tokenId": "66772166a93cafe5b68f0c3df7f3f5da44b6d285f5ac07baa6fcf91767f40dda"
  },
  "issuer": "did:web:chaindox.com",
  "validFrom": "2025-12-28T08:07:27.007Z",
  "id": "urn:uuid:019b63ff-7e2e-7330-9195-dfc9a3f8d4f5",
  "proof": {
    "type": "DataIntegrityProof",
    "created": "2025-12-28T08:07:27Z",
    "verificationMethod": "did:web:chaindox.com#keys-1",
    "cryptosuite": "ecdsa-sd-2023",
    "proofPurpose": "assertionMethod",
    "proofValue": "u2V0AhVhA0mt1e6riSw0xn04tcUnKQrFZ8wKHgL_MtpuoEy5LuCd7OkoajsP2zn4fbtzX18anxfqkSv3rIwBvRRrmeHxTMFgjgCQCSCKdOSDYNT3-GdhALLGFzQVXQ0dnaSss3UKHCqV4hQtYIMtlo3j3FlH7WJfPQ9GPaxsmzdWBwft0y1OTNL-0x-qimD5YQPaP-IUZRGm8Ykgt9yS2RVnY5vxqYAUwnO3yMa8cnQA04DcxUdJoykO_TfNAiJwMyJtLbv-6JtdYTY0UNKi0blhYQIFb87IT8ylhXHnG9W3Tgw2hQyK77ULWAcGLHHjUsqbrJOZOB4-pF-6KNj9tBpOhAAv9rKUQuWWur7OqBiVpq8RYQJ2FyrZ2880HH3DeUkz97r_UsQMmeShw2WJhSssD_esRmhHKoA-ctvF2b3l1PDWrRuUU-rztUDjNvtMuEOYcGI9YQDMwV47x-Z70Pg_dTNSZjwyV0s_WX2EVxlZsu2W8KA0FVUIgmM39P7tlzq70h8CsyipaRbqIpPI3uar9lJrJVuVYQA0nADMQEdh9ytFmc3tybx7k4p4h0VW1sLJLyEVzCkVADqq4crT2YQDkat5jb3JMUFB-P-aGGUeiIQgyFjsB4E5YQE2sWJTbGTCEXGFpDFmTtuHiKAwWSbnU-l6S7JP8S4labvy0QTPJco2Fqt1un5g0LmBm7fpEC51FZSr6t0Zzu7dYQFvd8M8_pCYcfOf67HG7BxSjxJvmaNxpfMTZB9_QmrBbsIk7CuETrtxZcGsfbzpRe2gKtYDf9HMi-B0Kv0kJ13FYQJ0WUGYEHfBSvR8_n-Rl8iDf371ZPH61E5cRxbYCcBFntlCoU6_nGL1-RzVLBKpqaHJciqJq5POZpI2dWAv9I01YQPmifcRQlRz5FUO485pqd3vU_xLbS9FTNcGhjU_-6EtCjlmk3gbF85weGXlcjPFoM8kA1r_gCw5dH2DsViyEKkJYQAj1RBLo6u2GqK7g9VCFlccVjG-53Nni1mZSvbsM7UUi52gNS9royjlMZY5g1UpZ7o80SHzi1aws04caBk5aN-JYQPfMROeT6-3xUiAQzkpsTuZnRaGPa5Tz2WjFFaagyef6zbdj2mCmK80gPKH01VQz_wCItcLamhbP2b_BC9TZ01RYQJ7VkvKp57Ao2yk_KpukFn_n4GKMqDuYWoj-DWw9kG4r__QA9h9oYbDqMBxlXnfZF7IDSJPLofASnf1_OWo5AgVYQGcRSshgwkT32MOHlPQydQTgl3Ru6qiAVTKbzqaV1v1eg0OcM8ZTGt6Z41eSJ3fxb5wddYsK5NK6wE_w36Tzb7pYQAu3PROvISkjD5eMJuLqPVP-EOws6LaUc6IrXjeDT9m1Ky_QCo0EWuU2yDeaxRs63P6tOaM6NSeCpu97ECnI6SZYQKZXPmuxWTMiJk2-A5k-VRTxw73vp5TH111ln7GbNvhBX9SbpcG4dRUw8SklofCxYgFm2vLAWfWHLwnQW-VPyf1YQMRBmRpL2qgmIe-S21cVo6nvMyzdDAKGlN7kv5rDzYCkcqjbMO_W44xKB3PLK3_mxVoyh6TlSp7NeVSYxLKLoY5YQLhm24HJuMuo2mFzCNM2khhmWIT4w607NPBeyxjx7kDrOHKqxQmiz9fdH8o7ltdizb6t1BF-6yOrbDQbK-WJ8XlYQGgo3qDwLCozz20icJH37uMJNfFD9H-LDFGSPvGoIPu-w4kjfEbxil9-X33D2PnmF38jl2xmePJ2MIf4YSk0tt1YQJ_iWmJVIk988MAdROLI6PzLnnUNSZ6KPtHh7qok_pmJgTig7vudqSuIVSVf_Rg45iO1LBhk0bic702N5YvwLVRYQExt7WzihnGXSilAD4wOSPxrsVub2_i9neCY_7d2MQG6fA9oxmd0pyaWLk-c3UCy2lPULkhREq6gN87-aHVH1DRYQI8Yyefo5hR5P1Je0_hBCk6uZAPPREZma1a7h_X3MJoOkgrwH2Y8uB3RJm27VGd-DKm8y0DGi5lzFBi3ziWVjFRYQF_dOdZfDbQW3LaguhoRSOx4RLllzBjrmNNUFb8m866rNc9X3hNaNXUxK1IDRGTTpTWWefdcLOcNADT430c-wndYQK4c5FZ1gSUagV3-JWc8yeXo9aEh-7dhNtjrWX5HObFYEJMXVOc-BmQfdOzNd1QaxtXYexyGryzo-2jsi5ZCnNhYQBfLvHUPnmPvpMpwqdr_w5Oa2ipfsOsXdnpb4wh8qvTJdzbeUw9YL7lLhYWB95UiBXj6gUlCbxIVcbuGJT1uj8VYQE4mT2VaIxViapWsvkcSoX2vQjc_BIJ9bvxAq-_L1YtE9D4NSZBFjsTl5r6Nr7haB2NQYC3uxhXYSGmHwxuM6h9YQMvSNgCJR1b_7gP2ge1VGTcRlBDkbIbTrXZOrTZ8aBh7ZWv8myE1uHAHBNAzKT0SgteunMXOfI7DHsTXEeNsqQ9YQPsjxCtQfgp8UH6ZT7cQABx3sOvHK3FEKUBBMLwuSJ77frG7rmqhjXlunloduTUTVfj2ltdvSLdVkH1rWn1FSaZYQOPrN-y6Z8DWEuHXQgnsSxT76UyQRwUIRpyQvUI1GxNlYYjfvo-N5wSl73av7MEzPeozE4y1FE4EONpljPiOl5NYQCkxQy_tVsPVx8VNOEdRBsndOFh3DgdwgjuLeTJDDRTOmWbXCidgYnw35gvoE8yjxjdNvd4CgYv5jfMCIUIEei5YQGDTUeXy_elU0tEPSnLd7BL6bxqfhrrhKbupgXRLyHHKKruJ8JXfdtpr-XFgus0CcznsVXBPfCuMsu13xzhyfpxYQG9Wiww7AFAuxbVD9tm3_S9wD19-YJ36UDhW8xfvdGkOHlcGKwlvuesbBVhQWuEDlgAPyCRmPEGZvxmsNPNZ9bRYQKeNOHn-KEknE3KQXdo44Vah9p9Ene4pIh22squBlWmKSHH-bLs2r6jQZvKwwtXcyOKPzHprPNEHX_5ZdnHP5j5YQMDDupa6nVAkpzPUfYurNUfUzTv6rdHUEXb7kZ-xpmU0580hvoLKT-phzaQOa3iBm4zdOBGAxQiFEc6XUvcMXwZYQLdDqCkf6hMnfw0lB2S34qL5QBGN_hyA5kGQZkkemBDrf1UIeYxFfLR-KORHn7Ov-A72ueKd-n1w_Thel6uP3qNYQMCUE9O8PekF13XnwWejeiiL1lOBfY4-Qc7JORSEMQxeCZRVK3SHXVz3zFF-9SHcUwb5H_KtSh6aLRJKZCCPMjdYQKHBZ7CYJoosKyRwZT6OLck11nnVzpOAoVFDXAVdVmV1MYwNQOo-zdz889AO8QxwxZZi0jfcNpiSElpVg26WNqxYQN1HvEffO9XDJYIdfzFDy78rbpqyKQuM702vMNutt7p7jXNITLxeBndJpyl8ElzU2e7hE2kIa9TxV1fPezBjU1NYQPfnwS5AIL9Tv1qerl6LTXJnlKWgW4bNCi9S5C7knFHZXCXxijQgym-sDfO84_QN8REJCq38SCUY-lWCkzUNzf9YQAoXT1IZeDLnXVNpFe3tkCLZwqsZuMeZeXfHsX6MD8fp_MblDnnSoS8N_rb6uBllOTgIayBAL1abfz8iS7kvXZBYQHwNxri6GhFWVXzp6ZMehAMfi0tM__pMxPmszuHCf2v0Xw4c6Gm-K5s0kI1-p7W2SrBNwMZm8khG7fMEX23M8XZYQOytuSyqpWgmTeGcIoRrXCMQn8bvaVsaWKfEgAGOGPDtE0XmVslRmqzOYJTZdTomyt2PuVr49TNdiDuMA3UOfsRYQHJ1a73kCt2EpWP2X9gUKwz4Lu7UpWj3jP7LQXW9WJbIRexp2KeQbn5LCOXASrKWvzMqLuyNZ2H8CV-r6i9sURVYQAOe3nvrIQRztkVI0ZdUTOfyRT97fKHvfyWSLmaVk4I1_BWSSs-k92k_tIBrB8D1DJW_iBP8HN-gDf31lccqCXBYQDW9_2HX7keMx4ng12rN-co1PbsD7_cl6IHjPwMZpvi3QpjoqmS4q4slb6M1BjsaPpCqKM1maOxTYmHol8N9QNZYQLT3jcVJuDxdVezD_j3iF8TZ-jtDBH9d-ehU4sZ1fMCJNDM5XywQzgTflFort-5XFtL_cmdroR4PDMq8tt4pLVRYQPHzhNw5ETO-Lgp4in0IOUQEA0QRb4J1JVpfQ_045mb9Bdlk4PUr7PwMWQFqKJnHawXdQwcUPiKK_qfex159eHJYQER8OG7382qTjHN1bh9zdBns45J97YZfpzreHdxReLtWbb1CI6iBM9d5wdBtk9yZXM5pLfrDvOp5Fe1dH0G3GNVYQANeDWSmouP8ZKopm3Q2id-lCXBnQ89oTTws7Y2qq7cQjeDgdfyEZ8v8w_lIPzxdrY4cAmF92JCGyEVEUMdXEBZYQO6QR--ZufhPW2GcpueMeCK-3s-Bgbz3Tsph05lVW4KSGSL0tInX5WzySwKd-ydAukDzY67Sf7cQlEeH1UPjTeNYQCo79WT0zLEDs2gIMZh2caZ9_GLAYtuqY0LHmdNSWHe52kUCH6Vbt8i5biH5DeEu_b5eqs5n3RqZVvtJ8XlMB9NYQI5osXdPKbLdCr0c0CufG4JWfboOT6wxzPO8Miybrw_VZqPi8-BgLJdPzqpdQsKH83vA4faZn6WwNQY4coBvqvJYQAog4vU8U-soF6ozDaZjWF4V-UjKvv7fmpE_DPensBejiJpw0vOQdng8cZlBFuUciZMc05cj8BCL_rFDV3TSVWdYQIq9sVLxhJTi-vWDQC92m6LhaQ8W4IgeRRe2swBb5iXllfd6cbEsYt2gkhFB0ZA7aFOxKSJPkme7E_twszMSuuFYQI9xW5Ej4RidDo_ODlt8kGAZNPJi6INlOTO6yfyBLIL-Z2ojuY0BYQjKRcRlA03bSomcONVJqIrb2PVrO8ragLJYQK-arYM2Kjjxt80zwC76kus8PsiMsw6L0f8EnethXdDrYRnZkrBOVwts6F48d_i1_aKgguISy6SyVgwSwm907YBYQK29Pa9EqG3raCDvVH5l_UP-MWKt2owpQ0ANYa7kP4qg2g8t0vlF-zW6k_OLUjb34MIIAJtikMugJyM_LDZaHldYQBJaDzGZB-yd7oD-U49_Ul-T8ofz9EnX5mdD_-k3jGrLQbUE7K7hzEHMJAZ6Dtx-OWjptsArfyd122alXemXdWFYQBnjjkw5XxnC8Pw2U3cTyYlntjetJ6tOYrFhVZHh2eyLuGlNU4wzsgDOA2OtSA0oW7GEVvfqwKQYW4-mQjrypCxYQOL7AEMyEbB85AuI335-V5sCidlPwIlaDjLN4sH-wkVvL_3f97L8ldCyaBYPGOHuxrPCE-nX-fevC4KGKLbfQ7VYQCANvRkcGwNGQSG1ledq9MHbD8DkkU1YPjp_lSTZC37_ezF1BKPj6i9uL-umj5ZZACa8_JvnZW4hwRmH7zSgnTxYQN5nCEFUGAw5Q5v-fUn68bXB35tI1_F7MyeOAPfJPCASDptrzFVari6MqB2cfTglwHi4wuMXnNf55-ga8I6yECdYQAkyyzcI2r-lMPzGX0DY9Cvgt1WM72y7EgfXqjlRTcuIzQZx0_UzevQDNRRUgqio7NG2IQ0gvDF9byVJOyFAXu6CZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
}