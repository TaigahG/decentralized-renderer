import { ShipperLetterOfInstructionsW3C } from "./types";

export const ShipperLetterOfInstructionsSampleW3C: ShipperLetterOfInstructionsW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/shipper-letter-of-instructions.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "ShipperLetterOfInstructions",
    shipperReferenceNumber: "SLI-2024-001",
    forwarderReferenceNumber: "FWD-REF-9988",
    dateOfInstruction: "2024-10-26",
    relatedDocumentIds: [
      {
        documentType: "Commercial Invoice",
        documentNumber: "INV-1024"
      },
      {
        documentType: "Packing List",
        documentNumber: "PL-1024"
      }
    ],
    principalShipper: {
      name: "Apex Tech Manufacturing Ltd.",
      address: "88 Ayer Rajah Crescent, #05-10 LaunchPad, Singapore 139968",
      countryCode: "SG",
      taxId: "201829910W",
      eoriNumber: "SG1234567890",
      contactPerson: {
        name: "John Doe",
        phone: "+65 6777 8888",
        email: "logistics@apextech.com.sg"
      }
    },
    consignee: {
      name: "Tech Solutions GmbH",
      address: "Industriestrasse 45, 80339 Munich, Germany",
      countryCode: "DE",
      contactPerson: {
        name: "Hans Muller",
        phone: "+49 89 1234 5678",
        email: "import@techsolutions.de"
      }
    },
    intermediateConsignee: {
      name: "Global Logistics Hub Rotterdam",
      address: "Logistiek Park 1, Rotterdam, Netherlands",
      purpose: "Transshipment"
    },
    forwardingAgent: {
      name: "FastForward Logistics",
      address: "10 Changi South St, Singapore 486000",
      contactPerson: {
        name: "Sarah Tan",
        phone: "+65 6543 2100",
        email: "docs@fastforward.com"
      }
    },
    transportInstructions: {
      modeOfTransport: "Air Freight",
      incoterms: "CIP",
      portOfExport: "Singapore Changi Airport (SIN)",
      portOfDischarge: "Munich Airport (MUC)",
      finalDestination: "Munich, Germany",
      freightPaymentTerms: "Prepaid",
      freightPaymentDetails: {
        paymentBy: "Shipper",
        thirdPartyName: "",
        thirdPartyAddress: ""
      }
    },
    goodsDetails: [
      {
        shippingMarks: "APEX-MUC-001",
        packageType: "Carton",
        packageQuantity: 20,
        goodsDescription: "High Precision Sensors",
        hsCode: "9031.80",
        countryOfOrigin: "SG",
        grossWeight: {
          value: 250.5,
          unit: "KG"
        },
        netWeight: {
          value: 230,
          unit: "KG"
        },
        volume: {
          value: 1.5,
          unit: "CBM"
        }
      },
      {
        shippingMarks: "APEX-MUC-002",
        packageType: "Box",
        packageQuantity: 5,
        goodsDescription: "Mounting Brackets",
        hsCode: "7326.90",
        countryOfOrigin: "SG",
        grossWeight: {
          value: 50,
          unit: "KG"
        },
        netWeight: {
          value: 45,
          unit: "KG"
        },
        volume: {
          value: 0.5,
          unit: "CBM"
        }
      }
    ],
    valueAndInsurance: {
      valueForCustoms: {
        currencyCode: "USD",
        amount: 50000
      },
      valueForCarriage: {
        currencyCode: "USD",
        amount: 50000
      },
      insuranceInstructions: {
        insureGoods: true,
        insuredValue: {
          currencyCode: "USD",
          amount: 55000
        },
        notes: "All Risks Coverage required"
      }
    },
    documentDistribution: {
      documentationInstructions: "Send 1 original B/L to consignee via courier.",
      billOfLadingInstructions: {
        numberOfOriginals: 3,
        sendTo: "Consignee",
        releaseType: "Express Release"
      },
      exportControl: {
        licenseRequired: false,
        licenseNumber: "",
        eccn: "EAR99",
        notes: "No License Required (NLR)"
      }
    },
    additionalInstructions: "Handle with care. Do not stack."
  },
  validUntil: "2026-04-16T15:03:10.937Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "SHIPPER_LETTER_OF_INSTRUCTIONS"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "5c1d1a6dc4b753ea133ef8d90055726cfc3e5d80afbd5e999cccc87fec7a9487"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-16T15:03:14.510Z",
  id: "urn:uuid:019bc754-fd5d-7ee6-a174-03b7bf485c09",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-16T15:03:14Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAXzk_CIeblDVdCuwihEbC49U1WULi_vxEQXV3WLU2WlGBvYxGIpzz2ZQnN0dxQbR0SBqvdDgsYrKKzTfDijpCOVgjgCQCZFkNHAOp1UrKSN9BCAa0grYVS_Iz0nYxazk4UrDG0A9YII2oj-Mz8l154AyEapKG0Kc35w-r_KqNgZuZ7LJ8guQimHdYQCJ_r7MsJV3Z_AXYIsVojqzsULhvirHzShl_2GjqytoqWP48Jic-CRTozUqXm1_EfXEkilENTTRGAiVc1yx5KiJYQGgk9hRIphKVff45adZWqr3q4-xb0zXMSFev28LzCAjlROqftnNdIFZhqfZUtIazhb4wsthFobzGF9cYfwCRYF5YQCDkrz-Mvltnwf-Zji4my2tanwASLOpaYRy_sD9pdjBHKj53wxEMAmjacIS3_D5tMwUnVC7owBVhC231lNAE4H5YQNd1mh_qiyn2Qb1M2xb00rnjse6N-wa8U9olt65wWls2yMgtcrM76fOd3HVOgF2FUE7h_bzUvVS1iRCTmTdc1JFYQCWEBuOOXTav5bYJ3DuA3w9jnOXQt3y5HGyLOF7vt9J66dNAFGiFHhFwIbp2HS2IlLzLD4ZMPO9fA7MaKDOGyX9YQGwLOu1-J3Lf99r5i4nseOOAk0Q9OqFQJV3uC1I06f-jG4e1sX8b73EBH-t1BK79V4FT7Qr17gVBnI6hdzW9rnVYQM8y2FOZ4BKsP3LRNFbC2YehZgPF0oZZ4jcNVUPZjgd6w90tvZqwSPqKjCDbxhEi35tCFH2qfldJHV1QD0xkPPVYQJx7XKMgwBZn5Mwi1VfHZmHAZJiwikq8jqu3Hf_YhsnVzuFnvDA-8wTqFQBJh315SZ5S0eAeWGagR7_PXfIbI41YQLlfALGPQkirHUJYM9VJW18RO--iwuapZXqctCdJJVBtkp70jwvFelDxfRswOpUSqilzY9WAn8PDS-BPXg52a7xYQBmZoG5tL1oDFhbVFWm8yexGKC_pA2yD0Ig0AymghFCOulo8FRC6SMDwRbd7nta9v0qy6vZbfGDGPeSIXVZgWOFYQNle38zKC2tq-OwZAfg2nDwKrEkM1MGnYBRCANWQhi5F9rHB9Q3a7NbB87-rqL-QjAIhENlNB2CFqXtbqnQmYGtYQFhuPtPtBmphXqN1flSo4iAsJVnxBK6QSuoemEayLcLXdv8Nr2rpk5n6zjWL7f4EnR--IMkN8x5Z_3HLw9Fa6spYQBY6bgH2wQQfvpXkCtShqAAnF5Ilq9qxZ89ZcJM81rARELt0iLx6QlyIpGFM5TT6qjtx9BOd6iwtjps578v5h5VYQKvwd6Cs2A9KyMFSCZ1xQjlfG69UtG98u73yVuJso4n7qUUTIFn1SeFfv8u39y4BTixvwdByYJwhHS7_yVA_MQFYQPG9hnLgRvhQUkysZfbOiJ8BX2xaZVkYnuVeDrjsZ2DwecDrnBoj7piuk9viCSHDSbZq3HY8RTna7pC0sq7VgNFYQAnJh896EGitcZKGfBNoBbTlAZ8DZUai1HvAG6Uq4Dim1y_3zvnLfUU7tEIScyb3ket5eVMMTvxq0MC9OCC4SPZYQJ_DRgXZHmE6Ext_0k1oC-TyNx8xEx1662k_XFFDTXgC5SPj5Mlonm16KmLbP0RyDD8zbKDR6wWINP885qCKFU1YQIYZroPtnOe5hyXWE47qjqQ-PR8xSvWsA3U9Ov_FmF_5saSZkPD9r4U_sbiUzCXDb6wPMGkG69ehJo0QlivNOrVYQFBNJTf2uI1XAy2CcJgVllHXwb2cU2ntCm1fWbRkA_grrg3TScAtQJWJW3MPpY3-bHXMwQ2Ip7Rya1f3OgPvFtNYQKd-smYO-TisW2N2Y1o0Lh2QtZt_LcwchgQVphCJdlEDxExhnmx0HMjRAR8OC1h1vpbOgxdPUvsxE0JpVCSZandYQD8S0y2TPp-NjN6NsFjG_QQBwKUKglrNIgXqOLJ83JkJeyyd4vAt9O6s9E8_FCB1iK_8kQpCbe-sWsbQaJXDJ5ZYQNYsR05wztF_vniQONcQhK69IZjNc4weH-AAtjDuHOcwRo65qnh8X3BHQdY7yvIeEX5qhKbzcp4KvPLK5rexEpVYQPr0XGEmkGGpH_f0yeLUlW7T2-Re7Q_eBfI3pmwKVz-ittGE2JIG30ScuzkTn6yf2bSsG-L0ExLBi3X3Q6_H1bBYQKcc-IJchlH9he05sAdDoYRPdWwAgArpLDw2JB01yqYm5p_1RUKQNrlZZhJcS4RSkEwXnvLKeuOegmzoo3J6PChYQHulRm0e8EQ8TMAjJbXaN0wX02ai_ouZblhSYA06v-XwqVonwwO5hsBjStvZU1N2T1b4st44Z3SgsIbq2fQSmTlYQLHYWUg2FFN5wPWREzQD2FDGeIjF120IlxdeD9HUN7rRK2g3bvws8Yej9dW7SOiYfwsH1fiNzqGHQ01qLvAQz4NYQGdlgMPyDU5owz6vgIb4KQDdepF7t3R3bl_F0rRjpyzlFiWxD2B6l7vIciDAQCEbq71dPct9s0fcAnmmywxmnP1YQHa-4gse8I9_gjaRIIFpDKm8KDu57IZpPi_35ZE-eGFXl84WUnM-7u0-jOLOpgn3VBirdAgvA_8P3Z9q_2EiQppYQE4vDhZGGa7d9VSYhmuM_qoP31S_iwNXpyvqxoPCnDftSAH_r7A5opSVGi49nc6LOyppCCzsL4wLVqxgnFFmH-RYQLOCpS4atwc8K5PP94AEu2yBH-ZHTOpnMHPiG7T59qhLI1Jm8hJA4PXCwAJ_IYAlMyUhsAVCfKLZRuD7tKTiOAtYQCoKlGLNGgE_FqJSiMNyFwrRXwpGhgkmMzBFNvaHejJkgkfAg0TJZyr-b6IsXqr_9SD6S3zR88tKdMb2_Xv4Py1YQPHR2ReQVGBeiYgL4ux4U5Ndkkzldqk99dclIS4PQBbuEDIXd-wS-Rx37pWMny0S4OlySguSBagELtTAhC28XEhYQKtDAyQusvQl776hdXMpmTdlkjQ83ggN21kAbKUBnKweKol0hNgIT5bpzSsB2K_yQ-O6-t-ElOFuIn6wo4Kp3T1YQHdiUEJaGTI9OI1ZpBbKSafovwc_Y-GTjEHc7h5W2I3tjPgs4HaOXWHmDAhyGZWxC_QWj0dp-FuuEhfpdJhqeLdYQNuauz-38d1PIAZIzWtydCtzPrjttXMsarvh_lf_0pBShS1h5E1bqFxSYA59IJxuVQ4RiAvER0V8lggXX6lm_PFYQN6HY1Tgn5XFUACtRUX4K7fJPT5BQVG0gpzwGi3PmKsuDJDrsoylTl5Ci1DWtDS78b-CY6mPy6N4Ggj9IClziEFYQO6vhFZUsUHH03fna5EneBqhjDssauLM0Ef8hk88zTXzAZs2HVQCJPMNY-thv_ZNnc2RtcIymSxBnoimudwKZoZYQO-MGew7tEORjjii8QmGLaAJ3ES6BucQ1cy-TieRatZPqKQcouZSMtFhaDxsF25VSAraMJap2p5dhs7dWDeGCzdYQIK5cczr5nGi01MO6QZXsW1We97XEp_Yhey_a8Q6L9aZhVksPMPEUSkTY5lvj5ItAJRm3jIGawoJPZaMKsASAxFYQCPth0lBarePt8SSrAOW4X8_RKO3thrXJ6Etwh55kZBgqopa5V78K9ekP61c2w-1XGOZYVi6BC121b_DGz7g-kBYQHiJnKM0hew6lmcKIPz-_2xoGwtndwJ29IfejkTpKHoBJ3j5VPddB8xpFfwqt2IZNeP6blEzyrJzHa41bLUSq75YQGOTvnvEXSVtCupDCru6Zsa0Ac2WPJqFFKqFJqymmxkGimzrbpxV-SBvMGXRAxh8hQ1LPxA7SwqjSWW-_wmrdsBYQGCLlHk6PmrBQYBwbGrZm9O8udkz5QqRkwUTUaRPkgflvbuwcTP9L4OJG--dWZKhvMtLw2LFU8--j9iVKsLxImlYQOuXmkV5U9wT2o9CR8QZemuJVow5MMqZbd0Vh7vwpGTWf7qI9qmIrv86bLxfJVG2cp5jeCl_Xu0pFzpFS8mP4-dYQDGTnzVSVrNr7r59h5c_D8hTvsr7eGehqwHPx6Nj1u00qWY7vnBDptfFeWei8JyBknYbJAStz4nEVE9H_B3ZN1RYQBAS688bqQpV5hdpJ5KxiDNMWqWjvGwtJzlmqCoPKloO3_wcQY4EdY30KOyKDGMHbVXRh0o5U7YCoCDsGKEhfupYQOlYjYoS5LaO0Tdq_5cUvpMyX63NjMhhkAAc7N5bzd0sih56X0WwR4okjT3CS-RgGIFTYRf_qQ4uIgHLzDMeZlZYQHN42Sd4EwSvYJCFtTiKYoJFBCuH2v67MGEy8_kBGqp_sWU2xXPrZlO3g-IWxqSWap0jAI6KcHW2m2nLMyxVYL9YQEbX6gPJCkRAhZdRm-QGWPzKjQsXNABVPP6HTI8LGipCnUDAd7YyMZ3BM93Soo7_9fkcFX5ohrrCWX1zV7-Ld8pYQBCiWF1CpneGt4OZq48tYjALJh3rgFBdAm6UNhqxY3HQqkSjBPE_Xn9VmHPVLW78QmyaDEPjk4WpMEce_3SD-HRYQJD0XxyDK054oY8x_8jvkRc6dE1pbyUPyf3Zh4cUeju4-nJGKOnUtRKX8eyHwKg2xj-AeN-iGlodypAflj6DXCVYQBzb8xtlNcMcBam4pSc9hCNMxuX6TGWmW9vugYHKGQ46g2OeQ7ExYoXeYK-yjRVK2PowWqvPjd5KaRU-QEsQysZYQN8E6fJC9eWP8Tblg1AHtnYe6Ky7rUz0Yiv8S0_tyRMqwhtuczMw6x9ANkWSdefajkdWB6ZB82hibG_AfXcvB5ZYQDTJFdthJpNr-b5t7HOYbxkqDNlmI6I2JNvODArz41kiMalrCSqc5suN-ab4aclsibNCPh--mx8w75Na_-vSAQpYQOdkxdfjIq363dCp6IeJedqaPKUN-Nlicty2TaxMuTR_El3-2leNbhpon_djFKC7U2z39f3FLNjanbNZjZIlShZYQDvywaaZT0WVfXTG6cPDpEuzgjoDjR63uLSMR-ErL3V8NAkjcNhs6XgJYy21koIlvhXv-HNJ7HlZtYYuzYayLkVYQMICIgY0vwPYOMvmww_CqU9i0c2u6iznpVYoTvRy2gqNsTyCXq8aLw4-7A8wpdjsbM3di2kkqOp5agIDTb1h8-tYQPJEYOPJkpS-k7Ic1DIzp2QxEITjZX2B8eqcYd2VRngXo8LMolYz57R7utviwIUGj7ouHpUw_CbCVwoOvfIJETlYQKMlyQoODT7VsTtl7hYiTxwgBQNYN0BiuSMclS9PfIgIzKhOlSWhB1DrKJZxzY9doCQ4BKhdtK_80PFaBMO6R-VYQPezxLMJ9F1I7KMXh89q3g_VO508UGOB58-pBhsgynynn6Zb_6tLXsPSK7-88O5iNBQDWYsiabo6pfaj6aJu6RlYQJc21WUKXLnP8UTe4jWAJi3-Jb8biaEQR6CArFc9ctHMJCtio1UZR0s0KWil_hCJqzsU-e_Qr6ZycFMuT9Q1iwpYQO961lIWKzfbrzo2Gk-XqAoWAHecOGrtxaQqhhXhDlNDHKzeS-G3PTawD7fcv8uF_pkFwvwEfl9CUW00g5IwlklYQOKTCPMpkvwAse2LhlSfLG3ttCSRrC9xqz3TqXNrr6Sw9hkGbDX8FaEtgwA_nSPm_E4yV_wV9HmsmTmQmpbILJ5YQNb4Qaycy-4Ydnz69tM9miQpOx3Ph8fzRXaMj9_FW0aokHY9MNQ4_IVkUPMRzeda9rL2KsgGvyQTBkqKrtdp6kdYQAXIiOML2N6yugl006pWYEZhyRpuaZ75W5JkjzVDuC15ay2gCFVAD9ZP785BshxOcH8q4nd93Thd8szMlyGF--dYQBmXH4C-wTLH7wLztJRfC_52s8igNCSrlWfAe00-wDjYGCREWrWN35ctgb0ycaLAH9ZrF40ux1FzRVhcQsZdYa1YQCpGgh72hFw5_WR3ZeTBSPzeQ-5_8oe2xURaBrZAvJPI8Egh-Tu4jguJyXKXujT0GGRCwh8UFXJtUJvfe-QB7L1YQO4ss-QDdUULIVBMbAE7WBuHfikr6XAX9p7HyItQCPkxgywlVmF2aiG5NR3feulyXG0TZ73NOB56OFuByRojX5VYQIK7eTtI8DS2ZwlNFi4VRYb_eydUXwVUlHUrlmLl3r4wxQVPSU8IeQhWrchRK0EghFrf3Eh-CIgeGSGCMkj8ZL5YQC-nZr7eUV0kGd76DkyjeeTqWWGR3vF6Hk4XGl2vijk0XYxQzXTtjVUIGYNwdlgPh7drFUwTjujpAZns9nHVQhJYQFgonoOIOh8Bi9zq_-zx0XiIDvtgU2g_NtbdK0YO61TUs70uI8kYEIrX5D90WPcV8fSzgkxRV20NWGv07F-DBCdYQJ3PMTzy_NwALWA6HgqWBdaWeWXRRqp02xKXHlThe2JtmRm63mRfCZKXR2FpDJk32BLy-CHkQFdqxVFPSZGZipRYQCbY8dhytoB2x_wgui8zZykj9PFJLn0jCfZbce6PGMsH3M8NvDEQOoqLdoe63me-Cs4-x44IUys8FQe9Scoee2JYQMjqOs3lzzbt0XdbTP00LS8x-wmqZurr4wYANK_AHIk7gTwz56f1FSEOdp1IFEYBB7DJbYSGLZQOH3eBsQgY3-pYQBSwNdHEPvJj6-JtBCXa6dk6iTVbAvp6pSShJLiJYaitRM_uxKC0u9thFDf2dx-9D-YMCF4wW5A-EXoyBOqLqLhYQGDXuID4Fmy4np9bD0bV54bRk-BxARr9XD2OGhoDRK5sku__mRG0RIGPIs8_qfcFbPrLjkoGFsdQxg_8G0asHFhYQNaGe5Me-7vOYEY6anCv3_lBJhHIXcBfy7B9KADD6lOHNHEHeiltA_qVb1o4a5rEHn2kBBDQOGxRaR60KHDbwUBYQDrReFCdPruNC-tJmHi6CunOefhgNKS-OSGMScHR0DKwqhtWaKjDdFR8ON02bmyKva-cauySEsJMBzlrqMTnZKdYQGKtD8Ut5opzo4R4-EFQ8Cg1dlvO1J2NutOs5zZKDeEpkJXgFLm2Si_ZpqX2-Sof49l-C7UvqF637VNedMi8AGxYQPOOZrrsxR8JQWolsFYzgZ7lOVqQmivIRdW0Y7nU9W3bFBOzC4R25IHHQ7hQM5VIKw7EShkpFcKxe9eVqftfMi9YQGxCzR_GHoCBfPn3zxI8T_CDFYtnOZrj2aGdgr7-IOEro8xui1AIDFo-v7SCJZ0GG_QzMhxi00om-4RKQsOiHzBYQFjMrEOO810IgNZa5H2iu6j6d4JMKlY68S59CHGl-0ujyMJ9a1LuZptumMknLYQC_OEkxFKpMUD2gW4GDnSNePpYQAL0PRR6Aji4LpJqphxH3JBMO8jz1R0XlAWK265IXw0fu1e8WKwBRUzww3_0_V9FFf8MTwV34sPifQgxODHxnwtYQN5xctCuYCWMzXbUw-mghO-XHyGHNCjqioGNUpcKfjz_6EzPb_2Glv-0w8ZLYgat9DQD8fuGbMFwBwhH1dh9-PJYQD5nc2k8vMOTrkulcUapeNeyWePs4KJj9iLKLzuSCfTLJUmFZwWMe-_JStns-xPdBPs1uN-NEveB51bP3uHsOnJYQC4Z7wyX4FpJne2M-r5q6P5bhoGEoZ1Oe8rICirVrJ6FHv-M9lqdDfvmyviHIePrzz-xkpMVLH3VcX0y_NaiYYhYQGtz4OZSd5zM-sGSoUh7_9770G9NmZ6AwnQkdXEVe2fppu-9hhl2zIfrpjKKNagKTF-cTCk8u_N380nmrPwIEGZYQI5L-6J8gyqFWUoLJWTTSenzm77eRmHIgooAu3nxDtw-4sVq623cYHi6MOd3CEMUc9wsFQXpTq250J4OAlhfIRdYQJUP_iacfXWc_ln7KLXXIb5z-waAGIRj9JqOM2E0xVsQir7JgA2TNxPEOyPN3pJmo8Mp_79Rgbt-0w_x2vuYRKRYQMvZ-AQ6_aM-_OcuPOQTIfhs-e6gNm5r9fMpTCorhSV4i3dRd9-KfklK5ethJfqxElD6hktMrA67zxShJF4LlD9YQNgj-qC_3lFIwo7kPGb_nmGT7SUJckMAM2Yj8WDyU_5_ooTy1Iis15xpCSAPILwlEoytLcodah9TJtnYcNogXIZYQEKXy_vSr0aqzc1bcm64bklkZpRV15JgcHzErftHWDaHK1SA7Fmttpzr0Vi5nwYAxNiYLMEHzFaFnl-5Xdw-dsRYQOjfaOhFuiM2fnGV0NDW9AB8hWD_RJQXWNYH0xAWdbQaSeL7ZyaIzlO7V4YID-QAQMNvnymkFSjD45Uy7lT1XjZYQBwdL6cLXpk3dBXNJL5T9g1o5dL3WuyUD1VlvRO1trZVEXTjpsLMFlkvVVeyByCRNWODmIXUIZYAxLREDlIXL3dYQAY1TtS710eC6Sans4on-FBlD4C55i8Xax_4rj9FLtxXpL749BsrEfTwSHSNnMWmYJKdB9psRlVx2wv3d5nxHGlYQPUWNrYIvwLu5GqI9hJrQQb53TZTReB01nGx2sEvpUECO8apWcAPj4GjyEGV_4qDGyav_KOoVKhLrPCZ03FuJSlYQDbMOcFmT__jny0m4TZ1duFLaxfKk3E0Y4983ju7nXiN3GA1zvIOpIAEFWgeDWV3lKeM5tWEuUe8IIm2nFhzfBBYQEM9U9E-s80GGw6fbwx0pfeEcpnEy3xmmK-bpUDeE-3a6ao5fWQPks3fvctuDBXUJnIvK4w2BkD2ludEXfM1cB9YQALVc3Olmidgrit7Tnk2BMif91slUO6ywLblE9B685i6iAC-ojIuZRrd7tpKkvIAK9u-PZDsVcs1JBqRKAx8RpZYQDfKCVI1rkwq_SSlG7WNQZ2TBGyBJk25e6gQWISIOwHT-Wi3VVHb30EMHcP2NLel92ukL2lH15ZR0nVtpLIb5h5YQM-iuaR75U3_2XLvvMymltFzY8E2-E27Ns1BFRUXMlDdtwyBmNCgNiLf_4EDxseVDLFKDhwaxZ5HEnTVGTRvfBVYQNyuTe6HXofIKFluw_t678W6whdyWAdrAWhiu2yE4eR5D5MbeWDN2m5EFk-18CC9AIWUhnWhUX5Yn-7LzljYwaxYQAXu3pboW_HUWmp1Su6DKvveXzpIWXOmCKwv_AgcFF30RXhX3EZun5_EkFiDc8fdubCqtpCNZgh1ZpopSHRS4tFYQEjftbAZSO3HJsrrhdU06QjozHEVzpp9qiLkxNqgNO3h64IjZCBRLV_m8GRaIdYDKHe28G0L2VCcpNuaPMti_5hYQEvh54cAdElDKAnEuQclasnwqqqtFxIr2F4GtdJwAdbp5Qug99DxVQkbitwMB5hCC5YNbPml0_r0CyBSH02BpA5YQCkony5X6bCM2K2-uiaMZeRM77GhmwUjWSFu63S5Z7uj0Rw8X25QUrG2jT8VJM2yVe6xxEH05lSLORm5h-JR1ZpYQKaUy4hgGjoP0TNU-Fhj8F2EyeyPwexBQMW6aEMklcVOpx-ZE5MzzqA0HhOLrrF7bDw3ZIy_QxaYWQ9-Yw3QE_lYQPRJd1HfwD96XFaw9yjVfQflkbBm_zAeMZ-V5LNsxeqkCdEScbLQDt2zlAjHcFmup4CKuzjBq4PLtKqhi398zpVYQAEMlqnPxtCAtcTcYSsW7_fXIhQRE2u4tIXAmtrLaQUa8qexVQ3o1fD_wFYzUh50RBcl__PAAhuv6kjZrN3ij_VYQIuFzRKm14L-LILmuAVymWnFNL9zYZSOtih_9e2cPDhLqprX70t2Vpq2aj1MpbpjNkgbiQlQbBU31nc9B6Oo9jBYQMRTnEr5x1H4LOhafayxdFSzHlbV9oiklpQx531gd_NPSM_ca_9sqa0XIZX6YeRYmZ3f5lQaJYcQ8bNzoHbOxKdYQENx1nCdZ9qa7voqlbzrDzpEHaBbkI3wwN27aa4P9_055S3YGU0Q9SqjODDAowGgtKnw0dj3HliQUciCcSTo_ChYQJoLz3b3OghLAC14KrC4eCnNPinqAnokmxFzrcEUY3YStfAfhRM6hsbBsaAAZnhDcOL10ZGZcEjV2loehSj6kwNYQHaMT8bfb_VJOrOSP44GPJ22kdqTeuDpvc7i5bvuYaHGl8d_8an3cYZAypKRBRZI_-voekFSWcWU7FK19OnHvgtYQBvdZJlONxBjKvpUfAZn2sxiuNu0BWc37B7Z3hsDG--yI69KGAbY-v1brOUrPfdyNyMwfcSLNQp7fJaCC7bJMXlYQDmFnSO603vMoQrjjDKMieGvQe0JUGkYzYeBiovr3bjdkWuwTjSdebrz5nn925-MF1BRFFZKBXvKAbyrai6CjstYQDUIaFFK7W-8UAOrdjmvZrHTCAzPq6Nu1A8ZYVqMScwoviDvdlPuwtS4x9Ppqk0GASl-qAZOGJ1cEM8VkX4UCOxYQPIbFaS4N0CXJEy4gfvFjj8a51kSCtfuTCTGlaRo1z17FjoxqyNnr35ApIK9KTYqeP01R3Em5es3Y5LKVSCkwn1YQIbdWS65urgWRuMQ4ZhhyHvvJaUXW6r7sKUZLwGZWhgKSjnKWCCclDznZ1QpeLntdqVfvGMZkIeVZKA91LvaZ4qCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};