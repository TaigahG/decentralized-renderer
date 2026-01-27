import { CertificateOfInspectionw3c } from "./types";

export const CertificateOfInspectionSampleW3C: CertificateOfInspectionw3c = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/certificate-of-inspection-for-organic-product.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "CertificateOfInspectionForOrganicProducts",
    certificateNumber: "COI-PE-2024-009988",
    countryOfOrigin: "Peru",
    issuingControlBody: {
      name: "Control Union Peru",
      codeNumber: "CU-800952",
      address: "Av. Petit Thouars 4653, Miraflores, Lima, Peru",
      contactDetails: "certifications@controlunion.com.pe"
    },
    exporter: {
      name: "Andean Organic Superfoods S.A.C.",
      address: "Calle Los Girasoles 123",
      city: "Lima",
      stateProvince: "Lima",
      postalCode: "15038",
      countryCode: "PE",
      contactPerson: {
        name: "Maria Garcia",
        phone: "+51 1 234 5678",
        email: "exports@andeanorganic.pe"
      }
    },
    producer: {
      name: "Cooperativa Agraria Andina",
      address: "Jr. Puno 456",
      city: "Ayacucho",
      stateProvince: "Ayacucho",
      postalCode: "05001",
      countryCode: "PE",
      scopeCertificateReference: "CU-SC-800952-2023"
    },
    importer: {
      name: "Green Earth Imports GmbH",
      address: "Bio-Strasse 10",
      city: "Hamburg",
      stateProvince: "Hamburg",
      postalCode: "20457",
      countryCode: "DE",
      eoriNumber: "DE123456789012345"
    },
    firstConsignee: {
      name: "Hamburg Organic Warehouse",
      address: "Hafenstrasse 99",
      city: "Hamburg",
      stateProvince: "Hamburg",
      postalCode: "21129",
      countryCode: "DE"
    },
    productDetails: [
      {
        tradeName: "Organic White Quinoa",
        cnCode: "10085000",
        category: "Unprocessed Plant Products",
        lotNumber: "L-240501-QW",
        numberOfPackages: 800,
        netWeight: {
          value: 20000,
          unit: "KGM"
        }
      },
      {
        tradeName: "Organic Red Quinoa",
        cnCode: "10085000",
        category: "Unprocessed Plant Products",
        lotNumber: "L-240502-QR",
        numberOfPackages: 200,
        netWeight: {
          value: 5000,
          unit: "KGM"
        }
      }
    ],
    transportInformation: {
      modeOfTransport: "Sea Transport",
      containerNumber: "MSKU1234567",
      sealNumber: "HL-998877",
      vesselName: "MSC VALPARAISO",
      departureDate: "2024-06-20"
    },
    declarationOfControlBody: {
      declarationText: "This is to certify that the products designated above have been obtained in accordance with the rules of production and inspection of the organic production method.",
      regulationReference: "Reg. (EU) 2018/848",
      dateOfIssue: "2024-06-18",
      placeOfIssue: "Lima",
      certifierName: "Juan Perez",
      certifierSignature: "Signed by Juan Perez",
      officialStamp: "CU-PERU-OFFICIAL-STAMP"
    }
  },
  validUntil: "2026-04-22T15:20:05.799Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "CERTIFICATE_OF_INSPECTION_FOR_ORGANIC_PRODUCT"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "f77af20b92c98a93dfe192df3d7a17e070640d019ff5d2cd9a2f70db93b713c5"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-22T15:20:07.076Z",
  id: "urn:uuid:019be64a-98ac-777f-a349-f205dee98f6b",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-22T15:20:07Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAMngae9o1F8C8UrV2n8pF5lZsQPZeRF_zw_cQpxHV5EHXBfF28DpqcGSiQM-RQ_Sj8Fj6i6QzDjA_QbMp2lW01lgjgCQCDoyXUD3TAimsWMJh7U21EZvH_TdedJQNTCaEnGSo-MBYIEr3waJUjEGj0xXrzFGfP8C1gZ5SsPfYDqGYlbIHkwddmFZYQO--zeul1Zfn0Xj0vNt-KWSILMUSY5n1ORLj06zgNNeYyOGBdcnLSWViKuWLz_BvFMIYrd8gDxBMdXc5fFwnK1pYQKdycowN-mVSqH7otmB-bUKKtryYLtHUBJ3EPF_Ct_tnWw4JLR4wFXDlgkQgN7k3Iek_8LcGLDSdV56t0_KzxqtYQM1uj__yz-N3Vlh0z1akz2W99RUjTUZZrPyqL81Yd9QQyR-HzvJy3d5e5psGWuKI7TukcXn5kBIfFb9f8zzz1utYQO-XthljjLbKXHEQtIprpiq3r7zxDKu0wJhQgr9E8jOncJlV5XMHBRGdOXgLJScCwB6U46NTtBQJ8J-8qXG8jhpYQAMHDU5KbCDYN6R6U9X50pIpnwGlvPoWH5aR5MUXy7nb2JSKwlkK88oFHJIedMNkV2QwL9dDgIfbxBFinKyvC6dYQCBqaRod91N2TzjcAwema5tvzAc5Q0JWJ2j1L0-aEW5QkO6I42OuOC64tENzBHSsuxhXjgyZTQatyFrxE2qyk8pYQNqku1Eaf7Vl9r3tlmHVeGcSD1MtWuZDmdKC8JrI4vVUb7_Tc4KPKUqOC3rs9jJnGKi0oNOV31Y1v2wx1KKyP4RYQFfaQlOKPGxDWkOsAE7izZV1MXdJDc61vrmLfdSsyx63yVNMN4gZBsVaSF4205cwVOiP0p1XAqmaQupjduRjWZVYQArwuED3azF0p8S4-Z0xhrkqmYG8mR-AVv67iF1dP7To2la2H3kIql1YWHlCLG8ILTu0MLfWQjt6q80deKX7qplYQAFAcGYeeLgguENpUYjdXwn7Ad5Nep2clGkMp35l1wjcI-3T-3tc9Dav3EHSaRiqj_Gp8Hkew2W4eLU2cHna0VlYQPpxSVAq6S1ZucdlInyFagjWL2mFsipBgofBfoQ2Uj31z1fp9D_3RxGim7QUFnGTXlKajZNu-06xcVZ9CsLtludYQFst6LpjrU8brmjC183k4J91-pTHM7OPvAMLYJidQUZ3Dwp18_OwJ9pEonfj9uNvnY3JyVz67vmL2CW-uPP2QDpYQN8yvPNMxtYDrkd4zyF6qEMODCnDMZg8ztV9xZVr6hZXEM9fGMBwwMOKiI9wB9PHrkJ1qP1w6hLly4aW4wWfpAVYQCXYqbczWIwRdENuP4i9SDIT8v68iLymSmmzXdr8jiuJyXeBbFTrjsZICM3VxaOtJeWcg0ZqWRtIb0MQPWxso0tYQEbCordxuhvRMu9uuBkAP3H_zdFWKmoDNgdYMjahytOIJGAdNrPaJLtVRJqP9uhT_wIg1M3lb15gldzAX1hJ7i1YQB06NY8Fx114bRTFQ-wPHou4sTUmnDeq0szkqADgjj2bwwvuQNwGDF3TNE2l_zq35AVi4cGEyueJiWQbrnWWCHRYQFq2mpuZxdgT3GxkTUpPM03QFf_VOEAzJDWc0uogMV96d8fjYKRnXH5_kSWsP9l7bOQkWJgz0kBpZC_2zsvRHQJYQNBUX3ppeb8v4wbGKq0y5E3i88DTuQZ-LrbtGdKyr4IpeYgYBZSxEktSPG1W91LvFmu-_bCUUxPzn1lBlTqUoRFYQPD3QKz1Npd0SaFRJxGYv2x-1NQhWD2hiGnxfDS-hX7ZFtpfPw5Vw7wfRBjJU5Y2yI_nQR3G7iIejN9vKdSESWtYQJVYUS2tFy3bis4S33B3ay-MMm0Z1WXvCcO8eyq6ug-gNHsP7LFAoTVBq6oGVyAaBPKUoxj6fDSXpblJOsWZzUhYQP83vtTw2L5XM3Zkl0gShfKZ8itidNyUYkJw8NcDuTP8T2yIxQRZp4eSFfETA3HFFgAHwqTAw1ZQTMHBGLLwCl1YQJmvfizoVXv9GznazCkCcp_wtiQUwIUbanyvfEvG8UAfG25KHtqLP2AAbmb1U0qbV8gTspFefq_Acrtcs3GgItFYQKOotbUN9nMGwZ3RgoryeUr7tL5ep3Qj8wpGEQh5N17v5a46A_NdVgtovYke9VJKmueO55a0knLnfkOp56fwB61YQD08Uo_U_f-JLTwbGHdHGYa8lPzVC65M-gEtx446q9R5wJBZ4fwUBvzLxDDYxyk6EuW2sJrzVibrH3xPxe-l_pdYQBm8arYy7UkL2puENiEuK28_sVkPt1_Gl4AK0EX0lVojJAzjuk9ZV0gAqSY7LRJiZI3cFekpUYqAg_PD80lLXe9YQIBZCUWkyAAkHJ8JppkGCxalGUA-_3s-x07mNRYhjMLRP0Amv0MkvRjJaWXaZ3N2qd-6L6229vu2GN2ntZHAxEtYQHQ4aa4RL22u-NAPS5b8EVgIHRSQC84t-oJqHuifhO-_G000eTtGrFTV03DImaQuUuKbc8RaEQUOXkEpopLVnRxYQBYz3SI1ZdFBCKUn_9FRIffiHr-WJHq7nIzti98PrIfVcVvj_NxWKcbkiRGUQ9FrXuEla7Pg_fIqPi0juNsgdHhYQLaL8TrrNJg0CSHtVEsyik8Fmvt8XVP87TQwqVJHC-dXm3auDsTRhTVdOBolFwzt7-bVnpTP6zpgW1EyoftYblRYQDkH50ZqV1OXp9vx8rc5sWR_MRKk-jFYWHvtLTRk270ADbkhAA9g2qIeEP1n1UeBun3PMCW7y64lutR1SvhG6aVYQKVY5SklA4eXiM9Ao0phZbxeSTMiXLAGc37ZXxQcq2A8JdBxYN-X5v5AZOJSsieAE1Gv2L4MVu8MAXChzfw6fX1YQIL2644qOMUHB6iJe6uPqjGWmOLxyLk4LuKsWUm6kdr74pWjeAg1--OJpuDU3gtLE9skjeKFF28xVEuW6ATdXO5YQHs0T9ZFIOm_sK2LRlHmD5uc6SN55-zXHmzqeGVtOKOSUD5raCQ1JWlP5T2GpLR-ehwEtUmzSmIwjYNnP9SXbOFYQLDMCmQJivBW2rQb_93YNC__Y_3d9oDVIJBzd8t3n2pAYSWudsYY6yRWnZwcq7r5BGDUyCXr4Es96Nhx_QO6pT9YQMhQ5kbuQKqil3TN_ipv1rocyhkIy02ebvT5B08RQxEg6tydhEQ-y78l2kGiZx2jOgtYM4wrKLqlWJw4YYUFJZ1YQLxOO8uGfpJ9PiSMl4TwrXohX9-QpWP3nQ3Eayq07moC2MHU2_YRR5Aco74OfCW7wU_cgxcr61CxP01n26JuFm9YQFNf8ZQymB1kTsBqHps9iO1XCsFq6iCtEg06mrW3rK0In0yKe8YXcDPtvKL8IqFbpzdDvVZvnJ3kajOkjkimWm1YQOcRgJipvYLOdD7SFmThAjPp2VpSs2AaQiM9DBc5LWMQ47tPYSk_gxcZ98nKTd35zsK3WNPa-T8fPUUG04LW4HBYQIuYnLWKTWldOhO9CxEAw6U6pVhAMURQjDR1TMLkH9ahVjErNy-jjLADoCvnIsWq9u2n4eycXAm0AVKbFKEUzeNYQLZS6wzy6xCzPe4ETYxNdUfjwM2OgbzLglw9pzwlWAn-ZqToaHkvlc9hJ8uVODi9TYRKlesH61U6B6K6NVNdxBRYQARWTaYr7wje-plwvCcJUVJ97_H-h1pj4k-2_tBglN-ZzE2MYsGwyTbWGK6XWn1Xoga01ih_gg3Vg2l8BQaOYjBYQLcvGqI-zayfIicZW-rRAJRK5uTvlmjBLLxbn0kLQQfU-Hj_a0TIgMl2Af3Sr1JscOXwDCg5s6PYqd29koLZzgpYQMTC1zEJAWDwJcHcwxmXwTUO__UASUNNUSqUaUrlLlwEAbEWTxaIWSLcPlOGmfWRRrdjERCbGCPnn9P0jyu7odVYQB7znD-s0irf-FRYLzG7m3cHMniFBbQ3PhW6Gfbyd0ZA208E4TTxzpDzkno2uSLjZyGuNiws4GSYrrgggmvrbhpYQHGqUJxa0vAqoVITs-5CJwkvsze-LwMDJBJzuAg0xTWheVvou5z46RrkyuN2snFsYxQzVszsVMmunZw1ZUFrkTtYQBmkijgNfdVcYqDU4_R_z1LVyLpDBujtcqkaiNrFmwc4FkeW13_6DWwdhho65RdIMO6NQ756gK4_XOdCro3eTx9YQIRJJiy-Zz-3qRwO5qAUPkhbVWno6XLf4E3--vG0NorrOj3pzw9qTlyrPnthBlGE4Kgey0lhI2LbijyN8X4NPpNYQG9xeXB3lYX5YbkDb23P4xgXiP1T1_f7rVVeRld6Dsf_EectmKyqzglh22crtOOJ-SNWDJRLkyX_t9V8JlatkYVYQCh2_eojU6HUglw7pBquNx19ILdwoyBUkGIlwYplAqhfd_ita3Z_c-eXO0z-aD9C_1EPgsrBRivp6qM5bDvYgQ1YQADdqsb8_7O4u1KQSuxp-YRMyerskimchmAk2PbG0Uw29DS3GPAXqm4ITdvzaQJAN8BSIQx1j-l2s6zJQ2dyFnBYQDIq1ip4xptqWLzbxJ7DksCZI-Io_-XyVfN8RWfwnG07HjT2MVIT-WdVA6p-8fhRErhCaGuCShAiaCT2yFIQErpYQGZvattSigMnFTJFsQF_60NYssEGw-odh_Y1ttcno430AhYAGdw6Fm5ioGGy7xATSXPBAn8gV8Fzl4QYetHDMANYQAi_2OEWgia5ZWiYf2JfNcOgPOmxUiLIBhvK-W-BsYF3oB6XTO9XI8D3jgmT3EIh9Irgv_wbdTJAVBXJgDfVy9BYQOoUswolEkFDyuuWldhGP0EaSN4Zihm1LNRniUE2Q78cGlg6PKyxuJEJAj14BOlBehCTlgukFc2jUyLF2HwfbYBYQIQ09A-HL36Qa5sJNK3icWZMiRSvoDoiS2JxHd36kyyCBegcEdI1DXAmrMjGBwFkhdh8fF-n1TwlkLQnwH1CnLlYQHcukc2XYDI0GO-qm2TnJ8wtY9dfcXK3kPxdbA3nnd00K8gr6dWa043aaDLkA86l4S2W-YfPlgoQERxOhwYkgXNYQAHgo07e7LpC7oQlyY68Vvr1ph00025_genG0hPekHLO1Nc2wZmupVJYRaRdd0k-3z89PRk5zge82mVnVyvfVwRYQHzI_9uHUd00aXqBYRuV0uz0cwa9jUrLrQt1SHcasRsM9iGqjYrFs7KjEEhZsLJmvpJS3RLxGsZFFGGlfXGeTPJYQMpTHy1gFAyOfM0ehLEVN489mHjBnupe5TjJXrixyEJmaYjWl6cQefxxY030CYYDw7ZrY1_6hsbZ3EiRGNW2PiBYQJPG0sygY5i-nruOF2OvQ0R0g8BO4I8HPcTDqUmECkVgVcbnD13jzwaMDVzSglYhQ_Q9Zapmm3yk3A46uEqQvNRYQDaFmCFs2SUHcuBTUEu0phJnQRi-WH0vdMwTW6OAO0vxUk5nWx3yg2ET9naScQUzHp4YcXUEtoRcUJH9EkorfS5YQDsmAE9iqtWQxCZASfwAR-neW0HtqNZEnsqOBoNXWkoEHBaFSxBQSs9rpnIe78Tt7_7t_wpnIk27yFErzLUXkmtYQGHY5kQBU21JAwL_oxH5c5Ls0iB8PLnEa6M-AdNVIqS1yPIwJpAL2JQosesmuQ_bMiA8tYEah-Egvelh5u_rSYxYQBYmQIeLeWPmWOF_Qlmr_Lc4YtHf69nMZBuFrRkcvPDLbqHKL0HWiN-xQRuW-wumrwEmNdNWgAtNSRvOOjQ5tw1YQOO217iRf8122i2MdWthgtHrHaf7w1EIJwcyjT2Lh2Us-HI5EeGjUIgim7fDjG8s5XuN9QCysUjFanOD2WI6KMFYQLeiWLHQvofxgvTNKtCsyXIqowHiImC5ayayEDO3BPDqMdYIbg-86gIixus_nf07RIBJeqx2yRQaFsjudiVxW4dYQHQx67iMMx1AtpZ6KH0jQvpcPZCAlc33ZDjkDtQ3RZl1W09O1Qlncf8Y2EoJ-5FBbZ-nZ6XbFLX9ujxmCBOdLbpYQOjBykox4lqI3JvPXJhsYKgwTJjwp2vZ-w2LwrNyUiSzo3cejMDoaUES6sI4zaH4am9TTH-CUHoXExAbEt3ZeNJYQOCZSVlEore61_aeDubHmepGi4eDFlpoKLVLipjaMvJePa67N_vh9Y5QCwqJdk4_e7esiYEUY0Om0Xpf-aTefGxYQEw_f5xKW41Mey3_kn_s92RvD_L-JB0mcxQgK1RGhLxy3kfATefQOf0o5jU7hgH6sTgRXCMmtff-ofdDNQN7FodYQG9PEq3VCKS6tSLQeXYVYFlE5_k4Ai1fxHKtxTr6F75XWO6uWm1jzfNDEg1tvkdZ_l9qU8vF0bhgM3twGvbWTrlYQKVGWAgnGyngsDHHx38A7w56DKT_haNp6azNeF076gMX3ZjXvnbkmEBXD3g4v40t3TGVZyqJME1tj2tVsZG4gj1YQNKS_DTnRfwDgFDH2NebkqNS5gardwrHOYZcB1j23K6lkCD24wH0IvLv-Usbr3malhebcpn1d45JXSoYMNB1Y_RYQMJVBp8p_1hBuWkOn6why6aybf32b2Hxv5_YMppreeqwpVOQrnn3foxns2z0eW1OtmuYRSpH4xybVMLSt3osSOBYQHMHq9c5Hkxl6NWWohNA2wceRqCKrknooacid4DLxB-OtnwA1Yp-3UHbGFwAGrA7iCPhIH4tOClYAUAoRIvPaTVYQCJcr9KeZr9G5mfO_Ik0ulPMWOND034eeFHtXlXFy_scmFIuIiwRGhc0PeMaVW57wUnuH8l3pvKqbqD-3steuB1YQOPk8A2PlumhXumzMCbwBtBmhybDBBo-rrFm3WfnrGJqBrzG8QvVIfbbVGMrNS0uqA8okNI6cFIoHwadSvHmf6RYQODzwN8KU5nOI745Ia-Lm5U4kmQwtWV0g1Xx_5GZGeztDLT9c9b2tDSW6BKkyZkRsu4x45tCylRkkwYulvAAMPBYQH1Qx3fe8Sin4hO-4_8p8jym8x46Is8ketrjGJfHTrlmF37stklIPGVzYsdWutNHJpGnK8hh9iDRQQ1RfZUuRGdYQDBjHzEwheI-wzkDfIe4y37w4CxhUG0-zry5_7Aom92HzHB0uCohF0F3sNSf3PZXKfiGRMDMSjdwc6hhuQG_k-5YQJhV3cNvhwTcXUDOu7OLvGjVGIrTAVSvMPABUdNlhyARfrspJ2PjGZ8C34SJm6DZx659rinwmmNXmtAkU_lTBwBYQNl1TdbyCzPYCo_j8pKnqqoQ9hPYyW4RYY8rQLv8rxlcfhtYqJF91lX8TJw6V4hxN8KGzSZKG9ZzhSaVoXE9yXxYQN-nbR3ZXz_dp7cstztS6EzGGbvzKX2fXBsM-rvKZCRSdAApRDsRrY6MinAm_JG5fdPQLymZihmZJbXz1VEV4I5YQJGS85N5EsbEpwJktHuUMwIJF4ZL7cSpcocxbhPxEO3wpfqCGHsif0gnoimsxNDLKaVOBdEVQMgRhcjeGBeCbnBYQL8pDw3HPOgjty4FCCWDLgBlEO9ROqg07cQMZCduDtDt_RAywxBAX_a9C0gjg32T9w9RxjSLXBTEATx9ZSN3unNYQA7WMAOlb8M2acLopTZ_kDNVcofdV5ZuJpBa70uwkI-VQtJWRdb4YBd3UyLwYKJEdi2LS3giFY_GGbfMFaTHzD6CZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};