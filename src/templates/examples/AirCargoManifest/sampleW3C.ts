import { AirCargoManifestW3C } from "./types";

export const AirCargoManifestSampleW3C: AirCargoManifestW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/air-cargo-manifest.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "AirCargoManifest",
    documentId: "ACM-SQ-2026-0506",
    shipmentId: "SHP-SIN-DPS-1001",
    carrier: {
      name: "Singapore Airlines Cargo",
      addressLine: "Airfreight Terminal 5, Changi Coast Road",
      city: "Singapore",
      country: "Singapore",
      email: "cargo_ops@sqcargo.com.sg"
    },
    transportEquipmentOperator: {
      name: "JAS Airport Services",
      addressLine: "Ngurah Rai International Airport Cargo Terminal",
      city: "Denpasar",
      country: "Indonesia",
      email: "handling.dps@ptjas.co.id"
    },
    originalLoadingLocation: "Changi Airfreight Centre",
    placeOrDeparture: "Singapore Changi Airport (SIN)",
    arrivalLocation: "Ngurah Rai International Airport, Bali (DPS)",
    goods: [
      {
        description: "High-end Electronics and Smartphone Devices",
        consignmentSummaryDescription: "Consolidated General Cargo"
      },
      {
        description: "Perishable Goods - Premium Seafood",
        consignmentSummaryDescription: "Temperature Controlled Cargo"
      }
    ],
    conveyanceReferenceNumber: "FLT-SQ938",
    vehicleRegistrationNumber: "9V-SMC"
  },
  validUntil: "2026-08-06T12:57:47.459Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "AIR_CARGO_MANIFEST"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#15",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 15,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-06T12:57:50.473Z",
  id: "urn:uuid:019dfd5d-b68c-722a-b25a-3e65264ae503",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-06T12:57:50Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAGa9XdSQUybcToow2jJ2XEW_frPKiGoErVIew5Jyg5pTcRBJ4hNtRT1ZtKH-k9-sClnqYg9R6DPiWh02sO2XRhFgjgCQCpe0uqZW9OlESMRXfGo3-dHf2r8vX1zpBGLRU9Kb9ntBYIKX9YxFLDGlJN5ibkfo52-sfB6uL1xonqPdneDdBIwpxmCRYQITrs6wlO0uMUWSBAXB5N4OrwyZZfs8ENg35lr6oHNx5ctKsorc2Jl0oV0d01K--o-65NNLV7IdBl0maVlroaddYQEZQ69z3ZZLXhXr4UEyYbQerG9hnXLPb20-MmezQg6tgD_Y2Fk2LM2VsDoBzdYwJAX_iFQqlZSXUMuEjq3Vk3gFYQD4DfCgJ3HZ1tThysipiuCVBEWZ7mqLC2YDci3meMZ6ZKMbw1PMX1crxSzstm4WE9CGOQDvh87rPYAuQQKOXOW5YQIajEtNPMNOhse8I5aGyRY0sqmjdvF0J1V73qNls_xsbbNLCQvfzs93KA_xhConb6TaPspvpclRlkaVTK3YtocBYQDYJxxO0vM-J0LeSlkWPdFb_Bb3TxguFjhHvMDDxH73aluvwh9NXnPavzcbhyO09l0oM2TcKaYEzSjNFPRvEkFVYQAPU1965YAlmKZ_76TxzVk691j2tlUHZE9wu49K0FiQ9Z3AYPK6vC_5hnWhNMxNxnO5ayu3EeVBMkMuPDtWeUtRYQL-Oj-H0Nld8dZhN9ZjS164szgVukAGLDY-QKjHN8esmLKIPkZ5V-3-NDDj6FJ_Od98xkbNrWXTKyn4jNEWO6sZYQC9x69j7cm2tkL_SveLfjzYY5n3e-Do2-Qx12aIaLIjZtez4vJPJwqEcL6s5I34v70dbWwuIieqV7c61Xl4ymK5YQNPbFJ845xKLVgC-tAMCtuFGjrK5XN7A52f7QEFrSX-p9oWp7CBjqIF12OpuOaFmaKSts_6HNDj5rmeitSX_R5ZYQJ7y1WUb8WHeu6r1vaTcwVuAMHpi_KyFxITR4FB6MH26Zpmte4BL74nZ1_GWGGroesB6iD023hPeFDf75GC2jdFYQGKvv-Lw0XavDUKyihrZSmrX1IuVlds26sGJIU5Lu-DTbaVYcPcLaAODNJQ_VXpH8Ll67VhjQk9iBG9j2mi8w4NYQF3Q46L_DN2Nm7rsmWBLY66M-epuGZRsQgMZbqbvsJPhAJGSrOBJyWf0X1VW5XoNGnw-WW7cjcSWppUmct3aFtdYQOdO2-82M2BauQ-nqHNZkiyf_4ZcL68Yeh-zwPUdYTzTFHeOEsNBN6LS5qZIIBpDaL7S9c4tP6N7uSxn-wggpKdYQCRRS6klIylg1_MDKtlGimxtOM-txxedaVkcJhV3JEgXJkWCNB0sfKiiJ3VetTTjd_xhK7gaCe18PvdY4i3sEOpYQN8OmLHmfQRXKMa9E9qGKqSPs2RHQ3E61UNGZkIKbZz9aDBpTi8zDQcVRkBDIjDfBAlODZtqWfR2D9Dh-PTI6iJYQJJAZ7qSJY_npoJGDVYh13WpIb-IQanIolk_yeCnZmXnShr5uMmCw-dsX4EiE46M4-RKXpZWAwPR2pu8w_05p3VYQDSI92yXGahV317lGNOwde18eBZssUX0H9vrX54KTiZPpbOczPdlO99ZyKVqPRJWD4SogmWQuR0gspBzQqq3xKFYQJm09Qvy_yDMSgGDcIpx1X43ncc4JCk_j1sGGUb34VlpL6a_8Um-vd1FPT0CB3ZCmFWqTmt5HO5wLPCATsQFucBYQDQkw7aVQ3lr7GBPcV9Yo0g-hYYejrPCz-CPGfmaRFGXWGJ5YRtOWYeFp5QJ__pSuyACop0K8J-jlGdPRJDNTVBYQNnQ83ifoEJSDxz8oUrP3rJbiF-RygRU3DWFiGZt-fV1O3tPZbH3DKKJhXkIRJDKpVC5YG_yCq0lNIVgIFpQyrxYQKT463LokWkm_F484bpmLT0cHTdkKmk7pIfC1108o-49YP6pJWKrNJzkdslgoR2443-wMRmxWLUa4ZKtdF1baB5YQCesktWCYFpeohhvYSiveSHyBCdk7LwERCWpzz-l5pcVl47s57tREB_e_JUZUYehW7lzD5Hl9ukarHDGC_sAtjdYQG2IiBkqe3KLrOfEeysO9qQKOxu7r-26kOIRVpDWDDabPwJuV6WkzsThhb4Yt4J8hcEE4sqXFnqVjaasRaXnLidYQGNRA-UOcyoCp4ZOaavEaJ6ic1NRZmcoepfYXlOX-p_5N11SClnIHHaOXQ0jI_M_NZPbtEmqdIy4pb-c9WTa_X5YQKGoxGQqXfCwm4sUcpvNyZvU-ZJGWM6_kyDZgO0pdg_5CS78D9ydKe-vXtI-0BcrFSM8Qnkazit9kWC7qJSAs2pYQFUoygmAHqOhjRa2YIJ50fa58-Q0O2oZ59bVjCObcT4Pd7xuawxXyT9b7Zh9LRXM4Ft5l6p2eCtrIdmY0nLrv_9YQHOkchsi4lwmxhZb0el8azdDNtXCQf9ETxW21J_ooJ6Ikj0FRnE--kJZ6r0b4FEn_tlxMsbKql4f2rsIZJWyVcRYQMgoKuQslE4scG7MsZ34muAQtgSFHQYQ9MSWtkFsM__ZME1rmdXajqsvv3HMpABF9DIe_Q9KPOWq61jUr81afDVYQJYCCzF35W46ABWr6NyWv1Q1GhkRQsf4UZH4f0WWCVHXlsCmpXE71NNbrku5zElNhq_6uV5f-Zw7eu-3MHkiAPVYQIpxo9G33mz5MA-XXyPNcjzIPgcB2GaYuCClRVAj4tJ1TYs_yw8tx0n15PZ0nROHfAEB4yuNFE0bQ0fbnbKb_blYQNKFIDlLt2HNoerH_koLSboelF4Ylv9seto2RdXiS2FI20xYSrvm6IYVQ07Ejs1JjmLwAztIJkwdlgIpvSIZ-gJYQNGwCIRr-Sz9MAMvZ920O1xcGQFnp_xXWr1SD-jA8mXXmvKRa_e9byX-QhJ2Oqz6vJb2SzIJD3YMSn-xHDxZMZtYQFEckt4syOwd2pLWvDK3t6eOCZonBgmhg5tnXy3sbL8EPgHbTO1Wi5bmmA29QpbbFby3v7HnnXXtBzYJ9htWSSpYQFdXyRGU2hwaSczMDYsTfLuGGCV2dSC_lOZzoW4gut5bf3RQBjp6uU5BrEsNbflx7etUc7JVxQWgy6e9RRcVOaJYQGNsvolZm4R3a05-sbeGFNUejC_5D9e23WjKl25UNsiTfL6S1uiBEX0DYFoyHtZb6D-bMx9Rtt_5QjfogK0--SVYQApXz-WC3i4lSUppUm66-A5RQN5qRUmS7vQslydQSuknkyFkaJpjeDsIFWLVfbDsZLTD8OTdYt9M5sWisMaJhrmCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};