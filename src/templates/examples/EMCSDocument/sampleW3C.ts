import { EMCSDocumentW3C } from "./types";

export const EMCSDocumentSampleW3C: EMCSDocumentW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/emcs-administrative-document.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "EMCSAdministrativeDocument",
    documentType: "e-AD",
    arc: "24GB00001234567890",
    sequenceNumber: 1,
    dateOfCreation: "2024-03-15T10:00:00Z",
    dateOfDispatch: "2024-03-15",
    timeOfDispatch: "10:00:00",
    movementType: "1",
    destinationType: "1",
    journeyTime: {
      days: 2,
      hours: 6
    },
    consignor: {
      traderExciseNumber: "GB00123456789",
      traderName: "British Distillery Ltd",
      vatNumber: "GB123456789",
      eoriNumber: "GB123456789000",
      streetName: "Distillery Road",
      streetNumber: "100",
      postcode: "SW1A 1AA",
      city: "London",
      memberStateCode: "GB"
    },
    placeOfDispatch: {
      warehouseExciseNumber: "GB00WH123456",
      warehouseName: "London Bonded Warehouse",
      streetName: "Warehouse Street",
      streetNumber: "50",
      postcode: "E1 6AN",
      city: "London",
      memberStateCode: "GB"
    },
    consignee: {
      consigneeIdentification: "DE00987654321",
      traderExciseNumber: "DE00987654321",
      traderName: "German Spirits GmbH",
      vatNumber: "DE987654321",
      eoriNumber: "DE987654321000",
      streetName: "Hauptstrasse",
      streetNumber: "25",
      postcode: "10115",
      city: "Berlin",
      memberStateCode: "DE"
    },
    placeOfDelivery: {
      warehouseExciseNumber: "DE00WH987654",
      warehouseName: "Berlin Tax Warehouse",
      streetName: "Lagerstrasse",
      streetNumber: "10",
      postcode: "10178",
      city: "Berlin",
      memberStateCode: "DE"
    },
    competentAuthorityDispatch: {
      memberStateCode: "GB",
      referenceNumber: "HMRC-001"
    },
    competentAuthorityDestination: {
      memberStateCode: "DE",
      referenceNumber: "ZOLL-001"
    },
    transport: {
      transportArrangerCode: "1",
      transportArranger: {
        traderName: "European Logistics Ltd",
        vatNumber: "GB555666777",
        streetName: "Transport Avenue",
        streetNumber: "15",
        postcode: "M1 2AB",
        city: "Manchester",
        memberStateCode: "GB"
      },
      firstTransporter: {
        traderName: "Swift Transport Services",
        vatNumber: "GB888999000",
        streetName: "Haulage Road",
        streetNumber: "88",
        postcode: "B1 1AA",
        city: "Birmingham",
        memberStateCode: "GB"
      },
      transportDetails: [
        {
          transportUnitCode: "4",
          identityOfTransportUnits: "GBT-2024-001",
          commercialSealIdentification: "SEAL123456",
          sealInformation: "Lead seal intact",
          complementaryInformation: "Temperature controlled unit"
        }
      ]
    },
    eadBody: [
      {
        bodyRecordUniqueReference: 1,
        exciseProductCode: "W200",
        cnCode: "22041011",
        quantity: 1000,
        grossMass: 1500,
        netMass: 1000,
        alcoholicStrength: 40,
        fiscalMark: "UK-FM-2024-001",
        fiscalMarkUsedFlag: "1",
        designationOfOrigin: "Scotch Whisky",
        commercialDescription: "Premium Single Malt Scotch Whisky",
        brandNameOfProducts: "Highland Reserve",
        maturationPeriodOrAgeOfProducts: "12 years",
        package: [
          {
            kindOfPackages: "BO",
            numberOfPackages: 100,
            shippingMarks: "HR-2024-LOT-001",
            sealInformation: "Individual bottle seals"
          }
        ]
      }
    ],
    documentCertificate: [
      {
        shortDescriptionOfDocument: "Certificate of Age",
        documentType: "9",
        documentReference: "COA-2024-001",
        documentDescription: "Certificate confirming 12-year maturation period",
        referenceOfDocument: "CERT/2024/001"
      }
    ],
    status: "Submitted"
  },
  validUntil: "2026-04-28T09:15:16.892Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "EMCS_ADMINISTRATIVE_DOCUMENT"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "6537b65221755999959c6661f504a0043a1e3c4ddeffa236b3616671935f0e09"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-28T08:15:17.709Z",
  id: "urn:uuid:019c03ab-d0dd-7ccb-bf88-a4612421cf27",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-28T08:15:17Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAewRZX0IRTAFd6pNx0mpYTcpI7AoRRrPD2zkmutAwqNa_ALWRurLTQmMlrrCh1Y01nNXkoEgeXnzAOeO-eBEvs1gjgCQCFpg9s7S9DaeziLKFC1S0RY0q0oSfCtFo7z31VpUlmA5YIOo4gFRFJHbTlr08X3pBa0UI6iCo776m9n6z2EbUl4QVmHVYQGnD42P0rPQSRJz3hp9uxzGU-4jkviHqZLhTmtnKgHs-hQRS3259eJLbfy4sKkPSgVuSQex64bqQdjM2J29q-KVYQGeTDYgl5nEz7e26ldz41_XzbJaZa3bKPhy-bh9DsdsudfB-1SeiNrLOXh7NZvzzocmZ9xJrUn-OAIlMy2iXbuFYQIPeHJCIJgKT3qRrXpX6-76EmnqDHLBTTk49d53tmD-b_2AXntc661waVCTQk9KsOw7S6ZDPMkw3YTI8BQSt14pYQNsq4yObm8EKMkEvhoLps1gyiHX-En5kmtm1qJraQj9jyxIAiM6IAl8Rt199NA0tRSLeH5YLPBUW4CNACuhoG8ZYQHu1oiI79ebbc4AmFEzSJz2a-gz5AhILj-jY3mAV263GqZ6OogcKda8ZfVkoOzy-q1_zycA2zgrVp16p_2CZWaJYQDefNDLHj7mm538R3erOUIZ5AMPuwFXUjkD76deT0lLh6BoG8XOz1mya1rs03uywY_segZEG9Sk1Z6Njz39ZcXhYQMdG7NUaSrrqsBP2bwVyDFpNIWHlpUKkDPtjGPvDqvH42trt31MoeuMEg6Es_1--Ap2AGjpFho0kLtqqE-uj92xYQNsjfXIseCj9PsSyaRqwvfhknz9uUgU9ZGpbMDToIgWIHKZYzfpSfmR6iZw3DMcQPjAZPCaFD3UTg9OeJWWZdztYQA7cWv04jholbljhbZ-aOhiQhy-UCBMh180vQifpIObzOlazyfxqGixf1b6ThMkN4vUaD1c-dhI_sLlZWaDVCJ9YQC2RDX_MilGXFgPDwwVcSquluP3I65Ck5xVF65tMysouFlgWr_ox75sKpQXCMAIvNDHsst6yC7zxm8Ps9hadU2NYQFltSk8YY42wisBBYPehhjBxZJeXWxWQQaCXpo1AVtCihhifUXUxfKsTx5NhXKuEy0te0lTvyBV9NSBPXJggIn1YQANRGOREtThZyHrZ2wQBP2Dt3SWKtmeK6Sxn67g5LJ4OfU1rocbeSMZoeOWsUL_ufucTxX8yAO4zeYcITXyxcl9YQHEIurDiayrmDubBz3If0smbFavi0Cdk3jk0QL5JoaiSeC15HatHE0RX0OBcZGptWnpYCf4q56MoQZnbCCx9o-JYQG5_pEZkPmcFC6ueTML3YLdvfiMXeZtaYOVD7YacRXBo8DVMT5GMPcDg7hn_8sjt-s195KdjLujOqLsHRpUArKlYQJupPEoZTziEVw1hcrzQnLR32InbjYv2vUK5fN0oXU_DspNZcWPNPTjSSWuanOQJeWQbK04-oXABsiNjc2wbfsRYQP1cqmun_qYi7Bf0ROek2FIajEze92vHvxhw50blt7eG__wImaLUgOkzZxnMRRtbsua-GvOczjsodNAbcZ1TS2RYQNZohsr8uu09q1Ph2q6em3KxButMMJhXXl_AqzbxCUDKUwxAijVz-pEz9sJNd0rOLqpPYsOBddNhnF5UQtJk5pRYQLyplhqbYF1yUcgL6YMfOKo6fx6NJFk8BZBlbI0iLt9o8ze89p8A5QM4WjfoU6MoXtm6_R1h51MX6XGWegzBzI1YQMeXQcKwZ_rIl9hQPDispGIvGcIAJriz8hUJ7svuRO1YwPiYlzOyknjSIOEphbLqxsqWGVeFzrjLMds1oTzjYVlYQNIIODST2ZJE5-WKxdwktsmjeKtdHgx8RjiVYnQHehg2dRpWr3gyzFYpO54HSCYp2oRW-lWEG1Gim5FkoVHTTv9YQGUaNPF9E_yTjTuUT_8ZUwYv6A0zCffQgHpR1YYB-gULqiQp-rKAw-5RHVfvVgv01iYOzgQc8sJnCXBOxXa8uddYQN7KcYe0hC8f_HyqWS8395aPNQlsSap8M4QGECiXHWGUGdQ_91W2UfomuygcxqlBbiJ5Nh7KZYVhamwzvmV4mMBYQCB4KrwkbD6wnW2xxFubfpZEUoc8Y0KvYWFdKL3wefKYs6kqqRJdcCzvZ0MUJaT2LS8hRDia0jIAeNRavhXT7OhYQBgJf99szOAedR62e_Y9xYtCfDezO-Pf1--AphTusfg8wJlE0HXPCAbiKri0KNxaqnt-5oTE4y_FsBmwqsp5P7NYQFqsq7EE44RjauFvPfwh55wOTWh0cawrND-vpk7_ymcs_FpH2gwKRaXpOn2hoJBI9CIo5W7xGo5YVpXUbnzpo-5YQBgoMRUl8JYKq5X8DYwXjN8UrYL27iwC3okcf7Aoloj_33Z66tYidtWPLf2PYXPOfFgDaPKm6hn7xe7nhBTmLn5YQCHLmcR6TaHyB7Vg0pHQPp5EXI3QNseLuSufBtZw3k71GN17LRjFDhEg66joDkwzyH5Rhg22R1KzTHs3Do9pNKlYQCnNXAKH5J0iI0KwkkTSQkVZAvdLiYCaZuV2_XPjdId38ZgBQeO-OFRm-OvMUcn5JyFTK6b_OtmRbjUpVriq1qNYQO4tOOKb9fX_jYdUR0dc4IOc1dNcU3Gy7u8x7sAYzMl1K74TRtW0UXJKLkiSWZEMEGI_0XFBdGKaXnKRjhZI2Q5YQEie4IyF0T6RxNyUpKfKpxOZ6_GTszcoeocX40s1GL6-cypCIrHewuwo0uHTz5oTpL59UdxVWFLjwlj7oeQ1ZwVYQLHa8q2xrV2pC1tlW6TBaBJqb5uP6wTg6tr-1Y727HCjEYEOPt-PXOBR_2ySL3_zWmwvnXmb13uOh0qqG4rkps9YQL7OggyCRS8pni-Q5j0gQ2Q9t0BoVQtOhUs-SnFtfapqFf2CzVOihsrRwjv4f-8vugyamVwZmsDv1Is_pwRDgTRYQLaj6YLVgMU-2uM_JAMQSxTOq_yI2ZpKKLp1MVyEfc_FX_TWnhUt9ByPCeTpDbIA-rLzfH0-IK3kEeUlfRdGbFBYQEOGOj3rDrgpNX2PolLBKwkhmItSl1MQdvANb3eLVAZICx9LB4dpY3-HoKxQCn1cbhc62x7Z2-v_4cRviU-uyytYQN4MbaHxT-fdCFzJT_VfG3N7_k-XUmc_usM5mGDp14LZ0f66bvRtM4W0Awb1ehH88S9_uA5S29OVUlzAu6psZmdYQEgsZZgO0pcj9NqeZhciV88ZLY_KfLdLY_TeC5Ze_eqRPOSnb9E0vqFiZFScVbo32OfXRbuS4yFh52DIW1fH8ihYQMItU2FFko2VUePRK0NzluVCujbIClDUtn7DlWC6assRZ66c2OFLmHuu10gbbP6dFAQnJG18ZcZf1FgAXAerFixYQLGEFMbeK8jOcd-QPehMjqZ2Hix0gRuB4qesgYsLz1BWrL8MpRbjeWQAoENffqh2HRAUi04iDJKVKxfTqASIIUtYQEi7PEuyHH63yg-BCwBBB-4qZ1yYeermkFF-4qQ97pfEBa4HB2gzcWRsnQV10hz9vWC--VrP_DisHQcO2qgIEARYQNEnTyyclnq8JHojn10sLSmIkWg5zFSSGqZUTYz3uqQKtIC0GfbZPaX7AqPVumzbCcfhL40AZPZOh1zZC3NiIOdYQJbt9cmLUhYtCBMgEE-UFl06v_CSEnSpzN1nkGTGLJUT_xKrRvp_h1uHZt_8fXOx3GFrwrHBjeVZC64obqTehd1YQEDbk0YmNfEjfOzn6KwDmZkE5PxCJ-Qn5ng2owc9KMQFElYybxX4yDcCVQnxEeozVYOVBAZWZlZwfU4rx5Ggx6VYQFPJlJvKy8CV1dUAoFA80ojCxtGxm1anXG52ZwjZM8dXHAazRkGd8xczIdikOgaO724_Rv0ctLWHJZmSwMaKuLBYQI2jHAiFPjMGkD2Dw2Z3kuYwtWeRV6PTRmVGVxD_JVRq_dk2UlgVre0CqwU4BT6xV-mxQ-1YoIopLEZHA80TsWxYQKrMzLThfmFK6FFS3UfM4lXegwb5vDTEVgx0Cd8essGFffVigWLSGCQH1fRE4Ie8oDbYgRjceUx7QvzRtAKvT9JYQEmECWqcF1FsYQee81GgFO2jAuhKbjehKpgBzQaDsCV3Q68o5WUhFDEvgnzLHMJ9zRMSIimQH4ycaL3HNDA4N5hYQO8h7AZd5Tm984wzNta7J88QQK8q9foGW-yZw_Gpw75UXWZe8-H_ZjlyJUTEJPvU1azT6Yv-jvDit7G9P0HTsFhYQNV3zoDHRW8kqajCirM9YCy1hOU5vmaIC6h2fuBZppRmMqxqkXHphus2yY4EQcWAKRJ00pjA7O6e8vpc4p9wVJpYQFZHeKTHEnoWR7n4CzGys3B9zMVfhrlwhruZBhntIjyVRd7YOfQm2oddOtb8EOdsnsYRKh8SdFPt6DEG_WsP1JtYQO3BIiErQ7GMpiZGgD7XkGEeEUH-05bNHdwn_sI0Wd5LcFtqivvPSrsc3HGDZyKljhIWYeXKS55KHxfhZuzNrURYQAsnFhHZl6sl2_BAk4r9k4jTWYAQ95XOqJdfYcOrA_WPSVPtgiF9ytuiJbAqxQOnacZLtBQ7NdI9L4vZTTbrB5RYQBFjmOPYxnVweO2-qcuIn-HpgIfKM-4xvhLoD3ievfE6jaYUEl6TYVloaWqRMXff3C_Gywn_SRvaoPO2BLz4775YQNsQGaw2zZ973ZnOA7ysCfFfDdsX6mm-NI6PT96QnJd-HnoFRKiSj-by1HGF6gV735XcEDqLSCEigaaHhNe4KFlYQNaDCVMza8oNfRR1tqzf1JHtgpDI1MXZoswkBR8WSImpF41t1ZC3GYrdO4DrXX3-pzMURaqqVrAsmHKTnrBiJOxYQO659MnYKK_tUK3GKPqaL_skW_agOW9Pu7ybRUNFS10EbczmcnxblYdAmbS9TKI8NxnzskhhtvRHwxZcCWRw_BBYQIdt3zKL38mGRFMg9MJ5sGsXooCrB89t4ilTlo-lNS0zq-bx83fmfVaeXBOkprjfXxitd9vXKyFFGAJq_WGyFi1YQKSryZcZNOqY2aNP_f03UssS3qpxfx-gTGCm74ChnmAZgxKKjIS8E_7gjpcaKD-aW9I4EHnzd3jKeCTdl4Gw6SFYQA9JKkc1fgpFPk9VG32eIZqNB_Y7qyHYfiaSwfDSWFL4SH1kUFV5QthnbCRSXFPh01VD4IPSYqcV_v7tjNd1u79YQPlnrqkbxga31ICwmGcpCfPSCiQI0FdRNFXsD142D9lcs9fOWXX6RqGqRSatoOQnaJC68VQmSRUvENxUSvSrxF9YQPbwwqJY-sldS32QxMMotWe4Bf0OFAAALuQLb5OOgEyuaQMtpvDSxJKENyAHocgbcnZ-k1Ltpl_vWfx-QpI5osNYQPaE33fC0o_i5PR0EnhDGk9K-SYyH0oGvOTTKYdWFV5cFD76VCOyq5JiN6J1Ft9S-pP6gQqKxtj-uf8NYTOCjTVYQNxysnZsCyf7uCqRd_o2aDJFWjyL0LoW1xJMwUeeY6Mybb5ltOP6tjSP5xNzHljziLGy34qbYjwJV9fb16QVKiVYQP8hnZS4MG26p75WC4SY2swlePK9_65vqw71At0cewD0dSXv7LogHbxRfq-5q1T8C4qezr_zK-tGaHW8ueLtOW5YQK_fmGqFTuUakl6yK22b4FPZvwLeoTl0A4PNvSGIAvVVsXlSN3ZDl7cCH_yXTiAC__myK2BsQ4zdC26A31ZK1mZYQLIXOu5TEv2PE7px0Trd7oFVP7VnyN7mW_sHIXN0u_ToGC5EEbinSOj8yoRME7cEPOttiss_B4l6dtr-_Gq3k3FYQASelksKHL5QhNbRij8i2HhwJfjExil5CnbFwmccauMxaL81O2TJlqirA8ZHLT0dCwiRDow-h8_2-IZ74dUcsuVYQDxYRdV81UJwRIHE8srgAzQwL82qpDlcg8Kz9vyfB0Z4XOdVuvqAEtVRN5O99vBYr9oDkvJB59WKVYkLQHW1sKNYQAdmgpU2DRaA9FzbnDsy6ObPr9GK09ppRH_YqcA5AF37qK9FpnOwORLYnbuQjBnSls71lHXE71w4RTk2KYBG05VYQDKyv9kgUqnTJxVRpYDFFVjuuhJgqvKHMHDXTmJeTFlmjarzLq6LGG_VfeuzroTyosOa7sGmVn8WycjHOtz3r39YQODP6Nre1FRTg94hKsFoA3hapybCy1T7AW2hLlAcf9O4s9Ep6bRyGjXnrByuTM46Pe_tJPUiPeLespppnxBJUmlYQAgOmz2VTlMBA0yhLeG9GwHrBD9gQPihyFihORLLyK5FywgGmEGfyzgnaw6Mu3MpayLhysmQae6V1Zh7P9Rt4LNYQAiNv6qNDfSDTZQ5iQXPwfciWLBsPuGLKRWxEcO7-7HEftPnqV1seJQqfJJLqObLoAblW1urJ_JROcdGjiHMg6dYQJj9Jf9rxM-VmAA6H1s73RQoXWX1qfOq7r2LNWyBkwlfolDgnzsOMG5uMnJcyE5dxE67i1HUXXv3xLNB4jDIjzNYQCVcdLPwftbK76s3zv6G8EGVw-Rb5vNfZV2QUFJF7ID8AdCZs6r6pZGLoMQBtCMjcDhNJ4i1iKMHV0-yd_K4kFFYQEp2d5QQIczQR4QLQ_wD7aukY9cqWBrboU8qE2bgh2QUhTeEu3KmAzKq5BrTznFFTo9N8AORapIZunIjmepQSU9YQIloQBk8inKq6UMzKYBn-maOr7SYNY9l9cr5l4zIIbUW4QhPUXhTEj9ib4WN4olQse8_NWmfAPFfRsAPaRnEytlYQEQp5RrRDf3o8PXi1JzJRxy276CDI2r4cka3DJ-47lXosiARBdoiATLFCf9AyqvXq0ZL9BiegdYj1bcN38TWvqVYQIS8ar7UjjT8FX_I9Tf1gI-JgbW6AdEKzgj14gWwxt-LRLTIt1FUrWgkqIhkTdIjR-XBs4z906F8IS5_w1uiZU5YQCh2X0hg2SrPn26Zmp-QPWqLIfqvASMHht-3W_ubgpMnWrx5EtbnVrW9mXlVj9t6cajpWOKHohx5DHoJTnEq7gNYQCn3mt6RC4U-MHYAzoeSatFLBWDdMfX2YT2oJYsj-SPduLcqOJIfjDZjmaJOsk6Lon8fS4qW2FFSBDBFaZwyDcNYQAB91XkYZsFSF-NsHXph_Bjs4qYidvz9_rSF3gvi0R67TvKfJq-YfNfk0PgxOeOqiH5Y7AItXveUUfP7dmhSg6xYQPoxKY3ICAUcxOb7_LJH-QJYn1O4wB0WViZVEQnyK6N9nv1mprlFln2WEjfh3tfOqy0_hf00u9vm47w5dTmI7f1YQG2oBefkm1wOeYNFvcDbzW9KvYqg-nC2BdQb6G5qnU64Y8lAWtV-WWcpfHwRejQv6oPSKZMUYwA5RfwxNqYcX9NYQD62wEnmmTDGWJkU9XxnEa8eUGX1dJtrzgWZvE8y1QmAY72Uvt2iCHwhc6Qvov7cEv1OHiSC4jtiAP0pK0E5M2ZYQHTmorMJBK5i8l5dD34lPgzzDgkFSrWez6S6RFbPty7ueN1i8wQpkE7nAbNGKV-90-1_h_5qBZNNLYnnSaDhqPpYQKB23qXUqIk3ocrERqvq4eHMEhpW2zI6L3cdqTQIBIPh0xI6EPqVM-WNwXo0Am6ADDDo2_R9RdNbRiLlV2lBRaRYQB2hp6_QuRn72HkfgIzmgdi0SSc87yCKFhyRoo3bZG4bWjAmTTGBFm4vx1aKcxePeJHNjLYrI-w71NoUrzv2hgZYQHR-i7g4j4yqZY5fHPHKydBobJuHdiejTqQejz8K8Tg6bzNqPfbh8qw2xLD0PGaZlEHyzzH3GR3i63lMKyoWpttYQLW0GRRM7Xof5oo9wQrANfStT5JTEelQJ9eZe3YC2tLQDexDLQZCsCt_UawQ3uMAHwghlH9MIush17YqFJnvwtxYQJ1W8vUXPapuuMJJKJN147z_8we5BiFRkk222kczgDNLTtW1dSw8lZUFj3k35VoqncJP7ygH6jf9-yBMtOqFXMpYQJ_kNfWRlDt2v683NCx6xyAQfRewUc-H3KbF4OOyxqgAIz4NG8BzOSRW4VMeec8xtRtL2YybPOFN3yVFzcTgVj9YQCltk-TGIxi5KUnuygUl6LMQ0vZ7xC7f2T9e2l37MkGoSYRRKUzYk9qJCWlEVEbO1RoMe7V8hoOcUk2TdtAuiCJYQHpNYkPk4hrhviJ_g75tmCuUiwg7UVUHuzxUrmOVPpyp8t0IYKnF7fktwnyslRZckq9izaGlEKk_M4u083DKUaJYQM3YNsqY2RaTo5b5Sa28A-saKvHK3vk0r-fWT5a2Tuq9GBjYShOxZwpHcQl5BVJ5tUymW-rMk37Ww6ie90aAACJYQI_o7cZmPE2JHBb3X9Xq2jZmEb3_pRP23xKDLek0iVg1NOmxvKnh9HYIkrp-_xIqYRunSOhwX2xxvVwd0taPfwpYQLt1YZNC7Jmr4FRSDVBdx64IU4tp7R5oHtfWrMk4H11gQrenwPGh4kGt2dyoBh69D_v9Q09RRKDUrke5loQCsr5YQH0YlrcgHw5M8dCpMDW-O_7AGFGU4Q7hjsS8Wj-D3o09lnwhTzXLnTsj4P-rGPmwxhDiup9NQpTRgkZPsjGd15lYQJXJGbbOr7SAaMY_KtXS2YGvQkqEnh2TCs06xNT4md0NGyAhpzss1NXuSH1Wj7mDDS-v6wHnYuz62EUqD3_A4ClYQFdZfs1yWbjg1NDhDdnqT9UWWLzLE110SQfOZE0i6g38gfN3utr3Kgb32eaPGcmtkA_4OZRkgP-5JEvFnv_2qVRYQIGNkPyU4V3RHRaAI-Bvn2eDixN_yUZLUinQaDhxyPzXhw34X9-wMf8Te9AScCj6p3GQNSqXqSep1W2IVJGSq3lYQBIUFpMO7QcjRfyRAgojM-5aWAcze1ukVEXuKyHq91DipxuoRNC9xmd7jiOaR7JSMyjg40ESo-nxVcfEyKJd2tVYQJYF27izMPPoQhtHNP2e3-Mo1HKPDqxl4RelI1JC0-JWbQe5FyvgDdUuaNn2VG7RepqxFffqOZC8TwOJjKWNwWtYQO0I9Zv9HVp_sH_Hjlv9phN1qE8cBSxTSLrrQfGDaGvqtTDvCixG7d_SSSfV2nFFZBBbkZaIcbS_05ogDJVMcsdYQLNyG-p9-pEDe45XLF-H6jz0MCFEwTgo6JR02dGiUCme3HrT3HxbBo2khbSCTLhutSfiQIs-iIgc3vonpcH_SV9YQFqxDAKn_gFmNlZMmn5WXyPeZw26ZGXk9fmJAJ0lqJ5wc2Z4qC9PPz_UcCtU3dNn17TlA7Drrmq0SmBAYhUIZGtYQBldf95UJEYcV_1mIA4cmmwwpC9woD5kugFjlCKnn62QVhUCXmryclffevuSLW3qKJYvRp-oXxEkfDBfhXWz3hJYQNbKTf91LZwyszycYWsQYJVu953_xC4bDl4ir8kD_g5P7IYC1XS2U8MhM0xcKhRZ7moFVF3REPfM3itaGW5FZ1FYQGKjzErEoIBPdtFG8eJOlDxChj-cofIk71duF5MJjRJGPnJFMz5DPvpdYKSrkEfwB5ChaSYQTvgfR4_8RgPqScVYQIo6VbQsEr7jnLQmfrYhrNzLysZoIqcDZd2Ggs9tJS7OpqTpNriT8T6Pwi1W8MveKGaKpNlEFCCP0kKRtwlL19NYQE1S9tor3F0l6lEqEKx7G6A7g87umtQs7LQGuR4vAlj2xkCe4Yb26csYnJgSGmZ-lzaljlpugJhVsXxvt0Ad5RFYQNykLEoiuXIkcyn6X5x-ip_D2VYeBFwmkwj0xLgNE80Gu0e7vvHH912hrvj0e6AgpqDWetyIuD2SWhgB09KHSytYQPDhw7fCVl-GQdnJAkQMpZkBHhOrusvH7e4C_TKQ82z0IjuTVvk6zbjMrvbAAyoxYFjEUcnzSuOlcZ3gMmFOy0tYQDGsVOANohT-afKF8wtXEwfptM9kNwvhxrXCn98jvHvCDj0NqTCIM9U85TnbC9dukJMFgGWEvTF0EV-48ujflIdYQEl5cj4s4WpQDcLeQH96uqAWoXALYaNEFY0M7UJnK2iCP_br4Sdb_neblsyJYAztouRM2ZpqtqeoPBNd6LNy4ZxYQBOcL_cizzeFQFUZb__fJyePRx6Rx4wVr9plIfbydygvUhPgIe8MxW2z9IOah66yLPlav8URLZvHtDA9LHn5iJZYQIrRje4h3v_fDHtEX_pyMV_xJTYk4SMRnol7di6xaB1Dv3TCpySuZpf5s64V4Kl0VgVsmjyVpHP3V2JFkwA7M65YQOW3HySKZiu9mG-SJ_Q8wIyLN7ld6F9jW_NG94IX3zg6qlBgmQ03TixKQE8ZODPndKk0vZbcFM-6O2aTzMaeGeuCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};