import { CITESPermitW3C } from "./types";

export const CITESPermitSampleW3C: CITESPermitW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/cites-permit-certificate.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "CITESPermit",
    documentId: "CITES-ID-2026-0522-001",
    shipmentId: "SHP-ID-SG-998811",
    transportContractDocument: "AWB-618-11223344",
    permitNumber: "CITES/ID/2026/8899",
    issueDate: "2026-05-22",
    permitExpiryDate: "2026-11-22",
    importer: {
      name: "Singapore Aquatics Pte Ltd",
      addressLine: "15 Sungei Tengah Road",
      city: "Singapore",
      country: "Singapore",
      email: "import@sgaquatics.sg"
    },
    exporter: {
      name: "Bali Marine Exports PT",
      addressLine: "Jl. Bypass Ngurah Rai No. 100",
      city: "Denpasar",
      country: "Indonesia",
      email: "export@balimarine.id"
    },
    permitIssuer: {
      name: "Ministry of Environment and Forestry (KLHK)",
      addressLine: "Manggala Wanabakti Building",
      city: "Jakarta",
      country: "Indonesia",
      email: "cites@menlhk.go.id"
    },
    managementAuthority: {
      name: "Directorate of Biodiversity Conservation",
      addressLine: "Manggala Wanabakti Building, Block VII",
      city: "Jakarta",
      country: "Indonesia",
      email: "ditkkh@menlhk.go.id"
    },
    consignmentDestinationCountry: "Singapore",
    specimenCountryOfReExport: "None",
    specimenCountryOfOrigin: "Indonesia",
    citesAppendixReference: "Appendix II",
    purposeOfCITESTradeTransaction: "Commercial (T)",
    quantity: 250,
    annualQuota: 5000,
    exportedQuantity: 250,
    nameOfAnimalOrPlant: "Acropora millepora",
    specimenDescription: "Live captive-bred coral fragments for the marine aquarium trade."
  },
  validUntil: "2026-08-22T13:56:54.421Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "CITES_PERMIT_CERTIFICATE"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#45",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 45,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-22T13:56:56.864Z",
  id: "urn:uuid:019e4ff9-93a2-744d-b479-f03599057116",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-22T13:56:56Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAzr3zn6tNcK2LRhJPIbx6T5ye4AknBUmktT5h0exmWoIPcs92wuF0i2gKinnVBo1CXMt50CaBRVSedIn2KQiIAVgjgCQDBwv-8HT1m7LUj6dakeF2xCjSpTM2kZc3HCRypPJ72EpYIK0i0Jxv2sDQH5BXJIKGavD7T_oyEVtIF9XDsKtWikfRmDNYQLpy-Tt_bSdW3QVbgid47-E-4q7L0K98exgQWovarRgWCgsFgk325nS8nlvDWaowyHJ2h32briEFYnExdNS0_PNYQBq_rHzHltAv5LeDyQjXnkc2O3IM4Y7DkAm5JP_8mmyBjjWzErxPZbVF5A8oo1QmKJvptyhLD6XB4cQ-JPd0jX5YQObQxtVJymh-SCgZMyIDKWc4wxvjsW3DffFCD9bnXqxitnNC0ANca2UceNZ7u9jv2xgTW7xvoLD88Jn4wPWlyyxYQNv4lDvLh9uXPoOWBsFrU22G-_yTQaQH9loRobtfZyyBwOcBQFnqjC6H_GG74SETEziBdf0tI9O7tgoKGFt4izJYQAqtvZDMUVEHcrsdV_9FRusCMhQpC8e8S84I2YH95AhtbDE1nsD45M6RRi1UwW09nMAhZ8_I0-v_PmYpChXLqdpYQJrtnvSD3uSxa60dhpksD3wvVeBxRgbzMwuI3EO9GVnUAFsChmfc_Vh1CEULnMp5qvZeNo2hJLjPNOhnLDrsblNYQN6ylTJk98AqP9oAoCPORrTmkuCVqCRUKvD7juQQqJf6ZLscB-n5UkYTt5uecZN2poE_-Kh5-QWci16koGo_IvlYQO2ZT--BYMm-ulPqtJJXUfmJjXwO5SrmNeV9LtJaA7sdpUzXCy1V_c0Ih1wXZDiiP1IPS0nr60DvZOQmEpGkJi5YQCRT0wpdxk5lET_0tkUo1QN8VCW3CdTkI71G4_ahSAzsw-w82M9BHmx4bPmLlWs9KKAcGCvpf7zX8OPSJwxEQNpYQOcVKSXrHU7U625bMLaova-Y-EpeBGViQYtXhq7-UJl0SG3kYtYOV9djjtbmZuhRwoicrqLmYlX2n2XOeQkIF6xYQBY0o0RkM_G5xqxHTjh7xXIHjyOn_Oqt0dYnYNuMoVStKdKwtizL-FxvB5mWrEyCu5QR7t3B_6xylZTi3DhxfJpYQEdq633Mh02zgKJBxMpwrPP0SdoKAUX0ZKMai0DkwA_pnSM7YSQFLIeJmiY4_9WiVkYg9ynLYik9e2v25GK9bztYQHdIFQw2BxOlixvTxDlZdu-AyI4IB_KiREBqMxSq7fMeVaHngiGTljwqgyl7kwmoGZkVoJYHvbDZ58v7R0Ss5VRYQKdawu-DMOAN1rKBLYZFgR5W56tsoOnjQzFScqbseIM0P0GR9SrsBlSAKJ7kad_HvZgS_c6OZqcmLERb4gbinUJYQNdQ9mssNAi6IfRGNmVoaXhYhQ_aiZhIJt4dxP_EGU-FCMNbTVWu408mLrqftPgEsuwoQEsPTQ7KDc6CD1SjxmRYQBPK4jrJisxHKX-u7V5aHif338Kz0Zf1Pd3xJZHbMmJ6_SZye4oSIY9E_DWwE8vY9k3NhnABcVY88zaNZU3Ii5NYQKqMSdVEwySdwL2g4tANKyK_jCsXZq0ntzWr78NJgMinWbcMRExS-8bVA8k4XLcW47l-M4m2RxZHTf6XdiwYaSVYQC8zaBitdvUU90NT8gI0YXHQ5rwidTaqfq5VuRzXuaSCIAP-8Pg2IBNtQoWkE4qvmd9ld8D-xzhJu95VbQdRF1xYQP_044MwbKCjkgcc7OKJrZJuAGqBK7MlBo0WQkow8M7CLy0_VATwuKXbvBXvUe5CsMX6r9sAp2KXyHJ7eVw4oppYQNiEJAfR3KIkaSZfO4hA68zDVdQdAqNIBT7Ou-2Xb7VfV27wZMKPqMyzHdoiEIikCznHNL_AL-FE2NjB02b0YRVYQPJmUpfYjreJ2KsO6qjp6Hm-dYUQje2B0qdIWG8wHZQYuH-ttoWP2HiqGUg7AhbBKNrGpTnS7mii224qaqQSpI9YQJDBQcFR-_q6N2kGc23zmUaUpYhRXVU1HfUSBetNZLTkjR9DhcPwnYP5PAGMCm5TwcILLrfHGtlPddt_mfFn85NYQDlM_BFA56Xfu5uP1SvrJZnKdr8AUosOA9fX6G9ji4Nwn6NwCjTuUNIS7VN-HM5XZUBTYoiKfJJu0evNWbUL3lhYQApacvFWgmEXwxfhcHO2HcsWECOd2-VICNcVuG_iEw_v_ioTufQF3T3a9Mah8093vV-NxNmZrLiqT6h_ZbCPN2xYQH043KNkO3DXqOd_oV1ta5c5X2WN3AdxcvfUeKbnUmk7LMql8QqlCGuT3g_VYQaI2-A8rLTeBU17IDHnp5WflgpYQGv3B2LcEJMQyRKZHw5clJ7SUyBOKIAq3iwGBE7VWUjpyN7-YF0pNRUPDsO_-1feffGOgxg-PhOy0LxU5ee1HOhYQBS4QYGwFVgiiVE4prMizk6t_F11IQcxCiNOJgR6k3_tpk_G3Jdm1lrRDGKpgXyqaYaB9Y5b_K4ku53h4iAyRq5YQADBzo8DNfgEXfeapC-3E2qxEgVr6wM_qLisX_sFfC_I8MY9WfOnidgBtvhOXAdjPNmGVGOgIgLwVk1hI4BKbmpYQP_JJsrjz5umZrCQPiXIk2Uv7l1F99sPnMoTvhjldhJQkW4Th2IHyC7lhv8QK_ALb9M6aD6XyVt_UpN2Iy7-WwBYQK4WX8FUJirVVs0h5asdfEZ8ucjenwnpsDPsHScA8EX4CprmQERxI0-JLzodlELIEQLEhj4cENFVD9D01URV3F5YQNcfX_APA1ZnjFVZV7XF-6UC5i-5Oem28FkJETyL8JthbnWyHhpqlNKsy2vr_HzDOXwfdVJZowbuq-vGNZFyDedYQLVBNxPrCeXonZkcvuBuEl9eribfn5tVWBtbqWxD7r_FyyYy4l_nbd-bOnXP-5_TbEZlaC92vYvAzRnVhD30gdBYQDg50E__Na3XQQU4xoXkCfcwgP80QErhEYnzQQu-Otm0D8CgAhV8J2JTiWQ9AHp-oPFlUOcY1-CYZP4Rtt09CrVYQGy7H9ZxVOVi4pP_l8VESrZ6iEOGEwpUvdvNo0PuUY1KYoWs-rh6r0At0qFVnWTkynY6IPxiCxfPXlB3RXTVudFYQG3-bdyZdZF8QVVOnoqNTLlAIpIC6zvIR674WNo1dcJ1Hc1R2D2Fv0vGozPYYCLP7qBGJL75lxLjQCTmqgV7NyhYQHp4JUCh-ZhW2ZNPNqW6r_6_In7gdbdwG0Ij7PkRUneHp4kj5aomloTbXksOiKd5OGrjJ4VXFMJH_tmpMFEVBOBYQIHHN5XSJc61hzRmReNIfi90bAvEi2IU0Kddq_OTfWM12CqQFQ7zNuY0zZxhW-mnddcmk_DLbe0V5C7qeO7nzJNYQP_mu7r5649GPeJ9CIKP6DlBdGaiVlAG88GsFp8vusoS8ASysozhHIMsy60cZISWgoXTeOgIjlYLV10GQOmMm9FYQFeDehhn8iSrQf9POPkWkhOkO4e5HGFwowqTHJMvtja5csab9EXpt5tKtUYBKAw6sJinN0xoYFt9mso7m30yUCdYQLQvSunooadjGcGFoDijYyYFN8zBNciBzHpPIfFKfQA0aUFDt0H789Hj7AYbUu9gZMdGy9pG5FKhaW-hVXZAvvxYQMHktGiY8uSRiO8FuNGIiNMdQ3RtVNTqPI3Lkvos86E6W_k6PhodH78dvXsx106KkWPLv0JcXtw8rzb3h3nJcahYQEcrLspwXgEayYgerX5PPH6Ah-25yWLHEjc7G9xHv1VobRhGr_jnQRv0V1cH8XZ92Ryye4fpX-AT2T9vLlVOk35YQA71e-Mw9fCyQieoMzBTWnWN2axZIkSBFwxMtrrt0_MsVcslUQ1--zebh1ORItwuAEHJuAwUrvcR-DmCN4LO5qpYQJ_dY--VBef86dj3C7dKEmpzzuKTuvrguCsrkb9-rUiWjdlDtPScrHd77qzJUlh77ewlWYj014QJdesHlmPjqI5YQB5PL8pmH4oLmCy2zM8SXejKtZopb2odjPUMbogU2Vq7RnaQmjk707p8x9gNkaPR7pr6yXGe_riKucD0bqfxnJ5YQOP2Bq90sVCUhiYkOQAoYi_SpDHyFaHP-KkzuW4NY7svEgsfCFYMS3KXNTvQAnKyh00AsWeeVDPaaW6SP0STB8tYQJYxWuSMAy_-d-tLxTpc9KuY91F2UloilsHzK9bdUuINJXRk_DGPbxYA_7nFDlb53OQ3DEpAvmVDcdQsqIGCycZYQDaZ2ReTDxNmzGsI42aC5ytmSUfGvP5h2XMI8AbP3WZ502eOVRVTvBdhL2gnb-f04C0o_xILlVXFSZc0O-5WdnFYQMTrpkOkR5dcl-xB0viPfWRYaALTCB4aL_uvwv8WWJ3sUVBZbbnvu-5UoNa73symBCRLFfWevsu7EMVSz67zKydYQH0HBK9PvrvyWknxUD_33bEuiDwP3E21dQH02OO0xIcyVG1Lt3GWf5OUosQhvtIXLZAzOSsJvp3Xhjf0oLMYMpNYQOc7Vq1LQqWGy9tow5Ga4hqkj0xm-7_ld5-7HfRzzuT6XKlhixmT7g6n05M-34KyUEL4IGj6jBJ7EtALq6nmuwWCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};