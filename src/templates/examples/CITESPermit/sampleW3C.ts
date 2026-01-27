import { CITESPermitW3C } from "./types";

export const CITESPermitSampleW3C: CITESPermitW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/cites-permit-certificate.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "CITESPermit",
    permitCertificateNumber: "US-CITES-24-889911",
    documentType: "Export Permit",
    validUntil: "2024-12-31",
    dateOfIssue: "2024-06-15",
    managementAuthority: {
      authorityName: "U.S. Fish and Wildlife Service (International Affairs)",
      authorityCode: "US-MA",
      address: "5275 Leesburg Pike, Falls Church, VA 22041",
      country: "United States"
    },
    exporter: {
      name: "Everglades Exotic Leathers LLC",
      address: "450 Swamp Road, Miami, FL 33199",
      country: "US"
    },
    importer: {
      name: "Milano Luxury Fashion S.p.A.",
      address: "Via Montenapoleone 12, 20121 Milan",
      country: "IT"
    },
    locationOfLiveAnimals: {
      facilityName: "N/A - Dead Specimens",
      address: "N/A"
    },
    speciesInformation: [
      {
        scientificName: "Alligator mississippiensis",
        commonName: "American Alligator",
        appendix: "II",
        descriptionOfSpecimens: "Whole skins, chemically treated",
        marks: [
          "US-CITES-TAG-2024-001",
          "US-CITES-TAG-2024-500"
        ],
        sourceCode: "W",
        purposeCode: "T",
        quantity: {
          value: 500,
          unit: "PCS"
        },
        countryOfOrigin: "US",
        permitNumberOfOrigin: "N/A"
      }
    ],
    endorsement: {
      quantityActuallyExported: {
        value: 500,
        unit: "PCS"
      },
      portOfExport: "Miami International Airport (MIA)",
      customsSignature: "Signed by Officer John Smith",
      customsStamp: "US-CBP-MIA-098"
    }
  },
  validUntil: "2026-04-22T14:42:03.145Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "CITES_PERMIT_CERTIFICATE"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "bda64744989432071a2d0c2610c845221dc2b7d56a0f36b7c1451acb6eb4947b"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-22T14:42:04.392Z",
  id: "urn:uuid:019be627-c3ee-766e-b37a-0ce56e34ee1d",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-22T14:42:04Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhANDugJtPVF2GK8p78NWZ3wQfznuOQ8kDH5QJ5fHPhJ8Msa4vWedqf1g9N52uFhlRDQhOqXLUmwTt8InWYvQLys1gjgCQDqrIezCTCVPKaE2ax2lxZ6P940Nwr-7tlLw5Zb1girRNYIBO9LOe2DAWRE4onwBixLmepK6czwXH0WtfukTj0V2CNmDZYQE_bMswqWVJgBnqxPIx3OA0CagxoSpTv0_ougA-Bdxmjo68fvFO1VMENypeh4PjJ0ihS9zN37M6c5Rd1pa7aNF9YQC77YAklzvaNd4KgCztHzPJ_BbjiRL-MUbX0hI3CUF742iCMYeGTWUSXwTWTx1LPaR50TmYrbFRDkU2gI7AAI9VYQDYCbJVV11b_hlf3WSbc1b1UwDI6_bAEXOWVJR8acFuHrpy-CCsxFm7KufLQjzSjPJVG3CY9bmAGTjoUhMY2RlFYQCsZBt2QucooXqKRzO5Px9pZ1wTIYKbD1Bbz7uSfM_mgtVuz6an6OcNaJF8zgkleF4PnKf4ZSvj3FCx-4RTIqPJYQIWlSxY4Wx6pIg0vB8d6Mf5kvhfnCUuU3MRLPKikQSmmK0Ywlcr1PnTNf13AzZVYDkeGW4MuuCzzG4hlNYlrPbRYQISKgp-NdKMF6nQklKDoz0_Quh04pdCPjofr3BN4HdmvysAxpMNEd5uft8SifXlnQ1_ajvTK6i_fj2kl4Um0piVYQIXBR-tlc7Z-WJ8Iw8hTn0Ssb0nF688eYs7TrdufgwjV5vEAxsd1FR_1Ll_2Tap1pCA1mWROrFeVlLIXNiPTOZpYQJYcPkorz2WiuIPrPnbZmuR1BLf9Hmmdwj4ksa8Jntn6DgZJ5knUEpdbwWpTo4FibctiE1y2XPw78rHX1I6xcX9YQNvZEyQoH0i6fIzvYR__feZw8i9_66y5UkhAJLm8WjAAjs8OeYg865X54xe6v_qV4Z__AJLbpskg5bUWz_RSPuBYQFKavFf7W5L3EWqx3OppB1-IloQHlx1r9-xbWR87ooGqlYT-lVIRV85R1udEwL-9v6Zz2pSuFUA7BC8B6uj16bZYQNRjpiOTwfXIToxeNpViMMjWR5kapWiUoAgXGX6FIfo4JZIcHZfWMOA-TtqiiElxLXbLz9-LD0l7HfeBpPQ8WEdYQJk8u_Nx_niGQSkU0bM4K_3V2BdQ5FIx3orbi6xvyHIM-yYmGobw0X3284Vt0mtmkKuZelW4hAbA8MhHTh3GXzFYQPhK_y-yOXIrU62YBGo2lPQf7nmKI1r92nEQSE6s1mFVo55jAXDeaBG3hu09l5g-wWBjp1imUAleQRjQMQe8xSlYQFVSR41_qR9rqTHKHUmlWXvUV8DUIQ13D6ZOuEdtPWD9iQ0hIpQzFVaQnmjiZbINqD1mbBFMkqeicdO16ISdPiZYQNgEEbL8sRq4v5z1v4fRkxAmKw4-7GYZ-DIiyxzARz09kDFzFb7ezfncjHmyKuKuFr77iCj-DYReJTVaSiPZVsxYQGHKEuWWGD7ClSytZMoI7eRQDLkBc-thHdm3WKC_rI7lOOsjvuU40T2ICuED22GioJK37xPkTNGjin2b6L63mQ9YQFCxGUc4hPovVG3whTCNpl83Hlc0SChdwkCFsPsX6J52dtvdYPxgd_sCOmczwpxqURIG-JxUN4j_t03NPEmqX4hYQGaxC7iiMyEWUaSKQNDO5nsIfFXiPqvPZlN_J-LVBSASaq2UK7LISvr0MMBuJ8ANKobeK9bSRuItQpSNiRnhZjlYQL_ZFkBl8TvFtkr_OTar0JFCLq5Evtw5e0dLtBC6oFTEDKYiZLnRPEG3IMx9gNBAvNi1p14BAIn0OuEWWPWQHd9YQBgMp7HTS8VJFqRx4sm_f0-Hie9Qdn0GBrVu6BI3vh7dNHpg0h0F-6iuQf6eJ-KAn3DfbtiP35j2sRxrZJuuBeFYQAnJMK1ffmLmuAW8oA03BvM-Fhyv8AyJFzIWRVKtDLCWzAETat21BNa8K5dMEWV4QoRNu-_UrXgOlEn8bu8k_t1YQGZJjs1Pgl7NzMMbzDprarOX_qUoA4LQfLSDFBZO0J_66x1zpaB_PnJ2XiTV4PzJGmIL7R_kZcmeQsTMs7v-b9BYQENiqfCGUTqYacPTnR0Ur0rXaSaRzblBgp69XVj876a3sfHf6nHtjGS0nlYv2IHZRZQTajsn8FvO_wvJP51CAZ1YQMI_k2z10jjwLsY_T7JqJTtWbw2SuXiPIjGWZJQ3nbS2JFmwLKnIGssdmwFX54HW7wze7hG6V0Fja6jHN916kx1YQAldjkCGWz30-TT_EoHIkFn4CzSWLwy45S4T7cwHTDg3bZ85h9E6FjEzw8d_G63nHskUQLmsF8D9kVLiTNtSxoBYQBnNRQ4BkBcscu4hqq-EVIlFUdoI_LEh4anew5HV4B0JnKlKs-pv_mXaxoaXo4b26SB_BH7-LOZyeeYWSHvOK49YQAB1ztVZA3f3cxiYXS5LbzBtItLXana3dbidF479tqGY2RK42dcRNcLdtReyW4jvH61Gof0R9uoKuZ2pLXx-HXlYQNfdqKuxNhopqArRzJxjVAZ4-4FJabgFdoLbf5k4CXvEQDnGWx-xh1DAw_YNTurFnBAmIx5Szk6XTM5cI6JDJlhYQGWC-QofY9qCVMPJSTkvA5rhvBAfBEj5sWcR0m3GEol6cEQq_CIvq5lQkuS4A7hcF1_kcmNp2ZhbCFfopu6IHOZYQENZevj0Wo9Zsh6SvTHI36SjHh3R1r7kEg7JdjZyTJNI6wtBRL4-PWUd091EkXxg0XwSlWOtvh2wNPjUoMmx0yFYQKId-3TpkWqPcVvwSQWSPD1oWpU01WfWM60ssc4XuEOT5rmDsYnppa3HMXAU4e4b1NfvoMvo2EPN--E4MJGyXbdYQLJAoiRvuYO53bpQ-fKs9MnvLSN3HPJsXEHH8oOaWeX2BShuaYKT4PctChBpobezVkAUXaSqvFaAb-t6zObZeBRYQBlBDJEgZs9ZuDUAx5UZU_aXuzWaQu37LFxeSPwaCZfsZnbs0eDeN6nwhiJxYLV4stS-2xe-jwYoEGIXdah79eBYQG2mTAxgtnNaNMZglgu018pZKXdhiZDBfNRcQcpIlif4HHy-XjlHHN5hmsPEyXgtU6FJnBm1vhd4nYVOIoFzTFVYQKLbIs7-pwRkage_Ox2x3cG5neNmzf0c0E9avqAO_YHIHt04eIl4iriH6sj6hOiOQR-kqFty4B-Js3xKSh3D-LZYQKGpl-i0KIanGug8O6kglYdKXeY20DsFlYErW3VAZDVgR12UCGmaxp4h2WhUQx-67wloDdk3f70wFoCG9fW8RytYQCRGdVfBZvAuhxu5N1AHiXgRJBLEIPR-Vst87x-3UCCx6wSYaZ-7RkVo75W-hcPztcmkZclvJTFdVVy6yPsoCPlYQMNfxRMdwmJDlUhczl8gqsf52ZJAVraKEJl66k8zaTdU8tRenTWQsWpSlXWY-sGBfPhP6vkC71ZzADe-7VCxhj9YQJEh3_7_cxkkjUyCXJ8elZhJv2Q9RRYGN0NOzjE_DdQjP2kIZIjmm1aRH4e2loolXqbqpTAA7hc7Kagw84y3pKVYQFnDpyEXVKLvN2kS8InwvfOkgAmc03EIRp5XMHWpVs3rzj4NfpCqGBPto1kHgTmRRV0cTjvvhxyph38ONIJc8h9YQL6DJm1HpY6QwFcng5lojObCs2FP6Krw9mAsBFtsyBFMqaLKXbjyBEbwS51wyo35uFIFdBDaIMLjMMos9zCncBhYQM_UK4iOWoQ0XMl9-fMNt_4l6bVZV3D6RjK-zie7FU1l9I-gczpBfDGpDrbz9Qo5R1L6cNLzhsov5HCMYGaC3G9YQIMZTMO0rEjqmYr6TiELFgGOZA4K9rGy2esQQbhUg7OBaCrP9aK6VrnKMA-snvLTBRG-o5AH02bjBg_rLsH6MbVYQDwREqPiBy6WHVUQ8R-JE-ON979zf7SROJaGDXwfzeoNPEN7EfYNIMlF9xvkHAeqwGIddLuEHK8b3tXfUWxptPBYQBeF_1jJxQX8EE7uOwy9uLqSJpTlk5rQQnm7Fq-Q7uiUpI0LPkRRWriitax-Lhwh-Ayz0nBe-AguHDEBYptOdIhYQLmoLdrA8ApaSZTNBTmgB_PyJWMPJZqBHMydytpzeog9_r-Expp2ngOFEmn5BwelqxIVTq2ly2tDN6vm-SeFq9hYQENKPd_1yKOJtd840Jfl-ypuucdctN0h-p4GY0MVoJDtEGofLCFrofGbnU-C8HEB7jB42wjd34-yl9Ocq0Avk0tYQLSgwskPsYmDDUewPietI4492VWm6KnF7cnbsVsDurzVPnoP4-vSVgw0Iir9Y5ryyBkF1CfASr-FznI9hOwv4PJYQDJKxIEgnqii2cOf29vVxF5ATrcmRUu9nJjNjrBObcKhE3XU77fEQK5_mJ0wu0f4kAHNx4hcVGZXgdb9csg5BV5YQMe-UM6pxSo02SDbET8_Y9z9UX0EL1gWaF42PRxCnjgeoEqqGBA5O7V01W1dimOVddE1D42JN372os0NtfH1jThYQEA806m1pKfhwN-qz9tbOwVNK0K4WJPFeZQ5jFEjEUuLCRsK8d1tQDJTc12bdhz8fV3vkJ3_Oc_l5YBIJvRmJ51YQCW7YRzLqXyc-EL2TNQQd0t02-6gxKOzr7oVPHFIQ3-nuLJhn0MeUGwC0qrR6Kp292uVZJ4EnSTQTRuCS-fAPRhYQP7NYptm6_a3Rw_e0lKismLTmne10dBLm-HjRHqWX95vStmeN6vQgVp1YpDDTsGm_XR3rSdhYnJHxNqu6VjjQxpYQKrcsLUElyUuRfLy650IzTmq2OypvyzJUKNXrkALRJRiRl0fHCiv9LzJH94fJYHW3an1XrIs0cNhidie43dtaUmCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};