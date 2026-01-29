import { PaymentConfirmationW3C } from "./types";

export const PaymentConfirmationSampleW3C: PaymentConfirmationW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/payment-confirmation.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "PaymentConfirmation",
    confirmationNumber: "PAY-CONF-2024-789",
    confirmationType: "Credit Advice",
    confirmationDateTime: "2024-06-13T14:30:00Z",
    valueDate: "2024-06-13",
    paymentMethod: "Wire Transfer",
    paymentChannel: "SWIFT",
    payer: {
      name: "American Importers Inc.",
      accountNumber: "1234567890",
      accountName: "American Importers Operating Account",
      bankName: "Chase Bank NA",
      swiftBic: "CHASUS33",
      leiCode: "54930098765432109876",
      address: {
        streetAddress: "270 Park Avenue",
        city: "New York",
        postalCode: "10017",
        countryCode: "US"
      }
    },
    payee: {
      name: "Global Exports Ltd",
      accountNumber: "87654321",
      accountName: "Global Exports Collections Account",
      bankName: "Barclays Bank PLC",
      swiftBic: "BARCGB22",
      leiCode: "54930012345678901234",
      iban: "GB29BARC20202087654321",
      address: {
        streetAddress: "1 Churchill Place",
        city: "London",
        postalCode: "E14 5HP",
        countryCode: "GB"
      }
    },
    intermediaryBank: {
      bankName: "Standard Chartered Bank",
      swiftCode: "SCBLUS33",
      accountNumber: "99887766"
    },
    paymentAmount: {
      currencyCode: "USD",
      amountValue: 50000,
      amountInWords: "Fifty Thousand United States Dollars"
    },
    exchangeRate: {
      sourceCurrency: "USD",
      targetCurrency: "GBP",
      rate: 0.785,
      rateDate: "2024-06-13"
    },
    charges: {
      chargeBearer: "SHA",
      bankChargesCurrency: "USD",
      bankChargesAmount: 25,
      correspondentChargesCurrency: "USD",
      correspondentChargesAmount: 15
    },
    netAmountReceived: {
      currencyCode: "GBP",
      amountValue: 39218.6
    },
    transactionReference: {
      senderReference: "REF-USA-101",
      relatedReference: "INV-2024-001",
      bankReference: "BNK-TXN-5544",
      endToEndReference: "E2E-998877",
      uetr: "b8a0e1c2-d3f4-4567-a890-123456789abc"
    },
    relatedDocuments: [
      {
        documentType: "Invoice",
        documentNumber: "INV-2024-001",
        documentDate: "2024-03-10",
        description: "Settlement for Electronics Shipment"
      }
    ],
    paymentPurpose: {
      purposeCode: "GDDS",
      description: "Payment for Goods - Consumer Electronics",
      remittanceInformation: "Invoice INV-2024-001 Settlement"
    },
    paymentStatus: {
      status: "Completed",
      statusCode: "ACSC",
      statusDateTime: "2024-06-13T14:35:00Z"
    },
    regulatoryReporting: {
      reportingCode: "100",
      reportingCountry: "GB",
      reportingDetails: "Advance Payment for Goods"
    },
    issuingBankConfirmation: {
      bankName: "Barclays Bank PLC",
      swiftCode: "BARCGB22",
      confirmationReference: "CONF-BARC-009",
      authorizedSignatory: "Automated System",
      digitalSignature: "sig_bank_conf_7788"
    },
    documentHash: "e5f6g7h8...",
    links: "https://chaindox.com/payments/PAY-CONF-2024-789"
  },
  validUntil: "2026-04-28T05:28:39.871Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "PAYMENT_CONFIRMATION"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "c011d8ca80ea4f6254ab6ad93f6f4d384fad21949b8931a8f3d39914724e6174"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-28T04:28:40.644Z",
  id: "urn:uuid:019c02dc-574a-7ccb-bf88-4763cf75403f",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-28T04:28:40Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAE8s-RqbIlQndCdnpFm2m-kyAbzzdB3qKSFuP25sPwkKTnlOs9qKsJV__NdCNh630aD88Yy0yvJivKtE6wQyI7FgjgCQDJrsaWQf--4jWlEFGFdkWC6TMJF-axjKPremL_8yWVw9YIIttA5Ta8P44p5cvdUAk2B1qhvau-zZGKl57MgC_IcagmGFYQNAzvpnqRy_WlQZs8SVwe8pUO7weyZN_J0JaKfm4McC27zdllW3xBxbPjJo9ReiLaTqUH8SofPo98_bJESPPi4xYQLFG_Uup_M_Pck5wOd4dodojSOSjZJSSAS4NJg01tvIRnHHEpdekksb-22q1zdDX1gj9a7hmzInSdidyWgPJA9hYQNCrlXiwXUcu1sMMA9FtcYjZNvmMuYdvYi0gE2WHNGPrPXA0Sw-B7Dc9LwgutVHx_HyrrWVMh_pnsWftmbvd2BxYQC-e6rYCXPXN8wO-H50jUyQTn6h1m2dMJDHW9F3b-aB1cI23EM-gjviaGqZxtTH2k2oqvnZ4hyRcaV0v8nICiLlYQNO92X4n4ZBY514ndcUuhi_uY5CjwAvafvndbvi3-aJNKK73RICzV1VAFWru_tdvu6Qla_JvLBK2NbeWO_AyHCBYQCP0Rn9LVd4SNuxKjUHpXzWQSCXOp1vMpqtt2-YodmssXiwZX47sMs-hM4WYUDPJhSthc7vAfLFtdqKqgM0qX91YQMYncAQCJpE0NjzXCxhQhmep2FFPmagaQgNJkNAVMhGW8nfiv50sxKVEiw4P4juS-haGQ5iIgvhboQqm6YXek0RYQLuE7ZlKIkfoz0aA6xoGvDejQNSFWrw7AHEbolMm3OGl8y91wDR94hU2_mZBvPFTKs-WcFwDrroQg64K8jQ8wfdYQE1xXGRqobF2rJoYfaDwoDEApmPuXOV-ETkSMwemHurcNohZOsJE3c5wFpKbhdT2Irj9rFanRgKw7V3sduVySnVYQG4-RFOo3lagsLHBlSf-iJKY3H-zL2Nij4PM8oKpWTy-L4T_UnsuswCgv-VbAkFvffb8xwCCRWZ7MdghyPDJjHhYQMdoMtMU9ncz3BiaJIU2fqj0CplSbaHoN-AyKc7QJtk7JyY9Cr4TK-o0Fz1vMveTLRa9KJkCuhjbETRM2nxIpr5YQKvIKBqmEMVJ-3XSq5O4cvyC4oMfc9TdnMUoIQYrWCm05Awe5LKXainFaRnjfrEHt6glLfl6El4WkVNPXdMMpxlYQKhIxD3_GDaWeELEJXQMU6Tq06AFVTV7KR0Yjrp_jKBKBaqbfPvVDUJM0RK7ZpJPmeA2rK2Oywxa7KPerJvEPo1YQISRQxAAFjjaq6jYKHPfBKlZG6Zkf_l-z10_31GasZFXdcLEoZ3rGK_93CDUa9chTysl8ffKAgxWO267cebVXZlYQHRzt1vEZf8-WhvlpQqVkQ89Sl4Q3jz-8W6cwoqHGjfWSQ4AKtHYaQR4t8C7cyr4ntezdWnUIt25dkiTy1gtcTNYQOToRDUZe13itu5prEE1bjkTlJrmZdiDpEavyWWA6puv-pRUk3o131plopSxyx9cL5TQZm2crYc9L0XIa-1a-JpYQG-4RgLvO1IqpeWTpRKizwmhUaeuE-MLrgQA0xt6qpCKGaV6nOtdXaHPKPs6e_Z3bKjEGLY5gnkErcR-4Jz5yntYQFH1aLA8GqYalNm-BGucM75kamphGGy-jvI9QJwXgJJeUaDj6aaL1jIOkSOrlmTM6wGd1dnW9MXKFm6cY30W_jBYQEYuO62L5Y678PfNWwqcEGMlgXkGlLAYIZyaHHwEzwLv4W03gSRht_vonNQ30pKxSS7lTdzN1OQiByTZCHuARB9YQFNm5WctQL9iiRtIEPOo9zst9cR7Nf8GENEq2LT5VLBqaevhab-z57zn4Ft3udWE-ZnukaHeB-Y5QGeJVqbrTXpYQJZzc9FY_g9CwRKYEeX81tjZMxQ4nKI5YiOTRDX3dXyPZ6Jdidl2LM8YLOewbyX08lKlMuYfNrVjQ8gVA9_i-MRYQLfookIaQrk6w_t3njf1X4KnhG104p1nkiUl-RDCA4cxH2k01dxMgn4h40zvaAp1EP1yuYtmk1bjMvsBXNPTDWtYQM-WCOItp8U7nlU4N1hfq1zy5-xL4iK34BLNRQv1C7orNszrPP9AjZGP8Be8McJOtDDHlaBqyKO1YeJg1McaXk5YQIv8sxw5KfLVY025d3ZQvRP-cK0sTuXfwZC6BVAOVRFzmx5TAMJccOJQ2o7JcU3Lpze7wzS9IlQjx0-N2Dki0jFYQJ1xsJuIsguWF1RDMNCEssrkD76REZjli2KF5HSHb_MyzPvtUF4suEQxDabM2JNEqd2c8AnbDo3LlfZ-Z55fJmpYQOAUeWzDVdAS80ZIKMz9t3SAm5FbdoI_ZL51Pb1ykgD_--LKyrly_niFioaN7-wsWRNypNCEEou0-kHUNELC8G5YQMrRxL6-Fe_4INACfu0Cf_bPHVYF9JtsdygkqwR966P2a-v1QqUwBz7Yf4HSWnPTUgCCikXt-O3UqjkHej7YwbNYQFFtcIf2r5L7fJDiFcTodex69u_dxqNoxIiS9PSvrMSq1_YO1WDrgjWbEXm6rGSG4s8Sdwbr0d8ocrbcP5zPuThYQJXUVmxznyKqIXDKvEBXUOfKRuxtr9fcrhqNZhxGQRF5aD4nzKp0T2d-lsuk5snIOWnybDpkxydtFtz3t8HgsnVYQFJYBXVka3ubpNFpWLztdTjPzfiCUjrXYDt0Ghn4kMVCoUfZgsjcDFTwqLo8AugUPVydbfjitpFhrsLCRSVtgIJYQBGuxZGVi3s0MvaLb4Y2wSREQVY2w1X5UWAb0Kg6ycJ81zVnE3yajbMCbvFIhgilxLCp-_vkIDY-WuGHNxthbm1YQJsNYLtOPgq5cig_Dt4o-YpV4I_O1WrSbBCVEKd_6ZwwjBQt0okcSPbXY8MQN8Hh7bM-v8KGrFwWTtqI0QMqGMFYQG2uZidXwuMIKdZOoTIbHfSw5GJbfO3FMw3iacqk7EB8Ri2HR3p4D5PSPOlwPMjB_lsWpQ_YEEfbN6DyKEhX1sZYQHk2VsCqplIUQsVaGYp1tlXaN5Br05h3zJP5gIiCKiFFWw6DkRSDYZrgSX7N-oUYKdx0BiQLM9mB9LkwE8r5y25YQFZcAdHB1dMhmvfVLwvNSJxefneZ8LzRD0emvMS1607P8QKGd7v1sGqq303ntZ5f-wfkFDbkdwVCbhIrKCmJ6jRYQHFvOAXFOUBFZKN1nPlr0DwxWZ_B3HxR4dkFM2rHx00lnv-EGjp033EGMF4qIro5lsFIYRpeUgyvUucq0waPfSVYQE6wgX_IpEzWhjR4VQNz-jqPCgPsrfTsig1Unr1xN8MsSaB4Zp8EGUSLMziji4FyhIdQA3VRB0umrhZ_X6d6h-NYQIusy_3MxRm7c9oT5eASTvSwkaj2FGhMFRzWcWElmWt91ClR332FfiBjjfsQ5U0_BHcnOkrQak3ryrrBK-tmUMZYQH3vj1qHlCnP8YQhn_uWQzFOdusTArZTXbomp38HC4bu4j_WW5djvAe7cCM4QXlzOEtnFAQciPGR1LPUZ5FbCGtYQGPsM1vbOaIiYmzDTw1s71VR43pFWeKQ29jDjP57NkgpEygPFZz5P27-Q978S1TIK2ohW9Etcsu-yhVhWsDqhC9YQIznhLTiwy8HjUq2FVbJGpQfvT5GrBWTNvOrxrVPsQqiFDAADqfcC0Km2bR_iZoTMGyWl9_P9BXdWtqsXld00GJYQLSS-c8VXzfPKKSJxS4_kaYRJ-n1vNw9w5634eGEfi6DTWBYeSA3ZUgySjnwVFb9FEIUzMW8kUFUjFP812uHDwtYQLW5iA9FeGdoNxTbaBCA8iaR_RiQTUUGzFHlaFIPWp2OPtdKpPqsnzlyqZXRWAUcWfT5MT_ViUXK0PV4mEgh1ddYQA-IAnIrhOTSA8a52X7gu3-WGFPV6ep0waK75VxUrgP5qjHfwxW0-wNNmqlid23qYb07fVsiDZUJ9N2dWSPcRlVYQCo_kRlCRs9x3sj38OwkkR7VrTf0r_JGAbMz3u8gMphU293OhubdkQJpkel8CHN-hjn37ESsLoqtvm76ST22fV1YQDxPKZp4Enqyto6yEjcSpKMts9lO7v9e7Fv8RpnVtzizdINbhncGf2-6BmjDlzAqk5QCkcfWokqC4kAoT3OhFL1YQFh815V6-eMhJ1mwBkXLkYZ3kwmvcr05zytrhkaJDkBbGXIQlGTqzlvcZVoAnJ7Mt2N0E_3ONB00uLPo35MQ41JYQCCLKCjcKn0PgUZ1OwNTBVDAo42rqkRKiX9190cJh1LoqDz6a6CVSQSmL5uTKGktNoB50mqldwtLkgowSOmaCtpYQG40UcroUiZZYLcplNoyrVjHaonbAEy-4mjFbbRK-By6mjqopYbnfB0R9sUKBcGfoeZ12FelQMZ5CoCXOJvSjVpYQCtvcrzFEJBYVtVcnk4xMzfxRZts2mgij8ns8qbguR1o9OzcuIbtjI3VAVuUbzSZgDmKKYknQtlxiqn_ITS5rwdYQKbQDx_Mpier-Q5AGERQjHz1pqX7jwtNT0t4qkAqC8udKe-NGghxXJrIfBR2i75zhpu9mT8ZsNNEKP2TMMPPktBYQGGE5-pjCpdQZK6t2XF1b2eZCjuTSIyv-lL2eAbdSTMq147sjhR316vRhKUTnZCjiZtnpaTtgJKElf3DzpdJzklYQMkgbMruX-u36UpMs2PYDEZOPhtnoJiG2Pq_B1xcJERX_3omNfQsDtfeG8nl0eUpTTvAwBJ58d9fymBHaweUwMlYQKFt_sknR-BUwoaFTeKqvDCNXhDGbdVn8SNYHOERwA7wlbbS4XRuLjqSTk-EwozFGH_lmzuTb5gR3FiB5QhTsoBYQOnO6bMD161xNmKY2jgUsWYqPQT4FA8I5ki3ZmylVm0LkC-sPbTuUpQKktnY9c-x8Ybqx89lMWMd_E-6NqzkL4NYQGC-H0MbzGxXGUoX3jN4KPl5d6ps5BN0NGOiKFz0X1WzsL-KV4EO5UYqh-QCgUHPXNoC2HmP3N-TmLi3f95DNdBYQPxX0DkHqAShOO1PI2ZJdU5P_oF7M2hF7rrJ6gbWjdfDk_kyZo4cZoL_7nqp8Kur0wIBm1zqfm3WB_6FZ7lLW6NYQMUGyWxTUrK0dO6PuONQwkuM-l15lhnbTb-sWmCMibufxbUxPTFEB0MUAwSsIx89oyfxwyBOqBVoIOHjKAwzeNZYQLQcMJtFgLRs0Q3xmML-25uXby-77KN3IgDLyRTWRh4R-AiYvXOirWw9oNJuSrb_iKuymjZCgXPt5scyRFzJM2NYQOYlLEykExiALa-IyUczNlv8jBJE2Ejy2vsL1aJbT3P7Z67fUde7dMCxjskuEqj0nmvN-mHttkymi0TEsd27RcVYQA0pTtqpft_AIj1WTX-3h683hHnH7yh0dtXprh3cmZP7fKgqfrTVhx_2kazPPLaCOVtOWWe8AKa6JHBfdXVYfF1YQKNED_HR36AKk9YvvqYXcJ-a9QcOkwFoybdJk7_hQW1Ag4u5AWp_XWwBKiVTaiLGjdSRrlHEFx_4AAu4nIYMqSdYQExehMY1aDbY8FFBcvAmREYL2Tl_AJuadjG4XYu8XIpEzQN7XOQBs3N516Lrnm5vdsNy8puw6XqEdsdtCeg0j9JYQGLbX8sCwop7f0bwPAsSrJulZikpE8Z7brfdeU_HTUATS-Qbrnwtjesv_G-ZNaND8x6SztdBCGmFVktjIxJpfUVYQMIVFi8JqCRBbkjW_iPzOBt4oUFLtLchysJlsu__HkPciG-RQWDso1y0vzAcZF4V6LGAOFRrCsO6N149tuw-wqNYQN0PRmUJ2uBjSDviuxgNUGCEPhfg2Auv4iG-l-9JOOwWy_zaaxQvQC9zJzopl9ro8YYGzzmdbN_9KTD7H8VdCAVYQGtZJ1wJygH9Z95yW-btlMkUB6IsKcIApuZZ6OdB1l8c9Kup-eNUUyE3JxJajRO3rnOCBDW2uinn20baM-pwnOxYQEcOqap8DhlXCpVEfl-Ac-3d3AKJV-UxLuvkvjT8meLdiQw2286MRKLcVFuKAm6XQb1LeQ0M7fnLp0hNBuLeI3VYQKMMzPeVRSKrdk76W4b65U9XWXDz0XWt3_1jLwvHz9nXg-B68svvSXBK4UdOyUwA6vM5iDtqXj5yZT6Y7syZsvlYQPb7mmuWfo9zqUNwywDciRPKcnxD7Q68xZmVecHi53Sw1tshYkb3aqej5rySbfWU9Ga1xgyMD237c3XBCR3TgEdYQCi6vk_whCuMLBnYRTw9tMIxHd1UqBJ9ZD15SdgM0QOV96uC7d9CiStMqorrPN6RfqOdu22yAnDyiiSZw98pudFYQL7GGYtdciFAQUHGF2Rwvlx1SHvaGr2fAIwXVVsRfysfpLs3zJMuB5H7XHyT3AcFsCknWgW4Zsv9AzJG4ymQ-8VYQP9AtlN7BwWZ7cLh0hQiVJ15crpvmIw4mDN6l3byC3htQHQG4VqO7r-R_Wa_fokkH4MoqLVq489PzLJPRcN8zSJYQHiQMUY6dyoWoMJV8QzS9julSO0BaWPVLkLsaa9H5THkUi_z7m-uzJjMPlfTBhLy2NESpqD4hYU7ocPXDfXSD0hYQBxJDRg05kURCi-9TphEALO8Z22idygSm6pSsh1STE8QM8m7DESggxOp4mAihulBPDPYepntkx4WokmpMMXWM_RYQG47qwrT4itd4FHQPbIJq1Z-FuenR6XB8IEx3iaBcEz7NQxHponLJEhviyvQsgG3OZTK2S0eGOSe1-V5E9Ur7WlYQLMjLUe5lYWQbfk1m8jlgcRApFay_oPZ4AIc2rCIOEj9LSwmK_0DUC-gQnrieoyQou5cfTTaGObUEvkyhqKGQ2NYQAPLgv7eyr-WN60SO3o3jjfLoQQP182Q4MbgEitqcRZVUlD9aYUhmcjrGhfqF72iPNaaAzDb2KZ--c0tM5A3eGFYQKAiwU6atNKa3v9oLjrvMIkcxrnnO86fA1_IhI6Eqhi6YXx9NWuqSc6Wv0V7RkSp7CHuccEbrUdxjZh91KWRU4RYQIa4kaA91FxmtLScs8uE-_WQ7NZ1Tb9VL_IM1hT-2FmZfJX_5xAECUGnmSDZ6dfI3W7Pw2dE0stY3oPsfSfnDHdYQBO1wsKSLJqNKslowf_P1q836TMbTgPhe6q65Lu1XC9BSZSPdsbUhI6Z0ChBQ7KGYta2pEUD7z8TjZ9BMsZv0wxYQOU4xIVn0FbUHYWtRfPvNt96JKlRcizO1e_ISayaSMmP9iDnlFgcfHJnyU7npv51STd1Pwiagvak5ozJ-fNCUgpYQGg74H33ekMfoPHVaGnvt8J3Mtweaqb2tv5WViKxvZjJRxqJw4F7fAzkmqn-8Z76Z-JnSTcLnxkdOJ-DVBw93_xYQFw-Kgy9aBcUPp7wpIC6cIFe8i_vRB5-Y7x8YwumWG1fDEGGtOiuN571ZjUrJB36Pj_yLls2WizBzUs6RDvY1FpYQH-eRHXlX4TlS6B_8ig1ysCmq5U_69frD0oRFRK3tdQvFk8QmxLpa26cxADMt-C2iiiofmsf1zUCL7vEEwjKs0RYQALCr14KgEi-17sPlfe8DlUFBg1dXeUupR7bSSU7Z5tJt8pl-GsQhcqWuh4dQOmTeC6c4U71aeEpF5R1LnA6Y65YQFDv0x41zO1ASN-dvDo06XZ7ZAPV-sqJX-KFT1k8O8paVgYMbbF30r2ehji3svemFQQd8Ynja3AdZchpICWtMTxYQMFQzTAe5Dpsh-Df3vLpbcs_kXH7vjSdjAde9YkgNj2Zxmtfa3goZBjuxp_HI2Ak-49trxzJsp1u-jQOtUgugD5YQMu5Cr42g6naAhVxwdVdP1wfdsVAOvKfEVMsxfPb_MlTVdFoSIdkpGm1mNrvpWym9hmrCI6Kblxr5Lkho2FsYjJYQPolGSrUMFCbK16843SexdHczIusDLXQZ9rOYKyD8TlS0-UH_WJmDrV3agOqwh0LR_Uyp2WxvM-YpY3Mm6SChiVYQIg4qQ0OO9kfoZXcbYEULx955TTQC7L2aK_YV_AenBtg0w1lpAzdd_i6FoE96RvQzU2AVyzKc2CWdYdBIN8wku5YQETmR6DDZ29tsmnDQSKAsC8UVPv3xN20oD8J46LBlLPXAvmx2akprgYvCtTm5Hi0lOTY3WCJsA4G89uB_ZmDf-9YQLFaOb5Ts8Wk0Q_j4GUteBhjD8YMn0x6PyGSPUP8RUXbQ7Kp1F9yPejIILv9GzijdHy2V8KRWr4D-czYv3Pcy89YQLbDH7E4VYKwYJO9WsoDx7fuB9-sq9ZJHTNhFhy9lhOoel58i09Pa8tjYRDanXtYcXsAx5zBftLeIuKvOL20mkBYQCr6tUWd5DbL-mg1waJU0S2XFOy866I2SpAXUoFc3kr6q1J260SufGHlYFvjzOGZcOTwdUG89lzNnYdg-dvROJVYQCOG1hzw5dnWueqFtIB3LanTJYW3XWt6Gfu0Lp_nQ6g5ZrRHpfnp5mXSolDreQ2KQDG6muswOvxbrBiwuIoa4H5YQMkAX7B3t-vTZBdaeZn-Mxjr0FM2VrGrCDJ1Hus9pQsHckiOXCnvYIz28sGlYuIbLVMhhmAGfLanB2qWZasfor2CZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};