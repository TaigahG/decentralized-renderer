import { CertificateOfOriginW3C } from "./types";

export const CertificateOfOriginSampleW3C: CertificateOfOriginW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/certificate-of-origin.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "CertificateOfOrigin",
    documentId: "DOC-COO-2024-001",
    shipmentId: "SHP-ID-US-2026",
    certificateOfOriginNumber: "COO-SG-2024-883921",
    exporter: {
      name: "Apex Tech Manufacturing Ltd.",
      addressLine: "88 Ayer Rajah Crescent, #05-10 LaunchPad",
      city: "Singapore",
      country: "Singapore",
      email: "exports@apextech.com.sg"
    },
    certificateIssuer: {
      name: "Singapore International Chamber of Commerce",
      addressLine: "6 Raffles Quay, #10-01",
      city: "Singapore",
      country: "Singapore",
      email: "certification@sicc.com.sg",
      seal: "https://jade-magic-marten-265.mypinata.cloud/ipfs/bafkreieejqmmkogxxrcbvq7qr6544bbzaxzajtyaxbytg3tneobjbwnpae" // here will be base64
    },
    managementAuthority: {
      name: "Singapore Customs",
      addressLine: "55 Newton Road, Revenue House",
      city: "Singapore",
      country: "Singapore",
      email: "customs_roo@customs.gov.sg",
      seal: "https://jade-magic-marten-265.mypinata.cloud/ipfs/bafkreif3koc2fyphebpfpqht5nnzucb2ft627mh6tfhjdmyqlcp62rcxiu" //here will be base64
    },
    countryOrigin: "Singapore",
    grossWeight: "1200.50 KGM",
    goods: [
      {
        description: "Electronic Components - Integrated Circuits",
        numberOfPackages: 50
      },
      {
        description: "Lithium-ion Battery Packs",
        numberOfPackages: 10
      },
      {
        description: "sawit",
        numberOfPackages: 1
      }
    ]
  },
  validUntil: "2026-05-27T12:48:59.387Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "CERTIFICATE_OF_ORIGIN"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#6",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 6,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-02-27T12:49:02.935Z",
  id: "urn:uuid:019c9f25-39d9-7bb1-be53-89fdde5539eb",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-02-27T12:49:02Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAemp43MkZNFkSprFi_HMF0F_wz45BUOzcKdWOYKV-CUrSn0GQPY-eBU8GUuo-kFJEoUDQ_oDtX3EjVqcZQz-B5FgjgCQDEm5Xz0P8iQG9iliLN1gi9mnBbkY-LKMznZA8i4hPnGpYIF5iPUYk73piJDJc-cnPIDqGNpAZmQEvnT0pftTBkEaBmCpYQFcS-beshWhpQW208Gs18EgLgv-H7Iu9-PUKkAJJ7zB8Rd82zoDzMU4m7zVrq8cq019v-BTN1Ni47X3SjuTEOBJYQNhu6gHQ79xiZXB_fuzqn8eIXOakNvMBSSi9jfk9XP07AI5RKSMiRr6GPM6FnfVX3Js4fWRir9cZ3ThqPXt3VqZYQH0E0J6KBCv8EN0aSVZivFkrDmuv1bhogzzQe00y6oL9vBrmrpoj-wAuqjLwxVqwZgC0c_jYpl5f6EW6vTN4wbZYQKjF7UMxiCcd6GVtQ0tzEohYa-7AChOHqPv3YRgH-ARoqqcwHKFTCVEHHt1W9_naEo2FGoE4kgpt8hj12CnZzThYQOmRW1rGAWWkH-kt-QeOj9ROOVNT3Rx4qShLnvwsdmGF441LZmZVhUciy1S34hfPKSMZyIPKoP6XgNUxfX7cti9YQMF-zD4Awz51-vbBiXZHiw07fS-1YdJF4XYs3obeIUg7Obyne54o4ufkCchqKDsnQt_9yFaIyPtfIBKpf9xlpFBYQDTw0empHcJ2yAopMw12ZtWCrNJUaB6ebBs3UkXJUmdb_vvuwEdFh9gzOt74nP6SOBfgmn-N7KVp98kYLAwhy5dYQLTeuaF--KQ7xaShuVvC7PEWnFw8OjZM5i6GpFcFWScp8I4ykyS_sBqGJdS2TnXDvv_LYOTyHl-eX05tuAC15OVYQGKKxCnA6asWMIm4hs6Z_YzrpROpIAjEFg0vY1tM9D2OoPRmUS6sBYUlZldNjPMBl5z3GaYayQ6Uxj_7VpOBKdBYQCrhs6DX921MT78hMCZ9e9QcQWKlb-jQ1Ibp620PxyUl9LkngTOohc6y8eickptM-87TjweUOqS35VUnyI07OANYQMMKbQrslranRli55YKW6RJvClIzsGWQFAmYy4Y5cVR4lUpX-63-QSR2kN1Uvbrxvc69T6d76R3lwQaXML4YiR5YQKQjknJ01uKVdSz4bCJSMsJkge-VemgVF1GbRg4eLOKuagTaiGZD5uR-QkiFNL5IuOwd7Jr-bEJKpQzLJVTrcrNYQKlILmpHRF3Wi06E8DtgeLLVLbSLxuWWu4iI0rqJ67SAOujHOwfXFZZ2xchDXX5xdUs73DCEn5zP-Q_p3yntWTVYQBKcH1Rr3C8vHPicWQASED7d-hA6cCpPZsjpZR2UoXpTsZP0B6TTs8sfa1oL6302AITOkQXd-Tgfa9Q07xNHN_BYQLlbuu_XavCk4r9qflBSGa7DZK86sG3HzRbuGORjTo03aGxhPo4JD_CQy37M7MoOkQKsenAHvg4T_VBCtkkmmHpYQNdKKq4jJgC869rU9MAbRKj8pw-WlAgq2wkwOXpfKQV_NqEilg6FivqYlpIouQPo6Kdk6XVH_c2jXxnoVBcCvNtYQBQzwmRjZjMRJPmVK3DtJ6xYEc4gRpISVupJWJl4wk4UUa2fKpOv97PjI6G3rb4R_0rnQG1nC1uvRGXgJpR9tiJYQPSV5XXu-U3GGVtiziQWcBLZOxygfPL-dbyR-bwr87VtwL6kl0rASBR_BUFyPEtcAh3kQfVzIXmPPsQ4RSGSc8RYQPTLndvJcuH9Wuf1DLmqjtJKI_Q2Fq4aSI1z_REJDlEYqVe9wq955nVpQk5htExKpijZT5az6JcSYyQO6D7FKS9YQLftf5vPkBrlt_zSZsrBjGw6vPEhTY58PZOGPcncXvtx43lxvW77-Ryq4yAweWiTlVV3OEML1uXqebjVi1FSfV9YQLhBaGoX9YDhse7E-hjmEhIu0fdA5B35YI8eGET-gH18x3RxjRxhck-IPLOr-ke4i6s8ogcNmwUf7z_2jszdoJZYQM7TRlwuJFtZZzbZwFpO5J5QEBFk2_PKOX17RFJEZl0NqTqc4ynEkVFCwY0N0ekU11gQmdHxZlTuV91JHZM2t1RYQJmhVonRXJdMsmQZ_R8BV2P8L3Dx32ivpYF3gju8TA9EJ3xNXPboWdRA8h7zYw5LnccxbeD3Icrq6peY3CRqTYxYQOMw3M6tOLjQ5JEAPO5KKO6FfPsjT2gaVYICicaUe7vkdi_yphYVL6_0xuGh5N6HvaYq9z_GDpyDA0tWyaw_QA1YQCMQ3tVXbl16vks5g3jXUvdZK2dR7cDn_CEwI8Q1r4YaqaTwRdi8pcvUkEBRwuFqxN3sNsSO7IP2FObhUTUo1c9YQBHmLdvWOIHIbtaDhjiUt4zUc6_oyyu1Um6J1rcgtx9Ybd6J4EDjdM8G7GsI8Xgxv6T728ZdnNA7tcKgY1L72g1YQHMxrUYgiFJuQwfgVl5Tx2KLwRPGt_r4bUZUNK6WC9cr3yp2k6MIyIOQUSyflYeTL2xPuqKkgOGJiAHpDIX9fKNYQCMf9-5u6hKLFi2MkJ6KLtGdkxgg4F0H6YCN8PBz7hYnaevgf7UWwPNVLK1c_rU8P_DPDGGAwNScZvyU-p7p6t9YQMMYxVwTV_iBviRbnNXUmqclplXhokJwLaOg0hCZB3IwAXMwZMM3PnTiBGDnvfuYAsClfbu4Bo_gqNs6GAKY8DpYQDKENgE0nWji5GeAWAscgZ3yHqlas0bjO9PO-ZSEFza_7UMT9VOMv5UDL-DmRVbvZSpFKAWb0GvcBzBvaWXQd2xYQJOq_IPf1mtXUTKL-LtHiviN5dtbUWHXmDa8ij74uHmyw7w7JW8mDqUJ5UPSYq0Jn0yoB317mE-W-ebdWxdqRoZYQPo5SoOLooZrqnliN6WJROwS3dSQQwvUae3PkE4sOORTYqXcpgyr8mtabI8PB8MisCAcczWrOSRLqr9qeSnYUTFYQJsysaddfBxi_4XQ3h7q3xfMgFdnO2SGDLKW1alj2HaSIT9ezMe1tM3j71kVRkV6dZTF3x3JeYz_zudeYSFRPVRYQOVQu_bF_cnaZFiuE64WSxsnxHn2i784J7XM1_BajXm03WnxHWL_ofjaEwFHTKIBTrVtPU281-IQ3DEJO190En1YQA7P19iVnjmvW0AX0tHUQ34aA0qPKhK1gdNt1CHBePnCycJNSDJr3q9zVM6KTaZp4eNDm_VkJYlXtjxi55oATJNYQIrabgZ_9pGGbJak6SjLc2t2R1oCktDBBK-zyTUNOEAhr_O97CiOiTGL5FvVEekieiffzXy-MrZbCFL1LCLCo41YQHsC_w37S7YXJouJ5vgGhNYkdW2j40lxwjoyGP97HzE-8wD-wO6Zh2fP_Td9p6Z2HIqiPSI4K40f7wEGAPPnFwFYQOxvqqm_AAPwZcG1k8qs1rUYn0l-_CdCznqkZjHgUEj2trf9YEKI3vFX-JMNAcxQJDyGmS12SvAJAJgNLPppHO1YQLrfaT6YVrbHu0qJEUaqfu6PQXzbKtOUlV7G4_RfNwKKnCVkJQKei-LqqPvUBqJR7dcxTHTMwQfPra8nYULmyE1YQAxP4utq0ZRAnhmwx-Asp4K9CCRuLDPFaOb1tWPUSDJ_3saor8y99uJmkcjMNI1ywSMJYtjwKSqb-viZ6N6McrhYQGS01B-tY6Yc7YWZ4nqZF8Mwp7RjByHcBVZjgflAeYvILHJKgh4ptNZZAcd7Soj8VpvlriFdjv4zg6My1Wqcc75YQCsICVhqrZ4kL5j3mQd6J3gLJKcIefVEa_NG3J5YeG3vWZtOAP2gp1J9zvuiC_a9oSRsnvjp7eNpAAGBqPF60SWCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};