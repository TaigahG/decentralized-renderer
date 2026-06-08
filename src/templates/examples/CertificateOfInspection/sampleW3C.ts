import { CertificateOfInspectionw3c } from "./types";

export const CertificateOfInspectionSampleW3C: CertificateOfInspectionw3c = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/certificate-of-inspection-for-organic-product.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "CertificateOfInspectionForOrganicProducts",
    documentId: "COI-ID-EU-2026-0522",
    shipmentId: "SHP-ID-DE-889900",
    houseWaybillDocumentIdentifier: "HAWB-11223344",
    invoiceNumber: "INV-ORG-2026-105",
    permitNumber: "ORG-CERT-2026-ID",
    issueDate: "2026-05-22",
    importer: {
      name: "Munich Fine Chocolates GmbH",
      addressLine: "Schokoladenstrasse 1",
      city: "Munich",
      country: "Germany",
      email: "import@munichchocolates.de"
    },
    exporter: {
      name: "Bali Organic Cacao PT",
      addressLine: "Jl. Raya Ubud No. 45",
      city: "Denpasar",
      country: "Indonesia",
      email: "export@baliorganiccacao.id"
    },
    permitIssuer: {
      name: "Control Union Certifications Indonesia",
      addressLine: "Jl. TB Simatupang",
      city: "Jakarta",
      country: "Indonesia",
      email: "certifications@controlunion.co.id"
    },
    managementAuthority: {
      name: "Federal Office for Agriculture and Food (BLE)",
      addressLine: "Deichmanns Aue 29",
      city: "Bonn",
      country: "Germany",
      email: "organic@ble.de"
    },
    destinationCountry: "Germany",
    consignmentDestinationCountry: "Germany",
    exportationCountry: "Indonesia",
    originCountry: "Indonesia",
    netWeight: 5000,
    netWeightUnit: "KGM",
    goods: [
      {
        description: "Organic Raw Cacao Beans (Fermented and Dried)",
        productIdentifier: "SKU-CAC-ORG-01",
        hsCode: "180100"
      }
    ],
    vehicleRegistrationNumber: "DK 1234 XY",
    transportEquipmentIdentifier: "UACU4455667"
  },
  validUntil: "2026-08-22T14:16:43.484Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "CERTIFICATE_OF_INSPECTION_FOR_ORGANIC_PRODUCT"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#47",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 47,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-22T14:16:46.252Z",
  id: "urn:uuid:019e500b-b9ae-744d-b47a-031c3714d8b6",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-22T14:16:46Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAXlMEDGm6dCG8T6wKfdvmqSy3VFY3ChbLluMEuoOZf2noHHTBK0aKdWQE5M5ubdtx-WSiKku5p_cR9f_CRtaJEVgjgCQC9DucfBCRT8luDz5Zw9RGJKWClHrX9zdBIEmwcAxW5pVYIMt1yLjG9AtycNcznkO8SW9GyBnAvsojynxT_b0u3fRKmDVYQK-zMeczg1PP6F4Lrcq6eC0ZrUQGjBdcM7R2ve3aTJT2rNZmhoZbU9Lvyx4TbUYQfQt1zgJt6yChmXGwQBH9bHdYQFn7OXdjfgrfnLjOrqqdneaefqQzVAAisKX580tQGM5FTdj45hEyBRZfTvB0GHzEYE_mXw2NLrf29xW9TAuagQ5YQL8m0LaZvUoRjFQQ8LOadoGGPBWJ8Hyl-nNmKYiVKKDd0CqZDI-6gQDTtzj0ObdZNYdH7tCAMhtRnXIZ9F4fVn1YQDV5X2UMqSDwqYxDJinThXeBptgt1Ak9PeysOSP1mJSkUgIV1UAoh-I5PKAsdPPDyBLjNvffd1l0UkE8K9k2rulYQJ-SQuWtgHLsJe3KdJHt2_aZNWPsq3SRTWZzWRJT4dE3Wnur2PftEnjM5WXHMg5ukNmuoN2ebR5rP1NOgZYMPfVYQN-wPCd-0ngoHBeuwfGA5zPfwSkVq-iP493yys6JZNK4BD17GCNRCAYjr5I5iQBTtGYyx3uZ9BjPN-8UTB5EAnVYQD6reMzoHA-C24wRXNgP8Oj3VrTYiURnBHmwLxLOCjNUxLotkfVec_6NAjbQIu9U5glw9ILfb1TaB6FyrKU1mKdYQPaGTI8BVXVJ4NQS4drQ0jFR1ETMCPTw6Ab3jqUtbMk3tGXcx5ZYnnadSnmIfHn37IA8js_xz0zKpoCnnffamJtYQNOkwSHiaq988StOFLnag_QgF1dDcLPY9fc6i4ubiR6oONZs-YFmustsJ-Zp-ZTRTNHo5_ghXG4ASlHFc0X99SxYQCm0a1bn4M1Uf2hIycZTPYNVYGQZZeovwM-cLxeSsFwFNKxn2Ie_YexKcH28R79RiIIrsw2IQS46vQRU4cK6cdJYQH_2Bq9g_EU6cBOj1ZalsZnyooDvvlB9BDNurl6fw7ASGT_k2cm0Y1QDYMVmC36UTmVrvawt1txA4Xg0F9yNdChYQCUBLpnvrrCcZLk8ZOXMbk8bFKotbq1IfiNy4zIGMJ_gLoWM7lgXrjmtsTc9ogh9YvApA3A3G8Y-k4GICWd9LyVYQN3XNaDEa5R7QA80WKvpFrbitujewab2gmyvm76q_EQoS53MYQngLg1P2_YjtcZGmcMcCNrVqaDxX4uo6GS4e99YQJpqVgryOP11qLcpKfCusIWXuZH6RlZI2Da0rsTNSMo52OyIsjx6lqs9XlBw8fR08Izi_YgZHUDAHEYVBBN2GXNYQGbITzkG5XCv-cbG35DSvcsfWcY9kgeHwpzv2oL1Wg320CCRDxZiD210aSx03mCFgv4FHLo76kws3KhpDveXf-NYQORTXdCdFG8PrMvizbYbGmSiE1maof85EID3ddP3QRarbPi7f7Fn_AX0xqwL4IpHu7Pwc1x5xYClCj7vbhJnzEtYQIpQnzxppB2YsULV4QdkqhmSxutSR7-2czOJRtQSaUZsA9_r-R0oJxiw-7-WJFHg6YOc7y-VvhGkRANp5SZhCPdYQKE_S0abkw0r35uNk3tc1CoHJ1OrNGXxJuJVnnC8ijdNOxdvPVvshhX5tuO5Tn0tMxAnMh5kwZkPYy__mX1mwN5YQAnw2vVHq16K-mLcq5hC_gqI8OBPjKAijaqxLE2b47I0dQHperhM4hex8wOIA2QBW1rLhzcc3pnr52t7t14YTbxYQBzDipn2WKyrvTN8p9wF7pPszut3evDu4JlD68SFgGrsQvDyOhBH58QUpF1zQlsZfTPNQDRvIwKR60DTpZsWeaNYQFDNoaO2z8kb5nf2hP4NTM0EZltOBeRMGfQNYiY5F-ckSK5fmMoW21W40WvSJoQiuSNWR_lmchVynwGej9ZyxYlYQG2AhywAnv2sWTV3SKFhZHn0GBucrI3tTZuTLeqO0WJX9pk4NvXifs-azorSDOnMOduKvkOP9T44-Je63AYEkXRYQJvumM0bMgwI8PvnaiFafwZqqTTMY0EfmitWy5Uy7m5DG_MO_Us3zvrZcCLzZZ-Z22C-Wv_ZCYhfpyxys6tF4m1YQIm43uYlMUqJa_Sonx3OYkHN1yxftzcy4krwk3hrgKNpjAZjBTAT9lQEPvGLwLIEYot3A_3qUVl2SoEbxlujH6FYQBIg5bVeQDafGXNjQ_E_1FKH72QYl66xULoMcKBE0Wcnn4Y5hW8UNdCqE1UNr6LACPinlfto0phSgqgu-nQo6ndYQF7vFFshm4MWI5OTNV6BdIhehueR1C4TlS5VHfHEqJHmbNGUCBmyVV-qRj5ge2Hvxi0PBFsWBWV1nVSO6Ie4o35YQFBkMuHAnmX4jxn1m41RjoKLXEG0wVKQ1n8HkxkoKlkNH7PSR-EFc-0UDemRW0r2sVDPc5_3BR2NEmSRwGO019xYQJarK7JNUlSfG3vlOwrMSYRlvd0aFv_WV0s2nQqfyyK5UIKrXbdbB3TxRGnGRt8uITU8F1N4Unwsp3GYBJaQKcxYQJfhqC9g-ywnkHZaVTgFKbrVCdK9pJmCxnFtH_YL-dxs1lLddK7Qz1SAxDPdxhl6bSjE_Jy3I4LAkKks0JiiwAFYQCdSSEnZgUDDpxnfe5L3Y4VvdESoo8zUVb40l_dB6nuH1ThJ5ZwWJjN6F6gYrdcDa0NDuE_o00ebobVnr4BqIkRYQNAgxj5bneFgPhqJUAayhs0khLow19JJKYEkFzTd6l86OHJIfbrjxho3SAUymgX19b4kwalwDqHJwaJvDutAmz9YQOEmv2ibyLApYGHrpDu4TKUxgf9eB4If6XoTvAH4ps6rfZadLJLwHvDS2tGaFmIaQZUbqJevzadatOA1F1EUL8RYQCqhYl4o6wNkbThy6IfJnTAyQlhQEvdfsPCoxqQgxFECwmaylCefQ5eVa-ib4rNV59u_yGvNCaSgjge7ZyIY4yZYQHp9-eWnAh6E4hhPerG9TMKSqtV_Bpnq4Wwv2sEfmEzgy_SguSLbdXZR-2nPUy0kocVt_SDShEOt0_XWa-FvOlhYQNFI5gsgLYQ7zBWGZJVcAAzO9Rz0rEGnjvz3-XxTyfmzOjpZml_ToiEgql11E1cZGLsTdLewLUHqln7tUgzKAqpYQOudmcgPtVNTVmupkieCaUWmDAzERweaFUl08OZrbn8MF2hdO_kZsG4o9K7qrAnHKARRTbPVLzp44CdJu-uRd8tYQAVHnZ9O_a_WJ4eW5ya-I8BTxUFwoIOM69eVJbyuxqO0a8ALQwIkYFHjNT5fF4H1WwQ_60rNoO53pV5bAxt8liFYQB3c3_5ifyXLJUupCXMrZGZfdIv2PODP7HTzgb7kCjtzjba60eSXTq_ROkAN6rAGTvfxVGMHEDcs5v_hlMXD6WZYQFjVxPqmna7xhhqGTOHvud0pg-xEo-r-8y5YaW7d6YHu6gEp2d2pR0CfE5V4e_tME15PNHd_b7DxrhTTPLSx8L5YQCW0b93Zs6o9rl-COozSLy6q3zJqPd8KsfA_vPgH_ke5dNROms_6Kp1YFxIfuY_GDSk1wItueRMfUTwTEqFJVCdYQFXtWwq73VriS85q1GUUf9j--OM-rOGD3ETIM5cS2jCQzRZdUwvFKWyxTvmCVXVeS5wwNIFauwcHOX46VTp5F59YQJS249UVfhdJMiQAayaGymhGhLEd_zMLQbh71T4Q4K1huvrMcyZ5fjONXZlClrwVmC1iLeUx52ma5TgDhveIcfdYQNdG2w9cWTUneC0Y6xP4qskZqTpXkcRGnvRf9GqS0lQNHbb-DLCit1Ro0-oqh_iLGgHaCfXoOb14hXjMV9X4BqRYQJyZ1cO9YvxKSZzxH9863KowQAh6MxCTqY7fUQPuV8BrK3Ic8ipCiCTrjpjEfMP5arNscvxJW__afKmUevQiEulYQG7KJnffq03oZhv_Xsmj_shb6D1AFtNT2U9QQDSaHrcjPtXpHd-8w-djhaiyvAbJfdeDZ1cxxDvsvV9fksye72JYQHnGWKTBc2tincYlfGDSJNQ9fWgS5H46yxwoas4my3G5zeNmiewojKvPmU6YSjNxyzvECpIvTUezUgPADG2KiuFYQEljp-JNpG1Olq3ARG9qzBC5sh6XCjyOu6XlsbMRlzFVnoSyNaqSFu98UELnIk7YTHBxkA9XI4m-JZzNxo-cU7xYQCY2D2VFMdEezgP_XwoqT_41fb7r31XiRC5_LWkSYOWL2f7eBAytRYfD8IF5pi356ZMEEe4kdstj0B_ddzUHlVFYQOM_FIbbWxusbFtUUBTEW28uOR3CyZ6w8kQo9qBbWeSYPvUlPjZ3cUEJxKRum4iReI-ZnoTvestoQZEwFI2vM0dYQJ4e_pwKznBDIxwX9BnImeB5p6kiFL-Hn7vi3PkqZJ-qOCVmnLYp9SyzcrcrVSxWY2US9NVoz4tZ_wx_Cgj-bxhYQIDPSWSHlZDIAORyVm9INBcYiYgOM5K60NTJkFYFAk_o4OqAHx3zNJQ43MakndY0Uf0as4HAcSWqtJuSNrp3k81YQFPwUa797xPp3m8fBVqgsQQ6q8Bmfj6VMGNyqq8MuralyiHOPBWu-NacVXufS9vo5aZJIxlbVWvr3mGGYpAraQ5YQAkyngwnMernHejWGP36T9ES8NiOkHfLiNH-uv2lEBrbrVx0X_Opa29AWsx2CZUjqE8U47nSX5vjkx9lIGnmh16CZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};