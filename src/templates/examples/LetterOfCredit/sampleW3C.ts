import { LetterOfCreditW3C } from "./types";

export const LetterOfCreditSampleW3C: LetterOfCreditW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/letter-of-credit.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "LetterOfCredit",
    lcNumber: "LC-2024-001",
    lcType: "Irrevocable",
    formOfDocumentaryCredit: "Irrevocable Documentary Credit",
    dateOfIssue: "2024-03-15",
    dateOfExpiry: "2024-09-15",
    placeOfExpiry: "London, UK",
    applicableRules: "UCP 600",
    issuingBank: {
      bankName: "Chase Bank NA",
      swiftBic: "CHASUS33",
      branchName: "New York Branch",
      address: {
        streetAddress: "270 Park Avenue",
        city: "New York",
        stateProvince: "NY",
        postalCode: "10017",
        countryCode: "US"
      },
      contactPerson: {
        name: "Michael Johnson",
        phone: "+1 212 555 0100",
        email: "lc.dept@chase.com"
      }
    },
    advisingBank: {
      bankName: "Barclays Bank PLC",
      swiftCode: "BARCGB22",
      branchName: "London Branch"
    },
    applicant: {
      name: "American Importers Inc.",
      accountNumber: "1234567890",
      registrationNumber: "US-DE-987654",
      leiCode: "54930098765432109876",
      address: {
        streetAddress: "500 Import Blvd",
        city: "New York",
        stateProvince: "NY",
        postalCode: "10001",
        countryCode: "US"
      },
      contactPerson: {
        name: "Jane Doe",
        phone: "+1 212 555 0199",
        email: "accounts@americanimporters.com"
      }
    },
    beneficiary: {
      name: "Global Exports Ltd",
      accountNumber: "87654321",
      registrationNumber: "UK-CO-123456",
      leiCode: "54930012345678901234",
      address: {
        streetAddress: "10 Export Drive, Canary Wharf",
        city: "London",
        postalCode: "E14 5AB",
        countryCode: "GB"
      },
      contactPerson: {
        name: "John Smith",
        phone: "+44 20 7123 4567",
        email: "finance@globalexports.co.uk"
      }
    },
    creditAmount: {
      currencyCode: "USD",
      amountValue: 100000,
      amountInWords: "One Hundred Thousand United States Dollars Only",
      tolerance: {
        positivePercentage: 5,
        negativePercentage: 5
      }
    },
    availableWith: "Any Bank",
    availableBy: "Negotiation",
    partialShipments: "Allowed",
    transshipment: "Allowed",
    shipmentDetails: {
      portOfLoading: "Shanghai, China",
      portOfDischarge: "New York, USA",
      placeOfFinalDestination: "New York, USA",
      latestDateOfShipment: "2024-08-15",
      incotermCode: "FOB",
      incotermLocation: "Shanghai"
    },
    goodsDescription: {
      descriptionOfGoods: "Consumer Electronics - LED TVs, 55 inch, Model XYZ-2024",
      hsCode: "8528.72",
      quantity: "500 units",
      countryOfOrigin: "CN"
    },
    documentsRequired: [
      {
        documentType: "Bill of Lading",
        documentDescription: "Full set of clean on board ocean bills of lading",
        numberOfOriginals: 3,
        numberOfCopies: 2,
        specificRequirements: "Made out to order and blank endorsed"
      },
      {
        documentType: "Commercial Invoice",
        documentDescription: "Signed commercial invoice in triplicate",
        numberOfOriginals: 1,
        numberOfCopies: 2,
        specificRequirements: "Showing LC number"
      }
    ],
    periodForPresentation: {
      days: 21,
      afterEvent: "Date of Shipment"
    },
    transferable: false,
    chargesInstructions: {
      chargesOutsideIssuingBank: "For Beneficiary Account",
      chargesOfIssuingBank: "For Applicant Account"
    },
    status: "Active"
  },
  validUntil: "2026-04-28T05:44:18.855Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "LETTER_OF_CREDIT"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "dca7047e2218ad79b47adc7c4975e39a6a1677f8cb0651f9da21835a108e7598"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-28T04:44:19.638Z",
  id: "urn:uuid:019c02ea-ab3a-7ccb-bf88-92fafff57f23",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-28T04:44:19Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAlPudo2XuL7aJFDuCBUjXMB2fOi2rlGxRwi2dh3_r7qnqBXSaGDRFJFQXilpwni2ZLoPxvd07EBHslFPh19KzTVgjgCQDgfKQqirIPGBdeA4tn3MoJbxlCcCocBRW8w5KJ72Zz8VYILEAfuWv7hwxISpFdsjXX5zIf04oNVz6A8TfiC66iTbhmG9YQOIceOR5bZ8kkqDx3hbymPT_lWOcTOcAEhG_aE1MIWC8tRcIjyrYtX5LJEWiTcVfI-YkvXbpW9um2aPNjGC0c1RYQOpb0--iAUUSEYPxW93M31HHMOw-vAfAqvBKoxSYg3yW4_SlkpBvJJLImo_4UfF5nE9JGst5kuEDNI9_oWhJqhVYQGMQJOoB57hmyEx6aYqk1DK-KzoEnON7CoirKXvN5KYqhSVOS0h-3M7WeBWXlJBrrJPgDRfOpX_b2pk52OGE1YtYQO9_-HjI6-T6Gv_u7V7sEqGb-3deJB4IdqouDRfWws9N2UpcOHyXdUwoYt8HNZ6pbm00nTCSgAX-Msu76cqDxwpYQIEl_8QUQq_cdCjtvzAQy8lQ8jEA-0LomIckfvI3a7oCYacHj_aenhTlTBQNKRDAdf3YbrMJC8IKIJvqyk1bXORYQKg8IJiRNGjdO74zFHVAqXdtTSvsquRDEGJv4MIkIy-9Ueda13-FRJ7e8XpA2xPKMozdZteTKIlH1sKWKbpCIZ1YQOfNQLHgO-xXmht9lx0ifTkP-8iJZ72URSzC3cB584U_MRbERM8wSiEHIc3QAAQEzG4UvIWQGfMSaprY_C6Cv5NYQPALslfyV0WKFEwjVPBD7caPX6R6ZS3SJxGnPVcc9VjEhJYCcjFK9f62mQ6Um57-FOW5t1Shf6DOoG8bRC9XvZJYQDcCJG-yurgEaw35YZsUaXsGmd8MSy6vshwzjRx17YenajHHb37D48NJ4CLqkWmsum8WZn9R449iO0G_PZaj7H1YQPq73MAjegHV0AUMNsTo0xGq4MVFwFAFKNobGdZxtCckF-IfcXFys-YhskJkxwLoQDbGLF2ABrVmiFB24mWwhexYQMN7Bx6cif5hRQ-TiCHfHX4bPo0dbaLYk_nehiowZeq20XGJIPk5i-0W4IDngSoJ1i-jT3LJkIjOnEQg5dz3DJZYQLXlyBB-dC86YMQisEr5SDjO8teW8zOP5mPBZ1dmF9_Gsb7bRh3Mq1USnGXBs2mr86wCQ-XuCBZg2vfJuPBnC6FYQPH_z5WEVxuzJsJJ9hv9mIVfyYX_elKAjDjrEwg92XTJrEkvw61D_yjNFZkCnYKS39KefvCvDjBh8SDiPSqatxRYQAbZKw69GjB-g4h9zXGIEGc8cVwR_hJSwHuKv4K6wZB1V0Gu_RQA0BHkN9z-M8BbPa5h6vvcvA3v0PN1y3Ys43hYQFX2_kE6Er5tHfZvUzgbr_A2RRdBOWuULwLYIt8s7zQ-X8bGQEFKZKYYJD9-P48KNVfsyAVF2-lNeUnVZ6q_-MpYQHJDw4Vzdz17Zic5T-Rt28lSQ1DPrdIdFLXyfHRP8MHnOs5mgw0MztLPjaI-LL9nN6DkTlknx6A8tHju9lb62s1YQCtTQT8VcB1MBbRFt_uKPOFUbnU3HC6HeSrvqTB0LX5BY5QzeI26b1SAE36gghvrvsw_ZjgGqztwTXNUrBOVRRBYQBDPvF9tZ56gpI6pWJGiqe4EgtHWvK4LYtAikEZBlGCGndaCjjxyY_ymWCJQv93kvK2h4ctLso-3BJbAkcnZq6FYQDmJcwpuHnJ_Y6rtz1bwSbjVvsGCSNzDsuD5PtxaFep0ICg0_T5IemxjkNj-9SNffXfSnvYn9_SE2O3bdWpXbnhYQOY7UCKIQ33PWzKIrlZ25EOI-edXjg7VDNZ5O_prrjmNp8XuQRRnQBdKjhFNVZ06FsHPuBbtH6nv3Cw1xUR_8nhYQE3aeOgIMSi65mqvZM89gqpNHRfVxZqcsfP28UVKH1uSJVpEKhka6t-3gOJuRdmCA8cSaO-i5C5FuM8bXlFAzUdYQCen3ReFSrR9oCVUJuYimj7npWQiOt_KclwUSGYIk8tUT1bdeABEHNYft3B4Rvt_swu_RTbS1U3KSa4CraCtUiFYQONiOYjsttpFOr4reK7K3hmf5oA_6y3XtwW1ufK-vdhJlCEp1B0YrUVL9kHHTpi3GertlNrQ8qyo5H9XCJRMaVtYQM6RDaqfuPL4cbvZ-Crhu_t8fyyXNp5eNkn3hZlSZlnYFG7BjNhiAHLnuWOgOA-Tcc05NBuc4Kb7emR5hMIW6C5YQGdFbKDULFg5F3HTgZz_RHejwCUjcxfFduSl_GDklXgsm33ScVkPmyh1XKBMbjpjLoUOFtNOpXhyuRm7EhaByR5YQHS3l82TP4BWZBm2r6THvxPR8uluJswRnYFuhjBAko5Vhbl17uFubC0ZdjnhQldyBEkdz_FemX0jSRYGLbnuvehYQMML68ECQZD11IyKSS2Eh74DcBKmjxOcb4_yxkDS9riRNXqtw_h993wi1jqRpRqDekF-BLYnvp9l8AN02Xc4G6RYQKFRZabDTzk6vWiVHI2eENvOn3tYiHVqsr16bj94ENTQxjpVIb8FgG8m64V55WS07O2X_yMZ1HadRix4xkHBdYBYQISVP2_w2sr1nAB6k8vf4IwRD9AmuVD09C4x-b31bbfMLLzswZ8QyktdQqeOqU9pRgaNK1mgHaWcJxJs-inS1xpYQFtMofdmSGDwZbL9UvXt7ZpxDVPlLYXg_Qxl05q1WkQ7U48G94kxN9dO4ZwOmPtxtn0YahzVsohpAVNEyrrw_AFYQPfpjHWunc00lqLJM8g3GNEBfkzOH7GsW6khYPLr_bdhwkcVY53T2iZ2ctTfBn2cFLx4_Nq7BNSxz7j3UNvNOyxYQOYjW2hkcD31pVeWAWJywHydc-PLRvdGacawLatFNH6N6ftq9pd-D_NolGbnnbZN1Q60p7Qq43EEMVwB9bcUzLJYQDdWqpbnYlbbJMdkH-wWsCJ3tYehc3POVGSXmZY5heYeafqUq2g4Wx9CeqCZurT3Y7EWJRF3Pns5cxkjv8LslKNYQAHTqswm_9MS1RQg0sVnwZH1tGTvjDQoXi41LT8-8wk4MwHV0N8Ous5jy4_rkKgE-3mb6banQ_qkSPcqVmqpvb5YQL6OvCG7rSrtUqWDzHcbaJOY1RCk_lI77v7IPV6iKBlBOIbZrsaisn-YNzNdurWMHnMzx_GNOqewkDFCvBKGh3tYQG7r_i3sxAZmBVwCA0gpV1C3VD6-wvqxoDMh_Jo-O3fuiwnvydZCLNC6c0oG56McwcibITV3VBgJrrCT_a4IDoJYQO5djUQXeiWcPteiWCBrMAmnJSmBYxBgIrXkG8K1rG45wGXHZhjumTi0EbceY7h_0CKAQUuglu26XY8RKLHQRQNYQO4qVPaeZxsX7Tz0iwiU3lSfo1olHL3aX2q8bqh61UBTEqPu5hKTwMAayfwMnzs7THxNLhASFkpc5gUqpLX0z_xYQOvN7sen74a00Pd-IkYQ_07-po4nnt3VqQ8UyHK-5UJk9WNg1Le83zwrZWYOxe_k-UW2Uv66nXPuPhB0PXlN1ehYQNxz6IJmrOvnMJU1_StV1kXYLX4z7y8KD6N3EpSIIHMzKe4nAplUisjNMT9HXy_1zYN7RUDpR_juAdCJ1BVvKmRYQKwPCOmTp_BRtTYz5xGQYgUvbpHaTyhTOIBDJj-S1Wyc35mZK6b_sIw20VyBMm6mZBXgniYsU22idSz_N_fhtG5YQJnuOYpSq0qurztPcunfwhGV0VdxBwXSKF3DFl3bKYcGeqkRow0F0gnQo0N0IQQg_e4-8CR4bMBaA9EXD6qnPVVYQOmRCj8ejN9gZ6kIxs6KayJFY3EmRSqzpqzF7wtIGCjVvYuDXnr5dEhtiMf3pAQWb_tw44VPk1tQZe78N5WmTStYQE9_X8ePi0pHkbWorDloMkDGHeo9u-JFg_k-OZlJsD4KFXRVjmJMBrSeeMpwe9DKq678P2qoDusKwefwzWWUAVZYQMSuKo12yVKfhnPlvtvyRIOP6tXo9RuFpA78ANq2YGjG2P8kk183krv7wLo1ekX5yl5q26VUXLeygP5B0A90hjJYQAejMEX29tzZTme3YdgAwaxlMNtvGidgZFjMtreS3tGLqBFwYeWUqzbcyQHH7OidRFnD0BUeo-FzpEQKYrc3sXtYQBVzcQeH8Jty0J3Mq2Q4xr7jWM4Ow3atW5RmsvI0aNZIkz9d0MvaMrQmuTS6bkijhxZXhGp-rg_enL4Q3zHgtThYQIt508bpCIapPnkTKjU0Wj7bTHCzT_f_YK62pz6jgjNFK8iWulIgJf1OpZBM5a1gq9julLMsHXnwHkcrwRZuEAtYQIWBhFQq7RBvrBENBgRNXWve8s1D_9HUXcUEDVlWHhzcOZaW2nr9fubLqAALkmZHkZ5hKJnHq7BnFHiKluoIrEtYQGsqj73USJT_72lPxbeqJxKmh6xtZhdw3CXf1KFHuEYvX7vhDsQpXNjGxv_UaDiCZl3oa8-bToFmRhiAGeNzJ-NYQPZeRzy14M9QMBnG187kLrKJs1rMTVWt9opaUMvU48D5oXXVn7txTtoRc_s1zr5ZAZCu0Eycyn5DFguTIbhtpGhYQDp67i6T5UE_e3XDIXsjFKBJ2gu2Gcf8pg9WO10Y9FqAtx2QqV3aiNJMnn1GiOndrHBmDVNm6k_PHe8bSuHj5i1YQMArxjKR1jFQfS_0D7nDirkrAozJBKoZhgz1I6ZqRD4KkMdoRPts0nnxwB5JKzV3Ixgl5aGkJVbv0gqbJLS6BNFYQAswkp1MPL1ohtIIZBFeSTDfJ_76AjyMxnOFyfsrKbYxgK8OobsXTPXLy2iaF4zEeMyEh1mlGc5TTQiLjthNoeNYQNlnQ_BR_cEaIIWDRHbNp4OmcPwDwnxkKHO-zUOewKCQVfXdhMeNEiBCSRniCbYHGhHBjcUG7CSJ1cL9KyIFfE9YQEq89ZKTqfldDbbMQyfsxLJ-zEYlkJB1rqVgj3lLNZIA48zvXp80OgsNSi6vxAH1futeeQ_JyaNq4tpEyvq5EXZYQMO4hM1Jsdfm95BuhcqflZlzLYiDikjsMa80z6upvdCv1lk_upY-OIYE_JcUxxNGxgL13PiM3ogGRHhRm1BfwnJYQGIGIJFCyAZhzTRGFaKrg1l7StavV-daofzlNBXQx-Zx-YH2Pk0zvKpKHw2Tklx2wQRcgzjRDaLv2nHLW3VRf6hYQArufqX8sM9ErVd7XVxzMSY2-mg8RVGSDijLZcTcNK695Z32crm3AaDIGDEfUR3GnNQ6Q-AoYgBG9OfPjgBL-hxYQPYuu5g0T5xGArx97myKSkuBLDePZ2475by-HSV89bPL1X-R_Lqx9YLd0pIpQmV2bRXq-lfey3EGb2DOSMNIRx9YQMFdQrlyxFjZRYvckjFHmQi-fUt6b7lzTWITXKv0vRXoJicMMhr9PUpIHunVE1Ec6tGshF6arBueMB_fccn5aCZYQFJu4sv0Os0PfgthlajnaNCh_k3dE-iK4q9Ue-61f2-fMBXq-Fsa9DW2CC-4w9t17lE4YYx_nTuaybE2EugmgNFYQDXmceYqkKLHjMy8hB4kkoVSSUsZvdKoKmzGxn3bYiKQvy4qfIaCcCF6raXDLOlpteaCDm0ut6u8ImH9Ewt8QZBYQFD_LD8c7kDbRyvGnGfe8Tw5V8mcd0q7CL0UW3MBLeujM86IGM5_H-sXQO3n_LHW5ZlEqA9F6SN5TysoWr6YRd5YQNSo91L1uEGdUIX8_ll_JEbjFTbilpbLGA2VscsQOAhe-PjTThahm-tVUHn4_gZis8ELbR6zjx5l9c7v1zko6_hYQNE0vovHeL-mgqNnn02bI6E23cNJlya8HjsSDjTKmAcWRrNrbx7L6bTPkSJiEbNbW7O9edUhFXKDxtcVGG8fYQxYQFDGU1wgb6VKo2HyBtWggXm6cfH8kzHkzxZ8sVZWQqoFTOovFWwYHKDRoQ1dOzslky_ghUlvdnQu7Yx0vQTRpkhYQAO_jRfbk_LbIoU6969XsA6lGya7NMevrp58Acj72EulkBEkHRci9EgHaDO-iWH3ObyORvn8OLSwr922Mk4XkyhYQKNmGhICLyiNMAVEn8TyIWTiYp9qLJsHYzDZ1nsGw8xGkumHhDDB-WMZfrNJ-MOQe0Xb1Z--l-qJo495toQISSdYQNUHmzPfYvV1708PyTPoUyEBmgetk0lrJDjl-3maLVz8UI6joilaPBWqOWnEkbHqWPbz8bdTkjMd3mkI6rZ7zPNYQBDhzXggpJInz9369VKYDpc2Wcr54exxtScM6tylxPg_lSX9uAqECvdrvtRSIqPBz_-xRw1O3Fdl76dJ1pqcv_RYQCs2_jMH0OgtmOCyCG5-Kf23mZXUKOPL_BXp1C_1uLvnlT5XzTJ_86SHztYyTgXiebU5RhkQhE3FuHTbEFMCRkxYQMLPxCy7dG1n67bvsqaWUUm8F_mUCdZBLJBPZQdmKumYQ4jCrB1wOU3UeS-V4uog29me2bbCbT4jQkWxKBZ3j3tYQOi5gBnKSvSKWnkqgBbNbKqAsGlsfy6jY8J8uANZdlhjth8uvBbxWotfgE-QGUwhUMXefxGatPpigkHbOn6Gfv9YQPiuGkhYXA4JTJ4hmQ3lX_UHTMFou0z6TpynnYX-wpi2cQMWz6d1-a8HRsA5aKACIpycp63-NLjRYqtUkm5txXZYQMplg5eCwEI-du6j3JzmuFSKede_3vHOkZWJK1R5knXy7IJZk05A4ygvugqHTV1smP2hbTf2VT7hlyFjGwZzr6JYQIofGaOh_phiyG43nS0XENN1PulbdhwlfDlIjdmV14_AtzMlcTb4fLiliKQQt5qlQpZUaz3WgnUGnatOnylZfSNYQIcMQES5Rjy-LsYmyV6wO2CsNz4KETutdwoEL3kO57VYm_dJnoYVcHGLi7VIhhPm-NEZ_LKL54De8y07INJZh39YQMSKfrmn8ON-_jS7bm6vMPP6MX40X-qR-6wo0Lnobg4-ZfuKg4xPDEoO63bnTGmvJhpYtJBUyy36f6mzUQW5U4FYQICPUrSpo_BAWyu1h1Yp8HAC07ZbjcSnTyoTrb_IPkGcdEaNT6PD8RRwj6KMrWFlG37WvHJ-ZAe1ZMKzyy_Jn3BYQJYDqB1IO-75PUsDHyabNF-E27bOorVFQR3v2NPx7vSz_HMOXgxAd3BvCm1Hk8AhAS1HegCUR08vExtxe-kN2TxYQPqz2wgKoh5RWNRigBhkSs6AWMrF5Z8jNsQyfBWQRDklDWRBtDcaiouHYLIGgVRQwZAX-Dm3VD-kGonlYdDWYJtYQLs4EoTKpgjr4xALBAkPQXlymqP72t6TQwKDjRkqyD1yVZn1MW63guMWA7CCD2M7fzf6rSGNzMto_ECn6qCDJQdYQATgdtKC1oQW36o2-p2vAMQ6Sir_KmvwEvIT4WZWc2zJl1BdIzrJ5t08GWZiUZRE7EGFk6D03HRJ_zCuDtuRCOpYQCfJYAWuDFLiuyvZXPTajQYtIRpRaW-lwPHJNeKZjIVGENSgJIMNJgx1kOcBSCd49-o_uEhWi9aznwIyIPxnf71YQL3_LScXqnEE0fmVLmSyi9au-cfrkNyy-i7_CNSCIH6wbSky3yvY1c7W7BvBy6DwyoJ_EZVJR7sVmhX62ethKPFYQN1D7zCHgPiIqh85BdzfqphO0BdMN4jgSqrBUyPxc6Gxf23dTP4Qq4Tu-ntE51rSKZ6W6vy5lWFghhj0F8bUOUhYQJBiYOYURM_4sbhAHHrzKm3hYH0UFEurSO3kD0bMOSqpJnOJFMJJK5UvvGkxWdIpkU_pX5sS03KyiLCKdKzPGUhYQAVyor0dRX_ew3hBfiTAED6HDtl621XBTe0g4nj6PNiCNcxztz2EwNuSB3FRWBIf0Um4VvSjA5_fAp9GGs2hMXRYQBdm6x8WlMkgCjZgavIgZRbV093_aehVYg9Xr_ae2Me6qit3tNFUuOqg43RBqehPF5QE94xpyBPHdcaGkF5cCE9YQDlt__QtsW-1if96b4K8Z014GJwDLIO8fnjErFOdpdIcZOY7n8ZlwdG5oCvwqQiGYvmd9aYowuuBLTknAYTTE0lYQN2r7txA6ynR0J03BhdRJ5O01pzTAIUBSXTZcu-2EwyrqygtugLrtWxrv1XfHR5QYy3obghaZY0kt-9MC7_-kftYQGTxTrxrO9Qz1WtCbEom1wDhQGniZsLbomuD9N7t-VVCerF85fA6hfORqP8qjNSDTRtBUb_mAsDfGaxZ5yvXnoFYQLeWJAVqy35hfHrVMgr1t7111QUawBhVUv5mmIVRcA09IccAZqKvkisx0SsCfzfbwaPiSZmAWvvcadYWmxIpo5dYQN94qIn5EMa9fC1jSDxZK6vhj7YB4BM_0ULVN3aoXHdCSEeIxYVZ647w6c1X44JU2c4O3GcyRrWaD-MlxwCNSv1YQCUzXFiKP1bGta98-QwaiuAq2o7gEcbupZb0OVcqmqcxtkS3AXDxYbK5ewOe_WpChiJiXAvm5CeTbtNmYTSxaO5YQEn62qQH-y5JBwDJjl7WuN9fPsMPoeYZSMRP3B48AjJ7lSoT5lmzS5yc2jAwCXYDP1A2kDZmpe2mS0dTYM_Qc31YQDrpgyhV8pZFMxvtu9RXWK5H_XKZ1wz3dZ-wryRyUTqRYvJ-78kMrSctStWMVs13UQgb-9H-PEOP2L1sfhbPhjlYQEnLnkHUj3a6HJUH_0Qhc-iYYc6O72QKLAjSpb2LRBUWW3s5uvJFgEwe1b7FvCp_u4nIu6veXG_OjzHARW2C0PpYQMCQp3YKaSKGiNehL5tsQUBxWfvrUC9txLBR7pnoR4bo8ktYMAihHWcvNVOG8r0ndNh-FWEOAk18Ybs7uKmkB3lYQMc4UwO1EAaoHGXBZEZv6Ss8u-0uJTyNfsYx_KL9ECvP2_meobOUdJ_Y7j07dnhkd61TCHKzIs0FrhkIsgvUI29YQCaYeXrXNfE5pX9Ea4JTZ5aVmF3qzdNXaKVXIXmTO8rVpN__rSk8j13kRAkKly6raD6Hi136Trb_xL-yIr7LqcRYQO2IiMbjIsGWXxMHonYLDOpeFLFAmpQdXH_DOUplfTQ9kLrYh_bM5Wam5E1XcbcT4pnPkrBe_VNzyNyCOJGY1xFYQKH07CWgmdJwnG3uhd1CeHfNaW7IGEWEJqQfj-iHfveSWZzcg_9FaS6nWCydIZFgbb5IiMEamFG9ZNoP9y1bK7pYQAB-dLNgnWn4KzpTwfZIumNCdCkIaOKsxR9Loi7GqygFvOAJ6wdIP5MH6SN22KTKJXpSMcLCcYSrqV4vo6e7HA1YQNV8Z5SfHNw8Ea4idNpZ5cqpk92C8dX2mqmO5sQrhVjIBXcp72cQ_WPc8M0D4IeQNEzKvLAmpKB2O0PQxenukpRYQPKT0jtf0_F5Aumn8QT7n81BxGUHuHWUE2XPMb7gWYJ14bcpvjrLkpQpC8QHyA2eshDXCc7ZSO_2bEu2WxPe6ctYQIsm2YrgfsTEXJF2oHxUMNUDsO7lPF_eDTV4mYPHI4Yk0uwjpYwppaKO3BP9VkB28eN5I28I94bhfuW3biEC8CZYQFqqCw0_wHRL7sBibgtgeW9pX5UtzwzvUGWJ6f1OeK5LZIWKXndz21JDvsBURxe4peQR05CvRM1UX4c0wApsBtxYQHL-40_sGVt1lKg17EOQaiX6iH-r6uTKN7DAxYzNhtt6I71BeLS7pl6MVI1WP8KDpkNczKAlASE5BszPPnzIWcVYQNWkv9tt750UP5DNrMr2_ehmg1A_VvkSdo2R-R1H8AN04_f4RWoudQEO7KM4s_uEU_I_rsbY1fi8o0q02IckXqSCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};