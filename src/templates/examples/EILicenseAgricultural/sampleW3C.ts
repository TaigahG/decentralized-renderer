import { EILIcenseAgriculturalW3C } from "./types";

export const EILIcenseAgriculturalSampleW3C: EILIcenseAgriculturalW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/license-for-agricultural-products.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "AgriculturalLicense",
    licenseNumber: "AGRI-IMP-2024-8899",
    licenseTypeCode: "Import License",
    dateOfIssue: "2024-01-15",
    expiryDate: "2024-12-31",
    status: "Active",
    issuingAuthority: {
      authorityName: "Ministry of Agriculture & Food Security",
      authorityCode: "MAFS-SG",
      country: "Singapore"
    },
    licenseHolder: {
      name: "Green Leaf Commodities Pte Ltd",
      businessRegistrationNumber: "202012345W",
      taxId: "GST-2020-001",
      address: "10 Pasir Panjang Wholesale Centre, Singapore",
      countryCode: "SG"
    },
    supplierBuyer: {
      name: "Midwest Grain Exporters LLC",
      address: "100 Wheat Drive, Kansas City, MO, USA",
      countryCode: "US",
      isOpenLicense: false
    },
    countryOfOrigin: "US",
    countryOfDestination: "SG",
    goodsDetails: {
      hsCode: "1001.99",
      productDescription: "Hard Red Winter Wheat (Grade 1)",
      cropYear: "2023",
      usageIntention: "Flour Milling / Human Consumption"
    },
    quotaAndBalances: {
      authorizedQuantityTotal: {
        value: 5000,
        unit: "MT"
      },
      authorizedValueTotal: {
        currencyCode: "USD",
        amount: 1500000
      },
      utilizedQuantity: {
        value: 1000,
        unit: "MT"
      },
      utilizedValue: {
        currencyCode: "USD",
        amount: 300000
      },
      remainingQuantity: {
        value: 4000,
        unit: "MT"
      },
      remainingValue: {
        currencyCode: "USD",
        amount: 1200000
      },
      tolerancePercentage: 5
    },
    financialsAndConditions: {
      incoterms: "CIF",
      currency: "USD",
      paymentMethod: "Letter of Credit",
      specialConditions: [
        "Phytosanitary Certificate required for every shipment",
        "Non-GMO certification required",
        "Fumigation certificate required"
      ]
    },
    utilizationHistory: [
      {
        shipmentReference: "SHP-2024-001",
        utilizationDate: "2024-02-10",
        customsDeclarationNumber: "DEC-SG-998811",
        quantityUtilized: {
          value: 500,
          unit: "MT"
        },
        valueUtilized: {
          currencyCode: "USD",
          amount: 150000
        }
      },
      {
        shipmentReference: "SHP-2024-002",
        utilizationDate: "2024-03-15",
        customsDeclarationNumber: "DEC-SG-998822",
        quantityUtilized: {
          value: 500,
          unit: "MT"
        },
        valueUtilized: {
          currencyCode: "USD",
          amount: 150000
        }
      }
    ]
  },
  validUntil: "2026-04-18T12:44:20.680Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "LICENSE_FOR_AGRICULTURAL_PRODUCTS"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "4a04acbe5f1980b6afe9ddac98c0a59538277b016e7b155a353611defb826812"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-18T12:44:25.219Z",
  id: "urn:uuid:019bd122-9d0b-7224-ab4d-63b7c5562d02",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-18T12:44:25Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAfRhM6CbBO3ks3j7z57ORZI3CevSEP0jgyQtTeXiwrZ6tgY-620dVO2zbKIMjJXK_v_VYCGJE_zCiBdq0HbHCxlgjgCQCvXSl4xj3Rav9MzF-uTPskitNsUqwVlwYNtMaW4Fs3L1YIB-SZhOCrxtYkjnY9dYc1YoXJXc67axLj93HhRCe9z9fmFdYQBhofOdDcVNC_W-qP-9jfhRm4pNIQkUpVwG3OfzsbTGy-CxWRyArfhKMOgeAGe8lrziHEbQ1gDyZcSgUKmPe3cZYQNhlMN_6GkCHm7EFUxxctXBPpDifdF2iVF0PoCjeq0GzAENx1kBNe7xgLRkRxVObPVYwjiZhB3wSySAEz4ILgWRYQOxeHQTmTB69d8rYtcEuOHZL-9te3idokKVHxtpf2njyHHOCGfad_fmvu8YW2-x81tY8c_a1Ah0Gou8EgCv65U5YQKsslkuTulvRlm2SNBvb4Wc3fyrMK95TFb4sqY2B4C093EAJolRr342AbYl_YQW7JuvCsIWLxCOJyjSxXUMQRCBYQBEGww20IyGi4QME1JTOLJrsyaj8kKCdkPxlGSEm0tiYR855MaQ0136XYX_q4mmtYM2dxPoG7OAi9iSyU-WAf6lYQEOoSfglq8tqlojY6WvwU0DyfyUF-LRufe7s5iC_yvOCu07-u8NDewJkQCjV52b-RdAbMBAwEv-qCfXrTiEOUKNYQPVX6WuqOKnmmOiajhp_XabtMguvmps1frp8QppPGAqqa_JNLZCKUmen9GdRJXpPIUxjevODfU6ngzydJ3QckZdYQHkr0bDJKqvoE_BGJaS6mBkBzwg0zHkWchVqNd4MooVOh3CJnz7Lx4WRaZtRF0bCdtaKupFWk5B-wvATY8364I1YQIJW3EtgsNU-7K4JX0vHo-owZV2FAj75xIwQ_WuFI_hW5CNL-zjEtWj0KZYnr2VHXFqNwmqLGPM2ImHKNsVcGwZYQJY650fWD2cCrWYKzVHz6Te23yvO1T1KvsiS38xPFXiho8R3U-B3DZcWkRN_3Z5r012_Wk_Ni9OD2kahUj3Mn5dYQN_iT07NkYOLVp_jvFjMPkPbU0gb0y1phZ2p2hHSBZPF0kF2MDObFQzZoEvHCzWaRO7IQNp2dSOaazTCGIszt6JYQGeC9NqVbPd9VuqDwVSMx-23m40HWHVJqb50Mqp1ZqEhJMpJaPIbm_xWHCHm3Lit_hYAT256-evI_gZrGVeWH1tYQIvccg_nizR5Pb80dUWKTBLiNtk-HL7YJ9QYnkYGjnzM6Cm5K_imhx-GwGFaEiKAW8JZsJiTMAItvG0BGF-_h3dYQIS1alhTZPJ8LsdssJQIxGQhovndQZcdCZnlhUIAVXFUUKCWqkLo_6q2eye_3rg5phbcY4e6BF58s9rcG-8fl4BYQJpizAxy1thsmCqTuQbVe85pJM3zglAklbdO2_ONczfiu1BRhL3o3u1npSTaJgxkClUdJkL9aGkq_5rQfxcDOwdYQPPXFgCIxDy0VaV5UqfCA0I-07QKJmpOxe1MD2h_Lrlmln6rZZbG6gWVN6rdx52XfyXnYNmUB-z3cKorlzsMqmtYQJNRd2B5iONvyZ9UBqqRXj6JTeUKZYW-Mu6GzLWrwMnV7NtP86vKaBVo_RbROo62ckMeScYOiXjo2ojWVroXyC1YQL8Pk7vkBWOQD5tgBTadsEWSZsJbj85nAmlw3A56XFyzLzvsryUDd4MXUInggr0GHzWWr_N7PTKOcn5J8lC1sq5YQARfX1zCGlVjy8uVDjkxx5cjwi00QxcFYBPBw730z6tx6zaXulFCNQhxTiIkBd5TWYbaVNivLPcJs25ADr3QkzlYQJDixVm1pELZggqPRR3-GUWdXdfHou5-VQRsOLaUoUidZyrfYhJIYFz5gFY-QgjGZPWAL2SuaZCuPg-oiaNdN8pYQNsJz4GCvrs8L0GCByEC4r8dZTCqYZZOFL96tzjtHrm62qQaQbOj0q_jxaN3VlOY6ySc0NadcdTquBrJO_81latYQONnJTBWyS7k68n4DKzwawb0g2Wm6j-jhbsjBzJstMWVyGGlMbc4SDwHfbIkbAmPExjGGHO8F4lbkXhnKvcask1YQFCgv1NWURyJO20ZgZ8OSFuvKKuEb0xMBosGoqNlWPsDYEJJFba0G-Q-lz6L0Sqs-I5004uQ2EnZjtFNN57d3R9YQEF6gC8paJMFkMK6nAlzG8JbkeMMkMgQf2vn-ObOaZ97Q6uhiGsyS48itXISXW4hc6YYq3WivDSy7cs6BSoL4yNYQAGaUyL_Q-WAtDamrK25QUk8391qmB6wzB5JpdmlcE83T0MccdykFE-jFNz3QNlj8ShpMLuEQHN2k1zRrOv7xEBYQPhJUy4wf78s7GaWYV5uZ00onp2e4vs3W_s_zre7q_lxiyYXXGF--GZhFzWx1-sQ0GkAhWZv-0sWD0X-OXHW1PBYQKm_X5yWNu1iBK_0f2_mOJaxoqdCSiZIf9SIB73BVyqfMk9uRntLkNChuXQlmIanr9QvFvCZE50JSH7dWfntU1RYQMp2MUNPjeth7y81I2LS3rO4Bm42GTsZRArIWm_KdrNivWK8hWBqV1abwDxw0cqiUIFvYvg5V5avIXprlO6_PTtYQFHwaqzJ64jdUPV3XcMXSeyjhinx3Cdkf_ACKI5xlFpa59urWgNC9bTca4cqHHFFtPH0AGhoajSrUMWhKMq_8OBYQJVTpYQcbUJbLRYtfDIIelrYbbymfUgfR0RXPPGGdB1qN1pMQLO3erMN615PcZccoV8a8JD8tW3lLOnq0udUkyJYQDEI6Gl7v-vKnXXpb9yZkhPDrrc5pZBPsowzedxxmRytAXL08n6b3HMnFvKK-SU6jKYySANF6nmNPzZPmV4mSfZYQN3qVPsTbR8_ekuP17bnM85lAVs0njJsSQFXZo50WrV504kjmbZH-JibIN9aOyui7bEq-tB2FoEasJ2TceaoDctYQFMtplY9KVxmNuyuV71Wfyi8Adl8xnO1QwRYGBXdaaqW8HUqr0E-KB-UVEfr2fMNwBYDx71IkrG0E7e-6rAeicdYQP4tsQBc9qP5Kyp3O_p4Ay8F4yFJ95uKqk3Ez3jjTLncEZksCd_miGzs4XcckYfEkNzND_Eu9WYaeGJfbCjq3m1YQMNAMKh9hGC9jkiYhbcTCXEGUM3SouIUAAgEUMYtXI3qqzd86W59m306bMz9euz-T85qFCC6w0Q_TqMUjPGNjdxYQHssaiMxI1gKVyo4fHdY_yA2517okpiEnF6dvgphNpwY8U2zNvWavovqdvrEJCYn1g-D9J_CY8G2uZCSURTNRjNYQCHNrvhmHfsw75LfPk7v-ki6BDBxdBavEbS3KMNkuP_3oN2PglR2W1raOrGoHfn7isv6u07nMkdBvSxkVPJzvCtYQNoBVTbwvMzNtoOkBaHfa_QAHhezI-Nqy2VIYaA3Y1d4RpBLCJS5Sx9Fpc50GXPRkVCnXYFHwNuy7mPJ8OEhMsJYQAVsAyQnUwF-EIQoZWQ-BCPk0ENL8x_O--und3fZQdE2_oSvQuRjQSvs0-Uh5WmdwvJB2EGWR3Wzn6EmnBFpXcBYQGEGzmVgJqNY_iVTx-3yupSHp7b-QbSYGR2M7P3UoOc_UG9Zq1QfyHEvmB-6pGFD_DCm97S6PrtNVuwI86fY5K9YQPhjjHOaAPKhXYADiGvr4ccIbsl1gcxXm7n9i3HyldTxhuT-ta2YSzDtzXAM5Q81YMIb0JWbWZgN90jTEYOFK2tYQNDsIFUuOvlLat6aIyAyn2g2RuBwiXJmM6F-0chBbH1Jpx2NISRukOAEy2KtjzdTtN0c72-nh-HGGcpe3ZGIfGZYQPQPfpHHp44E5f5mBeZaHSQM3E5z9e1BvCWHwXTDy6V6KMIzkSh1RF7DOjQJZnXNHnAtiX14-d8F2NmPqx4-reNYQOu3Kqhwp0QJyJDrnJVOacmI55uvbccl55s21FkxIOkrjpqSKsGejswQsE0RYMOvMLNGesAdVoJqrsE--Q0EBRVYQD3Ki3NX8VMWk6TW1i6XmExPw-qYO3s9WnMkXzMzNE6UWrGLtTawieu7aEBl6spNP6XzgSls9_EsFi7p6PdrLtdYQBdHWG5MfJYBvlzn9_oJMZwLy8mmuE7pxmUNMJMy1iCrK9-XSBzkid1H2_SzfyHARvhPhNiIe9CNa9s6v_oQ4pNYQOypVMKVu9Pkk0Bm-SkOFuRKlyVyNJFGaISEHpm3HmAevIVNBjwxhzsRBAoDNQ4z3fmLCuN8XEpZ4apD6ID9RxBYQCuyBmeqV22PCrFgn6xBJ9tGQhfm0Z3zHP67byDKKXY4IPuUcmg35hOsjjT4as3oI0uuMkF8_g-kEE7f1pPpWO5YQDz4D5T4iRxHNNJSMAT51qmBozQ4tL_GsSsrUSUQvolsDKskbiSK22Ib2TPeIS3OX83KkOOy1JEygzhtI8Ybb15YQBDT3aBTO-E-AswNdiKa1XMB022LW7IXkdpyLSd9iPbTtQf6R5ISbo13Yb9NmrBOA0WjOYahknfSECQOr_P_upxYQBlI0yMhP5ZBtzs65f0dZxlZrifnleUvyqtoO_I3lq0Fnclvn__SGc-tK3ZBn-q8dEY-RcU235yN0rPpM8SzBQlYQGb-01u3_wRprnQWkcARJ9ieLxiedS5SYLPNhoq63ALnT8OqyLXWVWSRYRUxX4UbNUzZSMSQar8gKMz5x-vPoKFYQAIUhX7koVjq6388f0JfanG6KPKsWOdpakusoKY6nw-DvRCVHeZaRdsvoRAEVcOBmoXfT0mnqlKBnJrHAu_KnxRYQMhCjw8OQGEQKDDwA1DpWJOZfRNFxor6Jd-WHvKvMQI6eFpFXh2gCpJ8UmAy0jfVtL9W8ck1mVNl5sc7zso1N7BYQJVSi9Z4X69-cG1hfrKSWMszhwgJ5CDJi7ZOv3DMyjklWieiwlhpA-ujTjzEgEy9hZIKRFothkWWZ6-EN2t1GDJYQK-eBPAHjjJEJN51_xLbXtyFIwazsDOGP6Wj6QjxOj9h-_gJAgx-xS4kznCXp-BruCxiwd4-m1Mj1dGNsjXa7N1YQBKjagOJFThjTjqYnctix8mm_PYHHSvwlZImCDcIlQqSHCG8hzxp4XBxYIH41guOlaQRjntr_VHzneITLPySmFFYQGt26PIo-gUFGVncPhiK9gqGRjdv7nVF3FuL0CH7gMgHsSdylomkiMe2WxiMMvnHMJzuyQeUrduJiYZ-6ksz-I5YQBXXb7YDZHU3cnj8r7qcfobvytK-Pq_sP2ArQfGsKsZTvKKw-P22JDStXA2Z9NCXHXKEYFxK670BzfS7aMDRixRYQDZOI0O_Me6i-nAwJuVcBbQ_RA_rqjcxFZPYmGObRvyvfRrHEGXEwdELHo_X3VqBL8l-bqJ3BnTsoIXKCjng52pYQPhJ9WOj_ejWfGjCM1CQj8rO7KYt86yZQ0HcFchH8CwSO4MuURJqxKH7a0jgNOokZbG_L1kpLZK942qLWuXJES1YQK7SPB6AsferEdHRjTkwFAgafc6z0oH3uOd_VoTQ7z45hYpfNnPhl1sFGEKYFHz-2qqfyvehTuslFrVZvl5nReRYQDAp2bKqXjGRUKv4Cn7rK8o4tb7aS7mU34P56aW73KDhVs_t0MXkNqKRoAeMZfFB9LB9hFMfgM3rbsXXxahJ1BVYQARLlaYOGGWiC5Y6G3miL4PNBsIEYB_dbyXWp7OsLOmICydHOlpOFhi12loRoeKGT-D_sGAERlhtl69h41UOhE5YQDRF9gq7HJw_zlTHXnbPVkDL4RNvvMdwzfglkMMWpLOgYK1TbGSteBMHG4aMpTNnBmk-RMKuYNY3eLqXnjblIVBYQPZnNXPbd_s8XX4hdHwzU5woO4x3HOhGCPyVLpvV82IfKjeLCHSZTdGAqs8QefBBu-o5fwE1Ef8Qae642UciGX9YQDARJ4yBSdP4DqucsihymJdpxv1C1SK1JyDtkiByefeDPNJXjsLzLuJaUpJK1RTT13P_imQTzkpvypyyOT9qr35YQPFIYqEgD9CDtGvqOOPovrrK6s1Afdzr6X4xtQJGkDfGMexIBYhdgEicaI4316IiwmaXAVbfD__-2vi1ZFtQrp9YQLdOgMVI_ilr7NZEoquH1FVEFHfTPBIve1YNGDJPo-XW2kmVLbLjVuPx9o0akG3g63mE63eQ9SmO9AHhbphilTlYQHrLVRgLE9LKh7C3biML58myh4YO90-rBbUmY8cyLsE0tfndkRiU0x7gmbWX7p6dtrpcOZENQeQgAXQXDzKPwfFYQE_xkm1fJw9pbOfDl0T3UsSkn8zyJKTybF1kXCMEq0tf56w_IbOfSH66ICIz5SSEI4QafgeJzvsOhb7NvSyaLnNYQBnqvjhcCJeniqc55qoZedK7w-Wy37gtJQxWWb9HLkj38nqM9j-yWndNTwGHQB66W_wM7har7BxoMwU5PbN5NuZYQHnNMqTThDwbVd9MnsZPsnvFnJhnTmulqspaGRaHky5G5GevYGELC-t1A-qFobVUhsMUHrbH2Er_chXdoykNf9lYQFEiWVZlfvEqSuJI71cTDAPLwWNxDLErQEfIQawWdII2wPJNYpQRhpaNnp0JTuVhGEhomRK6oJtGMYfqGvC-tYZYQIeMU-PELtXb6ddLeGw-X271PRNnYuUZAG-PUheJ3hM9jBOoW52-2fHQPvLvfkhBLgUwRCZsmnzHMBoRoJf6QkJYQLeua5kPkyhVcWsy_3tpXW-Pz93dF4k23-huTiWGzepg35Kqn1eyvg-XdoA0z6wM2Lzmvj178o1xu1SPjcxN3bVYQKQu8ZngGgRGvK7GeiD81S39LkE5boMjYdYLwt7lVB7_JXLzVuEpRoVTpMwlmCYZrvgowpPauCegB0quH7m3T0NYQPPW-TMXWLxFsE4BkpR8y8sgbyveJcexW52U9gNR8hYFrZeHAMnR8pILSgnj4xzigwemGym7pERZN3uXJeFZSO1YQJ67Lw063mDWxb8IjuTOOX_sWzHg0EDXKpnmNI10mSTSKtZs_G0v45OYw_V8pYQc9QHXXNijg3QINWLI-RL7qh9YQEHgIKThFH7jdoWCc7R2VpN__lk8nkP9vqR-kaA5t9bpUvDW8enBOwZnxIAoNtHYyq2K8iaNfl4QJckNql9LcmhYQDgGoJuSRCfV9LcueGkXmT2zSJIpT_ej7_eX6zn77XIrXI0utCHNmDroWEGbP6imrnB4ny_SRhZY0zZlMAPE1AlYQPT6dzbocHzGtjyyDI-GR1w3CiTin9o0AZPdtxvjI_8-Nk7RX9YrstC3ZP7nCJT0KT58QSyXAcXOx1S9mnfinRxYQJbjUFlL1p90AussfUHBxYRUdWH4LF15vmIeN_v2P-28WlI44ZIFP4tVpKZm8RoYZsC350qKyOm5FQZGpRmLDSlYQFBvvTLkcc9DTFBFKq5YuYBCHzR6qDKENXXRrPvOWS3rpPow77HrNqyP7EzGJouWj3dr9gp1JU618f1jaMs4vUNYQDPOwjV1S0_dL0IgbS5be1aSB4g6N2vCZGTQuuaaTkV11KRl_NQWnZCuDPn2FMN2hPbKfxdyqu8enOs9wI0b9WJYQH5zPfXCa1nI--tWO2_jYjtEz7s-yN29eLjJQL9rF9BD0_5lfYHaOp6S34ONpjPCg7iWkVtkH6Tfmq0LaMEyLOtYQP5bpyNZhbNntHOWHkMgc-yjah4LkXDvESpKYBc9jfmyl5vEo3BvMaa8RTyAqMCHksSv2mv_ZfCpXWWW-i-mwnWCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};