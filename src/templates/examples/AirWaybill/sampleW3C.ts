import { AirWaybillW3C } from "./types";

export const AirWaybillSampleW3C: AirWaybillW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/air-waybill.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "AirWaybill",
    documentId: "AWB-2026-NRT-LAX-001",
    shipmentId: "SHP-JP-US-554433",
    houseWaybillDocumentIdentifier: "HAWB-987654321",
    billOfLadingNumber: "125-88997766",
    carrier: {
      name: "Japan Airlines Cargo",
      addressLine: "Narita International Airport, Terminal 2",
      city: "Tokyo",
      country: "Japan",
      email: "cargo@jal.co.jp"
    },
    consignee: {
      name: "MedTech Solutions USA",
      addressLine: "123 Innovation Drive",
      city: "Los Angeles",
      country: "USA",
      email: "import@medtechusa.com"
    },
    freightForwarder: {
      name: "Global Air Logistics",
      addressLine: "450 Freight Way, Suite 100",
      city: "Tokyo",
      country: "Japan",
      email: "export.nrt@globalair.com"
    },
    transportEquipmentOperator: {
      name: "JAL Cargo Handling",
      addressLine: "NRT Cargo Terminal A",
      city: "Tokyo",
      country: "Japan",
      email: "handling@jalcargo.co.jp"
    },
    consignor: {
      name: "Nippon Medical Devices Corp",
      addressLine: "Minato-ku, Roppongi 6-chome",
      city: "Tokyo",
      country: "Japan",
      email: "logistics@nipponmed.co.jp"
    },
    originalLoadingLocation: "Nippon Medical Warehouse, Tokyo",
    placeOrDeparture: "Narita International Airport (NRT)",
    arrivalLocation: "Los Angeles International Airport (LAX)",
    transportContractDocumentConditions: "As Agreed / FCA Tokyo",
    grossWeight: 450.5,
    grossWeightUnit: "KGM",
    volume: 2.5,
    volumeUnit: "MTQ",
    goods: [
      {
        description: "MRI Machine Components - High Precision",
        consignmentSummaryDescription: "Medical Equipment",
        numberOfPackages: 5,
        hsCode: "9018.90"
      },
      {
        description: "Surgical Grade Monitors",
        consignmentSummaryDescription: "Medical Electronics",
        numberOfPackages: 10,
        hsCode: "8528.52"
      }
    ],
    conveyanceReferenceNumber: "FLT-JL062"
  },
  validUntil: "2026-07-15T07:57:03.430Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "AIR_WAYBILL"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#12",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 12,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-04-15T07:57:05.939Z",
  id: "urn:uuid:019d9024-d415-7cc2-880c-1f2517297bfe",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-04-15T07:57:05Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAGmBrVO1tnwN3dG3ht-NukunirFRpXoVY-1eYTDjIiHjT6ieuWkj2QvHex0GMzy0nnkLV3n_wa7biOsatjPSUWFgjgCQClZQpRt-JUblutEfFoPcjVvuoyE_tKhMW_qpYySq3hFJYIPInCW6GoxSvGyne_ANO8SIcdKg7qWG4XaYhFfenYYj2mEBYQJ6w96ZNUYYfTOXZwMYf82nobkGxxP81meY1jH1Lsb1Z_8AeYzrkJTDyjsK8Tvx1D2Bpmu7dY4tj_Po02nMJNYhYQIaL_R3auWR6pC25m-R7Gy2rRNgN8JOE-K2yKROyTFrzAaFs5pPKQglP67C1u6xZEBBwhmjzCRsDwYAzD75HZ0tYQM2R6ahHFUx6h_Cc9FqcvrarH1zaWj4W4woX-L-G5YYizLiI7PPtkMkZFpP4A_yglRPM7s76zsKCkCsudOeDm6FYQI6lyrM_3f0Q8afuUg-lXNT7RIbeSlPj-80chPFYJKJGPhtcbwLGAUJCDx7Tb6LPrYeXPkEg8O41Ov5WUPhy4_VYQAvNaeZXywn6qN_vykOBJfdbsFKF7p6KlibXUMjmR48enc9oMyNHPUhNJ_5Q-i-9vVy121fRlm9RrVMYV5LEwdRYQMKa1p4tIn6kSoxAsOJcetP3vjoQgnvI7lrNeFnarMnW1TPY5ZlgnN53iilppGE_EAa8TRmgksbRHwzCWmU9hLRYQGM0ntqK3ytu1qOgomN_FEdF-PznLZgchxpmM0qkK0QiTirYdCWxED-RwXBYV2KFbc8nQvewQelgc5X3P1pnc1VYQEV4uvXwf1Z75ulw_qHdpwr_ZVCnHZwQKU9a28b697gxO0o0lzrPCso_zIdR2JzLMqP0f3ZjSWjRDGOebgQLpcRYQPkkC_BC6KH4KY21EUXLAjbM0Gdibs1sLU1W8Sk_W_FRqVciq-0i-ZkToc0TdmQzLW779fqzVXEclVnYrzDAkhlYQEiHGiz4w9fqJrnXif1jgPUgxxAD9Mv88Yc1dvgyc-ku9PPhtI5UTyH8QypUqrwyf5l82qk6SYmuBQGX2dGomNZYQIUJiCwEU_9Pkk9nI4FVWq92qrXrHTbqiDlhzPlIO_Tp3sdQkjgKbt2i_q4XfNFr3wyVXFtUnk09o14w_46kC11YQH2xx5GtCm9VxIL3IUay8T3OfDjabE-2dYY0I8YQi-IdsyDVHp3Te1XZ77rHWkNlgCAC-e4thLdL6vSMAWNfKYxYQFSSjeUsgfVQFz7pHj8HKjOCbOlH9FJWKqgnUQDnMWUCBVNSnIxK9dURaZ3SxNRR0yjePY6Lzyy2DioBkVd2THJYQHswnY_-oZtSI2b8cfelqtqmmYiGdbcgrWHQqJzNLJh5oJSfRTk1UZR0mkIUS6Sgf3KryB8Qn6AkSd7qF0OsC1xYQMuSvmZLuc6ZnWk1EI-AAR7RVtHMUR32WlxPT_kc_bKpMO0PcarMGdApjqfwvTKNVfDajAOHnq_FHrts_c1SVZRYQIPu1Yr80_hj7TgenLvBcMBxmjQLx6k1autDjRT6Fgmr9nb08s6ibJMlvKAbeH3_i-To8S8Ox1LFBVpXrhxoGMNYQJl8W6kaKcaYyjnjMsL0f3ajrhSkMQUs9vxWrBKV-uqsUT1ghapLAIsyN1qnUeBI4xiGnseSpq-enzybQM5NIOVYQEKTowCbgI-fXaJQDewHjklSF1nXE6TEY2e69kT5wCOhaR7dULzOrfZYVa0G5gFEtR-BXx70IbAWYTgVSlz608dYQMlem5_vOhCRpYpy9DOIqe0sridkZoOdbOTckyfxpO5MQnOl-KD3JD7Ryqp7q2n6-GNnLKZ0Kh479MA8nbvsW1RYQC1FeqGwUpBlXlzNLZ2k1KzL8nrSsffZsN4XeY8cgJewQG5gyi4QB8ghBluQwUpxePP0qEXUiZCnCAbTKP1UzXFYQJ8-wz5l8phcP7SiOgWTRcg0rKMpeixX4uaFovtjnI4jsS2w-54b_ozV90IZ2weUYIUwVPMrf_Cxfd7zTPQjkiRYQP77eRFCpuxN9iyBiOXRS9kf_Umi_fRmzearRluqnTNJ0YJM_l5RgRAym29iKWrnyiV-y2C5KCT-jaZ_NqWBSUBYQDK6dDG7G8fPe-F0MosYusJFX1FEiq8clunuR5CYchl2ylMDRMozB6i5YATvUAncSK-3_O8LCmcy8zcv7GmUsn9YQH95qpZCYegI0JwRcqF6ZdJGSZjVZTr6O_ym4v5nraMbwjbzuSU-fQTVCx7ZRGMjScHReXo4AQ8qEP1e1kQXxNBYQAMhObFWVKDPzpFFpuY1bYsFX6fRNPMsbtnqTaopIFtjg3-YTaoYmUrmHfy1cUsFwmX9u4e-URGtRRQsMUCNEXVYQKq01DATt0PIg8zLyacbwZDYGxxe_75ZMThv1aCq3RuTDbxItwUJC48zYWDTrQwVRDH6PNn3aLn0bKrVEE7qip9YQMts1QlPHnnHjYCkO6RxUlf39VekS01sS5bjVLC8lBnhlUSkSw77g8Us_PY8_O9RUkQghlFwIz8pFWrUjjVeCuZYQKYV1ei1Q2ZdK-mKYACtwWNdLFrKzhPLP7RRipZrF-OqYLHYrwB0gR19zPk2rwT-wtfuX1xVGfinaMrqlTjYXcxYQE3AcUhYNYa5KEJDa9f3dJT_Aqk2ijkYzAehrXIpG4zl0-g3DMDs9lekuDnEvUyLzxFJJcpGaDdBSEWFQ_D0MgVYQC-b2SBQFDMN4QsP1R5Iz_h3nb9kqFMJM9euIOpsmk1SKYNeBuNz1kmZC6i8kT5rPb5q0DwcCtQur68wU1kPrRtYQD_7bfm95p1YjtXsYTNVvalepaIp3g9VD8e3cV478rhkAl2ye0lJIu-2bGz4qN-GUV8ROHgP84tUQ1vp1awn9UZYQLbjAet_okVElOAS8v_2DXcitudE2ja6fohgIAIHSaqEv_e8kkjvYQz_pEWU4jk5WPiuLpKjzJBf7iddrdZDzkxYQAps5r0ezQu0c_B0zPPYKoSL-PoIw4bY2E5XWRk5Gm1-58WAYxSc_7luIfcmmaA2qx7MyO7NjjxbTxeCuFEZq-xYQIlsV5EsbuZjcsRCFrNrSkcxR2qSxNiN-_hzjjytbMWziH2ea_mO9ou8Vqj9MOvAoiH8fr370laal8G9mIaREvxYQGOoJNHBt6spZ6JBQR92iUwXWaqJO0B9fSKjCB29SBVqcVSHMdn6khkC3hCN4vUmGSTDOoBSSKpHaxNNieZgq69YQIg_XeZKg3EyvPjVAPtk6ACDsWu2eDgwYTmF1bJMM_WRV-OV84xxs7ufJmtcTTXw_xafl3B3OI0XN-_3T28LD2BYQKun-_VnSLhEwwcoX2-KJnsBde76cQg7fK-8j418JFjqbXli3k6aMHg7BIo1Of4WSTzJ22b1HAoIlWGuaNmWoWdYQPqIJ4zgTwsw-T7Hh3XH3vTRKpiOPw5I4maCsGmNeUXPeM7a3VMAr2scH1NaRi2XzmTP9rq6gz1JEsiWFT112lFYQETkSNdIQYW7WeJvq5nKszP5qGB4RV0MLUhyPLtgv5hzKiczpw-Xb4z51X_ymCZo6KNVulHeQxVw6cVpRbYNqPxYQFj1kD3I9gZsBnKO83jG1KRCmgtX0c_dSXr7Vof8IBvJXttDYP8kuA7RGx1g35c-becvNbggKc5E_M7uage2izpYQApRtVguy8H-TbKnCQCuulBYIN84aVyxIwByuDOLcemy05vg_mYlFqucBNQKFDT3TPHgAp3_ix64zavS_ig-RVVYQNfjgfW5QbDbd7cxYlWd7LF4fGWspG-Z9f5Ojs5U6lgDxZK6oqHGi185qA9sV_gTWzfJe5k-nycqjTbOsqYHZ1xYQIuQDPDVSvbN-ZHZL9aHM2rdO7I8D-Wra76op4qEHwqsenwGmimeLMFotllWyEfGZXu6jDiVbD-fOIq_1HowuCxYQLy6UQSFJ1UEo5S-2JNWX5ztuces52XOhMJoApGDgoWlxtB0t5EFXXMsa5j8Ldlz234cYm_-bCYHPJBqtdP-9iVYQDyHS94rXwFekm87SUhiTezqM8j3O1QWPjTI9eQ774UIOm7nzlKLaX2OmeKrAaKAxWy-bihIPBFrTuUK4mwH69VYQNLnEJKT8D1YWzNS7KursPRv6_jJLCuYwPzZb1rgKZo7a0KAxMqCEQGJRohKQXwosg8T-B6giHC2n1hiIxch18ZYQDFGDpziz0QKVN-yCjWtHWGcWUNekZXikvu4IonvLrMi_53UnKSzBaKyNQZykzN3I1IsZzVBPue2q-HPKK2wLZhYQAV9sOU78qGGn7EDccfzpBGesWFwSGd2lxiF81f7PGWB_HM5hhuzTq_GuwYbwFaxKQg8uXJ7DmFLqUCN1WRxhUtYQKrb5jOH9EHN6I8-dzaivbjJc36NdPUsd47fPwDW6iIKQc7mH6kteBW8ENJQcRnsCCiK4TT3exmnoNTotqAVt21YQEdqhLBL5Nem60Wf0r5b-u-fOy0vmf1rrKGOVi8AcmStweyRJupnE8EqhlBrUpqHHd7NJiw4kx5XtnMzmhT0A69YQE8Fq9aMCsHRBcCMnuZ8ch5CWSjw2gfI2lNdrKLSO1tNquubkj0WdDJGYwAfFLP5TRApJyEen76_iK75fZaDOoFYQBauAv48fIxCK9RojaPvJhkBKWbEvKiqv3hde4XyJ9fQa6omw-CzRcoIfT2mAdIpiZSykWaOGl0y7T2-vWSat1xYQBAJiWtwFM6c25M7LWSX8YcccmM1ZkmpJXS3KSscMwUxwFYDKN5iV2mhxC_QREW9stQZjXlCT6JTWHdJ-dMCEUZYQN4i8dCfF3uEBIUOt-kXJuPJwF9OXg5PmmSkSrqjYQnY6ZennyIIjE-Ckzp1n5EZJmGRK9h0HTAvC46IrYSsLIdYQGYvfA5UodvtejtCPXcwJ7yCaqfvOYr89rmnelwiLS25m2CIIivPQ3n-_JA_dxioH2nI9Ovh9Drd3j2DJC1c3g1YQJ4VH2EnJCjPph8GPcS-4gP0vtgNA66Lbp0oU8JGynLCCv0XVqYqr2oycAUW2YWWWvl2CnTRgURh20x5meEnSDNYQIlm0KNvdrqYNEwSsg1dCerF4oGJ3-OdIxZCOzg4c97AI0uZub_KMwbSos1ua3JCHSw0DhA_M2ndK6fG599QQQVYQNAK4x4RgYCKiJ-r_4cXks8c11enw10GmryBSBXzLeLOmEM_La_xucgcO-WEnfbpJ_PLWSgqmlKwi8GWQ70unA9YQHMFEVxD7GLhu8960zmUP_Zqa7JhIzQVnG6I5NV-wVwVxov1L4cg8Bl5fU59TehPHaSYnhsqoJv4p0ezlQGLCOBYQLUAW7HQUXO7-UvPlgBCiBsbBd8PqCzm4m2iRRzw2_IxyfmyMJUpijG_uCJG0HEPkbfJX4nLl-3YA-jLHdKSWe9YQIXvZvJ6YjkvIf1phViZLF1e42y7qRmGxSitjosUlwuBuI6vJhtAks27NbBPsyloN1eaEWB5S4aIWj8JVQe09gBYQFoCKKguxgkqHVcj8Y5sdRkge_-k49YTlxrXWHnuhSQ1n08WSj-AzembCeOFLNiYqa6OKBdfQLTHiiX34n9BohZYQDWxtHT64pLlTlhV9c9ASoagPLlNVQ6peQLWXvbcrLfev6D5rzucGT2Vm498Vlnfbq_TKKJ5zq6DyStEMG5uv5lYQJLqE97hsDNG_OnZP-T-UC1PaJ91J5i9Gc97wRL1JZ9mBtNwWX0mhN5K1iSW2tJ6l9ujEtG1EqX9adWDwtLtAuSCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};