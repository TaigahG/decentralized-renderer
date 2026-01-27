import { InterVeterinaryCertificateW3C } from "./types";

export const InterVeterinaryCertificateSampleW3C: InterVeterinaryCertificateW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/international-veterinary-certificate.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "InternationalVeterinaryCertificate",
    certificateReferenceNumber: "IVC-FR-BR-2024-8821",
    placeOfIssue: "Lyon, France",
    dateOfIssue: "2024-06-15",
    countryOfDestination: "Brazil",
    competentAuthority: {
      authorityName: "Ministry of Agriculture and Food Sovereignty",
      authorityCode: "MINAGRI-FR",
      address: "78 Rue de Varenne, 75349 Paris",
      country: "France"
    },
    issuingAuthority: {
      officeName: "Departmental Direction of Protection of Populations (Rhône)",
      address: "245 rue Garibaldi, 69422 Lyon"
    },
    officialVeterinarian: {
      name: "Dr. Jean-Pierre Dubois",
      qualification: "Official Veterinary Surgeon",
      licenseNumber: "VET-FR-69-1234",
      signature: "Signed by Dr. J.P. Dubois",
      dateOfSigning: "2024-06-15"
    },
    consignor: {
      name: "Elevage de Charolais Elite",
      address: "Route de Roanne, 42120 Perreux, France"
    },
    consignee: {
      name: "Fazenda Santa Cecilia",
      address: "Rodovia BR-040, Km 50, Minas Gerais, Brazil"
    },
    countryOfOrigin: {
      country: "France",
      region: "Auvergne-Rhône-Alpes",
      province: "Loire",
      zoneCompartment: "Zone Free of FMD without Vaccination",
      diseaseStatus: "Officially Tuberculosis Free"
    },
    commodityIdentification: {
      descriptionOfCommodity: "Purebred Breeding Cattle (Bos taurus)",
      hsCode: "0102.21",
      speciesScientificName: "Bos taurus",
      natureOfPackaging: "Loose in specialized livestock truck",
      numberOfPackagesAnimals: 5,
      netWeight: {
        value: 4500,
        unit: "KGM"
      }
    },
    individualIdentification: [
      {
        identificationSystem: "ISO 11784/11785 RFID",
        identificationNumber: "250000123456789",
        dateOfBirth: "2022-03-10",
        age: {
          value: 26,
          unit: "MON"
        },
        sex: "Female",
        breed: "Charolais"
      },
      {
        identificationSystem: "ISO 11784/11785 RFID",
        identificationNumber: "250000987654321",
        dateOfBirth: "2022-04-15",
        age: {
          value: 25,
          unit: "MON"
        },
        sex: "Female",
        breed: "Charolais"
      }
    ],
    originEstablishment: {
      establishmentName: "Quarantine Station Lyon-Sud",
      establishmentAddress: "Chemin de la Plaine, Lyon",
      approvalNumber: "FR-69-001-Q",
      establishmentType: "Assembly Centre"
    },
    sanitaryInformation: {
      animalHealthAttestation: [
        {
          attestationStatement: "The animals come from a holding free from Brucellosis and Tuberculosis for the last 12 months.",
          isAttested: true
        },
        {
          attestationStatement: "The animals showed no clinical signs of disease on the day of shipment.",
          isAttested: true
        }
      ],
      vaccinationRecord: [
        {
          vaccineName: "Bovilis IBR",
          batchNumber: "B-998877",
          dateOfVaccination: "2024-05-01",
          validityDate: "2025-05-01"
        }
      ],
      testingRecord: [
        {
          testName: "Tuberculin Skin Test",
          testResult: "Negative",
          dateOfTest: "2024-06-01",
          laboratoryName: "National Reference Lab Paris"
        },
        {
          testName: "Brucellosis Serology",
          testResult: "Negative",
          dateOfTest: "2024-06-01",
          laboratoryName: "National Reference Lab Paris"
        }
      ]
    },
    transportDetails: {
      meansOfTransport: "Air Freight (Live Animal Cargo)",
      transportIdentifier: "Flight AF6450",
      disinfectionRecord: {
        disinfected: true,
        disinfectant: "Virkon S",
        dateOfDisinfection: "2024-06-14"
      }
    }
  },
  validUntil: "2026-04-22T14:20:49.462Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "INTERNATIONAL_VETERINARY_CERTIFICATE"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "b164145960223b005b2ac49c9c6654d88ce54202700191157c7ec023aec83ea1"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-22T14:20:50.441Z",
  id: "urn:uuid:019be614-538e-711d-a6e7-ad2b475758ce",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-22T14:20:50Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhANs_HkC_hmfUdQHCpbBmcuKKIbG6P2mdhzMyLbz9ytDfb8xsHBJpDG8nw_Y2ULHoV6pojPUalUaLy93oPpWLvDVgjgCQCgJp2cenK4aOfbJs3ZFm1FaE0E3tJsfgxwwYCGAX7fh1YIBEE6lPiTgDt43Xeg7d0eQDGjSG908yfJngx7LGQ4X9XmGhYQEgxOcet47ixF0NwN1UtlPDnssTjnaI6Uj3nGDz6BDfz85Dpw_EiPpt5bg4fNltNGF3VOvPeB5Pp4sMmy__lVt1YQDSOOMifYjlg6iSVbTL7fwtGXQKm85fpwhY_ZsW7DE1JT7-IJjWq6rCgLlkNJAZS_Yu6hZCIi-rjb_0uiiqbKkBYQBbw-mJfsyjnee2VaetEVfwcWqSwKEfFfLaRphwwyx_PJMCoivRUF2iMXkWWQFKhel0B4kUycl5seiWmSHzJkRlYQI0iZbPFSdYY2yBV6KT-tXCW_m5J8XSfE8_Lpa_P87u0WKFh7y-8kpdVCUQOw1Y1tS2-rq-uhZkgvmVkUhzQhMNYQIgBnrhYuDKJy3JRxJumQmWonH9GZy1uVgENOBlZgQ87sk3sH863CEPvSsUYiRMtpL_YI6PNIF3lV674pmfq6EBYQDJKJuQPcaacuz0ZnAS-5snwg6N2Jh5hMuQxf8G7WVu0fyrd4A5d3eqcwhAU3_j6rvXA4MCI2X_RTc5HjuzKr29YQETlg5qPKB68WbUiOB6wKWlyRQOz9fwSRzexUyb_fL-Udz_zxoqqW_pAT3yXjvwhP7J3txs_yHSiurmfEomLSFlYQKyWqBohGIQlMqQQ1kek2v1AZ_vGE_ANLFMSVlH1TyGlewB3OCzLR5mn5mvKMA4yIfoClGHwyIe3TE3vGwZx2r9YQMDDlKjeIDShiVEWIaaR7a-7absFfgShRv2NDHfR8SBYAfAqomD7-Glcvm4mZtNUYA5W3lmupRR7UtpyqSKJVgRYQN_y7SW1hZyTwA9ylfojopcj8sXNiIhWv9nLoQdWu_2BW4gfufBDbpyz7o7C-rt8qXq6GqyQd2rxC_-pP2aaz2RYQM7p7iO6O4ydBqSoGtTdrol0omxjGT3pELtMrt1HzGgD2JZ7EWhnJ1VfCWIqnQgnenC7mwsa0Q-1J9JpdR3Jeu1YQKn_hNHTVbewAHhy-uEj7-hGw0NeVyfqGukJiK5jMrrFPfinBeev5xXclgYAq25b8KWm-p8Tsfb6vvvtxOSDkXtYQIvdMT0KBF6oLZ2KchG1LqDvp-ytciA04OQd66Fi-P2xKRSnym87SSVn-YFR8aVh9jyLQ5a1Yx-3yNyIE6kGz19YQCgtRbPJRsM292Hgkg5p1_d2129Tzo6cVu-GjTBcpG5RR_FTyB1qm6fdLFDPhFPHfSjBQT5b6_eYdwmVBDpa-1JYQGdsn-jElQ5gkjjjrQipLABuL0o8q_Q4k76suoll3dPIpvRqwkbZDx9-NuXCq3L2ToTfOsowqv4LfsomrIL_szxYQNtgZV3nK2Ibd3kK1XrVP-oU9X6X43c89sTTrO3kOP-3YnAT_ak6XvbWAAit6Ql-YI7Ky1_c9ItZww7BV38lIxpYQOmohgBa1vqOURa0bPLOozKx0haDrZT247wWuDdeH7DoJ1Eb13Oz6IETirysz9u1QYSGL3G6OTj_F2XE9msLwtlYQGQuAmPPzmb07VPqjHyh5sanXd4G0tOi1aAvVtiDIVmPAOtKj3q6767Ktrc6XR9BVgoABJPNN-swGoRsb_shhnBYQBTlEkYlylgdzB4n6lIoQcHXZnIYte_3z8V3Ej18ZYQEUtm2ffAZda_XKDa0SzLpflDsbOOHGCh_1EU0Cz7YHMlYQCUfdc3sPdRJGKY2K0Orim_eISvW4DkUeYxX_kqsWqqTCDqiq1k6IEiT36i4CC3Cllr9wE2yKycFpFNK9s8JXylYQIRFkcGTgOySMhWoJVAXLQ0YKW-1-CIS8lJts9JsO4A9ejgcFBRlMc0iU-vCNpr-OmjnfpXdNrvrAPoRsKPla09YQKgMvTIacktUTlKv32Spaq-ySDnzLWK_P4cPJiOTU8H2oCZuqf5Rux_3bZw23ScbG8qEAcZx3ktpygcyeR1WoXhYQIreGvMAKmMm5I7vrW2FOoz785Ik1b-w5sAkI2it87ItuOlwwy-QLWEwQZmH7yHvb5w0ZgvFX-SUoJpfI415vfRYQPy3Y8unnu14VReNlH_uHwbhlAywC3HGeLrywzOjp5Iasz154JC5yMa2bDRaTKfiO_rj_Fx0Vus04wxuEHJIusdYQKjHkBomkyZbz2ncZUCQCe56TApWwqiSXOQpaV1ivK3uevKwPek-Crq1BK_-79fvz4mh8pj9c71MlZs1AzsT_sRYQNNalEikY-qpTxAmnW-omNiYiNTO7IcbBfKSfF7fpgWSiLNuiljyADQ0hAtplpm1KURtof6sKNow0kjFPyIbeBJYQOTNpfd9136RqiiT555EmvzGiI1CgSjvvULr1N2KdP7sMJBdgEAAubDgdFS0K8HzJXzjPAlXm3wXqM9G6dovqExYQK3Cft_EEigadHReL6M29z7Qk2htXyZ3U4Xl52-DR3NZLw3aUX_V12z0jox44PlN2WHCUd3m5BJ-L1hmVc2tRHNYQCeSC7Uha1gyrwi8zCfrE8CvYL0yNu-pvLmAhrq6njGNSz5lo5DWa4aY3kq-yaDL2HNx-aHsaTRzrW9-y17H7XRYQBIgfolvm8Aksil_Yxvv7ku7CZzDMfOwwVeTBs1vusYkwWvGSer9kiQxv0UPbqvn6PzovARs7DFhAYYIisAiNelYQNAQphgyoLxaMhaAW3inuVDoPh3Qk8fYHhf-aCn_PpQ4MsljLtxWVTBZyP2EMb24Wi8ixa21D-9xI-HGorz0aEZYQPus1_M8pw7NR07A5kJ6iwd82-8JmpFm5DkD02-5AAfqhgZv2vbPZwZUAEByrWQoXlGsajoEUqbpBmd1NDNY8e9YQKdcBa_vyT_KxjyfMMFUvbWO2_asy7NrgDMWq4v_7t4RF3HMp1QxluIL3bV2_9VXyVwqNVRtmIvCYGv4na_jzYVYQIKlsdpMfcJqwmrOMiFyJ2ZdGCj2kbQEYxlukuKFWO5tVz0Oe3EfhlxaOd3Ajb7Q-hq3K6K63-J1ljPk0QMY0EVYQKX8JFQ8ep2mpVtS3GtZqLt75IQ864BhxqfZbNe2WyVI2J8C_x598DE1U-Lbt678CiKdkMNdH81E44MmoMoa1hVYQIWunbrZalOIvSCSTVGypLWqZs_Ud_An9s3b62mYFWyJb_jZmcgC5DF3Q_T4DkNuuydmcLnFcmnCM604kwuECVZYQJdKCF3_TBh5QczaCpJQAHqRA-Hq-cZHuwTIM_Lk_cPfW6Jwsb7FXP9yxfkIOK8hUx0E0Yhv36somOmAz7TBJspYQNDMuvtAdeXFmtKksDHFgDpLnT3RA4SM-jvLQwyyMMkpPPAQ4RD_yC2znsxm3puryaJeaOKgGkHMdQ9NeoDHXRBYQAglhub_LQVTBjxaTzZjr3VoJzqBcY_ewBc7KzHCyDmcMI_44cDCEubrp7oZ5H27AnVXHt5pj1p5do0i7ev1HWpYQKjIV8prNdIp2EMIY-ZxHNNhdAV0jSHI-TT8wErC67YaHejTAMyFjSK1vJGmvLdNImhLlGZeegaEIO31sEr5JhZYQJR_tNFRarNQhMYTwTMNm6v9rScavEQRVB1NGOX8-tEcqLYhWL6nTReMRHdzBXQ26-nv-gaTjlxVDh2Eg9FU2T5YQMPA098DVB8l9dF8SOWi77S_LCzaHZxvFpasyuTFqX18QvPa0omZgbNm66W5xzVtRe9WkObagAZVWXrjaKWieUVYQGevOgLkZUyus9Psj9KV2PxF63mNyBqWCxDag-S-nMa3MI0U7WWx8vWrQzPFDxvxPI_k3kTeieSSNOngnOSpTS5YQI32YeAoFuqjSwupQEJjNj7_I64_gqANdh6Crm7ON7rCQWwk2LxOGzuGmgEqe8B9uIkeNIxIu99EVYxDArpBaAxYQJ-kfuQNHnbsGb4D93EeOl-vPhXlp8v57jEa1_snxGuvaphLKahx1YbCljalIUKMmkZPMQ663EQvoO2q7OTfhSpYQOiobfzNfLhUK7YcxEEKC_U05bg47bp65CjG-Qy1e0htRFwEXXCg07NL--BLkc2VJsAl_hoMSYu0TZ0sSTyiXDJYQC6QQ4QLwePQ_LCe-ZOBYuYHSl_wOGu8m7t7OdrGefYUJzUD3BZcaKmFBB8foQMVwQZeQiZfCig1A9tV3IcwwExYQGvJQubkdrKjh2MmjuQj9wLWQUGEuczOS9W2WU5I0UklN-OD7qYQWKRUtWsGubIZMdGi4O68A9UUhLjAVD60zrJYQNbA4ha85Wqs7F3mUCLnDl-UYCT7FJxU0_0Y__TbD_6nYoyjONdIL27y4Bu5nDE7tjAM_l9YtSrw2s-4gvMWLABYQHmpeiU6Z4nR0Vh-yQu42d-GC46F-zVm1jxQlI6lIwcFxEGksJ_X2m2X990TU0-zy8S-c7XpsdgKMpfcxAaWLzpYQJElbQL_Vb3ua6w_ia0wAkV4vRe1Smf8BTvStdSDWkYWGSg9hsYrRxOxtN_tEkTnTHyDGQVp0l_lO_TD8pZXNzlYQEeM45UTKQxpB1ekP7bkXOHXLJHGDQQAsEDyEO9xJ_4rVp54E9unYwINGDzPgbF7CAYttZXWmnTWXfIRuS1VmQdYQCtdQ2pKtQSvlk0rgKOqJPy5hgbEb-X7ovlI1dq3jk2Wf3KdUuld9qsFCUZvVF-7X3bbRvYYH8rsJPf1rbJareRYQH1JEyks7Imdxy8gGIq_hPlFTnYq8svv1mKgMuEAxkp4MYOZ6_EIvqcvVTnKZpFe8xkMlKGIvxePOBws0D4eUQdYQAZ_kiUV4jNoZwfrCdyalO5EOIAFaMXOLO5sjjGjz2WknBEd1pzj_Qmy12QHfGx-oz1ytMsPvuTKg5CjkFWKWrxYQM0M-GDhMuTfyiasYk1U05nHwVhQJ_Gg9PtYDD76PqF4ziUYhgMckFFOxJjx2JoRJJlMcwXt7A2brkSbpVgRMYpYQNph_D3Ow2NeFJE9SJ3KKWQHUMMs1lVCUUb1kv374BQ4o9_clDr1Ttn0wpbAoHlcCnMAF-p_4LzYfmlfvPWiytNYQLvIO2_VjuewP-jp7x_sZhHLYzAmmzIhxvzXYIVHHahAysmdh7K6T9aldO-X6i2egJdEJCrTgL0gMFaDT8fZp6tYQL-1otnZl14f6vmfy7jgKu9M716wa_v0w2nFnCk7VeQUGh6QGc22KECXJODWztJyD9ApDtyIgbTppO7wGoCXXp9YQASFOdgLBSolVyht4fox0gNlvu87QJzmb8qo3BRb0lcSYJqlDLb1TJG473Vg3gRHPvMQyXY47HX_NZlm9WlUSlxYQMsfwub_2m3JoMCLVMPxraB1cVAb6bq-kN5zzd50IEEwOI2fYJFUAsUDf0pXxTMDIATbe_O74rHDMmBv5bbwGDBYQHABEXYv8y5W1m0vjZer0fKONvs6LOu33CwEDrnFUct8BpX-M1cJY0suewfyDoGjSehfSSXDj5o3SQbspRJHml9YQE1mlWlsYPasGpygUdy-e0HWMSwNpInkCE2VZbSoq4_yiWCodQ4tpZJ6FTNcgJThSFhcKOV3OI7QingorO-fOIFYQJI2vOzdMnAqr8XlK8ogPzRB2jKd18dMPiaMOtN8dkbuV_42ThzaqbbP5cWgQLkyeV4Zqw_qdLhXriv_Euwh2adYQGYk1mxSVDzBFkgEmm4C1ebe0BZ_tCHyniJ5cwPuY4roj3zUv-zm6zUeTLDgypqGa1h36q56G3gBEWKe1Dbpsf9YQGO3-SmjnattqbspC17Tiyt0TRYNtY-SHKlt7XO9ud-J7vRoGr9oQcvlhUJhAjGS0GL77ZSLGVcenLS_DXJ5tcNYQBJvT7jzyNeS8ZAJ3pBnS-fu8ThPCAYrHAri59coioVg0rCkwB_NpWkzTltDUjrYD0BIYdhcaRygNpoKwVhKLFxYQG7pZU86Gs8chKWJ_jzqttjqu_N0NW3I7Ork0-QM7H-dHFkvKDjhF6y0CfvQuCNArqO4LM4GBOS8EWJ1u-r4UMNYQEhLZ7KPvQBNBv0r2-YNgMh9-GiC6ZvhTNfywAxK6Fzm6I-hXbbCsni8Pf76uSRK6DU-u05isHgGMcMJQK0YvPJYQPA3cMVJfYHkLKUNEbT4Nr-MoIAdyLiVdOEls6Sb7-1KSymXkZa9YWX8Pqw9TRlhTHG0qp8QAiWE0UEd3Ewy5MlYQJOBbdyIDFtP77eR3B_De4Aq3ydM0RCMlgyO-d2aC0oewboW-1r0QYW8MEd8az6LR3o75YqTDSbBABr1RM-Pk-hYQIPP1laaleXUyRTBkHxnUFJI4679p9lLcUUSSaUyFXkDOTZ17ubsWq_Aetwzdhj-KAigJEcJwhTIfbJ6QtJqKIFYQPxDbuqyWtsZHiPvXi5sAmY1khxquF8HEUp0n3PMB9oMepenXRXdRFPGldN_H0O3zxbIafEg59XtzulFd4yon3hYQBUA7skQ2OtCC0JMHBaF2j48Q8sZnlf3JQYIJz9VuVVNg90YaR1Du4-qnbE0HNuUNVkYZ9zduOv5wEr8q0n-2xNYQPPs_PWf_1xvXxrhiGvenKaeFZ-1JtDvVYZc9ntWS1-eP_GvpCBNi7iHg3dDvdBxvYWi4aJU8QAOf5QCsebKHMFYQPrcprIDyg71olJKfVbA4dQl-0Xg5r8ZuT1Y7aYtZ1pJ4T1dkLk5-AYO9n4qZiKPDBX5GeGUuhihWqKTaqv5FutYQHwNVtLm0Fu3eXGGM2zBeTnNOqygOf4BsXdXgtziBRdoHn8mpz4sYxfVYE9jknqJJrinFZeOTocFBgIqacxGxg5YQKcpT5VlAzoXbXgzu8yQAm8tNfyY3iCjVyCIAdPcjnEGy2STl429-_bbby3c5EywZ_6u1tZ5I-cR3OqXa4S3fABYQPRRmBfzDr5ag9DNP-BrLOO__dBO-vhABZ0JJOk_V0vqPurC1-vIfKBCQnYn35dTFwjo72IUvn9yyRZo9Of3mt1YQPnP6j2yMcrZKh-kDLs9mdz4-gph_XHCmY-QDHraJ8tO6IUuCd2mxL9ufcGn4SvTklnqlptqG_xu3j4VVOd68J9YQMScmWCBibN_MdwDwm-qouA7E-VY1YstW7dTVeuxKvpDQolTZuuLxBi__q9S8wgur8vyrET0QvxGZC_D80-s5nZYQOCscCocacjObg9AR1amqeYM8tmxXNgrG5QT1tEFQA3gqMwne5bO0pZV7BIEfKyV488tnxE7IoR9NSButqDbiFxYQKl7bE1xbeMZq9K9kzYo_prIvU9-43WY5G4O7OE4n_RvQOtBenQt8G1b_AHeNMaTYkDCJDAt_zasWdfIGQJcbENYQLPKa71yc9P_vyMy_DL7FKv6LRxhmCBTjEQjoLWAC1zDYqMbSnpp6UxqokIbIRWXdL29VhgSQSO4OoqIwmTCslVYQGlt2lnd0UbxPDxtIdd6Fqk5QNQ2dsTDzbVdQSDwgSyyaoMNmMvo4gCslOfn1gjoFoEMFqFnjsYCm6fGXpZKO11YQOoS79m5HcYVabaanAAu7eiVN4LfMgmH8-Z6lB79mjFM29TldHARM6AaDmmE-xNgWPmMrx8hZF6utUPp0kk1IbFYQK_Go5WrIFZ7nFEpUWLvZJRRXvNkb-MZuO2AbWrUP-axHFRPTKMCyc_1shlhPLBaftxON1aaj2GY38Hvu0--hDJYQFb7Gdp9YF5DmP4XqDzXtvu_QHu_NUGjvJaPp35qs0-ovlzcq3DtDg-1wQp9QpcEAAsG8xYQ-2XvzD0_o6ueR9pYQI4iHtNi9xDcolJ9figJZ4HQA8TUzPMSISha9UJ6rnoWwti2yiloRWsP-AZlu-fpzzUNJes0VBgz26PPrvKph8tYQNr_vHhZA4xdB7-WDEaZoal5o2RIlxuAHl74cZX6tb0XdFdsp30ebizIHY92LEzDEWqEOHCnjsNLI8hP7J0lS-5YQCcVpnn3s51e8DEDVxv7QwRWoMIfLqkL6x7DsZ_dtCkkLXg9zF3FSVtRjr6dix6-Cxdswe8Qm_r03fxWrffPkLBYQPhyHp0bqeBF1TCP4U0-AFBbni9c6dypCBtALkkWFbuumnC1bJM5w_gTAcp0TnyAnoUQLh4uqZeTbVr9Y8oiWKxYQNryjdqUCKitLhDsIfqAYgVTTCTWaHlRa29lCwFoL8cuxnFxNQDW76YFJK_7Cp8sVl9NRFuO_iFxUq4kjnvl8l1YQGGAA0B_AtCYp6OM0s_uzi5HEYTFc1A13RrOL09aTPz3Kt1dNIUUeY22Ih9PD2bZ9Rdm_rFDdaquFXYd5o-YOnVYQGmRUD50IQyK-LqTGvzCM_RpKAI1EmA6-UUr8dt4nuU1mdTCyiL6-IMsdEoTDQDbFbuK6jGZnIYSg7jy8LLggthYQMYqJn8HAs6sh5-vG39HFmrfKLbSI1BR_RW0Qzju91n8lxmLUliQIDW9nbt5_lj0HWslQjH8oGkypQjL51-urZ1YQO2XuX3e3bVkiDeGtdnk3iHoU-Npua2n1W69jBy8o8fO6KVpT0iVk08iQO2KLKE9CxSjbpQZSIhTKIH4Zu9i8ttYQDx0qEi2MTfjoI5uyhpjqCTPi1TbfbRAEH35QrqcPaND-i5yd-0Voq2R2pW9OC335GvRjFFX1opm16jEOZjTlktYQBdNuI8qhQTpUWGYRYbahBiSjcFPJl6AYIPzMZBsNwrEHXutLZLeKjr5M_TR4GAAoVVa0q1k5STgYbE9eROiADpYQEVNvofKRN4Q91hvM87KYMoEHO2DpYltEPf4QHqEfYjPqEhs4NycMlV4VIQhIARzGuv8coM8vZcmtiaamfPW9l1YQLYwyNcrFPpQr0Z8HZ_cMhzOSxn7nx3MMZWh1wxVfkcqHoVBly2OYBaGGuP0v-Vu6H1PHjrVmkg1fyMYQ_gULCxYQNzQTzr8Cs_ZxXvc-r4XzfprN2S8xCkr2A2ixFDk5iSgYKszxROmVtretlfs1M1DKBq-2S-GSVn5VXItCbJ8gNlYQMaGJyB010hfM1K1_CglQK_tkz5ZNfzc0nHiaSba2uCnAiiIyYokF1h4YAvjjgdyIM37S_eoK8NkY8q9cpfPTOhYQPNep216M-SZElfZjCF_jd1MXQsOITPXGozJMh9UaK_vttCDMedTiGN_isTp61jzXQLZuD6Cs6V6db0qzDAJ37aCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};