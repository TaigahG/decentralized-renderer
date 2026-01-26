import { AirWaybillW3C } from "./types";

export const AirWaybillSampleW3C: AirWaybillW3C = {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://chaindox.com/contexts/air-waybill.json",
        "https://trustvc.io/context/attachments-context.json",
        "https://trustvc.io/context/transferable-records-context.json",
        "https://trustvc.io/context/render-method-context-v2.json",
        "https://w3id.org/security/data-integrity/v2"
    ],
    type: [
        "VerifiableCredential"
    ],
    credentialSubject: {
        type: "AirWaybill",
        airlinePrefix: "618",
        serialNumber: "12345678",
        checkDigit: "1",
        mawbNumber: "618-12345678",
        hawbNumber: "HWB-SIN-LAX-001",
        issueDate: "2024-11-20",
        agentIataCode: "32-4 1234",
        accountNumber: "123456",
        shipper: {
            name: "Apex Tech Manufacturing Ltd.",
            address: "88 Ayer Rajah Crescent",
            city: "Singapore",
            postalCode: "139968",
            countryCode: "SG",
            contactPerson: {
                name: "Shipping Manager",
                phone: "+65 6777 8888",
                email: "shipping@apextech.com.sg"
            },
            accountNumber: "ACC-SG-9988"
        },
        consignee: {
            name: "Silicon Valley Components Inc.",
            address: "2500 Sand Hill Road",
            city: "Menlo Park",
            stateProvince: "California",
            postalCode: "94025",
            countryCode: "US",
            contactPerson: {
                name: "Receiving Dept",
                phone: "+1 650 555 0199",
                email: "receiving@svcomponents.com"
            }
        },
        issuingCarrierAgent: {
            name: "Global Air Logistics Pte Ltd",
            iataCode: "32-4 7777",
            address: "Changi Airfreight Centre, 10 Airline Road",
            city: "Singapore",
            accountNumber: "AGT-8821"
        },
        routing: {
            airportOfDeparture: "SIN",
            airportOfDestination: "LAX",
            requestedFlight: "SQ038",
            requestedDate: "2024-11-21",
            routingDestination: [
                {
                    carrier: "SQ",
                    flightNumber: "SQ038",
                    airportCode: "NRT"
                },
                {
                    carrier: "SQ",
                    flightNumber: "SQ038",
                    airportCode: "LAX"
                }
            ]
        },
        accounting: {
            currency: "SGD",
            chargeCode: "PP",
            weightValuationChargeCode: "PP",
            otherChargeCode: "PP",
            valueForCarriage: {
                declaredValue: "NVD"
            },
            valueForCustoms: {
                currencyCode: "USD",
                amount: 50000
            },
            insuranceAmount: {
                currencyCode: "SGD",
                amount: 70000
            }
        },
        goodsDetails: [
            {
                numberOfPieces: 10,
                grossWeight: {
                    value: 500,
                    unit: "KGM"
                },
                chargeableWeight: {
                    value: 500,
                    unit: "KGM"
                },
                volumetricWeight: {
                    value: 480,
                    unit: "KGM",
                    calculationFactor: 6000
                },
                rateClass: "Q",
                commodityItemNumber: "8542",
                chargePerUnit: 8.5,
                totalCharge: 4250,
                natureAndQuantityOfGoods: "Integrated Circuits (Electronic Components)",
                dimensions: [
                    {
                        length: 100,
                        width: 80,
                        height: 60,
                        unit: "CMT",
                        pieces: 10
                    }
                ]
            }
        ],
        handlingInformation: {
            handlingInformationText: "Sensitive Electronics. Do not stack.",
            specialServiceRequest: [
                {
                    code: "XPS",
                    description: "Priority Small Package"
                }
            ],
            otherServiceInformation: [
                "Notify consignee upon arrival",
                "Docs attached to AWB"
            ]
        },
        chargesSummary: {
            weightCharge: 4250,
            valuationCharge: 0,
            taxCharges: 0,
            totalOtherChargesDueAgent: 150,
            totalOtherChargesDueCarrier: 250,
            totalPrepaid: 4650,
            totalCollect: 0,
            currencyConversionRate: 1,
            ccChargesInDestCurrency: 0
        },
        executionDetails: {
            placeOfExecution: "Singapore",
            dateOfExecution: "2024-11-20",
            signatureOfShipper: "Signed by Apex Tech",
            signatureOfIssuingCarrier: "Signed by Global Air Logistics"
        }
    },
    validUntil: "2026-04-18T07:29:00.741Z",
    renderMethod: [
        {
            id: "https://decentralizedrenderer.netlify.app",
            type: "EMBEDDED_RENDERER",
            templateName: "AIR_WAYBILL"
        }
    ],
    credentialStatus: {
        type: "TransferableRecords",
        tokenNetwork: {
            chain: "XDC",
            chainId: 50
        },
        tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
        tokenId: "b4019bc0a0ec45d0a71d5363980aa4d18348f26dee0dfd2f2913815df2045baf"
    },
    issuer: "did:web:chaindox.com",
    validFrom: "2026-01-18T07:29:02.787Z",
    id: "urn:uuid:019bd001-e146-799f-88be-c57c833601c3",
    proof: {
        type: "DataIntegrityProof",
        created: "2026-01-18T07:29:02Z",
        verificationMethod: "did:web:chaindox.com#keys-1",
        cryptosuite: "ecdsa-sd-2023",
        proofPurpose: "assertionMethod",
        proofValue: "u2V0AhVhAaI9RRdTg1WZrchdwbUljSzfTS9EqFE6CguCNnU33GDrKvO7xSpw_29Hz-CZRDGHUPc2jd7DECDIwRRFU1lf4E1gjgCQDr7KQA4qZOHNgmVur-DJhqm7RFBImJMqt0mLN_DNr0wVYILftTthYh4rMQmDFO7eVvhk15VFJehVjlnb42gAxZn0EmHhYQBgE5VS0DzqzVhfcsn0df5tMezSweZJ2Vdbde8tYE0yI6Qv24G-MLXU9VwbI_vMu8kuHLcXdVxWW-C-SUoMFXSZYQPMCvUmr_m8vLz8QSv6G8K1nM_o4-YTV1NngKeO9Ql_2wP8Gi1r36I1zvW69h5Zw55hwTnsoVL_oH5W-mi2uWKhYQDJmd7vwdTMtjUH_H28dldR_9uhEpM2GF9ktpy9efs86bKVZ0OOrHwbdzczRLkOaTO1LOhWtqdA-bKWHVJi0kPBYQID-IgAVhxs2XFojGiXycYo3RbKDfnS1knALpMGC4uVLKoFNTkG2A7XEBcwvEH8dRhw0Oe63bgVRGnr3vv2sXA9YQLpjEjGFwYXRZfmTwqbxfRSWdNYkg26kbZElp7Yd2QKOGhMqmq5gXZ09XFzwxlrmoMt-W4TpHNziPGfZFitTxF5YQKc6GHJxUv43SbgpG9wpOl4codaGiD1HD1lMvqEbn1po17RcrkxRM8NCCuy9XTyJ6SzkUsddet7vERo00647uadYQD27qyPBKNF4ZCa99Ajl-Z8eI2iYwXY4O0hyLOxGyhU9d6dM65qR5Uauw35nPDb4-ONXoZ9-bFIdmhNAXOtXwFFYQJSUK1O0zYQNDXsURKIzof4_opoUrvKZGJ18GWMnmOpG9ubS2AYb4YtzXIdfagYLPjZ9-rl6Rfp9yuryOKJBqRlYQNuOTAkdvaf8gHgek7tagH-Q_hGlTnepC4hmjSJNmSkvZ4tEsZ5rULp7DOXOy2jmcDvFpP4SCKl6rgKDOIoMHTZYQATJzFvRy41HFTen8iND-p7NX9JC2VibCTwUzJ0jhnTtn-6_xP1PH_LpQ2kI1tOl65OzavvOx6A7Xix2t5lLhs9YQF2DHj2eoUAK6jD0jIVsofr5DLVtL78pDW70Ernt9lg_z57Fnk3WsI8ASLWEMPFbhnLrCgKjcTRMd91oLDKVkkJYQJI7QNUvnrVPmyR2mZPXLNYS_1YZqJvcDDo2Cif2fePNDrwW5FepfXAWk51PJF6usLO04H3-nCkImN-eQOMDh5FYQKikyZNPDBqiMwz_WCyv9qCaAfhg3oa8OVu9n5zmdqwkO2SzoOpAhNtyOOMt06__uqSO63AVQxhifPVNZ2mf6NFYQCcGPOOcX3egKHfY1ZamIqAa82iVSDb8ZlVxODBjCy974f3EZ4iA3beBpq1kVv7pNW0RkGptrhhgpPwuhAictQpYQOlNlOnc3TteVl_VbWfvr5y8LvRA6XMk26M0U9d57ooOW5auxxN6H9a5YkRZne-4Jyy4ivq6rre7Q-osohVZnDdYQAW6aLxGS3P4hGuyNZhV0SZPlRkpftpRK0_fWVWwOWfjr_vHkA3vpLc-m6pmyO47UjAaCpwXtBFApPP56gtD3i9YQN3Qh5DkfEgGJyIYaWhE0mqd-njIvJZ6mPF_Hjo47kzduB6U__xwOQhyfIH3cUncNWEIZTKhG8w6MnIW8xxe-cRYQPEJU75OU0mnCKQ9ia_hBAFY5rc7Jlpw115MfoUNfa705J9b1pK_u7LIb73E8bJ5WwYcE2UhadRzwB-Vl__uw4tYQDPj-vh8pFJ30GByaKZ3iTyBOTf8wjC8gjkdfpjtdO0lJVwRfXj7_Zoq5QUje8orpPziP1jX_-DaMZ0HhmOyhLlYQAAk1EyC_EiPZ0W8lnAS9AdBljKjc9V31BmcBQhUgfbjwo_kCAevfX3KvimuPujSvk-7kB-wLAeEdyqnCme-emJYQDpMnnTMOWEndsvwycdLYwYJL8mrRrRyPTOyn_rbSJgkdT4NxvXldbvxewHWDa-b9Dks_Ulc7Xhe3WUupjqy6cZYQJSQOMdh8mICByxMBzxXOaODII-MjkeROwk8Lw30j-mYqmY1ZeK0eerfW2TTguEFnVJG0ahch6GsCAXL8vnjM2tYQDVXp9uEtyeNzB349hOonkYp2EBezxjH_jPvXWZb5uOp_J3pxvTdyXkeX3VczRQ7jsQi2kBxZ1ZgKWZOc7ufHpxYQKuqKo6YTuV0caOt55DM6fyF2NhW2bwjHhZsAQ1TIS2JzIEjR25jxGxgee7Po-aHK9EHNv9atJDDH1r1a4OBbF1YQKr8OsqGcOnScmSEWz_wbE-8B_e5VXvDkM2wsOIJD1-uFhQR2okV5Glj5acaFUACW7hUZGUMcHserb23eTPyvv9YQP04RXXGoH2TxMQUV1aQAlAnOxe0gjd3u1L2_EuW7qqRjfLN5MWWdnwPu1W2JEH8cbupYVcrrztQ5Prb6klLRFpYQIHbNDO_qJnN22ulIP4mi6R9LsDDtymQZH1ObE3lbQLOvct_qeuXG4SLCsGwD5RmSlSJqlEaKMWTIyITykhUUZxYQFlkUtzRNkU2zU0hkV5mjngReJjQAUZoeE1ZKeRXeYiepqqyAo6HMG3EO7X1ajabUw6of3e9216h_7GKvF5nsclYQNqQIozcCu1HdxQmGb9W5xiPo-FWZ5pxYZmxKQOphOQazWPiOjyEe7OfK_0mEEqDJcD05i7LIxb5yAIFotiXWQ1YQJ1QNWwsXLzPwSDEnegoRuCPL2xMutZ0Vta4cyp8--Ce_awBR37TTb2SMwZzztrV80HLJXHR1yCKilv90cuqtr9YQJgRtRszFLoKEkYKYDwedCqVjNg_4UcqBkvehfTRT0eFad6EdnThG4RhlE9av-yg5_qU-608pUpHcKdGRhkjbixYQEE_bpdn8rcv_mqib_I7OXCMD2bkx3DjYs8abCshzR0PtDa4pJnzbLldFBrdQ3X0cK2TC0LySpYIBtGRbqdeBtlYQG8tzN5vF1SvIwUZpoa_YaKFSAnwZ8yWqTeQozVtJUAwkylx4pJAf71CNh3M5qKiMml1suwBXWX-HkOGMmjciexYQO1gJOrSuphYnBIflhvUAHZhcku9blYFJK4z-dXVXw0kBD--SBCYjWhe3VB2I5zwu1NCH5LufOndGwaeEjaGYPNYQNA-2D-QKiMDr-Qj5QY1s5_5rBI3HwJkD2Vbayp48coKyA-MsAJWWhNAA9zaeJT-cWCT9CuUKAUjreTUJUciTzpYQGGHSMTLg8F_ciqOfaIgw4P5_w2B8SJL2io532lu13Kf5H7NQznLr_IV_DxiUjb9suL57UExlf2a8Zt5CTrOz2JYQIxlEtv9Yxdc-xTgPBHacEnNwb5LN6XTnEE8j4DFcwxFAoJk7QKvI9c3-3xarquvItWc82zaXMWXuR48Xl_n2FRYQBXvTv4FBmHFvBD-trSfcJBmvRdMNts2iRvfRVCCBTs5VtecWs0ow99cWZS6ls12c-9AtS2LOlp0f3HMI8z66ElYQKGgQsKxO5inAd4GVnSap8IG-7_WiSYu7x0t_WoPtJSmZjz29sVI5SHudIxqO6TD3ce9AoXAMVrcinvZFUce0nVYQAgx2BDxOOIUxWRgt362aAGwPnMSNHMis8Y-7poXyYlkvsft8Xn7iwl_oNFsehziJth0dpmsX_6bxR-29SiMyvJYQLv-oQqC9J9Re-vQauneA5OtbFDZK6C_UdSSFfKjL_uU-Zx3xmgQQynxOn2JUdTru-EdT8UGA3P11tatfofumjNYQP660NyxAmlYVYMNb2zyynR7Wo9GgdPIH0QAZFB6PeM3RArCVl2CnAbgVfXl_21m0yLRW0ie4gt6ZOdFqsVmK7ZYQPPRuA56dqAXmanGtIx18JGa0XjI6mWayf4relV3jP8Qd92KDFCI0j9DJuXGUPTRh8QqyYzXUPu7h0L4xLJ9omxYQCl3id1TGoyXk9Say41hnkPRKu-J3n4ASobZhZbRxopu1bA42L8Pd-roWLOuJ8zUQo_x2pmgDP6C3mqwGinN6tVYQNCvf__5VEFmZrXOHGWJHuWn7WaVFGHuk_mWn0fH0uO-CEvGuI26k2O0v3znNPo74KrIEH7LfSJJqZxwxJ8mEi5YQFe2Tz-hKPhhqlFD-ILUA4lUr6_gRBLfAebNXxmsvm5THY7cNLSZo0cn8oqDOZgoj12GOUMuY2lcTpzKn4GHai5YQJ-rJLYvUZ3uqlLFC6pOKGiB_GTBPKeWp3ymzTyVnQCL27dvs6gZlgWKecPpeBAoYOpp5oUDfeKnGWZUbp5cs2tYQKzQfhc0-K2BB8Age5tYmseqC3CwQ3gkzY26RaPXb2LXdtEyYcMaNLS8_1rFsFRuA1Mf7NyGqe7YXUbOwUb9UbZYQEmNoLJq5c4JsmIkN-ro5MBM1MDzjKtqcNsGlbWhvV6F4Dgw6rS6ZKr_BvfRWl2cRCq_3B1CHaS3WKLNTrbb7LVYQMQHHL50-nM3ZdF-1x9DrqguMXz3GgB6en_hymjMWxluFzzX7DKc_ycfR08mz9Wt2B5Ao7V58rGLSZQPLN5uAfVYQEPM1sL2anRzLxu4-M07Ncyr2Vdcn3irD8tVzfT2dZscG6WWOpBm4X_-3v39xReaPUKCLllMe77WgjXoeivk7LtYQDH-T165FfC435U4ceBKQmCbGgTxpFkKclAonRffkAeinYjyKpsjpxhrxnu4gaX9V6NoGUlAsJZbckzKzZlhpJVYQL5Hlr36TM176DpFuDedyKhWt9HUEa2wjFH_pChg7xd4jjTSmkQjb5_P6Gcei_w6FOansO0ak4C5bVBl4sGziMFYQBSBwsO_kr4YPtxxLaVe0BdgDdytlty-XcJM_LAeK3MjvURGFfhEVBp3OHuYsgJ1ZI5sRtpEIGcLaMKlvJ2bHV9YQJn1EkDUxM4ph87zntR9DjyPgfn6ToIFMiUVG0hVQoCbMmc7SCIYiroKcpz2fNCgbHLfXnGIKpxG3rsiaSfpSDFYQCtAJH9CtwF69wMFi_DHNbfVyA8cq9YZgpV0cIkUbQ00pELWpGIhLYwN96zVMZYBF2VP0Jfqyaqv8lmvEMFEcfdYQMaXmXWe5lFNLYvHWelW86R9XHlg2MGNTNdeAJUwBRcStCPxCyPX3iPWVN05O6HQtStM0la5K5UQhlPN6sdXTBZYQGa5c_s0NPGv-iHLzEoNnF2Yzdjq1h6REEUEqr2lfRkr3YDII0O6cNfLjE1e4d4smMbRXudnLKXRu5yDexNdostYQKBkEcL7YlHKVLZ_7g78ep284HkTuT78aAq4n0mOcGxKRHiuuDQmfHbHxSSyR4xOtYnlGah2oPIKArX-vUPekq9YQIa8CKZ9QNEnK-lvzKm77hBZhwjc2cgngjLsNaBDFJ2HC-Edps72inkpXOhJzJwUyDtcURTwaBY5LrxDldIJ6MhYQLPEK870x_8D7ewHxGbYM-kfdSGQ_rdl--IhxLhOxZegGYhAPGkjjAvgx6X-PdKFOVh0qpAAOOCdviU__tuDEBpYQP6R5rAK_MG1I2VLGhxBe2Y_J_1fwIz_YN1OTDEDQuivY1xXuQ-Uu8O5jeenvqeSdRefXMOhrfT7hWS659CIONpYQIWxV0qtQScs4I-FzL9e9EcPC0TqCTWc_Cqs02QDkOQgU_Ak20JpxR2vSZEJbIKmPNsy4J5cjKj7VYIJbF-kZVBYQAsTn20LxfxxZd_wZXRZBu62-omBsHudVjnB7OnNUNhMZBaTokkFYNQaYP2ql0uB8IQJrfpyQjqANb4skznxNNVYQJTnUhb8NwdZvU2kUSVmXJYOdOFXXCjLGsqDKXmVZhivR59nt1FthMj1r8tzaUILKtQzllDYzIdiI3eyhjQOe0pYQKLbOv5MMrFn53qidq6COl69wyOZ80CurvZ8wI2fTNnUePo96FfAhVHhFGbnr1fa2UHiB5FqS0bofHoDIN7_qCFYQCmqDVHj-iZeAF59_scpW-_WmxSuDU1GXoT8bOU9HSKVzUHF68JBZmcvDv-mj0XdO7z_defNQe7GPa3XzNl0aB5YQOnljh_u6VakiSdo8656k2B2mXUf3iHOBfgRWnpDX6WkkoXJBl2iFej7CuDvIx409uJikQIDRP4pzr-JpZpB4FtYQLc-OJnm2EmK58lJ_z1pJ429ddzdtBm3mqcMb9VSJEICxdYEXZdMvts0YrI13Z3sgoE4ZDAcc8oSsFjjo5DGSgVYQKKEOYTGTL64ozuQLMFicw-yKLg50fpAap4RZipqCDl7TZvB3D-PuqGW6PIZ-y6U4-F46qSm5FoK_IP4vfb4cMVYQD62fRtWcPgr1iXTALCOSXLb_tNxKv4w4ZToFE11ORCwCuUuGe02PsJ0nl6JbUGQD83zpbO66pRnSYlEGPJKtO5YQMNy5q5FYmM1pLZyr4FasapVMWj7mq_tL9tlK8uTUg6Rz1dKi5wfVPoc8ciuTyiBtQIKsIn2kH4E-MWGWyhCTf9YQL2cF2vYlrcmAu0JPw68cTyQJE1I4juB_BLALwwI5qtLXPSdce3YqtOq770zxj5e8wPNseFzvYUwNxnXMdqNonNYQK0HJ4NzJ0fG0seRP_bgf0iggXzvEeIYePysLFJjS_KQN49AmQr6H2fejsDdVstNdTAUJAiz_umRzvf46vP_bbVYQJ3jAN1hACcqjuA3onOgyyTOGaSLXCu6tG8HzQtJYqIz8GvVjYSIzgnWU7CMstv0TE4uaSmLotKpO0qyZQBMQ4ZYQNXn5gtw9t-btIPUf4lXxltesVauXrDNkRchR5XLX-SJ8kuYT9ntESOBHgm2TT4Qt1r61OtailKoeI-C5-eRTThYQPK6vwReKuHw_ey4CcnJb3xf7Eaq0QCV30PB04cmz-qN6LY_CsZKta7WrKpzZ7KFi04lhBwVZnIIcf2KZ8lHHmZYQNWBGX2pu5I49E8kHBKHDEMJBb8x9pBYJ5kWJG-877ZZsvRYxr1NXzlvQc1HuNpnDzOh1VSNbiam5M3M-vRa5jdYQOjp7CC2zymnaCo4saQ22nvC0cveqEANoEdFVyxToAYnjLQP0zfBGOC7EHL00d76QWWtTBPxzufkgvvL3JHT5zdYQBbbxTY5ZFjhz4oDVxH41Ht9tlFMMwQRn42LLvMsghP4SMzNF6b37WtYblkm0Ddejz7_S08fBEPDf94zPPBF-Y5YQHLKDzfrTtt-5qn0nCOVNHN0q3dx6f3IoHaHFF2CLGXrKkJiJa44wmM9d5cAhw-jHh9mVU2TeTCk2VdkcIJlJQhYQE5ip7jkAQUYHUXHMtXXbHqjUghiaChaQ2WGSW8ahVUA70kGE75oFdoVWLf7pS66CTzu7PAONhjSkETLuYRXm7tYQIds3STUwNygsgsyn9SStZHiCutBqqMt-6RlGLrQPmLipuCErOFTDrDU-1T4GHM3Lq7mH_Vl1b1evErORlwzaU9YQCW15mb8VExgAn_-fLB--Jz_IojWoazX8JttXuGwEWQa5M25tmba-0uHwGFBDn4MYYPOr1V2yOv5qGFJilo0oNlYQMgZxZUopRwzEefYANfXyl7htj5-JBB6sV2sFwwODYB_Jc8AbXrZPuklwjBfuC7fIcYnZTcw8CwKh0N4l91mmqpYQHwy9k8L3IcBJlt5asHfGhUzX6ekOqpery7H3dbIyI-RO0IWmvxDgNuY6fs19giZaCG4NH17LBHpkVgiYDlgfv1YQGi7Yf-MNsWAz6yQtKnJvSTvhNxk-b6ltq7sMQHUKnUG_5SsedGPTHWXSJH9gHwkU467JpLIlVznfFVIgajU9KtYQJ0MJveFgY0CRxAAIpBnuN6fC7hnzLlOYYxEaygYznrqCWramxOPEB5U3loHhdbPQ0vTwfheR4sruODcUUpRbihYQB8zsNFd7mcHjJOenAFh_NMJYr8V84BUa-kLdYrUHU8KmV0iQXjHi7ZF_-WfLRvq1-2h56DW4qi5CSROnJqPjRZYQHqO87LAA31LRffEgLR3LnwRTBVZesE-73Hhdr7U55GhhqihqwoJHaJz5e_aziEmBRFljBzMoDHCaTM-1CHM74JYQKZ-s897Ul-mwmBuLwO1P0HFRRYHhs1QxUoLau7ntfO6XK5MBxg6qxDsixScP7Ej_8-EWColdFgmLJNizkII5a5YQEp_a6044Aelo25HzXTU0UGBwvkzaNpTPuajRShg_7K4Y6ipmUzCqVUcw7vKsoumY4iLooF-TQJuq1ba3r_xmktYQKziyrPyf9CZ3X2igSOMWC_CSyY--_tAlqlpZt3sASSqtGzftudQmS4N791Ew3k78_05u_ucuW5ZaKRROHa3cT5YQKmr7dQX4XTCt5OlzwYs08-gAFuTmx7A0MAJdSEGSctVv23gDWWDuAKHMlFMrEqR2axnnSULvTdCVbHHmauVfahYQJn6B4tgirV2CjKQqjfdSBgMe_u_N69svy_xItZk8ycbHwOxckHOU5vzaTeTCN9czbMuIw8VqWOk6i5SjAwn5vNYQP0hLLOu2ZXj9rxy9pOoBsfiTROnHN0AxlBr7et9mJOcMaNOG17yJoxV---FkYkoBZks2wvVXDyC9-gQGve0nv5YQFqdFIrdh0QQXkl2K6r2UPATWxMF1P98Yag2HxTb-_GrRRxN2BRlE3cnRScw2KYQcpd-BNLlukn--jWZkC9TFdJYQAny-eAOPId1nQ6ic2qH_nWr0B0_aCXhRZ18FpwhADB4vqG_kZMVqO3ptIGHjPdE-_OZSCuOj7C1VtDi5-l-EiJYQHHOrO5e1KWscnKMG4v3wf6HLvntfdOCKO4-GNXrIK_AvNdoOAIA6SzLpiyYGUuJUmmm_zKe6b4Et4Q2Ng7olitYQHMFFFKwzrIY9_B2W1PFgfy44oC9A-VzYaCeQXj5leQQRFfYVtqaswr_ueQIdy2cB6TwG7HPSuymg_8Lyb9hhRBYQJRNWFfZAYMRXU5GrI5NaaJqvmWokHAqp1c5V6QL6iepX8WVJjDgua9Gp2U_vlht4qyz7JfYIKUyf83b2ahNukNYQMZsJ5yTeoSIHm2uSITlgtydWJAqNPrU61fi41UiuahnpMjBmpVFCjeWQHyoqEZiODWGMLnTp1KCT4bL7MG4531YQA0_6d0qNNp74F751A0pikUMsrMjS0N9qY9Zo-dXDiFPqeyKSwldkkfloCBpqCx8CVuZmiKhye7cWeHFjjWPpC1YQNzwI05xGKoVNfSftPMlFpvtgU4N1dZ1zmgN0cRGfbrQre-4gktarQvDk0JMQ5SCF7d-SXHeKiBLxyEwFwNng-1YQBVFnW6r-KHoqjdJMhMfqz0aRdujShG0Pl-cldAxqSJIdwHPvWUjT5o92Kb0_JhoET3PB8A1ZJBXNf9r-qylGENYQOlX_TiMszx3vzg1fQMCwSt9H1YIKcv2o_ueIoQ7lA4RDt5Q5c0FKNMmpaH8LpipSsxpDPUV0kCsXtZQleh7J99YQMWNZE0Tx50PKnltiHo6-VZRVE6e4cRbJlH2m22jQva2aWJTHEuHcTINJcjb0U83ROYtmmyGyUp1WV1W2KbDl1dYQNlGGqAJ81PuBXmUlsvC5SZkDpIp39ES7bpjeIbS6j7e1zAcaL9ENFK6SmfUvTCCU27zbh0z2cDcUwEE915LXlBYQPrlNEQLWpYiuWsHPaKeml4Aj4lAinDqDpLUpljTGh-vWTQfTLfBwnmq_jFSdecOnaGG3TbkHXKVDJyi1RRpBhRYQILa1PVvuooMn8ImAaS0vpKh-yG1sDhdxD9410K2KmW5xcZRmqH1k0fDf8U561LPaaiEOyn51Xze-BAbYgmMUx5YQH2Avj7dtQ_99xwup6X2g27-NsTHZWF-LUIhA8MO6WzWd4iOOtzCqd8PYdXW40LRzRQeQN2mki1b5TRwkxUcbIRYQJoP6o36eI5agwgmBp-IDfuVQHk4ysLJDfVBULIFyU1qy5qv7OaaxkLvD6jVB8Q4ybO5A_cL3Jgt3sszAZsOV-hYQEJtzzfrSJ2NGaT5qkAtjioFE2NgLPc7uYJUWjRWEZda7Mmv26t_NYFrncCz7IjG-pd8M7oIfD0VcD3X4T634L9YQBmGmrhqNMhjSXUFH0cW4h9lc2Tvi71dRggmMIy6wSBUkpkQ9D88LEuiUdjEmgpzK3idt9HLs3BqCJOV32wT5rdYQJlQEWc-QU73Lae6gOpR1XWyq2qnNmjau0NRYZVyHqe5h8dgyyrN5ygBX_mRtwTqKYDkwGt6oQ2YTdGvjHmW1T9YQNXloMzOgT8IcICDuUU4dBiW4RNKMGn02GhKVKNdiBFy-HJxDYFbnUNqn3DuzdLZSy2R8DGRskxK3cOpE8G5TCFYQJogJTT5gywbuECtaNZKsVSrRu8flLDagWT7oHjB9tZHdbftfznIJ8LtqTyleCIApauCVyU4R_SHWXyM0ztiC0NYQFQt4q05da6ygyNzFRYUqy-jsZ6bJoOHr-eCE7GrI0ygX_pk1_oFaqw8R6gnBbqo4qlLC426Db85pPyAMdsV49JYQJFdkCID3zNq8gx3XJbhOe2I5Vu5-U-_sASuHHjuDJIp5hccIW4JBbjJaW8Lpbado2IBWdguS4ECjOpdI5o5G8tYQOP7qPGPtbpOsMZl3WqDZYlqGddcdK5mgCoadJ5_cDMdlgaIA2uDOnCC4dyQ0b3yWiSbWBOugwmnDnQine7pxhKCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
    }
};