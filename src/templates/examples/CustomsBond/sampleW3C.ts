import { CustomsBondW3C } from "./types";

export const CustomsBondSampleW3C: CustomsBondW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/customs-bond.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "CustomsBond",
    bondNumber: "US-CBP-2024-998811",
    bondType: "Continuous",
    activityCode: "1 - Importer or Broker",
    effectiveDate: "2024-01-01",
    expirationDate: "2024-12-31",
    principal: {
      name: "Global Importers Inc.",
      address: "100 Trade Street, Suite 500",
      city: "New York",
      stateProvince: "NY",
      postalCode: "10004",
      countryCode: "US",
      taxId: "TAX-US-987654321",
      ein: "12-3456789",
      contactPerson: {
        name: "Jane Doe",
        phone: "+1 212 555 1234",
        email: "compliance@globalimporters.com"
      }
    },
    surety: {
      name: "Liberty National Surety Co.",
      suretyCode: "999",
      address: "200 Surety Way",
      city: "Hartford",
      stateProvince: "CT",
      postalCode: "06103",
      countryCode: "US",
      licenseNumber: "SUR-LIC-2024-001",
      contactPerson: {
        name: "Robert Smith",
        phone: "+1 860 555 9876",
        email: "underwriting@libertysurety.com"
      }
    },
    obligee: {
      name: "United States Customs and Border Protection",
      customsAuthority: "CBP",
      countryCode: "US",
      authorizedAddress: "1300 Pennsylvania Ave NW, Washington, DC 20229"
    },
    financials: {
      totalLiability: {
        currencyCode: "USD",
        amount: 50000
      },
      limitOfLiability: {
        currencyCode: "USD",
        amount: 50000
      },
      premiumAmount: {
        currencyCode: "USD",
        amount: 500
      },
      referenceAmount: {
        currencyCode: "USD",
        amount: 50000
      }
    },
    scopeAndLocation: {
      portOfExecution: "New York (1001)",
      coverageScope: "National",
      coveredPorts: [
        "1001 - New York",
        "2704 - Los Angeles",
        "5201 - Miami"
      ]
    },
    execution: {
      dateOfExecution: "2023-12-28",
      placeOfExecution: "New York, NY",
      signatureOfPrincipal: "Signed by Jane Doe (Principal)",
      signatureOfSurety: "Signed by Robert Smith (Attorney-in-Fact)",
      officialSeal: "SEAL-2024-XYZ",
      witness: {
        name: "Michael Brown",
        signature: "Signed by Michael Brown",
        dateOfWitnessing: "2023-12-28"
      }
    }
  },
  validUntil: "2026-04-22T16:10:00.388Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "CUSTOMS_BOND"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "2737b2a4fbe4563c53a2d5d9530c4a867d6140c56d3e41bfcf134de78a7cf45e"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-22T16:10:02.080Z",
  id: "urn:uuid:019be678-4bed-7118-bfe1-f044b315dfcb",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-22T16:10:02Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAz-cY3vh53s7bTevDXBdlG9uzi1cwqr85M-2Uz8Wq4Fvh2YkPT4TPBedfT9IrUIdm3omiDlrnyUTGwuA_fRXVcFgjgCQD3t6xFnmp6ZTRriaT0MfBaynQZxakAt1tIzlUI17DrzlYIK_fvvR2MbXkLrmk-_hT2_taR8tDQOc3UdWIrXJvKawPmE5YQJ4RIomIahSOWRq6g2pzguhZxaO6U8IPrvPzGrnwTmq9UMv7UsqyxNmjX-NSJ-Gjd1GEJrnpPk45KRwMePLADwJYQD8VQM1k7jt_rl0s0TM6YPtzGj_AkJvpTT18AZRVH8jIKVRRpxtrdhkFXZAeGqYImKVVm-0AWwgKKUBDwuiAtbVYQNLfpl4pWP9uaiFs_CfCo8F-jTEgLh7sntjre3cGdI14pIGsWyAjWa7cKHzyMRwmu5PCgE_JHneJMq_cSGGcMkFYQOJyyWenO4vTy0WtjxiEp6PFJQXoQJ-xtzWstvTc15dxMmZBnBLlb5fr-e1XsyZ2CcrL9H_CBB6N574JjyQy9iZYQKxeJ-X2DoPLl0Q9ncjyIx-Z8ho0xD_tH_3ysDR_FKj5YM2Oehgd6aK7f9crgxv3X8baqzvv762c1cIZH0nZh91YQCkfwzI9gt-NZN4YLSDDkvEck-sLdjAn2njbuPwTevtrGWFyg3xEg-q14DCzbxICbRHigR7NSY03xIcxIpBpL8lYQJ1Ys3ODOumzIBzkfcTh-pHQE7Su2povhr_N9HXLkDe3nZM8bWYLYujzycI3P__90oAPKXrwb2VQ4JF-UjMUeb1YQI-xtNaCZgJdNgHtJrQBPhZNOA-MfTR7d25WDluO5X9FdpqsxJep539s-OV7n0bCz2QDXARBcZQlYqkdKksOQF9YQMq6mGNm9QuUrVQbzfUqSWeQaPKDiS8wi8SLEVKm7sZTE32GLuzRBqQJCLd441IUY_bAQ29AeJ8OQHgcXBcelSZYQGA9bGy4p0IAdLQ_C-dQa1-X97ScMsNxHMx54pTuT4MsLkBgfiAlwoUeUfjZ0VG4I7mjzHrDDiw9hvyc5PeJlFpYQMy0nJEKsa7l5nM9WhSf-sQxMkNGsYUE7h_GLHerhA1Sz8L5zGD7VVWlmrUBddUAdHpe7q8yTY6eZrhU52dvFcpYQGsVWYpwRvwjOHUO2VG-x7fnyjRIJaQ4_sPUrY5SM1CZAHChsh4ZCG0zRUKRECe-ZXOPUQRHnEmmaDhKh91AR1xYQDNVtboFbzGmI4IFlClX0lKJm3sMG1OzIIYFwsrf_EmI0uyAKb-wB_EibE2WVnADGEWsFT1odfEIhcfBi7tU_z5YQM6-PuCJ-xEe5fFE0O5qIj0OgErImwD5R_ILfE9WobIL6dcbeh_-9SnE6Ctkmf6MPijKjXxVs47fvOGIO9et_xBYQHdDKJ22PjkfxnHTnokgIdlebsH3gMjhE4Rn0q1TXMNXYRz9njhVFjrrrNqfuKRg2gwC2L8RcDQ9bpNZuf8WAPdYQNStHtNCwBkzQp-0Vrx_RzNavI8dDk4EXTqdZUdYwZBHL1TB1OpRRND3uVKwJycPqmk5V24uP2f5AFvcsrZ-DOtYQBIelkhI-fnNVITeIzvikZYQUj1xEsVtiZih-mj3dglzrrGAAeLmpXaSftGcT25Z129ipN0woI19v65hSRWhcXFYQJCSNRkKZgGbAUPkXVp6vPrqNuibG1QS-T_DSHLY1icrOBJVMTFUJlFaKUGXNL2K2Q8rNW2VitRK2NrmXoBTrwBYQAoCoE0qJzYm4fZOzg9c6Q4GvfEOM0P3t_we7EJcQQefJ6JQOfdMXeaHhB9FuTV-axAmoRUjVPIcvcJpY-vr535YQOP9UQQ4AwlVA7qnQkT8kd40Yukrw1GPFihBDPaVaVXEzXTuiIctMqiWQAAVRq25kDUPfrMS3iitvIlTNGI_PJxYQPliNNyCNXInRo-51WowUcOgz1QAbNdpgMvevIyB_mUkBgjTrtSAocx59-AzpytcooFRwMJQIo2hKm6rye008WxYQOX-jHxPOy2hStcBbE-w2oKxrBgXSFjYnrJR-aZSTQCAcrlz9Xqt_oBqhcybPO6CnQTJxNjz9czS_lNHX9a2ZexYQEbQBUB-efLx8_ZZg7xF2i9J96159IiLVI8jeWJ1_kkCqVACCJ8QDNHbpJRQZIJH2bBQlBhzL1TaVspeYXNKxBpYQO4HhFzF6Q2Z-pc8-kkjQjzG_JVxrxhfF97O0DeXXwtAYzXFBb_Smd17hO3XqyKsJJeTlaeZe3SeYsknrRE5ZZ5YQKuSdl1tyWpZI1K8hyz3qcw5mgjQXh2jb5IFlnomOJmzVbPsSM9zhFwSdCGYzor2ACrbNj1qqHCvPW28ddFnbghYQOUTbK37NQ3IbgLnLa5WSpenYHEnH7QFJNP7T2hc20OiF_Q32LMahJ_JVJQrsDPZb_qODcoWnfT70vCMcnM1ld9YQBuOJNbZGw1TEH9NTHOOmia8Km61BcxLpHS4FC9IxRSdNnRv0ZKuPAmnnVTIrWlLY_1xcuKt7mwwvnqxDRAx4NhYQNUMEDPpGmh4qr6vRoIni6WjWrh0wlwsD9xoNnToqd9mb9a9GHGsruF0rSnskzvQI72s9iHVYv3ZKwidKM9tmalYQA5tIemBQPGPmCJaoVhfJbbm19C15asHkUHLaQOK2KgPtHNymvryXbYs3RAYlMVlYWLrX-i0ofqSiTmAO4G3tj1YQNV2nUNhnK752CUQ7u2kMJEUnQUEG3ZVJ1WaSu_5GHOuOuKSY20y9P4pi6pVWK3_eaVitrqV9I_0Jrkb0zYdLqRYQES_BTym36UbzBUyn6x37drAjNYM66_yZa6quhdzZzJ0mQJnu7e3fw2Nj7JZ2kvOBB6ByAM-IC9hKqNp_ZctyCdYQK0TYwkjA6f5sBKI0hJVOv06ltLbVK2FmUxLglGUViJE6zgcPKtLvm_EzgOjfIXSV7fGMlKpfD_nSpi7e8vNIphYQPoK9Y1FjX6seQPuZ3GoYcdzGClKq9-Kv7z6O6WJHSRUmoQ7RN6j4EMDQviWf7TDdKu2NZWaYAsoFHVADQx5BGtYQDY71DoUq2flFiunAelYBuPMjp3lM6ntNGcUsN3yX8Y8-nTh6pfm5ocW8-tdmE0A7WtiEN60PrlfdyG2DmClz55YQEoVcs1DY_8jur2D0VKMKFTL2QussX8wPC-v_lP4JNYcvjJgJA_GU2nU_d9-Qqix2TAqx0MOS8KP0MCgEcwdKXZYQPmvvI78RYuswihFhmP6UfgdBo3xgEt7h94eDMhS4l_Bwk6hN1n3qplWNFZR6EfgrLWEC3hm5_VyuP07oQFV851YQHd7LsnkueRj3CPieh0w2-3Nzg3QSew3fWdJT_TAKVHJI2qPF67nKDs_Lq3QtaYsF48glpM5FfwH3de13vf68Q9YQPiUeomcHJyYdMCR86YBNMNi3dHfCMkd9rkSrQN0h9fxYL3OK1CiMIB6YyPLLjhKUNQ9CZxQJmQVcAojFqJulmFYQKZ1yj4W_SYRnsKB0Efl1xuOJXRxEd1CTOo3ykJAEzS_sb_XBXBAeu9nJa01GPuyD9w_RuX-rxS30hE1awiEhcVYQEnF6k8aCj_fItE97vB79b71252ywS_F79zEnpbnBZPZRG-jBzquHLPU6AKDpx-f2b40T7aSW9ExJPZr9iGWVe1YQBvoKz2itLlQWtwaFOuymUoY2wg6DDWFvOHTbBqgCsVqNTQ94gq8eEPRxftUSaMJpWoyAlOeb4y-0GRVG9a-ImtYQBbbvo7IZqYH6qbK2YchgsafEKtoq6BbQCuj5jYHmREUp4lsIsuV2uM0N9uDwF3x0t6-0SLsR1-qDveppVMlBcZYQP9qnG3BJ2y1i8PeUho3ivq4O1oUe4ZAwwtmTf--cx_uJfza7BflO3tYqJOEKExKgxTqf9zI1_Zt5CZeFwr1cvhYQMczcbYhGsBupkkRxVWSZmdmi6ajaeHMZwJjpZ39CoJSuqrJBMtKM06fiF1ohndp29WCPBGY1TImZsfrwnsf2fRYQJl5DWudQ8AfyyO0FGK9yFP4ykFvFNwYXL7V488RrhCgxZy2A1EvDMzm2rvgXbP8XmAIt2nI4rnox_xGt9NFWD9YQHdm9riT38_dbABUyBdTDs3GjktCTCS1EEXAZny3Na6X9n1s3-C1kq6xD_FzxDi6F-ThymvDBp0vsEKa7kOYA25YQNjxT25WuboZWA8mpBRBe3oTFmDw3MxFupzHg4WPg8DqhWFooYoyThK2YmSChVxlMIfPERq2mERV2wmkjgAuAElYQIYa49yB0w113EFv33V5iFm1CX-e5VhMNgao5uCir8b7cfJy2iRucHf2_I2vTEXG3VKSanvO-Q5txtc_qrvdIvBYQEG0xZyst8FUJoOUBZIiWuYaAJT60AhNI2J3zeH3O8r2rG53ZTesf0yElHNwecbalOA9myttnjiQ62Zvp8yfkoRYQHwK01RaZyW0lXlhSOs2Db9HzzZmPGy5hAijh0W4Jsuqu4WdkgUhUzeuz55qj_euMwB3TPl8o0unURInjxYYN3FYQFWJ7htcP6Vb8WqEpydBPvqmQRobcLFGXTh-U7DADiGCnLYpHtb-EhlJrcfhUuObe0alz1PIPfpzzn7mJ7m4cGVYQF4una1xFYSgBjcDYjtYMHBam9aaviT892ceILMyk6fTnKkW5roGe1u3nuTmm4zWYoWhJI3WQiPRziAsXjRCUnVYQKzSAjyFxWyhQ4fSMWqZnc5yDd1jozAc6smGW-etf0KAOZd2eNmgpE7aCnZcrmqsoSZPs7s4CgFLzjl-C4t1Qg5YQHlue4gX1HscC_fakgc3W319R6haueNrnyj_yU6RAs_Anbd1BTGylEXqOCSEhz6-gdJdfjmhLBmDfbd2vFTjFSVYQCRbx_CHwAULW_0KN4ZZdzQRwwNFnvqYc8V_2ckoCyyUY7AY-VeOeqPiW23Z1rlZKWAt-cJM8RpF7v9tjAJ_ggpYQLsKOcWMZ9z8JtTNfD-nV_DOSPEwkj7NXta9e4e97S3RjgUAwpq6kGZ08GBvHxx5jav_oVOls8DMzIF5RDBeTHNYQGG4w6WFclDG-gqVH3spJGE_W4SlhWmPiv0rRnv01PH1809aR9XlW3iSypHTnvQicXIaWetMHFzyJY6xQOo_j9tYQF_cH2b2AiPMJHZub7Yu--0uCgy_Z4_zQzhH4eTMCFwgmoLtX5yicZBLFkr5Wvwia-0X7cABmMxN6pH2dvsIc_lYQAH8SgayO9_CL_dWOgb-jPl2ijChCPt2tOcxqt8-WN9xuzritXHVueLxyfooaKeUjBesEkq9b6MNcjTjLAOhyaVYQMlhnsrPOiAHWLhUcqkEvMO0XgmNMf4XHKZjihw_PmX4PSkIG8RlG2w510Oz1ZgeZ4oNK4wE53HFuoSyxrj__XlYQHubu8_tCksWtVxpsXfVAlOQzcmFgyfuDv1J4K3poApS_jHxtdbKU9gmpD0h-5DdWtSlxF6J72IDtZHHJg_qFflYQB_ckwZae6IrpdGy0CgwdVNMBdw9eRJ33gKtQ1nqyvfJpqhSaTUyfxUjWLWTaGMxnk5vzsdklvsL04HUSgUjlfVYQIal-2mwa2v8_09mbHwfbrXZO01OXYGsNtiR9PLCMT0eLjnF5ypxBEvxmSXvVqjAzoqOJusQW4NZvPAS43DF3JZYQHO2flLqHp8xhKNG-KBEIGW9q0HWNw_R28bISbYfrvn0_UDUfY3gz0yv22Qc8nwMJhinwN7qzANSuMewtROJOhRYQElnLB7-tPU8FesL-8dXXrousJ0oG4AoyrMB_7gI1-p1Nl1Z5Y3Ia4tQvewaUg7sc6K1P2llgkGdsZiBdCAVoZlYQHVOrPvoUoacBWmcEitnhzU_D_Ir-6BLeed1y_KEwGpT4e2NREoFrhqkK2cPLxYTIIueOSquVKxvvDfktEnXYNJYQC7o4SUZmAPSoXE-pl1-xiYfGaQElukjJ6xzE2-gcRyi3P-PmJiFGyL083JT420uRhkuJ43SAMXe6cqS2EiPsPhYQGRm75qdOYk6HPY1go_l4w--6TQvqVjGMx2H5_ZYQxorV6gcabSfD8rUg9KxMJTSvzkaHQuwIIESTe_PtI5hcu1YQJ04-btq0KqFCWPfyaPYi8Gnfh_1RsgGJM1zC3CVoxyZE0XAbxN0GBu6nYyoOIe_7ysIijHptwFCkjJEotsnz2ZYQJ7Qjzo6F3C8y6w9nfvIYyK8-XEXsPrz39oiKXNU2DEqKFleXO-Qc9qXlIkHQL6dCFtLKt-9B2iWwVxsMu45H91YQI7d6UBUsZc2Nls07vYFFeCKrfklqwVrnojBTNpdhPDvzQdVN7_I06zXSobSM_c8fMHcOJmfWy1PCrnHUbIwo6JYQD2StDkfaP5WNbdt-9IJS0TlsQkx-wXzq9mVDsrkgGS9-kCVbq71OXQKQ4YsU9ANhV9GtaC--LWFgEQYBBEZ6ahYQOuXVd3SyZUuO3pZSeUlBSVY47Eyu5Jsj2WQgAS-eIlq9zMeZ7MKXbyqjG5SJeo4Ozy9XphzT04MMM2Wgks82kVYQM1z9K1BUx3tulPTCqexjZtA23fdgo-obmFZFQ5GzXPAvpxqtUXxmqOxLy_LrLO_uGu0CliWnk_XTN7HjD3dzDZYQH69kHTvYrPah00KEmRgF1x9vNljgDrXtO2n7HAc-PXIk3w4oZl0QeO97bNij8rqzl5pp8u0dXlWXYQAZAux4wdYQO331CMSaBYoPrUhbmOIHoF1nJi0SQRjriEIYH902YMGNwGaN2w4m2UUuM09QnAdEWiN8fVbnVJvPAVWCUVUMZdYQI3F-c9VlwRASNT5X2zam3LCaWy_R_t07iMaCgDp20xmuiguiIjiydkCl53j7hP_WE9PLtdgaKhXpDRubN_bugxYQCVvkRyWXLR4fNz3Iz3ZU6-Rghbfbc_2vrxAQJG-o6dpUJ5zyKIQ9_9Lm6nS4Vcv1A6N8Mm1D3mDbkJA4obpT4-CZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};