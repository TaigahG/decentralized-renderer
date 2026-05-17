import { DangerousGoodsDeclarationW3C } from "./types";

export const DangerousGoodsDeclarationSampleW3C: DangerousGoodsDeclarationW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/dangerous-goods-declaration.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "DangerousGoodsDeclaration",
    documentId: "DGD-2026-0510-001",
    shipmentId: "SHP-ID-AU-999222",
    dangerousGoodsDeclarationIdentifier: "DGD-ID-776655",
    consignor: {
      name: "Bali Aromatics PT",
      addressLine: "Jl. Bypass Ngurah Rai No. 88, Sanur",
      city: "Denpasar",
      country: "Indonesia",
      email: "export@baliaromatics.id"
    },
    consignee: {
      name: "Sydney Botanical Supply Co.",
      addressLine: "15 Warehouse Drive, Botany",
      city: "Sydney",
      country: "Australia",
      email: "receiving@sydneybotanicals.com.au"
    },
    emergencyContact: {
      name: "Budi Santoso (24-Hr Response)",
      email: "emergency@baliaromatics.id",
      phoneNumber: "+62 811 394 1234"
    },
    dangerousGoods: [
      {
        undgNumber: "1169",
        goodsTechnicalName: "EXTRACTS, AROMATIC, LIQUID (Sandalwood Essential Oil)",
        goodsClassNumber: "3",
        packagingDangerLevelCode: "III"
      },
      {
        undgNumber: "1197",
        goodsTechnicalName: "EXTRACTS, FLAVOURING, LIQUID",
        goodsClassNumber: "3",
        packagingDangerLevelCode: "II"
      }
    ]
  },
  validUntil: "2026-08-10T05:52:35.561Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "DANGEROUS_GOODS_DECLARATION"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#22",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 22,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-10T05:52:38.006Z",
  id: "urn:uuid:019e1071-dc78-7dd1-9b6b-71d1497ad594",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-10T05:52:38Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAOaVk1C0UXYMTOOxhjm9ja9zWEEXucH2hPjTfF426afZRBS0MajVUYkaLSklxTbfY7TVBm5yQUJWgzisn74BEPVgjgCQDZx4IwiyDXS1BTM57Hy1FnP4txDm5tqD4d3rZ0yz8zxlYIBGMGVy6gugXjCarOY8GnL23gf0m0IDlV_FHJOuTupF3mChYQFbjI6XAkm5maep6-QCgbiBquIzGjnBc6bPSKA-qL-GO1G_bqnwDajIX7DCqh6Uy77fZTVaL7SuHO5nvW-xi8UZYQAD4VE7tUxkCFeXph91_8L52_MzxA65zCyXJZ9staYAWbeRnGsKCKcgHacMdhaCf66jH68EPherqyFXQeLrv9JtYQHoWahsKLgaBF39MpVPy-XY3ykBXxHDN-d0PMLhsX1so6v03hLsaScxYlGyLRdTTN9bxO5TVc89_gLltv2O93udYQOKIOxgaYhSyxakQB1JuqORWR_zhP8KQx4qiCXy5gjo7iw8SwM7ezXHA3O6wHQBIjDLWDTvu4lxtSabNNDy82D5YQMgIx0GU0Uy8oXRA5v5B4BeGko38rEzUyAOgDfcYduUsRIE2_zPKDl_llms5514nMd52C04hVWS9VbcHW0Ds1QBYQKwHJH_fybH3y_kxDgphMIgp5nxWekHU444zQxJQUWiH5n-dEYliKvtqALHtfWF6Dg-BLxqtcWlwJzimCNTrKENYQC_mTdDx1AEfCkWdXIw2XyU8c7WWrqjwFdYP7ZWVfbsJO9z2eiWcwudlvuOBd6ZbBStRGo1FOGCs-U9UBeD_-OxYQEdHcpzSMykFnP5dHoKq2sGjKL_r9gFHvzjuJBIZC80NhSb_FdIOFL4xeW2t8s6BmcxleO9V1xL0VkTpKGjEKSBYQAEoia7s5TyufMM1h_B-xwg4uyl4x6bjxd0GTr2uprGqbFkNt4Ufh9qnfV8EapsFSY80sKYy73mYx1E-e97swJ5YQK2yCzP1QhOEajFAepKole6oZ8t280hZQttOL9r6Cc1RNHahOmGdc_NtFoMzmNaZW33VW1wIRXr3oscqv8HoemFYQFNgQUOI4Pwu6w6NuzrDNQoFBkMxaCFHGOdNOqbkeq7VEUXMpg0GlwQHM3nMdr0D_Xn2KywIyaF1szvdrGLugWhYQMCo7rso_m3dXuYxYyyf5HW2U3ivhTNKrXLSU52kCW6-upwf4zpWmviB8a3TRaoSuan-oBEr7vhfLV7b2geyk9hYQI45Y6jML0habhWDvWaznmcozL1BCXf9stUP0u1ihJj0WYu3yEwTIYSR3YJcy3UMZ_Im9RztUwzTAuCLDntYYmxYQOOiWI2TqnCR8TsPz9q-dxRL0GVTY5Lk2CRuqaH_4MyJZ5UiVENEnICzHD9B_PCc8F_cVRhjF5YBOeZNRmcUpwlYQKbaY0-z4UKMl2Wt-2N2-cwIKyif0GYNQSDuid0h_7evUS3fJ2lM6I50_vHG_WJje_B2UVbtXJ5HhSQrYAoqau5YQI31bcHBLKp1CiCbrAfq1mlG13ha9ibzT6MzqjRMCJ_wEivHDtintaE5VsL0dKMZ_fC1n2OaRC_bhEF1_rsR4LlYQErOQdtstcjIO3IRX75CEi3ppuodr-QOX6QLCuWLe7V3C-Oo9yvJllMoKc3rz2M3zMiCaPRb5Rl14fLr1Cj5UvhYQI0bFUGy-4kEKDHQgx_IFF5yWM9QGIT2bLtGCRBMMzv_q2CT5e3KcR7Qzy8SYB7G_8u41bna-012BtHZ31sXTGNYQGLkJ0SQHkCBR5Mhv76kJhdUbUtnZx6n_0xnLSjQs_M1cJO1GSvtSpaowEyMTouvULP5SsDgYePSr34uMEzMbCxYQIcaiPK96e74eCOTVYt3V94LatL0X8-Fce_8ARgFwQHbsGLpJ0Z5asHOOhF4T6jZs-TrsQfsYQb-QXh5p8nqFNNYQJ2Fb31mJgX_NyBrbLk5IsADotWzHfgNTFImTauVFzu2M6G63BOWbCijE_P-xyK1iO3Xlzy24HRULzNDh5V0g_dYQG6ezb-fG1hB8Ndw3Fyv-BBdPVSE3xptzFBgT8Yt8SZUKtU0WdhUZSPRU5dhDHBcGuMxjPYWcycI5ZdgnhdOkuxYQOU4PloB1XPK8b3nwW0y0cNTQtzvVtpGnKRxfK2tU-md_HD92VagzT2ZgSOlhaeqDPCUpfCPC6gcym1mejfw1QBYQIZJWyafrCE0CwsM7vmum6INjov5FK3w7wuy_zcGGTdQx5O7oRX_WW1jMf5JpZqHyRtxlMl9vGSChIHa7XaGI8NYQDrIwMexz_8lzGC5qgC3IHW3jpkDkBPmUVwuc-DWLqcbcJh7yS2mA1BAZBZ8Ae6p4z6qijMRbqd5UvZEHnlRBfJYQG3mXARyFm6Jh2AUkYmPF07mf10zMdFd62f13OUDNKD4mmE8P1zqRxhv1XfKs9f0DGfHHcT0L9lJFs1MAiOoyWRYQDDEaujVKV2T_3mheKn6WnzLeZdOU7UzqLALIslrjrCkuMz2GMht-uMcFI0vCsX3B30-B-N8AlhUn0GmccplLYpYQL5N5w-woge_FcnyxRgwgPVy80czaCM28Cp22g9KvH0x8aXjVFwAwW3q_V0RO2lonLU8MF3oLn4WwE9OJN5jlrJYQKbwJ1Q2tZtIAbSXgZM2utB8pHaRM0txPHzL48T0vMn5FBGW2pNtE24qcz5sQypqjNTg90DRQ_AQu7f03scQo9JYQCNuzrXfLkrSt33n-TwDr_aImqzzBbpg3lEH8hV_ojGE-ot85bDlUQQ45GfyRVLY1gTI6vDSDIMG1AB3cFVV561YQPXjF-e9C4fNosYXCLDa4mWSF-KD9gobdJpCBII_jRsqbTNT1h6omPTlB_lWECjP6JTy1SuA9E33Tz7-KIfFH45YQLSciyq8vZLtNObrVGHtZO8PSm4HUljrZY9dHF-RJccmW9u9lDSmwTjC3kl1oTsZwV1sC6xPvrgivaqtgJpqjFlYQGCdw3pE7SIXz0DRSQt1IoA1DRGxDygplhjm2xa_eYfxnOZxup0TXKuPV-FFMHSJZ5liCq3exfJefYUYjc9KSe1YQK6YODFLVJfyCct3FRGJT6eOxupC82xYyi7rr7OdU6rsvZW4YQd86RPEdhzxaOtdBUoARkF8SisEd0P-Dp-p5e5YQBpCdLo7JBzo4uc0Dp4n4zxHE1Bp3Nz7GugR2j84i_6LhxRLzfnEA3rLFVBRBxb1N0jXMIOjTE1y4UMIhe3chiZYQB0claJ5_T7P-Ov4EHTGiMutGVac_wZJ8pl1_9hEmcbMkzZcGAE_zA4PIyglgKHG9vV0r00MxNAGshpu5pT2QqdYQCSCXuDgoYghAgGHXJ33JHT0beouglUbnmeujzhwspWeFFWEMbObzI47NFv3TsNzQmT_ysR_nw6b5-Cve-icVFJYQN5K7_Sve_LtBdv7qq9ap1tZB-3mGVfxvY3dMmXRF1miY5xdhh8oa8Jo8rT995UMGGVZrxMYub6VyTzwZMZi-DJYQKiLgEPKd_bp_SFdbkpl8p_JcTeuAbgBeGGHnONFNFxa9cgMBe7LrHZClsJSj0kcbg8ZUNB3qAEtgpNAkYAZLp9YQLR25a9cGCz3lJHnDpZ5s5IKWRDzi6oed3hJfXyfOVKxcGWpNzew1e8zJ1D03N4JACJtO69m4qXWuiR-nuSko9iCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};