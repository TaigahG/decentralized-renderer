import { RailConsignmentNoteW3C } from "./types";

export const RailConsignmentNoteSampleW3C: RailConsignmentNoteW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/rail-consignment-note.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/transferable-records-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "RailConsignmentNote",
    consignmentNoteNumber: "CIM-2024-88219",
    contractType: "CIM",
    destinationStationDateStamp: "2024-11-30T14:30:00Z",
    wagonNumber: "33 80 785 4 321-5",
    consignor: {
      name: "Ruhr Industrial GmbH",
      address: "Industriestrasse 10, Duisburg, Germany",
      countryCode: "DE"
    },
    consignee: {
      name: "Warsaw Logistics Zoo",
      address: "Ul. Towarowa 1, Warsaw, Poland",
      countryCode: "PL"
    },
    railwayUndertaking: {
      carrierName: "DB Cargo",
      carrierCode: "2180"
    },
    departureStation: "Duisburg-Ruhrort Hafen",
    destinationStation: "Warszawa Glowna Towarowa",
    borderCrossings: [
      {
        stationCode: "DE-PL-001",
        stationName: "Frankfurt (Oder) Oderbruecke",
        crossingType: "Border"
      }
    ],
    goodsDetails: [
      {
        descriptionOfGoods: "Steel Coils",
        nhmCode: "720800",
        hsCode: "7208",
        mass: {
          value: 45000,
          unit: "KGM"
        },
        isDangerous: false
      },
      {
        descriptionOfGoods: "Industrial Solvents (Flammable)",
        nhmCode: "290100",
        hsCode: "2901",
        mass: {
          value: 5000,
          unit: "KGM"
        },
        isDangerous: true,
        ridDangerousGoods: {
          unNumber: "1993",
          ridClass: "3",
          packingGroup: "II",
          properShippingName: "FLAMMABLE LIQUID, N.O.S."
        }
      }
    ],
    frankingInstructions: {
      paymentTerms: "Sender pays all charges",
      paidToStation: "Warszawa Glowna Towarowa",
      senderPaysUntil: "Destination",
      receiverPaysFrom: ""
    }
  },
  validUntil: "2026-04-18T08:29:55.767Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "RAIL_CONSIGNMENT_NOTE"
    }
  ],
  credentialStatus: {
    type: "TransferableRecords",
    tokenNetwork: {
      chain: "XDC",
      chainId: 50
    },
    tokenRegistry: "0x798306062beA12Cd9196A98a2cAF3Df7cFD1DC9e",
    tokenId: "19143f089b1994d5d4c161887bd849877ee461f25d3f83bae25e794b05ec4852"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-01-18T08:29:58.074Z",
  id: "urn:uuid:019bd039-a7be-7224-af25-325f822baf01",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-01-18T08:29:58Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAB4x9tqOLByYFaDCLunnMbUGqOCrDeeg5kvRjl98OcuWMHGNMGg5PaLV4x_vIoA290DSFfqIE-mk1Z4HNmwYv_VgjgCQDKSBErEqEyntxTQFd4spOunGqS3JIhWwsCIr3lfqpx65YIGL9qq6Vgvw8lx74JDd5hh18953A5uyuZyWT-hXaNc7NmDxYQNbBB2Iu14aU-ItMKHLMTHQInVCQbbadpAAuPOmURoSrXVDaRub3N89k9tfDV0kPKD9OLATO4bNBidrHRK0a2EJYQKbXBsMZvgzMgbVDfFfW0T_zB0exgwK0hQkBb7OrWi116-iY5DvxCDO4VSkXqKU4taMkstOMTqh7VFliqIw0WzpYQGUV0drYdjevJ8MdmVxhiBfA5mY675PyHVPlPEMJDOerqaqvC3BIZLGPs-dss2mHXQv3s2xrOCtc9lFMWWZ9TptYQGkfetDV2lO762uZS0UwWBxp-Jjc-GJNiWWiLhslqmrtfOlQOeeeVKdLbf7L-9FG06FR8dF9vZKJa4L0VpYIB01YQNWPoI1oehdR4e4b4LfjXEqN3tiC-hu8sSUK2696XDYhQR5d378UhVsRS0akIfzXja9Q9-k5qWidQukmIRrp8wxYQDTCFr6H2pYrqv7UoBC9Xmt_90kJFWfkS15dzBT0ntiHxkpchbeaHXtMgjCwtX41bDooP_MiH4bggduh_AmOZqNYQPhtZh-X70EWidPSsHY0_Cq2QjQJe6DjcKO5xlNnV-1jfbUD07cbBfc_0VN8q3iA6mqh9ARTv3f4dGf8vxnw80dYQI7oKjZsXE7nWV9qj8h8w9_FFDJmimypDehHk3vRlVnu0td3j9-suJfmuOS8VafytHPNxOqUz9me95SwA14EwudYQPu1Dl0jbCxPJ_O7RhnbJ2pj2Fl9xotvdzXUxDZBubSG6Izz5Idl3hS18tpEpgNbeVPM5MRec74y_DAJgx80TNVYQKfqx-VDyYCjYveMrWXzKs66PcNy1f6OCKcciohDEskJ6QpzaO_t04tn74s2F-bD6JN0LCQ4XgtnMt6_FXEso0NYQKsPKQu4pqlJcQr0ygCpIuASoRd1f3CcFhmbehWC9j4DiKypa3t3jXheyfYFFxtxvTjS4dUa15OjsTeeT5YEmVtYQJkJlJGOM0IHBsU0b2jsUKos6NWRSCZG_MVLjMs0ke2hpFrHylqzmxPGBAk04JYQRq8P6t1vwzx6qGu8z_bnQFZYQDVNImWUWKew-cj-rJfJ3X0FRqzWhJtMbhZgnW-5GqVCjY7-6yX6NH6TKlM2IhLGLoP4PzBvjoi-EgAzGGf8TBlYQGYgX7Y0fbvRmvMBlbmxnnmWH346GvTDxmuswut0_tQ8Fdj1NB0rswu4uSFcufTBBhEB8ELpBkVCD003DjRKrshYQB13CWmV5oF1GOgNwVfnMNXysnUVDCG1aB4N9U56KNDlTAe5CtEy57CmmaUfY6MZ435MbVY_cjv1Cfu33l8hUc1YQF6GnL_Aqc5h4twly3aCWak03dTIakTtChun924gZf0dprzfifqRBLXxqW3Ko1ps3-FcK5kTSQjR5j0qB1Tkb_1YQITIXWB5nr3zMPBFOcbigNOiO7gk90bbYl-CKd8Mcdoz4jDaJskRby1LZylvZlCkDRopMZTTbu6_2phifZEhqepYQH8-RYUms8L3nt-Ij4wG9P_XqNa3XVTkqc2yKqvFwHx6I5LqmBsf4wesrBUhDVkcVVeJQIp_L0KA__HoBPZOjg9YQAipFg4Am1hYgcz59YCYf6cMOj9zYKSyiwsg3HkEplNNumuwO3kIjt1QI_4dza4yH846dxL0lqMEwjpKRu5yDcZYQKuvhU8MtAR3umqFw0uOndWYdabsXd3kRtNo7k9AzQYU3rtU_RFiSyVEB2qS5uInZ-PBZawZ2igDLAiI0UDlWkdYQCC87JvdmYkwbwP6KUOlMcC-6tWKoTKgM8wzgq_FKV9fcWtz_VTESr1XcPvWxvhK68yNN141TeeJWkISjRcmlTtYQFkXQo7ymmnFMORYHNDvGAO6SG2Id4RJ99uqPIEaD33aDw57KZJLGJqaXKWWdyLsoMxy8S37DmcOS3h0N57qhyJYQAr8Oo4hRgcyeZ83iSOzQkfJYYRjv-CsqBok04MheKvjNN0Getzb8oSyQpL3VAr97xrAe84WCp1ABqfvYvivk2pYQE-4aqtUSnfeWuW26oxt_P-Lq_vHjB3qaHwgZINhjUtkTUPwMvQAMV81Tmh7ZJ1xVwUj2HWMPvfI_xI7daO0kbhYQPX9g2r65wP58Oa-7gwpYzdnldtaO2pAWc7psKEAMfVj6PDZIm-XAOpTgzuqhcBFV2IwuX1WB3Rspe89xBhCcCVYQE-i8bSKjmKE1wl5WS-heCdXht3IjLNQ6BmTB9Pw_Qzpx_R9lia5PV3zC8GN9ErANOjqOHlPhWJ4waIU403l0NpYQBklRfyBl1HxSNpXTSj2EmJSdmHu9_W5pncgr398LxMZpO5Q7hwH79HmX1ow54vK3zjX5QtMmoh3zjcYWdCmqDRYQJnyo4uHxEjIKwtRML8nX6P92Z-a4O9pFyhjX--UVR3la6AaRm9l9lr8WXuIIozyv9SBe-REliiV97oDOHK6yKZYQD6kBH0xjGWvYqr_zQF8MIIy6jMvnDVFR71AaW5ytng_tNfPx8P9xSQy4U39EBYyl83k3LBhM9saH8Bw5vk-UMxYQFSICIxYimHQXxie3PX5rNUnAbRtm4JnSH8Edl0AxnNwIzV11QcmR8WjpryGl_dD0J9VrFqyuNTo_dRdey7R9etYQDuP_GuTiEEzBPLV9vUUwFYdrjUwJv3bqZ1q28akKPGsqS-s_dnBZ5re5jI3cXAbMW-AEGikJQmBvV2zDC6rqg1YQFO_gsaHFfkwxDoOWT1nxZ18uqVrcQwfkRo_R9cUAsz5FhhAyT1CtQtLqi_damd5arPV5Ed9zrPVGd5HzEysCQtYQEhoO3xi_z0zPr38RUngdoV_GbWIpuQtepoOxo0HcHcBatf0vEVYbcnsd6EuD_fLwQljI-hTt5JUwiMk4XWgA_tYQGKIx1ZpMo2qf-j_Wcxk1ICknionLOcWiCPyTxcLpL_jS0UD5EQ-S4Cyqj1QsYpG4HpCyd2OQPYYFekG4jBr09NYQG95kTtwZsio0ezTJjF5ycuo1nDeNHdlt22AbVDUThQhk92WMUcuvn4_W8Pc39oPDalbJwjbI_49Bkx87xGG20FYQOAyklbdiYhu3gPgPhJLmTUROhzc2o1Eh4ORzgN-zp0R8YFf6U69V8IBxhLdVMO2_boBKHWRhCnxUmogqdfxzs5YQEbTcwnckPJmuSPtLXypz0XFKZc-QOwdfMiEFDduAweoaozFIMkShfbRw-ZWrAE71vxFTNBGulFY23A7VsMgQrVYQCmPtwnYnJDcaBr7fRX9BBCYbCEAC04mFn8DiGC8L9IlgxZp0-eO4nmp05csINVdtcsl_xCv1jGztKZfyIDm3r5YQIn-4AOZNdJFUrhMJpMPPeBEOV4Q_Q3PCt7G5L8HyLQbrSa7M8S9C3UQyCH-zpt8MUgT9q2tbHQisoOWrUcVlVFYQGInZ3WE6UXXLoN_JeX6OR0zQlJ0JQVuayPMGLdk3jqzVF2xKpKkRCFikUttQ3YlddsStI5iWKV1xr4k8Vj8-aJYQOjv2YsQz8oLGub3TtLsTNQx60GGb79JQ10uydasXDgNrQyH9ycGNAvRmn2wLYaSUvpu_f4myMgtiujAwPaBtDFYQAiS_hVsfcHYTsMO0GRYe6Ijvc3-6kbNDA4KrZkPA_yd_dSWRp5mXYxc9oz8L8SxS45zwIUA3TtmiFjeUNno5DBYQKuLekZ5yhnfHM23uEgykSkEWX8WSzAkDFzK-AJWkvlhRtFC3De0AEETQQetQFjk_6Y0Qg2fhFnh9BVjl-mRNKtYQFUKu_TFnLljSSh1Ft45q1tl_cIASrs0IWWT8bfjYPKLo1RyCVg9E26z4j5gruZZKu9d6G_bjLC2zcuK-WdKNwRYQPQ9QVvJug6S1hNDrW-x2lbAcaJ_RGhWPr0oKXe3ESLbzhOczPOqFBVImkFQmHzV4OLzgHuaZC9SUD6EXVGq8bhYQGl_0otk9rNfEHk53SblW_eo3o_nivmb0JqcitMoJzpiaLlwllrp0VN8Qp9vcOzPLQBlmSa6jVcQ_yHDdI3df8hYQGC8LeO1r3ZB_7UnX1fqXGmAmDrRKsWr6Wvtpl-GiX2uD2dqXHfSb02j-RQpL71K9Y5vzMmpfqYLcOb5yVJbJ7dYQDHiP0bF1xhuFJlD0rcMv6uJSMC6uExEIxKO5F084R9TZRQqPR1lQWbNyfES5MgQpfvgUvTAhWhDJQJD3pd2nq9YQO2umSAXG0Vs6KCoZ8dxy-tUOYTe4Aj754aonRQ1iyTO-IuBDCpF-ItMMGHdud4j_3W-ydSmSAO7D7rpbSHMnK9YQDuoolnSHWnrCU3hu8QrYAWMUzEY3LtTLORv3SYaCvrUMggypbsLzJJc3ouQc1Yqi7WsLt3k7aYyxOJpR8roGCdYQLmo6bafpgeP42XcaVoH5HL9b7KjbRGXEdFqBrnEUlE3-ZCVPwr7gJBQ5dyKCKjvmLgkAys0XjYn-smW3EjGrA5YQKP2Y6dQb7AoEinuhRLcVDTH3BBm7IdEJv4tkMzM90OozNgXCyZZB5rFHWTx3OcWlImqrsvgp93Tou2vX1Ey8V9YQD_n6riUGcU9wT8wA663PfjpYZSZ5JisSSyrR7AKh3DEolqNBxhtm_QUUI1roNsbJDKLPsvdbFTm64N9lbkp-g5YQKRh8vFynozVibaS_JeByPylQ4SCFRUxUWrIlaqxSCzzxPJn2BjWT7LNWsVMzDQYhDlhTOSOIpd5NPG7-DR3sNBYQIre47HUGoI9ehs138cvuw3yvBNB9RKsHnHjMfP_E0GAhex9V4uPSiIyDkmgbPdqaLdkznr9RKoiLWs8cMyfYg5YQL3vcWRa5hEjw5m7ZKBl1LjCjZx8dT1fltlS9UEi-NCcwWmphB6VovFxR6zF_jZANUIlQVD79GZ3FaZdWaBqEfBYQOjxPQoF7o1hpBk4r1ptzKFOopq4-pdduCQIYNsy3wfBfwCzn2Ms3-Y_Fapywk_o1od7hX2s9XYVnIWeHOODIklYQIeYpd06tJdZuUCsjv3VktCF18uZnPPzjRcq6mrzTiaieLWxLdAqRbrYtY_iLJoDVqqSnJvJuJGw0PUsx_34CSlYQNP-1XgQ1rMy2--u81Br7OMEFF6JdBWfOOS79yl0LgVhHrDEiE7YsysWOfgHDOhUWQxvr92h2aH9KOuiu2H5alRYQHiMo0xhJeXkM1hlSqPrgm6B-vEBDUoTjPXAjg5n28ebIoVMCV3UU_Y4Jh3OHb9sMGkrf-ig0cqtwhd4Jx11xrqCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};