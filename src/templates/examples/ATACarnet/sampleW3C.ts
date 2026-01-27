import { ATACarnetW3C } from "./types";

export const ATACarnetSampleW3C: ATACarnetW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/ata-carnet.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "ATACarnet",
    carnetNumber: "US-2024-0012345",
    issueDate: "2024-05-01",
    validUntil: "2025-04-30",
    intendedUse: "Professional Equipment",
    issuingAssociation: {
      name: "United States Council for International Business (USCIB)",
      associationCode: "US-USCIB",
      address: "1212 Avenue of the Americas",
      city: "New York",
      countryCode: "US",
      contactPerson: {
        name: "Carnet Department",
        phone: "+1 212 703 5044",
        email: "carnet@uscib.org"
      }
    },
    holder: {
      name: "Global Film Productions Inc.",
      address: "100 Sunset Blvd",
      city: "Los Angeles",
      stateProvince: "CA",
      postalCode: "90028",
      countryCode: "US",
      taxId: "EIN-12-3456789",
      contactPerson: {
        name: "Steven Spielberg (Production Manager)",
        phone: "+1 323 555 0100",
        email: "logistics@globalfilm.com"
      }
    },
    representedBy: [
      {
        name: "John Cameraman",
        passportNumber: "P123456789",
        address: "123 Hollywood Way, Burbank, CA",
        powerOfAttorneyReference: "POA-2024-001"
      },
      {
        name: "Jane Soundengineer",
        passportNumber: "P987654321",
        address: "456 Vine St, Los Angeles, CA",
        powerOfAttorneyReference: "POA-2024-002"
      }
    ],
    generalList: [
      {
        itemNumber: 1,
        tradeDescription: "Professional Cinema Camera 8K",
        identificationMarks: [
          "Model: RED V-RAPTOR",
          "Made in USA"
        ],
        serialNumber: "SN-RED-88219",
        numberOfPieces: 1,
        weight: {
          value: 4.5,
          unit: "KGM"
        },
        value: {
          currencyCode: "USD",
          amount: 25000
        },
        countryOfOrigin: "US"
      },
      {
        itemNumber: 2,
        tradeDescription: "Cinema Lens Set (18mm, 25mm, 35mm)",
        identificationMarks: [
          "Zeiss Supreme Primes"
        ],
        serialNumber: "SN-ZEISS-SET-001",
        numberOfPieces: 1,
        weight: {
          value: 8,
          unit: "KGM"
        },
        value: {
          currencyCode: "USD",
          amount: 45000
        },
        countryOfOrigin: "DE"
      }
    ],
    voucherRecords: [
      {
        voucherNumber: "1",
        voucherType: "Exportation",
        voucherColor: "Yellow",
        operationType: "Export",
        state: "Processed",
        customsOffice: "LAX International Airport",
        countryCode: "US",
        dateOfOperation: "2024-05-10",
        customsOfficerSignature: "Signed by Officer Smith",
        customsStamp: "CBP-LAX-098"
      },
      {
        voucherNumber: "1",
        voucherType: "Importation",
        voucherColor: "White",
        operationType: "Import",
        state: "Processed",
        customsOffice: "Heathrow Airport T5",
        countryCode: "GB",
        dateOfOperation: "2024-05-11",
        customsOfficerSignature: "Signed by Officer Jones",
        customsStamp: "UKBF-LHR-555"
      }
    ]
  },
  validUntil: "2026-04-22T16:24:18.094Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "ATA_CARNET"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "d616933dee574dced0cf31b48102166fb5168210d78adb1993eddd210ceb237b"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-22T16:24:19.473Z",
  id: "urn:uuid:019be685-611e-7005-aab4-28d30a0f3128",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-22T16:24:19Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAnK3ahM5wb3ANDO-3OkxjT_UTzSF_adZCkumkD0bTMw2S6NtbwOCSLTRWfLLtgOyEF-GWYFOD7WqCXM7hc4JDMVgjgCQDUzsclug-EZPltnCrj-gM_IJi6jk-KnVwDCn1XlhcMKpYICUmvWfpFdaYJmeKmZK90caVWhmpXuMQIaHym__0BEsTmGJYQKZV2pt9egz5yqlu5Ge46Ad5wOeWEe9ISuicZaNBHzJfyqHPFZVO3U3jBgrMneNGIAGIdQuhvQLM1BFIRHJ4AjxYQKE5D7z3J6TDmZS02rgkNrWvVHnDpfXlay6chE3dZ0gBX12F_LcjWQuFZfTFtl2Un1jH18jgdJ3bb15t11yQF6tYQJeAxP0QXsCA5qcT5KOOUO8ZE6kq_39FRbI_NUrC0ax1t2QbnBf2yepQGFr6bia6JNwzCoiDuXzRxRbv8l2cu_FYQMGqObbVdzclB6Mymd_ggTBNM5d4V7Fsg7oqAlab74VWHwB3jGkmf4X_pHTyKrte_s9DPgRDoxJ7oi-JFa_SM8VYQIhPbljcCiUrT8KHKMU4fi8si-N8NzGa0gGWZWTXwC5vsHRFwpjs58QRYpnJsd02V1cwpmN9O7XA2ftdHQdJr9tYQJ0VDaG7ffXn-rlmQjdoEEnfxrvlniA3UrLaX4ACfqGW1NAr760CUiA8CuuE4N2VAkFVMBlZAOFxdhJOP9U6qZZYQJuy_7zrFf9e2-nULwpsBxoSy5sZxvXNEZJDPvrcpSsu8pPG4nsARnQrn2eHDOlDT1Xm_uxbAz3KWctoyBVIGyZYQI2DXqm2xQh3kNbhDi4gAQKyB4qvUGdjnc93L2N_8Et7QN-DpRdJ3QlS959R2B3TWCvzIEdlqKPqaB0a2WADBftYQEhSftlupq4Wi_HFFUX02G7qZTOytIacZcamC0FYle0IMqP8iKeVZ4LJBj0a_bibPu5ucCnGNkOc4gE6562JLHpYQLR42-ZIk2sgk4qYGoPvoR0AXUuQegUQ9VepKkE58mNiuUr46-mb2bW4bH4K-YXX8zPOfYvPTlw1IXdqxq_XL81YQOvtGLwBvXwaFTTjd0slvx2pHGrL6hJg1HK3EHmh0FA2ht4JZtnM6HhtFleFs1NWNQymzk0E7P12v1-h1IfLAEpYQBg5EdUbwbmJOFw6Cjt1IIeiPArq8mxcPluxtA-vCz-OvXIbqTjBmzuxODI0TMuuzBh894lVuXMoXkWDWj54hKxYQIqECDlfsFAkDGXHlkghxs5IFFMT3Gsf4VL1TIpYn8x7lNcDg70pAnXDdLty-KFml0O-gTbW2W4aoNYMHkjcJNBYQBWLmUhYNC7jnRlO2OVW1TfsnGZ8YEdro5ucgWFowXKrjDAhRosy7R56X4r-zRbHhdPxfAXCwkxJnWCCkpdRIulYQJfk622LydwliL8pwn-vBYr3sg9W_JLzoJDWbwUdZUf5QgaVzcGHtBcB2zp3UQ0JcAF7jcpjCCFepcKDddLLFixYQLxnS0Ey-k3VEV7XqEaOyUsKjcFZvYj26Il2uvq-nYdGsSfuFbpQl-auTJX8PS70xHD2-IuEGeO_eiikAK6MughYQArc4zxxqzFy3OnA7e79-jOnQVYadvxdjTc7IKQfhmyKz6ts4cEYa0lMhIi_oXA2ClvFXFI2nyycrUo1W2zG9jpYQIdYh5h07-wgDVbz1mXh3N03HyJ_mOwOP2XxYosynxzr4otai-cVqrLFegz9jBTX4Bf9FXt2N_zJ2EpLkYQmqydYQM8pPZ9qxWWKpNqiZGf7RreiKQwlGsdOmTqOXqo6ug-LeNKK1u6LBxoz1jjMd63IronxVSYq50pGKwSuHyFyFXhYQAzKd2kJgJRt3hdBhlWlZOI05REvdtw-jNZluCCT3hd9uFLliGKtJnyVjA5pXXJfQUjiJxEX5-lui63-w0aAbvxYQKYgkxL3UNZPh8MD45HJijuXn51zwg5UIoY3rH69feztoQyukQ4o9pZFzw5beaLwdywvVEZIH2_Htq9WBYP24KdYQCGpxyV_NV5ckglonUNt5NXOSqTJWW7hII-TTM8od_oFAk642Wzk3Ay3jIBnbDcTzTXmq3_fzZSJ3uRBPXghevlYQCF894YKfdVUMuG65siiHH8cXCyVYlO3hQeepKNalJ43Jw06P8M1c1nJxefu6fb0SXLvKbpiNx6534r67Syd5ZNYQOU50tLhfd8Bz2mii6SKyla4irbqf4T5OV4aNGnsYjInynaoDERbTPZb1abbK6nBdPP23j7oovHMC_x3uuYB7TNYQIKlonNZd2-vubbAUPgA-8zwOEJwQmCdn1UajoEiVdIL0esPxVIg4TMHLEm4SFTUgb8QeaqMRbr-Y43omJqXxuJYQG4ZK4dj-pJP1bT2XLkGEqsuEEpIEPbM_1p_aium8yEz4Nn7xIx8BmjVEpJhvWa-qmL1esfxu5aqadU5CWJxnu9YQEV3iW8k9t7FGin3UAkmn-EIEm-kGV0h53BOj4mjFV2T4c1FZlJOrAYnZV5UfGhBQmCJkKD73HYqIKmuQkEWF8FYQA-HyqG1WQRKr5atLP6600rTvXuEcsFw011iO4hAccvB_GWRriVVylrAHCn2TiY4IOHK2uG5blhwqb0kM-MvkX9YQExxQ0l_m4rIu-yM3lNcYZcclvzHpNYCrrnPMYzU_TQAkLLKnsE73irCcI7txR9pXrWUmYOkkQj-kd4D0rlObhtYQApfLCwKSWb_W7Rp46_d369KI95I_mJ8anwvbqBaivUPbWLK00mj8d-ZFJq3KndMmljVE5wdQVloBsbf1L_Ml3JYQNZJ1ukJexiO_vUVefAl-a5B6UWNuNVTNs4UtGRqzvioZKhpDtB5yKjGv-fvXhkgJ1C6LHCi-bGQpmm0WtNkWItYQHxzIKAwtpVjJ-iosLrhuDmCXcLEJoUV9RS3TVYgIqLqrCCXIi5c9Go-TCsbme1iO_rzOls-74DQSmUH1elbrPhYQNgGkfNgGzZv9DM435-n5lCDIY5hCheFJLh3rXCkzNyspLlM2TqRY16b8nEHodvBiRHRCiHnoh1hrKJSj7anZmFYQGiQ5v3XSlY_IldQjuGy-XdOLRDzNi8udexuxGz1Odm0t1E-BtaG5UT1HI-yEPoZ6zqm5m0-yuXm5U4O1mmZyJBYQOuVejONbtY6Xo3AHJXKqDJQCvlGNnY7UMlWlb0MakkUzGCYVA7ULVuj1pJCVxGbfpCpDLMxDwSRxgQh2RnacPdYQJMXqP4fmgRYQ1aJmlZgILi15VmEJeKfYzjQuR18ERQQK9Px9RMZ0Ltgr5U4eM--uTspLCbQs-3D1U3ZlVcnNRhYQAaEaxpQusShSTJsBGHS4466UbFZ1KtpRoKJ3RJ03CVCNA3X88Je_YWCeYdgDT2P9XddHU8D-qX9rQR9Z4xh7aFYQMzdIW7s_lixTatbPXtIbp9NhU7qQgDMFt6EQ9rOA4Lt2WgQfCSKLD5vRePTeGWx3ITnlsk9Zp8pXsrYpbL_zJZYQJKI9X4mYATRpfC99p2xhPmV6qaFmZl1c1RCWvwkt9znCRjx8X17Dl2HsE4-MJE_WxA7TRUYflBxiZGQK1r_eMlYQIXNpyCKtJTzBeCocA4JdhPwsBUWyvmLz6gQgiXXDG3qGsop_vlOUlaqfoS9RClWkhUXWmaMQg9ZcFeZLOp80aRYQMJCDiq0zYZbwjLhJh1d3uQaGZ4wNTOP2KSVHW7S9hHiNAYIqpW0e9gnxK3JZxEWMUKYCli03UfJPGLR1eezgdlYQMapWVbpGRR17rBRAd8ziv_dN2LXC3d7Vb9oVovFWbiXD4eOOZLQeOb8-jFE-1FjoskvCnpVbV1WcjrFQ9YZGJFYQGoWYWpSKEKVGg49Rl-F06Hrg8d80q3Bg_ixP2HrqRnEAL3RkPV-lLVrj7YeOGiV8TKneVic5KrRpJjk0BvOFrVYQGVzJtL-jmUJucI3ws7NtiAge7Ibk7Af1X_1P9HrNNaDH8dhGTE3lBqZTdgdJNytx7hq-QKJh2FXnp9w-YijvqJYQMBfmIzUqHw4GVLnm3Ir9EBiCYAAqGb9ZaaswQqLjDSVoSOQOVWH1nDRywDaudiotNZ1A9sE8qlI61nQjYf7vd1YQGpRglMXsqFdxq_T7mbfBN8qpNsctws7_sayiLVxVfP769271G3ZvrbWKHHdyDWgX9FMCwUBvwaP6PKbu27k8A1YQE9YZ0pg0VHX6asMkaJzAqCCJ-Y7tvvj2ZSzmkGM6cnPK5ubq1l7TZaref-Za4J6lw0o4B_R4mVJRphr1Op-NdNYQDlechH6E_Uo7JME7ZsswolirlN1LSVxNpo6AcZC3FbWb0_54Vqm6o2Uckcwvcp_tmzzRIuRJs-30fQnQe_W_J9YQItMXtkka13oD7IrCQuUWAAu3PCyQsqu6OUVmNjHVc4rnS8_eQ9K54PaL_PdeFOQSKRlvb5aUxSyJruw7OGqrP5YQC7LnGnsH3noON6PiiChMV6BZTn0QOHgP4hLDUHV1QjErZGmB4Co3mfZ1FyU9juuZniDJn-dL6ci21ayQV2BV09YQJTR7VTNRYjNmeyS7VSI3FDpuMpDVLVQcmNE-k57ugFC1R_e7xatSH14iBsodxCzFC6cnxqcKqq4EP--6wd490FYQM8q-nSn3CkB6Agy_LJsiMMyGFqMkLsvU81Gekp1MBWY_uZY_SVbZo-pdZoBD9EsGJv9u0jjCgis_zP9R1X2jmxYQGb3rC6KvbmqBK5X6Tobpavsy_4PDRHSMiSsu6RhINE2XcnDJyMgoOVj5XV_DK1RDxMg2dfxkS0s8YHQfH5hlmRYQLBmsQm69U1WYpUugDzmRes2eNPuLEXENkv9IIc4MTa9lTwbDwEEZyVZQncjzW5ez9I0eeAU2Iw-Lh1GIt7wjOVYQLUfwaFLZhbVj3N7OkfQXbkkdc7fghKKqTj1QZJ2sE8ZGuTA8rXQQqhqA9MXBOVHZq85LMF7sgbAUx40dWt7i9hYQAna-C07SUl0mwkNYZxRTGMDLCjgX6xw-VqPl_4ZbucpdU8I0z4GeG_6JfimczjErprNkLNEda8N_stf-Ct5GH5YQFSaWotlQNAh8_gYG0WarerNde9X2enkmYDQscXyu-PrhaKtLmNV5v1rw_9fj1bV4AaeWQrCRfY77K7U6kjg7E5YQA54KYkhjdxsYwi517BTxX83G3kaCIUZW5lB4Tq_ArH7XmUF5ocZ7UkKeS5eG0jpxic0XD7d5WK3EgSIlFQgr8FYQJtZHW2zBL4DneYMzZ527wIhqo1ZV0acqo4R3TkBz6sG5hICMgIXP-D4D9SK1NqV-jz0Ba0PPIRgIYoxRc96XRRYQOyqsJRA70d0npXrWmYbIdOnpu_T4x6Cet0VsZl2mYtRp0gao8Cm7Um3kWtQGok3-FJdPmm_qz4cWfPfNFfWeYBYQCIp9lOo0S_erOAz31csUnr0oXMqJkG1zZL1x-KB63gsE6OJxKelYAtZZm4rxfeuYluFQtoiO1DG-IhjREE8O8lYQPJeQXYOWPdA8vPUI8Riomna7a2pc1xfBShwPbc1EXtAZEfNTx0fEs0w3O1OulB-ExPU8psHe5KikD95_Gb6lgBYQHgKf1P4Rg25EZelQdgTi1Ojy5CGfzYYsO1X48Fts-n65tIyQviM4T2VqoASsBwdhJiEfNTxOBLmeUmvCoF2uJdYQHDWbRGevKYdHwD5Ks95UYDrvwxQS0hBXIrEiGebDCN4cR2K3Kop26HmwKLYNIp90hpofGKvAgT1fZPZDhljbENYQNCrkjAYUP5VN5CxzlBY2gtf4sCNxiOvfMZOZCtvhyQT0w-06MhFPefRLi9MiQKp0zTeBRhMedxh6-Yxeww5S6NYQOf2gAd-Yrab7D0LQXD_Q9VfBFDSWTqIddjKqUwq0T2YlqSX5J0ECcnzfmaJBxCz5G1r02qiyWLfq4eQBTg-WudYQJYIul4yAhy3pUJml0SZ8C76I7XyaGOB4_u5kTQ3A8HpeoMi4a8MZPoAOoS2MOg29o_qZyq464zhZDgnW7YxHNlYQC8ZVPKV7TzQvbAMiUvNizhc2-Iwz5GyxqDKvEyDkgeudl1qF3Vcqx17OPSETmPupgpk6RFgMwC42Ld_phHHWCdYQFuFUBMbryHV6XvuzdhkQQES3tL8UITq92s7y7yN8LPjRDQRrla5Nnl7zDdVzySSzC84iZFuk6gfSY3fezd7xetYQLWr8WatEsswkK-iJLDOle6oKXGNv0u3jiPe5YW6xP_nFzWFOWxJwR1upHSOC2gP8_Y1vc5pOJv8A_8b0EvGI1BYQH9v0qGYnhVOTZ95dYJ8MWhKvPSCk9Zafz5BLXzhSy_XRzu6newJD-_-XoBrn3l-4vRZqaHAAWeX4StK08wkTDNYQKWv0WeqFt95yqI-5NfoZ6IU1zs0qzTOW1222uN4rvA8_E7XuvlOSLn0K-5QZ1T1g34ed1U5glLgv7_BDamVmI5YQC6kL5_uu_8T77tGVha_reP-i5Z-WL9KS75i1iqHZ0HcU32YKMvm6Ny3HueeWFxWstNeeEjDplTqdXLU0p5mzrJYQMnjBPyZ43WJ_v9LqUo_62AW1lpndmjDNKWJ6LX0AlMabW9yZ04prLy2D1w8OpnjUdPb3Yd1HIwfHXf7xRFMy0xYQH0vCXDlcAgJDwjJnVK1JYZQwER9u9UoeofBZ4iio1V_QV-tYs9pyG9zP7Fd52EI-QXlaIKmbC6LuTUh0fqq5UZYQJv_V2o5s-h8cArNvvQ-J3W9nuDnqn0de734K610BaZCapLT45uo9ZVlErIdxfH8PMt9i8W3lr47DgabzcTOvQxYQC0YSzHd622THQK7OXLjX8E-hCx9gHRftOZJeAsLVBBvU6YGy4hmi1nsPFdmI2CoOJlXYYUd6RGun07U2bmYtJFYQI9E_zMdFi7w7He6yts8LffSsQ98Hy6LhpwGMfi75SfmIbAM4WxKsqRXnXWwHBFNdYrmGsTSmwRcSQ4hiIGjygRYQLChazB0E1KgMCAX_GYydD70y4nMDZYxigtp2l_WES3xc5Zuwtf_-j-p7TQBobX-mQpZjDz0Zy1hcEoQH-45jNdYQHBYDVL3JWnRSSe3HOgg4CazR__Bq4MRsUdzhtoUxAVNoX16FkkLzBj4WSxDv_cG8GBuMYHV1uGQJX7VFGv4zcVYQKaldgSQJZ5baqHiJj-YVZHp3zigcSnbrq82VRkWVRpbaVse7rPUgLhCnLM1QkKTHNGIRfxjwpT3OifeHz1YyjVYQHyOk2WKrm76U6IUxNQkFl7Yx45ZQ3nba2Ug1R8TlZnFoavnst_pJbDl6x0i7JeURtSXWbbvyLDXFy5wzoCogE9YQLJ-ll9a90okQav5BaJJhwN8F_uogjG7WMj7qPHl2gGbKHJfWgTUzPP6c0BXUCHYvARzFvzVjwSSwUqrQK-oqEdYQG-Gv5Ql9UvsHgIQZ1XTUAOpJoYhmdBF-WWoXQiZevl8cRP4TFQKNVhxeC-rUGkn9NM5d4HzkS-giUB8zqI17axYQOkZE8jgZNJ9srAk8jBMcUSd64mRtFijhTLn3uRjIZQVHBsu5QqjfryBPdpoBcp8W2ow4Jk6juWVGwR0vUoZl_9YQJxvawzRGi4BwcVkLGL5J_s96W__b1StvcyHP0JNnWS9DJ6JjR2QEAEqE7doH_q7_c_YcdELxgkEG9vlDA76y2BYQDPG_AP5Uf2-rypckNUD09FC09bbZueeh6qidbxrrMjQ-s1jpFG6Lhpz8T1tQeSHbiM_8Ws6dqlX5hV-fBOwghFYQJ5Yzc7o6NmwSovZUFzBrxDl_Cg6YypGqxXsvw0T92K7FIpCCcLDLuBVGLB9z5jImBen6_25bzWU31zeqQtwIxRYQCrhxfPtWPsO8VLMRNMz7tNxaYp3LLJioudSbq9nDZHUlCnhrNC_2NJxGvN7TuKl1OWbmYpItXsgsKZxfOUDOuRYQKv7tEDI1_O7rCOFjVUxQuDzHH2bud8B-Hmo70W8JuXcSBNoQ1i7XgPorNip8-tHDj0iqndEgr5RlD17qVgqIRBYQM6Q2N6BYhnauvfRtDAGdWDTXxgAfpX01M6CQzCm2aeNg8H5HZOq4xWMShy9IJPpS7HdXvPYFN08irlglH3hsCpYQHwipvvT7p8c_Iv6sUzcpfXBG_RGEdIQ7TXX206wUY1pzvUpPj7l1Ra47l9KVjlrkHZ6ocru59avMuEZRr8eex5YQPvDCHU5qSK77VnbJfoXktlvcLUUSDiPVROCdWwxjKRzw589RYJSVRVYjbvyap8kerEJ3z9scRTFVnfGPqEd4jZYQFe0SX0QpW1FOoKi4qeOw0invo_aFVmKX3o3KjF6CwwYRafsZX7F9cqZSKxJwGk9bPMROMkkSxvryGkh7-zMiRpYQJGoc-bcoAwnziKAZD2AKCPqq_WQJkeod1wULn7LJXQgXVPjLz1CeTYlPasowiqG_OqxpsnMPcAXfNjAdcCeNQ5YQM5QsZjRDoVWvD-koOPvc90LcpieAqzf3wIPVaixMjXqhApd05pnzqH6ZQC3_HHSAcL-723TFPXXM2vW52yRQKdYQPWeD8fOKstosxU5qygj5-XnJpOH67aPv7c-_hZ9eJUdo8y6lzxc1bNmHx4Z6c9qHXha4STwVlz9BKGmiuuevQVYQGvATAe27zAN_2fI6_z8BhSHbXvauoB4wgiorIk-FpEb1XoFThsXfxX9BY1XV-LoUBY4uJuWtA2rPOjJM_UJMmuCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};