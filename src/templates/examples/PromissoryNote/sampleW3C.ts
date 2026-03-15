import { PromissoryNoteW3C } from "./types";

export const PromissoryNoteSampleW3C: PromissoryNoteW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/promissory-note.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "PromissoryNote",
    documentId: "PN-PS5-2024-9090",
    shipmentId: "SHP-SONY-US-112233",
    issueDate: "2024-03-01",
    paymentDueDate: "2024-05-30",
    payee: {
      name: "Sony Interactive Entertainment LLC",
      addressline: "2207 Bridgepointe Pkwy",
      city: "San Mateo",
      country: "USA",
      email: "receivables@playstation.com"
    },
    drawer: {
      name: "Global Gaming Retailers Inc.",
      addressline: "700 GameStop Way",
      city: "Dallas",
      country: "USA",
      email: "ap@globalgamingretail.com"
    },
    placeOfIssue: "Dallas, TX",
    issuerStamp: "GGR-FINANCE-STAMP-AUTH",
    paymentTerm: "Net 90 Days for 3,000 units of PlayStation 5 Consoles",
    monetaryAmount: 1350000
  },
  validUntil: "2026-05-27T06:36:55.607Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "ELECTRONIC_PROMISSORY_NOTE"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "88449241b36a25ddaf87c5b463f202da46f599790050b16aadbaacd158466f0c"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-02-27T06:36:56.306Z",
  id: "urn:uuid:019c9dd0-8c79-711d-b535-d03cfb1dd695",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-02-27T06:36:56Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAnadwFr1hGTlAjuHkNWgDVDfzD4gzVt6xeZzZAjfF7EyizfNWLXOCS5KcsRoDHCA3yHOIqd3Wts8DX8qgBqwAIFgjgCQDfOhzFtCiCJaBznGJnNl9HIKPJqFDTWJtA-Pe3_Cxeq9YIBofwFe_Mzm84m8fop2Zixtq8luduy2pzdiARXD73FXPmCFYQANKElWYM4xrUu6HNtWnfFQmMp90mKE-3r6PgqABFuFo0VW-k0u7W977l1DoFUD74pc2aeGR84usAzPThujVjfVYQEhAJoWAhJGnNzyhenKrMkiVvbVYSjsHTxtOKRkGtU72fflseELawp0fZnCOoXQ1EtryS7oOmbh9eBK_EfUolZdYQOd-GZfvHgGryg3vhRwkGDvHk1X-bbREkqe26-sc4RbR39vrvQraXkxS-Jk3V1Dm-7A44a9mSCb3B4a9cFEJnf5YQHI90hehVKLSQvs1QEg_164GaQrkcnYh_eOMBL7uH7rz7Z3hzjJPwtbTg0c6xXaADxwHqJxtXe2a7k2NWMHtfIVYQEAFkzJbSi49fa9pJwC-P8TcLK3b34BdwvuHpjGh3Didw7FaPGU4tAPJQkNUGNicdvzbu6tYxtvltt64vkt4xG1YQCnzbxPaqNrMBIqFtPgLk0iXBdv__wbTscKHrOqynFD1MpnZtHrykpvB8CW7SmHRRn73Sb_rLKFoFWnqcQt8FUVYQKTpzizmvNWgdRJgMDnGKE5Z-6QIIVdqiLYyRtBqZ5kZFbMNHKaCovhqBNc9zauybLbyrmp1P1BiKgLc7xk5I0VYQMuGMSlLV9cVw6Wx0ppJYNjY3aiqUx4BqKuF8luLPLy6HxxHGkVzdWPnIaqrPMUw77cSq3NWaXxjI8eVd5RYUZNYQIzxESpHlZ-uilrek9brItl5hwhaR2BF9_H8WonRkwfvAjFxVGuAy6fjl8bFlZPsvQR-7vF_y4fpbnTmszqwVL1YQJ3XO52HfODHaOeOz7yxOiIeqptUT2K7YM6RKiQhJm4DPSFpUMRWsh6MUwNGiNJCqbg5iSe79u_DO4Wo8lGKRyVYQDEOMdO90An3jsbDZLFnkLpyPZCnrqGRpcygPw7X1XMHit5CoMxaMP3TBUDoD1yJ7RDekWTP2JKV5bAAL1XRWYlYQK2_Yec_1AOVZoQzkjdUfmCBO1x0jKmWLALECKfEtmO5fbeqKVntj_uyw-FaTE38fnHrTbAIc2tGDGqrDxLf6_pYQNpSCYmdemdSMY64rjLgzf6TnRv4aaMCXP4WufQ6SahWhsNMBWlcHa61hcenZoHR4EdvY-B3DrdDZ7UbdqbSB6pYQJIUDlmmYnvdOzoSbyqVhqeKuefWJjkuEqw5tZO-pjxXf6yaQmRZ5qvNfRyDWuBeDVndEHYzqfSd8nIf90vokD5YQKYbbmg-cVgkm-_3pziI4uSk5dumoSKwf39VUhWpq8gHWVoiMNHybvyQcEjLJGU10_nfInkRHNgVDTaytx7G_itYQC7y2tdMxIdmOpQ0oIQDlpJ476IZ2yCVVI3taQd6W0vj7LxVJgDndaL8S08JktAOmPrmimimbdm9fNvCu0nG0GtYQLZFRUJavsoUWCFfv-E5xOBRqFG4xfLiQ2Onc8WEvUDDCcfWXrw2m-euzsEOjt59LsxJIYBmrpr9KQhxl5uvBx1YQBEGIoV9aPPVhQuhVUl-cA2Dy7VPItr85ivOu-CSsH2q5-O_kunpmU9_cNIhQpq7ZkVclseRl6h7SsNJNfYq2mFYQD5SQpxccHQu1u3hAqOkZOEKto06apIGFYBMgT2gWd4KvYrhaSIIfiVxDfDTZl_xk7WbI1U9FmMKFxMdNoGAzX9YQC8nkr6oTruHbV6IBVckLornP2yqAUAkuSpIU29_IJuTWgZWHnz0aRMx9VWCokKbhZFvWO93cv9Ky9HHgHkRFaZYQOgrrBb77tOrrMZ4tgZy6wTIT-02uSqcNTcruyp9cEZM-qGLbWFJZSaGTfhiihki2zOFxyZzg79GVoP9UDZSRupYQHR2oUv4g2Np0Ip_1nfdnoHaVhVhde4X2tbYAoqtFNmDve1ZgkU3y9UPQdpajzf_Gfb4q5rAK0kF_Cz3sprCJSFYQJ7jZT0TPNlQJ-UQenWy_xvy6nLSBYWaV1OzZaaGJ93hadhlUGTl0WbfQbkrdhuyf_OrKcrff4BJg7KKzLZuurVYQHeZnZmnhMo5mQli8SyxVo-MXvE3ERUfWythYiKoFfilgY8l5FTWLRO1wFzh-Tqf-A39pZO8ezRA7MxmHQePfepYQJsoMCw59nLcfmY9z71x2wuZjcimsPlQNaQiYBMAPZac1B7zZLLXAGpu6ywy1tPN3hpbvwfc44zbttO6YwfbsyZYQDx9zdxh4X9mr1zKI9BgcfsoEX49o2svIdSFbeIvqj0xZE4E44Hm612KAn7ji0IPsSJ_4nqi3541rc_xFytWaQpYQJNgZFdZLOtrkH7qhIiP6hPa0SfBZvwUvC2CVX_RY9Pz5MGwCHM_tKWR6ai4cebATGfMLF58Nm5iodjk1Kk7DyZYQIbY1mA1ohnxLock4Gf7QZgjTwIPxBYGhpUAz8dIswJ7pC9Pk2cD1TOBD8-JQ8aL_tE4l7cNiG-zQAa_J0vPoqpYQKo7FJkYixYiNh98mFJWYqOFTzT9v-NCO1G82tLqt-iUvsuv4cNOjtVslJU4U3HnhV3r5QxxKWRrODLEB16o0hRYQLDTm9EtPr0tXNshh3Al3ogbjAKITPaQFNckHdClNP7TLYyRS4DPg3dk0CgLUoM7CJgU4NhCFUO8g-gECKs5RYZYQJQRJApo8Mj9pXOv_uxik3t-9wXfO6s5izNbOQBZqS1dgr1zTrPeDim6q4xnIGaC39j-iwdxXWowbL7z-q5sSDlYQB0KvYHAEG3Yr8FNKKam5A-WjkbLHyT-_piW_d2Ir-KSg3ecyJexLxGuguAyFUvOTB8Vm8Bxxe0RJvAWx11kk3FYQLD-uikpmRJV48h3Tzdfj43XW7rTKQr_OLahFWHjt0cVHv1z8lFrktIL9aTmLYj6xFSo-IRSJ_1KVIJW8e5lfsSCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};