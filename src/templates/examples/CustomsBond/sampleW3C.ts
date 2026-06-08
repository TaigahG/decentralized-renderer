import { CustomsBondW3C } from "./types";

export const CustomsBondSampleW3C: CustomsBondW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/customs-bond.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "CustomsBond",
    documentId: "CB-ID-2026-0522-001",
    shipmentId: "SHP-SG-ID-558822",
    importer: {
      name: "PT Bali Retail Imports",
      addressLine: "Jl. Teuku Umar No. 45",
      city: "Denpasar",
      country: "Indonesia",
      email: "compliance@baliretail.id"
    },
    insuranceCompany: {
      name: "PT Asuransi Ekspor Indonesia (Surety Division)",
      addressLine: "Gedung Asuransi, Jl. Jend. Sudirman",
      city: "Jakarta",
      country: "Indonesia",
      email: "suretybond@asuransiekspor.co.id"
    },
    placeOfTheDeliveryOfTheGoods: "Benoa Port Customs Bonded Warehouse, Bali",
    despatch: "Port of Singapore",
    exportationCountry: "Singapore",
    customsValue: 250000,
    customsValueCurrency: "USD",
    statisticalValue: 255000
  },
  validUntil: "2026-08-22T14:42:14.008Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "CUSTOMS_BOND"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#48",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 48,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-22T14:42:17.272Z",
  id: "urn:uuid:019e5023-163b-744d-b47a-0f530b6a386f",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-22T14:42:17Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAfxfucNqbDoWa9QT5dI1BQH2GaSLozUtg2OpDHsXr0gSZWaGndhIAw1z-8k9KSUCbAD1UbYgliSwzQXM7ofKdmVgjgCQC3r6bewcBo9Vt0gAdjTIv7-8pdZbICmfmW30UuWHbVj5YIFnGZ8KUduUod8b7S9YaR3ik8W1xw_ynyvwiMBF6W2bSmB9YQLy7TA8AUtcvoYHxVOQmTcuV6PKz3Uqs7H6slx1WD9VAIt5af2hDie4SKFU4PQulTykwjNysf5gLKer_xiBaycpYQJ2NBfOmEp-V6VUbrxpX0Q-wnxaaqnB5Bnbj-q5m0O3mX4z3tOLpyb7TQwWExlQzt0_KePrIKpad876x-gpxbj1YQF9MLP5Q5gnjJdV5dxjUs5pOY0dszTqJVFHBSr1JgG8H2DFdfgZugYSe8BCN-r95QJycBbYtt69MvBV_DUkEPJhYQKRrhs8eNYp-fetp63lh0rF2ymL-HVnwOn5UiFOrBjDlHr2WU544UixmmBGTTknW2TXmB8tT7zf2TTVoOziSpAlYQPHVajTMhbbSJj1p5QV4clNA9TplKXOi-LmfUnsT7HrKo5knnh66m3a-ZRMJdULaoWSeh4UJSuXPRqWPbLQYPA9YQAZQG2Tpf_8ork7AGSVsZtR0xPCLFx8Czy-Y-jrN7GsiK2R7wJanx3bO2p2U0Wa2CE1S1w6Hgr5APxkIXBprsWlYQD81I9DXEmxeHR8jkBdtwojf5vpaT_M5TMLFgHwX8V_BbWtaeeNIQQI7pp_niGZjs0EPb51DXD0F-VgYPcUE3QxYQAc1nxQXhknheHbrTdbjdbuxMAL5fPdRaLBWXNBrm-PEESxyYElKS1enfzWmgT3SE-SXCJLa3PS1zBGj9zuc5P1YQN5yjLt1muk6csobK499obGc34551zqIlBvry9O3r4PMaVISs-xPs33HYXfCmT233X20qEOgDshiT242NrQdh3VYQGEjcflifutyukPMV2Zihbibft30XLReY7Am8rHskg70Qlc94hvlWW-02wGjWlzIva_zIBfcexQ36KTJnxG2ol5YQAcHmzconY1xB3jQfaQYtg5j3TngAlelJ86RdWShRqwXWnqSvGadRB6OqHah1fQrzcdj7eLUkOYj4-SNW24Si9pYQERV4XFDDTp9HX0ENP37M0gTTX6cfN2jgwnDHNnMwCeFqR0uRWGyTiNMFAnS0FjiSGhBWD-d5KktG6RebpFPYgdYQOJWTWrPo_A4nF3K9pV_V3ueA-O4SxkxaS_fQxJatZpj41gfQvX2QA69GCR28M2b9jQoOhwS6-GmLUbkIeFgOSRYQFZlxFvr07lkurChsf2j3vXoQZY2y3_RF8qvhL19u3kWSh0V7pL1CO5oJo94_u9EVmXOB3BkLczxMjzxGl1QJq5YQEriMYwLUVFX5rlD8BTpRldFSVgccabx4bOFUMb0jbuBXOcUXwvy6RN6bHdNjouCOusEpogzu45RF4Qk_JweHz9YQOkRq1yEs6fwwZb_uyyaMmhIzu2Sv4WysqiH6iO_kVdUxZhYKH50HNFqH6oqSra3-f9L_-kK4JQ8b5soc_d_WSRYQKMjRaBnOW00lI9080lBtpD0bVHrA34jDe_WZcD7o0hXv_mWtbEhg17fPIMX2mT06UUflZoUhnE58T98IbSNwlNYQAa1u4OtNQzLLkjHSYoHOmGSWHAW4eWiSrzsopP_WH_QCmneAFJ1WHYcYG9JTV5YXBrFN0AToYB_1zrjm_vNP5hYQANdSi3Kwwg_7PB5VFz4yaQmCfXmeXzlC-sBgynuHS6FpqOypUjzWszKtfF6lb_Sc9TZz0w3-capemXG-sjfeBpYQKdM1OVE0L2koPLNkQOhIO5WHH1tgYes1V8CKYGkYBYsQjWdLSQaJ2hrdU3x3dTprTU12PZxMd2g8BPk5BK5eu9YQLBrCXo4Uft_vd7Y_LMg6vR4ADMSo5puA-dEFLi0nkbGjnf2cMlwfMc2RfbfaCcX_r5xc4Oz-Xs6nl9egkDycr5YQF8Ja_l1orIJF1z0eZ3FG0uzxWU5z81wyKHd3jOGUEcwnCWAulUlJnW1WJxnb8Axd6YWEW6WrWDjQUdtjLVDxktYQFSaUCUvW_MazGGFbU_mQjibWDQI-pktp57-l_NzI2jr1oBJbqEh2p5Tf20EWEeaw5g6tjr9u2A7Qq1ggivclolYQCLG7iTqiYEe3m6oDTLcdWpydfX6fkvcQ3Pd6xyfxpsutG--m_IiPzY4qCSqItSabzDDQx--6vMSyVGReKwABahYQCJZTTWRtlAu_TrBCJMgbDy2MYHHuz0_Zk5HPEtfg-5Pu5rtX4_LoMLC-tWgNbHtwydEuEvwcHhH6qpbC33EXLFYQFfUHzQ2Yqjr2x6UOSw-acOxFxwk4rezDMszyJZJzry8wh3XCgk8o31wLXaMi2zlN38XUgw2vPLRGI7YjDlk0pJYQCh2ZkfvX_XKqpDSpZe8o-CfS1mg_gS1jTdH0MMNNxoFagn0x5z7TGxyt0RRnw8PizxMOBFtsGSHU5nEwBfcegxYQIvVGgm2HWjX42NopHIOLR8nb5EU5myTAtvrTMphSz0Vb7dgv6sSsQrIq5NGJSG6lU4MXK4MOx3izAR_77D_Oy9YQFlCBbZo837J5T8atD6K4MHy0N0tTefJS2iCeh5dZ0J7JNqD5ufwiwCS7TBJFzF7R-gEM9ZXW3tt5ROUmY_WWIhYQOAqck-Fk5abzGZu58omsFl-1DwE6LQAWYnmiGXessi572CqU-9iED2d1mqfTTABvs4JWq0wKCrXzkqWQciiKHJYQD0LRAd3ETo6ZxApU9ixkUeYaQOQ7vsoFffjB-SMDPD9LP3rZK2mZpfKBGLKFfGzdFU7nvNWzozKbktGu0WCtUOCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};