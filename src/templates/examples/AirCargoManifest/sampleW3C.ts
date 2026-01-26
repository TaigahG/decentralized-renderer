import { AirCargoManifestW3C } from "./types";

export const AirCargoManifestSampleW3C: AirCargoManifestW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/air-cargo-manifest.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "AirCargoManifest",
    airlinePrefix: "160",
    flightNumber: "CX888",
    dateOfFlight: "2024-11-25",
    aircraftRegistration: "B-KPA",
    pointOfLoading: "HKG",
    pointOfUnloading: "YVR",
    ownerOperator: "Cathay Pacific Airways",
    awbList: [
      {
        mawbNumber: "160-12345678",
        numberOfPieces: 50,
        weight: {
          value: 450.5,
          unit: "KGM"
        },
        volumeDensity: {
          value: 2.5,
          unit: "MTQ"
        },
        natureOfGoods: "Fashion Apparel",
        specialHandlingCodes: [
          "GOH"
        ],
        uldNumber: "AKE12345CX"
      },
      {
        mawbNumber: "160-87654321",
        numberOfPieces: 5,
        weight: {
          value: 1200,
          unit: "KGM"
        },
        volumeDensity: {
          value: 1,
          unit: "MTQ"
        },
        natureOfGoods: "Perishable Foods",
        specialHandlingCodes: [
          "PER",
          "COL"
        ],
        uldNumber: "RKN98765CX"
      }
    ]
  },
  validUntil: "2026-04-18T08:13:52.799Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "AIR_CARGO_MANIFEST"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "6d32018ac4d08c7322cf67dc3ae84ac685ca24feb53296b7c16d03a428e26389"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-18T08:13:55.405Z",
  id: "urn:uuid:019bd02a-f758-788e-8713-41c9c7886c26",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-18T08:13:55Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAkY7HrCexV4eK2s6E9pmyATDCcJVBss87DvnVAaDKbzIIB9o0_-Y9fU4k2paj82cFfn3ru-eUkTM1DLzZeTAC8VgjgCQDhSWH8mZQeygujYbbOfOJAxKJCUP-c9GECPl1gUjM1jRYIBiI6wy0mON6VILmqBc2AJMjhWf1PcQc13jMDrblpOnEmC1YQFDRZq9YWJw93WGKTMlHkgK8ISoqj0cSi2UcH25xHVZE2GCFsvNR1tDTzHboXm-nXqUOoEWJtRfSMzBKUUv1KuNYQN7ENxMsqQtcwTy313aZfeMVTa4mAFR5jBvR4FQJIOZJvh2TqLhuw9J5v2zeLRJrmHFK749DR2DZZfjjGQYk88JYQBERn6fGl37R4RUKfdNOnYyArYKa5XFbEcOztZ4qJ-hPc0ywXc6-xFolZlLtUZfEraw1T1unDUfbl9teKzU_1spYQDQwaabTtFzjg3FYBfDlqYo9tVbEEtyfeaRYbjbDrqa-6WWurQ_Y2vvBCBAKH-TehGU4UYCxj695j2SyRyX5hf9YQKqkwTFHnBe8iOIaWrmy_EhBtfKznJpWG_s7yYvHfVWwMiM4yN-9CX-Vi3QGP1EF1KpEXdNx7uv1O8bsbA_uwANYQOFcqqu7RVQ-xznYWaageSndkWgFYy23Db7mcOlcsznF_eP559htXqDOPxMjOxmZEVO4qRStl7D2D1nNuVZPGPZYQExGUQfdLKs0qwnvv-216vvLzNaiNEvcinLJqUyTLPDbgBl0D1bEB8THao7ls3Zr4MwsVcI_6p4CS2DH5MNQBWtYQI4NVP9I0Xhr5ZILvy9MlzDSJEAYXo63CkzsxZYBtqBnsh5L_SauxO-b5luOqhgzDd_XtUKgH5pMITrAIg_iXf1YQEf4BoJmzm5zmjLYD2ahHBRArZJk_BWGUk2i7Qaf9wj55NcP5bVcI3Yzd84wUJVw0l_xzGsb0OTzviWCCM67oVpYQJHMMpVTBxQtvLwTSvfwDDkxbPf9CdcOfjnumIYTSonSoda8Wjz6OxuD8ATlZH0z7AFemqFLZ9XObXIMsGWu92BYQBfBgtJRikGvDwp2HYNgrgVB05eMqELj8lcHT-0sZUbVgn_Lmv25pkzIPS8DoQy03c22U--HCtSzOr5xHzdYqUxYQLjecGv9U7RQWWqN7YkU5a_CimmtP3N7pfR6663iHUiRaev1CZryBWO4oNNkfE_wZASwsrs3gi8eRaD2ZSkVa3FYQO-EP4WzbxNhphKRQ-dXugpXBgVi0ZXOLgqpcWyk-1f1nf5gdx-GY6hGOnKN1qhzcLavTXPdJMprhgvrPK3LA3hYQEwQUtOQ6GY1lssm0QyLVOAqquxjXWObl6JrPeksRsVX6gWorNCZl5OB-v1GB9P4v_uqK4kBoG7fGrtmPRZsbd9YQCKfCPPojD_hEfWxmXIR-8k23BEbwa64j1jmd7aOCA1eHJRg82XpNE8thavnUp9EymNJxdggHn08e0FxuFn5A1dYQObWfp84d9IR7eERhfj5ny_gvMwhj3IxmFbMu31SGML2HzgnQBaDpwVWXKJzb4HOPoPq0ZY_Q5AEeHfB2H1f7iZYQPgg9RQQjypLjNOxp_p8z22U2ktZ585_FA1vkKJm16xPulR_lmOxwmCzlH6O9kN-X05qQZ7bEYnlU1OcIPvDl7VYQOJHVosNxmYu4JtrjpnycTP__mg-RbTdsGVVDFj_vZtBDHh06IWeivs1O2gy8XShGhw2a3gYpK9HubPWa7H26hpYQI-LXr4dYXsf9u9RgO0YBp2TQRR7n3TbyEYfwmLKcgIWUiz7i3z28NK3R-D2DGVkYmT3e3Xp7akMOQZsHBchZFhYQOR4xUI_pcRO4k6BwkG522P_jGBV5Fpd36dRpjPkkRGuwgz623j-3AmtcKoDRvwQi8-kieAj59VvrgbNsra4T2FYQOAbvHIJcB9zCadgBYjvleT6BUmNpKupYxM_VqCTL6E2zLP08EeaLE_jsjGwXL_CU2MBjERhteXACXFwrLjU58RYQCs21-FBu_u02RMKgiaPjSuMYUZsvRGua2EFxSd1HOL2FmXnC6c_mDpCcExbbrC-IFmRyRdJguKGwHe0V69beuJYQAGDFVGYbiKSIkwO8D3l699DP7wLAnFyo0bs7d35PScgzMIFi8ixvYkYvstjAnIlmsQDrsU0y4nZwOX06QKsv71YQECDGmiZww_RONSoqYNttl6XdRSL5wif5XZ2fusqfz-wbCMzRZw0JTvVh_Cb5DqbsSMQHdn6gZfwZvm_tE9muuNYQLN0eLnPCdnjKv8pLgV-gAdSfoiAcpuNUgFivdeat0CXGoMNOSu3TUleaTyiab7YhSECeBtZNbcp4Xebf2bp9NdYQJizOdw1EL3Hs3TvAujbZFDvvY9kbTIrzbeH83jgoY57MxPhY06VfgIBMgsEez1DHLP74bFRCaUosC724uosGgJYQFItSmnSoQvv8SPwWWBuHAno7hBhC0_XklelBBu9N6sunHsHk1MQgdCivB-lg7Vroo5vpor9422UvzC6UJvMZoJYQA0m8EKxjgKphhsKn3JK0k6uMekT_vUZrbJ41WdOYgykbU-LDQLPB4SjlxBl9bv19wqnlqXod4sFNjsR2TaMZm5YQDD6SgXQuIzfuc27RUwTB8chYX3s7ZCUn1RLlNye6yPABagokgUaLCW9QmVFhwmoga8kWG1z6mE1C8Tz4HAPpQRYQPGK6vD9O-4ZdLE8EuvN0w6Y13XZ3OxtQD0NyYRlip22DNCNBm4YzLf_b9FAXNiaFK68LSCZxyigA6Ggom8KyZJYQPh-lPLnEez5IR-Au51l9mC6p4ZxnqiB-yhpz37gaCmBDDpnQiune-_kCvZvXm94Ah4iVZgTdrSGcJbb00t6xJpYQL4x9A570cHoGqBN_GEu5wgarK98X_Ixf3P5SgUQ2yKCcOIf1jcfqcmIgo45WAnOWrY4Zh9wAdK99eaFdFTsjAVYQBf7L_2BtscYfSarX8WXtsP7MNOgB4L3qOlWIB9MN7xkOMu5Yr_1vnd8c8RhcSgBmOl4aqw9ShYsI24bs7J_LRNYQI3HgWEbcK5kNCAHrUD6kiKX4SuD4PrV9zF1MeIuRSm5G4uJcUL0ZQJWIzq1jdxoz0CYCj0W8ASUOU3hDg8UdTlYQBeu_Z8mTu3qIrDt2ogRb354XVwqBlphVUAuaObd3gPf_Z4B2C2vDo_nDW30bxdWb58SB-pnAytGkixigGbh8axYQAqHHdJ_sCz-ucKTGVnsgir30Rs9BHJ1k9xJ94F0B3LV88NHhilx9i1mIdsCpRJKnj4LSIIZ4BBLyie7IY5UCcFYQKdPIAbdufAAw-YVmflfyTAb4sNMs_pVhTQNthyx5lwiS4YfCCTy6G218DbJHqk690V5lyKxP8fi46ozsA4B6ZFYQNO4z-J0moibBDxI-mcWYkMnrbieGpeb3k_2EpGlTFh4tjZzxDdBIquz8mtPF7m3UR9OY3H0JASq6Qhf1NZkaelYQIlvYPz3lofWDErBm8TpKJcDvI8FmFq2HaqCmLYEsRjRm8tMo8pGyvHVBaF1Tz8-jROTFD7NlNdAXFo4pBUoiSJYQObnbeI9Piu-YuFXlj9BlSbbQCfeR_zTINnBFTy-mPv98iKt6pCsnkUZXmUSekU869OBOeQ-X8RfEowjlqll841YQJWXd65pR1ki05UWgR1w2YOQby894r-spr5IPjBR3Fjz0rS7Zkj7oYwZxThyRSvjHqQEiKcBo5RuWvlGkvttAI9YQNHl3xf1kMHL5DFOEaES6I0cdZhw5sUATvzK1gOnbjltcMJDgezkYkcDDFjc3tf7Xcjbl9gmHuU5ezOJzOhWKv5YQAYGb_izMl5J3cSJ9ZHhhwkdP1oPoGmG_he_PYa31sgFShjDysAtRwzmBQpFDe5hE7jL9GFzUkblMeZd1lemPmlYQF0_K36aCSzE3oEM_jfzaZlQAUKSxgAVxbI4kTpEnwZkTIJ1olmOW9qcONuP3_FbXNKdy-JAsJ2VaE0tn63rpxBYQJ_rKcmrGOYJ06EBt_9ORyY4A4XpWCgJmCfJ_HNl2QaHe1IFFwlvuq4uwmbhqgVzNHZJd8QBQVOxYK1MV5mGaOuCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};