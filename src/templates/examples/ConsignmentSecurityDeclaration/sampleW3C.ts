import { ConsignmentSecurityDeclarationW3C } from "./types";

export const ConsignmentSecurityDeclarationSampleW3C: ConsignmentSecurityDeclarationW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/consignment-security-declaration.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "ConsignmentSecurityDeclaration",
    csdReferenceNumber: "CSD-2024-HKG-001",
    issuerName: "Global Secure Logistics HK Ltd",
    issuerIdApprovalNumber: "RA/HK/00123",
    statusOfIssuer: "Regulated Agent",
    mawb: "160-12345678",
    hawb: "HWB-HKG-LHR-9988",
    origin: "HKG",
    destination: "LHR",
    consignmentContent: "Electronics and Accessories",
    grossWeight: {
      value: 1500,
      unit: "KGM"
    },
    numberOfPieces: 50,
    securityStatusCode: "SPX",
    screeningMethod: {
      screeningMethodCode: "XRY",
      dateTimeOfScreening: "2024-12-10T14:30:00Z",
      screeningAuthorityId: "SCR-HK-99",
      screeningAuthorityName: "HKIA Security Services"
    },
    chainOfCustody: {
      certificationStatement: "I certify that the consignment has been screened in accordance with the security program and has been protected from unauthorized interference from the point of screening until handover.",
      issuedDateTime: "2024-12-10T16:00:00Z",
      issuedBy: {
        name: "Wong Ka-fai",
        position: "Security Manager",
        signature: "Signed by Wong Ka-fai"
      },
      receivedBy: {
        name: "John Smith",
        organization: "British Airways World Cargo",
        dateTime: "2024-12-10T18:45:00Z",
        signature: "Signed by John Smith"
      }
    }
  },
  validUntil: "2026-04-18T12:11:06.898Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "CONSIGNMENT_SECURITY_DECLARATION"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "496a18f69a29364cfc2931f6eceb2dc752c83ffb0b9ac820d4b6f535333365d7"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-18T12:11:10.520Z",
  id: "urn:uuid:019bd104-2d40-7880-9279-44616a3e353b",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-18T12:11:10Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAApSDKjdb94jETA5eddw_cdADAOut5Vom_atj3EbPxP_Xzhcgfdl2_7a2GybbpOjjqMqcQ7q494uvbT8nBcRhAlgjgCQDsl0RhR2n5H9Vd3LCE_RoDvuYWL-wHoze5UKai9ZDWylYIEGsnK2YENHQ9LmgtGmY5-FDdvYdnPgnrAazx-PKufpGmCxYQBXgUBxnzhtxp4dHhFrbMQs3hf3rD8IGKnKSpzzFFy-6ToVIV1muNELU7tDk4nfcokzvSyITA1bM9R3Ef7SBHZNYQONeZNdPM428niBsgVhqPXo7-HCl8dFNZX47HpUUG8P9ieIUaHc5883BFjFoJQGYPPf0JjVrmZqR7sKx4z0nWiNYQN0S-yS4YDgAqmz3sjukzHb73ZIBe0wJQvX77UudyowdA7i9yeVgykHH_xwFs1WmQMUlevaUUOsTm2zyWPfBTiVYQERwXFt52q40ZuRwlfQkQXqidIHRp8WEj0kCI2aVPWAT0tAkElX2iLSG-gSCB2zp6Li2vJTk77h-y2GZPYXfKMdYQFXRyXhJQg1Z6A4vW2JMUu4kowsqlWBL-y4W4kNWEekqaYXtYEqabXKvl2qwsUjZ0JYVU_c8IPQpvWn3aBmEdKtYQD6PSqyG805-_rfnofiYdgAchYgRnirAg-FSIHebZQNzaCLQ8jyDufp5YNXkGJSfitbDdlt95NrM5A_6cgR-3o5YQBgutrvnR8z0x0KDJkk37V1bQGrnE58DlElJFA-ML2VXdMj1og0vPlP1La7pm--KF81KCOPZV41CW19nSpv5_YZYQDRAaAonzDK0-qTEG-LUKGWglTcURkHjZLGheimBqpne2JBAQ4dS_L0v8ywP4v_SG-2FSSshjyRRBTSn1VZCT1RYQAB1qwcOUHVvkeJ6XHyWWvleDhnNxxjp5P_z2rMKjaQYtUNJvgXQWAjjl6QE2Vzs_bkzsyQEv8RrI5uHByDxcAxYQF6u64mmeRAIqY1zpd6mADptmII722jfm4dDn8-t62Z2AIxEiFAIEbdl8jjsOQhgSyAcPWgI3A_X_lE-3ff-1dtYQJvpZwbziEG6ZNep8B-3xQdhah_olnJ95AXAli7jBKN911oFWGChLSR0k21wCykAFuDSbnQfRyuPovw-XaakZPxYQBuCePtaOy4fu8UiYkgvZji9_PWDG1OOwdOzd-gscyD3Qa43qgxYhP8NMl8ttTorw_BiJlYTYLybbSZkE4N0Ho9YQP7-bb2wQvbrgrhTL2P-WMftfG8T0OteQZt8K1OWqcnIgoD5rdp-_4yVsOBQxG1l2eD8WR0dZTqglKAGTGzAOSRYQPbtbvCLzOyftZFNPJxZGYjGNXQTj02_fkZToN72oqvjMJj1ycVoWiFF3A0IPagO5fKY1q7-XDfF9usHqZPYfv5YQMyiU1GhTg8pT96Fh3nrf3hvA2qF0Z58JV1jrcqoKprsyMsJkiLkZA-j-xeReDejTrofclne_m4puwg9zUEgy4dYQMUZ-kPexj4mZanVS-OPPN-_jn4lCk6_hoNripaU5Uj0duwdUiqE24gKvtjlCnGI-yIWhnUqBOwXICFo4i9SoSJYQMj2bMA2BWAaGgG7ob-HaV7-TO9Fw3chd2__RrHFsQzwC3D4biSibRbPYrFG0kXgyXrk_MoogmtD_FC4rraDdkFYQOYkFx4eVkmlHyaN0bF-t4FEfBm4PdFf7OIz9iUI3n6QlEaRCIaWWLHWR_MOi9NXwvi8oW3AMhRn59QE2JbTtH1YQBnfmWJy21hDTPuC9_uncrPpJKWQkWH6bSUv5kjpOSdKwbvQUNKTWIeh6JnT1aPXCUoW6-sOTJcnCIuTLg1VpzFYQKWOd5-BMyNWNd800viHe8IH2D9B1tJ67A-c--530T42GOm3JoUVl3_SHzYRId52MH0fyqvHlihtT-oFhioRIGtYQOYjy1UF8LtPoGJwXuKASuCmnNmWnOT09Ahdn9jEQ7vb3tJPTlxEqcu8fyOR6N72tAVMAEtjx2_xGTLYcdo1wgxYQAIPMRozLsocWcQ6-UjHRPgR7zJaQG-h2AV4rNdrbW1NGQ9nADyzBdZH6Yws-8i3SJktLuoHpqFLLysvflzEbzlYQCNlemW8CPX_IAXd58v2vgpqF5kdNMk-XU94O4k3y8ekS3HIPBBiFfV2F4B8gTP59QTkW79xPJGJRVZ_NcuZFqFYQHEW-9X57vpQ8ch9bNAc1oKsVHYcuzhcqwv-NXp-K6TtSIs7oLu4pL5vEZKvjKOlIUSpLc6K5LNao3shAZ_Lk1lYQO0qOPid0kn3nKRn4eW1CRewqGuAQAWW45OWTKwtSPkSvm03eT7pSxxvAKYQ-0OQTorr52lYQSl5MP7qCvtPr3ZYQK0zOyv_OXkhF6TAqFGKtOMQQUqQpvhWgkweofDTvWaB31E135nUzTBnMg0doHwuD1Ze4-xXtIhcfZZMskghGzVYQMzRJGqg0Vc8XCi_5ToikwdgVYKplDhfOifZ9jTOykKgLsFpQ0YdyLictvRNePO7gvaYgv9WKVHjB-c0YD2CnjdYQO3Ry5JZU3dMFM42PErhTXgriS28j2e8LIm7jGooD1URvPQECvmPRlL8o5BRzP3cUbmwRuNJ1ycHERurSs3zSa1YQJxNhkCey3iApLj28qm25E5YbgeqKa2qIw0MNlrC7cJpj1l5CmyOWjCD7tV69nTZg_oF_KimknT3cyzCatfmZ_VYQDPfuiVUs5ziaPdp2upyt3FrxxsC8XYbIP_rFXSSb2VWnw3RoNxupLNerPcM1ZPY7iyd76LhOpVSjzme9go2cGBYQHwXVHBQ2LEOgB_AgXESxtlc7sPE0wEfSXpCORvDEKgLwzNMvRs_tRSOEj_Tn70BJX-ZCl4CQyqQaeLm_ESjJw9YQHFnoyOL6dtq9q5Ct-_x5VIXGUCPyT0qqJKSbco2nKSCdOLp33TMRc8L91t6RXqwDTUhu8oP8mLtPxsXLgrU3odYQIO5_d7LljClZtTwm5e7GI99zMM-D-8-dW2Fqw75PKvdEaPIbsGyToM3ywO3lKHgKOwXBJCLwvZgzNhbWYCu4ylYQKXml0fUK4UZuTphmzTDomcG_WvUWk3TiVuxL-Jpg3KBBsEKC8hu9Q_zhwoURJqfnkhrVL3-NveYWFVfgHoqFC5YQJW4Uw2IYGD4rLeYPpEbVJjj1WgFRmJUar9T2bWiI1jjnqPkaeMT7HYJS-LAEecIXgmzhxsdh1NF_XVj_LdcYi9YQLcPG9g5GUSWYX7B2gETxkrEzj3YwUAxLoKog3yX4i13Vkbj9v52HingXk1rg2dScxfqI3pwjAji16IOvU0IJLVYQIZvrJWS5697Pfx6QYaZ3L66c_qwbUH9o4hpMjFMUa0bgQNzXVMHHppQ5AoljDfjf3OtT22yBf1FzeKIHgbDHR9YQPBpaLYwHvBDqyJu6gIdoyPy36IVfQI0gq6P73izHDss8F-YgiMR717dhO1MpXAdUGBsy_yx08XadYvSf3bj4-RYQMw7E7J39yvWrJ3UHlckmciPOVHOXumy_RoIalh8SOLHVM-dFe1ORoP4Hv9DSOzRB46o0yDgn21DH1hhUneNXo5YQOjBEtx-qkX0z_ZcHkQi9xgkRuDLZSSu0b0eNxoD-QHueolWkqWpkOG7YzRumN7Vlg8R7av_QXwTn6u2DQ0C6N9YQAqC-MGN7TYUsNz0NhZrAPcxhSILYiMJBo2B9dpJJ8wLYByN2a5qljLshT5R8dSPVuIoBWpKDjUp13EB7XPB5pZYQAXObe2g6i-YbTT8Asmlf-oKabyE4h5HgS0AqSr-kyXKcXHoRdFv36PaTjriV8wCaxsfHAVRhCuc7MmtN-bzGrhYQP9C9A080SGjcYF9vjhDcHnVnsd87ZmSx-9geDlkaZ9oIyrZK-3fAP94Ie5UVPs0ubl6TZNdpJ7hbaID1VhaTzFYQGbMuaxgaoNpfrb-7DHtMoc9qDCjEtAbLMLvV6zUe9GqYDWgNBv0QGsId6Bjv0JUhRA2z-xRS_C_LIQU6FjSb4qCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};