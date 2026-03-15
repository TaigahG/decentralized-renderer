import { WarehouseReceiptW3C } from "./types";

export const WarehouseReceiptSampleW3C: WarehouseReceiptW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/warehouse-receipt.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "WarehouseReceipt",
    documentId: "WR-2024-88501",
    shipmentId: "SHP-ID-US-778899",
    issueDate: "2024-11-15",
    warehouseDepositor: {
      name: "Java Coffee Exports PT",
      addressline: "Jl. Kopi Raya No. 12, Kemang",
      city: "Jakarta",
      country: "Indonesia",
      email: "logistics@javacoffee.id"
    },
    warehouseKeeper: {
      name: "Global Secure Warehousing LLC",
      addressline: "100 Port Road, Terminal 4",
      city: "Los Angeles",
      country: "USA",
      email: "receiving@gswarehouse.com"
    },
    warehouseAddress: "GSW Facility C, Pier 400, Los Angeles Port, CA 90031",
    grossWeight: 24500.5,
    transportMeanGrossWeight: 32000,
    goods: [
      {
        description: "Grade A Green Robusta Coffee Beans (60kg Jute Bags)",
        numberOfPackages: 400
      },
      {
        description: "Grade B Green Arabica Coffee Beans (60kg Jute Bags)",
        numberOfPackages: 8
      }
    ]
  },
  validUntil: "2026-05-27T06:28:54.933Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "WAREHOUSE_RECEIPT"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "f4efcf377835de735738e72e7e2f546c291220be333c70e6cf3a8c7b4722e854"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-02-27T06:28:55.829Z",
  id: "urn:uuid:019c9dc9-3799-711d-b535-ce16de082a36",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-02-27T06:28:55Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhA0osrGWEA5ELQtjWQkMB8Y22RitstUHS-1xZrU-4HkyMzKLWrflLULAumO_eCqu_n1YTjDQPh52N6TnPC4rqopVgjgCQDN6BW2FMSo-0nQrd0umC6gtBftgX83FHmXJPB0YfYpiNYIIPHULtA3iYkB7pl4xj8ryr5SdEhHkoGu_OHNdQ1jSDFmCVYQIPOileSjqK4Cawf0ob0AMUvWGzx2ufDWKdChbj3efl5VeL1OQ1HzlLM3ZImRKyKp_PGeqPah43SFdr8gYn4k7BYQFbgEDQEvxSlB5SQOvwZ8Mx-VMigNDsjn17Ab5itoQ_5_62S28zDSOIwDzwoivUiickorxWfh-VARRZb_Vc81HJYQGCTa3PJFuY1VNlxJv-p4Foo5W8M2XqkLAUvj1bz5J4q-mLIbN5y5SLfZMpyyK70FVBy39x8rFHobuoN0dN9tx9YQIFIWfwGNAgUpGs3LHJVnWVl5COgpy5X6-RzS9PUgxSO9YIFpsYGGJHTmqsJQ7rDvU4AQl6b4NHTBd_WiDDVB8tYQDkmmGXiFpl9qXEsjC6HqxlHUlSEf-I4jbDX_d9E_Q5WpUPAN-MmVX1xVFsDT_txdtieSJdskFdvPXB6lf2JoPNYQEX5SSevmcBxF0maJjsK8nm5J3CrwRgurXPYdgfEm419gSO_5jwM61b_lqrVI7NEO_9B4yHZ-M-PknVwLwz0ZGpYQE-W6r0N5nOGZkZz3i-S5K-lOsjsQDC9m1egwDcx5wMzLLZrx2bnjBsCMTskvgGo2arB0zkGU8WJo19U8IRuB1BYQPLL20MUGe5E_CgLG_D5uEn2EZ1VjWCGtbMURPDf-OjEHErSAF7RwDJF2rREr4zy9wYYTuSzwyr57-GKvqyrsBJYQIbc_c50mRN1PigYUNepH4ginCABHDBO9PeuCZRlYccrjfrQryoyqJA6ASGkjcuWy_nObaoPOXoQ71Xu0XOHlFdYQD4TUK_xt6PALegwv3OZm6MC8UUuiVDM_ls6tUdHcGjbBVIQBRbNNuZ4aEladOsJ9aGuslT9EheCYiW8D6NaaNhYQPsjZGUfIPp5zIH7gqRECn6-u3LTnRKbVupspfAUY7vEvfFYo_bGy2alnGxGlrcH8areiez__QcDCxCXlFJF_BlYQDQzqWjK0Kr0rrkqaO5iLiiCdutfFMENhDJi4ObXQsa7kMJHxJOF23Fmnjbw_HzWvmQRUe7dv3kxNdfemC4-lgdYQBnY2AGgqefqMfD2-OXTfNZIXDfWDARACUcDzbPwi0BSjHwAyxKTYw2wXJJnmyhv22LDJNkpasDBrvSG6xSicshYQK3RS9ck26Rll1aMOA5aJ0jJ3NUh9LVMQ84nkmrePiaUwMbIj6aONjv_pDoc3sWxsUjca2abEMwcBuLs9xNwMzJYQKQOlhiZB1bBYn9C-QvyAj3lDCGmhN3wIQlYrhB9Y1FyXFoT9IIBZwPDtG-nUfj9dPu92NwLb3DsfdaVgfr5IsBYQNLU1RbEiAM1yrKWQc09jt_9bYd-P8HTR8wECULc1GdEGVooRr92hEcHACCoRpNxDwErO4rj5Y76KLxy7KDfwrRYQKOUpQkaWSdKiF3_OvwH1vl37ial5khNGT3aJkq07eUnbHuVqaDIFRxyyoicapN1ofxLF5TOj_1rFH3o7Sb7veNYQLupxfE2Ay828ftRg_X6b4lmBCIPgteuayL0hAiOlUawIF_N-6YLY2fNSU5MNxDuAnvF6VOmOo3vI6_ijpVQ2MdYQJ1xD9o_cY_EvHPZ0vVl6JRRFTH73Ue9_DjhCFDg75YHKH86tJggkwVg0eLWiXwlSzuE2nI72i_egMAo-NF29QxYQJ3UcZx3vbPW_EIVSsz4eEAcNuWonA88RtxXTNQWVKzSjlxUYj4Tar7nphGXSX8Lgt9idFg0n6d0m0pNQroZCmVYQMI_oT55IgzOCWHgwhZPqtYKXuVtwYFG0t9PHmXNHx_j_g1ttiqzpFU0NCDcjs9exJ7Wr6ko87lFQLkN1MZVAahYQE5uuQKld5zwJStM7S_nlY14W2QQUypQVVwJentAikzSvjoOZxDEdL3tKhhf6-QgloW8yUgHChYVUbuYpuKhIF5YQHK5z4IbSHOcPL0jTbfLuxoMg4Usuy2_3uh_fOMQAO8I4MpPNCe7WSUpAlj7bAdZI7WTb0wjSkRb9fHe9OFd5vtYQN6gmQIQdTbIitZvdZSohy8IHRGkMTiydAxPO6WtQQsH8fAVehb2GS_lgF3mWlV9eJFeXTtJb5UtPM5SHJ-XIsZYQNnaeniGbW6ComMw1Az-4okTMSLt4uRNcM7tykkvL_hoACxo0God-6lGeL6Yr2r1dUB7GjREcVibbWU3J_HofLRYQNzPzWtiYUp4Tkym-Rj0AM2rDvmZB0YHz9liW8QZxSf2L5ubvkdzQNb_Q9Kh5RTxt8p6e2DN9Iyq08Tyo2Vn7-9YQFlN9a28cG4pL7OVegqHlvH10XAadI3S62102gEO9WsASZfI0ThDd_VqITu4WNgC9jftXCRoQcLHbSof8VeV545YQICCrTBY65XeGza8pQDKIcgqQT8UQQH16GDJcLzoU3fzhNzbKynuHQSrbO4mQwUuk36CsHv91owiQwEeEHFDoedYQChntyiAO1MNZ_dTAh8MjbH1SH1PZv7FnFowX1KlWOWZZnqryB-G-vA5hnr2EI-QHMjZggljusNcAqNZ3mymzs9YQBWyn5vtIwzIP2FGLnQD6A46RoQ5GKTS3p1OGT4DW-4d3SyOD1M3uyuGA3F8bpaIYU96gB-2-kqFn-V3iu5XOc1YQMbLyi4hUcnTRkx-3AqytBsJGxPP1kU8uynGDCVpoc6k-2TPFwZWtht8HqDrJqvZyw1m57T1Y5EFg4Ut3TeWK1lYQOTfkK3ymnamWL6618NYlHm3acWc8ONsZjSo5oguvaej5IyqPBIcHnAamsAhysLiYi47Iro6lmQKeIAHBXL_mv5YQEsheb_GnwHXBsJSV6maDEbatWOdVg_CZqTKzt_McyVyW4iVFpKLAs1Qv6swECyze0vDJBVVH7Q8_GVFgQ6lsoFYQGYgOi2d-pOaqjS4yCqBMRRhsA0K01vsj96NL1e2YuvrJ6KHnx_1mABf4ttADwa3zq-qJEAuaWZcOOzMcHJ6hlNYQA4AYnB8APQLl20CJE3hlzNi0Odm4qgSIRtIaBMa0EPifnc6xMKpbYLTqrezVRzTDCxLvrORFqnhD8Wt5-5JcpFYQJ4qz27sPjeeiTgewA1DS-hLFmMRVnAhFxSmFMvA-hrpr3kbxfZH3uf0-lWTxht-eslC68e4_8eYs0hXRcwidIlYQMTYEz9NxcK-YPr6ulVwAlBhJfHVqTrMj1vJlZsi0uZCWITT89yjmk4lrgXJL95rIvP4vGldjb2O-0-DaUvXAIyCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};