import { EILIcenseAgriculturalW3C } from "./types";

export const EILIcenseAgriculturalSampleW3C: EILIcenseAgriculturalW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/license-for-agricultural-products.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "LicenseForAgriculturalProducts",
    documentId: "LIC-AGRI-ID-2026-0518",
    shipmentId: "SHP-ID-JP-445566",
    documentIdentifier: "AGRI-LIC-778899",
    permitNumber: "PERMIT-ID-2026-9001",
    issueDate: "2026-05-18",
    permitExpiryDate: "2026-11-18",
    permitIssuer: {
      name: "Ministry of Agriculture, Republic of Indonesia",
      addressLine: "Jl. Harsono RM No.3, Ragunan",
      city: "Jakarta",
      country: "Indonesia",
      email: "licensing@pertanian.go.id"
    },
    managementAuthority: {
      name: "Directorate General of Agricultural Infrastructure",
      addressLine: "Jl. Harsono RM No.3, Ragunan",
      city: "Jakarta",
      country: "Indonesia",
      email: "info@psp.pertanian.go.id"
    },
    destinationCountry: "Japan",
    exportationCountry: "Indonesia",
    originCountry: "Indonesia",
    quantity: 10500.5,
    goods: [
      {
        description: "Organic Kintamani Arabica Coffee Beans (Green Beans)",
        productIdentifier: "SKU-COF-KNT-ORG",
        hsCode: "090111"
      }
    ]
  },
  validUntil: "2026-08-18T06:06:35.766Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "LICENSE_FOR_AGRICULTURAL_PRODUCTS"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#30",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 30,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-18T06:06:36.747Z",
  id: "urn:uuid:019e39b1-88cc-7775-b800-9f48723e715a",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-18T06:06:36Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAfOXEx0pmgENkp_blWR4O63Z5yYEJn3X-5WPAdLm826Pze--xzUXQzpNrXNwPh7oMabgpPKDGgqS-SzHn3ZCwpFgjgCQDeTpUuQDPA81jwNo5ET9z2gM_ihUrLrsWF8kip5tYTDJYIPixK0NiqLGuJJYmgK0yxiKffP3-ZUQEWCiWPHqP_VJLmCVYQGuPX_rQjV4xxS3bZw9Z4DhSvksWbbHCdVjzvvwYWJ2Re40cwsrgLSY_TEKvV4ZTeVK80fGHVBzLZrUvNwnYSUJYQAcUp_H4oXw54GEu9Vfx5hsd833MvuLAwCKsQCCqsNkkYnkRaCEMcNVh0cbPWYUvgBcPxbHIeitNs2aFNbRc8rpYQIUj9foKB7ZOosBUFA2AQkZw8eSQhopDy_6Jau4d7ldB08cObIPczfJvRNZ7_boJvCac4esvlaJzcRKAQPs-5ZhYQFPTvomXkGPK74xy5Ta5iB9UmVdvoDTrZEATyUdPZCmMijgZK2aQKxW-k33MfDpmKD_uHhqB1fsoQ0geyVcZt9BYQM-TNjv6yx_37hcQBfUc1Q4lfm1LjqFw8RlnxNXmFjeLbZTnRYzFAic9IxJbTIVje8KnwFoMky2Rn-n6oLmlPoBYQKxsCpt0-q-RBVNY2eBSrAJSkjzL_mniehHQ18grWANHnIWUtrpX1Zkk61y3JMncfxrkZnmc9ev3LVkyIJKK945YQNwquSvSCuABa1TgrvrZsbpq07gDFNe3CjhAkIdCTSWm13f8BC4qhRYtnFMT6KZaj2IuABzRfhH5UGJ00jjWZKNYQGLiCl9RJVYB4JGhlzEF97cxK3Dn3QZRMpzQokUowRKNljf13CRrP8cboyU9AaDECrbU14BjKxWB_OADv8sYTq1YQKtutJ5Wlre_DwdPwlOvcr6PL6VjB8CeR3Y_ccdZcxd-mkAOkQc469X8zMPPozKrwCxqQql19Toa14Iq-ruG0TFYQB7OVthbGA588M4wZL5FOPXzlxsU2tV4J7GEbSkyYdbCD7d-VVFUz5r_pcz1kozDG-SLhApnqBSLwfuW-ZO3I4xYQEwWwrEKiF0ChAv9m9p7w3DG_leGQm3XVp-EmKWVnuG2QMWC-QqBwygQ8E6zT3fbthVAaQVP-xt6jtB7tJSDl-xYQM9FBnM4khZf7KoYlTsBbXEgZq23cVTvWcv7jF2KXL1TMcVErPwt8X0YjguoGrEG8etBoZrXnmMXsk2mqitplfRYQH7_ShMC3J4sI5cG9Z14m5YV5GyyHDt4--UKOPECy7-_yjGVoXmijrpxGEyynZ93KSs0zSqbvKT8GF1gOYIobktYQA2X-ln2-UuK4SPWCttBfdvIJPvdjb9eFwk9Z5TVpVvHEzJH6dnq-RJrzFau3twrvkHHpMDMBqN-Tb57E4l8nFdYQN7mQli1JK_qmcu3pzZpsGq4mMX1a-gOMOJbFMS4u-DZAA0nZe1wy3mysh-PRcJQSrqtaym8xFE0gI2D8g5rxRpYQCYmOEKtBiS7juhMa2JBChNa3XAOxT9H3sLGFsAM4PaJzEWpIxSsLpenLwG6mH48xq5JrrQOzkqyLRx1xqp38odYQNK04PrxMi6BwrfmbMVY4bZXxJ5EtUkJyM1g2hBhUsi65yqPW216ICS_8hnX0uZ_rGEXFVQe2Tgltj0LA0YNeoFYQFR1NX3qj-EdAJ0uQrWjyg3x6wbxdZFvfT_hR3IyJN7qszU6pwNcKp9c6DhDlAUcuAFPKxCeTRsIQHkaI7xrcqRYQGYzMLnZmDLM78qLkOxwDhEdjgBdgui9Ftka-AC085tlmb8cvZtW6DdtP3M02vx4LgfLI0drzYW5M0568PFCTt1YQKfduvzhKdAPT5PozC2tPAs_hg5Vka-JnS_t-sGHAMe-28e4cSv9HeguK1IqO8lAsPE5XRXqOq-j_ccZNulDHaFYQDlrC20gf9gDtbBRfjFLoXR0AO4LDkgp5Kid4peZAPQSRazzXmF3bSrG8cCOVnM-UN4ypCbjlHdwDbEQEaQrN5JYQOV1LrkXHwXhRdnInrluTLxFQ3UpBHoktzBej-J8yJQjHyE2nu-4ujMcB4yuKLOJwHY3EP00f2DdyvYkDwki3KRYQOJz0rAXZv0JGNivr1POljBa5-qQ9naGsrwk2aoN5N8tJpEpEoiuUxG8eonZvKnga5TcsrV3o4oWkgpGcYk_3YhYQO7GsPyY8psBFABp1HNaSbELC8u3hK5ZNrPn_lT8uxJp0DeHeXEr_mDsGqo5daIuAPjvrhz8TG56h7A6qs5rF3tYQH8BM9IY33TNO9NT3Kq2rHLdfT2kbAYM26EahLeU3TXMxMw5kD8B-edK_efmKFH3DWMlGkzeBdhdSGPOfKPF-aNYQIW69M528glF6MD_q5Zy5uvFumh5bHA0y1wEcb_YiWG_2aI0a41rKhL86vd-RmEK9Xb8q_NoTIpROalWVaSLfc9YQIm6HblVYqK3_aoD2EH9x0K71ks-1HNy1jVhKC3ORpBbznWqgE64nuPjPpguKoLLRt8P-USg7LOk5N0ffgfPrVZYQB4nVkQSCQjNs2kN_L8WH9Irz3Pwih8KpxipkkIL2nHXfKyy9Lf6xKT8y3yxoo0kNY50DCpSPwe6QrmAvNRWHChYQHO__mIktwVzaix-_cmythhJhJJiWgV8zb6x-pvoqLcfJSRHt0RNGTqCeLimqkCYLUY36EexvYWC-ldoS3eAK1ZYQI3rp-wy6aHs-ClxIdZWQB8NsWe86QmexZ27OvSbxAJkAJGwEDCwJSC0__q7CpUpOtDggRbbMsv5zInxT1NOB8FYQGJrqgLuG82uhRhTQRkRENsHEOyYIeOmRvfLhhc3MUnpZlPXegJMPWEiTgyCNgUFAU__kHNXqTWBtM_5V6Hs-5tYQNqM2GGqGF-EE3FZpFZ4INEuHWXHfIHE2NQk63vwEk9-SU2grieBpTgoFBuYWn3lK5lp36i9BHlt99dIpFKVYBhYQDdXkulaOAdPmm99-mVJJt-QRvNvKu9cbF-0OGDCC55SfiuEWKjcwyc5yJwex-IPnIsqUyUkj6jTmauX78BdJ4ZYQHdOUJiIPvvAHPjBJH204iKKU1jg_TSZn-h5fF8Cf-QFpLnCDwVLZBGY8rUOf0STZ3xSA05iqHg7rKeFo4mt8wBYQIGmHzllKAB5MG5azi9ArZb88tsFSwAW4wWwqdrGZBqT66J5ZG22O_JrjjWpsSDt7FEH75u0FWQpwlD49pv3QxZYQIKCdmqPkgZ_k5PUlv_WlVvu-_0QvV2_iOZ-yV2hWpH8GSKqf_IBO_r0evdFFIwPzXcKjrpBJ2FezQbL075bFehYQCHzNU_RrAjCcu7A71fGvxPobyMo-VNkDJJBESAtIV1U5mjKYvoyPOB0E-DBUS0Q6PSPViNdfk_GQK1Kj6D4usiCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};