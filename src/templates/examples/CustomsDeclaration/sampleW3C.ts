import { CustomsDeclarationW3C } from "./types";

export const CustomsDeclarationSampleW3C: CustomsDeclarationW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/customs-declaration.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "CustomsDeclaration",
    documentId: "CD-ID-2026-0518-001",
    shipmentId: "SHP-SG-ID-112233",
    transportContractDocument: "AWB-125-88997766",
    importer: {
      name: "PT Bali Tech Retail",
      addressLine: "Jl. Teuku Umar No. 99",
      city: "Denpasar",
      country: "Indonesia",
      email: "import@balitechretail.id"
    },
    consignee: {
      name: "PT Bali Tech Retail Central Warehouse",
      addressLine: "Jl. Teuku Umar No. 99",
      city: "Denpasar",
      country: "Indonesia",
      email: "warehouse@balitechretail.id"
    },
    exporter: {
      name: "SG Electronics Exports Pte Ltd",
      addressLine: "10 Changi Business Park Central 1",
      city: "Singapore",
      country: "Singapore",
      email: "export@sgelectronics.sg"
    },
    goods: [
      {
        description: "Laptop Computers (Model X-Pro)",
        numberOfPackages: 50,
        hsCode: "847130"
      },
      {
        description: "Wireless Computer Mice",
        numberOfPackages: 200,
        hsCode: "847160"
      }
    ],
    invoiceNumber: "INV-SG-2026-8899",
    totalInvoiceAmount: 45500,
    taxAmount: 5005,
    totalInvoiceAmountCurrency: "USD",
    grossWeight: 175.5,
    grossWeightUnit: "KGM",
    customsOfficeOfEntry: {
      name: "KPPBC TMP A Denpasar (Ngurah Rai Customs)",
      address: "Jl. Airport Ngurah Rai, Tuban, Badung, Bali"
    },
    sealIdentifier: "ID-CUST-SEAL-556677"
  },
  validUntil: "2026-08-18T06:13:34.630Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "CUSTOMS_DECLARATION"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#32",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 32,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-18T06:13:36.410Z",
  id: "urn:uuid:019e39b7-f01c-7775-b800-ae3e757f8e27",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-18T06:13:36Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAKeynmrgfix9iSHhJ4sjAPmhMsa6VZXr3gb7VKAXAosPmdNUxEWVYSxbBGVEbyMWxyFsv05OywQgwY_xXxL4aL1gjgCQCf1hNCpk4Jqdgne6ncrucjllxJrIeQGb8vDoM3yWtHsxYIADZ-KK-tyFD2xAjaPLlmaF-FNfljp8KLInNVN1u0WOnmDJYQIHc9j1fWlRanupiuvUDzZ45s4B1sh0L0rs4z1Nyk7tAy_CsIOfNSbzd2dIyBbCmWksE_mXHu8R01cmFBrlsRMBYQAtJW7j1ytjosQrt4QqJ3yCzIiH32zTQNc-IhPx4BckiSYRI2ial-PZoDmz1hG2qZHGg-XRW7EPecIxMtN9jkfBYQGVrS3xOWKU4GGxmPaSGqdoFPi2Hfqoye9Z01hxxbrFpTFZ2JSDlUy1i7ur90vb72ZvGrMpzvZAMD4Z0cyx4fFRYQK3RIRN99uF0t4vn-HiTkBwSqTXzEAAc41KMaPqvcIocYVglqkoQ88i_Mwfw-jrMnvZgWQ7EMs669tMz5nUPNUJYQFW9h2fzTd7WejMUtT8K7AG4g8EOuXDAGNVU_0ZWCRmbOD0OPYuGWpPV_5Vs-bBzITW1b1csQkVZPg_rHs82yYVYQLBySIYAH_YuyuaiCPmfsUCdP3Qb8fJyiVmHUzqOF3rkFMO8PhlhLFymIJgyqGBVWrVuJ95-E4I2l1sgRxrTuX5YQGh-_2RhMr6aNHa3EXXTYUs_ZPZVzTE2VMBtNDaJ9zUgJcQQlGZOX34jjNlp9AB7VCY263-xgmEx4o2yr7ZEdO9YQPSdVX_ZLau6EfDxEblCRCYkKVX97fuPusVsVfPawFKO1g7CihCIbFCsejMLyvyppd8THyQp1BaUjS29oUY1tVZYQPE695wk7JKjtZFN_MpV__LyxR34g8ZudoRn2NKblVJr95j4GAHeR_fc4aTFmiQuhfrCF8Yww3iqJJoygu8hLSlYQM3UJmyM7FugU9Phqv8TFVP6ad6lYVR8C1pBfgWHCLEgxC_8RvSLSqWPcl6U1X3pNLF5poi07PBluTAJHUZrhNVYQKUR0AO-VjT39IEjTRgTwmGPxBeMQF82ugm3djFVIiTI1pgXWl9p8YpD7Fpd2qQp9U2x8oX7vACoSc5Hj8xaJpVYQK0Xc8pdL2GCkfTvIERoSD7KbWkhhM4qOJEeDR9IPck6znqAH2UIGQQ5CuHK19ekxkfhjSO6rNOY0FTKpN4EbiZYQPNkL2_KFEkv3uYY_hRCefWHu4N41zJjC04uPFBH4q4GK5SDW_sU-SHtOErJXbD26E0R7zT6xMzmgBcZCFofvwZYQA3bYWhORvkKn5hng7XobeUGNMqb5Fa3qprD3mNxH2T0OoUfzlbjHuo35pb8T71p5pGHWf0IGoMMDwduy_yPLKlYQDkfLvj8icppKc57jxmwl2XKPNm6lmjG1QpFJKe0geVBJ6Nx6j3yHKp-2_muTLa-yX11pNtBOvY2SR4PN8yrdrBYQLSoLB1oMOXnw2gRm8SMG0wkpB_ltKY1nwFgyM7sSAT6gkisbFTkrVk_jV_FNA88A7XOs0Xy9TrETOPHgEeTlS9YQB_eS1PYeW1ndVmJaxrS5KrFrZciLDwtNtkucjwwotK1QKOBwcNYBnWU51YDdPfrCBLf760qODdBFKqHLnRaatxYQB73oPXn7pV_IAXzJXxx01OVyTo8olMsZqpNkvpFU8w6u73rJDzRQmE4FvX3T6TVdhcrCcmooHZ5AqPnEXc4xsNYQB3ROioW6oVr2ZhRKiI3TbN5KiCRdF1vWG-X12E8ZetLE8CXVHdO1CbEeKnqJJx8iCYawMh11rs4eN69fgFf9HVYQCheDT2iM-8XYwqAcVq_FQOypQV_cK7M3KytNAFfJRBF8it7KCqhFjYH6LgcNAF8JmeFSofHcahhQhikQSpWPUpYQGSopBqG4iuyj-y-xnXaF5cF3ZY3AMr05CgQcdPA-qajDQ4WOVqnKi53QBIsN9IHDAv3gYUzuwmYIYSeUCD8QVJYQITPlElAP6Y_Kvk3vSLD5XZ2gtESdWd_jga3LrxR0VM1gfkT0FsWDu904zudmPh-49xbS8sjv-9gJ1foas8oPDhYQMLQS96nCHEefYlyX-VQfu69ROJRyudMg_iXqzVxsKG8DgjD8aYFt5KAUBsBRmr5SFpRVqGNunKVfdM9OMW5tBtYQEDns8ivRD2WYpa9OTsm61rrrsQdYtRlhKXzcCNY4MkwUmRFQuJLXiYEf6Q7wEw9fjtuikI49Sej9TUqARdZ0vtYQKA-vQqtzpnSJWndYIVxSKd_xWOhnjB-C6U7LUAxM2dGxZgSRl-QjaltF92iAIlKQE0dzQN7dDoZg60uOftEjS5YQBl5Qbc1tsFN5dm5uCl3w1Sqc_IsxA4eShQp3X9bz1mCn3qF_kvj2ijcemubvTqjGwzLErubQYnjIPWurj8EYvBYQFP-Irg6WM38IlyRVLdorvp2fJIynEWqon6_ZJ1uchtxtPLxYGemaj439m9bClcRM6Yqe3u6elu-9e8Uw3ddy1lYQHY00rKpdhVyqFZleKRjmuGU3o7qDr5MOQM15ODwWBW0vkoLbBRpb9BCWiSRi7GeRb7LLTYpF7_M7rnAj4MGNv1YQG7K0UeSbJw0tKOzsoOjx9_Qhiv0xRypJjrcr47KuRn1MJNbSaRqsSUbNrsmnHQhkXcmK9e2Nx1lPDB9XHDhy65YQMH00ZJzukCJ0OQm8yxay9mQjkLFPxkiBcIkNe5szGisZknTGpx83djdKEaETQhvMpMkh_OMaPpglQ75Czyx-1RYQKpKPtnw-9WMjvPG3f0nI_MAc5dFmUaFD-GIbWdPp01V9u6SMbxlZlBp8KR-57GmXof8WfgNlIImZtuEO-AIp5lYQF9LWkQRfTXd0HQxPebuS3BeKkq8GtBwpYyUa5M3Z-dFzYyKTQDikclBQDsGKXWmEmAX10IUMwzVhtBExgkJkQtYQDNu1AHXoqo9ROCzDMn1ZoFyYf_MNnPzZyi45vDRCLKar65vh5d7pHODgxUUZ7RcjwlM2SMUJLbsRnNLRVahq51YQBpvGsiJa4RyXI3-WdqX-qcDzAhuMZB1IDtxwWWH4pLBC3ro1wDMXsdu_WKnJWNxTYXmVuIqdspEdcip88jBPxBYQAI1yObC2KynJ2gCsbsSfggqDdL5H-K9LAZB5jsmVXTjt-k91yGYAZf7f8VmoR9uIVRuq9sMU2HGhglHuaxbBvdYQGYaMI4OEi9WgQ8Zs6UcOuML67f14hMSzc1zD5tKZ7AKOeS9enuq7kXWxJd4iGC6-D2OtdR6agI6cf8mfT9oUJFYQKuIzRRkFyJMLWOBvbRDp-B8ez4VDyF_vPfGwaXsZPuKolD4zFvJKG8uGvwzaNBhCIqjqZZV3zn3nFB3YJ3fGglYQJylCoj8KkvH3wPcHzonEwoZDgHwh7cswDMp3kToGSqiuqUrL9RYaUGj4AZZtH1HCnowf9mfd8njJ-5sFUKqErdYQOUOUGkNedDowhsIJGPmDCmXUC35zTjeZ_Fx0DOlHwViD0_mNauSeid67aYLEfKUnA5LRqVyk8aUIyhTqjdv0ZFYQN9OKBMlr8VMnMHZDNAK94v9-_TF5XmLy_QMTehMawjj-Ikkp1nLykQrMqOeg4UI4Eug-4ZPCIyPuaKJxDwuc6dYQHKZ0i1N_gSThEHD1FNoJhvCi_tPVHuRtI9zjYlhOkVLagjPK7SBzHMRwvFanBjC7WHGsYQLoRwTclu2PtfeB71YQKHGqKRcrjVX1SaKymUGRPDzemaDRQV694wFVBThtwhecnAbSJoqUq-mobqPWzcDl0AZspk8Q7mOjMqS9yEkuRVYQO7iweqoZ2GCxJF5fIuOsIrVQBvpfSi0aHyi-V8qgqMGycGLsCYjoNrWr2zmmKRDUzCxWZiNCEIcP3npknWwnbpYQNaKOYx3c3ejrIa5iBpA4e10DL_AHVvvWsjAz2S29aEb3hCadLB2Rvd59oHXs6LqmpnoY4m-Jcx-V7PIZ7KMM2xYQGMDbVWovLmpY84QQ-uHOxepK7HWXuzNxkMa2884cU8l9wKOk46kFnHy5Ch5CQTezvbBHLEWJCnP5xTJAXWidf1YQPDPcyRlvUH83oeiYWt095w8SEeKGyY3Jt7eFQRGu6Sz-LSBzOmg2kGPStJhUO_N-4nc6tkMZDke2SuPPpZqZZFYQKZfQEpMkRVzaFooZL3y6bZXKzY6oek3XkrIObpOooY5_N5C83XjfuaE8QZkUojDN7Hw5NT8124jNJKDBaZrciZYQB-gIx8b1sgM0cxUiWTjfPWYXJ0Luhcf4O615-CA6oDjzERBJ83MF7xlP2QuBcyLsu6yA7-mR_wYpmKO34E_I6pYQMz1JAX2_6bdh2ToLGuqKmWfTXQ09rEOCYjnsxro7klM4ANrJAjlT-utq08nHDEER8h9-8Yz8FQASNKkTOR1vjBYQH9mG5KgdDWrbfMf8WFrB39Kthlo5qV3DZcYBB_Mr_I1lIqYyxfw2Gt-oFCad0wzsU9v93CZPH4OdSquvwlmheCCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};