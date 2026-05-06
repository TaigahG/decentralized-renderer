import { RoadConsignmentNoteW3C } from "./types";

export const RoadConsignmentNoteSampleW3C: RoadConsignmentNoteW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/road-consignment-note.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "RoadConsignmentNote",
    documentId: "RCN-ID-2026-0506",
    shipmentId: "SHP-JKT-DPS-889977",
    documentIdentifier: "CMR-ID-44556677",
    issueDate: "2026-05-06",
    deliveryDate: "2026-05-09",
    consignmentLoadingDate: "2026-05-06",
    buyer: {
      name: "Bali Resort & Spa Group",
      addressLine: "Jl. Raya Nusa Dua Selatan",
      city: "Denpasar",
      country: "Indonesia",
      email: "procurement@baliresortgroup.com"
    },
    carrierTransportServicesProvider: {
      name: "Lintas Jawa Bali Express PT",
      addressLine: "Jl. Raya Bekasi KM 21",
      city: "Jakarta",
      country: "Indonesia",
      email: "dispatch@lintasjawabali.co.id"
    },
    consignee: {
      name: "Bali Resort Central Warehouse",
      addressLine: "Jl. Teuku Umar Barat No. 100",
      city: "Denpasar",
      country: "Indonesia",
      email: "receiving@baliresortgroup.com"
    },
    consignor: {
      name: "Jakarta Hospitality Distributors PT",
      addressLine: "Kawasan Industri Pulo Gadung",
      city: "Jakarta",
      country: "Indonesia",
      email: "logistics@jkt-hospitality.id"
    },
    issuer: {
      name: "Lintas Jawa Bali Express PT",
      addressLine: "Jl. Raya Bekasi KM 21",
      city: "Jakarta",
      country: "Indonesia",
      email: "admin@lintasjawabali.co.id"
    },
    placeOfTheDeliveryOfTheGoods: "Bali Resort Central Warehouse, Denpasar, Bali",
    destinationCountry: "Indonesia",
    baseportUnloadingLocation: "Gilimanuk Ferry Port, Bali",
    placeOfIssue: "Jakarta, Indonesia",
    grossWeight: 4500.5,
    grossWeightUnit: "KGM",
    volume: 18.75,
    volumeUnit: "MTQ",
    goods: [
      {
        description: "Premium Hotel Linens and Towels",
        numberOfPackages: 50,
        hsCode: "630221"
      },
      {
        description: "Guest Room Amenities (Shampoo, Soap Dispenser Refills)",
        numberOfPackages: 120,
        hsCode: "340130"
      }
    ],
    transportMeansIdentifier: "HINO 500 Series Box Truck",
    vehicleRegistrationNumber: "B 9876 XYZ",
    transportEquipmentIdentifier: "BOX-LJB-045"
  },
  validUntil: "2026-08-06T13:21:42.597Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "ROAD_CONSIGNMENT_NOTE"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#17",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 17,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-06T13:21:43.414Z",
  id: "urn:uuid:019dfd73-93fa-7226-bd0f-09fcb113babf",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-06T13:21:43Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAnGjQzP2EL405MR41ivqKZxqy1b_48FBQ5LceyDnctZrBrfCUHbmSJTFFZmy_iZ1loddhBUI1QNUzTNjW4VU_01gjgCQDbPG5qHk0AA7UYMfBSkjqTljRSdToBTSci8xssZk47jJYIL2VFRlYGSZt5GGFHrxW0t935XqwrR1oCmyvSb3zi1j9mEJYQPOKc2HRCCJNswUaPzvqk1iPJ-TnFIKFjQ69Ea850XLGG66zpp6nvfVTcAjmW5nOLjLr9i4f6lBtb4noW5s2VZtYQCEsQYytYEJ6QRta47HFqMmMztdbbKNg2vA3lAi2GQ_OY3BIICDbP3AbMfibXC3gaFhpDCLx7QCNWnM9KRtMua5YQN3U_6st4_Az4MnIfShAyLj6fV-0JxSB2Hh7mdcE-WczPCPvzyY9J7dcwbMbp8wDJDGDPz2cICat2EVBaXJmShJYQEpEzcY82L3Q5DbegES7OfmCLG_Y6tsk8GkPq3y4cMKraaWPA3vScCq__RJJEjRTf6T1rdWNUSIuu6Itb9Lf39hYQPxVQKqEzBMAEw_MSm42__Yt6Qttjd003J10ga_6XRMfWqEaG1GeCbCKOO9TT7FG1Q0ZexQiQKOFMqFVvX9BAQtYQATM90W6mVWXiMRghi0v8XAvj-yRoKCu-OXDGdKqJYG6D3J3td2VgSGblvKrXdIdcTqJ81lHPsnym3-01f1-RfdYQGaxO8-5I3eLbbvRjE51fg7J7EYsvW-DJj7hLeTuyq4kya3QokXSRByO0NFhUUMoyFayvMN1ztzF1Gn7sGAldTtYQJx025oggWJGmJYjYH_4ksaV2RMc4TUEnT4dUGRCfLKqnGlRNdjXlsyE13b4admk2798JIDgvLEThgtRp_9DoaNYQD3rRgg489xDgcO7PEWN_v-KLsEEyuVJtkzeuCENnVvhN4qJcpW7yOEO7RCtwI0m90xPdz4oiOaXRcKdzRx9kVVYQH8C0Tbm_1ildzahIE9jbqjLhRVnqDshf6kre9Iul_buTcLOAE2FNlRsIL6X7EX1OH1j7dYbWwOlvdZMe7o5lk5YQFO_erJzMuIiEg4VOQdh7BfDE2gQ9zzzDjD9mWM7jQqha9tE_oAUh7IuBLFOgvLu2w7xBMmAwssLyARbgU_NmbpYQLCjkVQvDn-EUPRH7zSIA4FiZkO41Y9ZkaOB8dZLQlJCnGYcJWJw1FGWW58tpx0wVfJeCEJcCIGmm8r_8e5CLUxYQGURfSYSNl8l7M78OPAilfQVwmJqCd4JXvBsHV3NIoCoFS32zMerjY03qHzln35lBQZbwFQ6B5t4nLnjbnHyEORYQDjmQ3qVhwlTp5HOhVGTb-BzU51S9vkessII2B_nP-7L9E3uKr2UXraTq6gxmUVU04Zuzhoc0hS6UYiNtamkQzZYQIpqngSsKEy7O5iS7gyAaCl6sIIkEsCmach0ZT9h9qdHL6KzUeeH9GtvjB1DolknWe2UCTE5LIOgAk9HpV5AoKZYQOCJznLFyeMGVl32R2KRWFf7XlS9KWQouJQxkDyL_NVxShGipJgpcD4spnz0w2NjuYtn5QPLvrzw1b3c0t68yv5YQOBuXKPjvGksEoscErYLVY8bbTKGR-FF9vR0FMsZXYRdlW4NcNTnGCu6Ld2GDcqQnxojIQVXypDeF604rN65dJ1YQIXkp3ZffhU--jLry5aJOkmFtrZuEvK19wPa3rnk61mk2_v_rV8eQL6f0Spj77mtcPZU_pv0ks6-ZRaeSc2Rz7BYQE-jZ7Y-FxqBTX5b5SiE1zYv-PyYNa-c7ze3hOtAqtFu5A_q7-qmQurceqjTyl82np5pYy1KibmsMa8GebqDQJxYQN0Dl-7bADKl6Bm40I4aU1LpBOlOo9SAHpqLoCXf4JAaxz4eEAJUZVhqvWDC0FxKi-e1jQ_tP1ILDK3kM9pjsbpYQNWniwyPL8ioY_4arZnDTjGjnt7tYBCamRzJRu4fKtS6rNlFOx3k84hPaAwLw1EtIbeUMYBLxoDIqsRuTk3cXRBYQHhVIBPE4EFBU0copS35Kf_VLbVJ_TAYE0skuXQ9U-I0hBLQzHIJ13KcD2_sJz2AG8Tb0MCH1QoAJudkZVW6en5YQDz6_M5W8A1RJdaoDOPwv1RAMfBWE6U4tSNI68iA9Dnmam7y4ViXmbVZcLc7BScpPz0SyaDCYGFCdrUsiMi0GOdYQAlVWVAmPl2dnbsV9gNZux1tYh-oZjQeNq6dW4Go6B1_cNv4Mgiv_xj1-D4Ry7v_CsKm48d-lLEsI0B0FInO_pFYQHyHzr63TdZphIk8Mg5Dj86X8-x3kdebYDYivzn-BwvxusPyzNOVcPjDLaxS_sgdT-WaLuXr1IhM-X9sqG0ww1JYQMmv8OEbvh_OxOBpVKWITUUz-FFHxaNgceRJh32G-Zvr1nLYmYUHTpWjN2fj3Aum4WV-GTc2jYzxES8aK_bOCxNYQFACOhw3V8nyHcT7o9HA0H9oE1J8u-ULky9bekNVIIc-E1roF6zq14nsYxBmzdRKsdmDEcxeT7owdGpvNE8nu6VYQNUYkk40kNLgflFHee02hwZGbYb7tgQFU-RdmcawxNkvYGf8LHLBxKfuo536kR6wJXTjVc3Eg7-1_zxqAfcdDflYQORNxbn_4qojnR57uPkjh_N5MpIkz3NZzS1bj0ssGCufHjRyuYuvlXoS5zoN7C9Y1fZ_YtGyjCLJWk4fV05MeItYQBhaXkkZFHKH_wbKZq4uog0M5P0sb2SGd9bnnziWwDqrRE8aQzK3z-eLKQs_0fvMK5W4xVTk0BJ3D6fOEAT2jelYQImD6abDArjMka-UCGrvqrXWYLvKgtLZ10Xi4SB3qtdwWtJziFNjOMO-gmtTPAN60x97DTW_xVA0mbxiupNgpjtYQDy9XvrvjuIsvxQR_23JOH0BBhnrBc44gaNtR2Z0DVyoOirYDzDd86zxfkN1BJCNaPhzvEqLY9f078wldS_jI8BYQCT-Jg_1LVDMM4A-NcyURcDlTxRCb7Llz5PW-2pr4t7-3q1VXzXq1KGus5o9vc6_-vvkPNGA-1pCfWJcdtc5_1pYQOHWn4oQKnuvvvSkWPotsZKW2KH348oTgbTztrtaQZuLc3OUOr8kvbvT2N9DYGDctN0FDtrI2GT0HR87VzQs9lRYQMMdNmnS5atH0XrmaX_3l340I61IizdTsY3z3_2jW1ZHCm_OCNsiptj2ZSro9grgdh5-Z9Nhzinv7IGWGxsfKgxYQGfAJ_9HbxyzLAiVNt9JOiQZbfDf1ZfHV6SLTT7HjrVQ-XNMuWb9oCkjANnuX6V_hjLydVC8BKRLI3RmpJHLm39YQPTE_W-GlGxNFyoilitdmDapNn77O7kWTCM_VCAp_G5_j5e0b75m1IR4ivmFlfIoB6q5snSlihz6JShUzfW7mL9YQHNYUdpIjCsgJzW9W01uEDLPrCpXvS-9XR_9LIKEUP0tEM-e3_gf7TUSA_31YFgaI0_eg1CK9xWP98c9HqFwx95YQFR1SZN9-bTYm10GauYwixURH7xegso0GZJy_3O4s2g-mp9Cn7fCwp-7M_Yxb0jPitPOxOjjtTcHETRh2aD3SIhYQCa_QgveOSbk1oD1-0QoTWmmb51A8CDRBlD37BdqwBql_UpRzEJ9JiDoXspP8rbMOW1q04utC5diU2vfTKBmR0NYQFMQKCD6J8lGP0va_tEjwf5nMvY8kVVSTWuO93jPBNYa5kIAxhwVZcA1W6OscRBxDKWLhk_1oW6QwEVPci9BirhYQAglbXccZZ5ZP28KZaCZI2o2SNUecs4Pdt_4KgXL_2fYpxExQmfVvC-0DfjR3ikCyxhzw9C9NeFmsUrN01PhSn1YQPrh0uQOFx1QpHucZDM1VgMCUIkXzbUe46IojQTZutuWJZuo1fXOtynCPOWInPsHsQvy_1an13Tr_BxNOLgMmR9YQP2TzAjhyzqPaTa11tDwO-cnbsa2RILCm3YeXtUiKi4Lg0EfwWd_Rtm4yykXhhoZdIHQkJeWCLSFzk7HSNNO0odYQJo2kfTWYy71tTd9JwDJg4YnNlLI_QF3Y49ZBJJtqNh0miHqjBJs-uzjaJtP-xxjVkzqakHB4VLmlD-Sjj_BSAFYQBuJs8a1_114RZSgfKpTVz8yQLj04apI20E5NQDVo1nQi4wNizg-LC-oNgrkU70yf7LwNPE8nhfsNTc-DYkLfO1YQLACCfXs6c69w-kskjOl235B5Ttnihs9501WfL2QTABR6ElSLu71CSbelv_J-nzmxTVDxEgcwcfo-aGwz5u2Id9YQOfNWwCx9i7daZ0KhUDs_KGuKIdhh4uZAYvUzHigSJcqBAz4p1LRKBnthKsJqBeWe6fL5lsuuE853YmSO-MzvtxYQEgqvec-Rm1izNX-uDQQuIwyVoD4PNvC3KQKp7AmtAZ8PZzul2993CktcQm7tqxna2yRKteNZkptwJ-Kdfg6vBdYQJlCB_lKds4N3sYCBAU8koBw6ukF30t3FrrIujeZ3APjRZ6DJN4rBnPnic1Ko9QSSuAUx0NT6h81-jL2jPkKPehYQD9HH9JsWnf0M9QN2GNymUvurrn7i2t83lLFX5KSzd7NiPvt59ikBzfT5ynx7CgtvTL1n8rTu0-63by1ePCN_b9YQNPrIEepCIRQ5TXGWqzCH43jAITvH5kZWmW6HT2Hz_O-W7wjgASgdciNiR9QBI64Cj5eO05j9Fydg20_GtMIDSlYQIs2Nr8WOX9gzDnuYwqNcGLzx6yzKY04Cebmhe_VZecrl5K0wBrddG0NmHFpxfB_Y6NYDggtpUHe37I92vtiHclYQGvYDN7L1ItzX0TzHzwKRrs_BjX53iZYKI4a3WscoIgOrU5JY79sUsWAmCynwlHFDyitEPqsvUXwbvcL8uJhOjpYQEyZ5NEDOghK5TsFg2sXE7lcsPzC_f0RAcFZ28ypN4_zyfy8KlKdasMd_2M8qvljCUsjAZih-JOIYStVEBlNv-RYQDIuxIwwcSPmPzqEyhdSw68_potmA0qs7TNgVp0U4ocS34ptwAmyS9nfBXVZ3N5k8Xh8elTRA_EueGuf037eXVpYQFgUfU2vFMe84hQ4Z6HiQPOE7TL0GPNeULlpwa-fjtcvwp-UDreuhyK4XA3qorbR1KhLxfAZ6GC6lhGo7ycqZWNYQLnH_Bt7X-s_ZloHMl5nbwo_sIT7acXg8gC2shNY8zM-N-EpsRv-sDRThutDRVW2zbDSdmpUiOhoCqguS5OiD05YQLfS2GbyxrkmKuaWKdEQT-o43kdGRnnQNCg30rj7lbl6lUBmPhyxbGTA_MRuTd3hHjlgk4fFKX0ay-BvvKFyC45YQMc4ihy26t-Hjxu3V8Wozji3eQS2vsOP6yHAV3TeW_avAW3kT63Oi8yC_bIaXla9DS94hCmtfrjxmxFGPhfEIGhYQLK_V3am3_t_KDpxX9ZIEGgo_iaOwui-FwY2lBzG2Yof-V4X3m-75nKHRM3fcQ9oBUDfIb6u_Hys1rDXftOErldYQJ0xGlKP5uhDGI99_VRcSEPO5kJORmaSkvc3cfbh6r6bh79nF8GdMyCuwbnFl94kLp9xCKjXCp86aYdrVo7rIb9YQBGfy2Y4wFons1HaTGJeJTw_2IlX_H_yN0QDLBOBN7irL7Wxb6F9DSpGWEXL-q8ft0-q22Z7GT0Qv15FktAum0hYQKgIqMelsy_r2ShUjUxiXYECw_HeBcf8ejfhI2tZ-YXHMI1B4OXiM9STAhkXKNm_csYwv7-FACsxbMG9bL9p79lYQC5_YzplDCExBgVIUPHaQT0bEsC15hYzepAmWsLiQDEDcMrUFpTUEchWiy7C3gW5QXipjxPK3GQZl85InPBTKZxYQJm8aA2_oOMzzMVGXs8b2v8gY6VV9qobgF8f47VZyPIlac0boZClSMit6nIyJkBzPm7RQEVchLMMqoYU0kEjZB2CZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};