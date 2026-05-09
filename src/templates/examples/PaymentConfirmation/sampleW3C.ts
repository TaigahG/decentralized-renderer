import { PaymentConfirmationW3C } from "./types";

export const PaymentConfirmationSampleW3C: PaymentConfirmationW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/payment-confirmation.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "PaymentConfirmation",
    documentId: "PAY-2026-001245",
    shipmentId: "SHP-SG-ID-554433",
    invoiceNumber: "INV-2026-883921",
    invoicee: {
      name: "PT Bali Tech Importers",
      addressLine: "Jl. Sunset Road No. 45",
      city: "Denpasar",
      country: "Indonesia",
      email: "finance@balitech.id"
    },
    payee: {
      name: "Singapore Electronics Manufacturing Pte Ltd",
      addressLine: "50 Tuas South Avenue 2",
      city: "Singapore",
      country: "Singapore",
      email: "receivables@singaporeelectronics.sg"
    },
    accountHolderName: "Singapore Electronics Manufacturing Pte Ltd",
    monetaryAmount: 250000,
    currencyCode: "USD"
  },
  validUntil: "2026-08-07T06:00:19.419Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "PAYMENT_CONFIRMATION"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#20",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 20,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-07T06:00:23.613Z",
  id: "urn:uuid:019e0105-e343-788b-ab2f-4cc71fb4aa69",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-07T06:00:23Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAmRO5Yl442qi5vQs6qScBpFSaQZKtFu8oIOy0T1j3eel_qQO2KiwOtBwYLlbQ_0GEzVuTpJNQe4j5wELxm7jlkFgjgCQCgBf1w_cl6hOu9r9E3P2hOqLdcJ3JQe0o0w0WAKQ7kDlYIFZjlaoFRk1dGAGrvAJ0a2myHMy4L_dcEsx0gI-XgAA9mB1YQB8bkmxcVOpsy2SwwIO4_HKMkgr7LWNjkEeo_fANr1vW9SaSZomRLgdwB2wHdJDDkqiQgoUm5n-6qFP5ZmcIMMRYQFutBjJtgItO4Wfix8bIT3XN3XU7j7nmMY8TvEnYREMgNqlTFBsWIzFhbgW-jMFlGWsGwsqDLjOmrH7ybciuj91YQD9pQ718ggh45B8RzpMR7_WX_lj5P14xXbrrNtaezfV7yQFJidSl2zrO4WQ-ap1Lf0cnjrSVv1KdHr2a_oMhMTRYQHuYiZpSGWf-nmUtE-kZGNp9Vr_VN7JHbCkz6Ss3dPb5f9lvNQ30YoaLbxQBYL9altppc7MLdd3tt0-PYF9BGMtYQKeUVnYelqBdJouGF6lVm3FTeczWBWW_M2wa7ofrMOm2ri2heYnNh1GnJpGFRsHaXRB8ZeFbmLzZGUhYRV2ylpBYQGR5EEvI2LZfCGZbyxm16okBV5fgn0SQ_YensAarmYj0QGxc8Si3RXX4je14Lla0-NTaaTHSB_xP4shKhuJWmq1YQCyBjAbf3Yo9admDvrOO-h93t-_-KoCqDNWI-mKW9yXq6Q-UoOz0Qxyu037Qq1rxd7PBa0_PkCktGc88ur4k2mFYQG0Jlq_l8QdKetdlFOSYtclHyO5nxmfankp90QBA90sdJAXaksGn0s2zx8LgQc_hm9oTGJcjAYetArDZiZ5cK0ZYQErZmG4tduE7uKfeL3305R5S-wXepIguFEDGKYa-_EIxNKY4XndS0Jxq3XzLgZfMwnvgApL7SXQooKf6JZXT7rdYQE8pBmavCBNjL0quVsn43dj_Tlv1iB-aYFG4qctresE-kDL5nXPmt8TI5Inrny05PfG87-ZkLD8oKBmQh14ad3hYQOWp4x0TenzZjUWNmQYTW_vLkY0mn9SIls56WuQ_EqSOOQM8Sde8euKJhzNRKoqQhkIGSRD2BmOVcy99lfwtRoJYQNHEOVeY3LvRkaZgteMrOAKUotCAeaiAEbOQ6hnc3i6hF5_u8iUsYA7FRyEbQbW2CxWrw6qpBEdBn8Sx5RNY5aNYQBHpiOCGCbP7WtuGsWR1tQeOdhtZ4R7mT9akBgwhLePp9GretLvO2zpnXg1v9C9SBSJVc7bLeHTud2AYs6cPlvFYQIcmQyaWHZ1K4zZAApjKP7nnYxBaZ6dvR8vKMY4WVLMsNbXgYtwzIXztr_rj_cnd3dpwJ_YJFzpnkAPNY5dD-h9YQDVB7ksi6ItSCYD5DxPxuW2tuxBwJC6EowXB9HUQQM6-YoD0pjopSgb6lasPGu6EbfTqUlbw2uOjSA2JH1uMkBNYQHpI65UhvE_0EzxXO3IEaGJQpqB78clyXC6Zb7VkTPByU35WyBR8PLP4RuYMz1HvCJGAquu1rHYm_70nqEacGOVYQFAesq2D_M49DrIzQZPPMMINstoT9Kp8YdtFAot0JVPx36csSxonhPd2SjZwi_sIKqlvCOtfiSBx5sh72V78n1pYQJQ0juHvAf4X1Vq9mWgv1Avqa_A1fh4np0iv7pVcZJchn4rwRis74kakU4jVqBeypX_X6g1umi6H0AG2sTL9VrtYQA-f-9oR7RLvXV_fqgqNwBIlSlnm0DH1TgNauf_lVUSWeXoqmjn08bhbPwomNkSszQBOMyBnreQK10eSBplbDphYQPFfc9qumRbc4J2eEiyfCpa7ZjFhHGOLRVMDRuOHwwkZzAcDkSb601FvjUpp2armMzBe8gNItumPlEcBcMQgao5YQPqxCPIX4bvUsKULsweKZNF78CecBjzRV0s61YndAntaOaBECVpX7LivIL9bjOKaw_FkzLqA6j4_W9_Uh7oUV7RYQBiYvfH1j-lDc4GWsx9YxzrFV-nIj6vWeo_bHTwodR2Ode_3YX9RoL2pBbcMH_4EcN6Ms6qRd_9kRr64AaHNFotYQNzWRxebU5Nze0b56iWbcI13cF_K4K7ADJK8nXjh5iYNIDXXvFQFytiZ6E0YxHh5B4ygFJypGehJXyF1x9vezq5YQDQKiPBitPclnpKLjtCPaud0hmiKv_KDqH2pviKgOCa5UH2BHkwgiesZa-5_jIJFuMg_sFTPu8hRCOt7TwVSxT5YQEukpBAIt_NxlS-usdg2J_okKQ7dWUCNMfcRaPXDFqrqLpeN_f62WX2KeIuIvJrxD1Z1sVpOtf0Ljs-DpKe6IT5YQCX4oaAB_nnLoVYPh8rZZ1EX96ZJa-7koDHFh3xXDe0F9A86dEg6KttrN2FVQNHK6RXrrrfSSA-fJGeaX-kmoPFYQPoMsBdJwWcJU-JsPjgzi8GoRSX_XqwX5h7x5m0RNFoydk-YhKCZVsmEEgYclvc5CySsSOkqLva8YkL9JErO2hVYQEH8nBNpH0wZu6dlkNxQwLfbFOXKJWpnTm4drfj39lt4xDRVJcTHsmsKPu-IwRfiiEz2tT4ZKpXKK3FJd1M4n9FYQNE6aPmaWJwlKIExeCWNTcc1qvxQnqkCgLYfosl3FsMZjowMka8g4YFJVkgJsG07fCLDOdHctfB3CjuDBz9Yi1mCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};