import { SeaCargoManifestW3C } from "./types";

export const SeaCargoManifestSampleW3C: SeaCargoManifestW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/sea-cargo-manifest.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "SeaCargoManifest",
    documentId: "SCM-ID-AU-2026-1044",
    shipmentId: "SHP-ID-AU-778899",
    billOfLadingNumber: "BL-OSL-33445566",
    consignor: {
      name: "Bali Artisan Woodworks PT",
      addressLine: "Jl. Bypass Ngurah Rai No. 88, Sanur",
      city: "Denpasar",
      country: "Indonesia",
      email: "export@baliartisan.co.id"
    },
    consignee: {
      name: "Sydney Home Decor Pty Ltd",
      addressLine: "15 Warehouse Drive, Botany",
      city: "Sydney",
      country: "Australia",
      email: "inbound@sydneyhomedecor.com.au"
    },
    notifyParty: {
      name: "Aussie Customs Brokers",
      addressLine: "100 Port Road",
      city: "Sydney",
      country: "Australia",
      email: "clearance@aussiebrokers.com.au"
    },
    placeOfTheDeliveryOfTheGoods: "Port Botany Freight Terminal, Sydney",
    originalLoadingLocation: "Port of Benoa, Bali, Indonesia",
    baseportUnloadingLocation: "Port Botany, Sydney, Australia",
    grossWeight: 12500.75,
    grossWeightUnit: "KGM",
    transportMeansGrossWeight: 16000,
    transportMeansGrossWeightUnit: "KGM",
    goods: [
      {
        consignmentSummaryDescription: "Wooden Furniture and Handcrafted Carvings",
        shippingMarks: "SHD-SYD-001 TO SHD-SYD-150"
      },
      {
        consignmentSummaryDescription: "Rattan Baskets and Decor Accessories",
        shippingMarks: "SHD-SYD-151 TO SHD-SYD-200"
      }
    ],
    conveyanceReferenceNumber: "VOY-088S",
    transportMeansIdentifier: "IMO 9234567 (OCEAN EXPLORER V.12S)",
    transportEquipmentIdentifier: "HLBU1234567",
    sealIdentifier: "ID-CUSTOMS-998877"
  },
  validUntil: "2026-07-15T08:11:19.192Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "SEA_CARGO_MANIFEST"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#13",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 13,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-04-15T08:11:21.405Z",
  id: "urn:uuid:019d9031-e1bf-7cc2-880c-270d051acef2",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-04-15T08:11:21Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhApHhmGraDWX6CfKrpvVxwL-eeaayMsdN8hi-P9seAI_P-fau8kJLpJRas4MY2Au6fd10ZVubpJoZ3CKB_6thsPlgjgCQCarNSvEeg_1FhGrqdK6RW5oAO8oBYSLsU4WM0rmuJCn5YIH58A1r3MDJsfkUmy9DtEJgFbh5_8mf0RjKolHw54mtXmDFYQPoowkAFLaZOYECgPvtMYPXu17nN6rKpfcw1RRqfs9fgHV6c4-4_VcQuZ_VMMJGnV-jWY5dQIo6pwoynMnW0iztYQOwJN6d9_RG-al8L8UxxCWbd8dRfrjbbtcLYq7gNOUyaZqUh4LuDAFzMdK2AE5Wo-HaGi8qWi3onCiLHMELrpxBYQGcRQdgo6zVqM4ThOJG6U7trJjIkiuU1OQhHe-W9KjQfjowOQa6_ORFi2Id8ldUf4uTrAhp83cgvuwG6sQjUgORYQLLQc-YG_D-mdWgTmEeZpdaD2yBH3MiIsgWQcU9ij8jtI_td-QKUThQJofIx8n6LAJ8BU-72L-tAernaMU3f6H9YQJVh6NPOdkcayys45CeTZk0m6p7yYfzeHF5FaYblav7u4xhyitxSLGYtxZHYRpZCrhZRbJnHW06HDHDuBwiuVvVYQOm7S9aVxYdVnrgCGZp0xYVxwRslJycVPgYkaBcZ1jQ92UqvRKoNKvCLbS1hUF6Cg-SjJQNWESWx-lOikOorfVlYQPli6xjyzZHRgmKzuiRHNZa82_bBo7r4a_r-klLJFy2RYmQe7vCVGnY7Wx106bj7XhOhSRk-pTAnEEx7z6_Is-VYQCTJJPTrCAV11zm1bzJeN3Y4MFJkr2SbcBhANXRD7zhjnkDLDY8WD5hpc5KVjIcSV1zbILtDfVGwCJOuNxZjYUVYQCisFfS8p953k0-97YqbQEGnyjmRLB2e-62KREKjtRhZvld2z-a6xc5nwFZGQxThqja5ovaNfg0FpLiim3FYmEtYQFB-cYD09449yRjk_ma_InyUyMjzdgNNYiMNXpakT9VTnJQjSjG3lp1YP-f4gnH9ecr84lQQ-zbEa2nSCQFSujpYQMDEG57JNXHiVPJJTmyqcLKT1IpWpDAEEdPM9WM-AIbL1oN6fU4PBlLejTd2QB2v0YgJrOds09scYhqiswmOFXRYQBzSZ-pFz2sAWHfRagFq9YdgKQZmn7cTnUXVn2jeE6G4fBPp98NH67tQF94FM8toUJDfb0C1HgNmg3h9u3tbnMJYQJgFoNRAL-wRs4jpc6JoTCbmLz3OH3Vh5TFNE07irKWS4vxrYJBljeWYuoyic1NdwnfI8zMHaGNc63SM_O9Z5EZYQDGxRB8ZjxZnorzU3zEcEJADUvHrFBgIbpcE3A0MDB_VbmUsvTvOZBYm79S2KuGCO3mZZZ_lN-CUL4O4xhYpA0xYQEvrAqeZXbkMPocLnB7YWDiXTHTxa6gm_F52Z8BY9JKYltF_yIbLBL2Dbg1ghfyfRzB-gQubBbvFkU8kmXqVdEdYQJYL7nwcNVYpk83H_a6QDYOX7Y7xkvqUk58XLGMa26L3uH0fEvMuGNP8BihSjiyKQ8LAI_Pp0gy_q2iNCiffG8FYQH9A_YGbLKVWv-G9tNUnbtjSEPRjxecNFJSedsKKRbFVUNJSr1J3C0CQ8FVh4hKb2Z5uc1JxZvSh9ysxL4XlIJNYQDnTI26Acxts-ykVsxFCzTUD63oNSxYpq72okWVqJruZV6L7y_79qtNYP1-iow3_VHJBa2cPqOjcyaXaRm0PZBhYQAllvF6MquTpMgkVM4kWs-vaC0kX9TQZrgB-4x-3y3sQUv4SMzk3CcQ4Xnxagi96OLCaqsyxETkjUMeY3mXtddJYQBIANiTplWfLMm2HN_scIn8bj0FMxEPmUQaEfHOFKbiinywUgamAgq35X1k4zcHOEw2ERic74Rc3rKzBhec5RBhYQCsPFkkF1ds9_LdiDl8ibUOHVxT8FMtA-0s_Gpy5K5x_IFrEqy1IYSbka-yESXlwqqYdPGwGa8c-m7DR4c9KPrFYQF6itGOfdT-wBM7FvCIkKSYPoR_Xsu1cHiQ2JOabxGzGQoafioAFSK-1gvEmZSyccb2sTfyyGYHk2uXEYqoyuXdYQGmUcftupy5Cadc15dcyBIU4XjutkFFIjPh2prloeoQ-lKq_oOqmYGan5cJqrmVCR6T1k9CT903x1FpcvpcTjPFYQMKtr7rPjXWh3cAYcboul3j5b-hJZsftUXevcAl_qeBuBSQIFz6xHhzdbSYgfGJYue3fjSm-_5j5y3jK7T8sIPxYQLxgPvzoUF3LB4h-WwHeZQq0OApKHDL9V3jMzTWeqt2vFJE6VGGMVHfhpCzs4IKnhLbhppLBPnsb5BGcAGvi-ZZYQMmsnYH4y3bUHcto2tEiVRF89KCamPfszRDke2kfmN72kPpDVdE62vEj75x6q1A-yikg2OiehVfCBQWZh83pmPtYQGUGTOeUxcAzG-U4yZWusWOmz2P4xL4DR7U1qnNNn3BUvzJK12wNkd_xZTkPj24tD4MJsANuYSefDDOV6zF0qHFYQOtV_KMGLuW4dKzqFKAXgI7pZw5U7alEOV0kLc1M07Zw9h_yfbLPVpoEGKPAMmi9J3D58rGYf8m55vF9X-J21t5YQJrhqhhcnpfwY9M6a7FW25iIUNU1Vju293K-3PhxOt3VA4B62Gs-HBss2JldW4lPlc7XROCLI_LOXLmaa0RRh49YQFPmSc_Ion-lcujSn9ZR_PsuMRRSE5vPOVSQ79I1b6dDwchNmIrEcdQClDmW86IgElXNxl64jCrIm5SZK6XZtnpYQH0bi4XdIReUKjJ2z50Wd-XbiwA_MScTa-08YqciZ2nx6x3uYn_RAyx4JER37bucBNXoRPBZoMzDKZ_e-s_QALtYQMrgkVpLxGrQU1-0nLgEx9I409RvN7IA_Ji2JmsShmJlSKzAy9nNkdBEu5_sLQLpYAC-rAX6FFXpYvIpqvwmMBtYQPi4XQf951FnOHh43zYvDvtJ11Q0qIS0DiHjOhU0yOzYZVOJtg2_Ncxl9VndGF_wYlGyu4spyDGNQuD8j-65n9xYQB1gxF2ipqPbZK_6JwILe8MU3DhtGQxcp_3yPUj_J-aBQn-ZvrZFwc5qBv9fEAYGSo-60sq-Ey-_Yu5Y3SCIvIBYQHvpMSIR3N6fOY15mmomlQ9ntMA9X6achJJZSuP3EidZxshEi6HSimr7mBJ_n5e9F_HKFhUEOFgUk1cmRbPagzBYQLr6OYpu6ic0cRu0Kq4hONSgRY8SulY8hQBxmxtL1Dh389xqDcwoFHI8gIBMPeUtdaZTz31e9fwYDTC7d_KmCUdYQBpLx6enh8XNPP1BqetlHqq-t1Hnjbx0-MyUC1SVPLSHL4PzTGRjSisp594SS16_vcAYQor9kvVXzSV3c8rfffxYQJe8cIyJnrAy1jLgjJNuRXENikxwox500xxgdTILTbDIsIGatX_Fl3NXIY9kTFOoXsiqyvjMuvzSywrI3k7k51ZYQFArFVkLrKOxIZ8KFurs_V43xBaLoTADr_yxYDMjk4jU101nOuQiJpyXc81l-yTt0KAlTUrSJHkW6U_GHaatYuBYQBmbsYXnLJrhHOzTEjhCp2pZ8T8vPkwa6FgZ1OvyLQ1RxMoOFCbGIcbr03x7R9Vz_wMoYaX3xNdg-nxABrmZd1JYQKT176s04xJp574Dn-Y10qPn6F8R_Ng-crbRC-KHM1bYSFbn3cvORnxAGQqQnKfQLRDp7mQDyqF-yqxW1W19XbdYQDrAnXpjYLQ7eoEH9p4zP0VJ-QsqUeYFcb6dNqdA96DhOMuICdVv6VlDE0bAhUttJGmK36lfG4mq9g2FqEPQHz1YQCwinyUqUDmBEqp5T_-U66uexnWhHoMClnNNv8fxNYjfj03QC91iBKu5nE8KDpaynJBlFQZI8u_rRvh9Qe7980pYQKTvsVw5YoSdfwS85uu9xgxZ7Mtr1Y7k76fwU_QvaBE61agw9qDMmVUKi-kx1Vxl3gx_OrT8a5aF945j9XXO4FNYQB0YFUDF67E3eIM6Fked4ZfRFH2CkQvDcbo23AFZ0FlAZmNIVj-FzCcpsGlyP3jVPpahuN0xLVQj4qp1FWwHwdVYQKLWCpOgsW4gGvCDNGw5Y6kytDf5V4kjVglRCRSBiulpXRSG06OMs-QfqPCmfPytYQpx_HRo-Rn6fK-jLuLYFzlYQF9vVTPQDe0togkzLo0BpWvHsVOSiPwSloO6A42vCjhJwnd_sgX5gYhrWaMMkc9WpFBOiZe2nf_qjJLgMxVlH0lYQEEQ0EvtOzRx3IVqwsqRWE360bi7kTOIGmpkI4yJEmOiUykRIH_OJOahAe5ZJUYQe1bGcYO3PlEbGX1mhq9QiP5YQNOnDBs07AXM4Bj1wJ4WHqrwzJ4v1_c4xMgH5MLfZ84GZ5xV_sS0MdKkOT36M4QUQwNEOOpbulnZg3RnY80di7KCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};