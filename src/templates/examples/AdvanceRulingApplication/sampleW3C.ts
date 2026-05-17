import { AdvanceRulingApplicationW3C } from "./types";

export const AdvanceRulingApplicationSampleW3C: AdvanceRulingApplicationW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/advance-ruling-application.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "AdvanceRulingApplication",
    documentId: "ARA-2026-SG-001",
    shipmentId: "PLANNED-SHP-2026-X1",
    documentIdentifier: "RULING-REQ-998877",
    issueDate: "2026-05-11",
    advanceRulingApplicant: {
      name: "TechInnovate Asia Pte Ltd",
      addressLine: "71 Ayer Rajah Crescent, #04-01",
      city: "Singapore",
      country: "Singapore",
      email: "compliance@techinnovate.sg"
    },
    advanceRulingApplicationRecipient: {
      name: "Singapore Customs, Tariff and Trade Services Branch",
      addressLine: "55 Newton Road, Revenue House",
      city: "Singapore",
      country: "Singapore",
      email: "customs_classification@customs.gov.sg"
    },
    natureOfTransaction: "Pre-importation classification ruling request for new smart home networking devices.",
    goods: [
      {
        description: "Smart Home Hub - Model X (Voice controlled, WiFi/Zigbee enabled)",
        hsCode: "851762"
      },
      {
        description: "Smart Hub Wireless Temperature Sensor Node",
        hsCode: "851769"
      }
    ]
  },
  validUntil: "2026-08-10T06:04:48.788Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "ADVANCE_RULING_APPLICATION"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#23",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 23,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-10T06:04:49.599Z",
  id: "urn:uuid:019e107d-0640-7dd1-9b6b-794d2972b40e",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-10T06:04:49Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAMpWPGL7wFGw0oqWLw1zRTk60iOMksSDT80iYO8RiNBaeFfMomVPu43YeqO3FJ1LcKVjr-3jlM23F5xzQZ_tYalgjgCQCnZIpRbhMGr7mL-g_r-VADAeeSJLIlR6euaqzVv90NfxYIKVWcW_C9cd6hdZYxhJvys46z-2Bx7U5Cm6J3lvJE8ZQmCJYQGiNEFXxlZOV1Hadt3JtLnY-3gZkV9sqyIV4vf3BpP09Dk9BUBBJTeDOuarVxeN4YuuG7H5gqY2XhEe1iMrHcwRYQKfASN63oizFGE53W1IvKQmzGiTYeSEt21WU40KI76Fr9o0jdN-RGkwtSNfGaoMX1ICzhTEALrYHKFy_uIOiUkRYQPu3Ap1SSaMHUynZGtuBQFHIYjQx5onv3yJ18XOQ3kBsgv-SqhVfd-I-b8PLvNoKPFXpFR4lZzVtUIkw4uWxSDZYQKPqPGMkPKcw8XlwPEZYqaLPyQcbuZVkOs5hSyo-VJPgGavMSRDYPwh3_vy8T3BRyklmPPnF7g8Y29ocLtwGHrtYQHF_qoPgyq8oJoqKynXwIgIABYHb71mvEzEGppNo6Xhq9EoH4mMjFgcGIzEmGfOm4iNE86MSkpz2u8SDlHl6xn1YQO-Kv7I0ztgWgnUdsbU3YPwEZhOAlUUaU_D1M5DAs_I0c7BtjDhP757vcZQDGs_SJaUkcBA2-x9Hv1nBfmnGOjxYQBUYdNIn7sz80oswptO0Jv32P64DDOgC857R2IsGANPBL2hKL2OI0hsvzjcdpDtnxglKp88XfUdjwiwmGU6UZgZYQNJDrZBCNDQ4u9hN1vTcqa5YaVMnQUXJJbr2GrZH-puXMG4fS4mV-6AEenzaXP1XpTC4c7uujRmsU_CTHI6kJUNYQJNBqqXVA83lxpq5vOQZbdw5vsQ1pcHend4BcRTiEmZtAMTPRLERrzYCGrttG9C_D5xtM3av8NkFPDFD9daHWy1YQLz6F0MYpRdKOQB2iIi5lPSBbcPG9aAgt-Oztw95vmoVIXdRRl1nQrlNgKejudYK_yD5W29-_KEV0U6hZt1OQbVYQCDI4zNSJOJYgrPXWbMM7fb45y_EFJe2eLk7KBa2zPPOcpYQMffye_V-VvdmopFRpQvLhc3ksH1oCNptC39WmRNYQK_W-Ovh-EkBDnpott7ikWq-5UlqzhK5DEsVsGO5-L8U0RZDxeH4fxi23TqrCynHFWqtI-EcVWGwRlCLSIr2SUpYQKxifsT_WPMJjkeCfC5Jo-Zo1JVWa1gZmsG5p1DvjQDNcy9Un7SBVmtY3yByTx1K20Hf_mrEh6VIYCgcUW1aTp5YQPPxZmxDwdL31QNfi4molU-0pXat5wlaLh1byWrT4Uae5rGBD4dL1pDCkN1aMAPe9ZLmPnlXF0P7CBkq5fQ5RMRYQMhFHish7K7s97TGIVFVHFNRCC1RJgHvGxoDOLcnRbE_xHrP6TfT-K7BSUhjT-JNY95rtRIHwXI_DH8_jRfwiUFYQGo5dtV9eGFIme5jFcTfqWf2XI9WMpJ07RlxEMIyHvch4m5G6t9ry8Hq503nLKbDocNWm2CbavIuyWM8TNW_z_xYQCIXnOa69StQDjXCvniDwBqFMxOhKS_vPEn_0dhZgGB0XlnLvOBtFnd8aseVdECGkeoQ_fASPQ_P15AdKo1lyvxYQEP407r6yyQI-DuR--n6BWVtVDFU4JR5oIN9Tmc-8FhxmGJmP5njeRZ9RjNPkrL7vBXbwXRH35bVlZMx1BLqo9hYQKre1NMdxihHpgtn8UEof69xHbPjH3Cn72peadVum9BaRW4kShaN65lqQKKqUOKtf8mbfRMxLmeKwh3ngnc6Y6pYQBkubQlBLwYOrsUrIKLPInBgf6dwCQDXG2XWGjM_LEDdCn8WXhrF6CRiNsbeggZ9dGe25Uk19n6AtXzL2CU4SSlYQC61mZ20ZABfgx3Vgpsnzkp8kFHY5XD9txbscCMeUMrXgH_6bWsW4M-IgcEn89kUsmaHzKvjMuwpS-XEJVnbIbhYQB-wqlIOiX-3cL8tJpD2sF6TmBkIfEsT6VHR4cveYYjX2USv-cnygpi4G-DezCUvAuDi7iHn8utA9uoVICVZN1JYQMa7pCO1kIFi-S218_LlQc83wOgb1avGoiV0SdNhiM0q2vkfRD0uF46OfnA2NR9bQ5ec00tGg3RAi7THdZ2l8_hYQNqJJdhjRbK8AI95o1P40uj_KI_jMcArryh3z_4cS0MKYGLISAoxFe6rMOt3aZsx32wKI3L4-wO7VNA1iihkus9YQDTGs6DgU5dzEd1wi3T0ARBeY_TRY9CTK_6wrnoREja_sN-VwhiM1qQDLgyfr466FaJQ1B5Kj7uerllmjiueoqRYQI7UidAWRF1-Wm9MLEw4LdIXgHw9DUDcKXuAxzHEl5UU_QAfAApYRreeEF8BgNAs3SWEQM4wWuWMBGSU3K4iLFxYQG_mFBW0ETFvhy2zarloaL20b1TqibyZpUK13Pmo2Uf2hm4YtfnpjKIaO6jlsYbP21Z8m07PgaLbvwSNu2rlUmJYQD0yRy4l1Re4YUGB_l81ieihCzK_eTmYgV9l2-MwRLQMeKED3xMS5z21x9Q3v-3LfmEEaq-ipnJn3tPvZpeMDJFYQBiUBzANrt_maIWqRUUddSNaSszt7ROVie5RCzQSzfDKkIjneSXIpO_OoF1B5jY_0yABxO4xNQqq4fgz3pxjjU5YQBDoOJCSvB-lI-xAn3yqlRpRWJiuATvUSujTSfmKxx4d4cAYg8E7Uc8PytpxNqvG-c4vu6Iv3OV9Y33177-vkvFYQNSZGA4Blf4iaoNIJXPqL5hfpMSA7oYAga4oroWxWDR6Y6nOHXluD0nTZFOIlewxWkzdxDl1FQu7bKQFc7Zt6ntYQF-REWEZWXigHvTVfHvmDy7yKWb-kIYrwQSFCfJpcR9a4aOOrwkW3PBWqm8i1kHwIpISzLJdkQs28tcQ9KOAqIpYQKQJ6A2O2R6u3zzsGblFBehaUy_fr61naN63LWfrqjj4SFv8BIK9NlYPyqyRyz7hbOyiBwZfSRVOoLYZhCtBPuNYQKD2oOTgIeqe3OMmooqmveVe7XAzo2W5Mxo2ehGmK193cg_Vvtcxm5H-AlFPr2fobVM1nzas1S1xC72WRokVPCeCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};
