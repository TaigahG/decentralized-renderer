import { EMCSW3C } from "./types";

export const EMCSSampleW3C: EMCSW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/emcs.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "EMCS",
    documentId: "ARC-26FR12345678901234567",
    shipmentId: "SHP-FR-DE-991122",
    invoiceNumber: "INV-FR-2026-888",
    freightForwarderReferenceNumber: "FWD-DE-4455",
    eoriNumber: "FR12345678901234",
    issueDate: "2026-05-07",
    despatchDate: "2026-05-08",
    invoiceDate: "2026-05-05",
    importer: {
      name: "Munich Fine Beverages GmbH",
      addressLine: "Weinplatz 10",
      city: "Munich",
      country: "Germany",
      email: "import@munichbeverages.de"
    },
    exporter: {
      name: "Chateau Bordeaux SARL",
      addressLine: "Route des Vins 1",
      city: "Bordeaux",
      country: "France",
      email: "export@chateaubordeaux.fr"
    },
    guarantor: {
      name: "Societe Generale Paris",
      addressLine: "Boulevard Haussmann 29",
      city: "Paris",
      country: "France",
      email: "guarantees.excise@socgen.fr"
    },
    destinationCountry: "DE",
    exportationCountry: "FR",
    exciseDutyAmount: 12500,
    exciseDutyAmountCurrency: "EUR",
    grossWeight: 4500.5,
    grossWeightUnit: "KGM",
    netWeight: 3800,
    netWeightUnit: "KGM",
    quantity: 3000,
    goods: [
      {
        description: "Bordeaux Red Wine (ABV 13.5%) - 750ml bottles",
        numberOfPackages: 500,
        shippingMarks: "MB-MUC-001 TO 500",
        productIdentifier: "EAN-3112233445566",
        hsCode: "220421"
      },
      {
        description: "expensive wine",
        numberOfPackages: 500,
        shippingMarks: "MB-MUC-001 TO 500",
        productIdentifier: "EAN-3112233445566",
        hsCode: "220421"
      }
    ],
    transportMeansTypeCode: "30",
    transportMeansIdentifier: "DE-TRK-778899"
  },
  validUntil: "2026-08-07T05:27:25.332Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "EMCS"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#18",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 18,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-07T05:27:29.440Z",
  id: "urn:uuid:019e00e7-c3a5-7cc4-8763-cf37e8257a62",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-07T05:27:29Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAD-ErBvjwydHSzfZbKWT5PmO61s5OKvYLQ9SBc7zNWUdWuXhCcsysB-3euIcHN3dXAHcmW1zD-EwDc0_-yaVWC1gjgCQDvdeSEl-SJ9Vt8v2RryrN6Cv96u7huvxlB5yPp5sB_KVYIIUxPk74G12qHDn6FIqP9f62c8kPMeObOcPTkfPPppZ5mDZYQJgO7LGUoh-dZ4_VNrHXniglbvg7tpBCgMHQbnRwm9mPE7Te_mWq3jAVHRLfVRWMyIxXklI-brgAgYMPsZNGbpRYQHcmaWCaChtPwLFN8zHhJs9uSemVmrgA7kcXbLHFvgdjPYuejmI5GOJ5k-YNfBZofNMvJQp54VnlJGdbtO7jcblYQERIO-sVPSGPJeh8YcdrMrYLMdDXtls7IgwhpKmEQ8-oaqp6OcnEFvQAm8Mro9zExwX2DxBlo3es8AYmowZNBzpYQHXJkvltNJmu4BXNh4gb7mcc2NZs3IxiJPdRfKHM10CpPgZ7IAWJS5b7qpEtcrxsKj50CThK0ckrKWIRgvXR7NtYQHQl6Q8_ozx04sOC6pLbrFBcmIkdUKTn6onNr9Y64NXg2mK5N1CvfDt4QB_4PNCNyNHf8_UUVAmk-0mWrHsFZ41YQOK5kDYDQu_eVku92XIs5ptnvN40v23dCrTtbC0JPdjQXoP6uM_moXbdTU62S50EaeR8KDcafUVAadv_BZUkQpJYQM6TicQFfaKY-p0SvhrPqa5E77HUHDBwCN81cvAN5fFWNcruwbjlZOFFHZlW_D6IL1zbAAuqgcExAN0Sk3Hy6i1YQKWof5MnClmQOA1kaaCT7IIB7t7HWAOS0iph1D9MHC_F7v2gSBGPcpcNdkL3Ia9gkmH-PNwJJYXYsqZ3X3_pos1YQIGBTuZvth73T5g1ECyLVKBxqOgvsWvjSB9rKJP1fmAPz1gNg_iEvnozUunF6tcuqhS89cDWJleACoAiymxvMLxYQNKL2tuvWn5QrENWo2nn2K8rQ7ltTTxMUihRrku4LrbF3p4lMtAnQCS3XHsgRySj_u8uJExMNYCizqlG5aNuDpRYQCBMmXKSEbGHzyvHDCJt1Ix38dWxYvklgL5khs0Gtyi6DGlwwGGNlnNilT3VfcucbtmeMbvKT5sky8cMp8gtGwBYQKFgwmmKiv9bep6f1BKsNU8If4gkiJU87YVk6oFfRT4wsCBHxaJXQsqcOhJ-lqpbUUnDtZKwI4Zk84ihV9R05BNYQLsvKJVcfhZS5_l8wvq6a_19G1FEbkpJ0wmGMyGRAjh2Ym7ZAC3mh9I2DlKTOe3KJlg2NTUGZYb2sPb2B1wKGrFYQIrY2C0nxHJfkUKJYoCYuZ0mq0-Hfe487i7TYCGJRNBvpgugNbPopfCjLdxoneEuZ1PoeV7LoDc4pl__FQTkY41YQIn1VD3sUfyBbYrSeWAzUdXpmo7an8afAZE4aQXlIM48gi_E7QwQWoBdqJS8a-OfRTxdXAK6zwgcxKZrgZsJtiRYQCpyoCab0y_Hx2qi69B2jvhwUOtfB4Lc9vyzlSbNPjGRJAQvxV1waV6NEXoKHl9wDI4DGCQ0kVdSs9cpexo8aOJYQH9n0VyJb7S256qVwstCkK8D6lNSyp0zrtP1QVRMyvB_NDSVK3ypDKnWwlpI6rpiWpnoU4Eca09t-xznHQ40ruFYQELgOIeJD4GA4cLr7fmXxsyZPVH4lIMnmIrh47-_2A9Ms53jfMMM22yZAl648hExYSww8jfj7IMpX5ZR0576-49YQKP2pLt0Htt2OjQyOzJF11t2PkcKI14K7J94wBFxDOJZKqqt2QZdtH9yZ-tv_ozGoo5MbA62xCVr8S_doc1hgUBYQHyX4sDeOUBszBqlw98tiOpMhQoIovxyEmSFP-GI6F5sonc2DeU0lr8nvkQkd-RMDBRsVglAmSjMYktbvieTvyRYQNAqD8mgx9vU0FEKwx6YKzDQ7CAmbnkgUdFR0K4suYcjMQIfUk7ZV2pxUbatRKRov3zgz8EtA7UwV7cYtTyqFdVYQF9HfkNtvC7vf4HLbFcDH0MkAQ4sWWcCG9xF-0T--ovobuTTF02ohsqXL15UzKudYR14t4AUFsRptrnncdkgHe1YQMNxqktdJJ6e8lqzpxDaKTd2Gk0n8Y4AEyGibqvXnOyLhJDW_CP2qd6VVCWul4mEX3RWqimnn_JbQ3uen2sQWxFYQM9O6dKP1WXnQ5Y3llatXgCkBOw942wi2GCkvp9TQa6PjDXp0TMW-PzHnR5_cH2UdE_cj5hwYIJ0FwW5oEDDf05YQN8VHXQEF5R2OYNN-1hHQJdMjzfSOV71lbrHfZt3kf-Qw8E6wl8VgwtoovYkkQUE7DOBUdKNPJ02pNQc80ra5ExYQLpNJuKDWILKIlKZkcMRNDzsfY8quSA6dmltsMAaFBa2iD1pyBEshREr_DfEMghjKABTFY-kl4jA-lByH_8e8HBYQCi-_Yopzf-Y-RALfGuQiUUrLjQ4EiRzLmytx1kS3r3_O3-woo5VfV_KLnAmF5W4qNzbk902QPcP3ab6JJtJ4zFYQE-5Z3_8wXr-vnuu_FRIaCGu4CGWS3uXNkPj3z7bu3voxVAqqpTxQFYmqoKkBojOabhN5linE6y6Vsg1J8nLDC5YQHbGpnFQThMxt8RXcJgS6_rt4HBqJjH1rwy5j7xAD7byxEb0PXxTm9iTRBP9AkhORNxBLb-eNoGjH8i4lrrZB6hYQA_PZtbOmUzGThjNy4WyHC1BZKhRI5W_SYhlhA7nxgi2RslknRgePEWJyJDaWWHPIKDi8olD9N7u5Gr1PQaT5XVYQAjByCvvjbQcm4jr5lSsTvhREy01HydqjAT8FF-fwlNliiDWF9_aGKMhwEfaPuDCrhPFd4TUBaSgD_LuB7oCuAJYQA55AFrSlmvWEsG_4U9iNA41OhO6oatx3yFtneTxSIL-7QgfwwXCXfYSgBDiPG5yK6sC4NmG5Swgbkr3BE-Fhp5YQMrZsLtOhxPYgzEdOpQIzQ7_u3HlQlnQcRm1DhX12uuj3u-8SL2B30pl5Zi9EF6M447t7zSIEAxBsTyZ3jF0aHFYQOIpJexjgvaLlN5ZH_RojSeAdYLeHr7dfn1gKE-RX8o1S-2rHGnAwUSljbOqs8oBrWLJGyBaSngqywbR-mL2EPVYQMmMETuZki9FrxZiFDU9avB6S20wxtCM53WfBipflGwR-HWLgLaSwEdh3EVkyDfcaT5MGez4_UBe96kggJ7tmX9YQLx3p_3ayZioKifgbqLGps0326-Xl11nQAnPGbCfbS8Od1GSl8l2LDfAL4NHoBwghzba7wD9ph5Q4EfOC19PsrdYQD2Iftz6aT1N_JMmEe8SvlnXJGtjgYTrIUQeJGpUfD7CLyHJCyfqBPKT7AC9uOFC3qF1SC2L3ed3aVzz5qNPrpdYQCG2O6hOOcRsycFj8qEwtiS-3d-ZONZSGcP0fINoocgmXzZ2WcGTYgrZ3xsvOpmUweqNFuopsgpO5gHkNwmcMoRYQBODftb09-xNfMjIuKxlNlrhZWyI7QA4ge7Qryxv32T59LmsO68qES5H20i65WjowRz5Zf3IKtGlRGWMEfslKLVYQG7loFcs1hhBSRWLViQI_UkI-RN46DO_u6e2S9TWQ3F4B65ixSHDXyEoiLPOL21ib2vk5WdZiN1qzoomHDj_Xp5YQJ-AVPuS0dah9t5PpaFVA4lYjh-E8geYK3OESupUB_zyoxQFa5M1Yng2MsAOHRMVNNI0RMdPK9eoP6odL7EIy21YQKghBm3DJFbzXjJOsYnFqfwp717pb4GeiX-_Ba3GbEw7Cm_EjhcmOpwJPU2FikrAYTHTW290bWZUCuSAXQP40_NYQAQFugea-bCyUIO4tY0zmY6XYGaa6tt3y9VXk7FDfXYR0iRUniBoLQA6CuwC2wuKM-B50k0ie3n0tlbrzHSRVgBYQOqrFNpuMci2U7R6_xZLqJf8vvMNbV8wGJfptWfEgxjqPYVjIW_t-UH_TglssvUN_PZncMDpdHktotRyQlP3HmlYQC2PJQBoi-QHSp8wNpFGHZJVFK4hoAPbzEueNRVV3plYVjEUS_KyJzNcSFwbV8RAhXADtl0NUA5yxyudxv3N_ZZYQLb3Rtxfb70B8kYDKg1OzlBR7O3e_DccoLNi70hPW13VyRSlom_ady15_96oBqMUDuFGaY1y2acJJ_rYeFtjJElYQG4GgUFBjcf-k-1-w5HirARTsxL1o_SrxvYg_bVo1eNNwN5S8idRX9_q-CKUl2TX28dYndonhDFCS_4tyjjd_YNYQIy6TTTv7AvXOj8LtBi6TjzTPMo6HGKB77mQ-WhG0ctJFbT0vckKKExu1hOCy7SjGuZhVpcyjAO8nImdz19hlIVYQMcULI9KXHyD0-6XKWQ0ZBQmsID5ACsNHBjgR7gZMUQfAqqDU8yfJ-fRHjo_G90eUhFrfWYudPXpHtyX5n8JBCtYQMjKfBCb2_yjdyDLYy5oxuAd0I4fwSlp6HpXEaviwrYRNbGmSDF-5Z09a8-Cwyf-gGl-kGOd2bllquwUhGV7MRZYQN1X_iv5nyOQl9y4xpekNfz47hziDZwNZ5SQdzWlW7xxh71ug_Af-R1NTzu57x4ZUFOiPbrwWTdKEjV1dWyqGAtYQNQ2jfgDfeboJLp5YuWhKBzO20ybVr--NYASCwj6ooVJojChy1lfHEq9gpcXCm8W74T2JbBpRhsdILhRB2EQza9YQFDCmMg6NBQmn-DC8VOWhys9tQ852k6oRTKrTpek8r5Zn1lHdIycj1kydaLlvnMo9jGMa-kVmkokPvVKyf7L_05YQF2CDIJ9Ezd-p8yDDfIuPWAgVfKXB0sKj4vztkOWrSQbM77huOzSvggUhWoxIlF1xCEKAD3Y8SDsouInUdRGpneCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};