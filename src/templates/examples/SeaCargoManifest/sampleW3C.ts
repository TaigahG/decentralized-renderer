import { SeaCargoManifestW3C } from "./types";

export const SeaCargoManifestSampleW3C: SeaCargoManifestW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/sea-cargo-manifest.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "SeaCargoManifest",
    nameOfShip: "EVER GIVEN",
    imoNumber: "9811000",
    voyageNumber: "1234W",
    flagState: "Panama",
    callSign: "H3RC",
    portOfLoading: "Shanghai",
    portOfDischarge: "Rotterdam",
    dateOfDeparture: "2025-02-01",
    dateOfArrival: "2025-03-01",
    manifestItems: [
      {
        blNumber: "COSU12345678",
        marksAndNumbers: "ABC-123",
        numberOfPackages: 500,
        kindOfPackages: "Cartons",
        descriptionOfGoods: "Consumer Electronics",
        grossWeight: {
          value: 5000,
          unit: "KGM"
        },
        measurement: {
          value: 25.5,
          unit: "MTQ"
        }
      },
      {
        blNumber: "COSU87654321",
        marksAndNumbers: "XYZ-999",
        numberOfPackages: 20,
        kindOfPackages: "Pallets",
        descriptionOfGoods: "Automotive Parts",
        grossWeight: {
          value: 12000,
          unit: "KGM"
        },
        measurement: {
          value: 40,
          unit: "MTQ"
        }
      }
    ]
  },
  validUntil: "2026-04-18T07:56:20.556Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "SEA_CARGO_MANIFEST"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "c1f26654283e53f24a1a50bdb6be87766b14a4f0ec0b93436a90be2811790b3a"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-18T07:56:22.610Z",
  id: "urn:uuid:019bd01a-e6db-7993-b419-4ed63f9af411",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-18T07:56:22Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhALbziQEtCFYCFgJiYZSAHPYHBl3I2y8gFnwZ4RvR59RiPlD_7Gj1cAA3Po36dqFit4wJRSCrLnTHxFYw8WidrNFgjgCQDyqL3ncHGWdbuY12alAPAblXq2S19HyJ56My-VsQUzXhYID-ABKiEHUNP2FO4TM6eHsbzjc_eEvxxHo11TcafCdS5mC5YQP_evVgewqaGt0b8SfpEUIe5jOrdCurTDLoEmTYJ42knFU7-pBuAGB8rzmwhRCZUtEw0HcCPUQYnLpfKzjpfkIpYQEIqbUD0pGxE4GzDz1S2DavYMRk6E7lOcLfxg71qP33KjY79gYq2PILhhMDovv65W7XkSQTzZvPqQ34qqs2zNiFYQL7dlKLtwFJa0YKYpCxWd1Ls5kyCCJYpz5PXzwJ2N2GMep9OVdqgp1dlw8sBwbNs7lqH-mwVNayhChQK4UtCymJYQA_kfkD1ApJG0buKhOVyGU5RbcH5zKCzr3IN0CpMHubTnf1se9CJbyxBlOuNAKiWJ-YUSZpu9qUFWks90TY53eFYQJlSdjENYXbGIXjrEzKut5EU0DVnGGbhl-xJux6ZpikkiuR8c5flBDyPrlZdfrcboiuKEsOqeQPF9v5adPAJhxdYQBHmWDcbBLASnxO4KTNCsbRpu6DzaBbLkB3hNBgAxskGshh4TxfghXm6-km_NpUMRCTn_Y64_etC8Tq_w_kzzdBYQN8lPPlAJymsOvHRLA23n0t94QFTvJmJ7pZBGupGiD42cEDPdAePXBy4rR98OZTWK-2Hd7sodLZU0BBsPbwbcmhYQBpsC1TZB4BQbiDrIS9EuOIk4u8CwQJWhCs7iy8SWCMaiVMT6KKDwXRr0QHDDQ5ZlAyARm82qM4pmi9TZPXO0tpYQCp4XttwuNBKdKzDXo8-4yugUAMO377Syy2O6Zq-hdL_2Nc8p1fCiYMYfD1eBUaVP0m7zPc4JOvySuKh9VwSEJlYQFahr1cXJDQISyuB_pbBjlAvHnrxBdD4-dm0xXaTIv53KU3r3QjtLao8f92NeykyGi81h_pAXalV26tiFJv5iYdYQODBucrUYvqJNPab0hPYCXsqi_6V1pBbpKFpNy-jgf6922xEy-ogShY2VtaDspqGqjSdQAoKv8Nlbhpd54-J7MZYQG_BnaQxLv9x_M0yDSGSMSvKHFkfhpcTtJ76FbN92_DZO89cCHkJxfEV3BMolStNORpln1hJpzIV6zqihnQB14VYQKjEp7ItPrhjB3V4e_pis53MSWR7zgCn3lv9QeFwDlbgySfGWSg-nO1PpqqI0H5m4hLzDSMlEJROc7pjG0aU3q1YQOjh8ElAKjDfeVv_8R7XQHBJMDwHMIdBTwV79otOeiQy_XMa69Os6E5AgO4djl9tBCGuXzdwW0P4IPOF5qG9Y7dYQDJ_Cdd9CBewWHYPkvH1oD47LIb1ZPjfZDdWQQMIVGOjMt66a-a5UMhsoreYx164ROeqpL7IT7g10PPEhhmzDKJYQLkK220lbz-QlPYAgo2Epc23Yy7x_k9M1C6gSYa62b806llDhhs_SKZ2xNzp4iO8uv-hlzAGmZHgYW-DdV5g5ddYQNzcHY6FdDRbnZQ7JtsvZ_kG-JOqGJDcDX26ElaflyiH5gFCsm627Tn6QNMSMMaFvvM6VI2ZpYqZ7wHhWw7_Ob9YQLf3LIOLmIoQT4CD3r-IbNrivR0-FcIWiaSlWLPejndj-emyXSqpg18NN28K2Q5snddoka58lFLgttIqSERzJdRYQHKM9jjfFe75bp3K_akwwBTOp4QZN0yMkTrtDLTRPRdUEzvtio8fySRCNMYrX1aKT5KOkCbYFEysgGR3WbC_xZ9YQJ8nuB602u_27JBETZnGTaNlYlb9frcebsVNCZk9gA5Ux0x73Jkl34iTq7Mdy3g8xMXGTrjxw_Pkmax-svq5e2tYQO0ck-4YCvDHw-gZEmqjUUp2c5SLG9jVG6m7jNyjfH7agxwXhhPI6Vktqbw76weofxw35nYBmzdQBe9NYcVtltRYQODRtENfDo96rVRwkt8FNEq31mTIIhGLp9qj0fNxyNhCbh7G1E-BIErChnuJF2qSUfuzWPyrnvNJ1ILUamGzcOJYQNvTWvrEmjbASy1-8Ep_p_mnSFNUmzEcMoIdi4svD1WigVBAH-59oBROifrZGukQ1PoULLuhjuEgCwcvaNzNKkJYQLTTHCCfI46mgie4Tqgfkfig_1W9p1mvtsn_eFCRnNabLsAh8aF1SKDGtx3B2EciRan7V5c5O0Q46E3O2bzY-cdYQNDS38QdtezM8E_DI0NU70uMW1Ze06-JWLY08Zzc-wMiiSmUBvb16Hb-yKtquJ0GxUDm5pCQRNzwJ96RujDMDI5YQDMdnywBW9fYRPRsYpUo90Tc5fTiCrYxrNkS8X2eUCIjB7k755b5KReSh_s4o_HxnROClhR_BAmeFBBFw37iVi9YQMsJJYgde2QH_qVSh5sRD3vduHeJj5Ab1ZzV1GQ9gjWofxdsANm-O_pISXEZ5PMA4f1Q2rGPHKSesBEXVqTeOMlYQK2pq4C9zzFscbd5UlX52KlKjI9DOP4hYDGA5VfgPyBsFoyEg5DAJSlDJpak8ZewVLgxrgz0knCgn7BQgmDmFWZYQHNW6DZWscsCi_QmqaSG8A9p8ZGppbT22aKbAn4YaObBsnOmTBaFhIJ-spFT7lbUdNEERnMH1DWW1rGM0sZznXNYQF9ZR9tGTXhTm9xqI_6Rvq7yMVMKswSVmzALNB6mNWFIlPDwF7RkXBkyxowAlSovvw26wrePk7PwPg0t51SjF0ZYQDRQ1cVr78uIwwLZPZKspFA74nCwJtoFUdHlK46ILA51Z7QlaCKB7lfDkTH3WWflaUUvs5lbJ-iQzrcdK0-PdKdYQEf5lHXbyOOmTbixoKs4BEloqnOY10UOGoivJ05j8qyEp8B8Da_CEKp4L1UCBLtm-gIET86tWmsdlsfCiWp_gLZYQMOxjhOn9MvdgR_TzXOpzwxW_2_ZvSk0ulfpsYZlhbasOE4OKOpqwDK91bMrs9fEtBXzWnz5h3mAR77x8s-cNOBYQC4rV3awm2rlgSkLUNE4Q9mwhHpOlSkOIB_jT0J2PndMXcomtcgcmYSnGO1EQA1ahn7zZomGeKd65pXQcdjI9YtYQMRoX1t9oS2uC3DgmQs75_RbjMGWm1d2QkrhKpiqKhlvmztUFp5juizye4Evs4Hpk2t89qCZkR00yv15QlIaUIVYQKYYlYz2tBrwWvvw58skFrCawqSPIEPLJJqVcso9PFAV-TLFtG5RGoHqcuXuheHc6QuGNUqjUmx-6S5-Th41SQxYQNA0rqzMd3RQzy_RoA8rpwIHV4yBwhA-lbcRneKvwLFLRKlo5EHs0-2Ov02O-5q0P9cYSICCVmZ2QeWvXpmRqUFYQFhCnpRq7LhAGuy7JzMIl59p_bqxlBG0McByA_FjNgQ_YaIlCrZpyYOwa9Ogfqdwq9b5uFzq9Um6pOt3_3n_oo9YQC7HhmN6R6NmYk6rIQsnZKAp3SJl_MA1ZKTkYszBhfEUora34-Z0UwgeAZ_WyZfXhS5FxSLF0Pp1QXGeFvmcr4hYQJZW7AF3M7HbwcgGed0aS2o8LJCKLndanWLYJSuH3hjT4ZoTcV4tF-ST_Vu5TnHzTa1E3EI3_WkkgYebtAbq5B9YQKPoC4EAVhREqNfG5WTSilm3CdhY25cAjeCWLO9B7UA5vAFJRssEPJUZCheLV0fuFTadCkpv4HGyjMqNXMYqttxYQBVBvVtZQN3Gc7P-6EYbrXDVRiXGRxtRxQ3Ps3qsjVwmgK1IGQca30W7NNwDt5319vZP38OSu3IyOE1wjjj-sGhYQLZwrik6hdltcPHXSiI6LCpj25R4RoWpHQ-LUD94TzgOazINT69-WT-IitZ3MhtybCYL4-_Yl5Lqhe378B-W8VlYQB0hsRqv35OdAEI9qGUANum7ihYtpfbU1sbCups5ONcPkwiecoglDoaqNurxB6ExpTbhs8ZH8jM0lzH2PBcoaIlYQMZiKI4LDcpnOMAvKq9bkJCE-ipmy0N6mVfq4c557kh281dwYvLhQGIpuWBpATuFLileRZyfogD8SSW0ts3KM5pYQJFFvOAIE_N2x6l8WFWnU2DMQ3hrywwCColS1XuBQrgSErHgNHFS87Nl4mL3cPPnDyZCUxsgT-4JM8ESQ9yaLjuCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};

