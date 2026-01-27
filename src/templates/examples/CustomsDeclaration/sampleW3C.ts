import { CustomsDeclarationW3C } from "./types";

export const CustomsDeclarationSampleW3C: CustomsDeclarationW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/customs-declaration.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "CustomsDeclaration",
    declarationType: "IM (Import)",
    procedureCode: "4000",
    authorizationNumber: "AUTH-NL-2024-001",
    customsOfficeOfEntry: "NL000100",
    customsOfficeOfExit: "",
    placeOfDeclaration: "Rotterdam",
    dateOfDeclaration: "2024-04-15",
    consignorExporter: {
      name: "Global Manufacturing Ltd.",
      address: "123 Industrial Park, Shanghai, China",
      eoriNumber: "CN1234567890"
    },
    consigneeImporter: {
      name: "European Distribution BV",
      address: "Logistiekstraat 55, 3000 Rotterdam, Netherlands",
      eoriNumber: "NL987654321B01"
    },
    declarantRepresentative: {
      name: "FastClear Customs Brokers",
      address: "Port Road 10, Rotterdam",
      eoriNumber: "NL555666777",
      statusCode: "2 (Direct Representation)"
    },
    deliveryTerms: "CIF Rotterdam",
    invoiceCurrency: "USD",
    invoiceTotalAmount: 55000,
    statisticalValue: {
      currencyCode: "EUR",
      amount: 50000
    },
    identityOfTransport: {
      modeOfTransport: "1 (Sea)",
      transportIdentifier: "EVER GIVEN",
      nationality: "PA (Panama)"
    },
    goodsItems: [
      {
        itemNumber: 1,
        commodityCode: "85444290",
        goodsDescription: "Electric Conductors / Cables",
        countryOfOriginCode: "CN",
        grossMass: {
          value: 1200,
          unit: "KGM"
        },
        netMass: {
          value: 1150,
          unit: "KGM"
        },
        supplementaryUnits: {
          value: 0,
          unit: "NAR"
        },
        itemPrice: {
          currencyCode: "USD",
          amount: 25000
        },
        statisticalValueItem: {
          currencyCode: "EUR",
          amount: 22500
        },
        documentReferences: [
          {
            documentType: "N380 (Commercial Invoice)",
            documentReference: "INV-2024-001"
          },
          {
            documentType: "N705 (Bill of Lading)",
            documentReference: "HBL-12345"
          }
        ],
        taxCalculation: [
          {
            typeOfTax: "A00 (Customs Duty)",
            taxBase: {
              currencyCode: "EUR",
              amount: 22500
            },
            rate: 2.7,
            taxAmount: {
              currencyCode: "EUR",
              amount: 607.5
            },
            methodOfPayment: "A"
          },
          {
            typeOfTax: "B00 (VAT)",
            taxBase: {
              currencyCode: "EUR",
              amount: 23107.5
            },
            rate: 21,
            taxAmount: {
              currencyCode: "EUR",
              amount: 4852.58
            },
            methodOfPayment: "A"
          }
        ]
      },
      {
        itemNumber: 2,
        commodityCode: "85369010",
        goodsDescription: "Connectors for Cables",
        countryOfOriginCode: "CN",
        grossMass: {
          value: 500,
          unit: "KGM"
        },
        netMass: {
          value: 480,
          unit: "KGM"
        },
        supplementaryUnits: {
          value: 0,
          unit: "NAR"
        },
        itemPrice: {
          currencyCode: "USD",
          amount: 30000
        },
        statisticalValueItem: {
          currencyCode: "EUR",
          amount: 27500
        },
        documentReferences: [
          {
            documentType: "N380",
            documentReference: "INV-2024-001"
          }
        ],
        taxCalculation: [
          {
            typeOfTax: "A00 (Customs Duty)",
            taxBase: {
              currencyCode: "EUR",
              amount: 27500
            },
            rate: 0,
            taxAmount: {
              currencyCode: "EUR",
              amount: 0
            },
            methodOfPayment: "A"
          },
          {
            typeOfTax: "B00 (VAT)",
            taxBase: {
              currencyCode: "EUR",
              amount: 27500
            },
            rate: 21,
            taxAmount: {
              currencyCode: "EUR",
              amount: 5775
            },
            methodOfPayment: "A"
          }
        ]
      }
    ],
    totalTaxSummary: [
      {
        typeOfTax: "A00 (Customs Duty)",
        totalTaxAmount: {
          currencyCode: "EUR",
          amount: 607.5
        }
      },
      {
        typeOfTax: "B00 (VAT)",
        totalTaxAmount: {
          currencyCode: "EUR",
          amount: 10627.58
        }
      }
    ]
  },
  validUntil: "2026-04-21T15:48:17.427Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "CUSTOMS_DECLARATION"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "d245da0bcf17a7aed3fb67f584ed53a500469215303b5e702973400aa1d83e6a"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-21T15:48:18.799Z",
  id: "urn:uuid:019be13e-0d03-7995-9395-c01f2c8ada40",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-21T15:48:18Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhATblcyxJlmHkyxUcfe89SkjdAxefrMZKkg5eHVe4U1RaZTFq4XrkOSALkPtHFrrNAKb4n97VPRcNRAIugmvHNolgjgCQDtJmehGJU9KvnCQVvQlUHlodWxqQ-I_BYaiXg42OgPVtYIKBI0RF9OVelFUye1qRyR13s9wVV9i8dA_ZIOiW9VFRPmI5YQLHGlmSIYyjkqMwCvAthh10oDJqY00ByTV5ff7fgcExCaf4BgNkqg2o9w0Y4vsXtacNfVuiYi5IXhNb6T2nmtwNYQEzbEkLfc8vn6snVcWxpemZy7A-y5nr22ELMg-WZbmZS2beh7LtxgoPadUEfWtE0gBQVcYF9EZ0MpHCXFa3NrvZYQIWh6mOykc5WCTkfVZTDE-dgtSL4EAlZMXrIUAvW0j4Gpp9ueAq4WsMQssFtJ7UJvsvDjpAy19OoZOovVG6AFA1YQFE1LCeq_bMhksDPRB_96H75hc4BhUfzVz-ftWG0A1LCCn7y3k6lolwoddw6yLnmLIpUNSYtuCIHcM7f88vLRDlYQIayp_FcTMX2s0CWDOQuuW9Nt_aml1WFfpkNq_c39Grd4YIYBqsUWrGLvS8W7h00CyV5XTsjXh_As5XcOia5lqFYQPY7Z6DUWdRzjC1NrbENBfznDeunmgz_6rxrvqVMEKuz01aAam_y_QNIOfTM-a1TepaYTWxd2DSN7qd9rmzPKAVYQFs3XOXtYrVMa48hWaEgJsg1SyL_WHsroVZYA0BzB1eZX8TbNSnZdJbfW-yESrJdRio938palqGz_F3SoZ0p0sVYQHDt8dea4WBv5E99Z1d2pUulQCVGoudZHJLMzPHpkrCwdPng1uAp4H-kkYUZ1tDR1XcLTX_rQDIHp6xm-BFLFrlYQFYxQvOXmA3MBR-Dn7XkG1-d35AG2NveDiUnO6naDepTXvEepYTb5kkr2kW6FTb6GtfEO6jEAzEOBlvKnN8sYodYQBG6Uwu76mz1trxG0GJmwp0UZTMi2rHZQOGxZoR1-COgnDIie03EuUMPPzzhapON5lp1WcBIgI-0nO3ugaTcVjRYQPN6wNQE4RJ6i0BCafkjRXFijDrtF_qMAjgdJ9PUFXEIVbjLFyb6hWB0kW4xM4SCCIRVzB2QLJm5nC-YGJN6Cg1YQGrQpP8bFg7wOgtr2hBNsxbq-ys4Fo7h61gkYFf-v9cjRHlMXwwNi0SYa37m17XJNgKRixl6ZUwYEIZUzoZS8xdYQCS2tTuM_fFyF-YAyijAXLM29cMy_kkEqBdlw3g72S5pxc7T-4RSWBS3Hi_8nC0CIQ-DPl4NUpQhoFNb-RH2oI5YQFlPdm-TROAT9umZx0hQYt1od_1yb1e5JJwwUKtxwT2sjHXcR8nd0sy_ELvwAEW2hb6-i2qZ7sJ6yYmfjV7rRFNYQDWfEUYubJL_YI2U_DJ3r-EsPA7-cnJm040GW0oAZ3wgeGkFsazMzcNZx_hUpEPhBdXlEvF1ey674UKC0fHSpG5YQIcjI3WsSbcekt_cgKB8vVkIkdnqOcz02A4M-6jOyAVdbfaDdU8l6obEg9QgEb-y4r1x1bHCR78ghnnJ6oSV4uJYQNK1Pu2ikvGEvkJtF96aCZ7Ux4u6dpbgOiLMJsTdMV-X83hhp7MSrgw2kO8v2Dfe626E7WYp3H_34LnsGlbqZE9YQMcugNGdUhA01_cJWSddHTZ_566bRHRj_j_172tjTLRWm0kEfg1If-0I8rh83GVOqCOb6gzMK242xRzaAj2gS0hYQE7JzsSZzh2DxH1ahjelsFywEdnPZcqhfbqasCLchPLefc6dquMYUUnuPv00UeaFZ5FDeLDjSeR74G--FTX1vPxYQMddO4CxEBh4aP9ndng6eFxYKARX-nAhwf6RBDfsTXUdO4Ouv-pxOHT4CEOzF7AtvDaQtNUSEy5Fp-0Hs5L8uZlYQP-6u3JImJjbAHz0PaoLBXFZMakcq9L25kBueFYWlaocqhnpTLANPMohwhWHPwzwitEZmDXwtup00pKx4BJORwxYQHoLaEhhqTs2mo2kkYPHGrJzEXif4QpuFdptHJIpGIsHJjymvlobIhsEOrEKCoS424MyaiD2mC2Fx3FoXnNxtR1YQHnWfwFF-KnIaqOkRiF1Xu31GIgAjB9Z-qnCDLBmHcQC4AYQIY0tn6lQmFUQqSB6Hvjxog6D6jaZeZR4QAnu5sNYQCvle3PUbVegnFwEbDAJwZFgW_eisq2sgSRnd-Wu1El52gcxvfJ4Ofga4qpDNSHC3NczOAi0IpqcpHQ4K4LyZLZYQDutqKztHlx2H4AMUEUcHJMGFwzvfiyagYOOdvYFimPgRUHQeavOsTsi0U44AAUWo5mdhOkIwK9GC4Mn7LCxVahYQFEh0rjXZAHLastbAw0z1YDKjwo8vx8des4zewkYGPr34K6bTo0Fmerc0-uv2EzosLbtTgcRH9Qbl32hD0qQnW5YQNhzYv2YVg8NaunPFrSshJoVxrHYZpalRPjK2pzS4qlpeXdS47GQ56bgyoSfJZRU8TX49W8iqUccezwTjZYTYw1YQIqF-Lvt9yyO0wBQ0Qj2fWGg-pIjsdgo2_eoQZI5qwJQ91mFQPbX4-Tx2sE341E_wb4CFlwhyBfuXObR9HZNm3RYQLhQDQnosS2T0srUbfFdoil1nqQxVfSrWQOCHiRJd3xKnDBGAm3jumxwVP3vjaqR3cCINR-dDaoxwR6gy_KvwQ9YQOSLrgdn1ymKQCq0cp_BH7Cs45fHeMnQsJTSJN4J9Ahv3vRYy6GiRMDxHaakP5TDZ6mnBihzAQ6DnJUjjF3T-iBYQOBRKipQsc7y7SCPhC07RR9Y4RuwCOjivVqnYFb6gxLOhTcvaV7ssIN7z9qb8k26ja0w6r5WUXqYLZlHlKngXq1YQGjjQfWRxfOnUTuz14O5nr7poMKFXG8RmjJb7ciiIQb369LeYv_oYq_-OU7yT3kRSVi4SAUfTvzYo4R85KNM93lYQEdQXUU982wbkV6CMiwouSnrpeFeDudT-sxhrPNUcbvHLVTmyy5kTB3lzeTV5h3z6qyv-QRBlB9NFcGdbZG7SfFYQHZkC5iK3bqdliYfmwc0g0A0KptdjToYp3nQ6lBEggv7ddAphnyjvv5rwidQC7RyiYdz8lonWRk5YFeiMSJ_eM1YQLMO_bV-SD6mcbbfuvFSve-h5HpHvQ_cFztf99EDm5MlcapY-4WrhT9seTXeo229tVsjz2QX5YWh1hnk5Ik_jKZYQHEUg4SzzdyHkd9QyFx-wUOc6Te98tVvsVKRUL3hY9r6s4ezB2N6vOySd1RNuCClOdL_bY9iJ5EMmlLQPhj83bNYQIdylBu7a5DXP4PFmr9YW8k6gjj4jj_e6fdydH5zj1YbSKGMw0MQGnZYs-9Gzhkh1vKk7d8UzuZhrDoETbTmHKhYQBJJY4EHoGHL5Q4JUD-BrTJqFBR9m6ZvminNofdYPiE5zu6CG4RZfLxcjIRpFW6PUnu3_Lvi-AGtIEY-b9DcfZNYQL7wVylEBYDEtLMN3mC5eul85u5eAt3tFAkx4eoI5lPB0-qJpkmYHZkvVaZ63Q_646ppn1i4fOwWp_kC4M4mdy9YQM2gPAq2nENOEyT_9Nh1OsUKOk0iJ2vMhiq2ZYTA2N5pHrv1noYKJ5d62ctflneg2V8TVTj4od-IxT8NLDsY5_9YQDnZ_GIqm7SQWUJf0PV956yo1KVtSb_7drDJblrMA2imy8DNbN-glWRvLx2_nMrTyOPCcUEbNQ5_9RP1KZyPm69YQAsnfIb0qK8_LGnHSGApOb8DKjTgOW0znHGvlj2-8KqOrn2daZWcgRDVxR-Q0plal6UmljgvCA7HJF9DndRgpuFYQNiIvwxp_tTdpP6IDr_8OdynfWRlwlagn0SpBNcKuGVs_drKOFm9AMRK_doFzyUd5P9nj-26Mw1QGaQPF25l7F5YQNgW4PtmAatTFYnQ3Opfyf6lm0huEFGd0gvjtqmcrhwVI1apoN0dnIUYu3uJxbr3x57F4P6CwL9eORKeXCk3-RZYQIz9McX2_c9VHqGXslGek-_OphpKQNetzD_Xs37Kw5Fg2IxxX0OrJyLPojX83iOJWwqfDv2rNWFtUdnGUjqN4VRYQIiqn7kctr1v0u-WVUapg3ALUd7t0cV3cEDzKEbvC5E2gjWHnpoNHQ_oCB-ItWjk4llGcBsmeug5ClCwtjl5uHdYQOLovD7ay4uh_GbrDS6036IWF2CyzP73NZVi7Ggb4DL0R7crYMKxXywQ7VHazQZC5nG8OsEzOpwL7MEG3YRIECdYQFEPAJ5yYYMdUt3Q6GSMVCYiCrIXUXjL87dsNGZoXUHo6ECpeOO5bi0tUBxAVAjTtSXpY-97T1lwkt11_6kqj9JYQF5cm5fWFkrDNnFn3zt3kBRQQ0RtPUXsx9Kgvtys4tlIQqXE2p2szgOxTIkfdFc7tYtZomCtn2jvmqugSPQSxUlYQGzuNSA8r63ru7p7ZXxr69sFdou59VjF2DJ9iybpO7D8-v_5BPyizEpr2az4YYg2GwyrJhhKwd-qZHfr4QsUEH1YQMRJ2yz6IyUTfhMFLPLBunTrpGivpohNa6-byJM22PUJIG2G55nB93mSb4iSH8cQEnuzMojpng6DWaIbPyS00tJYQKIkQrqqB4GDa4iBhDmxM6X43GC1UvNEoC51EYvuX58vp4Q_u3vpdHW_owdYSrytdEp3PwEcPzLK6tpK5BWJHRFYQEB0xGH-XWyL8ZDpHi4isOo3y-sT_j3KoCR9onx32lMq8LWUm-KZvQ4OCNtzBzy_k_2xF2TpziV--L7B20rN635YQAqJKeC8Se2gNnE7vifgNbaLdfLKbureJVbOT_VOzTRYCibsmpdN9mcSfQK_7b9N50Z3B0q3uBfgjtSr9q_pJu5YQFCNPJEZV8hUR4g2vC8B-fvJYjqeUFzQkbsAegWBmXFEDzCvTlXWI0BE7cnHJn5oO0114GlhweVaAT0eFg8MT2VYQN4rBZOYBQ9RurC54thECpj1JyKnjPmjHCUUtby_cR4WxVIEW8l_w8QciYTmuHsFnYYJZMg2_CmvgGZp2LbddApYQMhsu8IPw9ltof1qYYE4zA9RL82cpTf2zBvYL7c9RCh6Gnu6KqiWN41Wl6CRm9YQ99f93Nr_-Yw-JNNkz3SCsmZYQCCYoj25_e387BPuK2HwVB1WwMr-OdYzliiMyw7t2qfn8hY5CMp4U9SqWQFVvl2g5ldjpW0oDRAWd2dmgsESBCVYQGBYwiRzG3eRnvKtNwkOhz4tvxkG2JrKyVtrMtDDy0a1CqFecp2TnDlw11vUEY3W-8tdvZQclfjYMDb1lXta-3pYQE2Gc59fs7S1NkW_8z-Po_aE6CuANmpGnRizYyHyjKi9eh7ca4x8me8VB0g9x2lf3vCffppX8cIQ-a67XsVlCY9YQM9V4mu1jsCfeP71okogJ6jbu6xgr9XJCFOfEgTVlCgKbr7YFTHzrPVJ1hFfOtP64KzciD2cSYRUpsV5NnpEGCdYQEYQ2snN2XuWp_gctN7gPNmwOOr_mrAc8ViZqpt5g1nRPeefH-2lJ8bb-fJf2YsEuwYeZWq0WBXms1TXCBnJlThYQF02UWTu48KevgIecU4NxJZMZLb0aOCur6FRG_Hbe7PP_6BvfjzL8UKdZNQLFTTkJp-qvw6ykeCCS-6AKo55joRYQHDE-_rpiNpgbVpNPLBGTBNrFQf7VhWbIxskqwV3v3yNnvclF3omDwdamx0ZweEcFrGD22PTFTfMXZ0g_ujXg0tYQC7d9Lzcga8cUeZeh9PSMeO-HSM8MS4f-UYybJL4mP-Y1p5Vo1Kuzn_ZZPt36v_fuS49IEQmN3sz_pKPwZfi__lYQFkZerI9Knj22yq5H5CrV5-FyccKITutqULhqUMI7WIIK1RGnX81Pe16dbNpyRueJnizvBbGjVpXlPaKt2YMVupYQPyAsspcCBpTlolneO_RjaEzyQ3oHfsro2usmpvFtlBj02lB9bTrQlM5RCM91qs0AZxndn7aSppGPnRbLHja2NhYQP4U0zbt3P6RcZNFsBc_e-zV-jj_Fzt6Ut8By8tLOLa45SlEsSc_7jgpIIryh8aqlXI77fumgfTBtmmZW6clXJZYQCZVhqV5e5gmhKbKeUPHRH1T-MoKRDMHMIoxDL21KxJOSimTt3MkZwzeGvzj81hKLMwTYf7OeKvX8MbZ5DGflnhYQMKUsY3DUlKApN8CfS0YT3WtC9q2Bl2-Ey8yhJTceX735AWfi0bhT3dt8NLCMBrHg4Nk4eFaBTGc1rcR1E7PFz1YQCDjwcxDW_mEqUZ8mTBowaNgd_wUSw_wDRjIdC4UCwRdonEmJDUS5Hug9HYQL7XhJR02l-ttJhbXONI1ORRtBxZYQF7H5tWTvlY9no79l5qp6nyp9X8e2yj-EK6OmRkIQz3BensGNBBfWb_LY-N6oA-vC93zaExRHOWvDrMJhL4-lXBYQPXxoVWJ6Gsza1nB6_l17tLKC0vCD3uax7ihCbjn2LswBWua38p6dWkJm6PIccZGdCplJyuUns91T4qpquXvDARYQBwzoGmZJLx0zzN3FMAXMVZ1aCBIMiKEYEPX94KsDAmeAsPYUZ1Hu4Agr9oCpj9OhexmzLknOOoE_qYrFs0cVXxYQHj05Q2J9ryMBzDux1R1dLIIM9arAx_kX_9y-mpMvAUnaxYnGJ8BArV5LNJFlfacOuS0hRKbyrTgnvctpyoo9OVYQNuoKbtenxLSRX8JLnmY3OGRv3oCUAvutYkrcYIcZQBttdmfmVzBcWUqT86Bulg-ZkHwNx5LtCLrCmvY9gJH125YQMFgMHabl1FXJgLl5BPOBTCurqGAiRir9miiaaDx1UJ63TnYqzCle9NVozNPfsED_PONHSWfNGvydIFZhNRxsjhYQBrYvOz1pPur9ERCtvX1HyvqFlyHjXL9iizCsmrayk_ZEQJ3MrvoJbPNfbvAm0-7CTPxKYZEZ-Nn3CZmMWqIcL1YQBIJEeFzH2Gd5dzWnDizAQ_6M2xX3zHg913iMizjdTyhKNHztMXeat_VL220hUn0y8dhI1_CBhdTQxy2o42yh3pYQJWah1NM3O3FimdmCAWdvdoqrSE2NvelqGyYCAkDpyIBNciA-1IpIw1bhWHCYeXpPq_rrjGsJ5BNk1oj7ZAXLg1YQN5krL54CQjxuMe8A6amLxXDZ5A0OgFPpjx3uiAd-EdshkpraGSeVL4VeJfinrYL4NTEnhb4ZD66B2Uj-aUdlyFYQIicHKC2yCmsSzrKjUB89KTc_iw5Ja9IU2GbCnA0It7RiBjlaMd-Rap9Kx7YEoLrZz0HhtQ8wwpsRttKgT8SSp9YQIs5-sWnJmNcgcFN-nLIW4QGK5EOy4rT72IoUhwrWnle8sBlSXhF-x6BeUzJBA3hgMLG7uKMQfAtq55cAYXNmmhYQGN7Fm_aUBR2XlKf0WNSR_QvfDI-NzZmdIowssI5ZqbCSU-uH_2OcpYBgsVEmStUde6TCA_PRAa55kkRae9We69YQE7d6Qba6_ORpC-miGMxFLJvm-GfcIxbKf8KFngeKawa1r_mM-ILUcFSdS6gtGDaiVufo2qjdKj0ynVoansWx7hYQPR7UffIBWnp0AbMhvdWBJYO5gPEmpgiKZ118DjnVSZBv6BmFjwc2gtJjSYT56yG1t81DC-QF0I8fj0Kc9nn9vBYQFrgQr1O0Sv-wft0q04j_rfw4YCSpy_dvrWSTZXDVNs1ob0b7HinkiQHl92mkvnJT9dmAzO4zvJiKGBHKPvbB1pYQGXLbfcsxfc57tSF4liLy50PSbXEbGKWszXDhNBB51Q2XSNSajJN5LJJcCeP2kUsj82MyHCeZVZvIWj-aC7G_G1YQD4d_Jsci6m2tWIddESP1giDIVkLlbiMspuMG9KrF2BMzje9A-ia_BslUq-qrMyck_sMEJiYrmE_ueCuH16Ssp5YQMOiHykhMrDbgASi3XkaBN1ADeN4H2wdrvw4mPoWOi5P_qJGBPz4yOM1I7aZZHV5eJzidLPE9svi04BzBnHoxJtYQJgGLcagn8hS24Tb_SRX4CeU9-GhmYXZvWKaaugUhP2tqM5ZnzMz_w_f0AGGCV6tc8teI3nRZLC6goQ1p2V94xxYQMlFOrB73J7JbAsLUfzbP5gqGBa-kForBTT_ntvgITNlKyFZqAct3ipmrNqo9zp1jm2SeuLcqo-Nm9UHH9Rac-tYQJ6f7KDla3uaI1u8pMhSkAWMPeKwdC9jkXLfAurhiEiVTqAF9fza-WGi1tekxlBVHXUJ3kk9oCBRzZCJ4yWC__lYQNoxUPU2a4xY6wfjGui03IwX8Nlxbkps9n2MMufTDKrPnq1OJp55qM48iAsq-s9PcuhmaSaTvc6Lm_XpxTiE5cFYQOQT8MUImbT7Uzk8eh5mIMHpvQ4nV1aTQJwLQeKGoRkw6V7VgHXdWSeopy4_ONR0OYdTz9_X9TX7kX0FWKPO6TRYQNf-VqyZaPh9GiIYpylRI0A1FF07CnSKYmRMTcj2sz2CdHdOpkF-iRF135-APgWvx2y97eyNEf-doZ8VrwqCuiJYQJrm-OsnLyFvXu3ShIesTR0UWg_mRS9vb5jwHs4_A-IzzDoTpEcoHA_CbY_HEQwfgbO9ZUCc_ytb7-0bwf_NbZNYQMcuUjw7tm45AGgoWML5VvqGjVfqiE3jfiI-4TJaciocjV5Vxmjl9yO7Y7e3qH1pZTbWDK-jFW94GlgUc03TV8lYQBa03otnyrws3h_w4CYkdZp0tn_MBkFP6SYS4TxiGjoMmFxGmf9gzhBJWddwKQAAyZiiRUyx57pE2khQ2ogpy0NYQNPSjd_q0wBneAyRUaDOdImhctUaxRQEk9KDbNydW4YkuzGqP-myH8rY9M5z3d_y8sKEORg9CI8txC5XYpVwwTNYQFg4ZzyhEift-xl4mKVsIdNCyvKoh4xqe1i1s9jOde40EmD8ALQpJZlI8MBy-kTeWAhN9iStyn7zXHeBwHwoPxRYQAPPzGGSOGskUFxVRep8v0rl0Wt0qlZOkEuUKEdvYO40pxuDfrW87C8AxU3tEPWdHX0x8o57iBArdh2zZnxQa95YQB8ZRkJO4fusMlOfUbccVQVfsZCmkWZEQbviDSUL0zhGkkLpHVEb2g9lMnAgzE3p7Te-7tZROqfDeRIz1go4L69YQH39abhBW5I0AbIAEptDjnI6NsFcI0PrwZGjf5zp1rQowDYfRR358noJrCBjlnCl6nVEclJW6FVHBQpJzcbY4FFYQHFCbZTon3Z5Jz_CZ2BcRloSGlan2T21KINWCYKG5FSLWJsr7YSH92UYsV9SwL1QBmWMNr-Yt6fNA_e69pVsYjNYQAgy5gjpyp13a9bGuwGfHfiaWI0PR5pPSYdzYDIHxSpciRmoDEVd7w-lsKF9clNoNV9snNFsWZaVBq73pQyWdp9YQBnmsWIL8WI1fZePjQicxTurAEMFlOLvW3-nS8a5ooXbvHXiQvST7vFnaywxpMCwOgZJtuHS2Atk6KN7xW3AwkdYQOFfnXJsyvoCzk8kA7jaVbiYAFd0dWCYDt9PIRBRBo2AgIa-Ma_sLABaHMP9iKyHd1sCiAPgcXLAOulGSJwcjYpYQCgePZ40-HdiQDYig8d6qZIjzn6HrvJPkrrYbf3HcvksXLbWhWIEjAE1wPVHuzf9JdygUXmAyP5eIeb2CqXLmfdYQN87tOP3GTnvfP1IJvslydmOpbhGPWeTHOelNtqQZEKUwbqXn1303O9E4xXLlboY8_zp2ySyu8_cNrkevb2QlwRYQBvgFnhXkpMe67VJFpXKvQKk3zK5wkYcZgJSEH6I2eFEnrUUcjz7TwdDul5geX5VOT5jTlOVBrGjuBatibnV8fFYQCnptWUdEznfkMmI5kKynxjAkWL-OTwWyysGK0bZ0xZ3QjiDDJChXk7xNaySuOb--p04H_zKcA_hqc_FhfurvglYQJId2p1WQbpP_ebsOLoc102NbWmnr3SfpNLI-5PjFq5muUxdWolLLSEnorgkCnxPkBjzJKLAyYtcAcjWs1-PJ9hYQHmtKgFwLA-iddM0mCQ4-V6iCbOtPB6Nuzt-vI3vpETRISVyJJV98JvpUlTC6CdpTlRNXITXDpdt4bRxwSfTjq9YQMtGgd9-zrxfFLw_FRIG4lHUyxe2eCwaA-aziTK2jCiNjKckrQJXS39MRl6oNnfinLJ3zb-hjWhiEfUZetwoa3BYQG87hp9jRjvjpMJekmuEdKmfbdcIMJ-scMFJdZFNLWBTz14XBDS5jfjODdf3iRU9cmmkNfFC8X0wneXh3Zoe7adYQD-gWJDYEbvN5yoUOrrF0VXyzzoW-ng47hDW8Rc5PeDn-z-xWp1hMwZDQUecVsQzFcipBJ98xGQGlIE-S4uYYCtYQIB2jmridY7BvbKbYBwG8kIuvz8zMip_-W75EIdgn7EjX7Lg_uaHOb3CsYOOZ2mweP5u-N0neSkznOQgirNayAhYQMoNNCRUqIA9HTtb4keBSYKJqOczZ4zqoNDvgbSvv83kd0jEI0zIL9W3kkb2gwJm0xIGcmEn8qer4Zx9QkLyxcVYQEz5D34nUwQZxbQDdfA_M62EDt1An25qR7rO1XEUdP0DF6Rb7jHeaFBil5VnkahsEUA2SoKbiympxae70MheM6RYQJukQEJGTG0BtF7si0cHSmCmzFlvx6P3onMbbbSKYC1IBGgjv41S5lMg24_24wiqAwv3gRAKuUvne5rr_equrKdYQLJE-3y_ZnKaJ5nGY_wSjI1AXNy-Ihca3cbuXCQLjYrB6rtkQdq1hQ-W-qA3nkUUgcqbvTeE6mZ5LdrsLPar33NYQIWZoFINenFyYYqfourFYoFrHvrYCS7m7FBB2iAAhN_2dRZVM_aExbDNNpJT0cSOs0rha24_VbwlJ22fRxmnmZxYQOJgiDPUc8eWuvDjfQQKyrxzZ8x1WyCX7tIW4f6bFmkBnBElrz6hMCoLbkbzvEQsMkwLBxMIcrwOd4f97PLL9N1YQD7kYxs3WEtTyuNPD4RYGcHdi0zpnOFlQerpvRPL6-uSY359OU9F_RxhLlJKIIO0qThxT8wDxaTi83nmmds396JYQHx8vjpM1s7uCvd0q2fHODy_XueWlzWiGF8sqUodlRdzu6GRpp8nNbFZFVWwHVIpBUYmdLEjEcpGaq6E89e1fypYQPBWKl1WGnr_TV-jchKd7KI0hrAIwBwIYrpXjL_kBZiW8BMN2xb8PHaW-OlZJXHgiK0km2bPst3J31IH9A2965VYQIfl355ZE3L3y67UVtmPVRGimoFl2CgQ62msPUV9ybS3ZYe_WSNEcGSSEOEs7wzjyNApsunVhtPf75AvGBzUNAhYQICoaZqnc-KqMjiTwh6ZDjQe1psZYwm3uoTCyKdwcZ7CcjmOlqcAK90UnnjyfhU_TrX5pkqoKUdF5Cbbn5V1cKpYQOFZWUdySQIdYvknKy9WM5SjvpGWSdUGT4k34WmzLdehWWvZvJLtaEEGmtLFwAd6XcibfKeQmTUrwoM5C3dbmm5YQLURMdSIFMDDBfThBjv6m3V74V5GLljDx8Bonw4g5TbW2f9lZaN2ez2C3Gd5zsW2WkVGUB_GM3O1LPjR9T4LuOFYQEqLLa4_7oYNTLuhZDWxFo53CC-EG1MaSf1xviHDhS15686SlVE3lvA29fK4ZJjbF4ePWmkMGGUPqyUVE-yHzFxYQAsr65G1gvIMfNXb0_V4asi4_9d_h3O_U4EoyKFZRPTXH4uaG3Hnt_wzw4TT83V949mq3hO5aLyNl4948Kbh_UVYQNPgO8PzI-alFIOwc638D2Ln9Z_1_OCbrRN-9_kBgfGqE23E1mYXs_ImWVeolxAvHRVCHUtsRbOLsOYK-su6RTJYQEygQTWENw3gFyJcB_WYmPRoTwLmQ-I6cQAPzNSDwOeMh7zEYmO-aXmWchlO5IenoUIAan5LZJdYB72GGfZdyjdYQA7VieAjxI2jCic1u3rOjcy1pozn8vFYlRRhGW5ZsbrCL3OehL0dw-A3PwGu7CvjS-kLC2t5gmGwIt6GdwXs0UdYQItsRw1sddoSOjYU5uGoJVB_vZMdSIErjISsdoYdHVZaRPmw6ecH2acPOqmdwdr_U4fjWlGE7YydNVePDoXfgiZYQEYyBXjyvbwJKVMM6jJAq92ZKa58F0Z881gJHa2RyLLZFE7AblzDBZtRSrr_71zzRwBd3KeG2nnWTnWI_8JSBfxYQJnI5URf2rOCEOAviuzi0s972Ta4pWgpP4er02K4nQzz2Rek_mVkcvDNvOCTkbxgvaEDGXPxw0KM4tHQHnygaHdYQLuc91cfr_t8SHbMLX9nYxYV53kATsMWimVW2DmLu77v4_xO7jidYM3eH_aRb21V0ilSU_Two2_tdzKbeyO4haZYQDF78xe0QMDk5fQfPSASbAqmwZ5ViQ3NVfw056meKtRywV7eR-SEBtadgXG7heeSi5Undhq-dhl6E-AnWoJyf8dYQMSrliXTqNF7912YDJ2tD6n8cA2Cp-CCLdBbbNS9Do5FbdJWwnMREenZ5oWXDWiMWk3QZx2jEofDcKGyVAP3_vmCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};