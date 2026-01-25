import { SeaWaybillW3C } from "./types";

export const SeaWaybillSampleW3C: SeaWaybillW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/sea-waybill-context.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "SeaWaybill",
    waybillNumber: "SWB-2024-8899",
    bookingReference: "BK-SEA-2024-001",
    shipperReference: "REF-SHP-001",
    exportReferences: {
      taxId: "Tax-ID-12345",
      freightForwarderId: "FF-ID-98765",
      customsReferenceNumber: "CUST-REF-555"
    },
    shipper: {
      name: "Global Export Logistics Ltd",
      address: "123 Port Road, Shanghai, China",
      countryCode: "CN",
      contactPerson: {
        name: "Li Wei",
        phone: "+86 21 1234 5678",
        email: "shipping@globalexport.cn"
      }
    },
    consignee: {
      name: "American Imports Inc.",
      address: "456 Commerce Blvd, Los Angeles, CA 90001, USA",
      countryCode: "US",
      contactPerson: {
        name: "Sarah Jones",
        phone: "+1 213 555 0100",
        email: "imports@americanimports.com"
      }
    },
    notifyParty: {
      name: "Western Customs Brokers",
      address: "789 Harbor Drive, Long Beach, CA 90802",
      email: "docs@westerncustoms.com",
      phone: "+1 562 555 9999"
    },
    transportDetails: {
      vesselName: "OCEAN GIANT",
      voyageNumber: "OG204E",
      imoNumber: "9876543",
      placeOfReceipt: "Shanghai",
      portOfLoading: "Port of Shanghai",
      portOfDischarge: "Port of Los Angeles",
      placeOfDelivery: "Los Angeles Container Terminal",
      movementScope: "FCL/FCL",
      dateOfReceipt: "2024-11-01",
      shippedOnBoardDate: "2024-11-05"
    },
    goodsDetails: [
      {
        containerNumber: "MSKU9876543",
        sealNumber: "SL-112233",
        containerType: "40HC",
        marksAndNumbers: "AI-LA-001",
        numberOfPackages: 20,
        kindOfPackages: "Pallets",
        goodsDescription: "Furniture Parts and Accessories",
        hsCode: "9403.90",
        grossWeight: {
          value: 15500,
          unit: "KGM"
        },
        measurement: {
          value: 65.5,
          unit: "MTQ"
        }
      },
      {
        containerNumber: "MSKU1234567",
        sealNumber: "SL-445566",
        containerType: "20GP",
        marksAndNumbers: "AI-LA-002",
        numberOfPackages: 10,
        kindOfPackages: "Crates",
        goodsDescription: "Metal Fittings",
        hsCode: "8302.42",
        grossWeight: {
          value: 8200,
          unit: "KGM"
        },
        measurement: {
          value: 28,
          unit: "MTQ"
        }
      }
    ],
    chargesAndLiability: {
      freightPayableAt: "Los Angeles",
      freightTerm: "Collect",
      declaredValue: {
        currencyCode: "USD",
        amount: 45000
      },
      carrierClauses: [
        "Shipper's Load, Stow and Count",
        "Said to Contain"
      ],
      shipmentStatus: "On Board",
      shipmentStatusDate: "2024-11-05"
    },
    carrierInformation: {
      carrierName: "Ocean Blue Lines",
      scac: "OBLU",
      carrierAddress: "88 Maritime Square, Singapore",
      signatureLocation: "Shanghai",
      signatureDate: "2024-11-05"
    },
    nonNegotiableStatement: "This Sea Waybill is non-negotiable and does not require surrender for delivery of goods."
  },
  validUntil: "2026-04-16T15:52:27.460Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "SEA_WAYBILL"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "f038949ced19011b34b537ee79aaceacb387cf60cd8f09f691ce5ec2a4f81962"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-16T15:52:29.746Z",
  id: "urn:uuid:019bc782-1547-777e-bdeb-1228e0d182d3",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-16T15:52:29Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAQ_4y_SPjoXKBPkE2QrS37nDUsaG1Af64cBf0fo1m0mevZlaf9Pq_gE3daX2srMmC16RajiZ4eYIM16hsAIJd2lgjgCQD7X8DxWALbZokY_jzbItbH4uHPFqHUmjKtuBcYttveYRYICO5gkVGJs9LE3Fea-yOnvIOmKFHl02t8sovXmkfQbZGmGNYQCrIf1ZsLzVkQ8f1d7nkQBYr6m3ion8eooE9Jj4APoQLbHopzrfPqh5VKcl_qWQU9o7v1Dlti6hEuHGDrGaeKOFYQCM8kF2L2W_0v7IJyVnMVnZH5Gfu6UOv--iP_yFvcsK_ixBYtnnAoV6w1xbhLVmOrzVeuZYfqUYsjtuuEyu9PhZYQE9cUrwHClXbsK-BYu16ZFBVmZPyxiiA-8Wa9bRbTI72ZRR56ebMYz7GzpcpftHV-XMth4IcRnu1MWEnahFCuLBYQPRx9BL-krxZ16ITdO0YlDTmUl7eHJeRN6wu_PJjs2C0czEpoL50jPvVxwRTkaNwjvYqBye_toN5EArqs77gm7BYQEKhQDGMq-hno6gilwzsulfW4nsMb8B45b5wuAl7DooiVM9MNLb-mSb_O7Q2FQDWaK2FptiNeVa0KgifXTiDaNVYQHtNZVu_qB-nZZmewl7WkcFMJhQ6UMpEMbxaVqEuZ-k5Caa3ZmJvIn8mRxHFEOHoDexzQ7wmeDIaWo_SHurINn9YQD_XmjL4OFZtyKklyriIWREF9NmVbblMkAYaeN8ATKcJ5TPMm3LGxUmKVKS9YI7jtGMLFINZylENy6v_s49ywVhYQMhbc_CvKOlekNvdI40RskkfE02r9R9sm4VLJx3WRvajXCUHYJG9raKny_Nlp83H9T0g5-23up4amRyBi6u_uIVYQPAVx-73T4otFq49jgqk2QyH_C5hXJTNBHM4hwqpE9qI9aDc2UjuWV_DxN4nb389ytEUzxgdu8dDF5J9We4xNQ1YQNYdXdmCl3-mahbHKXFGc3_N6e8Ser_RoYJ90mN-jDjBNvw6cUdrWatUNZf-7JP9IGoaacLOa5rhWPz5WyJ_at1YQOLEv5HK8LBUTCWmG_aUGzRMYsnIk02qnBSBLqxbfniVW5gPFOVegjcX2BnfzykY3xmF7KXOgLx9Z0oUZ38jY7lYQFCW91Px68MVaClIGMZymQ_lx-pOgxuEHwJUSqRaeUiqP-ndIcLfFGILPbxPA9tBi2bUidgpeLvLhJ9ZfVgaN0BYQI3OOaUZfb3R3itMCx8gT-1R_LWlYvTP0kAC_DmCxMrH1AeaEPNuv32SwrAmh-XVfkMx040GwRAXoVO7tKAwNHNYQAO2X6Eu4tXVGM06zoVwnVRv2ZrfxTRLCi6T_QYvhKw_Z83v_4W302p29mJNdMgoJG75JJrARAnZHiJlLVGekGxYQJWhiExposXZN1J7B4_1b958asOpuFMgiy07P1dCQRGac9dutLYPpP95lTnNBHkiwqMBte9WQUm-rm-4aW8ONI9YQEM0yqDB3GXnuwfpETCl5BCvdbuKLFP0vsliWBYlDov8gxZ72YF2IvHNr6BjXa1bsSvxlE-sXPAZRlR4fxcAOEpYQNgxOyhEC1gCmAeYDMIPmNQxBYFUBTUPkxhUfoyTEo2PwDDRJArffpdxWoN_f4m9QmcSiY-Gv_THYHE4h3aduZBYQPSOHBun4JNmR1OwAGwPisb3iKxw6w1Q3S1sdudZQb-NzI0L9jXnAksF8vN4nELNPT0be8p0l_FB0Zx8fqem3-pYQCZRAll9IQPAqyHpuvRPsqOPLMOTy9LTNt5cYUZFi4AybxyAFz4TI74AO2gOG-kcUa-iEJEHFMVlii17frT5qXNYQN3wXINoNqTRjIAENe89dlHxH8GmXXiTs0Jybhl2pC6AzWTmCQfnBdE9VlDVh3baP6kGPVh4bbQSKkO0_tYhgyhYQCwZKqcObUfnteIsLNkAS4SgL8__lj7KsBQKZLO2AImq0odPpppYD3BdXFBOO6VHZS2bieQFJx7G74C4o7G58ohYQLzcLPXAlsqYXF38s1slZsNcn0pTWtTSiozNoxDKtnfC41sJqKZwpqFxw3ONKvtS354M1DVkeP7sDwcy6uGR0tVYQJW250ZVHSiSVN_saIPMLix2IFFKNV0enlR7qZ9i5RJ1nXcCm1UlUmsE6YdLZYJ_S6SFJEQfMU_p3K54iGHup9hYQIEaTL8suC2wp7quByHevqVQbZiiqs4xtqkwbfd_qHKw8aH8lcuOZmZRtIoBqYDZBJHLaxCIaLcK3xha0woswWlYQKaulh_Z0SEltZZHoKN5QbYxZk9L4xvEQYTaz0dg1zUaYEquYxKu2hzKfkgzlfSsj1jw_IoOckZDfNMd24HZOwBYQBSYdQ6YRgllYxsHFyBSnvsl4GlnDGLm0n-up5lXFwSgYJAs6heaV6cm2JM-46yeJHNYNAER320nCoIT2WN41nRYQGuQMBggwwvIglt4h7HaFq6DGjB2Wt8KjfR1A-fowcsDjUp_1KccofiIikisbyXF3sK0Yz9cySljkAKk0cvMS5BYQGuTtH63GevoxI3hbnbqPpZnS9SWA5CzegVoYNuaTqmWlFII66WMQZTxM5aYESaRxo5yFJ7KnkN6qsPOLl6M0ddYQMmC5ixUMZBK7taaDj8upk2ALTzyGAaT6dxCqI_nnMLBgUnlEa-wWvoBswa086hWpduszIv4d2xz8dryiwOl1NVYQEPdZVY3GRv1CZSGvewckdOXoOn0mwIwzQxiF06IA_yn3oN3nGTsyDoMOnvP9K4i0N9IoEYwSmWjLbdiJFudx9VYQDW8iQ-af9_uZdmYrchWwxUpaENmCG04m8Zw6X5EeGk1NMJmVD_VY_t-_M2oyYPADqTyWGhyLRHlXzStCdjw-39YQHRliawHa-u5acBm_9nu4y7LsrIWgkoEPnHr7bUk22AT7C1q6LwzMMmT96nqpuBiXJOA1QYZLWACQWmjTE9fmdhYQALiVoTGS-foH3nI8U3XRIhcdysdihugvOHE8DxR2blB6ZHfgvsPZeOOo0T5qeNQEF3Jbl4xPnpPpVoNbnCfqUdYQMXOdzch9AzBY0lW1-C8Q4L7VzJ0_AzC4GNhrnRAV5e5uS1I4--YPPAglZOfLBbvbGfhOsV6odbOfmUh9zOZjyxYQGlqD0sh_onXR6ZI4rsrI37gzkOLyPhA1W36sEI3U0XDBvwiFGAH3Y_OElVYAu45KOjWoub0vJSld1fPhBLGBTNYQAZVGvDh01pgD_CiZd6JtxWoKlzRCMRJj_SDQc16KpjXUPycTWyfbY4HGxUejLWJCAb77yskOs88ogpzp23QWdhYQIuQ2LdAjtKxW079UELqSt_MYE3TRf5_FP2S8OJ4sBFSl_9YJ6Pv5Rnki_ounrkCF-1v4YER2TSONwZnpbs4fgVYQB6QQbA6E-DlweV2jjoe2OJK2EekwLFWwz5jQlNLdoNtPraBTi2Kcb99v0_FpeUpUO55MZjHsY6nElZ5Pag2n1VYQFMRcDK3Z5-P1C4sh-jrgLruCw06RaGK8JKINXKC6ZDyD_rodLoXeGM7c6bjwZdePimDBqlqAIbD45WzumA3X11YQCdTPUPreUCv9K8LtBn-LWU47diiRHwoFFMhzje0w-VlhnvIlYR2OLk94_eYYAg_zBJRLAwS2xVD_okvHZDRw3FYQNJOCcqCy-VipnCxSeIlqCQaivyZ68Uvr34Up94TPNiSdJ5DVDd6b92Vkm7pDbP8_dq2P5NHm2O2Ptp-PUFjSyVYQLL6Hg5KdtHtGRuFjHve-ofkXtZDqW9U4dzUigxiQqL_IfKc6Agg5cebBAlStegz5wDDQEAPvXEPYRGy8cc4XdpYQHlgl5uRTD4byo-fhYLFBJbVH7ln9dIbQmCVwgwQlOZ3846wrPQUNQMKbNLRCr8KYyPl4fMIBGknUARopWO_qfpYQCxxn6ZVcQlNsYBhS8TElRWUtNJruLPNSKVxLl_xYzGdOtICml5cehQazXj03nQRgcYO5oCdaq2l4mnBSwRjA7ZYQA-xm_hWCpcwCIWI6M1_WLSYTwQOQT9dTOaQlcvh6v1L3U6vFVdMpVlHV30-86GVix8ehlR4KJHj9BfeiHW_XwdYQHHryOppO0d5d2psQE_CaN-zs84KwFbhaEFFaCgqib-ChAvTi6vMuUQowEES3zApPBeLTuoq4CTESVNdLpdgispYQFrRWd7-ToBxEXZA8zX41JA4oi4wU_0mJMifXTiS3fnOV0uvYYuVzBxg1fJmafwGZm87E-tAq-of0IFWF4eBBkFYQNIHoOUl-XnxvwNxaGCSK5DvnVnUIcWQ9Z0S1UaPVr9Vq10f1MFmsA5vBm_RFCqKrTFATqFJxCNlUP3dDtAPFERYQANOI-g83FwLmGWIVDIh9hR1KPoKnqT0S1e6kOUuU5T9Bmyz76_ciGWtny2HkE3MH-SHkGtbWDSHItmIX3aliA9YQN4KqBiu432LcWA859CI0cOKXH_SQapeAIQlt_qDeqrIOjUbiDe-r_HsQ3rX23nzYpTW4j8t_G5BrV3nzRmD3fRYQJxfSlOOxWNezFqwT_3F2n7m0wSwywG7-zAQs-1pWkbpQnUj5fXHlmMvDXwDuBZEW0ndM2O7X_P0JKEGdAAYIE5YQBq3M249r4XPcEfJ2zXMR2mIPLP6XY7-ai7aAK_f_5PSJPHgG87ytd2XB2nzwKiOs9gG1lBwJR8Kk9Jo-FXQ0J9YQOtQhE1beDNqwYAkUYd0lBzGJfjMj5fY4KUOsvcD22LZJRF5mz5vP0iGv-77FPnrQsCeLKd4rLHMAyKmHFCzAVxYQJKo8jWlToAQe2CEwJ47IIi1x88h5-IS9PwipNl5K60867uo3EAOAqb67qRmX4UNpsGay5uzLZk_LU_ySxcGbrZYQJmPDg-zOZ9Kt15aq95Hc_3yPlEtL1UGzMxpllw5ejfmlem55V8G8kqNi8Lyqh-yN23GNbbKdiaUuQZryxtfZ1hYQHlO4UbU72RYNzhkerbyR0rMFdWbX_a4ebQlI6LgfPnZogJzD4VpkysuRAJXB5mT9tegvHfN3clnI3-PJP4boqxYQKIajSF_TQ_3NQOogzVet75P5t-TbRpHA_IrIj98FBEwY5parmXvN7BtiYQ3rBRr1-s49R1lyPwOxF-l2QbloXVYQKkejN9eMlb1qqAScrOhh5mYrGfPO02_5ASCUDxtmwpbizaLUFMQmkziktjDaXMUvUivTVz8qTQj48lQ-_exbmhYQNyQ5y-zxWbNf1gbTU4AQPycQxpxWXflDqbuLjyaERfaGByoutMWhmxmKgmDfRdWL_qfWdAfSE2fJOvw3c3SfchYQGDVvUHBGun5emTjaY_6SeOa2vAq6-9vvpJUhtT1lWwduaROQWqfXRksbkn9Pwzw-GEnYKZg3Hxvhkp2bg_bC-xYQKd2DZPZwQTOS3AzYjH2tNemei4rgKPLkJLC9ha4pQyg2EfL7YpH8XZA9O8UhW_yOgBjX33jsqQiX7NoL9JNhe1YQEKvgQXPL7wGvCY0AvkEvBSYnwasKXzia4EiyMwjnqfGJINzJukNcxZLuHDgXTkB20I6paDpSKVud1Af66wfPMRYQEajELcZjUZWvWNpE_x7OO8fbYfsJWJRgyCznsVhH-OIrpyopMpzb-VPcI8Ts1uz4KhGO50LSK4IOwAsXSfN3pFYQKqWTVgQQvFOo1FPU0CZb46ToqZq8aNfDqMuTC6C_r9wAGx9kHKW1iDUrMUU1LH_cYkUTgCpCA8KZyxFjh7vzPJYQEisIsVn5m1DcHIlktT_RwLUXEUqYQEkCsrsxfUTZc3HEpFgH890oOYuOBf8_ovMWOdlBPHvOfnHGz_lu5FcIHlYQCZOtB0cBWcwmPNbcMyQHQO13W4UFTqMRhNHLH1T_Y9VmJfIjX_foYO5dp1wSRFD5ad4iPvWXa45TwN2mTW7MNJYQCGB2o0yqVl3I5QuF8y1ZhWnNHhQro76oG7_InDfCisIAxrYb28q1dVjI95PJLmKrse63RYJ88EyuySXLigDvMdYQHvjhCh62DzS2TkDUUNsQLFYy91dDyh5Q-nkVTUEFZE4fo_2j_tpuX4gsBh9b4OycaVfsh-d_hbx5EwQF9Jo7k1YQKIyAi7GsEHbTWKGM_A1jn2jUOZ9SQxp7tnZ3fBgxk8fr5RZg_UMGSaF_iYnkE9Ge2Ui3EM7kMkN0-w-evn6Jb1YQGzd6EeG5cGwrm1qMaVGpj4tBTS_hdIx-k1xhRJDhqwHGzAH91-Txme522FLVKYg0Cy_vqreBsy-b2yOAzwdSAxYQKxSIqqlDFF6ZZN8Btp9p37LF2ivODu2fCINVoNjtR-VvRjFtbTD3t-FhVvH-3iU6ytvlj-7a1f4P4TTWHcYm2ZYQC1aw4XMiDOjrHKlE_214HI8irb8a2OOOfV-gtTYkyRSrrSNdrO4SI-BX5lsRJgwdVHb-97sTuNGKZRxZS9hLRpYQEsJk_hR6hDmiAzRTC2Kwh5WTlJv1pIfmu5ZLpany-tYo8GHW9hQLb1OEECG71UM3z-xW2S4s0hC48d_a9KrXP5YQIE1mG8r8GjwuPE-jt_ZkaazDI0uWhQij7aBZkP4455xFgWHAGXYTHKQdmnjq8QMp8CSwfs2wNT_lWlQRxJm36lYQCStpoOkOlIbu6Zd4e3ePSq2R1vct-6RttQ4FXoiZcQrZZ7iKEfKEO2j2_3yOFD5-SqxohDnSYO483sfFR1YowxYQI_9CgTPAKPbQaAt_xcD6UNuPF-5EB-688dVUTkZVLsoFmMleFAW26lAlq9-DGmtm3veZyT2ooeHsusGZr-UhQNYQP0aV-61qOJWOMaMSuFJi9ikrq7WSH3yJJIQqAreDewGaVf-kMsvhmtXncKBi-FvXsnmlYssT6p3ogQeMmEFRZZYQHtElpYtUhHIsoZimA7pc1yHWJBnhMXFA0JGFeVJSJYs8CT2UoKorbuI5KcEu9cVRJsgiZ479cTIedNb03998dlYQA8nyiuxZ45mZhccDUipyO0_GU2OzY7uNQTgtYmVS05bUpgCGlPJk0tHjyqiBzA--wjpCQJXT7Z4CS5-hrkExpZYQFUVwYqL9qi4b0DP_GKZghzRsvrYygLkCqzortkk_KKm8qtSKug5GfHxOvTQWeaog8XB6_s9_MUkykOhXHVLnOdYQL033E_3RNAIqL3CUFeZs0bQy1IJ2nZTeTgB6vV6hshZP1QiHriS6dk9mOeLA9Wj5cZi3lrEw2CnMqQmK1aTIY9YQK2biFQ_W4bO0dhprBFaXWy0vwVVKvuFsBKVg4dQPgvWeu2nT2xIVVxyPmJy7wBs_gmcENDbsIe1Oh7bVGQ9cOVYQLlae5Qg8jC0Cu_Ss4jALXEyxyp05YHIaa-5T4JsQmMwt3I7es8vAHHlyCpTQL1USSgd4USPy9mbueWq3d7pnsZYQHd15PlI2CaTYpGFNms_Wxftt3xxomEs2T5tOuHs9H9kEG6SXwcleYYsAgDVLOK-FjQj9SXniwumA01l7tCjvhxYQPAV43e0d4-DWJ92U1tGrgmPXNBwcvTWDw4XALnuCmfWe_Bl2iq6w6eRId0gjNJELHghSe6fjZdWJ2KBblKCfINYQE6J9JekBuWtUaRQItZplm3LSjhXElGkruMUMnNJ9f8xik1u_uoXUX94tHOJnf4p28SW0IDAw7BHGSUYS_ubiQpYQErw_-66wVSj_ouO36tYr8mezpwzOFQv3jrlGE7SeMuQAOgV7YFVUeUTo1o6F_M0q3cU5lOah2C4AVQxJDG752BYQAvSrDVXZQUmf8WjhGf0lYFtCGdyu8pXzIKaZuuYSe7gCDLggkDQ_joZWg1ZWQjBeOB0mmK1BjBGa0h9uc57Hu9YQDhwY1CxiTK4m9Is7Q-7PrATjc-1BRsWrLQi6faWWF-zI96CWtzbZvKZHymUayykj71Nx8qXxuqk9YgI12wCsSpYQCio9kPEJWJw0dPmqXlAuSfrKs0LyEImDWHdIgIJXcYwgeK7KW6HIZWirqPXm5U4gyxXkXLDtFGKzL14kz3XwapYQFCPtLiMdWLlmiOYOSz-DMSMLqNlygL69JLK8hO8NVXFjZ_LFc5ov8i6B919roCW5n_HaRm_65ImZeDmV5_o4EJYQElZHiq-PM8d_EQBXBzqB4H8dfyMxJm_5XMcg8yKDTW_kA3sj8goGi_YJE-lfG1oP2AwtF51ykPYVkiaqb4TXUlYQD44R287tU6eRodJNWi-8C2AKeVlN_pwONusqz5QzczbGzqlOtGt1aupcFRlS7Y0HoOcHXHOF8u4PrhFseR_EPJYQEjvUZoZD9i1Qn7XzADhWZtKFssjxjL7HtpXZ-o7AJH0cHZeJIDh45ZU7N92qF7BliLeYdwhr1PaS3K5iYrkvx5YQH_jeDlFfcRq9Px_TOCOjY63KfHWrsaiU2xc1Ummdy6Uto2DCA4cKaFNiCrSQOLHxNkh2T1HEcc8rRlhEGmKOL9YQO_3oF1zSrHSVetc1ZL-xdAbLmgtfT51lGcduYPU7ZuVus3qWjKW8a82jb99vUhejmlkFR2X4xbELR34eBTegDRYQOrzsEdwiDVjQBjkKqLColkEsAI2BmVXDo8Ik4rZo_77TTWBYCzReb3QKqFOova7dfQOiMJCBjgJxcssBfDZXolYQB8SFljs-wrV0O8rIz4jf_uLyC-YCKkpB3Zkbam02flHdwfI91lV03JFwQmSg2jVrVkBLkq-L5Iay1W-J4hX8oJYQKciOGE0avvAxqvTP8YjG2FlctUEJuO4EyAblFzc5HcSk3jaqMbz9-TsXdudrL1_Et7CSNjN513E5flqk3hc-ZCCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};