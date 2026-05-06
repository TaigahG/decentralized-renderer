import { RailConsignmentNoteW3C } from "./types";

export const RailConsignmentNoteSampleW3C: RailConsignmentNoteW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/rail-consignment-note.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "RailConsignmentNote",
    documentId: "RCN-CIM-2026-7788",
    shipmentId: "SHP-RAIL-DE-PL-001",
    consignor: {
      name: "German Auto Parts GmbH",
      addressLine: "Industriestrasse 45",
      city: "Berlin",
      country: "Germany",
      email: "logistics@germanautoparts.de"
    },
    consignee: {
      name: "Polish Assembly Plant Sp. z o.o.",
      addressLine: "ul. Fabryczna 12",
      city: "Warsaw",
      country: "Poland",
      email: "inbound@polishassembly.pl"
    },
    nameOfTheDestinationStation: "Warsaw Praga Freight Terminal",
    goods: [
      {
        description: "Steel Stamping Parts (Car Doors)",
        numberOfPackages: 40
      },
      {
        description: "Engine Blocks on Wooden Pallets",
        numberOfPackages: 15
      }
    ],
    dangerousGoods: [
      {
        description: "Automotive Airbag Modules",
        numberOfPackages: 5,
        classNumber: "Class 9"
      }
    ],
    transportMeansIdentifier: "DB-CARGO-FREIGHT-TRAIN-8899",
    vehicleRegistrationNumber: "31 80 452 3 111-9",
    transportEquipmentIdentifier: "WAGON-DE-5566"
  },
  validUntil: "2026-08-06T13:15:16.483Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "RAIL_CONSIGNMENT_NOTE"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#16",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 16,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-06T13:15:19.103Z",
  id: "urn:uuid:019dfd6d-b6c3-7226-bd0f-023da162e3d7",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-06T13:15:19Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAKIncyqdl6MynsjDcrPVgdAdFT7edybAP131eFR1RNn8t1K362zTYQ7mX0zDopWunuZtlzuFSBBcsHczOs8FCtlgjgCQCZjpi_8vT_1xxCfrWQyFKbOZXvH9817DqeLFPyQQnIydYIElZzqfX6qP0Xg1lj7CBXL7-ehV_86s7CL6-3OzsnUg_mCdYQHN-eW6s6i9l2Bu9eWF0VXOOxqSOF2zX64BzqHheLor8l2r8vWvZvK1FYGNpv5h_cfMJTuHDM-3fUAD3NXCaKCBYQGUO5B1ev9QMVwSG2Kiu6ZCQOSE7hTbAnh4XPyzoM9_MaYkyG1vfaO0cfPm6Feuah0RcOjjmHyA6SNL6j70UVC5YQFhK8CkHxRXM71HRmqMCh3yvBmFBghQAcMo6XY3PxFpH1dsbBygE3-1Za7sAW59aiJHCOJnSsf9BnsmGeTLne21YQG88BEzrpxLJjbmHK1OLmmPlGm9Vmz8xG-KHEx_KbaVZs-gR0fxteqOV-Beyvj0cQI-j-ZR3KwzSJez26Kdo98RYQIbNq660lrHRPudRj3_jUnKdcikRUh2tB0g71trm2IWEB5OuDyuvv6rHpyxfRmyiJFc5T0yQgkf8TCPcShB37hhYQJss4WTdu4wnVc_x17opoIFaVImu5Rocj1tvmwB9_Or74YhZ9lnCzab1F4hRvfaXYnECRVF9ElfDrkahOJYdWqpYQLEsTmOkahmeioIxINk0Y6zKFcVhSPMVLVxW3lqNCuQP3LiJbftqz7va8ffuNG7Szl-82O-3zbOvx-Mg05d0AIBYQHqs5iBBWqZxDilp6JAvPHqb8Iq5UCoGRfW3O6fYh7Tx7G6aynwDg9tAPDWE5S8Lyie1e34b8VXmSh3LDyM2gt5YQJGFB4oqh17vh4rfWzIvjCt0MhDryH_6BO8wBI_A4NuYp_PrZy9Rt8OjraStq28_qNk4s7vMl0dI-own5MpDyR1YQK6K2anTzA3NKEHjkTg55RWCfCY0oHjnvIlIy5l013GWPXCzdCyQEuAKABbJaf5pPj7OMuUECK52yA3RrOMqGY1YQBctePfyH2hUgE3PVxgjddsF7D0trer5J4v6k_qOV3rK_PZ3e3CEKVpjcjklKn_mAXMdqnlUiLEoW7WYaetOAOxYQJVLQvUr33drU9FCCPkMM2ktS3VAK7PbfQZTJJU2oE3u8HMrsCFs_yuCrICTgalejoEyQ7JO15LHaRIMekofH1xYQEyG09ILpq-3w9beEl3CfwEB7RJHDGr7nh9udtro4mj_Rlq84-Os0ZpWt1M5JJPIsTP3ekkOzq03uREUCBa_LhlYQNl8Nau3DfYr1c3bMPciQzPoiOMp3ehRcAyPOpkp4OCsafczlA_A23YJSvM1gSq7yZp5dBaj32TgievHOg2cHIpYQH7-hI957H56g6s9UExYGDCrV0C7VnUdMrzjgWzxGj8zx10AF5Z6DXIMrzotpJv0B3tLOZcObWBpQMsYrwG8WjFYQF7XcEWyeAbGLd3xOat8qdT2acE38YU7zaBUmuoaYfSnzkVemxY4pd3vdN3obj8MnFZNqsZY3KP6Z4dQJKh4RFBYQIe8-YIM-wwsyVOqNTdvgjX9qlcmlCAxvhKHz64y-JR702g8cjau_kfkAjyvTQyf8oXgNxy5DWtJ9oYNki_j8hdYQIh1MlxkonhHMoHPaWSuh5Xp-MeqHM2QgUxEUftDy0DGjmfGKf0PamUAlGgdV9cGK2U4wnBT2j293MS2vy7n0JtYQNwLN3dLrcvaRnxMLgRtt5ww0Wj3VBfBqGSWRYw5NqZhJDenQaBWBioIwZ0GggTUzh8OnUMkgz4RUGf4jE8YZJpYQAVnVCUCVs2be9jhES_haN0celcjWOju8hP9jTEZBHHdcdt4ctIZt-4qbeFJ_0lmew9MO-Hruo5gVGvxqYu0T-VYQK16aM_ZxcP3Fz7LsJKKtzGI4lcJ6kvqRiYQk3Efrtp2a_nVppJ9ozLnr3WiKVlTMSCg9THt1BQpQUIAyZk9wbpYQJWJnCPpn6sUZpssdD6MbRMi9zdRBINCsvuxpj3gNizf9fQKo6-ARGTNlme2n63dSPEp6ov7HiOFAmvz98uufatYQLBD8jcllv0nC7TDpx9M3iYUzjewUB6dydHqWD9h5lJ5d1Lc5jCqRIfDN2ovNRbe7T3C_N977txbal9XW73iuc5YQHsnYzuPqE3i9ep1POH4KIdU4AmmQ4dcVpCMpSBZh-2mUuWZEbSkP3dJ5ANg5tJoVxNMLwifLDEiS1xrqb3Ka8NYQH6wXIY6HRhVO-1Tcx2zbVK7l6SRWkz7KNGILyAVYYXMZ2RMXmtKFZFn9Q7u2LGAaHTdJuV16j9wdnQYr7y76nJYQD_ROyzMZ2ROTLg7IrHXjmzKOn5PgOS2O6Tz6ZYzC6pRA6OAC_76fftsBDZ2ajLE5gQVZk6ceKPLt622T4u3cNBYQHO-Yy9qbmgEO91piTRdBfmjJUekH6fS3I-E-swXZzGaYvCjJ0W1qJtMXlAbSqMdE4BQKBmdK9JBZZqvEK4whZZYQG0ibUr6ljeQfzsbSskTnVQnc7KnNqkK_Fy7njZ24E7PTTVs7Jm6O7l27DXt9dSBkzwnhVFxDYSvmEIUtmoN4OVYQCaflYuB1OYVTpl99lxJNDKx9F2GBhhOj5t-i5UlhABnA5eycK9Yz7xvvWTRmE7GyauqV15L8h3RfW54yeg8jbJYQB8pcSDGyS4DaMOMXjWQ1H2u7HDlTeSPGgMMtnsmdfw36XyqsfqR7fOf7I3h28MBCcszrWwISBngDaO9bzFBuZRYQG0b1KE5syn6sj-Ov0ibgrfBqbA8bskBZJz6UrbrS14tFqd2A9hlr4BszIEOQneDlhMXOD-vsTmxPpmwm-YDh9NYQELhSulyesxK8TWRBUWrBvhfof4qRgaU2B7-X5EP9BO2NLB4sHF-GzXdiu_iGk9LgHKEfLIOS0GMmU6Z1R2O-L1YQL6Fsfkg9eG2L5ukqnp_gaHMFF1ZciWy7TRoPAF7IxaWWokVqkuLR9tfx-u-WMsCqsC8lN-gBM1M546OxIa0GlBYQFeg-YBaie2Q_NgcmEmswHWaLmkPQIJENWzlxjp3TZNMQssjhcxIX7hhfIO6f7fQLZBaNcxVB4KM6jNLEyfH93FYQHT9Ma4sAPSo5tkO91zmZ0wVX5mg4_RDzE_j3RDMKYIK0zsidrdnrqT_CiBK9TJ5hcmcoDfHXGRlCFFxNOcAZ9RYQBCkjbPq0OwlXytqlzvq0VVFgEwtL1Sg9CFsZD5socjr8EO55qJw_edSn2UNN9G20g67l1J5U238gOKytoku5Z1YQFf1yjJCsIoIvRNlE6iUsmtRrVwxislirqbtH-6wmTdBSGQ-8dS6ABFvUn_1_qUr0q9fQ-56X2jQ34MsPv3yQf9YQNOk_D0D4qbqmhw_5Vc_94KCQr8du3SSrO2XcpNP53XAihvRaC_6V_Us8pPvAc9LkS8xxaAFsJxI65eVHdmTO91YQMMElG_Kwthq2RW8PEvvnrLANkpZ2nUtzPV8W9SKqoJzt6UlZVrmjv24upoHdHfO36JFEPnVjyg-Y3T2Vz4U3-uCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};