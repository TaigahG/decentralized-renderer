import { WarehouseReceiptW3C } from "./types";

export const WarehouseReceiptSampleW3C: WarehouseReceiptW3C = {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://chaindox.com/contexts/warehouse-context.json",
        "https://trustvc.io/context/attachments-context.json",
        "https://trustvc.io/context/transferable-records-context.json",
        "https://trustvc.io/context/render-method-context-v2.json",
        "https://w3id.org/security/data-integrity/v2"
    ],
    type: ["VerifiableCredential"],
    credentialSubject: {
        wrId: "WR-2026-000873",
        receiptNumber: "WR-JKT-000873",
        documentIdentifier: "DOC-WR-000873",
        issueDate: "2026-01-02T09:15:00.000Z",
        receiptDate: "2026-01-02T09:30:00.000Z",
        expiryDate: "2026-04-02T23:59:59.000Z",
        storageStartDate: "2026-01-02T10:00:00.000Z",
        storageEndDate: "2026-04-02T10:00:00.000Z",

        warehouseKeeperName: "PT Nusantara Logistik Sejahtera",
        warehouseKeeperAddress: "Jl. Marunda Center Blok B No.12",
        warehouseKeeperLicense: "WH-LOG-IND-2024-0198",
        warehouseKeeperContact: "+62-21-555-0198",

        depositorName: "PT Agro Moringa Indonesia",
        depositorAddress: "0x8B9A1F1E2C7A3E4F5D6B9C8A7E6F5D4C3B2A190F",
        depositorId: "NPWP-92.384.928.1-019.000",
        depositorContact: "finance@agromoringa.co.id",

        holderName: "PT Agro Moringa Indonesia",
        holderId: "NPWP-92.384.928.1-019.000",

        warehouseName: "Nusantara Cold Storage - Jakarta",
        warehouseAddress: "Jl. Marunda Center Blok B No.12, Jakarta Utara, Indonesia",
        warehouseCode: "NCS-JKT-01",
        warehouseCountry: "ID",
        warehouseZone: "Jakarta Special Economic Zone",
        storageBin: "BIN-COLD-07",

        goodsDescription: "Dried Moringa Leaves Grade A",
        commodityCode: "MOR-LEAF-DRY",
        hsCode: "121190",
        productIdentifier: "MOR-DRY-LEAF-GA",
        batchNumber: "BATCH-MOR-0126-A",

        quantity: 5000,
        quantityUnit: "kg",
        numberOfPackages: 250,
        packagingType: "Polypropylene woven bags",
        packagingMarks: "AGROMORINGA / BATCH-0126-A",

        grossWeight: 5200,
        netWeight: 5000,
        weightUnit: "kg",

        volume: 12.5,
        volumeUnit: "m3",
        dimensions: "1.2x1.0x0.8",

        temperatureRange: "15-20°C",
        humidityRange: "50-60%",
        specialHandlingInstructions: "Keep dry and protected from direct sunlight",
        hazardClass: "Non-hazardous",

        paymentTerms: "Prepaid - full amount due before storage release",
        paymentStatus: "paid",
        storageCharges: 1500,
        handlingCharges: 300,
        otherCharges: 200,
        totalCharges: 2000
    },
    validUntil: "2026-04-01T10:43:38.495Z",
    renderMethod: [
        {
            id: "https://decentralizedrenderer.netlify.app/",
            type: "EMBEDDED_RENDERER",
            templateName: "WAREHOUSE_RECEIPT"
        }
    ],
    credentialStatus: {
        type: "TransferableRecords",
        tokenNetwork: {
            chain: "XDC",
            chainId: 50
        },
        tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
        tokenId: "ae3c9b9cf18eb4dd3a4e3375b044fef980c2759747125d0a445ab50f8e2e91a9"
    },
    issuer: "did:web:chaindox.com",
    validFrom: "2026-01-01T10:43:39.538Z",
    id: "urn:uuid:019b7927-f195-7887-b978-8595a200bda2",
    proof: {
        type: "DataIntegrityProof",
        created: "2026-01-01T10:43:39Z",
        verificationMethod: "did:web:chaindox.com#keys-1",
        cryptosuite: "ecdsa-sd-2023",
        proofPurpose: "assertionMethod",
        proofValue: "u2V0AhVhA0lVMYOt7zpD8oi7asOgbGbxqJ2WtYELXcollOyPkDzYqjYE1cJ8cuC4RjkbVMpuHiP1WX435KiwSYCoYmORwrlgjgCQDG2KnUWJnbIZjoZjxeGDhSRNj8McOsTs7ae-zhWLCIMNYIHN1qaSAaVgh9aESNY7rvnsxuTqJ1vPuwpXuV2j8Jb6qmD5YQErQR5TT63yTbu1gcpN5bBrrtEdS-mmH4uWPXFV0iixcJeNZ6_HSqsgvK85tMwGm2eMTl2dME0T8zjKIplKYRhdYQMRv1F9_HgkA1D4fSXa7U2z4nk_z3k-g77DOE2yMQNvpCAaz4EgbWpWHZqqyXkiPG1k3flyz4SFkPvhj7VstWYFYQGwSVyCalTgycQyHqgkBhutVztBMHeabvbM9yicPqAAh3PbooRPM4VTBhleICbuqJseAM3NyBCIqHmQdsqymWLxYQEvCJNhNZsiSimB2KRLZpfschwFNX7HDxQsEc5P8rPGDlgRPLbMbcxX1CWfI-_7BcBrAESJ32qRqkWAdyvHQF6hYQNkn5yDSeymAaeyNuXUP96z094B5W6kcgqW6uSNS7qTOqAJD3k8XQHUnMm7Ct1DWamSe-94eiDqvl0ZRZKc1_cBYQFK2dV7D_QOLL5EUiliXYo-hUBTQupNUY3Kfha7VKzRl7fwKxzv_no6LjjZXcMFVuaIVG5u_OInMt-4IPA6RzT5YQHvyzbz2yQUJ7e43YJ4Gxh2lNSDeU8GgBOst3TIhKdYsu5XWvxOYiuv4nb6P5O73LHrMye5QrQPzjwPQ_eLL7QdYQOjcXUmK3-HLnIf2Rp2fADP-6VjbJpMVhC7xQI50KJ8nFQxeAjwm0BK_p7OcQPO6v7wjBbSqjB2kAxiNmBa6VBJYQGrNs_CiKTX9J6JttGKwRe8Ll3ZRfX3JANvzcqL0EcHomMKsSW_tsdqOxhejFKxvbyG-WI53Jkb25jQ3z4di57hYQCanKalicGKcmeO1IH5g2vL3BhwuML1c9y_wbPpeTSyWdYfF3Q6YVBKtsmuGc4BQpYrGzDijvJX6qQwlUzybwmdYQC1MCGWm8AmBJ3B69V5WU7NuYJ6j-iSnS2Ar0D-_lMuHLxl7TLuA9TB5Auo3hgg7N3vypDTq3LEnKbD8006k4_5YQCdoC9hS3lgMZ7pefOUofr7pDCdss09gJwuOB40yYZKn0gUL9QHXexXcEq269-MSfJBoPL02Pk4Ofz6M0NgheZ1YQN53h3l1fx1Kgr5TMoED5a20KVMQh0d_jQFiOBkBeCpCrKdlWXrEU6rvT0X1pe8C7ofFwHdn3maHkIxziR38tnpYQFZ2MaMh3NWGc_xlVq70c9u35bKwBLjYech-fg1Z48sZF9-IoP1FcqZKG9i4yRMdzzH7FP4ZSW949rqx8ZlsNY9YQCa5tmzgnK460P0pMTBcl39psuIsZJO4D2L1o_gJ_3hwYOMtlvak1NlmnkMm6zRu_-lgTgCMuAXF9lXAgbADf4ZYQNzW-zG7fTVSC4o1qEAGhCKDVr28aWv24timJYJkjxLXY8hGYHlJdlMj8as_YVqbJDTnYf_6Qm-0Hv82EtEmYGFYQAOv57s0gT4i3XIX9vtIcGMiJfidMuMd6d-redQuub93ytYyu4__RLYiWM_BtyGqwYr-eCg6EKA0nIYkyJ79R-RYQOyTavUGZgroY9NeXpWpqH0w90zzjCJJhHywOfM1a8E8JI_VeEzfnPVOCs159xN0RDcB7febBYvkMqbd-8sRjfdYQCpCAHeccSH2SCxHG14BjKxjItBnakNv4uarv6vdl_rcsGc1Xz1wAnD2a2bJUtsf0_nd_EoWbUMwEh6oHceDF9hYQGR0TifWL-snMkIjGPBeO5uxMTiYdL-yT34rJit0V-IO2y1_LZck55shaDrkLUnIDcnzj_TX0KK3EnlUzKkd4spYQKUNtzm4OO5Y7qCZldVdatlxfaX910W9LPyazYgHwaaVuRlaancaJRqEisEZ_Tri8RM_Q07Zl-yOX2dB1PJPKChYQHuIoRJKtmKV90I2vxzvv1oCGDA3pYbhtYVHQwqwtP7-WngvScJTNig6Eg9aVB1KCW4GQD99yJmJutaYBgUs1dRYQIMydgUuSa9lrALXLsJdfGZ9gRom2dHkJYn0ZytYW40y-ePRQToHt76oXYwftEq2UIy7fZ4RceMI8OwzOPUzSmtYQIm1RA33WZimtm47hZ30vvXUZ6EohW-LqgUjb41nTu4isyARHnmWDrnCT6d9OzoxFSTD5UgyqCzeFiIDJvjkwqRYQL4vXzilmVAMqXCBlyWX-seboaHzmwKWliBN5qDD5qYiUq1pbT7MVAlSe_xH5XzVM4FV8iFTxUPcrKB663xTA0hYQI9c02GY0WqRKxI7tihTFkzYSoWomggsFRSOIKEwhMPBIsVnkbAgwEHhzZff1PzjjH9LILlqQJO2N5NF3E1KxLpYQAFm89pKVV-nC8XglIYXQHe8ltGRXxlh-YuWczkbXQAFNTPfKor8Csf0T5rcwzCTeN2ru95EQJ-ahWQbeKGZKX5YQC9ElsLsN-NkQXaeACbfXxZFiOOSeFKodbD7WoZsQDR6dcO4FLFeTn2TsLC47s8wq7Rak8R0qwc0TukDsAfBKg1YQHztvxrxL4HRe-fSJtpZOH3YX7VMRoum3O-joVQwNX2mvZJ0dTlfLkkkcb7_ma3sPhddBWjuUjNOtvNaAew4_9pYQNHrYow_cY38TIRA80EoznSPPEVZtxhClx-CLKBSJDDFGn9ezfyAjX5dMBC5yGFUWoiwvdSUFs_n5362JPavWW9YQJuOdELCKJzWIWW58VFAcSHmECNzsLNymyMVnE9aQWQ7zhzOuDvuVAMa8jgR-EjScpJNdDmhfIwK-ptCpc0pFVNYQE_w0rxDcvYhu0vPARNvK4xb3kESrkzfge3I2Jqy2WrxG0mHch0p2onsxF0ID0BWxDGuLlZ-bTc1ECBC992kaj1YQD0fBQR8Zj9EH7DYrT33euhYL4e7YCK7_5ibcYgQgFJGLIXjAgnHY8p5YZWRHXspWRVneupyDmKcL5gInDiNW5xYQB1762MQNN6Yb3_fLrE8phiJXHvigCKUydqN-SVZH6Jr4t3yERbgjIuKvECy1OLxitDS0Fu40mbhb2OqvOY7qe9YQMCul-Otxm1ks7MG-H5BmX4UWsuWeC_6uiRHkXjO4d3jZbzd9UfRIEXA0cw8sTjeMzgkcnHXzx8UQYEeKZwK_z1YQIdLwQAqr4V2Pv_q3An6Nz7fJ7qHEFD8wVR0HfT8Zgj1g9Czc8et4nwlrIL2IpONdKseKMyzhg1xy0uIyG-j3NJYQDdAUh6GbsLPheXCbIsR9x2LY6_fZSEQIOCv-crT2YBdXrzpYX15xwHs4rXJSzSyeFHN4978CuTML2lxSin5GelYQC2KdtITVyIqkkWe8xkHWWQlt8F2ehi0j8UveeLgzAooxKnOUND8Xzg3yPOytZqXQNU4QTbRjGvvSIUrM0LP1o1YQKMxExvqA-5QATnVy3Rp4jlvfTNY96hUuifMD446Q5NKhhM2wmzsLV-X46_FImaY3kFDU3dM-Td8mvtKBtGPTDpYQPBkCJ0TC1dEEWy5emcAM5SiuHo8LvQta8W8--KSIi6hnDCVVgAJ1pQC6UCJABMEph4UHgbN7XUdnfiWOgGcpA1YQD7JYyy6rXZGhKWoLR3_IeY80dDMqN8LCop0IEubDVHnBMAG1_xwThY8-z-5z6q10rE96yjTQip49I8Vm0II3VpYQBW3JBx0ipVpPTu7PCKVmT0jr7XEgM4atQTZeE-PMd1gHYYYsLB9-XKOoOUT-bJyl5jXL_usGuM5NFkhyCdIK3tYQPmXy_LgOYsz6hiHujazv-urdsg3vBi1kB-AOUewngj4yRhda9pCJzTYp2UBdfGX22l-EmsQt5qzwseoTvVqX9pYQCvG5Fp_nLtdiN2vMAsPrmFzP8pHaDNf052A6rUroz0v-qnhQiP4EA-yHaJL-f57js8dZLePBr7l7OSlQkNaPvBYQDWNgPk2t4Vxr-scLKVD_z8O44My6KefmIp7jaUaAgHwQGfBEY_BKfoeSPWhKV3crqqXUUWYoOeHeU6dhsH1RcxYQM8BWRnFg4c35xSXuJ18huo_5vpCsWbGkEb0rNYCgG5Q6-N2d949AR7JY8EN_I7Ct6E3wQl7QMeNDJa6Wz1hIYFYQEf8pcBFjsrmN1WUbrPmaai0VHq6yw28mHN84ObJf6eqTUZ2ULgXdA1UpUGQmyW0tGSTtbgWhvchRwG5w8lGsBhYQE1F-_-L6OZMhM9p81k30tIDCb12AIX3nwenaHJejrdGPHnz6SW29yyr6jgUXOZFbqmrGgkM_8ncWEdx0jFdkctYQNEdRuz528hr6mBvUK42-tWj3hgvABuZdW5Ni_kkb5oDH8RF8FE4U4aEOa_n4wiBkYNjANyFDZalbd6VBUkGkXRYQNgZ-7FwlEzQHh4VBKG-UvHeOEB4S2t7VT3ewupm3ZG7zLfHfCvzDIjP6qwtOU9wNgxBYPi-KjyuTyp_Yg6VfadYQCfrYDrDru23JDzKeu5UXqG4x3tu-zzEx0tvbieIKqS3L8glhjm7342o2jQeJrjOsr1pPEj9WgIq5Oq3MUIG77ZYQAU6Ii0AkKO9XJz4z8rbGiPD1XFaZGiTm6Roefy4C4NqC5gepnT15bxaAl_f4uvpnkmPXePlnT-q4JGuieZvOs5YQFz-j_pr4toMS5bZJPXPu53pymwy2vzdEkxQcx6FRUiNIwzkQ5KRLqPDvRNNS7eRFsjv38JqdFXumszvbA5u4ztYQGwogziLO0iavfBanrJrnkFJ0SGC0Qgbx6f7lTxh1zi-n7hqCdcBl_DFHj9sGJl6qX5Go8NkBsL-UauvarLoCadYQCGUV4xuwH-rqt2SnnFCBIeMP_qDYDLBuTI0-TxnDxYXWlN7Mbhjpqsoyhtkhrh_5mDDrY3xDkwcjIyH0CbmfMpYQHZc8lOStmHo7aBBZGI6f3hQmX4IOD4xYw7nZQF8aa3JEswPJT0K3FcqXVV6ysLsD0pJnlVzNUvGPuUV4WM841BYQC3nfSRg3Fqwh1Ud4_MRoItPXNgQiYROwlQ2T2LunyCSs-5RB4ri6vTTfJTTLrzr1hcyvvg415WoRDYHHXQYf_ZYQGqA-mJ_0rQOlciqOTnmj5ePc-z16_Msl56u1NbyM1jTv1pZPH5JAWCo5NgmvUmt8Wj87rRH5U5oSeCSzRMG785YQGUnEkpErTxNZa-293Kw-FCUov1jvz3LXKvw_qletkcfLs6co43i_AFbM7EzIlzY1Q7jSMSu54dpAwOVUTW1bhFYQI5SsUMiNYdOAUSzlrMxUNc8Iec48DDwa-Jh4wlbqqVZhgdIxuzo11EM1lvek4nYlEmdxmver8iW9QNKl19B2HxYQOIkOwQLb2OWgb3i3oYq5NfgypoXX4bPQ7T24dkw7EPnTSIEj_7VqHEdCsD31Os-bo_IZ3HrjBhcdJ9ybOI-oMpYQP2PdDSm1zyaaTup7xmQct5kxszj8QfIc6Ny9l08-ZjpKqSF189S1l8Lq0LQ3BTw49uiyVecp-a_KZxW5HnSgTGCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
    }
}