import { BillOfExchangeW3C } from "./types";

export const BillOfEcxhangeSampleW3C: BillOfExchangeW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/bill-of-exchange.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "BillOfExchange",
    documentId: "BOE-ID-SG-2026-001",
    shipmentId: "SHP-ID-SG-887766",
    contractNumber: "CTR-EXP-2026-042",
    issueDate: "2026-05-07",
    paymentDueDate: "2026-08-05",
    payee: {
      name: "Bali Artisan Trading PT",
      addressLine: "Jl. Legian No. 100",
      city: "Denpasar",
      country: "Indonesia",
      email: "finance@baliartisan.id"
    },
    issuer: {
      name: "Bali Artisan Trading PT",
      addressLine: "Jl. Legian No. 100",
      city: "Denpasar",
      country: "Indonesia",
      email: "finance@baliartisan.id"
    },
    drawee: {
      name: "Global Imports SG Pte Ltd",
      addressLine: "10 Bayfront Avenue",
      city: "Singapore",
      country: "Singapore",
      email: "payables@globalimports.sg"
    },
    guarantor: {
      name: "DBS Bank Ltd",
      addressLine: "12 Marina Boulevard, Marina Bay Financial Centre",
      city: "Singapore",
      country: "Singapore",
      email: "tradefinance@dbs.com.sg"
    },
    placeOfIssue: "Denpasar, Indonesia",
    paymentTerm: "90 Days After Sight",
    monetaryAmount: 150000,
    currencyCode: "USD"
  },
  validUntil: "2026-08-07T06:06:04.718Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "BILL_OF_EXCHANGE"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "1e8d776d90fb81fa531da42267dc7fef52be4efce73d8ee3b1cddea56f210d25"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-07T06:06:09.136Z",
  id: "urn:uuid:019e010b-28f8-733b-9baa-d8524f33626b",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-07T06:06:09Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAxxlkEnapvmJ5feymFJ-1z1sQcXRFhhGEOkgGlM80d4qq4djakTcIpCrK72NaJzxfhTswAKBJj9dIj6pRRgoGwFgjgCQCGCYVYPax_BmGcHL4BJ8gsglfGiFcYvlGvQ2Cbv-5FFBYIKOi3FffXigIdir-9YAbtbDuYe7McnEFaGGcIvdmFACnmC5YQII1f_GWNi1QK0GL7ib8F52slKZF14VywzMK-ugSdi1b4JCQbOYEam3Y-ES1v4UUALoIv7M9jUUW2WwIj_7biFFYQIAB7FvNmyn8n2TNMpXFn_GonyhTirc9x7azYVMMBhkpnajfAt4S-SUepsSuLhU9PKrMYnOxJ1X6f-Dp0Xam4e1YQAtt_063gvQfzOtHs-csOFb_s2FkrGcfSOawn4Z3G7YahcBvzmE7qtFV-woyGucF5aMDZ58bEAeci_EtDVPVxspYQIUIfI367s733sTz032WFzwPxB6hirjk4MMuM05GfzLFf9JRuwD8u8tsg_wPqy_hHmLoBAvH_aobDFyGXBVrJIZYQNXkD7-9cKzLeXp2GK7CbGppfiF8W9Wau4JU3sKrU1lIqrgGIi-Am-ryHAJdCttxWkBjfqW6fkQnh_AjyfFEIKpYQBZPROFOzlFw7rFwsQqYPS4Q4GkTQJ0NazugSVhTAojaT5FaqHLNwpGcJVerYLn8k31iX3aRY35nyE7-V_SXLGxYQG1KV49RdsTzgaslA_hgtbso8SkINJFZ90j90X2SIGyx4ih9bR3w5JEfIggOWKbpDyBNaxTcfQ-eCPUOSXw9MHpYQKuA2DrlBJyoa-IbyWltMBeVuyY_mTyGEi7dZ8riHBZjyAP9PYzW0jbx5WXO09jLUSnaUGKRdTYAbvlNb12bIVVYQLcgLfW7jzZLhkGwtcJAqhamYy8nBVPrez4ofV5HiO4CVPNRivaxu2t7_K2fYxhOWT6M1crQ5ipoecvnbXVrW0lYQKNDzxwEta7Br6cJVg946hMAtu2MoQ-VddHjatpgC0u5lahy0mHvy5Spq8Xr_RYyLTqMzi5J0vERWnDXy5X13_tYQIG_vHvXwwppnSlVO7QvYc6TuLrNyZg45H5k7nOKWebEBsQ1A9Isk7cxo4iCPSNimfByR-M8lLbk8HvEdJ5bmsNYQGEeU3AcBcUX_M5xGaOOIxuZV_onugEA2emDEsCugT2ejcdnApF1LKg_-IA6ad5fs3Z3v6CSy9rPJ6Tcfsb0SLNYQEL8eVZfabw8FQm9b3GOWLPDBtrQXea50eYauz2uhasNxEXXnEIuJFWbvR3pG1PMHpbMvKz5Pxh7tBONPfnexM9YQLFXLntqchAsaym0mZHF7quSB6BCnSgiOSErqfOWFqgm2HjR7mwVJqXbsT98ixumzjTbLi097-F-H37fv7JPKx5YQNS9CJdExnxPrV0LoC6kLTyUovs0S1YuM2zr3sHFOpRSxyYlXwfZPYKNro3q2CkoGIZ7Ts-Yj7HLq6bh6ZXPDNRYQGKDKHnJGVxe_YDJB-Z-1LLphoOOqURseIlbcHiLZUJTV0xOVhoYgpFwh7iYNNMs7J3KOGqf6Iy2Xu7wJVYcpp9YQNCr618FOONeEvQsaa9LoaJxA97aq41k3jSQmF1og1fK33__poq79u1CIkovh4mSZYNMu-3XqQn6SrY5CTvc2K9YQDdzwQ5bJ8qaO9vXEXNQG9Lughm8Gwtz3paR7vxD3XNjrCIk6z4tIoUFvbyVL2cBoUix6rn3DT9hYADtG64JtedYQO_MnRXhMtjUsjifJdsDeKqAY2rOCg6oBP9-313xo_d0S_f_GB0OCAdgw6Lne7KFwtyKTUS-n-kmUUS6z6pSxhdYQPLrnZmmsLkUADrZ0FcPFp64CHhfc4GHr-V7hBVXXs7J562E9rXFL6oT-EJKK-Tksa1PN7cyqQPK8mbRuSP__IhYQD9yV8fKlwKsKmXs2c0SPzMYmzqLjZ23nCtUBEJ0c-jY5tWU9qpWTeLiU3RgWgPiFPFOT6PFaPxx6dbgbq5xq0VYQDNqCNoE8ExI6myFYwdySu0U1xLpRPjYIt2xQtikmlZAqMuv9FEKiXmjX_AdSNwyHaikJ_IuhOR8qzcih_FjH8pYQJCGYQ-G6USzKTvgTrmoe_q8JO5vdU6FEP8A3y4xKYWVfHF0mnix_2ByEi-cvw-2sPGahRQGgL6wRLyHu0Wh6WtYQLYfwMpQNVXF3MvFmJKEaKc9EROfIwIsPlMB34cqcMDKuNBV5r8az2k-uugrkkCuxYlWKcBWW4MrPflak-0TrF9YQJIRlDgTS9ehrs6vGvTTvC670aIUu2AXmCUS43n-ifdNZ5vm5I0luhBEl3-18Ga1KcWNQ-NNdGuiypkhUoR1X_9YQE7sWZ1ZwU6dpps1XWmMY0CTZgEIDr3esr-tvZJoalYvtTo8kqudKOSa5M850Y4iEh-SgCEWP1yDl2K51gvT7qBYQIzkGLwEOqOwrPNB-S3OFT_lI-BJFvHbIYhOn3CacXtdjPjsvoT8kXC81T6_I7njn6_i1izTobastTgNmUKqd3FYQD_ZZVChGTD1ioi4CyVKh5Aki9sq2EXp4bL3yutAsiJck1zWImYLz0bDOjDbLFfP8GEtiu63b9ZZy0CoVQkgestYQKIFtgyvhPZ48GeXPYttS0DBAXeKu4kg_ELBoiyT01geDa_IXbKMvlz9t_KuA1ViqbE8NRBHzhfkmO7FH_mOkPBYQMn0ke_7tvwSQYxE4zSWvuUR4M4NUG_LI-GhiAl4arV86g1D6SiqB_QSR3f6JXPTfaMJXAQpezSvZZTHwTMdhAtYQNFvzjMwe674bjH1hXJmH_zMWiueZlS7EpuVSquFSwJooPBiOdw-eyX8RJjhZoMSo73uIKNQ2MuuOeelHpyfnSRYQG2Te-hDZnTYHFfjxGq-lD7kum8QLnLNEzfRBRKCBcaiKZPQSiilrLdGHH3XMXUkeJgxZSk2GfmZ_M66cUM_LmVYQIS3aZwaX801h0MxHiHEpQia9AUpBsc7Iwt4cBZXOd6v_KCxM56izoOIN_CABjmew_KW3qvyRRaCnJQJt6KqTWxYQGs3nLJQ6VlPb3QndI3YEi96nEwRHaKPL9e3fEOd4ZQ_3VOFCLxn_Dz1UfB_Hy7t0wGAnFszQt-vOqm5TgIVhO5YQPu9xcdl5_Id7ZMh6T8zlXIIGF4PXGmxhCaIT_8fq8oyiJJL2kWsKRKLvbxc2JbuphXVZhHSVCEj_UehNh4xs-NYQDX-HoZDHpFjYsmNYB8o0aU1E7jfIMtzzBFuLIDX1IlSgjq6btnqnU16n_tNsdedPlHaOYVzlFpCVSX17OrLO1pYQIw-_JMDSVdgIixG1oO_T0aelWLQ1kEk1_lhlQb58-FsfHMuGAGzeFedgHh8K4sfbGhr4MUjKvcm1eAgDWggGG1YQBHdYVL4TOvE_IJzfnR2iGVDLDslrFyhITiKZt5boe6DAjwaNBVbRRqYsm49ZwNz5gMwtu3MlMLeqezuIoWM9rVYQA7kClN-CRWdtx791PI0LSwxCLBf6405p94-QmkvvQFdWn34Qmd9rGVa62SB9jMvId7S5tVMaK4IRvhihqI8XopYQJxQ0BnU9r_0kn-tI5imwZIp_tqBXza-su6te8zwQWIRKrKiYfm7O5Ys91UI-YpE1W4k9d0qYIbC0N3AtCAuURhYQGPSv4i-tHNDkqUHmI7lg2Sq1iUDYutZ1EvTuwlQdEthvhUZyJw7-3tukEdinTY6bSGXexVyML73t8ApgJ_ZvZpYQHkWcE9TDyNeYaSOQbzFPnYavH-0k1If_ylmjHMD2N3m03KhIo_FWaxwvnCyMdNP39SSEH6M2DyEGw1FsjPco3xYQCQFUYSjoRzFKpOnJ3A9_NyacNMZuKpHce3FCjolr5Yzle7h8ItBUYdHKuURbtlbtqMApt2ZbILSW9HZJ1oNrpJYQBWGC0BNMea-m-73-kWYF7vmcBzD-eFizxxbRpqf7d_oyK8g4qm7YItQmeKXYZlkzZpnMbXtJlPDLtgJhi0c9QJYQO86VV24aYWXEqpyHQNbIOaIqyjrmFboNBzKMNVSCYk5EQSR7gLY1OOPXajhYu2AshIZtRSFcosYDsHJf-4Y185YQBBcgvHTCrtLb1Wxzo9k_hc1vEHdujMo94-ZDLVFHGaeRBpUQ2UEL0oB-P4iUqPlG_S2gLxFJDNYXMbTeGP-6i2CZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};