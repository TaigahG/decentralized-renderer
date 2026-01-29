import { RoadConsignmentNoteW3C } from "./types";

export const RoadConsignmentNoteSampleW3C: RoadConsignmentNoteW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/road-consignment-note.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "CMR",
    sender: {
      name: "Euro Auto Parts GmbH",
      address: "Industriestraße 45, 10115 Berlin, Germany",
      countryCode: "DE"
    },
    consignee: {
      name: "Parisienne Automobile SA",
      address: "12 Rue de la Paix, 75002 Paris, France",
      countryCode: "FR"
    },
    carrier: {
      name: "TransEurope Logistics",
      address: "Avenue de l'Europe 10, 1000 Brussels, Belgium",
      stamp: "TEL-BE-998877"
    },
    placeOfTakingOver: "Berlin, Germany",
    dateOfTakingOver: "2024-12-01T08:30:00Z",
    placeOfDelivery: "Paris, France",
    marksAndNumbers: "EAP-DE-FR-001/005",
    numberOfPackages: 5,
    methodOfPacking: "Pallets (Europallet)",
    natureOfGoods: "Automotive Spare Parts",
    dangerousGoods: {
      isDangerous: false,
      adrClass: "",
      unNumber: ""
    },
    grossWeight: {
      value: 2500,
      unit: "KGM"
    },
    volume: {
      value: 5.5,
      unit: "MTQ"
    },
    carrierReservations: {
      reservationText: "Packaging slightly damaged on Pallet #3",
      damagePresentOnPickup: true,
      damagePhotos: [
        "https://chaindox.com/storage/img1.jpg",
        "https://chaindox.com/storage/img2.jpg"
      ]
    },
    senderInstructions: "Notify consignee 2 hours before arrival. Gate code: 4499.",
    specialAgreements: "Delivery must be completed within 24 hours.",
    establishedAt: "Berlin",
    establishedOn: "2024-12-01",
    signatures: {
      senderSignature: {
        signature: "Signed by Hans Schmidt",
        stamp: "EURO-PARTS-STAMP",
        date: "2024-12-01T08:00:00Z"
      },
      carrierSignature: {
        signature: "Signed by Jean Dupont",
        stamp: "TEL-DRIVER-STAMP",
        date: "2024-12-01T08:45:00Z"
      },
      consigneeSignature: {
        signature: "",
        stamp: "",
        date: ""
      }
    }
  },
  validUntil: "2026-04-18T08:51:32.983Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "ROAD_CONSIGNMENT_NOTE"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "52b8b904f237b2cb4333ede5a0d320b224c2e621918195e56515d690f50770c6"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-18T08:51:35.390Z",
  id: "urn:uuid:019bd04d-736b-7ddb-9d25-dd29315be89a",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-18T08:51:35Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAoV6oFO1GlLkig_6JgHdHxB1NuAssRXK2l0unydnW1zkIxjGjP2JbNWDxjoPI-SelJGftNmzKX1vZdkIf7IOZDFgjgCQCgmvzXJQ8xAI9aSi9nYgQuW4vd0Vd4C_dS6IWJrr4RyZYIPpfgoWMC2yPzOtT-18EkIiNSQQ91VA-gg2-9BYa-zx3mEBYQL7AyfELfPsk8Vbc6mQo60-EIyJOgGjyIxf8LJvXsJzTVi38tAYiV40t8opt-stIVgFn_7QeCAAZV0LUqdzecl1YQLkCFLXOxO5gRkXTtPZigfmuEbuN5VqfNDhzYTcjhlpARUna5YJtGg3T3QMs82OVzDX6fuRTZAWGvh5O5LBMIhhYQDhxXCv3wq3hANX5-xK_vYeeryFdGWyv_dQV3UcHbgoQwOagmTBqCg9_CutMq5RM8kH5AVlBADbycHfLerS67wdYQMaJZ9-p-l0EykiIh2TSMf8otg0odVusw8e3UkOj7J2K8NqjjEfiOEC6-r6-k1H_dsticj1q5T57oxe831WCmBJYQM44Juq5WHhgFU3j9VLEQRSn49wvOpdjBwveITkKCWr-B3MPEgQjpv_Mj3jXSqTvncwOVRHRqygwGxw3BMXMO0RYQH9Z45AkP5FKMLk12qAf29c7Imnmwc1cBPipPVkFImumjJpIDg40clBvx8ZmTcGUtqoQnhkKEDcD9sfX5SRRZY9YQBzBirawJKNMvxcensePDl09O9a6MyuAtDGUIr8sxBjgeWdYE9dvgMnOfqkECXtTE-g_pZ0jA4iiGyvIq77kcIlYQMGjZZHCF8vMFI-2emn2snxiUF3NZyRdM-MyKhoCK-kWJ4PzAbviNVf_bpxj2pfDZCDf9_KpgzuaRVZ9jkS5qOJYQCVx-mrdvxye8QOUjLW3eXsdBqHhSviN46M0_zS_3Wp--p-dZ2kO42XDjVXS32fkkDSgJABgHopmWV-c04D1ImVYQE4Q5RkKvSiT61XjwnqVL5_-ZpyiAV3YmC-S4f3xPXVDo10tdB6bDPxLi9DJc7ABXdvKJgvKQxc4Sj1Q-c9G-SdYQBqQ2HXfh7I0eD9zEYtN9t32dhXNXElhDaiGZsMv4ookPWM2TZIIt69eJAYEJUepIE_zEwDgOadbYnlMj6iR6gNYQOvhTE8InucyoH42akMIPFxTGzktC6AEZeTHEXCV2OHklZg05G505n9hbiGixfb-PpoWIfzagBaiaDmO4n0sh3BYQNUylYpXKSLAhwF3IY4EsWxxUgf_sxX4dMXm346TLqwHSMhizsiNqP4gYJcFiJvROJEzuQq87YLvx15VUYucEZ1YQNG-vASCNTzzKioWTZlnJ6keGcY0gwNArwVRJWSR1e3c5Msvp37WV8qsOl1FJb8qI6pmyJggdfkP_es7zDLxwK5YQLcyfRQgZINicKioQzxeEwetvf7OoVwlLde5lUij7e4hG2iC4ibvEWVA7Q_aogw67WGJ5U-ZYrZUt17X8Zw50yBYQCv5rgfCsR9XJlxc-WXuosv_vC7KSkdjNjkB9x84RHo8rMb0ZGyl4HSCqi_xnRUJaYV0eMPQY30COGEwWxBZbmRYQIHGJjK1XO9wZAhfxhJt8fr_vGQ4TVe-fcdr2tseHCPNwrbYAK9O0nzTJfWiN6vtMULOXQMF6n0WAzKqrObszKxYQP0OIQBLLEyrfDMyVuVgefOqw6yJhC1TmwP0mrcFUvDBHCOjSWGwnKUTNBg2sdY5kTKLa_aG1RPcNtt7OvRCelVYQA_uSP-vgqdG9pGpFmIZpxTiL1Lp1ef0IsTxW4Vulsz-4efzAcoEglm7CsZOcwCTx4jBaEY9wBABRNG_T-_JG4BYQEUbYkh9vsP3RbNxHODaenT--DQxbFp-b4DzGCOjY7oQmehuHQg3hVxiZMy8SdVffvCMWzjzJVXLw2uiMpzTMrlYQJD-Xi3hw7A24LQgygjpIjEqRgfq-R4ApERNdWDsUusPpa-XYbwriwIaiXefSuYj9BW-sFR0_Vma-T66B_PkJtpYQFWpQvM26Gdb6hUOjiFwk1bOm8eeqagWWzXdzwnPOcxPiziU0hpR6nVj2BGS-qfxLqy6-c7P85a_dZk_wajAkDZYQOmCL2LsVq0cViPxVMfVkoz6RQn09tBP65ygwixzZYhZZG4no7pNJsHtLsn-Dgsv1wZHSwczs_fPuOkakdx65NFYQNy3GwFfRlmmC4mkKExX1aoHg42NdtWt8op369ufcOwox5JdBWpJC_5CzXo7j3CjUMhqjmw9-WnnX6aYFPps2D9YQNIDVZMIVABWs48-HC1xd9LFnNUMGcnu66g7kwXZxzsRRF1bblS70q0Gbn93_NLeFvpSTVGRiIY0_YwqQh1kNDNYQIBWyu9fLuA4-KSLwqUaoKhGHDH0ybCjVAY9LLGsVRnfGLKOK4XYl1Cw3uV-4nWvYvXnyacSnyktHzZLMQJzG5FYQEBhqz6kggBHXTxXE4wvHCJAmAHEtuHmve9dChwk_d81hQSL5P6fOwiF5LtsV4lJjNG9wv8nBXAtbok_MXlUbc9YQHjI5CUVqkvoKip6e4_MgaYcP3t8hOwK70crpsohmaTXADWlBDEq-rInpzbsLMON5wTq93EHAhA1JqdIR8mcrqhYQP1xbUbo_MZ7qBQAXxm3kBxCfy23qg5LDk8JWovJ4CefXY2jUc003kLOHY4AKky_u6MtP5PDRpX9bbrUKSHz9LFYQIaDx69d4bt43mBnHPffAypLhGSCfECIvJ1DWwWY0sFkh_bCEpC_lj1bffoKx0XoDvYOKlnAx_Z6FoYSK-YRSiFYQOev6NHFOJb9ohgnWDk0wGVNHwE0hUwHwo8IEwiqrV406BIy8l3i7lcKiMbF60dxvghpuviFjd-b_A4TJs3-gqBYQKCWMRevO0iUbjL1-fYhSLzZHygClZPlpPqdF0ons8Yzvlu6-bihexwJHGahH6fVjoFp1aty8gvaL5ShSBDS8OlYQNEKjO2QJ8URvU3RoXF6zpROVLiigLKtkO7MVlopsqT-EtdW1tol_R3HjwrOEvNzLOB3xoM9EJ8hmCKLjvKWc9NYQKyMAHQaGiHiV4-MfH_IrvO-tO6zy4vtdEwTGVFCN5oaPm4gTv46CR9voM1YeF7SK9DO9dSfOwSJLu6AZSZK_JZYQOPmUmcjx7uRHL0oz5085Ol_nX1CDTPm7tu2128jdp3Udh5dTXuYZ57JKEt3qdfohQEpRzB0eRkJB02tLJrmfhxYQOGfSiY0tsgWJ9EDaw_ROVsVSlHYLhTbTHRYNm_JirwgAKfkQi8uzmS3o4fLLR4CpowXVLVGyDv21Cx0mXpxJUdYQFHo_Gor7LJOCaej-7inx4g_1dkGBFMiwUzbMhb5zvszqFPsvoAF9N8ywqquItRnP9HGAyPQiQGAOZ-IHnUyjDtYQOQaPgXfihZttMDZO-nW-koGYp7pzuvcAvPSGXFUP6gHZN7orFi1tiC1f0p6ESdmR9BEypBOQm90KqwWlOh4jChYQKnPWX_YXaogbQZUL1xKXXRKTn-RoYjs-4dHHYVHx59qd3hVEWBfbUfZpUnGWpLSuodIPkFPFRV4gM-OPQrt8xBYQNA9lUeuX_BEDG5ITclEu1AFxV0SleRGAYdm4y9mxjqKBvYHYaFt_ZXRL_2PgaXRysjAHU5u8xTwX6H4ovRzkmlYQHnTPYoCVllNqYTKGUsgqwTD0TeilLzAaH1zUT44MSLKdHLDvtDxCiwRYDtwfUhMKFaGSSqVT3bMlLcwj52cG-lYQE5g2nXpuqQ3ot2CKQHr6Tt0Z4rXylTBDHbhnPMajAk5DzRSnIZ2s4Mi8P_76a6nezCSyg-CEJvYIBf8cEyfVN1YQBf_blzwl2GcnrP2_3NY8parN17nWWXVXjOPDnY7qgJScjaRby0J3gUeEwT24-HC0ZK2oLwE-1V2AI89rsdk0k5YQBwhMI-Jjv9NAzyF4mlkGP8PHlScvuTzgNSfCVvBHAqWt6OspCCUKshmJ-U1tGf8AS6FhqHNywOJs4dUSZq1KnxYQH9kJr9D7-9u-qvbD9R5dLH3c6mAp3ptW0OHkm5_tbsDp3AqmGcICX5O_Cp5uMgERyKfTvB9v8sOBJrAT_-_VHhYQGR_0bS1KQSKIb5h-k2fKsSuyvcOUuSEmWgqusKjX6EHbYSZ8nPMMJkYQl5N7xGujUmu_T9oZRzQ9KPcnJlcNXNYQJ_zNa9x2Z0MCMKaUBiLJg-56R8Fz3LRPeV7PNGRG_jhyoDEGvYobNTpywHmyyjGNKythn7rQY2Gh0MLod3aFyhYQN0dYWUofqusAXmRosxNGYA8PGrCg_vffEy7KNTST5mxIAQQ0yC6h7YD8cMQKOJNfA6ypTSzDt0lK4Z-eV59ZZJYQD8hpJ-qFhCWMBiuA7uoLIWtgnutkrgRBM1Jx99NknDgjmpOHKS9Q_YVb5GemdVpL2lShCePxBkvst8BsoxFq-ZYQAO5vDAKHyVtZYV3Gqz8QRHjKIQjdt6wHu0p_TaI2BnGHafI9Oq_HOD5YzlM01HFk7YODq7vL9k1g20j0bIvYBdYQH1FI3Wgqt09o60K4m_uueWVCflEUvlRINuD3yTR69D2FcGdXPI1zdM5KvIVKBJ9n7UodJZ3uo7-6txKnSkDMQ1YQEmEr0w_KnEWNW_hnI8AEexriiYUDwBE29vgTbs2dh-u0Z2gGFTUdcpyBxJRtVd7MGVIAxzlrc1yOUjb7KPMFQZYQARDR34n8_IY5bNGq_gFv04lpeihjoF6l-WLL-EbHsc6m02K4gB-15eJUvtqTdEd-A_od9klT8FAY3DO5RzEQzZYQOT7QwHucSE6ItEPNF5FYq2sPhRIphSqDg1UjnaLVMY54k5qg8-oscKSMQW53wnHABebz47Ndj5bWoghk4UlP85YQBFc1kcPbhMEjfvPBZfw-8kXUmWc5gh5HiOKuRMLEk72TEU_0R7qzufzFFiOg5hg5X4qJL0kHngEz--H5h4u28xYQOGGQglNYk3IBl0N0gTvM70rFJmaOIe-PtC_jE3aOBlPFNiqA3HA1tso2Y6J44_Yl6eSZEtSnjuyXTMOlrTBidJYQBWUWZ33bBPTtVHW4bbnox5_4QYIpnQ1OqKcv8Up3R9u_mCIbe6I_HsU6eRRrjI4j_QATDt6f4VO2TUTjcKk8URYQBXcJv4zyemaFenYz_YDvIRTbGCjy5OU7rbEmqWAU-9kZ2DatqlVhVb-YR7gf_j-Nw0_mzeURAC0TSb_4TgnzotYQFySyNO20n30u3bwcW6_SQlUSmejtKRCsYkqSaCkZHmMnPsP9ophiBihO0d5Gk2Zc9ZRthIoWhT5BDsTuuv8RJJYQIYHKc1S4rxG4XFJona0C6egPnFeJSKBwHAuDo3Vg3LsvtIF9jBmIhVJqiRTrzCs-sFfjSYn8NnOCSRzErT50dVYQJfLydtooHQKRge-V6mmpLtW7vMUlRK-NUE0KXyp_pVkSEwvIP5SjKTIfzU47istkUTTsaahcNpMB3LtvQJ7V5RYQLfrpK7IHQz3yUEjLICLNlN9TAIONsHCVoIqfPBQ9ySmyX3b6xOaWR86DTBuYafGsiGpxDvWiocpQ8SwhyyAQZlYQOlzd89buyzC2-pWHNqwrFHvOULBm74bSFrayCDUlUj8oSRJV4-BUjl5afKIQYzMIUcfvgBsSt-5dXl2WAdQBdtYQDk8yJCHZe8PMy1Jcxt6MeR9UUYIZPe1y9eMYRR0u3XFNvlFt3PbFSM3smzMpVk_ZjWC5KSzt6xQKhLRyqp_gOGCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};