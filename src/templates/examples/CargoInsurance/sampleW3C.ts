import { CargoInsuranceW3C } from "./types";

export const CargoInsuranceSampleW3C: CargoInsuranceW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/cargo-insurance.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "CargoInsurance",
    documentId: "INS-2024-99001",
    shipmentId: "SHP-SG-ID-998877",
    invoiceNumber: "INV-2025-883921",
    insurancePolicyNumber: "POL-5544332211",
    issuedDate: "2025-10-24",
    estimatedTimeOfDeparture: "2025-10-25",
    insuredParty: {
      name: "Apex Tech Manufacturing Ltd.",
      addressLine: "88 Ayer Rajah Crescent, #05-10 LaunchPad",
      city: "Singapore",
      country: "Singapore",
      email: "finance@apextech.com.sg"
    },
    insuranceCompany: {
      name: "Global Marine Insurance Corp.",
      addressLine: "12 Marina Boulevard, MBFC Tower 3",
      city: "Singapore",
      country: "Singapore",
      email: "marine@globalmarineins.com"
    },
    placeOfTheDeliveryByCarrier: {
      name: "PT Global Solusi Warehouse",
      addressLine: "Gedung Cyber 2, Lantai 18, Jakarta Selatan"
    },
    originalLoadingLocation: "Apex Tech Factory, Singapore",
    placeOrDeparture: "Port of Singapore (SGSIN)",
    baseportUnloadingLocation: "Tanjung Priok Port (IDJKT)",
    insuranceClaimAdjuster: {
      name: "Lloyds Independent Adjusters",
      address: "Sudirman CBD, Jakarta, Indonesia",
      email: "claims.id@lloydsadjusters.com"
    },
    documentPlaceOfIssue: "Singapore",
    insuranceCondition: "Institute Cargo Clauses (A) - All Risks",
    insuredValueAmount: 35310,
    goods: [
      {
        description: "Electronic Components - Integrated Circuits",
        numberOfPackages: 50,
        hsCode: "854231"
      },
      {
        description: "Lithium-ion Battery Packs",
        numberOfPackages: 10,
        hsCode: "850760"
      }
    ]
  },
  validUntil: "2026-06-21T09:07:32.169Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "CARGO_INSURANCE"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "d56e58daf72dfab6769bbe8017ab240f5db3e98a62bc41e2e13553c3b5065872"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-03-21T09:07:34.392Z",
  id: "urn:uuid:019d0fa6-5d7a-7330-b914-f44112b274f5",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-03-21T09:07:34Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAWxkEh7JTS2vOOSskaJT-myadr3KQLZ5a9h3D42RygQf_7KzoATqqX-aKv1FfG_6mSlNGzYfjVhvV2T5oCg31g1gjgCQC94xL0mg8L_EX31Z4iJ14a7X393XuElagCB1Z6v2F5ABYIA35D50-64j-csFq56OIsKgxGgK2njYLbN4wPO0DFtM6mDRYQOvI19sJ-wCEldCzdZkz2_Ffvpjd7F7cutMmDiQu-0my3XgA1AHA6KRVcaXuke2jlNTwxBrtZ2uL5AfsponbPiRYQDzsCua58RO9_5gytGDgz_Y-Xgzu44BZY6NOqr1HJack55K2hN0JEApT2JD8tHOeNXskjmyUHbI8egjFhXjtla5YQEdtXQ4ooe8oyNAosSKApQrbmYTQjZIl1xRAtJRRetF31Nuf56_DJrb3h_EriLGfRmo5Uu3bdB2P8GNrS_4mW1RYQLEVka7Sh0vdcsw3MY2bM-sRvyDtwVny9vDLGFx57FKXPl3xXcJs0PaoLTQ75hSNO4qUHonTUd6_YHl6AKPvI-ZYQHcTysImJCUO54BiakvxWjJ9fcW3Alq2kTqvU6vXZY_MLGQqBuAZPbkX20-k7XT6E7y4asLOb6zmOIalPgDenUJYQLvK3t09071i1GOgRC95rxtjFff6ckE_9ZwRs4RnU0w0laDxlF3uz8VfGvb7OvtDuszW-askQgBNbwWHf3it7sdYQBbQ_IacPWIAf42mS1WABtFuZd2W2QE_EVjUmXIVOqvgXNfhL9FBuq_M1PWT2O43bMT0_u2vpAh0bEhX7EnFAxRYQImbTmWgfpGnwx9TuvUS-WmfZd1YClfJ7ME3dFVslRM2vYrGGAAfPjQpqJKcUFqfHPNe91IXApX8bH5_vPKjkSdYQNAX0rXSWgk7oX0zW2pOix37g-tZbnjCA7vJRt7KC3mp4AMrHcfqPE244cRnjjSfUmZdnjOl-jyNMdKx8us7pHJYQKwu7rr-5vlDM1h5FE_8s__vwcA9loYZ87cXeySvCbBErZFroCDVUBD22dXq_m-zdnQwYMD_h32iFRBhVroQ-e9YQC3EDxtsyRsIbCcQEp36-g7zx4vDr1T0nrKNMdNtVPr59Qa-qn2YnYraBRrjF-9liSyiYrrxk3rTwj3HwFtSqxxYQCEwEoygAowC74cVXwRY_5Pd6SugEY4SqaZhQufdAAKEg0P_8V88HAtmrlyiNhadTHfq427B6PM9LKYoU-NSP0BYQFaedKxZ3xxtiV4ep4yigYEDi6_PDXQZGwDkbQNs_ez5cBwGPCLgTNOqIai_TNbfz1kguJ9f634bKJzmaYxdcepYQPVzF3Z_E7pJvyqPK_J4vjHfqf3NrTjc4x9qkl62oPVc1lZfOVj9fO2-2orzN0LYUF_rxA4VY9QkkLHmPkxHGCRYQPPZbWXwhetJo6X1Zx11iP9R5KDboLY31btxyCAJRc9HBNUV2De5rXmxyM4KF0qlLJDhcFN4Sjlz8ur0H97w04NYQEYAH2BvDBqR7b5OMA6ltagdoyq7qhz6FG70ErpgGXcklZPUonEYC3IoF04n_TRkA91H3683a9z2BsidPrloljBYQPLipc5EeGL4JO6-a0bKgCBF6cAO91sESMKOKUkS8DvAzb08iI9cCVqqC-bbf_4_K-RteGkgsgBvclKze3BoSjRYQPkzKDc4JOQVL7CugtrnoLOXdodGImfvsRxGykfrkKWSpMOcjQmg46v8MD0cKqpHNa4nCLK_aWWQOAhi0B3vh4dYQH4tFRUp_wHQv4P-LyeYEN5VSDl4KX4Ib1g-ZYCZ5rL04s88pszWPp_QS72C0AaJckFAXSn9z_arGM8OB0uVCyFYQOu-tvWKiJV2x8UEIxQrrL8wIKz5RUaqUFxniK2jtd2buvMhYesLeOP2Fspl0aD1yXNpXI-aDpkK0eG4P-DIVC9YQCl8wUVHozFlzkS1_xl407LrTRGYA3MUUyx0Qt9IIdLFHfYATpHkqYPFnYtAuQwd-cCDmbKQYUmxjmiy4aLOFBxYQFwWCs0xhjoNI4vdNO3PYTkVy_voNtiXvpogle1ndeRmpOwV0PO8PpOY9_wMQskVbOBZAgSf3ThWpqqKSNgP1oRYQNBbNBVKawl75tZO9ScSPu-tjYe-FEmK5JB_cdaY_I-XgtJkv5BMsf5b9cmhl59P8l18i-GBJOb7taknZkBNCblYQGLqbnaewg02kLo72G2eEufGmLX3MODOBtKUKfo7TTvMAhXCNJZkQrV9GV4QVyrQt28aKozyoLPZiIJhzLuv1FtYQFglN4LJXDj4gHNQnbiihB6YpkyMzmqLstPHPorvRs5WuFptVjpmJHcj9u3MEvy4ouuBXBdDMKQKHDbtZcDfkxdYQDgW1qUUUhnwD4ZUar9_V4AM0YDyEMNfn7OQyokjE8Xm0TkYIoyPWn27c4Q1YAruE2-6LwTHh_f1zUt0juIh-jlYQJ2axR44vDFcSu_eIaa8msYrTeKl3iSQ_kUWDjRnw-7yqsb_vVDdHaXHc9daIGR-lYHtwB4GQjYhqrse06kXLU9YQBy74-WHuD6goeEmshz_zHjojWbaL6uPzQTxfnLMt1brbwjvwnAr1o606_iIautqj5gVl8aXOUl8jLOZmuuZmhtYQDB6c3xIWN9TIE3UxBhSabCLnbeyihLI49YtkSYZVFxMUH0WhXIV1hIk_jJHMWCttdRS7jPLqwgm_pLS2tgQhFVYQCNgx4eyaOusUMZZl-rxZcG-CymjT_LhFm7ER640equlf_tQKij8HNsTFifCVV0Stela16dQcGVmJA0J85vLUN9YQG1hOS9avrw_HIqwoPb7lZAczL2BInDrZFyblaLDXd4pRBM39vN-PauYSxNV88IYJKHy27WHkWfZonlSDUM9P-tYQOoeLW_kwyNSWKq5Q_3ACzsvPSeXGYS5bOwWqBvttSmEOSMT_ChSVYYa-_UHCAXmpADJO5MCstpxIhmHHZLAG0dYQBttrw8CaylM4JNK1oJ-ffg9SVf-7AOFdhpxVFay9RpC23bEoxUzE_wYA4VC_-mk8wUWAUAwPzAxqQVrmoGwQyNYQN3ylTbjx292ouZQqw4qjS9CXgmWyTgYMg2kmRpcPNgli0EUX2KRZwp3zfqsrEnrI6hI-X_F0p7xOGqbLPLFIkdYQOeYTVeluvVDD6dRq74fuRvzXTwlgsj183bgjaGvL7qG16c7mq4DhMrdmDUHQuohTcJusZc6Vo_ZPfwwucBvhAdYQA069ggRPbB5U8z6kCCbs1_erQ7YHsfiIzslQscH2Xv08h1q9I_HRKBM2GFZJGXT8QzCHkruDz1XHmwnrLX6Xr5YQOV4kNna3qFfnOTHrjI1hZ8C1wE2F7VgR9CzXm_rq0V166LeVADSWCCk9xXK_bwdM6vOjXTRuNnWD1nydcIwqPJYQGiOBp6mOGnvvjxe_ZManHj0B-5D-l7Y5eZTxIBxBQO8qkvC4xsjkYNRxcasiq-hW2SgI8i2NbTRMs45wBLJDiVYQLkIB87JvD-CSgWfBvf4DSFXboWmd4zCRbdFfrWNSdRhGd07LGt79t875Vv8r3kBC_E4QFDPqtNiS6Ah9d-5MrFYQOfC8wA-jX8LSwerx-GOs5C6lCzZuO22WSwSG4eR_jngmAzemgmDK6EH_FjlXPGCDFnzKEvXmDBr5GDTTyKRuKBYQPoF8t03_9G9HrNLaglIUCzUWUUmW3NTqYxYWerGuEMZuoJnWelSDH57b0YhizLJn3ZLPBYkRwe2_iEsUpe-TzRYQDHZtNlWSfozSHNFrKjlxXFVYxiZxO2lxxRjVeNtHcHZgNfWkqflqY4xJp3nvivva6aBmtQI680aOngSozQ3xBdYQLpQ1L222ED6Vv19rN6krDyBXtSDq8oD6B0Q-cMvwVWLwCpph42kQe0IITy-Ej4GV-kOA-6JyG_x6f9OiowWO9lYQLs558yVWIA4Ot9jWzj1S4uZY3SJizWJDR_CCvWJNhXjgYLkUhc72Egj7fbgvQdivFVTv05p0c468xZvCMcJtA1YQEsNzVoPGTQFA7-QXU6vKEqQX2hs2vgXf8U1bSL1dwdpRcWDqppDgkFgJcjbo2q4ogV8wg5a14TnGVS70qodK09YQJvCLGHGWvcQEXbzDQwc3wOo8UhP7xrQ8T7U1U_M2zMf5hVp5SSRyRpUkyIE16x64ReZmIGtgf-_cZ2PSzVGE7FYQMCgVFT0QoCRsGYthgc0YWwlGcayVGnIx4xhCrTUj-gP2l7Cj9ajnqD75PUOigfN44kZl-hImyjQx5yUrJ-TSiJYQAMsGHCSssNFNLvsOQ9H20LWCd0NvFsldKF0WIr3MvG-K-71Lb8RKH4QL9Gz1tASQm6whMaSpCGpjb8K2bhsWPNYQF5uxHNO97C0KA2-h0Ev1hoYe9uN57GpkD4knD75z6w8_oGt3BOxqTC6Ph3r4ogVI3Uk2V4oLU7Ix_-1W9PbkVRYQMcVc8BIJ19Xu82psP2nI7xGwSrOzYIc48xVdWlbPJ9MUnqK6EFCnGDKTB-vsH_mNoX7esYkm40rh5744rwnMEFYQH3lvCiLXiFt96Q5ENVFoxh0anXzFgMF7sU6hdAS5javQDZJUlPrvouPIXY0aeUr1--057AaOWmqQ8esvdG167VYQAPWqouvbZBb4U3yvUd0Y6I7v-Vwv8rTQtgQLlYK5Un5-imlwYeQ-k6VyDB7-yGNn7hm8SJ-ei1EYWREsXeVSjaCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};