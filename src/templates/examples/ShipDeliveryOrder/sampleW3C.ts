import { ShipDeliveryOrderW3C } from "./types";

export const ShipDeliveryOrderSampleW3C: ShipDeliveryOrderW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/ships-delivery-order.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "ShipsDeliveryOrder",
    documentId: "SDO-ID-2026-9021",
    shipmentId: "SHP-CN-ID-445566",
    billOfLadingNumber: "BL-CN-999888",
    carrier: {
      name: "Oceanic Shipping Lines Indonesia",
      addressLine: "Jl. Jend. Sudirman Kav. 21",
      city: "Jakarta",
      country: "Indonesia",
      email: "delivery.id@oceanicshipping.com"
    },
    consignee: {
      name: "PT Nusantara Renewable Energy",
      addressLine: "Kawasan Industri Pulo Gadung, Jl. Rawa Gelam II",
      city: "Jakarta",
      country: "Indonesia",
      email: "import@nusantararenewable.co.id"
    },
    placeOfTheDeliveryByCarrier: {
      name: "Jakarta International Container Terminal (JICT)",
      addressLine: "Pelabuhan Tanjung Priok, Jakarta Utara"
    },
    originalLoadingLocation: "Port of Shanghai, China",
    baseportUnloadingLocation: "Port of Tanjung Priok, Jakarta, Indonesia",
    grossWeight: 12500.5,
    shippingMarks: "NRE-JKT-001 TO NRE-JKT-100",
    conveyanceReferenceNumber: "VOY-987S",
    transportMeansIdentifier: "IMO 9394850 (Oceanic Pioneer V.44S)",
    transportEquipmentIdentifier: "OCEU1234567",
    sealIdentifier: "OSL-SEAL-556677"
  },
  validUntil: "2026-06-21T10:31:55.022Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "SHIPS_DELIVERY_ORDER"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#10",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 10,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-03-21T10:31:55.853Z",
  id: "urn:uuid:019d0ff3-98cf-7bbe-aabe-02e1be6d52f7",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-03-21T10:31:55Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhABOMHhVJmjjGYPJC0GjRpag_NgfdBAC5aebMl95uk-e4oNacpuyBHujDv8yt5-D87KDF4TEV8uwsaDu4-4n1qQVgjgCQDGFsy-ABfXK62DTD2eusWmtJ6GZiN1yRvSWrIwWGitzxYICcryhEQEdZtEN5fqXyFHTK3xwNAtAl_tyIdjAZv9pUJmCVYQJxyrN_Dg0Iqlx0JwJcjik_myF5uA_G7BKTFPMU4aiSwg47Z9SD5iUy56t-3XKkykrBKGZYbYwVLDB-7zvoS3-xYQGplGpGb0iS7Fx4QEVE58nyMLZE9J7WD_ypdg-2q3g55oWYXmvVVXvQW8wZ_RumUqwgMRJI3MLl3RDpOIR2gxt9YQOxV4I4GEB-SoTiGxNd1kbF-pA96yikwI7Tfm37QpbIyVl6OjEoyAdnCDrLxQIcFYrNDY7fg3IvmEzv3kfgLNZpYQIAijr2SE0A3QGrW7Ci8GiuYKkdkPvJk925AP-5KdOpYIUI0AkyYDjPwJpEsd7GumQbd_g461rb6_1Hiw30iw95YQHd8mvdFkeRbRrz-KRQmv_z3_gCK6n8lYXMOgSqKH2zEu63HQvG47kEbsqVnoJ55tvWnYxhdjUvRnPJCnJ1oXzFYQKOoz0O6GkmExa4YhftVBsCPbYM5K4dNsan3yzhfeGKQ4sRbz4V1TDGaB3LR3AdFjvzIfrVWmmJcjE2Sxn0eMTZYQA4tXv3DgCHT-rO9gSKv0bNnJ2I6ok8E1Hl85z4cWFE6bvRXVtzJ-pIIzyWsjCEbg_OchLvNEh-yUo6Hln3srj5YQOFPS1zl4ryDzt_4h9HixdRNSSBXOrl9dH1HuvJpRtKjPb5KnmdE0khc253e1zCz6X-EbU0K6TpSa3gyaicAbHZYQLqB98smSZFsa2Vvfzom5HXABnSo9fPf7KpX7oEWgbd--EGkIwANCfvvbYKnIhoIoetzscMApQ_molhu-UxiecpYQPgMCqsFGqP7DbQFQwEUe0XXo3WckICfkMJm5j-cMRwsYxZCpfI8cnfRExSH1qvPiHz0fYMNHwhHMIPrTWS8BCpYQKHvJa5BjyzdxY4m8C9Pji6hbQoKUAFnotKk25RtGmiDbkvrvzXSoqjJoJQ7H6jGYrY7KqZmoCYD4f0d6uXODHxYQHC5DZNmR3HE27Km1eUFoU9GmBECSNYZwMLCZ688NymqjxhRBi8azy95-EIwr7GbkISNO_3VBiGMz4RnfK9xoWJYQLAbHs-ORgTVLqMICh8ajPolYp8vvMq55zSvrEDdV8991Ou4D0w7KADgnjR86sdZT5SGPst-bX-uqHKhAt6ai-NYQIOM3qR5vvs0xMbjrpNv8rOktwkYQZNz1aUrJDbX7_2qLd1GeK5QFuTwAX-2N63EV2wyw5DyqN_GmZf3istSJ9RYQG3YCCrcIJLuckW4_L0NNVDKksPF24unqMI39IC5UyQ248I_UCDuuQFSnOdw1SharxhmiXHDmyL-V8KAhQnRyo1YQLe9m3CyN6uOkX5CoPc2wdQdMk8-vtCQuPUnKgBy_uTNhX4a82w57dew_NsdzttO9tO1GdzVrlEM1MAaYOjsG2BYQKnOJ2NNuY57Y_Gpi3Bh3PyaalcRtCxZOFPLuAzAssD3PLS_PA0aKx2OcYx-nARfjMHqHaOoAGqaMziOK8EWNz1YQNAcsvna-mmGf_Fkq_anXTm_7UloHqz5pbsXVZ9z4Tgw4RtB99J3pBv2n_T4I5D1hNBYOifj9biQw0lcDO4rz9VYQDEgnlhKrTj7VF--XRU-PMLYSFGNY3oxEoefIWffXx1MozqnUClEK1V98_NYvavlzlWDioZrIADRadWrXGsYgPxYQGtqxE1ZHR2Vg_M1VCbLXhqjVrcXR8wyNUt6pQcMtNpJU-JFL7yYLRy9uJS88GzyhewzZcMyLd4W1IpNlnVdu-RYQD_RPpEyOhDBGmrdrg_ZYOyG0XmYxYBn45oomzY4G6rzAuExDxWlgso4IY2s-aSpBJfCWM03oYBJi0g-_kOmSOlYQEfKpni13zun5RILJEnimURSiPpYB8NtquHxli_SuuuT7k4lALLJVs0GFfQsobqNXngCJlWpMDbbkS_jgXuetL1YQGgQdWakQcrxZaq-P5klc1veSZ4wtgFRv2H0mNOsm-pJTjZyYzj8BxARhB2EzzgUcmV-s57jWvQk-iWhXsDIjCdYQPQ0pECeBD30z7jVnpHblT4dfmo14dAVADHZK0vxgbJ7L3W2Zc8te8QueWv12xoyKGT_lvBZfdkwuBnc7WE1ORxYQDglXG2h4Q-JPLQIc_O8iOM31Gb2KqAffwf1AR-jbBZaEvqXLIpvUIC5fIbNB-GXIm9iYdyz2uOzPEBK3gwMXjVYQM5OgYHbzB1eNo6fHl1NVaPc1iGnjUdaXZnZy5OrLSKyB6knlyZiUhzB03TNEEUEopg1iEWTXUI7b1SosDLqs9tYQFtvZCdF9IU6SaE3K85Uux2Kex0mpxs7SGvHZ24Fb6M6s-qw44BjGG7DARY0We-cfOpS_uHo3Egkxl_wvgXBF4lYQKKbB8yVRUtthf_ntsPjol83NpVioQmP8UW6EhNrfiFIH_fvYemtjtW_Tz7bLDfMv28e03lklv8OT9Bfiy5IqPhYQCoZTx1qZiU-NbOcHtzmeeVbA8O6JAxEtbm6U6p2tczL2rabDCj-FWmXK4mAcJ2QEO1bhXAvubIeWKOZuydEPHBYQBD_O9TDMxrasa76qJWrmZ4jJVbJ9rvOLdpZ48NgKQB4KvvrS5UevdIorqH20PazBlzI_LzHNyFfroQvc9CsIZBYQHuJYkViJDWano8aM9VVKpE7Ar2QCNWPxejge-SuHlAG9UAiBslugWsq2D2CL_6iY0iMcJZ7BCE2TvDPnB78bstYQGTI93OvFPhUDkwFv_sTqkvuq4Jyt4BPo5CZFFdTyWzEVulh4AIoD08EMCe5f06H0dXnFz2grmm1UNspWfWILNxYQKV2ZUgyYHwehNumWC-neEUTMJbhVJaUGoZ_SsA3Uow6-1i5mfqUlVK0rZoJKeDge5U7epzWRfLigfwxtCjkEbxYQNG6rrNOclMYQHlbm8MGKsiuq3ybNETKTBJMxKEMmYTWquVfFe5VTc54_LVSzkNfmi17MN4POjoWu9Nyr7IqeVFYQKVx5Te-FaYsF1tClNINRBC0ubrUbHAlJT6SmVE4oYJHm0Q6Jg5PBOA8HVLGwg-w60aqn0ANWCep3BhrRppPTEhYQCA1kChnRwBqcVgLHvpuH__HYznY-T6CyjfDYU-qDobU143v9mtmW2Sfyb_jvoDJoXGGlYNdAKgQTLXajYNyfflYQE8NxP-tIpNvIqdiu58bu-B4RhHzvVYxw9sStoOJg8KlLDGqO4ms0QaCJmj86ScjtR5mfyxtj9lCSEOUBUb7xL-CZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};