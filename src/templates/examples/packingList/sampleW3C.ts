import { PackingListW3C } from "./types";

export const PackingListSampleW3C: PackingListW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/packing-list-context.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "PackingList",
    packingListNumber: "PL-2024-001",
    invoiceReferenceNumber: "INV-2024-001",
    dateOfIssue: "2024-10-27",
    buyerOrderNumber: "PO-998877",
    poNumber: "PO-998877",
    seller: {
      name: "Apex Tech Manufacturing Ltd.",
      address: "88 Ayer Rajah Crescent, #05-10 LaunchPad, Singapore 139968",
      countryCode: "SG",
      contactPerson: {
        name: "Jane Doe",
        phone: "+65 6777 1234",
        email: "shipping@apextech.com.sg"
      }
    },
    buyer: {
      name: "Global Retail Solutions Inc.",
      billToAddress: "123 Market Street, San Francisco, CA 94103, USA",
      shipToAddress: "Distribution Center West, 456 Logistics Blvd, Oakland, CA 94607, USA",
      countryCode: "US",
      contactPerson: {
        name: "Mike Smith",
        phone: "+1 415 555 0199",
        email: "receiving@globalretail.com"
      }
    },
    transportDetails: {
      modeOfTransport: "Sea Freight",
      bookingReference: "BK-2024-SEA-001",
      billOfLadingNumber: "HBL-SEA-12345",
      vesselFlightName: "EVER GIVEN V.123W",
      portOfLoading: "Singapore",
      portOfDischarge: "Oakland"
    },
    containers: [
      {
        containerNumber: "MSKU1234567",
        sealNumber: "SL-998877",
        containerType: "40HC",
        packages: [
          {
            marksAndNumbers: "GRS-OAK-001 to 010",
            packageType: "Pallet",
            numberOfPackages: 10,
            dimensions: {
              length: 1.2,
              width: 1,
              height: 1.5,
              unit: "MTR"
            },
            packageNetWeight: {
              value: 250,
              unit: "KGM"
            },
            packageGrossWeight: {
              value: 270,
              unit: "KGM"
            },
            goods: [
              {
                productDescription: "Wireless Headphones Model X",
                sku: "WH-X-BLK",
                partNumber: "100-001-BLK",
                quantityInPackage: 500,
                unitOfMeasure: "PCS",
                netWeight: {
                  value: 200,
                  unit: "KGM"
                },
                grossWeight: {
                  value: 220,
                  unit: "KGM"
                }
              },
              {
                productDescription: "Charging Cables",
                sku: "CABLE-USB-C",
                partNumber: "99-002-WHT",
                quantityInPackage: 500,
                unitOfMeasure: "PCS",
                netWeight: {
                  value: 50,
                  unit: "KGM"
                },
                grossWeight: {
                  value: 50,
                  unit: "KGM"
                }
              }
            ]
          }
        ]
      }
    ],
    totals: {
      totalNetWeight: {
        value: 2500,
        unit: "KGM"
      },
      totalGrossWeight: {
        value: 2700,
        unit: "KGM"
      },
      totalVolume: {
        value: 18,
        unit: "MTQ"
      },
      totalPackages: 10,
      totalQuantity: 10000
    }
  },
  validUntil: "2026-04-16T15:36:45.126Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "PACKING_LIST"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "79cf5150c257b2d1244fa50688c9774c2e270b998dca340339e037d9daad257f"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-16T15:36:47.436Z",
  id: "urn:uuid:019bc773-b458-7ccf-b57b-884da65b0959",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-16T15:36:47Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAhVZF-_RNZtBCIsxhxLCRNXQzhBBti9-_I_CYr-eBDqCbBvCdK0V7fiWyG9T5HPZPK_uTsNyifyTWPQuUa6MINlgjgCQDpOb17B3zq8z5A0C8KDYN1Q1sK4H7-MACrsFTGBICwShYIGWwEpMuPbidoa2sH5svLrvIIxZrZW1Q--9CTiTAcDc4mGFYQN20ACTmZzp9kbUnxIgWPFUDampdN74cawj_rin6UD31HMx5VAmTXlmKtvY3mT6U1vfOOwmAg7hzhlbKNvP5Rx1YQCC7IXl81kDXL-Z_FFRg5zKSRraP64DsNticaOiglibHF-OVh0wAT02Ym7bRbusSNNNgdRq-SvayqUFpFW2eSfVYQAbOdHV83KrYnslp7p8BQTrJQCGN5Q5NZyCAICk0KJ3krViI9aamQ7smO3B4LIZ-LpP2V2eqxC3pvlj2wh3VkAxYQHIW5GnOwr8HNgwX_6nR5ay0mvuNkBBDYpUpurkgMXpEMRa_FSzq2ny_A5Vqsxzw0A3nvU7ne5yIMHsjwDpgdx1YQMMKN7Ws6r0QeWpkiNAZpQxlAov-zw-GEFAPhsq1RsUNj6lQOezCkV95RfGqt2Kg6nO89DyYY5NvxlUBsAkhQW9YQLf1W3K0c_QfwkGBlgXJqTyxYNVckm402FQqEiKaVX11oz2lFO1F-O3wdWowfCi6SiqkfRBGUyIQUq6vqxXkWVNYQGefvjtYYzINfzxMt2lL_iHiLKrVgFcbcuCARsMpFUw1kdu8bUaozEHAQKNmjAaEftA-2qMppWyol8oGMGiJBupYQJZ7sTIsouuYzvG1U67H5tqPzOvcHnZtirogO2WPuelv2L_MUP9vKcZPE07lUdvxgln1bUVLpj2DwsHOxmhbuRtYQL4SVvX72WMGP7fAY11H-caoCkwiL0DTvvn3QswolKCJtL9XqAkkIXrDkA53WM_JQCzw92njlXOPXCeoH1NWaQ9YQF9ujJQlFqCn8PqlcT5e6iAXcKb3JA2EbjzEcdbWljGZUe280E_O4LhsEN_Vao1DOPz0TxQMyDrgNiN4luL7TrZYQKkvqyRCRKaOJgXnqtj36nlP20_t5-_J6FlLoyxRB2y6UfdasUwzhI1fcQ5oWMtPYrzO9lkiLhydkDS_uCeIk5ZYQJumS4im4MpQgo0p4UcwbiSlcVM5XkO-liXQB1XRSlrpHy4evnQphV0Ni4xA2kGKe01Vgt_ySjtYNp6AUg2LEUJYQJKKg4SeW9JoINkbg-AwitJEkIDqtJM0CIMiucEYFVsXZqruT1nk3dOlZHJ-vhv7eBW3gjbdIMsth0J0Db0_VEVYQHuZTaBXmXD16OimYleniD3rMiJPhYZnsZyalGStFKiAl5Oix5BHOV5b-Hk0Dqt2rT9wZ6MRW3j3MowtgrbDoBFYQKUyToKPnoICF7iuu6W0zQbzTqxY5_ezdlBlB7uiDHihyA9EKZ4oyI8DfemXjjh1Pa9-6q2it2F6vQfzS5abMq1YQB48qXaRWHKzEvVZd5atoTTTweostYdiF00GrKu6HB65Kh7r-5dKrEGdupZHAEEqVC5CU8o-imaNwvSqTIrVYAtYQLqfsZX7WhHuLmqvMzI_yNMV6ElQ3s3TOZxBXVNv6bD9pSb1mtOlhe0Hq6loMtA5daWc5xQAHPPfuZU2QPd1YiZYQMBoCqW-3nIKmho8mYITmoi7-mtAZLuz3U2QLXhtfJu5hgwpwHPsc_DsUgURAPoUGKMCSQ5L5M55EsTjdbGqZgZYQH--DUF0Iy9dyYkd4HaWBRMlZJxkeJCmb6Vgu7zu05TEEKTv3o0P9vCwMOas_woUQQEZ3dsbHTgOKLTvMCF-_5JYQCrKeVvc1eOXrwbYPnBRCWoNPNcKUWJzb8Fc2q-XRmfUmdl3u5IuEyABQUUNw51fwT0aKSUO5F3yZ96i9M2xw2VYQAnA5tNZCkFPknUCRr9yf8dfH6uTyIBqC64lKe8NDCwxX8g_mpE7bfpofVrMqssOPznUG5_VV2_HkEzTReyUa3dYQPuUXcIhigGBIaFntmBWZoUlCtwzSDPQzgREioBQRaF8Ltt6DyTnxcSYKwGuDPv-NPSFu8dayHS2-PPTksu9HjJYQAQ5D9BJ2eVGt2NgjZAi6-X5k_cv1HKVPKyAfPH-0WXzGndIvVa0jauGcPgybeRbpOPBThJotxM6jBVCYmlFn_pYQIBiidNif2WzpUAPCLIi2xkPna_1f79nMFe4Lf0eDq9DXijgQNKR6vUmUJd64nfgyDy41wSHYj5wB8GoKi-ke3FYQPS19LKkDD6ZOBMlpG8-n5ouVayd7ZA8h59GUlHg4L5thBQSKbyhCaxb5wZpGctDUL0rTJHDfyJRvDuz2sZT58pYQBgmIL64sQvOzUvfT2gLGvoCDYtp0TfxRwuNSSznKGZqIa7uJazO5goWX5B1SFKymtw5x5Ild4dwyexh-Ejzp-lYQKegQ1tH3hMUD1pQWnB9aTsXB94W0Br65vFsCkAMDC2oi1qe25PEowsS9jeYBjOI5UyVdv0BlKmZSKoQb0LB3h9YQCKLqmHnTSCVU9qLamAQM5YvdHTZntrdwZ0cOlgyBXlwzZ7fsMu67191WTETtJXfdPIeV2gFIkjTI7gFFXDpKe1YQCh-TphK20PYlT0ul0Cy0-QOCQ2nXVDa-NiG8BVmejDTH17fVW-s3eXrEq2i7Tpm2larDRwRHKZ3ZsjRryyvMGxYQGfBVVjViomogkERHRSSGRXj2ggeyTfwLlwcXQMIlENo6f-9L_LYLmhC_2fqL8piFXV4S-jBwDFajClfuVs7b7lYQOjRoTeLOPBdKWJYc0IqaHzEAGBCiQN10EjEiwhkhTbs2SCmZuxcdJZoEtEhj9b8m0-O_cfu8EPECyu8WCBbbUdYQO08L9gpRnvYd7MoAsN2QHX_PlhtSIXEjpXzHY5zZb_jm39ScQnDYtRy1JkghAwzgkV_NtkmefELZn8NEf0tI-tYQIx0jjhlOGfb59uMUqF43zueexN_3e8rNGs1UWJ0zZUwGh4y_VN6p5-gwlvJ3q8QsksTVkA7sAIHp29Qf2zIPHFYQCgZJiIZDx8oLMmWusrnHwaSUfaO83UJYOiac7GK92Lm2hYMadHgm8CKYwS729sB8kvl8zJ7HJkHboTkncSrmnlYQDbo0IVTQcsEvUTy2hQpDA31C2PrA_lLRXLsHBTtVw5v3lILH2A81aU6igWtqwpnKDLHpldn_5C2JMmd39rXVKFYQCvnXmzC7d1y1wloqpxs_oajwpizu0DMcw3LzxBzEhs0hXMyMiEuNqsVe2zAmAun9xb0w0kBLGNVCAdZH7Y5kbhYQCNq0hJG4Vg6qMlx_Fe1TxdcLZTkmp3AZ1wkgIUNBoWaXW98MTR-dNSbQ7QZcmCA7Z7PJCrwuyQwBxsHxRjvt71YQAmfWi7uNrn2XFOXvJlSbCBOSAKHqexXGppqSwfPVCL6f-XsZBCL74WfcwiWQ-UyFPpkQ31y-ryRbUmvOnUf3hRYQDh9XPuzh0CzTrNxk7zeIYoUR8nYaAI1wGo31CKCbzHApn9S6X0XbsvO-0JtZafH2M_4V6zgLSNWU6izHb3PaaBYQHknMNal7dJ-0PxvStxPjPLUHIFpujIx-ErSWcZgTWJwbG-zIQNj27eWHHeZ3WLHOtpVFgjEVSLjEdVaATIjV1FYQA5S0zvvLM9MbxBfnhmhXcq_kWdgGsUHFpnrd9I6MRMlnXScwzBXkRnvVENRqHnb5ws2WcnS0sg3d1TU5bsHC6NYQETH9X338ydsR7hlpnQNfO7UiBpAS2JkU2HNKp5pCoWNZ_70wCtO19QeTgl46LUbW7Xz3jVqSM8nJmNF-yjqN_ZYQH1fkT-SOA30aGhzZWSi2SBd9jyF8IXjpR5cqsJHcndlfYRFc2_TMJJKcg6E0lTvSOuaDQZkn3IPmf4rTCROBtlYQOPur_RHii45Xzu7vmIziKk06nKfifdc6jjy90JF0OKR_SGSiR2KEODXBN-mfnIpEaHRxk_zQrR4kjs66eSrlBRYQJIOMHTrmENt8MacptGHWbz5KS2BPIK7uQ0aeVFwUfbX03qMXa571TK6aVjNfT9RPUTMEz4CqjVvubHVLgsc7AVYQGz1vzVZbM9z6Ec3eFQ2i1JhI-1UGo6LQ7sbkn977pql-Wdzc-6zbC2qAyiCHqyGd4K9O-nKRM9VjumKijMlAnFYQGDOAUMrvkzUuz3mLgePXzGIIziS0JgTikDGtkIDIg4DTPMFjjA7W9QOWT9DxsOZTfp9SbennQz1y8qJbNN-7fJYQJo1jK1aEqlyMbbLNSIK1w0yAS0WgyJvGt1j4Ff4v9zIQGIQwyOAr8YT7cRUaTxRs-rhO8dUC8d61SSqv6g-BHZYQJ3pWU99DUzlw2QLB5kYadV1RBKZRXXdN6weSaHx5MEm9_CcU4vauxat-21L1_f03X-Pgzeci4jvf2GJ5hvXlwhYQHc7f8N_P-0biJuinKSSRRPn5w7zL2oo7osuc1kPlvYpu8tHTYrWGXeEMZvIvMbkDJCwsjrCcUcreEpfT-eD7oVYQNlaSnhv0VhNOFkzuHYT0b6-zg9uiWnUPtr8wpTz6uPYcpoSTiPhP64n8xpsoFeREkjEt24SssAd9VcIofaG2bZYQKJoE80H_fo7A6Uk8eJKI90H1Adq7Vv8SZK74bDn_XfmF-_I9mglMgEWmQSN5I1FgzaPtTpEixlBEj7INHvKrkZYQJsEndc4Si0e5S7bfQNOi3BzPFGjwadQC72FH6ScuetajotfUOW4caftP8UqIKYA8hOg6QNTvEt2SByTHckSQYVYQECATgOI-Ha3xjC7t3EixUF7prvLo6EqtuV53tpspOPkWBUN3zuHwMP0600bAtaodQ2nNeiq3-Rj62O3UrTw_W5YQPmqcjl32kjpffm4icT0T9XWCgKk-jOolIMtE1neqpCnZHGEe_oN12WVIv-JCrfSFZ37cxM1l6i2Yy4pIAxzhYtYQM8z9RSdeBfEeONcYLLKnoRVYG-LoCMXxkXdLD6ItZwGJK4hhEVwwF19I2mtBy36OPX7u9bIu53xNB4ifi9nJ1JYQHchBqIwUPK3uImhN5aMPyrckmvZvF4lzOzSrT5IIbpsdX_xI-M8TbSXMGzXhcc6I5zC7fH4oVIpwU0HX8tpx6RYQJHYYgNMWH_Sc14TQHEQP3ev7XCXr__sud8VeWZXCb7G_f6SoEMG1WUj0uWaYRZ0J6tdPhpi0Rk8QnoxytJuyBhYQHCECMRh4vzNeuqn5fQX6k5DRCmA_uBK-Ae7bzj_heHy672p-78HwAT4WNgDcAN25WiCOv9GIJcTqIHiZXCHWy5YQIOgfmJry7hy4bfReFyzQt_c3DV6pnuYP9Zid9Jel5OLt7ZYmOcvmo7L_ZcEIMS61f5Wo7OO-i4za2uR5UMz2KpYQH6OSZMkow3_gc2fga3o-PlQ-tgL0QxWVAsItshl2cxVBOU_GmV1rlPHQVl4kQGppGHf8KoT4D_yVzBFzgHBhURYQFn_A2n0E9AMVEtRtTJHscHgSwszDSN1LfvxwIR_3OSPfOuARzlqSItiUnIa2BJ_lUrCz4a9QwvZvlMRGm_z5UZYQBgXex-ylQjx2xPDYhRLmuojy8C4a_ORbhNm5pD1d2Woo95y0ZvxBB2wjooYjW1R9CMmTMOcen4kVzUlNAQzpF1YQL0bjqy2oCMcnUVGltiKOAyCgkOGueg5ixbYcpd61uh15jWT74Jv4b_CnjJpGVB1fjCiTXCAslRhtZrpzqjBkPxYQP9avShyVFUxIdTbilB-q8i09l6cfhz2m1GGbbEJmRK5QJZLeP9Q85HWRyu9uPa-mxycxfAo249IfxjV5ZAVQGBYQJnGuz8QeUyth2ymwoBGziKr4TjQ0Pb1J2YaJFtYVnN9MuCWy7sR3z94e0K5kBrjdphihRQiJONyQQOHouX07FJYQFD7OAMLD5htdyIhwI7w-VGHxjbqb9qK7449yVBYTeRp-HbHY9two01IQ-ZJ1RWnHOz-XMoO8a1zfdPNgTp2ORtYQGSq1RfstYFqWpX_QMY7uRnhvJQJozh7CGw_0Fn2H7822UWj6Z5cn69QrcJQsbJnn73sd0a_tl8BKW2HW_GEYe9YQJw_dYqoPi7RG1V9DkHRogs1xBof1X8TJU6duNTdptVeZh21J9ADF2KmK_GyKgDQTPb-oBLdyw_1G1qn1yVBPO9YQG575QbX_Rf7If4yL-CihHdP-SS3wK53qiPenErZmLLj5kmwu8S5OHdwlFBNDkP0jXOOp6CIl0JV989SYG4u8HtYQM-hy6kACC7tiTJcHPDgIDvTcv-gd2JddsumjLWkBIQU67QWYosEQGVHcZYBkEdhCHKPutEa0r5JgFfBPbqSi1pYQBW2zCy-Td0B4zIqDIe4fYHbAZZT7U_nbc4RWkA97cvZd7TYYhhopB9nLJHUjwBv7-scqUgd0rVawj5s7ORFeGhYQOOMSQ4dR2sTHc3SqtQiPSBBArEDh9iOeBPze6cyA5aYpEc3VqV4fWVRVDjk5-OwLPNVO1e_Ihr8Ra03UyiQJStYQJYliH60By8XRjOgR1KGdvF4-41G6uM46Yvi-iTH4MUuWeZmvmX1sqiGdV9ehLVVSpSf4FnKDHATw-LwWkp075NYQH2Et64XoHMC75UwIYGcFOfDTXNprJZdaaDAa_f2eIHhP-_toHEes8OgrB8ju5D1IcNLhy2KXHxsx1V91s11xa9YQAs2y0DesRMfCuCpPSYVm-Toh1B7a62Fqlx0n73Ks69nFXYawpWTuk98sAPv_hnmcnS5VGUwZG_-SOHkrW2TEpFYQCfelwgc2-go1HZpuwzU_baC54q3kXY7vL_fWo-CUkr1CiihX0vyhq7gjepvwLrR-eYz-ZuUwTlShvVRiKgKYfFYQLXfjJ3mMDNyTOdeJPP0HfIWhJ5djcXbcDzcnxjFsdgmhDjU4NG0qtglRvVECI64yU80OnIiLsvys6zPyHQMHTxYQD9ghlNzwNI1OCDPK9oFG0eKPBxJeRXbzJsNwbAxqX4ZaeSTeRQx-YWBHHMs8luLZGqBdXZraI6oeUKiVODgbb1YQC9YpE3USW-2PF1nSPLPm3-83F3XpVDQ-_IGgaYO3SUxAlxWPGwF4NzR82NZOH0hycvZG7vvNeIxDyIyhKH__A1YQO-YQpXGFvkp1oJosQqrJXxPZycwKVEbDNjruCJJnLUx4ysUqK4_iJZXhDZ-alLhxfB6ht8J552MDDxOX2tCD1pYQKGCxFiA19e1QrXznBZClsGv8XEaky2O4iZ0D-tzYWCrZWX2N206CR0Z2EaQxCOhN8cfCQCIl84C8Z37OnkpNIdYQLr9aSosSerBTw7J0wN_3IqZ9TwkzAgAmOM-w9cLur0D5fyXkeIvrjbQnMwmCOxpXvjSoUnalzz10sF72EQtIVtYQK-pi1QRte-hbwM_p5Z_N3DHBQljPFrfLcnBFCmb2OWiAewmYhFtUhUVBxGRdsGo1W018mxA_qMP0ZKmo29fMm9YQMVc3Mq54W6I7Q_Hz90i5hQnPg2UhyjXueGPuLJlc_rEkALKysMT8NZ_UGEgZ3LXj_KGywalP4KGzBGwaxIhuAlYQIXmKgNuZqwfC9L-Q0kemNSMPu_LVmCZznN656wx0LOlIPK0Gm6o261ktUhnirklbQqkQ2jWAlJXQrToJnPcM4JYQLqS9ZfhBM87fC7VBXaCDhBPsxwVeeUGJ-axY_0iZ7pk3uBnBuoalPpJRim1tMxaByRDeWPmWsRI6pHsVx418gVYQK9xKQqqyGHzDO34Nel6yZIPH4fuujmkDN6H6j0IpkW4ELKt1tHonhx-C2q2CtgxahIpUadZfN933oqlxLZUVLVYQLyQRdQ4CSuHURZDgorhlhbwGjWWF18H0dHPxyKAVocueCGK0KRD3isMmdkLm-pO6VnvtVP1JgUOF2fNl8BA10tYQD7-ldteV0URC0usdtPM_AZ7PX4TfUPs9qPcc4omKKxmdYHsL1BijeRi9wqjeUEzsUqlOHwpdBvUUgvQixb30sxYQEpFWItY4HSlN4TWAHuPxZuZxJ5FlOx6LA5bRo0KC79Gyek4n0zqJ_Qc9yEmEEq3MJPjvI03HtE1-Zo9Q37rcpFYQDUcGpAfvxZCpZuFk4yEsqX9lA6CLbmjJyuQZvuVfYw2wYj3MKI16n03JM6a8chmV5QoEG7ySmGrr_tFZb9EAn1YQNaJH21Grev8Kwj6sM9v3082ISswyFRnwsdPP9quhXdpFY8dxq0axPGSmQ_36EMNKd_HyebqLeI6XpYqLfpBZnFYQIabMc-7oe7BCqFD6Y2TXC4Ef579CeOW96YK6pX1BRr5ZiNOE5wq1Otw8KwkMpLI1pJoYjwHx0kZg2y9K6uc1utYQIoy_q0bZTazLSVswBdob5dn7pQk2eIvLc5q5sDVSDAyA-xqYsCxuhnuU-NrqxU_rpZPCCw72812fvVRsuMgsslYQPZo8vFu7gM--1hGo4fBza6j8boHWFmXKW6XFIhnmdOK2OJl4plKmPMD8tR61-Wf3ayPb1C4v9PC_Tzs37AB3BBYQPBk65cQcsSrY_TRpuRAqlrS5K_YwuTO2X7Rssgj7EbKKhpR_WZ4R_k41jXk_6ceMiZBZsfKnZJ__vrOr0x5vlqCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};