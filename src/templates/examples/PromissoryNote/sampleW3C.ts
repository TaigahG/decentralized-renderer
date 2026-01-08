import { PromissoryNoteW3C } from "./types";

export const PromissoryNoteSampleW3C: PromissoryNoteW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/electronic.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    epnId: "EPN-1767261814",
    promissoryNoteNumber: "123",
    documentIdentifier: "123",
    issueDate: "2026-01-01T16:00:00.000Z",
    issuePlace: "Indonesia",
    maturityDate: "2026-01-04T16:00:00.000Z",
    paymentDueDate: "2026-01-05T16:00:00.000Z",
    makerName: "Gita Pradnya",
    makerAddress: "Tukad Badung 20",
    makerId: "456",
    makerTaxId: "456",
    makerContact: "Gita@gmail.com",
    payeeName: "Simon Hopgood",
    payeeAddress: "Sanur number 14",
    payeeId: "789",
    payeeBankAccount: "87986532",
    beneficiaryName: "Gita Pradnya",
    beneficiaryAddress: "Tukad badung 20",
    beneficiaryAccount: "Gita@gmail.com",
    principalAmount: 1500,
    totalAmountPayable: 1515,
    amountInWords: "One Thousand Five Hundred",
    currency: "USD",
    interestRate: 1,
    interestCalculationMethod: "-",
    paymentTerms: "Net 7 / Net 10",
    paymentMethod: "Bank Transfer / Wire Transfer",
    paymentPlace: "Online",
    paymentInstructions: "stright transfer",
    bankName: "OCBC",
    bankAddress: "1234567890",
    bankSwiftCode: "7756",
    bankAccountNumber: "876520",
    bankRoutingNumber: "887766",
    isNegotiable: false,
    isTransferable: true,
    transferRestrictions: "none",
    governingLaw: "none",
    disputeResolution: "none",
    termsAndConditions: "none"
  },
  validUntil: "2026-04-01T10:11:24.844Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app/",
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
    tokenId: "9f5efe92382d4af5e683f66f23835be73bb17e5c6b95d48c009ea34dc1844e79"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-01T10:11:25.464Z",
  id: "urn:uuid:019b790a-6eab-7887-b978-2fca4795a987",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-01T10:11:25Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAi692HWVzzh1ce0M7QVHefPgBI35_gQsAQM8YhUuWSuff26wy16sNPBnjvqJWg0MQW8P_k3xWx2e3ACN0X7oEdVgjgCQDoqxGFNRSro49Ua8c0A23fu0QOQEdZe2sEV94Ukvb8VhYIKJBccq6ERWRhTXgxSnry3AihQb6yiDNiK23lYfMg0WmmDRYQL8buwpkyEln8xqTHj7cRG0iLCSL918_TMu6IZbfc3ZUVCNL3u1FhYh_5UPBBLrYhsHrdGpLdUKrh8kjxGgvOmtYQEUpttT0iTG-tc34-eeIOhpLJ5P4RB8FSuNvb_RjyoLK2MyM1krO5PQNKrDkmM1zpaSg_qwFmFIBam1Xlh04HwdYQA5mmk3gft1usZaIKvpsj1MR8kZtWZEUUsbzkqPIXGzHC3dt9N21VVk--Gf7P5RlFxSaA7xBbNIekFQYCerMO25YQOi5i1M-ba6UKMF4Vtm1Bft6zkmC0vHgfBGAvqpCPLWlZ7b8JyZl041drC8vOsxiOswU0ukjZMiXzwYhx_vnrexYQCAoAafpXHuSel1w8XxtmUXKgYNxQ-EzoryVeJJsNGqWkge0n_Ko66JT_TKXZBKmxq_N-boVjvDK-7Uq2sWGgStYQLEZEc_hmg3oivP14XnKr12I0E6_V1FptJ1wy3wt18bU1CKOv2b-B8dKeM3sSEuiCHRTL3Hme9ItPT3C7SZ-m4xYQOlVnFvMV2ww7vpxAVYG7Pwm6ITCgdz0oYGvk1kHfcGZmFilVWs7N99XqO7_5nzwmthCrFlTDBLaKs045hS-1Q5YQJaTvxEJ3Z4A3CdxfgfaBgwve__xR41JzoKLTsmCatShxwmtFR57XM0p_vTYJUM3hiemgHNGX3SWOc4dIZF8__ZYQG1QkVu5fVwpNIV6k98hFwyQBGTmytyIp3klI8O3Td9_1HOeGCh0Qx6QxRKuBHVpCxm8qC7dyrdSrYo1GXYlO0FYQMfwwVva4Bg-_P_rgNroVnrJ4dZud1qmnxAGj222tbyXUxpjR9WzdJQpv3TpECDNgZTMI4_SXmxyUjPnc5iaGdJYQPwf2MSwS-880n5pt1sO35J-gDqku0vP1emgXnZpy3idJaa4ikW3hTcl8ZzpSyudPBjJeZAqXB-NHLbXAQEymitYQFJg74Zb3417mwFxs3AKi4l5_2tu7lAk1jyUdLh3MyJgT_8nERBfuKKM03cTMBvklSfRdHRyfgNwFU362PVJer5YQGvxWonXDzIXVjVYidPj8mSMvwrxo2bpiLmsTmHdRK85qMOPLcfLge1eI7uo07ZBQt1Q3aozHs70bMmc6ybD7LFYQDfSK7BKFuEmzQnm3KXzvL87juIDGKFoQki5pruMgQKjfHS4TMMhzYnbGO4LDkO9er11P2pr8LMQZLDbscXkZEpYQBZZeIfgeoGb1IDlrfyPO0nti3XUiQ0vbFcDS9D7jzG2xv-e0MtTyez6O37-SZrhxQg50uYceQDENlsua5rU7VJYQLsnUU6weZk2WrLlOeHqXSUYb_sR0Ne5XVdcta7qZEw_rKLd2IDvuz9HGk_RMFfHT4ksSaUpZkzxPDIE0Gb8rFNYQIzW6gLzqFvAK_eCxwY6FmfI-crVX6-QobII6whzqhIH4PQzqOw-n5c_-0h3dAvTJioYrrI-rsxZf6K4LLP8OQ9YQD50Ns1Q08oD2jyy-B3YRR-iYB2ogLXoHGthNUoVpN70EKXNSXN9BdLTbIHbOHLbDDhP0ZKlqbGqyT-GSqP0ftFYQBVhTu8K4J-P6JbDfMtOgd8flCqXVE3c0EcFWGWkT6-18Ks9QJRSABagA5Z0KERhHM6Ajy8Y2vtux-kTel3AcCJYQEtSkZ3QAWUDTqH0OtpbBri7wTvI7xBdZCI2aT5mK34kiIwKDbQrBvSt-plehI_CwDcmghoZdnTVrlnZR_gKYYdYQOzwIpGD-gKGY_aGV7YimIKOQCPHE1yUAVGKly6rorK20uxhdoDiJ0bAYNrWCbGny8kdXQ6Q1E0yculkAocMHY5YQA8utHsLho6IfItBZMKv1mPawNlnMekUpqCtoh4dDI9myZ2ALgbpD-ipf9YD0sezdMsBMR3R6nYouVNHWFuI74tYQN61KJEjtN5Q_dfrNAiWTDmuUgpjtyUSTMdV3I4veuaJ9HdPtbU4DP_5KpMiEQ-mQLkKFBprWXruAUa7VgVArdJYQEsDQ0EfaYeMwgZmbe9eroia2UyZ7ppB4duW_FXwHA-yJgoOvubqCPTGjsGQlnb54MlChjZwfIGvyxsRERWYIlJYQEKDd6_xMjh-LyJl74BcIyMt6WPprOFTM7bW_Sw44OFtTzifD9e1E-bu_Li5nVZuxQ1wOf9BaolCfu8Eu7YuQURYQHfb0iCYU4h0d2x5hhDroRkCswkHu3pr6MV4YAzapttfwiQkTihx5XJR9AsX4eE3IhpyftlA4TXSbIsmMqWdHUxYQD-9egJrKfrDkavYQyay5EdvPaZpcH7YhY6W5pbIxBmrtjDm-Zbsq3hhsygzab8URTpT-WPkiLToGxV6jjBRud5YQKTSJQ1qViY14oyKM9AjBG1vFlMJ4Q3tfAP9_eliCajiDTiS4PK1mp_UTBSURP16AKLnLiLqfNBLQhUFw8D5OdBYQP9Mnn8_Su7PbyFMxb4jjSJGWZwYBLv8ZAyR_W37GtYLjQZur4emY-WKQEIYahnyGEFHnX2bMo8ZwWulRzAHJH9YQDJpIf5fwEU6aL3JCQA4mobj1llIzCHe5YKlJXi_JxVavqhCoK0Zo8B5ky47-FRfrm8iSXdwsHTWcVCXiicIJAtYQHCq740gp4ZjVYFjZNzUtzbkDPu8hG0_AQmUes-6VYyiZqym8GPvOPIswuEtM2TzfJYd0_mtzew-mk3F275VQ4RYQFA5QUVmCfwjqeWHhCNSZfwmM2mpt4sP-s5Mg4tF7j3OHK6iioaYqRPaVpdJpFNCz_zpzaW07iJNf6MQcsuihEtYQBbM42nbvcEYoQbgN9rNpCqdZXmAOAcS5MjiCfp1z7htHFHhZgewuu26n_HYMHrh84ZnSmJemyta_OkYy8EraONYQA9YLeN9JivPNIqQLVpb75lTJchbohgagvbd6_Ms64qBPm3XzNulZK7SXsaXRNPEe0FIh-ttxslzYNdUZ-tJKPtYQKBAAwZfDXmPBtJTbei2q3vJ6wczNPNOkE5VfObOx4mVMGOeaZb8A-i-5Dyd_g2tPLUnZY2UFUjQdV68oZduUStYQI0HzzVMpyuhQudOmnFmmmhEuT_a8DnphZu62LYqMJbSy6LTk2wMAbU7bAkauiG10siLKxV68jAiYWTSjuomOG5YQF-U2BszmQUnKl6lmA_a5oIjCf1NNUxjOhVEynA9ACImhWkFYvRthvUtBH2aeLOpX_1f98DiJ4fRDII0yMYM4uJYQJP7gHW5N3S50JRJgQ5PWQVxGhnBlETcl69L3MKnTk9RHrEGUKFAWO2m1x4PIPxtA888-EggKXPaIYX0Edfp3-5YQCl1Bx6EyB3xiPceRvTnYz-xXXYhU4wO2FYRUtxH_7VoC06nZBUdx6w83-V_W-StObLwvNJtzGmgixtVNBwY7mNYQJbOPtOoR8l2UeHs_wNGeueeiKRzjnM-xg64bSFMgHFU1D22d0KTDDC6MgFV1CgU3ICNw87OGOBUXsjhvVC6fzJYQL2WvtVquXs4jcbVzSQ6x-hlKcTQAtdPIl2FULxoNi3Y7BXxhdZLN9TNbv1vw93S4_oSJggk7N1ejq5xbLyuM-5YQDgkce6AY1CbTd6ajev73qm7ICYspE0AQOUEP5zKtNrPLpm4V1pnIAKPqpe_A-DlBiQw1zJ4uGUY9yk65XFWOmdYQPHGPL24kQ0NknAqMU_dNp5NMqdbcmUxB1YMW8UUDnblOnsfXd5e1EnMh7Lu_2KAgwXgw5EIl3NY9Za-QWZFywFYQGXqmaxB_-y0Etbjpj93dB1SF0FZgcnLMu8XTVBrHiHNwR2I0LaDN0acSSIM9SCYd79a7rtJO6dtiuzJHY0H-UZYQFp152xtRGYKea2ucrmMCFkZccpGFEzKcJRtCt6K0ihaJubFYPd4YSEtcBs6zlugKrrzct4l1pmncwm0UVjWokNYQN16o0iUdUBXhDSptgYsnBAjXmQuJOmvoecAbALD1JASj4Z6b7t026CfG-s3YOVZCjxw9P1K_FV-uFrg6IafXadYQFOpAf7MoNTJ_dMf9y85GgHX9eyDg_B83sxynyZTtyRe_Ii0RqkRxBYIt24dYjZAMrfKDzB-ySR_xldf7tECoNpYQNZsKkKHMo-J8z8_WB9zM0-rq0izRvK1IGYwyVaDXx6kdOkC3Uvfbz13fISZUOykczmuEIBNFNIIBKqgIkNNgEVYQI1iDV1ijxlvesjcr26l0z8b5kMvInC96JxvpVoTBT-QW6QWlIfGTNHUmHjFO3YUeItMtNtMGLHo70CXO2yhxiZYQHQBOHFpC-8TWKIPUBm_DUjcRCxjdTwo1mMGse056EUkUe2yRB649qHfBfL-SGPnrIQuw4N_v7V7S-2RwdMp-QNYQG_JEus82M9n-ULHY-6G9Av1O5I9r6LkZXFq7YZsCJcRzvSiZG6w3zXIXX-fycjJtQmGpQhaUPptV94mXs8I6PVYQA1nu5LwbCIYlKqHDWR9_LT_3N5DKNhztnOCu3reL5V62-ac8F-B8hxdv0kcthy_X4knPpYBMiCAIGrDOUSzYjyCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};