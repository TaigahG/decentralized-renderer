import { TIRCarnetW3C } from "./types";

export const TIRCarnetSampleW3C: TIRCarnetW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/tir-carnet.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "TIRCarnet",
    documentId: "TIR-TR-2026-9901",
    shipmentId: "SHP-TR-DE-112233",
    documentIdentifier: "QX-12345678",
    bookingReferenceNumber: "BKG-TR-001",
    customsDeclarationDocument: "EX-TR-2026-4433",
    goodsDeclarationNumber: "GD-2026-001",
    freightForwarderReferenceNumber: "FWD-8899",
    goodsItemSequenceIdentifier: "1",
    approvalNumber: "TR/054/111222",
    permitNumber: "PERMIT-TR-555",
    issueDate: "2026-05-10",
    despatchDate: "2026-05-11",
    permitExpiryDate: "2026-07-10",
    consignmentRoute: "Turkey - Bulgaria - Serbia - Hungary - Austria - Germany",
    customsOfficeOfDestinationName: "Munich Customs Office",
    customsOfficeOfEntryName: "Kapikule Customs",
    carrier: {
      name: "Anatolia Logistics",
      addressLine: "Ataturk Blvd 10",
      city: "Istanbul",
      country: "Turkey",
      email: "ops@anatolialogistics.com"
    },
    consignee: {
      name: "Bavarian Imports GmbH",
      addressLine: "Hauptstrasse 15",
      city: "Munich",
      country: "Germany",
      email: "import@bavarianimports.de"
    },
    insuredParty: {
      name: "Anatolia Logistics",
      addressLine: "Ataturk Blvd 10",
      city: "Istanbul",
      country: "Turkey",
      email: "insurance@anatolialogistics.com"
    },
    freightForwarder: {
      name: "Global Freight TR",
      addressLine: "Logistics Park 1",
      city: "Istanbul",
      country: "Turkey",
      email: "export@globalfreight.tr"
    },
    transportEquipmentOperatorName: "Anatolia Logistics",
    consignor: {
      name: "Turkish Textiles Ltd",
      addressLine: "Industrial Zone 4",
      city: "Bursa",
      country: "Turkey",
      email: "export@turkishtextiles.com"
    },
    permitIssuerName: "TOBB",
    managementAuthority: {
      name: "Turkish Ministry of Customs",
      addressLine: "Ankara Customs HQ",
      city: "Ankara",
      country: "Turkey",
      email: "info@customs.gov.tr"
    },
    destinationCountry: "Germany",
    consignmentExitCustomsOfficeName: "Kapikule",
    originalLoadingLocation: "Bursa, Turkey",
    consignmentDestinationCountry: "Germany",
    exportationCountry: "Turkey",
    arrivalLocation: "Munich, Germany",
    baseportUnloadingLocation: "Munich, Germany",
    placeOfIssue: "Istanbul, Turkey",
    certificationText: "I declare that the particulars in this manifest are correct and complete.",
    customsValue: 150000,
    customsValueCurrency: "EUR",
    goodsGrossWeight: 12000,
    goodsGrossWeightUnit: "KGM",
    quantityOrdered: 12000,
    transportMeansGrossWeight: 18000,
    transportMeansGrossWeightUnit: "KGM",
    goods: [
      {
        description: "Men's Cotton Shirts",
        consignmentSummaryDescription: "Textiles and Apparel",
        numberOfPackages: 200,
        shippingMarks: "BKG-001 TO 200",
        productIdentifier: "SKU-TXT-101",
        hsCode: "620520",
        specimenDescription: "Product sample provided to customs"
      }
    ],
    conveyanceReferenceNumber: "TR-DE-001",
    modeOfTransport: "30",
    containerSize: "40ft",
    containerType: "Box Trailer",
    transportMeansTypeCode: "33",
    transportMeansIdentifier: "34 ABC 123",
    vehicleRegistrationNumber: "34 ABC 123",
    transportEquipmentIdentifier: "TRAILER-9988",
    sealIdentifier: "TR-CUSTOMS-001"
  },
  validUntil: "2026-08-10T06:37:40.660Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "TIR_CARNET"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#27",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 27,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-10T06:37:41.394Z",
  id: "urn:uuid:019e109b-1c93-7dd1-9b6b-9f3e4855fe24",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-10T06:37:41Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAMUFwHTCT7IyJ8MK5_nEKS5mEzXnLZUCCeKyG_2F1qMl7PWHOZ5nHgob-MHWELTifL865IpRgoow85EnqukjBS1gjgCQCDm3tR3SZQT-82AjOmPV9H4oAUW7zvfv-8oZBOiaQGexYIJ95Zh14JcFNHMTRKcixI61rfQV6cvrGwLkpDebnBTjAmGJYQJQm312VRnvexlWW-jOr_VsGLi6bltnZqQvSjIqhekt8qglehMXihqgrjFzekG_FsYKqfitL4QYdl99aH9acU39YQOUOQk9Sx419LKKKltnH9IMm_7-PGzf0jEhOk1rW1irzTlV7lcqTrZnNU4FgfXeWcGgthboBVzmUtKlsOr8LfbxYQLkqUEedO20GJcxLzIvGCtwCwyoS9t01ciAh0Cf8oppQF6FgHl3m5-HX3xdB4f8ED8TQxQ7lEA_vKt2-_ubNwlhYQNWspRti6ADVO-XRyMKXkxMgvd3NRnJw5wbSqJu2hkJ6BdwHWup7UR2HbyetxyT3p3AhO6Y_XH9OLu6d3kdRuHRYQGYt1mN3znAWto3n3q9VvjTqxN5tUZhp_cB-1uSsgiYOZtRXDJ4TBYzvYPuxDvU_3WZKsLKNeUi7BY-C_JQfj2VYQOj8eo3PBxqAEDuFTSUOoEb01iYzqp9OHFv4_MzsROwWkr3kqO7Duug601kV4ZebXM18Brn4WkPhlAeKCQU6qvxYQBNNF_U-OqZJUsRPAOMBlRawMMit8_TFBS56inDyav6pjS7-nWNk5tQK3zgL3CornsUz9mLtOnaHeNyLXoNDyrVYQJ_NnIFsLoHV7sVC1VK353eRp0-CPuLM1-UoeCfSUs7V5FLejtJDjuoBeEHm-JXt8-ElGVM1fTGzbBDL9cqJ1g5YQGODC_YsRLMN6SAKnLiCnwibNBIG_wkKxq8XY5siny86ssZFwScqH_ocY4ivKzB8CYyjhXSi68OORjpNx9srYwxYQO7rx3ifbgLHuJlLmBEytyfDXMbHlGlnGiOVw_LZ1d3P77Ej2MV_NjiBvhK26pAlZEjoY5B2M0b8Y9gkVVhwYBRYQOW9YGu1L65R3Opv0T2j2K-D_ZQP2WBJu0vMiGWyL3DNjNldip-ftPAi255K8oSi8W2ymWCPoCFryygddXFpuFxYQJNb4CxWo9w5Y2J3KXgm53g_9whCtJ5Qx9qXEad62y-4ZeB_NK4qwvIszqFhzTRQgtj3za7sTlQ1MLYhBlksRe5YQFw1VVT88xxCzU2M_1V29U4D_GAbwVbyHnZUj3GGcuhZR6RB7O6JLcWI93Tq2hIGUYrAumACsgGM2m9_rtGjHepYQNWnQW5QuqtuqwHT3JmZfJtIqPxSXsORdBkbUZAYczdtoRbeCBreH-uP-GYYKVGqQy2CYdvGhHAUVl0UaC3-Oj5YQDeU8_5kmiUv2yhvei0WZHv6UQZx4c8bq5Jjtj3-bARnIiJK2wF7ucC8RNYLMoumWRY_eMX_4t7122Sivw6U5DlYQEeM1uw8AfgR6D53ngHG6NzOGOjG6wLD1wpQmIBa7V0e16FtzuDREkV0uL10kLW-tFCZ1UMVPP_EJBFQkw_bpZlYQBS-1pH0298_33X40rzUC5KWu9swx3mhcVWXOH7KhHmbm2gGQok-FQ23AUVWHmB1wBeLGpZIuPi_717GuiHFcs5YQAGEeCx8rlhchnd9ORnSq6hkSVC83aa56m7K57jdQxnyT_CX1K1Ml5maZTgfaAGXQ5NGGlc_d6FjcivNdMbX2adYQOPZn644Ma3mptdAFrFUBIayorC1HStQ9rADqmoo-CUe2Zacd_cGJBvr0LUzjUpjVcq21NN35MxtsnQuofMRO7FYQISN5FeINnFdPqNGgSEwmEhtLf2LCXDdjmimWZ6Hqin1bPH5foRC0BsWsyyv_tmGqW7YZ3CbZgHdRExrcuKjEtZYQGL_XUDfFiG-_AAVqZr2w7o-paZRd3B4te4w6RMDvKJljCkV-e76HA8OveOtyv2cs2pqYvkX19Bssevdj8ujFDlYQCKFFYnKOGdip94Bm8GBr8yXsfu4YTs0igepMtzd5F0vXSVM_Qw4Kk6qb-8i5YgtiCPhJ7QVhuhbBAOHEBU-I3RYQOZAkaaU2DkcREmrHZCUZMn6fUIiZTEfQVW4oyYoyP5xSekgPM9bTYIDe9oG6XvwXnMxREVcqsNvGL0NTsBfMf9YQAZSPvofC4oFriP-Rg5vK1ivQBUnC7icGJ6M9iWjNvZEXXChsDspp1L66MsIklKQpSGUCMRpqq8idrbATaxYNNxYQFDgx4C-UWVL8gY8M-dQo2tlSwHNGWt4oYEcoe_oJKe8lsepYntKPdWWxxSJ4HPgpBe1Lz3KL3ahnBWlRk7etxRYQMRTFox9P4Qaf4X7x7gGFswQ18tTWtRrAoCwcEFq2BrGhFMdf9-ho2bX4Kp775BUPs9aWq5MG9cFa5UbTgSGq6xYQHNjEJZCMv6os4ie27kAxOEYUExFkxwy7ubsRwRoCwp0lVFBJDQiAWMHNFqce0vAvE92sGtmtwG_5Sbcmtw0N7RYQItgOmAITgY6MsK73WQ1IxTo2c2CKIw_ldAUin8QcBxC-ilJ-kvqUW1-p_LHYA4PxMl9PUd-ZzXldRGpgBRqZwdYQDyrLUtwW5UGbnzeXPbn-IJLEYOmksc-ZRKRiHW47Ws3WU-fna4F1299LTQFlghwRZq4mLeUIpc-Ty8lFfgViw1YQN67yu0bI5YzKfF3DiRr8tJjKKHI3H2MulXSB3q_3c4w7y6NUBax9hJ9SGorP4HTw-2StG_BGErqrgJg9SWOXP1YQOJZj3f-vv0bAXhAS1TFmPWkM3uFjZhhaXNZsQHMoJlMLT99xaFhfBAKumA3z_meP2kmq9MviHMFbqyvZgvJ40NYQJrhIZumTqhTmG7PTml3A0u915m7VeuycQ2JkdrvdLIo1Y8UTYr4FgTriTZAs9BlB2r_4NwDP1Kt7kCsqzRhCudYQKuBNihAuW9ofU6xxzABXgq5k7viKF3XUtP1nnEU229yqRYCuLuXXz92ovkti2AdTiB8lemipJr7jogEV6IOe1dYQFNyaZgxht0MEMBuEdhz3WDwXVVQaIy3KCnNG-5zGd2BlIuEjxnI0x7w80qaGT6O8BdsixI6KjZrpzgpE8jlkANYQFLF9sVRtTY2sTgrlCR2kasF3n1PbTj3Mjw68cS3YXfNhX7G9HEG2WP_0w35n5zVYPgye0puiNER4jR6cKwYWf1YQLapG2Eo8LSOelMUyx68_1wviMUcNbL-M8Z_NeX5QRw0jEd3-GU6wXArAaQ2VeOTMaKrvQKCrC6cE4nZvK6v8a1YQKV7OKCKis57fHinmyM39kQbf5IvHvMyT_n4c7m5hGdWqIdlgEw6RxkT1xZer1v8lj_d0WAoCOFXJqnm1FZQ6n9YQOZKVseCed2vcowYvunJVTt0w9ShHMsh_vEcE8SnEeukrXo0FFSh7mmkFuBHEXejP6Nq5FvtAwpFJrIKObQqwcVYQKHMSUk5J-pcMBQKxExFQDHaeuN7yLMt_tfzydVqmAlKs66mIw-THnZzElmov4Oor88qp7ig9FPk-EdvpTwfSDNYQLlMu5ztk_klPe_OcQ_DtLd13glSxtWhfkci6QtJJkTfEVYyoBWvCquDcqRqqo_H0PdPL5PSX4BKiP6vJ2VwpoNYQCp4DLsuZbGV_QXQY3CD-Dvg_JiX4g57AwwxcZHqybVmHFxnDO-PlvTDzAGudA9S3zfY5nYxJj5Apf-aLlY6RAFYQCcxUKS9ljdgxtqzOaxoizPt0PA_8cQxMNq58ttJnQX-oav4t2QcsbxtuaaaLRLpl_wINaW6yCohpiREVNQ6mTJYQImX_crie0IyayDd3BVkoBrJu-cxgKopoU-0o5OhfIMIUvKRNW6Vk3kawzyUY8vbz9_DT-ZZDIvzJfJtaiy7VflYQPMMqFARC5px6GqjLicPJuCVtPmARmtjSo4RNFh1DEHr8BuoLZOBu9nSNzDKnnAC3RBXGoX1cYY5wL_XFBtXH3VYQJp0l-MYrZKR8WndyHahlb3xFHVc_QFqnyACwal2SndJ4KW6eZpfIzo4u4wS5u4_n5iZH0B0Xx-qw4Wmeu5lDcdYQMLyO_8C7Ku6JhPDnfzg-ddRn8cdGR2aqiL6zibxtZ-6xuBI_DitJfJQNsd9TFfddwNu5QmA3IsGj2iHO5EgU3pYQJ25ExOjZrvn3IejTzWBlg93BYOWr5JnNxk288NpfMpAFMDBordueAGMfmykafYR3WK1n-NAVs66LoZ-fD9JwyVYQBDjod3sd-reTMh__8eXTQXjkZEsWoCKrfQg8fLeYOowYthYgRe-vbp8nWyN53WNoswMyXi_U2YhrDPrpGbW7mtYQHO-kyb_uEA3yLES5wb1j3CKes6G0nxWkSRf7bDcjkl8OE-dTj3fEEzqSFUXRf8PeRxLzKE2M14OaFd1r-PJTCVYQOobIU4X_Lz6LU0zaJVDs2tvWPLJQgUUChiOwqlxnbMUL1SynT2IwX1-cofUuNjTBWdwgni7gs7cNfbZzWv4HQJYQLcedClRadK8YP_nkh6KHwyMaoQ3kBhY9-jnZJksDgH3Jz9bKPwGV7T9Z18pJybd0n6Ly286jRROq_6OrDQb155YQOwU45DMrktHughdtzGcetSDMMgn-8rSgJSYEH0OCBQRu-xVugCWOSTXAXw5rls7id90O4xzJzGfZB9QCh-YlqdYQMxzM-UeTzi1lnlvUI-L6pPR8sQM1zHXy8AN1ayQF1XuX8IDk_yxE2ebU3LHQrR9T4KuQxpKRzyfxGXU-ABwjoBYQGtSimf0Uui-ItclIZVOQL3GnGoQNBXv_TnrzKkqOPttHnyV2cajICysGxwKCF-Kbh9S3wtOtX8-PzByFpuHRNVYQEcTCphLT2qiuhbB8cEE_rvJrj8bY6iu_QuXXXK5hwxy-jhWTYYDvzqBbyivOeXSWj7lkK2SyRkKe9XdG2omJHJYQBebF3rqwSgCEt-YMyR9jVs7eN7eWknbYMETmHQFiKyx2o_DXGg__8bZW60NpuwosIFVrHMNh5Z1DnhDa7BW1OdYQEVe4YNhaGJUbqB-fwR_99nOAOVBwJa9EC22s87YthcsmGLIMxvw0EQondF9kqEtU0H4_-uV3wzQBcWtaGST_NZYQDqJxxZqH94WanaBypFQ97_0GoUtZ_bPnVVM1WQKmcKwHI7f8X_pJQDAaS1GC5B_ZpqNn_tCgfuMBuuuxtZ4_2dYQOi4poByeh5d2bX2dWHAxK9XKrh4C4821NYDflfym188JJV2qx8dfs9i68erJAA-EpCBo2fK--Uqx46dILc2gCdYQIRARypE7HNkpLkUhMgpzV0LFXfX43YaGWFd6Ogv1ScgVGrS5vsmubgS5iFVU8nB2Jad9dkzTGJyCGh95EQjDBtYQK6coDjx_5vghvR4wMov29EvnyDGVUk6X56ArGwqPIyE2daEthXL0EHBPrgRwUYwCmCxLmhEeU5vlVzNdwjoWmxYQMqs-8v6-uRuj2F5tJcwGFoEmyb0WurPMEbZlL0h_q_PmjnardzD0905gatx6SzIRB8RqLWonq6PEw9FLkn4LvhYQLLrs8vxChCFzEQioIDxE_SUDDjpBvWrN4xT8WIbgqLdxTnhCs5KnILhMg-iJluOacoGaEmJ-XYVLgfi03cZ4g9YQDhqcjOSiCO7aP0GT8RQN7ySMNX8X_ZtuHgI5YdtYs4qW5sAFF2zw4Z7b0Yo4RUGGA-Kd7lfgcT7jJpybAAlF_JYQIU3dTahNt7LktgEjATScMinnkxhnXqEpPgP3b5FYi7BMIYhfbOgFTk8lrMf4NFAtDGMYx_K-hPBiHK57RZ9quRYQMFME4dDx-07cNVWThoxFq6NpzXWUa87FDv7ifmiJZmvJo5jYO9L6XxbXTMr8vFZ3pDtY-mfEjWQoYU3NaAsf9BYQCam3fhfz2MtkNnpUm1cXRa2mDAsTE1pmGsdtYNopvGNbs05mBjmjifW_JZ0CEhSq6DDRcmOY5gCGS9jv-9kfbxYQMC-qQY-wd7_0eOR0Dw_6qFetaumGPIPYx1qy3RcY0FImkmxC9iQOP7qUTSJeaJiKkoLtrNzCLnFsmmAd6o2HLdYQAjkYznzPTS7_MDAdFzyYdZ-muM532Bsd8m3IyNIEcJHychaqq-3zJ2a4Q4v_PK6dcU4lZh0lcTxxCS-2ThSATFYQM6pezrf8znK4082u1lwgKh9qeV6a4XSP621pOG5CCe07GQokRkOdUNpLskI6gxWUCoBuJh8clP9ZasktjjDFuxYQHRzy8fOpIrgBll9LpdWJsI0Jf5Ks6ZGxwDEwHRXcjtbduoI0PtQrFFA_lYg7eWDG_WQrIwgTLGg3aFchDC63TpYQC9xTvStK_BQw0nvb-u0boZ9feiOdftYOUP8gkCJF7rBLeSo-_zgx3VwUWVBvwkUSireK6ZYevaok3Fs1QHdGHRYQCha71w-TcRNNMQZrSYbtjP-Rd3xIqOR3LGz4CCOm14-9YFKvX4dObeDy0cSf2QVMg7NYLIKImsYHs8fUBzpPV9YQDFxO_537MaCqJVp214dLNTx4fNHLBacd7zOb98xpvZlZn4SKK9Lre-bkuikCGgPpzC_X5tFWMgdji70QL1a3WNYQKMVDH8BCqi7lwzQF7MoLpczaBT5X2aD3vBNwb3Djx6DNO00Uk7lsKAnY5P6kx67Si2d2Wo0n28tt4H2n4zrXQxYQEzu_qMFiAsgA4VwUjDkdrcW3YWtwrCtt57nyo7Db7ubEfV6TwOBPi1axtXm00ut88Vb5Mm-hGQ-j9DqBw2BJMNYQIM9zWnPYPA2XMt5-9yzWId4PI27jHxbfW9DQEMsUeLOq-EDZGTPvhH_OKeZ33wjsRga6Ng6KqRKC6LkuPkydhBYQCpt9DB5pAlYcGqTnsW4K2hoAkgojy2wCBvDPMQvo2RysIxxwnCrdaysuNPqebOk1QfDJ6KwWDyV3a1LwIaYZ-xYQN6A5j4T6twlsVcZHBjpVNfLPr40-cHwNV62E1jQPYZ3HVsEmK6lKbjyqGNyJume9zuhjH0AsmY2S2SrFU1tS3VYQGpwm72lOuFw9gWwOTC8_ORrWkYUYKCGz9lSIqXLav39k1qTe_PAgB-hRKcDZ3DArEiNYsXJDU7g3TYFGPZL-utYQGIrGJD5j1BkW6dTWWhpqX0rO9_4NO7-6EuGT-BN8Z1BbdsvYfSOsVY08PLRPa1vlWK04jLOE2sFt5kC0Eyz7QRYQIrIPxbuULFpu7xIzsiVolYu1H4eqyul1b_Q6Xc8XJarzHrgdNhh8pmuqnmUh5-dOAFr34M9kBG57MS-n5ZSjz1YQMyay8IqWX2YjXDqvWhgENXybm56ygDGiycnp4qWaSy82-1tmQJ02b-CKrcwzO73E1N_wJQjMttjYdRUHiClTWxYQM6xKRDRulUAV7fJADBF1ICQg_L8guF0hsdQj3F4vFjE1ZfU3VNfsrj6WwtL-Fy0jKb0WsLDtvJKqRgFDoqfgQRYQOQh3UUO7eUGt7CaLcRiJ79EK0P0RtV2vTrEwAwhlyUEZnW4R5gToUVbjVN3Tlo-dwa19zBaKvMkJDzIEHRaMnpYQMb8GnsxHUr2N5hL4idRxN4WgNGRO8zPqQkKWAL2CZrz0L4Qzg97yxl1A7L8hMNjHg3CwIkMTXBJpfHs_PfCDChYQNh1p6j7gtkii3zLaL8BvoIGH4daBSfxu4zPtFQL59onFKvOIrASs86f_XryvBrP3SFLxN6XbmekbBYKM14H9SJYQDvyDi_bVKr7Ltx5EytUBP0HgsX-_Xpv7rVj_2B-ETJmG2t_ch8IhTSji6sDzVbIhsaJhl50uxjxg5HFY_Q-bd5YQKm1O0kLGtBzopkMDmFLmQWtJ2T9zuL_8mDZBXwOv4unQrr4WKWMov5CKrUm8DHy3t9B7u4Z4UQGajxSOaggRdxYQPpxDL3UFOaz_fKkONk3yfrvGEehkAeg2wy555cD2NR_PV26CApD-Lwml9RsNP0Kmgl-gEdQypJYUrCPZAHNugZYQHMaaeKxWPqu_zHn4Oh5tlWSHGF9wajJTWidgYrIQ8f4kEkzkTQp8Jf3IJWDamWJ6TjwFX1L6cHwFjbB8RljaLZYQKoO_jXJ72kz4nFTKN4Nhnj44SlS8e1IsiTVI4sD6DaQUJomKu5e00NoryDXPY3NG1M2PpMWvAR8pkIbkL0GmjpYQFoWANsHEaUlwipzSBmzEyppaogC6WwmuuM7NJeIUhctOaHFdrl_HPSsrYBMVgdw-_TzZ12ybY_viJb7EgkxEY9YQGx_Zw9cfg9hZ4HEdfieK8mypn7_0cbAt18qFV7kU-cNayfUCZ_dkRyLvsOszIWLF_TE0bBo-vvErg5WVkK-6SpYQKgB2iTD_FrzkzNW6rDXKs0eMfTZ7MczhvyRThEJzV4hbW10FgdkiEPduoo9NHzeeL9VEIL8hntQhMUbfThHdplYQGYLWQ18stfANyTsVGtQHSoJuTrXF_U1ifT8H5Wft4V0A3LvoU5ap3SEHYAZdw0ijG8PI5B1PTQXN0GppmgnGNpYQLtHm9RAD1353uNd7CVMSp07AFzrRIHRvKAJgRZ6E0pxiE3lyZbHyedygJ-lRq6vo6NfmHuNcCUXANtHWDkl8AZYQPFJGzn4ZPsEoAmMxh0NxfvCPZ-1ex2CI2bOSdl6ndZrmrqWq4wokI0VLyCc0Zq0aYjn5Gw8NHVcmYWgfzEcsdSCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};