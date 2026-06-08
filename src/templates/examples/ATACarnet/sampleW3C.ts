import { ATACarnetW3C } from "./types";

export const ATACarnetSampleW3C: ATACarnetW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/ata-carnet.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "ATACarnet",
    documentId: "ATA-ID-2026-0522",
    shipmentId: "SHP-ATA-998877",
    customsDeclarationDocumentReference: "DEC-ATA-1122",
    goodsDeclarationNumber: "GD-ATA-3344",
    permitNumber: "ID-ATA-2026-999",
    issueDate: "2026-05-22",
    actualArrivalDate: "2026-05-25",
    permitExpiryDate: "2027-05-21",
    importer: {
      name: "Global Media Productions",
      addressLine: "10 Marina Bay",
      city: "Singapore",
      country: "Singapore",
      email: "logistics@globalmedia.sg"
    },
    exporter: {
      name: "Bali Broadcast Services PT",
      addressLine: "Jl. Sunset Road",
      city: "Denpasar",
      country: "Indonesia",
      email: "ops@balibroadcast.id"
    },
    customsOfficeOfDestination: "Singapore Customs, Changi",
    customsOfficeOfEntry: "Singapore Customs, Changi",
    customsOfficeOfTransit: "None",
    carrier: {
      name: "Singapore Airlines Cargo",
      addressLine: "Changi Airfreight Centre",
      city: "Singapore",
      country: "Singapore",
      email: "cargo@sq.com.sg"
    },
    freightForwarder: {
      name: "Speedy Freight ID",
      addressLine: "Ngurah Rai Cargo Area",
      city: "Denpasar",
      country: "Indonesia",
      email: "fwd@speedyfreight.id"
    },
    transportEquipmentOperatorName: "SATS Cargo",
    permitIssuer: {
      name: "Indonesian Chamber of Commerce and Industry (KADIN)",
      addressLine: "Menara Kadin",
      city: "Jakarta",
      country: "Indonesia",
      email: "ata@kadin.id"
    },
    managementAuthority: {
      name: "Directorate General of Customs and Excise",
      addressLine: "Jl. Ahmad Yani",
      city: "Jakarta",
      country: "Indonesia",
      email: "info@customs.go.id"
    },
    destinationCountry: "Singapore",
    consignmentExitCustomsOffice: "Ngurah Rai Customs",
    consignmentDestinationCountry: "Singapore",
    exportationCountry: "Indonesia",
    originCountry: "Indonesia",
    placeOfIssue: "Jakarta, Indonesia",
    insuranceCondition: "All Risks",
    certificationText: "These goods are intended for professional equipment use and will be re-exported within 12 months.",
    natureOfTransaction: "Temporary Admission",
    typeOfTransitGuarantee: "ATA Carnet Guarantee Chain",
    monetaryAmount: 50000,
    monetaryAmountCurrency: "USD",
    insuredValueAmount: 55000,
    insuredValueAmountCurrency: "USD",
    customsValue: 50000,
    customsValueCurrency: "USD",
    unitPrice: 25000,
    unitPriceCurrency: "USD",
    goodsValue: 50000,
    goodsValueCurrency: "USD",
    statisticalValue: 50000,
    grossWeight: 150,
    grossWeightUnit: "KGM",
    netWeight: 140,
    netWeightUnit: "KGM",
    quantityOrdered: 2,
    packageLength: 120,
    packageLengthUnit: "CMT",
    packageWidth: 80,
    packageWidthUnit: "CMT",
    quantity: 2,
    goods: [
      {
        description: "Professional 8K Broadcast Cameras with Lenses and Tripods",
        consignmentSummaryDescription: "Professional Equipment",
        numberOfPackages: 2,
        shippingMarks: "GMP-01 TO 02"
      }
    ],
    conveyanceReferenceNumber: "SQ939",
    modeOfTransport: "40",
    transportMeansIdentifier: "FLT-SQ939",
    vehicleRegistrationNumber: "9V-SMC",
    transportEquipmentIdentifier: "AKE12345SQ",
    transportMeansAtBorderCrossing: "Aircraft"
  },
  validUntil: "2026-08-22T14:59:04.216Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "ATA_CARNET"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#49",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 49,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-22T14:59:08.902Z",
  id: "urn:uuid:019e5032-85e8-744d-b47a-1746ae0e2aa7",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-22T14:59:08Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhASPpFt_b1rb30PRavBNQyxAX5Ydp_3PoAy0EYQ0pQIwebES8R7I1DVfttz5f_ev19hMP5OVUaQ10QZwzUXJ29KVgjgCQDrbxtp5Yds2D31_Rrw0XbAsR_eFI-JO-75HM1ylFwq8dYIAOrE9YUkce7fKuF5dGO8PJ1LSr5Y9lL7lDsAfNLy94tmGVYQC_u1eiAHYmRRjMv96Mvz9pYvXqjzFSbUy5CUMNUJaaYqCS7wNPwoIugHVbd3Ucu0-QDySmBrQeHDaU8IF15Y0NYQIJ6bOS6F401j1dretxbBne78Z9UddBCFKGOILlDbO8Tgs6vRTkDNR3DeWtgPHEvKnVqlK48WQ8IB-8Uao4SlXJYQE-SKIWgNrQATeAHQGwP1sT6f8bgflW_R4577Di7ZEGEZ96i_H9jnVV-j0BPCquDVXR3ZU2xZ7hpDbGYSBfzpjdYQM788yaKhjam_Jp2a-aCkyoBCSyL4gUCK41zlsUCwhdHrJUksECP0aD8NwGq7unqg02HWnXpkL6QecSkWUVxZz9YQOmi-gVXWG5XOMN5uitmiIP5a_jgt5uTMUbW4lAs59bhOO-f4BLMGSKfWGquh-ygAgqSxDASvJvUL9tTOMUzQGhYQDqMoJqsxtfCm_OdNBuOcxXzPaEYQJ-bO7k1EYpii6xRk6jZZE3BwTPRCsIf97QO3bD6q3vjjwnDy0aIFlCjvnRYQHB08sM9QziUA1QxfC5OPmqL16DZ90MI9sWrxiMgyUUYJJbrNyMSPQYSW2pe4PMsz8f8IfSy8PrrXCmtIamvXwVYQKxFMkOqYOI_9iGOsCwqv8ATMNa6BQSMyXTEd_afzV3WOXjiiT1Etig1IhBE7aLJxeg_FMl5fVrwwlTVrdUcjz1YQH27RG3oE9DKhoMdRCGvK8nq0FqGWHaGlLnHPnTXucFPw7WOXS6pmR1j_tEhTjTGWlVygd-A-YJCz58OLo32ZW1YQMfYmar8_BrXRBpNSZqXoiXDRlQVNvfT6HHE1P4wjL6FK1MDkPsNenQhCU2d3Upl15xILMRRw0E-ACvO77RzPZZYQK4pKFfxNuchs02suwCh5cZOwZpuTIftfFDFoNnnOYTn-KBWdrZRTBZoZJFT0XleH6WkNucV6y1VPteqeGbrM2JYQHCOdW2XAbrX_ODgOogL5nYr-J4UbULVkL67BV1eSAW7-ZhUadJxiqeCmWiggREF3_BjPNofi7u83a47kqhnmcBYQCROXWxENJ_rmfI8etCfOPy0zwmOwgj04bOJMe7O3bujpjRjxMgFbmf3E7prgHpd4Y1r52dhGvADhoCfaAL6wUtYQLp3wi9HHgCUnhaUx9gmJ3yL-vGu4KBZIVRV-MrkeOIE6xZFn95fM0IaonQYHeT_bZpCVCXhhmT7urGuh0L8ppJYQAhBOkJKTd5C7BoGDbKOL9hekYY-gvcWsT0YVFc8aqcgOKKnDblFqb58_ewABefIkqxPcJ3tyTONgTEKS3L0eghYQE12FRLtVxAFv21BK88JjEvhi6kD3P0et5iQku7uDPS-ZqefszvNgQP-5f30aHVHLs0zQ4DxYNGDfihjcASB_hRYQDrj48hm-FbtUhkcylPpzoBW9Jms-Yt8q6icXB1V9Z8vIDK7Ki_X6dPX9pMdS3VcI5j-SGdqNFI1ypD2HvDnU5BYQPoaAwzTis6bvtCpK3XdvfTIoivLMrJg9mwbZ7d0TQ9tqTqaDN92VAyqi10zC2fwvqnqrep99-n6MFXz4tCl_mVYQH3Z668h2zN5hFTBqmwfiXiIb5Uy1RXnqXNZdWRYBnmim-89fHwPL1RvI0jKeR7RZ_Y2omPrAirTbfWBwqmvLlhYQK_3ZMDOqSFQUgYydfCzgKj7QpOv3XMpxbhAe1iI7zmbYQAoNWFnI6JjeOYa0RKNZHZrqYKn_eWYsKxCVNrBIttYQBLCWUP_jEfAe1k3sQroNO4xZV7I5UzqzuOQ90twQnqYFD6wqvP2UGPmqwBVmjPAZ6YoR26YXQfKEcfnzFyFJzlYQEJi-ikFMK_Ww1-qsp015JNbgW6uEilMtyKtUgZtvaB0whnnSHsXXT9msylDGUQHN91bzA8hklxvbU61A_yHs3JYQKvbxVwIa0AI59eueOXQBgHSqRyzTs_MkonMxSzPHeoM9-JFfW9CVsqkaXSO2hr-PPFemDMq63u7GnShgJGDaApYQLkiV1QzhXDQaxwrcNlmAOHZKnpGspjHei7cInVZFuA_jjy-BJ-bF_tRnY78IsPGXke3OdTDlso4Pl4kDWVVqI5YQJsusrNoKM5fRdYuKzAtQeNQUgzzJ60rfNwz14mGnRMCHCIoBGgeuSmWbQpm96UVzZNFV0JRuzXpyDzY1dZdEspYQCDQJSKBmLbGw-OA_ClFytCV2_BatEAbeCmoxO0iisUIRX91psp2Ppsv5CePhDJ53boThKGdVzjuLV9wBQrO0q1YQBrpd8JXxfQG5vpxg6CrEhiqM_5NVlfHLg6P3u836PDXjweSlTUqEdsQdpHarHcz4gkLhOUKXKVBmygco0vIfdtYQNFNdq58eutdAnbIJsWSjL8c0E9VtwaFGgDSPwhda8Cgx5e96LL55T8ONKi8FzJx45zyQd4pvMThfM3nvSkyjqZYQGNCurfNHkno0cVcaF67EdiX7f8XduBX2dtC2YrcSTVPkNqg2ifmiO3gHTQNCM8wfW4yqbB6p201YNncILJs2SlYQOxGRZKATwGAM8hX9KykdNw69GSXpxUunML2-SUC-buWDnDrARQWZEJa1G2MB4US3nYy0JoTPeqSjmJ3YZNaSyFYQGq-fNKpcdjLeIExSqNeZedRFJE-COlQAhF1zyUzy6ntzlBrwDy5d-Knqa1km1jQlGhqS-RUX2B_WfckRonn1dRYQDnHEbZbiOxmBhmHkKStKIbj50C3yNLwO3IVjVfRDA6dFXV6qLzESo1pYz-6Hk05hiFkSLIYKv3i3bFLZfS8nARYQPNILiDeB7OGTauRdrrdN1mM9h7DDCwYtQdkrw8YrExQSNsNp54CpSdQ7gMuu9VuEn39HOg_nDcuDKsJ1xt9ktRYQBZiBZwpBLU3ot0V26PaD12Js7a20-_msaZP3F0IEYeABQjbTDQSDpQYB57i83DwIx7IO5djxtlrQrZwts_nxA1YQI16k7HM3iuj0Uy6F90Z5PTzCecKYoTzxe2OMVvtvJzZePlnM2QSBQ3b_Jhy32r-ALYhR6nyteo4mmiZoKvJgMdYQLMRIsrHwSWJgBPxKjr2gCkIaH7FM1Ij082_-yv4G5IlUG2vuyAxhJKxBlxyi3xQq4a9qVzFt9XeQIzlPhrcYfFYQFgaKoQ57Z8AEj4B-jcM5Qg3E4gmhehhO__E4ru1g12Xvf08c1T9051y5xblRQyITF3PZy3RK6KA72hHO8tns0VYQO7ujc9FtItDXcBM0EI5PM_LjeS5-uKLUYmn4IEry93NMJBpPTFvnLl4PprOqEG9elF0yeS2itbNrLzJ-EUfAlJYQAWKZWAwSAr6q2Eki33xwJO75ywNCt9xV6t9ZQ4FA32wqE4XCf6OilxvPLph10QR0rg3Q2RnDFK_L41rglLbNpJYQHCk9OfT4WWb6blWWaAc1Unb-GWrQSi2A5e03Qak8LAfJII0vNnU8GbM7vky4kdWnlu8-cD35XOkbeAU7MV8RYFYQIK9cZlqwf1jt-p-Xw-Po4Z2qZV-61aNTkL1yYXHJ0NWPdC4zkQJ2iEm8dLEAEzBaXS5GWG7RCgpOeM0eJH8DFZYQK5FpOdxyI0j7YBSkISXUwnD_yFOa0T3AUXoshHG8N7o2ZtzyO8qPB7R416K2yO8s3W6OGcxpD_WSUVshiFCB-RYQOK6PE1RFKOwDyxMsxDO-2R_g_Lc98qYGk-tj_X4GhstPfhOkvoQbhqNJ-XstZgyemBVHodl-KS-Zjw04IdF7NpYQD4qdvuIRym9If_O7pu2KaFWfAZmZrjpCzA2XDOl-rC30-9im1oS4fVL9K6PMEya9qDMtpGHWEtkfk1LH7NTsjdYQImJIgKnn0GQNJaJnNGRxOqXRWafGXWFbhsOb6U747N6R2rKYo4NtA7aThXpdVWY59tVb7Fu_Lo8KbRqylz76nFYQG8obS2V8lvv85xlOUKYLTQvCs3azejrbAuhmJdvp-5nMk2B2coU0wiKrhIUVyFifJni0PDm0oIHBZ3v8JVfggZYQBp7V6Tk4wOwlBZy2iPN9lIAP30fyphoTRkaDA0oqPmQtrNhLhTy2LIDxAG27BjBfQK25friDfaLBAu7XQZTTxFYQN3euYJn4wueQUx1-KF2NbNNs5R5_wLPE2GTr09XeV-7a4EXymVtxgFxk5i0cRdhDek2Y2Jz0QzZFo76uBKUCotYQOh0PjX6nXgncRUk-AARdM4tzmns9TmlJ5OwVQbSqiji3K052dSUzmXHkqQZjbFoUl6g9RPuCnIBGMSSl8nWvEtYQBKbWKefKSKTvqe5B7PVAC881HBAiAs570IrMeYXrY5zcQxlK6hf_hPUDoz5sS7toOmx7DofiAsCEDGtb6nRh-9YQJfuYw0rxDjOBZ6EQ-sudzMJ-I0yo-myxQR9cg6rehsEMMK8NBumpug5NYSCAObdhc2EsfL9F24iyCY0fGhe3zFYQLIoi3Y-3-s0mngVZHMTFWQ5_BSo1jfDBINZs3VjmCONN_fGTAN8Dtr-7jRI8kqSnKga97jcR12Udo4Mh3BdsxNYQNwRyd8oW8yxHOwWmSPVleRi95ds77FRfRrFvxYMfJxDRRp3kvwHOdr3YUanrw5q3lB9ANBjyFzdG3v2YLqM0vpYQAHMM3LT0rtDZOjyaAwSzVza9A-bio9_NC8y0J_xpbNx2OPuBNOCRI1DMYuv-22C8JuYOEZd6IrjPLEl1ansFkxYQKlHMPzkdgfmwJ788EjK6dwAuPLTV7s6nN31VtXpMDQM7tljtRG_GebQ5soqzwEsZ-ltrTaPcDZm73wZQAga6nRYQCwk8NIvxFjQNslqVbsXlAGV_kGCiaUJa0rnxwrOAIjU-70eAvhJV1GcoSeBw2rnVlvtoPazJphFBIeLsTWafnxYQAyiq9Qe-aFRecr2sxx27MxbSdoDyqYhyP8unAS5Imp12qLpBDSJbAVIa4g-pmoiuQ3jqrdz0RzYAh2R2nvynp5YQIhnVcp9lZh4rAamgs0KV5nwnEXkPvdWvqa_m6PeJhgViJL21CZhgGNJthSt_D3dtPAGZ930uNdKx0pXQxvO1wJYQDp5ZFAq9ea2kmlERQOLNUz2uhcW2shkPJauvrz6jJ67P9jtRxld752MrMAM55ZjT0VrT83vVFOY7p9Q2L6vfzNYQHolxVKiEnObhnESsirZgtIj_SF_Ro-iIk_ofcAW6dPuZm5DvLWsW93kFHAkY4qvOWz2Knz9aQHfDjZz2mpKxXBYQLKr0bouP56lJlXtvSy0p746ipqjUO0_KpgjG807Uytew0MlsjPeYDtU3AB3U1BhJksN8FznWJvDbSFBakGkMJNYQE7gWG8MLvCKglIRaQNEdKHDkzhWjOaB7s3zPWP638gJqaraCRiJ8tdAGFZr7hVhAGBOlrapyau2i9CmBRYSzNtYQJCTYEhZIbqm-djUu5lpaq1IHgSa09hBPgxNcNBX4LwgHjcsUO293fM6_wy0u5v5m87bLFQQVWGkZ1o_nxW5RblYQPAIvmgQqj8uSDIpS3ZG6GNdX6b1vtGL9h7KtYXT9Omq-aDwKTObSRVf9q5-QZpeSc040mdD7Tyny2ckMqNzaGFYQMezsBAgNjRsBptbRzQCQKCj6GpNeEJhaPML77YZEs5hD-MMo_K2wG17eD9-WHNe4tEuYtGjBhs10sRqQp_4x0lYQE6Euq0CrYQa5wuDwPTZpFe_PH5w7M-96mx-joYo9IMvPsz0d94vPoY-aWY7JfCcFWBvW7Z81q5L6yHZndXKYGFYQMiwN81QfLVIZMNZyZ2pNigwmZBSwn4t3pSo5iXNxyauzF6HF8h8SafjOZVGHQ-Il6c7c2BGgOuBrOxowZao2pFYQHr82jcbzGVTwjntfB8DLd7UxKlw2qKE8NiZFCrYqRaKva_--VfnINWXARW45rx0ZNl2sLvl-HdxohWowOpZnCpYQC2hz4bmFqNGai7033EuuA9FUMqd7rTQYVe-Pz99gfehMoByMMNVX10-sIZXML9iquwKzZIYeuJtdA9wJ07iqfZYQJx8OdKKfyPRH-rk_S-iRY4wNYurI0PRxTTsH0qgIE_faKFChF7CDomitS3Jwuc0z4g2IzndHwNY4ZzUwlq3nbxYQCR_rJ_2bWF38PZOa-8uFAP7I_vkIeGjWjYR21GXOiF1QMbzdYuTtPVyjIIhN2iXoQE7f29gR9cWg44cvN19JWpYQGPTATk0jf13KxKTfbK9N-YD9os7oO3AtDJhhmMJA71mJA1offh7TCF2MQS8CHmVOPoFjRmtWZL0VQs2AQ1II7ZYQO9jWKIALuC5_zPh2td7y5dhOv4qubrNtOrB5rMfgfIL5t5ldwffRduEW5ZPai5kmCXdh9kmuenVqwjAv_4vUA5YQD5c8dU61RhPgbAzQzSWgfOupvlCmOeenEsWyVIxIxUTEnJm5hKnjBAVbVcfJ1ucojEcmw4qVcvG7BiscVy2lZdYQEV6amcXKTSauGoN3XaNKUfYHjKsJmCWvbeU3lf_bJ5IjK7-Zae3y99D0eb5tx3Enru5Ou6GRVxMv41d9fpBbAZYQIQfaO3Wn5OmeE_LV8Nsw3df6IrPIuppgn8upMMdlNyyRMg-YlKLqWNIdXICVGOpO9qBL9zY3jM0vKl7no9At5lYQFGOFGz7Vm91oU7KNbVWBbEkbwF5qhK9cdzCDD_G55b48jlOBbITmdtfkhEdBgCvnNgUu3QaEC8Bzv26qCaMIERYQO-peBDY2po9mv2AWOZiQlMHe9OGV9I1w16C9AKHpdf5yOTOQgNpDTnFtt_AotWiZv965tkDpRBqmg6_y6Wp-N1YQEdc2M1rkL67iY5TUyt3IK7-O_10IjhJvzUZQIUGvHORc1Y194GonV--HbsO9fYmaS4Zm0v1Fxwjuwmci-WVE5pYQDH6OaWIpPm0Pf1yGpNSJ1mHdUW4-LPZJJpHTF76Y5zjwSD8yJcXeHRDHKvx5GSSKCXX4NP87lu8hEqMG4sgB6hYQJPqSFBDNpSe3I7aCnVCldweeuxenCmMiZbglA63xZKCUu8K-CuASYy4DKKpSTrEQGwr9SLMHmCyilLpa0Zel3VYQHd0vm8DwZ3AsbCx03kMFO9-bMAOOoDmti-61QmPPFPUgdoHX-mJvr2MpaPq2jtqlvHhQQEah_n3BCWHQdClmTtYQOQ9-syn2EQiTQU8Fk3jD7XeIf7RP5xSDQV2hTAI94-CBojdcXTtE4NYURJfYdwN-Fi5sbwLNGl8SmA3_wGXSYpYQAIQQvfXJDbfh43_GOkWPtCuZTuABylYcnwPjsRs1ymydl1_uMNFtC4mWIDJopOLujCLBPhxV3o-eRUoJMLsK21YQHmvICAkh9Qw4sH6fRRdykEPQksHagvs8XgGbAwnUIvJGUn25fCLyQ1odiwdJGnuzMNfNrIuhOPC1axzA-4GZP1YQGdCN9zKbsWMaPmptrAY-SnkaI_p7inVUY0qoYiiqAesQ-u79deC7-N2_Z2mcFb0p-EdLgqLXAH6DtnEJlSbJ1lYQHxwOYKwmKCtRKfQPYgHvUkfbN9WGfqSjRqketH5gRA93Piq0rCZmUxBSquKXG6h1lwF8R4bEhLrO7UFAd8SHUJYQK2UmEHY5MmYqcmnOrEqWA04HNwZSB0dxLhOiUJhUp_e8LnhHtJNXuFu3I-gvuGxa9oJqK6cSarZUbNtEBQ2aHhYQFobgEzwo7K1L5h_ZigC_6-BH7IUcq5qXM7t126Eb1dz5qtdpx2ej2QVz97HnCEhMxH0Tz8a-vE2GP06qYUoRClYQMgTSg3hpk9olaRW8ZI84QpwxWcFjyQU7sZFjhMpC-UMoa6f1vfonNpDMBOMhWF2KwxDoQyLe5NFgAYfGWkhjs1YQGgTL5yLKBtTBzi2WdQrZ3AdE5w4zUM95mJwJ22zBmWNvU-a-uCT3uPu3V2NlvkINn39CdkPGlWlY6K4RD7wcZ9YQM00gwK9TQj3FfoJPrYN2zCZZvvewPmExD_REPclVhgSJ3y3Huk7zbHxlH3hQJdj4XSYexkhEoC10szqMsxmyg5YQOdcGlWCtQ7oHRM-2A_LYtEQ7PtM4YOFbVB1ZsPBzRY3_okcsSU26WRzm_2PP7ej7tOV5xiRcwLT0H2fLRuRJ7JYQO564CqIkUI-ojGr78gzM0Chz4nT6dFcX_FdTQrP9qy8W8sCkubnvYFj4x7QYeeo7El9aznwsSVUJFA1NrilGrJYQLX3xoGwJ5WBqGcT5-P4qtdZ5MTit0qfHkDr-N8JLTRvp9FXkpt1bRcfNnw8_sMvSNgXK1_EZ3vK1oJkDf-HLjpYQOUa2T9WFOS27KTazytI8-1cOGCE6w8B9pku5MFwqThW8PbREc2LnEVwR_fKymZy-OM_DP00bvfOTV53QUYu1cBYQKHmnHbRRlnO3mWBHDKCcRFbn6B2Au9pP5vCcHe3znZpfn2RpgjW5BS5uMwyn6C1OuA-DAntvGgcWHOMut835RpYQE2N10ptBQ5keOLow8f0cCv7CxQiVfzf9ZUm4nqsX3skPpF1eVzDE-Y8xBOUINGLF7ShIjrb4BD9TqQnlzv5aQpYQDNS8chgexgpp2xvDFGzCnCY0Ve8A3TeKGEVclUYiF28jy0HqcKqAQpF7zpNNNFp7zDIScBybojAjlB1WiVQp9VYQD538RaaP9pLSq0Zqx_tfpz6qEupJ3ymXsBGy6HXscR7TexIiwJJYKDepZQedL1Itykx4KbuVkzGWEzBe3WgRdpYQNuwSwp8RgDCLx2pF8aDM9i-_VrMnYs5__-U77ip1HOUajEx8jEda2kcJlwfFY61GhdsyQed7mphqKWhVKXeTdiCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};