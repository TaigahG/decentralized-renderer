import { SeaWaybillW3C } from "./types";

export const SeaWaybillSampleW3C: SeaWaybillW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/sea-waybill.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "SeaWaybill",
    documentId: "SWB-PO-2026-0321",
    shipmentId: "SHP-ID-NL-889900",
    billOfLadingNumber: "MSC-SWB-11223344",
    freightForwarderReferenceNumber: "FWD-NL-55667",
    carrier: {
      name: "Mediterranean Shipping Company (MSC)",
      addressLine: "Jalan Jend. Sudirman Kav 1",
      city: "Jakarta",
      country: "Indonesia",
      email: "id-docs@msc.com"
    },
    consignor: {
      name: "Indo Palm Extracts PT",
      addressLine: "Jalan Putri Hijau No. 10",
      city: "Medan",
      country: "Indonesia",
      email: "logistics@indopalm.co.id"
    },
    consignee: {
      name: "Euro Oils B.V.",
      addressLine: "Waalhaven Z.Z. 40",
      city: "Rotterdam",
      country: "Netherlands",
      email: "import@eurooils.nl"
    },
    notifyParty: {
      name: "Rotterdam Customs Clearing House",
      addressLine: "Maasvlakte Boulevard 50",
      city: "Rotterdam",
      country: "Netherlands",
      email: "clearance@rcch.nl"
    },
    placeOfTheDeliveryByCarrier: {
      name: "Euro Oils Bulk Terminal",
      address: "Port of Rotterdam, Terminal 3"
    },
    originalLoadingLocation: "Port of Belawan, Medan, Indonesia",
    paymentLocation: "Jakarta, Indonesia (Freight Prepaid)",
    baseportUnloadingLocation: "Port of Rotterdam, Netherlands",
    grossWeight: 21500,
    volume: 24.5,
    goods: [
      {
        description: "RBD Palm Olein (CP10) - Fit for Human Consumption",
        numberOfPackages: 1,
        typeOfPackaging: "Flexitank"
      },
      {
        description: "TBC Palm Olein (CP10) - Fit for Human Consumption",
        numberOfPackages: 1,
        typeOfPackaging: "Flexitank"
      }
    ],
    modeOfTransport: "Sea Transport (Vessel)",
    containerSizeAndTypeCode: "20G1 (20ft General Purpose Dry Container)",
    fullOrEmptyContainer: "Full (FCL)",
    transportMeansIdentifier: "IMO 9784321 (MSC JAKARTA V.42W)",
    transportEquipmentIdentifier: "MSCU1234567"
  },
  validUntil: "2026-06-21T09:26:13.798Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "SEA_WAYBILL"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#7",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 7,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-03-21T09:26:14.675Z",
  id: "urn:uuid:019d0fb7-7595-7ddf-a0e0-96d6c85aebf6",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-03-21T09:26:14Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhATPi9mpYFe2OhXXCR2oZHaPT3w2ZDpQbD41kPx-Ct-CSqHnrIy44BTSSGMYFN6VvKoVRTTpdCG3RnIqfqk599DFgjgCQCLAsu-aVcTA_qG9zXmkmJWTrl27WJtp9k0VTGbPBces5YIIHa2auc7-OKbTGqkwMiL_sxJzXMKkjxw0451PTiBzDemDhYQP-VWrCGHzGsyko4aPzTF4wyABwOA6FHAO868aer5kS7Zjz4qZ4JFdWr_ruuN4IPake9EWfyCX-X73_xMOUJIbpYQJn-fmRqZB1-dtIX-mmguSDCXMKaob4e3fuXzOqQuyU4UP6IaoJ3qJIZn30ogRX9Q7X5SrTDxmy3DEkdPDTNZIJYQJKv_E3mqGLgc401G2lwbXMYtLAzNsSFyjcanfNc2eWkureAuWKX18tK5HYCtD7wPKv8A7lHANxmpVe1Nw2a91BYQG_Hbjr86-h4iWUEZP0MwLhOTR4o9Ac_PPgMn5Uz_Q60uoAythTiwfrnK4MX_3Z8-C_vdVhkHa6brQP_hJInp2RYQKTbGpIgK1b5girvmekJrkpVwJeRo0aeagYAHggupc4fSnvirHbQFBPoXiQzABJIHTVYm0N3_JklPoNgTd-38fxYQEh5D0tEmPwRD-1XfrPxLRef2YJeQop_zVFMBxvuDPlRUeGACSKSXNsC872mR8LM9h6wqEkEcbRUj9NfL3NJh-5YQDwdGeNnO2qndxVFYREp3dxCbmMlZtVmvvUqclkkVDwn-Apw-UrHG3xQU28harswbwZbrJaF4JuaWuTnUe-5iWZYQAErSBIfx_NuaJb9fm1t5i7dHVUWP-TfK8JsyePvYywQjOxxm6pcXOgcfyR4M3tKZyJA_DW_3Hr7YCll-BVFS3xYQKJGa70xI8dvJ01Wv6x09xc8XxLgQgH6JjqjtmdqUax_4M8mP5mxpwtSLZjxX_xjG4g1rFphyiRsq8sCG7tYRWNYQAadyZ2Z0PFSLfJVKeshl-gKXRKvBQpv_wRe7wZBrf0SWEN-ebgUOwjOBRsRfg7l0_AcfzMvUfuwxZDRt9HnTNRYQCT_HqWF7BnVO79NvyoJ2fU92ZbrD8FQZsNpV7YJDTAw8RCKpZe3QX3g0CyszN_f9HyKyLobUSmBhC2-T8svyXhYQO4bYexc6ASUsY-enkEtEeVl1ZX46mmLFmQwp73C1F9rmHLLYES84cg-ATzASk3UcTaRHYuhyA8fp-Y0f25z0khYQEIb9Q6fAjdhmyjzKwcyco3NldTtsojuUzwdSwErUJ2vM_0-Fwmo2q5CgusHXeNcBrxufhmmvk5VhUSbDTUnhtVYQFLs5EQkk8mUOJyYFYg7T9FwtbHyBPUvGKAnaywkYBCGYNduajKnCFlWPe8DeKJNSd3JdAv5oyJFUGbymDsgdBBYQK7RzDBb4-Baf7dDfoD-npqfQvCP0xOTht062SqzzXBfwfFgkOfteVqKuYad5eVToYsfz5TgxmrnW37egdU2gMhYQIZxLjhaTmyI0uhzLyv-PLx3sZfokk-L1nhXUm4AsNuO2X9JgpTD5GwtDHlQ49gwbBbtMDPv8qnbiif-2KvIhhRYQEKMv_maez3HWUUgzwXENegt3rClNomfdezWeTQkpwyVAe2x4h8fQbgbjDMAF8mtfL8ZOYAyRmI4QUUrQ1n1SZhYQKKhvCS2VCEREW7YOLII7aqLNe0njYnd3WQnzYXBnBd-lHarNcj8OLVGMS0LgOXkMNaDZZT2FFzefx3zyzj1v8lYQKITlhOVD7LmaZq8IWFWqwH_eIrgRbH_sSOi356UdPEUY2c-OyrPC6k1QZsb7hIFq0xrkq6iHvtQQbo19Bv8ErFYQDH50gWpyVQ0TaBSlaxLp9cGPFiW1n9Sr57jfwO_c6bsL6GO3WNDjRXmKOBdiw7iYl8ulWs8T3v7zAeJ1GzvXcBYQOam0z56o8Ih8AMhbvpWbVEqrXTCMtGnXYWl_K04cqM-BQ57ZuvRqv2bZw0qOOsX3N35B0G00ObLwvGCY83TBZZYQLnOre74-ZvTUjZMATarXYwr4wWiLp701fos_J_14oninNh8WxfhkgHC4UjaJ4pxO0qTQORQ6_IA7y0MSF2_0epYQPb0Hb7llD3GY9Byv6OQOn2O73o87wBEQEE_h5nFVeuFw6cKII-TVKuaJ5kmY-HO3ZP2mfJuypPGjvOSD_jLCrJYQFrLJQZk7lE-htc8B5Z2PatLQV02SkZ4zwEngRxiK2DJPC9atdFeYFmfN9uTiecvv9gkHvC4GvMO_dUMMJQjyspYQKo7fB4Uh5_DcT5dVVqDaXiNPb5zbqvemzkJHIST3wSnaf40w6KS535hLwNSsEx9s3dP9p711MP8EjiRtRYp_mFYQAv5h7d5w5M9_i7DiV6hLhPdn-EdrAYuBOfyAYawons7YnkeSFBzBin6c3WhchUN0LkuXyaBKsbGELjCpXJ-Qs5YQJRVi0sj5AfRLGpGMwlyztxpsi3aQdnmPBEjlNZKj6Ef_COa_VUKUW9VGVvwqMlRg7-m9SaApbid1H0RRjOlqARYQPxP1sCuoELl4xfog8dl46g2-PTC_DFE5m08JquM1VhNzqldEXOS7HwiqLd-XRAm9GSHs6EYvy2vlu3KG6yQt_dYQKyb9F6sbuWJgKxHEf4QQ-iL-NNnAKpU4hhWGw1m0KHMfbYP25r93zHxRFiMOUP9hf0U4IQXlG5g68eJsL3BI_1YQISM1On-jGxG20wdEmtixQ54TkU-Lxq6WJnd3wch8M-8HMYcu1YETo_F_cCIxFMXNGxf57824JE2A5ezHuRMAuVYQJOHCf5V_V1YwrahYvJrsoZBaczuICOk6lHzH_8ap49FppGlEtfGDy7afTDtDKNFzr2LMZh-gr-3-b3PeggcKzVYQAWPDVWLFZNCkjyaFucRffjHGo4WR49zXm9-hzyfMSe69sH27P5XdGCtoHUM67COhL2S3LYNg8hNCnIjX_sPymhYQE2ifrxE0YOuzcLVw5peded0qy0pWjuhQQ_QoHcm1IRHO06zdly0Hu2on8e6Ca3mQ4y-KtvsH__4OFicay-AvcBYQIfJmxOV74J9Fyn68Lkl04yw_wc3YyjL-ytrJth20axOwWqrbpBAlA5zAE1VsgTTX7F0m8au2K4F7Hq1E9KMV8RYQIDEUG5-ErZoi8m3ZfxPDQj11XBs76RV5-sJuIPI_qsOd3mPBbds7Ep9N2Z3xVdBc5DuldDmFzMl5mal1VLoMrxYQD_4JYvHgZClKrVp69GZ51qC7MORUCMR1jTB2P_mveUSqbiYfuZwyGsnvDyuaL7R1yLNwMRBYPabMIsGyfxjh9pYQJOg8UaXTRK03xzb8CRs8n1sXcDC5jwVtBx37PWiWkONyMvl71GM5zcvunFe7LZcCZYkS_Lm7bDEnIY5h0nLrIVYQMoVn1Brf5bLdXpyt6C2Gsz2FP_dMzc4rcf0JVHEXH0zhyM8K9BHY5grhQDDhG-D7XYskv9yKlEFlAMmyciKYA1YQFQocDyedU3sEudWGbcUo8i1yrpgcfBRmiZf6qQ8dVrXGjyDAMjn_jMRW60G6nAQRJi6nBOcQuuqFW2_DvvlFqxYQDG9s3iypBGpw9hYX9DffPJEdmGYf7hkRJBXaogIgzVRf2elhSP9aLrwpPCsL5apuQXDkDwNmZgUpoWYNNRiIM1YQDTyLPYHkjnQ9h5uLjYK_ig4AfPJ5DucsVwGSJvoBLNNO732BXAuS9s1Txt-yAU0vJ0O4-BcHLGzrpNkqMrn4CZYQMYO6c-pPLvcXMJZpYmkwCBxqkkT8TNp4iPzxaW3ssaHsHNv43AM2uxeqyIKLxajlbD7adNC8dpaDNZ_hXQWwkpYQPrn_9wCA1ATHHePaAtm4S3fDO7qL1k6ZF94CTD0jrgVeVXZdcbO_U7K06q27HEM48QclSqBGk4HdAgWfu0psnlYQHWMCGmf2jmfHPmbJCfPp2Jw3waDlZfl7EPaO8i7VJfcXX7vVQbOFSdQP2bcWhpL7fTkwt_qJkrd1wGF1EAmIQRYQJKoRX_QU92QuM7lPMaeMmwGguSc8IPRRrE22lFyGr0HyS5ziV-5fJzMQ3LWVU7Y6Fle3eAJGJr7kHCNYEbOEgRYQIYDl8BxB9mw9JLvUDHXHzZ1RcCisN9dWEixZHlywMlN017uI5T9aWZkvwxRkvQo8FmSl_o4GwstGz6aPNTPzkxYQC1Fw1j0Fklyk-9YkSQ-gmHaFOEl92Zd1imvw0gnYSpx6IzgB8DyUSnWz2hwGE3GO1BEeHjIRDmuKspJ0lzbfFBYQAxTuACzlIEsXeLzI63tqNxD9T_uFZC4sbmcMSkZwelURYlC0C9AuspHF6ZnnxeNIOEUyOQ-s3LtsTxSAd75dN9YQGBIBkG2YaLQVbZGi7in1MiE8de1QZ4i6MPBcsmn3F09zWL-KoLeR4MmXFL5kE_pRqz6ihtZQu942v-_YtNX2r5YQL_oNswbmwn8-pNoJlCqn1M7ERl2uTiRs16j_lys11RREZcWJDBHca42nGE4h8CgxgQHF6RK2s2yGRU4rCVetp9YQAAJiOP6VM5IoVwUbysYnguyv8ndAUzmKN2GJ7VlMbsoqz-1zJmM6QwZQjaWbCxSLEMgZ8vNexayte1erkkqawNYQFxf0b8rpjTrkfSojeMzRK_XVLcE634_3VK62uwJpwdaCkytn8USVT3YRa2tT4VbXB-UfpSOhYN6TkR_5env7rZYQEQle9YHY1YIaW0bVoAsgOFX-11FbUHknaayw-NR7gAPx7-LomecaLOsVmllsJEekbD606fVlxSKbKvbOscs-h1YQGHaJqqezS-Gq_4B01Tj4CvoIob7jp8sUz6d69xoaBpunmLwOIgrKBTbPpTL5yWyDy8ynMXRG29XvuP0XmLYMepYQPjTpv0Ospwu_Uj8haV55zNSfQP0QAvzNjPZvsudZRi9Mt8eipBorbbITctVM3n3_-Q1DLvFT_6qSdnVGmrUpP9YQOKICnwm0AsjTGNqwmYFA7duSsLiC-0iPPFMeo1C_mTBVhwVKrFjFCDH17HblDgo7nrTY8JyFiwAhYEAE32LehaCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};