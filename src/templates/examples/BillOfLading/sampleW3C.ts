import { BillOfLadingW3C } from "./types";

export const BillOfLadingSampleW3C: BillOfLadingW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/bill-of-lading.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "BillOfLading",
    documentId: "BL-2026-100293",
    shipmentId: "SHP-ID-US-2026",
    contractNumber: "CTR-9988-77",
    issueDate: "2026-02-25",
    consignmentLoadingDate: "2026-02-24",
    carrier: {
      name: "Oceanic Shipping Lines",
      addressline: "100 Harbor Drive, Marina South",
      city: "Singapore",
      country: "Singapore",
      email: "docs@oceanicshipping.com"
    },
    consignor: {
      name: "Bali Export Corp",
      addressline: "Jalan Sunset Road No. 12, Seminyak",
      city: "Denpasar",
      country: "Indonesia",
      email: "logistics@baliexport.id"
    },
    freightPayer: {
      name: "US Imports LLC",
      addressline: "500 Logistics Blvd, Suite 100",
      city: "Los Angeles",
      country: "USA",
      email: "payables@usimports.com"
    },
    baseportUnloadingLocation: "Port of Los Angeles",
    transportContractDocumentConditions: "CY/CY Freight Prepaid",
    grossWeight: "18500.5 KGM",
    volume: "32.5 MQ",
    goods: [
      {
        description: "Handcrafted Teak Furniture",
        numberOfPackages: 150,
        hsCode: "9403.60"
      },
      {
        description: "Rattan Home Decor Accessories",
        numberOfPackages: 50,
        hsCode: "4602.19"
      }
    ],
    container: {
      size: "40",
      type: "High Cube (HC)"
    },
    fullOrEmpty: "Full",
    transportMeansIdentifier: "IMO 9876543 (MSC BALI V.20W)",
    vehicleRegistrationNumber: "B 1234 CD",
    sealIdentifier: "OSL-SEAL-889977"
  },
  validUntil: "2026-05-27T06:22:19.940Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "BILL_OF_LADING"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "3797783504bb002cb963161b8cf8c807ea2b705f05e4d21c09e9f795edbf8de8"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-02-27T06:22:20.973Z",
  id: "urn:uuid:019c9dc3-313e-711d-b535-c5938ebfd446",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-02-27T06:22:20Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAmGLB7mb9FPiw7233d54VshJFcHFLcH0h0eSm3spX-JYPFhV7RnNEfneD5y9pGz3xTK9jhYdf3MYllqzfsqvoBlgjgCQDNScl7pQp16LTTzUnf3XqLG7WR3O0assmXeB3OdBG_k5YIEviXD8gPIRViblRaFOO-i7hKOgvnEcJSfjrf1xhK239mDdYQHSw_5h6mQNw2z-2VtHmvVBvZy1SDUlXuY1gia_8fQgfyCjG8FdYsnPDZBFT4mg2kCRtCTAxvfs_tCJbcHdIVzJYQE4kF-VaUijVMNuJn8wllDmGAboOOblJscEP5Dyh0XlxE-p94rXHdHUngwO-nQAGjWHuBmnm1EsWZph2Qp1fSQxYQB3HFwVbRlbQDmRFjCSJkmELvkLwiZzRBYFZg7sJ-XdzrVOMpBVHyurvprrFYBs9DDnwIcPFP865kQNUFI3r7exYQPeL66qLO5IeaDEeG3JjVD6gYyqzNDouGqMQ5X_Nh26yijE5nrANtVdXwx-Iu3gx7B1rr6jVqEkfLabvaFRFA5hYQHtb0V4HSMDhjBeIXm1sZajgnyn7FePAzPDDq53Q3LUy96HX75TsY91jRZRu8rMM4pNiR7ZUShPpItJFRyggdnlYQCamr0mtrIubjW6z7l3A5ijNigmXvyOz-zIRrmXAjw1vtYdDX1_Ijfv3t-rpmjy52C1tRdC3QaINS0nT5KPcQ5pYQN72lBJ5shKN-myJyRy9UuC8dZ_fgBiyNx0WSWEMY0KaotuTdmMIIZSvbBxyWkako9BWxJXslFfpVW91pg4hKKRYQP9VFojyczp5Q9rvFqA1jaiaWC2obquqyIeqs3vroX-eU2sXMRwBeFYLA8naiPW4I7AkIzEWHV2NGArzSa-Q4vJYQDKm-n00P17KEqHamni4DQIHGhBcWrSqfE7pM9Asucti9SEUDBD4DPwEv5x71OvJgORaqOW2pyCMg4KIhSTQLQpYQIk9zGgSZ5GIzIlZpyk-o02s0-K5g61bp7VKfQz1Vag106odfKURkUO_XMsvVqsIZuOAuBlc-hUVkPca6tV518pYQKxDTeTRMOJTR7kdbNfFOhFekEpJ28VHnyyDGlqeIalidxLf851lS3TXIVREgSd3uGWNgD2a6jztj7e6r8ZHGudYQHgsSE3hxaQ3v5OdrHAW2uZIxDocXaivHY9yzXh-FW9H1jqYHGFTYWjcaqVolSWMQORh1vX1noVygMIWRn3JH2xYQI36esyibJH8HVTSyqiaq6Vr4D3ME760_kt0Nw_mmkrneSnFk2xJDZMh2cv94uhP61YFUEztRTI7x10ickTb6hZYQLcfwpvqDJWlF3XaVpEAx2nXeSgM8IoJIDsByHrl9RpW5UcmIclzhrTh-zCT9TVthONn78KFiczGEBp03HO3wv1YQAatnawB6ZPKbBd4W7eNzpoafi6DbjQj20474iNWD1Rrhvdv8SqEeKNKT-4HrZiTPnditWZaf9nHFH6iTjshYAdYQAS01OTpB396RQQbDlXr_Y5Q9CKL5s2PhR3GWPsa5YFid253oIhmzXiWDfDiSbJH8MGPxkR6Q9xXbDd9pGdzcFRYQMFWRAVCwI2_JwPFyjoLH5uNMJa4TL9NwFSYPWiNYOnFRV9QvcUZuklRphD-FJzguNaHMYR0bAOdaBBPoze2wIhYQEEqgwFAebOWaRqeobt36pNGv5_soeOQgkubtMJOavhokv77WMeudzJXXz56fu-izbU-iwuzhnXefqj4_EY7iyxYQE2lH4pY64fXm-qxq9HMAvQJdOuNxLwlcoD1_pMON0kyPM2etqfH8BnqBgq6ZhjgKCCK-ht4REVj43kzoDl5r-JYQEDs784Ilm3oGM1GFqtZ1ufUk6bX7Zg9e7QczC6PXK9L0ufonucWpzjImf6j2ZstAcLhN80Ihj4X36o6a9MntE1YQOPbudSMvHNDsIanwRNLW248ubc3EBfYQ8dqEhXAhPdNOBIKN6qhFSDdvI2z9woHqhrIzGSmUHlnNzBlN7fejvNYQOopY8eqgPvrbDG09TDhiD8zILN-PUguXAsR4rSwAmcGnMudwIBPXhA7DO7DFf886LR4BOBZN8j2Je__l756rq9YQEZZA1E_DXlNUrPxSx_jxVIuSzuAMEVmZvWpbQ104hbe8NAN8I8Ix8Sc9kp8idocHFNYGzxDkgn_1v5TDHbIY81YQCN5dhdz_DX4ZrQbwDhS_fnRLLDBtx0h0dTjAnahr7CbvXhLqrOPHhpjaC51iP22NBgP2auPRcx7gOHSFl4xPZJYQP6F_jPOUdDnulqQHhXMS36K-SKiyjOuik8cu17wJOh3u4UEydCui4nK94bLVQL5WOXPY-Q6ZUYc5-V2b4IEi0VYQKQZ6MPV3W6aWw89F5_JY-lOgbixejx9kAl9lfK4xghc6SZ6M0CPOCgXXw3egwtbHJbKLhHgwNALs4e_Kzf27atYQCuNpaBUtJK1w0z0BCBPSSitzSXXBIiQjtrH-OxqJiqx5ZD4KY2JA0LGlOqr6TNGml8TAvdNPM0Tk187JvMaE2BYQByEhN87TM0iHwRuvtbsFaNEgwNVGA0955yQqIdq-9E0VEujKYyyWb2walIrVIG2igH1NKvJOgOuOvvVP6XH0PFYQMesOHaTzGNQQ1W1hza2yVDZPBq81U9_hsIQsmCRfvmNdYVgaAQcngT98yFqYqLu-b5sc_VuWzmtDY9aDzk88DZYQDoGditEKTbbQiU6XY6S-sLPZm9G6fhsKAWZlfqvAjd18YBwWQEWKgKmLKmSRYfF15n2fvjwY4idtxeaW-AW8GtYQBFPnXRGTZqYOZJhvKSZ4cnC4XXLQFbdKBgIek-4LRKgMsXUXYekFDMYYuhRywfzb5nne1q7SrqZlHYI52cs8ulYQNooiCqzbrgGAENj0AvOw1PHTY5U-m509QNq_FGxByCm_jgKj5XAXLqI10DmmhKGaBMjQePhMFISQIiEwziTbCxYQB-3g_adxQiBFsieA2hPkAeQdOtuAsDPaYobTEl4v_-A99p7Z9w66nT1PUNUE_JUifDjgXVlUoGCakOIlrFUo_ZYQB1LOi3XFc_kOEoVfc1oxkAE-6ViyiRmhr7R74X-yMS75KPCw_DbGH43mNPdqApA2dQiXtXZRTlrOQeATMWUiyVYQOJ2z8aCc5Lmphxpl37cYJwUInWwLHcbqKZ-xLBUrCt8kzCktfqGyuowY9HLchB73VvAOqUWoLf9p7ATmWgdv71YQOrXsCEcrWRV3rcrO9XKbBH0HLBD4wrQEbQYvb_1lNvFyIk2u1TJVPQgcqlbBOvfD1TsD6Ie7iE4i3QFNCyb0qZYQLiABI_vn7nVQvRWlIBgf7o4H_NRcGoPwU22ukyBZyXVL-O0uAXe__qh_91yc4DCELBeZHyDXFBqbYNJZnUoEvFYQGUBo5nJgI0oNzDGFGGee_Mn5VSqGU9WT1-xJ1zP5jyuiFHcbb2aPsjCFWQc8R_kixZ-RjGjDdDPw29MeKDGsxhYQEgVJ55hZsl2IbuTZvijg5vYu381wiwR0GYlKqNU_UbMeVaZmkdjQEeA6ZRvJJpH8CjVWvtCWG1mizif0Rtz-OZYQAPWqMaSd5zhhyLjjaFrylZu3GUPTWTRo9ut-EzCZC4uKbx9ayiB0xVaXd8XZKDnQRmLb0RtCv7pEHVBu7yDTeBYQA3Pg3VOm9whTKVBCipTowLEDYHpX8rDwEnwrFANG8p2Bu7kHonu3sqUCdHRRux319lM7FmMKCmBl52cGTK2KmFYQA_slJma1-f2N1xg6I2iB5JPsjhr0ThaPs96iy_7FwXc_ZR7D1EaAANASr3TAX2w0T_1BUaeC0miS7yzy9qJtu9YQCOp-PKVwk09Wd-IhTmnPFuuWq8X19ZGIJ2eRa17vbl4FvvM4d5rITbiQKmT9JfjL30AIScnjgaXTuA-p--WZeRYQDxIcd3rW4TkajerazhMyUvl0SfZdc-0TQZKXICq3JedI2A3fx_vQaD9QPGJVceNdTpH1Vp7_BVsiJTHod5pRhtYQMaRQnw2vCIEPNdbly9PIfNKYdBMUKRUMkehYcHI7WwbHkFGHOZXcBrHt9gd9hY3qz41k_XPoZ7Gid21kdiC-XNYQM1JNBAfv-w041z3Iqh8Sa-dpZ5n6k9htHE9dmZK6uwwWY2QpNkyZ-yeup0IaOy-iuCJyov6MPcPybA5ocj744tYQH031Yq4uB-4bVLLEVCZJ_xAhLO7-QLXdo9Oh8TwdVtr26so55T1hAE7b2oNVLn18Z8izL-92NWFJ0RSnQHuCpVYQGEZv5EGt4yIBKp4vbg4xd15TrpzEH7jAIF1WeyfZc_gC--JM8dXeshHHfO9j1sdLRvbTFZbHTNh0xq2wZAk6g9YQNIrjMWetnhFs982bsyEBTGmntResqlLbuzC4eqg7FhflnpwJlLSVm9T6KXEgVnOnHb79yKaaO74rqHlt3ZUyTRYQJVRnTFEII35aG_QYTcSeayn47Useeh-l_FeifRlSGQHj27QxRp7TKu1L8nMCTtydLRe5QPsJ3TTJVkaJnbYd3pYQNnt-xsM87S0_VpQ-ANOnS3QFCYUq0n5YVOGd-GfSRd1H0uD86MO6Blt0ijD7SrWRvvel-3SwI2wv5spcxD1pHtYQOSV4u0CS9wIPFgeyWuisuJ7W9LEXbCl3hSRrfKztg1LXAk7pND01Xwzd78VeSnb6UnCzSLNwJRdXlsGql-a16hYQMUZUBQ0XbQ8I6GFI5yfbF-QXw7pBxLRV-4veSKfC2O3ltrkqFcw6mA591GDU0BzIPed7dS_0gZY6TzMF43_N6dYQGKiZbAGSNPkpYX4_3Jm6ZBuHbr3UBE96_MRZMTv-rIYMqRFmldzNFqMtL6fpXsM_gpeuVoEYzEIaoXQTYF0BW1YQOvIUdHDiUqZs1F02cOI3QGf5kBQExOk4ZsNYcCqYVw701pQuJGG2mG2g58WC6B4DZY55x7Vwu4gBUHlWS4-9KeCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};