import { InterVeterinaryCertificateW3C } from "./types";

export const InterVeterinaryCertificateSampleW3C: InterVeterinaryCertificateW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/international-veterinary-certificate.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "InternationalVeterinaryCertificate",
    documentId: "IVC-ID-SG-2026-0519",
    shipmentId: "SHP-ID-SG-882211",
    approvalNumber: "EST-ID-5544",
    permitNumber: "VET-ID-2026-8800",
    issueDate: "2026-05-19",
    actualDepartureDate: "2026-05-20",
    permitExpiryDate: "2026-11-19",
    consignee: {
      name: "Singapore Premium Meats Pte Ltd",
      addressLine: "10 Fishery Port Road",
      city: "Singapore",
      country: "Singapore",
      email: "import@sgpremiummeats.sg"
    },
    consignorName: "PT Bali Duck Farms",
    manufacturer: {
      name: "PT Bali Duck Farms Processing Plant",
      addressLine: "Jl. Raya Mengwi, Badung",
      city: "Denpasar",
      country: "Indonesia",
      email: "qa@baliduckfarms.id"
    },
    permitIssuer: {
      name: "Agricultural Quarantine Agency, Ministry of Agriculture",
      addressLine: "Ngurah Rai Agricultural Quarantine Station",
      city: "Denpasar",
      country: "Indonesia",
      email: "vet.karantina@pertanian.go.id"
    },
    destinationCountry: "Singapore",
    originalLoadingLocation: "Benoa Port, Bali, Indonesia",
    originCountry: "Indonesia",
    arrivalLocation: "Port of Singapore",
    regionOfOrigin: "Bali",
    baseportUnloadingLocation: "Pasir Panjang Terminal",
    placeOfIssue: "Denpasar, Indonesia",
    transitLocation: "None",
    grossWeight: 1500,
    grossWeightUnit: "KGM",
    netWeight: 1450,
    netWeightUnit: "KGM",
    transportTemperature: -18,
    transportTemperatureUnit: "CEL",
    quantity: 1450,
    goods: [
      {
        description: "Frozen Whole Duck (Peking Breed)",
        numberOfPackages: 100,
        typeOfPackaging: "Waxed Corrugated Cartons",
        shippingMarks: "SGP-DUCK-001 TO 100",
        productIdentifier: "SKU-DUCK-01",
        hsCode: "020742",
        nameOfAnimal: "Anas platyrhynchos domestica",
        specimenDescription: "Frozen whole eviscerated duck, fit for human consumption."
      }
    ],
    conveyanceReferenceNumber: "VOY-101N",
    modeOfTransport: "10",
    transportMeansIdentifier: "IMO 9123456 (OCEAN BREEZE V.5)",
    vehicleRegistrationNumber: "DK 8899 XY",
    transportEquipmentIdentifier: "RFCU5566778",
    sealIdentifier: "ID-VET-112233"
  },
  validUntil: "2026-08-19T12:26:31.236Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "INTERNATIONAL_VETERINARY_CERTIFICATE"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#37",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 37,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-19T12:26:33.857Z",
  id: "urn:uuid:019e4033-c006-7ffc-b01c-c211d37166ab",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-19T12:26:33Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhArT3jNHfUHCNN7dz2GQxq_NPqsoAiZWUqGtca6NXIqiR3BuWgcRMnmsZwML6Qf17fTcXlkYFzlcNuWmWVNapfalgjgCQC1VauV2lziUD90YxoCnInUNh_uiXSbs-lNIXpdvi0PctYIJAArM__--X_OfPBhg5HAQJW_G-8PPaWoEiNSts9pdbZmENYQJ3Wu3KOv2Ei1HmBvhvuC5vI-w5DKQ7PKDnJy7KirxgF75SshnrrNEclFIxF33h_t7-E4FZAJFRoxludHnlmzJhYQBq9xOpkPUwdbEM6jMA2ZDMIOMUkmvtvUhEAToUdHAzWwSwFmVFOh0k3EoFYgoXGYJqPP-mnG3Bwo0Es5NCGXBVYQHw-q0CNJyCyLDs0WAJ5VdmKGhulMQOQdVjpVlRnT5y7iKpxKkecvehp-dUk81BHIJD4PduphDszqHlJ4IMgSMxYQDAYCmwCzzpTJM_uYGvLUoY8sHvFY6Onchhnkt2ETbyzvf7RrBVrApJt9XrYOKtxM9KJjehQhKuvL7npncRGF5xYQOSpoiDnIEjt67ND3lU2_uMKYGg2EWYHDt5UCP13JST8d2kuK3Fm1fTicuxzIw-BPi2qqbH32GSezrBjeUJtwDNYQEAlIIb9IGhDRmWCC1yAmj9OljoaA6P93CuDcmwVCfotITQlO1s3URnTTvvtQnxIYZTdkwyI2WVYK0A--KKrf_1YQJLVHcEKtpjE36MlsIwuvEVyRYr-shqlXmuDYIlaav7MPnrOcjmtY2C9IJSCBtSSveHfgjbid7ykgojzh1jfq1JYQAphSsQv9ri_m8ezB54eyBIgIF1_qdidfFfK9sz0X8f2zwz2P3VDG9C6evkVVf-3XHxrDGk_mCKBc--RN-4kznBYQHEYfG8JrUVIs1-UFh2h8WIQXPjGAD2sRAfYCCIlpEMEIT8hYqTSWRCE6rsi_VOQ2RWUqqHAelfWXJkrr5QqPL5YQDlmUSPdrLTpqcFBu235vrM-kYhTP81_ahKprYkCVAnkNs8g-WEW3EkQNkn8p7xNVSQMUzvFMV8WMTB9fBi2H5tYQH6_paABGCsRV_d3roFPBJq4VASSkit83IqrjauYaBhkR88i3U2FI8XvJ8vVT1jTZwIc45pAXJrBVLWjdLmoWP1YQNthkyrnD4OXyQBf1F4vOUox9VILDVcy3yKcrZ2yH0_XNFLhlUEcd8_t9EULOwiTF1iAE1PHmUa-queOxiv97xhYQF6Hdw4AiqZhMvYYo4DKP2ow65y1wrQRSst7kt8fN_d70gSZgd2bPAAkXvrI4IrkcJRembtsUD47e50BgjTvZz9YQFdD4FJOnhxpen7jqEmK2mVA_ZSgo97tEa4drM8INNOKz7LmDRnF5g4vYZYUizModwaPwng3m3CG9ST5V7TufUVYQI_x3F8krdNcMXQkd_iQPynQhUYQeSB4Ayj7xWo9abe6IMmehP2g932GtOgWLvebUCMjh81NsUqQgNtOB_z6369YQCit2hJZNv98oG_UjPiNu7T7w0eWywQ6jdI70y1iRthIsCOMXNAthKdbFC5biKXmGCvGKgkHrjo0rQ3CLEcm1C5YQLlesn6kp_xiwCGqVq0cP3MdlLwqXkw9j9sPB5QwlapAAZs3CHmzLcH697FHMgLLXMf5taadJC32_GQuIh9wVV5YQLUnbr3TfWv1sdNjXyurVG3BAVP53wOk2_iPmHD5Vcy4VlPUM_HOw63Mmb3FobZslyR-gVbo9sd7gdklX4A3t91YQOWNg3P331axv5s5BayvgbLObhNgzsdlppQuuPU94hdmdI8Mm1byMKvKJ6NkgJNU76LNl_2NlWuy-uvGeIixsERYQB0awW8q_GNRYtnO8fGwAGqq9VkFHKQCLwSiQyF6lqb928hM7QOR1ujgpT3ryZmZJZ8hm3XZnsI_eDc1M3-qR6dYQFDvjqSR6X7L-TEpQp0Ibl1zrA8NvDMr67l9qhCX4dkFc_fNJkahw84rVQ5IjG5KZZ5WIZw91ve86OvuGyuCQVFYQEth2i3m-a4NouCiPB3eJTbNBFIcP2Yw62RqwzHUJsNmhB-1SeCkQqs2vrAesOSifIqBjcYOsiXnmJw5pRmKtNxYQDVVBPbBlGU8MZQDCDa6ltDkMDYk-VZVdSuYkU3d4x2XHvRvRupFWdwPnFz5zYB3K2gb7A_vI_In2ipaBECrKCJYQAohHm2uarGpEbX-PDobKntBIAnw6lExI-dZ1zyrhU8fCtkTAKScu0ENESYgxmKuRdovQofRfZRRFsJuMicRyddYQKqu69FBaeICneRgEjx4o6oIeKlyiZlD3rhM4ciDxWZK63cn63KBz3NzVrRrQbLAFDgXad9NIROuP-gDwrbTSQVYQLO1UJmZk2ZgzIQntspqThKoA6wzfXiJmgNoZURtbQCQ0xzNXpn85sliv1Oo8iCGWXyfoM5FYOwcxMtdVKcJ-NxYQGzJs_3W5fymZ7LEw7b5uuxd7TtkHap05WNfiCuPljBxm9MxOASqWcqqd3F7EPH6M9Jz6ONGJtJJgUvghlg9ctJYQA-GnjbPQrU94chO-ERr1gYeSus--LWx-wI7VF6h4EOrBaE3WMkx2k6Yk3ZyMt3jNvgbuD_xFRyoPll3YXnY56lYQHOcKoeqCCQFdCzdXMkW4Y7fOepOQwlbO7_VkO5xsCJ0HeIvCie350N7_bjMr0ldnRO3Q0eLl4brta_pAt3KLjpYQH5YYqj-ip15IXFyyrR74ZLd-dyBv2HvNKGoQzTZCM-xRxNFq6uQcrecZyKrmzvBrAd-MqZoIDVj5gtlwpQhZ3RYQFnsLV3D-KAsBvdYdikz3CcI6XwwkEa02glZz4rGAKvgbx4usRTZile41f44iqPCoaSWPk7w6nTE_pFKCtwISMdYQHKgUdZc1MYoQQLYyrT7gdCqpIbdxEty7mUj-mKM1GU-dEZdlFTN3RsYLDAPEuv5b_9NkD6tqncVsoHW_b63J65YQMbYV9MgcNkA5utXmmpIv3ouTmWcxEI_xurJcpFxL21Gunu15D1qJdMpwim3qYDyTcigbvzENlST16AADVGqtRJYQJ4PROEJJrfbx8EE6dZcHQSK5hK2UuH0thzcDFvwOfbWWI4RNTmEl7A2hjO0PQ7a3kpWlEm9AIgGy0VUsGQywq9YQLhm2nep_Rn7Yuy-nde3zVqrG7epsemIumJ5Ls0zSjmu91NfTocROF0YOHWhpoKCWWI_OvxaVUUr9o4OLnGZUUpYQNEWx77-AaaeVmHSo2UbCCZtq20O5R8k_l5jSRgS80VIvJDrRPqZ2bsxvsiJPgLMv4bpH0UVjzHxUH4uFS2IFo1YQPTLhWFnOKiFFLq3kFvGw83CD8joPqYw3K0R1WIqQUxlISYxJ06J_6cYtTMwJW4_ZXYPrQ45ERkOHr6ITcm0WdxYQL1iSog6rQbmKjKekQivzAhrWt1m5fJ30oGCpI70rG5tg-IYztAD7KRm07cbVf3xyNW47-K9AplNMqyrUSrhc-lYQErcJysItkh-OEozmG9bb_ayXJjRKHZw4bqLtxBi7aKBn6EhnJrxQv0JDclj772Zl9Vo5qO5X_idzNaBE31uxWZYQFEg-sUNZaNqXhb7D_lz46BC0MyLH3YuLh_d0j1UzQBA7SzlN0h2-aNKkHkNvXnr3X4rNiD9yYo0uWg2qkNFUTxYQMT8S_Oc4Ski3eFNI9RoKW0edappiA8uYpVYkyzOF7VDmvSAnQfmsbrR_M2pRMDUGXvUAX3KbgVVSQesQz-6bI9YQKAJFnp8-Bg1t14qAP4HPNPii-52MyE6HXIC7gMC5lX8NPsgL-HpKVYbSS7bl0QwzUFrMu27-W3wjLgNSNdPza1YQKl_LQaiLGD1gMwpUtvF4DT0OClhnn74pE1al4KQ1VictuDMhe5xadI3mwa4MDBZ4CThB_uUtvwFFAoE1r4RRUJYQJbqDbb5e9STNuQUVgBn-QkP0bcBz8pNI1WMonXgeMFz0fe1PCIMNsMnkaxOc-8GO4KWmOlTgd1qOILJSsLaEOZYQD82lZRmgKd0R38GOpb7_MrS_hyV9VQ80c39cdYhYlgbNebtsXRpAW3BsOj6A9liMuUhldF_FgD-hlramKdZ5VlYQFZ1GAhWUF1VbMrLIbOcCsDiLTnpFHTkYe3b7b6R4pf6gVfagYG83T3ULuCXzdZ_HzjHeA7rmDoJgoZPVeDHerVYQBlMX5cu8kQjB4q9JFpUwa7GL0jMgc-R5N3B8-xqS3XqKldvOSR5b7p4is0DLFKOULfGNKaGGlrMKX5kCRs4lxlYQJpRUtgmO-C7_hsU-1qJwEYfAKqN3bgPl8AhFekK1MTIHcjt8I0Cg8Ft3Cc2qaIZVreji9KTt7R-aA_AVBTlm8NYQLpf-BnNK6ja4ddT2jBpjHxPfe7lyvaO7CA-thCf6tvgZUFCJ0NvLFoU-GyAX5nsofqJ-7X5QcoN_uyi-Qh1JRBYQMWbPqxKmw4mLYpOcoPG8Q1UvEjZQ4IRBVGLblFfxdz09NKd9Nc3r7CDeJNbIrd8JzYts1wrmUKuGFaEtb8UJ-9YQDelHOMYKxHKsKmsqbPdUJtJ0edECM1ZX2KNO2pwRSqKJSbGgYdytGNCoaEGg4nT-srzElqJQ-xONTZH9126vIJYQFSOEHMqchF6bzksgYL-0vZMMkpu3xbaAcA5cuy3rHFZPIoPt0mt92Iq1ONXyxiM_Xh70vw7xRZIiwZDRkqkrbZYQPbTUbzuNwe12-5nhkF7slha83nuzIRhma7QGvVldIULqKfwjUM53WlfuvsQyjnc5vzSQM6UrEDO8PQ7eR7YiSBYQE4PXHNMSZbwIvSX8YnsnnxkSr5IT-6hL4zSOTkszFcIIfjV6mZQUwYPgWBuzoVuETmOQd3o1gulKgETm16w2aFYQHKImBPLQ8CmN_eAZRzNp-M4vLl_QvEC7nDlCOUQOtZY-Ai9rLoA1NCeiUQC6JDsFBUM23QrJogXM_A1jq3vbmNYQN1KKNUtdtPkbTf6zm3mPiqaCwOvOL2yl87SdQp8HGfLBUkd_0KWthIQqbvXnOf6yJXlH-mFS5_QUB8EzQkBJdNYQHXDab5BuLE6Rgws87awIHnW_JVgwJ0itEcpD_oBqltYT7jBr3iftPwzFoWqlVg72tGCsXREuVpEjkoWpw2CDIhYQMx4FzXE50ePxlPCt6IsME9nhH31wi8LUTtcEfBdKZ31Mkdsfj7CwKJFZsza-680OawsMuJ0yYkn4GdrGSgRqXJYQOL41CNsd5jrBJYnHv7PDtM92sFVJhzpJ1yxtiNP3kx0wigVIbsjRbkuqnv6iMn7mbSoFB49B9IwDmFI0CLWZUVYQMwg7LsladN9-AnC8xqMJWRCSBjBxR7t1APVe7x2BE0_HOVpVXdHNb_7C10SV3BOVM6PujpbJAPl-IFLqlSLZm5YQDHtPjnGpopEx-SDe-kjc6LeNUu7T8fmMYK1c2B8BAnx5UznkKP9aAbEJaCHm-bnZlgiplsh9J-G95zRYliEQXZYQDpTBUjIJiw_WV95YiukIslB7cKJOUUImSGuIdehhX9ga6YqrKppD59MFmUcrfxuaP9lQ--6lfL46d3etyhhq9RYQOlRduWd40wYgPGAyO--xQMCyBkde6YQDhvx-z0Z8D8axIR02Y4iMLR0_Hlutt56fzZ2oguCZUul_vu8P4fluvJYQN-yYJ1TqqEgnZ-yA6HPIpVA9c6mgo8h5WQwFBONuKeCI56TDm-0yvxOwvDTkDaZRg4rY6IO5rq4777X2u0yCJVYQKHLphlA-OrOtE-de8ZDn02136siwj3D15LIbsGlR1na7m1uR7HP8EE4estDhaWHrPTijBY1P9zR2K-LSEKHTm9YQFKAqvOFI_eGAxVaN5zsjPE0lDWeZJZXOLw-bAeLxM2hj2Y_RejS_gjkGoKXMmChUOVTE-a1ExogqNwXo1bEUnlYQJCdtoTBnSxJfIZrPLhtRUy0QgxTJmhlOq4jVwIxkmJ2apZI04RZ0c_790Ltcw_1hkyQ_qsFZAtdDiYsQCwtcfCCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};