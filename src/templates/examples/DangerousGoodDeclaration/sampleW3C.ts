import { DangerousGoodsDeclarationW3C } from "./types";

export const DangerousGoodsDeclarationSampleW3C: DangerousGoodsDeclarationW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/dangerous-goods-declaration.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "DangerousGoodsDeclaration",
    transportDocumentNumber: "DGD-2024-8821X",
    vesselFlightNumber: "MAERSK KINLOSS V.204E",
    portOfLoading: "Rotterdam",
    portOfDischarge: "Singapore",
    marinePollutant: true,
    shipper: {
      name: "Chemical Solutions Europe BV",
      address: "Chemieweg 12, 3197 KC Rotterdam, Netherlands",
      countryCode: "NL"
    },
    consignee: {
      name: "Asian Paints & Coatings Ltd",
      address: "15 Tuas Link 1, Singapore 638599",
      countryCode: "SG"
    },
    emergencyContact24h: {
      phoneNumber: "+31 10 123 4567",
      contactName: "Safety Officer (ChemResponse)",
      organization: "ChemResponse Europe"
    },
    flashpoint: {
      temperature: 24.5,
      unit: "CEL",
      testMethod: "Closed Cup"
    },
    dangerousGoods: [
      {
        unNumber: "UN 1263",
        properShippingName: "PAINT (including paint, lacquer, enamel, stain, shellac solutions, varnish, polish, liquid filler and liquid lacquer base)",
        classDivision: "3",
        packingGroup: "III",
        subsidiaryRisk: "",
        numberOfPackages: 200,
        kindOfPackages: "Steel Drums",
        outerPackagingType: "Palletized",
        netQuantity: {
          value: 4000,
          unit: "LTR"
        },
        grossMass: {
          value: 4200,
          unit: "KGM"
        }
      },
      {
        unNumber: "UN 1993",
        properShippingName: "FLAMMABLE LIQUID, N.O.S. (Contains Acetone)",
        classDivision: "3",
        packingGroup: "II",
        subsidiaryRisk: "",
        numberOfPackages: 50,
        kindOfPackages: "Jerry Cans",
        outerPackagingType: "Crate",
        netQuantity: {
          value: 1000,
          unit: "LTR"
        },
        grossMass: {
          value: 1100,
          unit: "KGM"
        }
      }
    ],
    containerPackingCertificate: {
      declarationStatement: "I hereby declare that the goods described above have been packed/loaded into the container/vehicle identified above in accordance with the applicable provisions.",
      containerClean: true,
      containerDry: true,
      packagesNotDamaged: true,
      noIncompatibleSubstances: true,
      placeOfPacking: "Rotterdam Terminal 4",
      date: "2024-12-05",
      nameOfCompany: "Rotterdam Logistics Services",
      declarantName: "Jan de Vries",
      declarantStatus: "Warehouse Manager",
      signature: "Signed by Jan de Vries"
    }
  },
  validUntil: "2026-04-18T11:57:10.335Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "DANGEROUS_GOODS_DECLARATION"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "70998282bb13249668b01cd41190deb28d094c48b240b736a569f8f88bc9b4bd"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-18T11:57:13.763Z",
  id: "urn:uuid:019bd0f7-68b7-7551-969a-d11e445f2c23",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-18T11:57:13Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhA2LHSeiji3_AGD4K_vpKnbV2d0SFGwp-Kwc_v2eNYcOxsBcCpgBZ6bEFLzSIvVnGFEfwoGbfdCDFYA39ASvduxVgjgCQCcq7DU26H-N8cFJsaHUWN2JACbEyBVxoJDj5rbSPIXexYIGnacx53C936oGHHgtJ2cd6cHdWY7vud_cSeR97yqny2mExYQPRYwJqfV7sVhXEAZ67EKqXil1bDr3cb9DWaDRRCGmtT5-Xh0x_6F7SPz9soJAVs0OYxBmgKXZV5Jj51r3XdbVFYQDlg8aU53LR-RXIbWl2hIifO-VP8_oQluZWI3XjPB46gZ6asUX3f4nnifhdqkRzwmaKGVzxh5Ns0pm63N6pW2adYQEaALsj3db7A4GEm0fi1jJ0gex1pO-Mc1iNDJay5ssOmKRdztIJ9EcSX0FUg-Sa8QPrV-k0dREmY7ZmW4-G5GP1YQDFZYVP82y-vHphvfBr9j-FGoQff2uRHxbx4NK4gFVSgceEY4eEdlWu7MywfJur2_EHirB4m1niZybmYakmPF5JYQI7Tw3vgxn-1HVu8awY1IqO4mztxFnBSecUM74xTNITSvEZSs-VxAzmFiLwqFzdXIdn1XCoTlLC7238mcg9KjslYQJ7LqS1ZKvQTvkp6N9SzcewAqcBcBAXEf5s-Zl2LFyGAFJwTmw9VdPgFftqkQV9XV2FI0gV3M3YiTcnX-6L8g6FYQD2gvvT_nm324blilKXSiu4MuDE_Ao1WtMzQjQwETIO2Z24uB3a8bGxKuPj97OWr2jwnarcE4MW_ngdSmDiSfNdYQDyHpU5mlos8swwKLQGVKTYrWZcQRftLLV5kHGQzSKuxrOg5zrsORPqTEu2GDNrUWJn24IT0lA-r_RJmcgUyIl5YQHCGU0PqJ8MM74wAgvUBKGJQ38llT38P4J0w4L7ANkddySp_G7GGm-_HbP4QHDthENOoQAZo9GWroHitzsmKMfhYQO0BjSeDzGzp9XRhTVcGd2WqCOGETM5vrRLwLjWUgRhf02PefAg_PLgxPnTLfDqifJ8NEjVy8klaT3gDirOT3FJYQA4lGzp9MIYpbd2KfYbcXtoJTgvQTX4FYC2o7ecB9fBfeZRDnRWz35MXeVseXhyLMxitsWyW14qSQsco-Vti299YQGvY3e72SmvhcYj6V9dfvOCraDJ9m6XolrDNJrNyzuYa-2WCg5LiCYfvl2ZWxiTlDMAWUSf_oCpeT7YWCff_hFhYQHVGtGEv6lpbqO9f4boyBvJNCibs64YAJDg2qBI5pEqxD9kxtI2K8CT3AY_D-ETN2dgCB5-TKCIbIFL9xqarottYQER2Ar9hvr_zGQGEVCJsacIAlddWx34C_LeDY38b5yy1PwacQVeeltsM4psOEVG0Qb3DyBUlGXlNMZp8XyIKRUVYQMe0MGfmheUwVSrc6fOQ_V0S0YV9v9FT1TZzVNCOoYDj8ylooyrrXUGTDq436Z9Van9Q7Pdb81bk7B-Um3KreWxYQAAj14A9ok3x2sIH11CuiI40IMc71wKj4Mmlhzc-Q_jQBc5t2ciCwbzcBz9OlIe8qOuNLz1y24ZFoimQRdX7-f5YQGBR3TAr3jfOHnqKXAbz-yY-yPKbft0J5oROrwUwI9_ZNmK5n_XoAfV2NbCQrtinGMCGniVA83JKLNUoYTEcOcxYQN1Gi4H4-JjqwzvvXXFQUIa4Bbt8q2kEw_iOJFU9E4Jt97yrAWAbQfYvAAr9_rYkQPoYLptoJYHqC72Z3KnVZwFYQHD0i6DhGSHSiKAlm--Ss5bVY9zZdTFXjyRCve3Y3voaojeNygtHbHYkmtiExeZ9vIJWyhxDfP5J7ZDQ_iOfYshYQH_i-6XpjY8o3InLBL3YthSwowDLsTD-e9Zg7TzI4ncDWKnNkkibiNOHKdnkLoJ_FaaWGE3YlhRrcOv03FtzTe9YQHJu-ftQLPeuKspV5OYQog1QnTEu5DP_nrbvfz_Vo7lPf38CcU9krcFKk0hyuqEQJ2dILlB0PepCvKXGcJryPmBYQB0j4efK_p3n3Y_BzklhB-0pmoBg0kcYXQLCJV86yKYV7AEuma2F5-ilsjbfW9lWQ_3lbYhSV0jTxIYtSfIEF0hYQDYU24Q22-quskRrsg2AFab-vATXCYcDsuN129XI1scBk4S9f5uL2kn_bM7vY3o0wWOPZX02013e6MT2VMblOMJYQP9sH4sJx3aqbZi6VxldliQzr9UtSAmQr1sYAx7xhvi_6HWbynxkkMbWD64QJd9T2RGSiplOoKdKglgR-yYkXExYQAZqq0qboPucowY2nA01_6gJKsIyo1C2jhaK1fk4ABTyYDt2h5yD5SO2F3tPd9dW-KjTPyptj2TXhPciErt5iVZYQIpnWGh5-wS98qUBgDhFjjNysL5S_JGrGEeWu-H42GMw_cdU1eavTDB7c9do5fddH0zO6w1Dl8yrS4ODk5NrxgpYQCL_ktyl41kVm5uEZd2G3xmoSbjWf8SR6Q5YjJaU_IdIzwliI1VVlMCEt1sIDawu5suGBpcoJ23vaV5pedpGsSJYQANzNJ2IlS5_ON0_-2ylK7KbMbL5Ks_KPa2zjgtMdb2Wisgs-gpv8jztVb78uGFqkciiVlbm8vaYs9WQkaYdn0hYQJAMxUU1i6Smsp6pBUZCvuicIhD55ksz2MWa_SdjsgznSvZ06RyA7v7TEfKQokdX6Jc_k95Trf8oKdCahiBg2P5YQPs8PmhgccEQzboO3aE_C4SNnIsevNvIWuDhd9m5m3vp_a4-Ps-8qjGUsbPZNRnfHE-V5ryp7jZrM_h4TqtEPkNYQCNNBXq2UHwUpk52KoC2GbbhyoipjfMPf-Ngm76I9aS0Uc0A_JU9Unwt1YTRGRiJvd-th_YA19hBmkI5oBeGNFpYQGOKF08z2zqUYS2JmTSBQ3mYqNNf6aQsP_XKGP_QDQvhDxFk_bDggzKd_2NWTUSmRF1wqKSbQR4ooxm59PahhfNYQF83i8L7gmxWRrDeRepvSeOWPM8PZ34MlIHpgivjR37hKdtJaHTVh69o5ZzedW_yaH12Rv1hhFgnaK0umsjx4XBYQGoyiIevfKgxLJRRVuwiQiEf7sZc4ikC7w6FLsnBWCP6RwRHhkeaOdVhPr6ldLVvFr35pDNd2Vmpt1_9Kcul_-NYQAQPsV0XaJKN6qUGVy3huJDQyW9Tue7_rUoHkMmLSVjYcsXB6tmJerAcsAQwDPQxQzPFiUPxxckFetkbmXgzPt9YQKRrEHGnpvloK47jTTJkwLiBxsWEY3Of3nrpmuMOBi8A9tnywUQ3GiSpkGLC8aM7NnUqC9vZfTpTQFt7KRVnt95YQL8j72rCUIdGeagm21kPvTkT-Su6YWWPfE7oTCpNpvIWoiPZoSp06NHVvr-EMzWw631ysELEgdABMpy7O3LhdZlYQCCaJeWsR6gFcodH7ZsUEazpoHatMFE5nLy0KWZb-4-xDBcwmo9voeiF4SfKj3koMmeaeM3HkwV5Z6ohzaILhJFYQD-ex-oJUZ1RE45eWJn-AzscjuttISHVi4fGyGqCpg54UMXJ4EATxbawLEz_7wumZ3mafYZ2qmMeX5HNv7LRejhYQLe7sXYOILZHhbFyKZHuzildFbFZaj2iANZGnPlxFtDNoi1RCyPhtfomLWWGoW1PGAfktB-wkGbuFWoRQdYQQNpYQJYFIPDviOPu_eoS7IUv7Jcl3_ENnlaorMCiXh3EVZepiQpCyFmauUb2qJgI8fNjC-cfAi-aHrqwpWEcld14xslYQDrv_FU4ikBjobBkVYpq_S8-AyB1D2i_I2NDY1aDcxvlsEsAHJxXDs8U3CL-ZdPgoPOC8J_ld4tpb3YI3jmuPflYQBZA6OYwdWF8IDLqjrLUoSmdScormEl9OXLbDfe-RkjKlsGv4KlaFwWooSy5jjtCbWWzIzt9-oX0nOPjW-pagJpYQG_ABvgvc5ZLMQ8VXIC1QNve5Z8vjb_1HoeCxSzLYhYzLFSo26VhUvQwwJRXaDH4o4WYFYWRUI6w8O07R4qBQ7dYQARhAv9ejFcLgIBm7FpPmQUzIFRh7q4wfuNh_BAIw4FOFXYeU0l79W0Zn-RMdwzuolo5SSW43_sQrcFMqLapSMNYQNkDOOuHz4k-gT3jtxHTi3far4P8obZcuE2c5v789FucqGyN3nOpRlyYTHcEOX25MI0-Y0-oxqEm3K2kQDhTQV1YQE3szJDbbQfrFWNCWxfffQkgTQ593aoJwZs0nk0rRxCf2XJ1ZbXTliML40zvvUoD5i3wAcUHGL3Vf3zEDCpYqzpYQMzLHhPAzruilJI3rJCs2VIhKZoa1JtcWZuuuHjJDc676IOM2jcKJacHWDPFsokumSfjWfyLaicKFYEk37a5nLFYQIsF7qzsxMJZ3vKqQUL8HN5aQezupUvrXv02i4ZSs1TyTjPo0sPEgPt-9DkYeZ2ZYDIcDudNPwFKxaHFK7SXG1xYQIi1Ed_k4JSAcPab_x5uwYHigFPoTM32HUeQYsYnmbkSDqlUu9IbG3Fqg0GS6P4VLEXR8NGdldt8UTuFBRJFxvBYQHpLOJYYqHTJ7YIBD29pwX0OiNXloHXLy2Q-cJR7xT-NYs8Bbe79vkpiHDsBcHwgrEthuID2TEyLqtX7ucdlws9YQLUThr5hjFKXOoMoSBkMdLY7VZrHIYXihKeVk_RTddlfE-elHd_56y6qcq7bwGD1veRZW_j9rA7K9BhZdj4XEeFYQEE2i57uXSgRBGo0LGxMsUUdH4FdJuwgzwAe8gDujS_fjXvcVKoh6fhk_DV8dEsIh1IdUCpohWwmBSbQw1wFeYdYQAuExX4p6Qw3PX5eTpvr47ASKw9oJY8U_7ByFtNYAKXbalvNgLsoYr-9HaFQvRUtCcFjL3OPEjVnpyHNpJBuZDlYQDGrIQQYWYvwImP8xcP6cPM0gzTtc7qwWomSv6gfy4u3zS_dIgh3uDbboWxdTW92anY8MsCmE-rR5tVKjL5V8FRYQGu_w38Z08zrgQ_JJ85cglhDL1VcofAIoTY8Hs5e1NJr_vYpXDWn-auhqlZVMteeg3yiZFIiEwyJbFH3vXsvr3tYQIjPfhchFGzWYq8erB2h0xZmy_oQ9mGD9wlW2uv_Io9BqwhD_4reBVIXME8OhYzBcUV4vx1JTHms12bYy9hpXKFYQK3D6pafdedA8txRRlpuerhSZ6OznrXCqQRQaW2jgJz_HASbsDtmJjGzNFEk2RlLOyXjFyx9GEqAUnIUMxy_NCpYQCdh6hJef0gc1cUW5utYGWdDBX9JGSdGjCQVbSlEuOtzj_fwly5F7d7KdkTs49wdnUAeD97MzsUu0OYLQmKZo51YQJCEA_NIk-m1JuolgzMS2c6XgIZGZrnVH5xgOgxL_yDPZQ3x5OStICGfhpn9zGByaZBLT7HI3y69CCFBUuLGXmFYQAZsyQ0kgMefGS5bwBqYEIfo53dxvfg68dnBlnoLJi8PyegdgYqXl5Xgax9o8cW-ivk7zqe2IjfA5i-sz-R0keZYQNL6tle7yakhgfAgtVaRF3fuKDDfw7zCO2x8-Rk3uDtahfgQ9fXPeif9BFuuJNlCD2WKEY6I-Nq6yJlKnfBftIhYQLWbNrJXWFzqSarRjPz2xRUc_OCCJWN9Pmg7GlI1j1MRicR9LLwJ3N2IKW26lHnETPEgU4MhSEWYgqLQ14ki0vZYQHfv2zsE7nWh1wlCVW-6E205kAbclMeZ-byJr2Wxdzy0AmgQ4aLKqGsv086HWksPNTGbx3JBfYIpCtZqfaVGBTVYQAdcvyIcB8vAL49ugsPtsxnOaBRaUdX1MghC8OTErZzEVJiaqjCiHyOWgIAnVTaA5YTqgrfHodKbnS1ec_zEnaVYQCq_hEii4vd1r4v_jVE9iMj1rzTvc2Cysf1LJMSFunQNyiVcoOjkyHT1c1ocfjp_4xCpPGagiwxG8ubkGdgk7DlYQC5apSSXB0mrAp-UZrFgF0jU2L6Xv3Z7Emd5HtPv1B7yRljJvTaNVQo5DWBme9ye-NcfD8vNYhVAkBvwNMHr8YJYQAfAqtQvw87u3HMBg1Gp5ZRD6qGMQGv9u190VEqWLwTt3IrwsO230ck7486AdEPdXZH33vY1Qb5AeM0kybOZTkVYQP38_xXyk1d0X44YckJ70k7DNXPzWrp2fTToZ-9yGWpjS7NhDPSBc0P3GHLf3fSu3K83xjtqKEhufCrCbr79TK1YQBR80L6Z0gWq2d_Mes2RZZV9PqAzk_e08gOBpzgcNyH9rMrTyTue_ZqfqMXxF_Wr360OqWGBOIZPUBnG-39B-ghYQAGO6JAIG7X7fIktPfpTQMiF82sVz7UcR04hhg7EykvXdhi8nefGB0y_qx2wXHtgkRnLv7dNXpk58xRDXhnVpJBYQA6N4ERS7tokItHwCYi4M9qeUS5iPIOoDVZ72a2HbRWYWxAaGTymZn2qsUkZ_0DVe84lco3VYNUhGzFyd0Hj4BpYQLyd5Eqn45ccjjwFdaZAWhGlWQJQEbIlOAY_oS4InWDLsTk4MKYGwtOwYghP0anz5s0-Wl-9sQgVTeRVLqB1BzhYQFgIPBwjRIdbwoK-NXl3_iYNtqMjjHevit9BC07n-lXCsNziSRjC1FaSauuwdho5aeDssoi43Q3Yge9Nw-bGaCFYQJz5uwQwe99UHR-G534SlXEV3CiqreJ9zMkMueEpNjLznvWycmDIVm6b6mg4_3uunHnxVXkzuvghCLMP6veoJFNYQPBgR8HUpoz4UsZaKISS9H_R8k4sRnUMX8OeWJNDs8YJ0A5w4mxtdw1tvG9_rVhtQ-gJFmCBkRQks4YgelWLXGGCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};