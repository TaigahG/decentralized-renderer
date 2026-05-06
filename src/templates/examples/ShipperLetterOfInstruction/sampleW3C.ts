import { ShipperLetterOfInstructionsW3C } from "./types";

export const ShipperLetterOfInstructionsSampleW3C: ShipperLetterOfInstructionsW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/shipper-letter-of-instructions.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "ShippersLetterOfInstructions",
    documentId: "SLI-SGBTH-2026-001",
    shipmentId: "SHP-SG-ID-BTH-12345",
    issueDate: "2026-03-21",
    despatchDate: "2026-03-23",
    consignor: {
      name: "Merlion Electronics Pte Ltd",
      addressLine: "10 Tuas South Ave 2",
      city: "Singapore",
      country: "Singapore",
      email: "shipping@merlion.sg"
    },
    consignee: {
      name: "PT Batam Tech Assembly",
      addressLine: "Batamindo Industrial Park, Mukakuning",
      city: "Batam",
      country: "Indonesia",
      email: "inbound@batamtech.id"
    },
    freightForwarder: {
      name: "Straits Logistics Services",
      addressLine: "Keppel Distripark, Kampong Bahru Road",
      city: "Singapore",
      country: "Singapore",
      email: "ops@straitslogistics.sg"
    },
    despatchLocationName: "Tuas Port, Singapore",
    originCountry: "Singapore",
    placeOfIssue: "Singapore",
    tradeTermsConditionsDescription: "FCA Singapore (Incoterms 2020) - Freight Collect",
    grossWeight: 1550.75,
    netWeight: 1500,
    goods: [
      {
        description: "Printed Circuit Boards (PCBs)",
        numberOfPackages: 10,
        typeOfPackaging: "Wooden Pallets",
        hsCode: "853400"
      },
      {
        description: "Electronic Sensor Modules",
        numberOfPackages: 5,
        typeOfPackaging: "Corrugated Cartons",
        hsCode: "854231"
      }
    ]
  },
  validUntil: "2026-06-21T10:17:10.796Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "SHIPPER_LETTER_OF_INSTRUCTIONS"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#9",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 9,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-03-21T10:17:11.558Z",
  id: "urn:uuid:019d0fe6-1a88-788f-9a86-bcccc642339d",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-03-21T10:17:11Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAroDA41bisBJNodciL9BrfouQ1JI0djLKsISibbustxkllELMYa4ld0JOEhgy9ZDmzB1XIYPXznA8fiNaknPX01gjgCQCKJHpv38mAaB0cErPq0YaZ5eHu6AEMmfIVKGIpqkMASlYIHvx8OT9KN0CAT72csGzD9qDQnWLOOddcKcOnIB48iI8mDFYQCcPV0_EkisVYisYMP2Vb5Em0RpzIdTb1wiyE2PLDyWtamtb5Hq6BzYunC_5cqUV8Fc6wF6iVUyiWTmQkExPeZJYQPqzQ9npZdIm2MYk_27M6KRHgpoBFswIEgicekKRljTx9oZUdFfk_hC73BSDehihTFH3n9Hy0yr3qftwDgpsBoJYQHXGNbLtqz_EGyS4nxfE7WBftJ8qa6uqT33q2LMct0A3ZjT66yDKsfjtrY5cksxroVaO6YvlaI-1vxuywooPBm1YQDGvOKvm3SvdYzF63wz89LxMX2gPVwjYeztOLFE9uHHgTt_qF1Qne6BRLhrTCytarcTObds2i3ePYTJ3z6Nyn_RYQL9-iyFWrS7AQw5SHZ5sbXE3t8jUb-2FuzgR9f8d8-k7yTUgCSeVTm3q51l6jqzQjAv3PttWhLgNAJU_lRzstOFYQHSu9LS3CUMQ9KjhB1Sn-9yE0QYwNNMde0k-ecZUs3T4J_3kGHWWE9PmJZKFR2YkohvJ1rA3A8KjU5LQwj4mT-VYQCsNCfUyA1uo-1nHqFDUkN--dm3a-KL28zXODs0t0rxqK9daXyY8RZw2E1vJ5v57QKHLG0A57fTwX087oPTO4TFYQB-pCjsIBMNfc8mWYi-BSklgsxZou9b44jD_QCR9nJZBqepG1bRefHOYN-lKWpIjpt80rAxwGh_XofB_GzaScnlYQI7vPoHqNtOjvI1q16sMjdJr5adgLgvihTGLskSaoQ4FIGkhkQyeTmrlBAi9hNf4vVlRx0oTbjv-Z91E-xYVn3BYQCW-dEdaXYxbgyFnCfglDaosnJDEKO0Nbw3PsgSQmSw4s04tantBaCRSgBukxfykyfgUSZ4DitiiMPkdQ38GKktYQEQ3yHUvpGqjv26n15hOjbQSdWKJKUUuwCCFt8HDcXxcLNoSzwnuE_-jcwBolvzYkDs11qW9EjJNExMrkWQNGtZYQHJHXh7Oun9KQbeVtKtwBSUD3xZpYwtrac4bEJfty0YfmyWUKz7jD0ib0F6jgY9Eo3jWrTvzKouAQsE2skF-_IJYQDa5Y8BkcrAr7h2Rd8NiLWYhtjTcEjVpwiLHXr1dQS0yaxHX6j976yOAx9SiTgVGycLyfO1U_MfdCGxuTiXzLSdYQP-B9U2XtGL7W-Ez0xbnXiwzC47cAC5fXs_dg2zCsWncaKYNBs-FGaQC1Ns523lUFO9-EIudvVNdGNt6SawwnKNYQJsndMi5mBxUhK-7EWKm5_D2R94URVXdSbV-uU8bxyPDlYPUJ4XAZakZeHfqf-rzL9yKKi3nfl-W4EOKf2vMfrlYQNgC7trxKkjMS5K2QMHcdue-37Nfd1GSyCJSnGkrENwnjyhFjT4yZrhVFP2A4JoLYVl34bRbfgKSroKReAgms0JYQCfvV2t05dHh3CReqwDwhFvvKM5u1XA8i07PcGGlwwaKVGJ7YHUDcKT-ldmGpi18ujxeObheNECS7Z83aSqCGZ9YQOsx76g2bHEXLxEspUk5JqURn0GSQGswhvkR3QklnfIJekrF2gKtXBFmZPW9M7PZr3c-OZS6klaNb5l-q94qFM5YQEo2qLlRUR3aX5zE2Lu6Zs6CxFy1ohzwnkzLUoFhqmIFHM2KXE-ctBk2oaAb7euU0Pjkx11-FVuskoS7NYNu8VtYQBZPiReXoG89e8tct-yVcu61m7ve1S4Le3-LwfYekcWtkKNW2jOjJ0ud1w94PVC9RK8NJ6K9PKUYsoLpli1NCjVYQL74WVJZd7psTD-VVnAC8YhJZP_aapVoPUEyj41GBdM7arJpXKUgthcVs1TkBVJdBxWZFU5UsQaJsCA6ATvKfaZYQPCDUItm27qgtxJX1fkaRQbCQaonXndijppuXFqZ5Qlg1XESiUCgJ2Om3uEt5EnYK9G2Ya8oFp3dAJbWTx0EWB5YQGDXQ2Jj0ML2fjL6BLBaXv2jGqfM16riA604ZZoIWBFm1bFcFl7ywQnTOFfRJsVz0GWUU7EWOAkNlBffr3mCjiNYQGF3jmx9WvAoCgsGV7x6aaksIvb6-maQzp24A0oh52ymM9Dj2d48Vq_nGDSCTnv_J5xJ-C2VEZaBis2mMVKhshlYQHVX9wB2XrAtHh6tBwQ7SIPRHET6qnRL9KEHU98SEH7fhRhv0yLDS5WKd3fZQHR8HZJAgnFfQiQ5PyICgXNr6rRYQEjKhhXstsJORFcFVyap5H12_2tVhKpnMotytaj5fbSZJpq7gsnExK57GdUa0anhQ-n0k9rb6KlkA1ZyBQH8iw9YQC6KBAhqqnKWNSu8TnTyzqA6iP9s0KP7kitU8hEe7nUMCDr_IjHtWO6kRs3iLw3vxrmCeOMVKELpJECN1Ye3lxVYQCkTS58kjiYrBfJ-7P7Qmq4qc-f5DZSt9bJSP7cMmjvTNozmRQGSuhCinasttCEs4F7Y05bbuDJVlWmH5OUQFKFYQLJRBe5eVQUfl44z59ZBQjA4ZkRRpyPXZJ5S8cIRHOTt0_PMe2lZFJV9dvVEZ3B0NoflxIqc22qC26glBCsiAKJYQDQ7vGlA4ic-PR66PMvRTrg9QY9d8X-S2nx9sJaDW7L5SWyZfP2AVTTdBzxbOZLgK6lozbeHR0pBzuqJbywqvwVYQMiyKVgRggpZMVL6gQA2Kk7qiiUSdFEZre6SnFR1two73iflkqbtauhwNHrRBdOe465LXsuwTEoCSpfjEKvAbz5YQKejgv06pfWvz_YZ7D1SB7MZlVEAPX9KCrxUtfvTrYnYVGBYaMotdr7yFaNmyf8WS358vxFCfdGz_WkBSZ5cHjpYQFxxjA4h-in-QZ_n-5pZGFc5AB1nvCXrcnPzjTErfIhN2ldfqIWVYcCQSXztURPjtEIKN5UMruFZplGSLWezsE9YQHPY6YpNJApKf6yCR5HCyBiv9DDRZ9TVvuo1ubzUgOcDps3dbJPcYSIi9a98vIjV3kJjBdgTdtDlgW6rRRTxPIRYQNRvYim8ffWkbuY3cPro6V7m4tJu_MiB4aZmj6iGTTQHcnPhat68JNxRhbmB5goPySsaL4s3T3N5fHwIa1pIIOtYQG5xYxc7NXYm757JxcpE1w3dd9zjBLERwVFjVLwKmP-icfbC2WRC9u4V2hs_WPUKhuid045XG59URPyUPN_DyRxYQCKdy1j6ho101qPz5SdpQHEPt-8ckCq8zhScv_eNDp8ueKaWXWUwNzNxpXxM5w_AZYr11AwlH4A1Fhndn14-0P5YQFHkvP8TdGhENAxMILIKwrbVLJpZHex07lgbRFhD6QcWQwU3eC0noaziAZfCVh3tvTcQ6Oyy636js_ed4bIWDb1YQFJI9D_BJr_DFE1FjbMZdwTA_erL9CJ79F7oLDYD9KcmDBzD0gN17n9TGlnvoAVWg2GIEFIEUkjWr9RXF68WZKRYQD-U0XTO_-VgTyomuuuS2uFWKA0lqFoAH1YwxA1Qhj27vNcAJj53LMvtQO3QqzhCFfQUoI6JiJU1yTU0LQE6yRRYQDYwQlzOal_8eJYkFoOOa4PYaYXbZjBWqs0X2_H0QgeRrZCBPCL_58wy4QtKpB1RJr0Ia6S5GX7tHBUusvqFVTNYQNMNs4iZYMOrVzuLmZ2mUsHHUxTR_WHKi74mrVy5xXJwkoyd6q4I2eUWXws_RksT62r5MZ3qb7ZmYbUTxktfp1lYQJ8KjBs3yalzBOv-yIOfr7fzV1OvXlJKerLf4cItgqLCQba1Npsrg0-wvHy3KcF9jfxJVYRq6WAnJGwhXFNTIw1YQC2ys6D8-YqpHkZ0oXuBnL7cA0YKdRPRk5Y4GrXPyvaWq0EJlKgmPOA64WYd4Y7CcBqeg8yyn0J6cYRrxjPEPs1YQJM6_GSLaHUqRPigqggjIx1I9DIvRLAx17pfuQs9jdEfopiYesAaDMHzO1_7kvo8_17vV8LK-JFlDi_vuD3S7DNYQDLzKJzHU7eAI_1-PscEtj7ffFcQdEGs-aSFLm_DLNPU-r3QUMKMMmQoL-if0euRe5X_y3_HCcT2i61WRx73LIFYQHKzxwJ5pKS4n6gnUR35BTh0cngkR49INso8W2REaAAzRBuevVfBeLCuSbwjPA3A2WC9BKkmewTPW-KkYnWrSRBYQNK1_2EaQtWl-e-S89ZMFxZ_2PdRvfktBlXqU1NHR0zc_uzToGBmghDmDHlS_C7_sFR0ooJYGLVe-744cGJLOhJYQE-DppX476gswVROROEmEa-uWmC2jG23qDDmz5OmHuGPAsL0uS1W-VqxHNVru_t6cWvObOSm26CRRxau3Gttq4OCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};