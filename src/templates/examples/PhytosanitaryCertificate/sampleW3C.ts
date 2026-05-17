import { PhytosanitaryCertificateW3C } from "./types";

export const PhytosanitaryCertificateSampleW3C: PhytosanitaryCertificateW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/phytosanitary-certificate.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "PhytosanitaryCertificate",
    documentId: "PHYTO-ID-AU-2026-8877",
    shipmentId: "SHP-ID-AU-123456",
    documentIdentifier: "PC-ID-44556677",
    approvalNumber: "APP-ID-9900",
    permitNumber: "IMP-AU-2026-3321",
    issueDate: "2026-05-09",
    actualDepartureDate: "2026-05-10",
    permitExpiryDate: "2026-06-09",
    consignee: {
      name: "Sydney Fresh Produce Pty Ltd",
      addressLine: "10 Market Street",
      city: "Sydney",
      country: "Australia",
      email: "import@sydneyfresh.com.au"
    },
    consignor: {
      name: "Bali Tropical Fruits PT",
      addressLine: "Jl. Raya Bedugul No. 12",
      city: "Denpasar",
      country: "Indonesia",
      email: "export@balitropical.id"
    },
    permitIssuerName: "Indonesian Agricultural Quarantine Agency",
    destinationCountry: "Australia",
    originalLoadingLocation: "Denpasar, Bali, Indonesia",
    originCountry: "Indonesia",
    arrivalLocation: "Sydney, Australia",
    regionOfOrigin: "Bali",
    baseportUnloadingLocation: "Port Botany, Sydney",
    placeOfIssue: "Denpasar Quarantine Office",
    transitLocation: "None",
    certificationText: "This is to certify that the plants, plant products or other regulated articles described herein have been inspected and/or tested according to appropriate official procedures and are considered to be free from the quarantine pests specified by the importing contracting party.",
    grossWeight: 5200.5,
    grossWeightUnit: "KGM",
    netWeight: 5000,
    netWeightUnit: "KGM",
    transportTemperature: 4.5,
    transportTemperatureUnit: "CEL",
    quantity: 5000,
    goods: [
      {
        description: "Fresh Mangoes (Harumanis)",
        numberOfPackages: 500,
        typeOfPackaging: "Ventilated Corrugated Cartons",
        shippingMarks: "SFP-SYD-001 TO 500",
        productIdentifier: "SKU-MNG-HRM",
        hsCode: "080450",
        animalOrPlantScientificName: "Mangifera indica"
      }
    ],
    conveyanceReferenceNumber: "VOY-123S",
    modeOfTransport: "10",
    transportMeansIdentifier: "IMO 9123456 (TROPICAL REEFER V.11)",
    vehicleRegistrationNumber: "DK 8899 AB",
    transportEquipmentIdentifier: "RFCU9988776",
    sealIdentifier: "ID-QUARANTINE-1122"
  },
  validUntil: "2026-08-10T06:51:05.809Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "PHYTOSANITARY_CERTIFICATE"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#28",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 28,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-10T06:51:06.518Z",
  id: "urn:uuid:019e10a7-6597-7dd1-9b6b-a1600917afa5",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-10T06:51:06Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAiIItxQ6GG-dMrS-kqke3bYwue8ee4y_cyjHCLafyf84gI6dzgz_KfgMA_MjRonGqYFUKprYQHKuoPFLthOo8FVgjgCQCdQoV8a3g3e8sYJ-OSYx2-52xxX6F9XmRGACDcr97GqFYICwsAtY0zimUTAyLa_d8ARVhFTeCrKL59gcqymmKys_5mD5YQOeyPqIytzwVzTbCloaxrlqvp9UNbXRG33wyGEgSfNIL4P8u_qxu9snDqDZkKphk0FucdeP0AYGaNBA4rOvriTlYQEclFgeBOknY1FBXWkn22u_N02_oJ9YQp2qDV0xpRWLPFWEJ2fhCqC6ssJhL2_9vVizYVA4d6blqAnkp8D2zW7xYQIjSxG4VT4I1-Y8AkHHpeFrn_Q4-qqAD8Hj4Rbcjf88WqfWB9pdNg5Ez6gZy9RuTjKK0SycyC5GOJ224D-rtPfBYQGGLQLvaTg6h2td60g7PDL3vcIbV_Fi_6j3F7uqpPZWT8dVa5aSFe__fGkeXOnCnwpnbiLWopbQxD9stI47icj1YQMIvFPPHh4TZ0fl_2tZ6CA_8gVw065hpJyw9AHyaZ35V6PXnUEfe0AyZ1j0qT6OSfWGYz6QOhq0st1ZRihmJgyRYQBJ-5s9Yqt5q-D_HcFZaLW1N7qZp-z7voYZj1lztKk6fqIFjN_wtX8R5HOvV6VmvdL3QCpoJRw1un--x2UxwC-1YQDjyWTR6IUX0-ImaBYiA8NYxagSlJO54IHiZ6D4g6aSpUriRhjaw5VduDcuMPIZkDpEa_dkJXeijYHviB2Isb6JYQBOJSqIfOl7VnUz2SAwnPyK5ytaKekdwN0zph2haEjBbmFj-G0rzLtcWEHmYk7H95M0z1Y54O1BBESbBYhdefH1YQJ-Up6p3MPyx1TEnX2FAw-4unvBDiTQEiriBX-nPYInxYQhAFvJza2N6wirmUeooq8s5n4vlmerUreJHhgvArC9YQHBiFBHQOYdK69mLpqIE_RqII93z2PDM_YY-Ju-KAg_awqYEuo5PeWFvvsYXMgE3ZgAwkRhfz8vifAoNbFcXDxtYQEsAnfK6naIrrw-CxhuKEGB9TKx1OIBOcLOV9cn6a5FIPFYCQtcLpc3PqTPEZJqEgp5_v3mCY7xC14RNLLraLglYQLI65cZGNJN_qfzQlTS9n-6kZEznm4Ans7PVoO2k7ZspFfHp73S14ir8csYKTMuMRpwLDYtqSyVSC4VI7Gu28dZYQJH8iUh3g7woF5Tyua-T4rg2ebAqsVJyHeEh1YlSbUEbE7WRLfm9vHlgj2weJiVzZyp0o0lCOuGprOkXujN66jFYQDiGPC0Qad9sZ9L-WvdSHUvKtMJDbIAp8HhNcbPp5vx3r_SX4p6Gt6uXZkft01ZjxWoOpsHNPSDzIHrfHZk650dYQCtwQwDVBdiquBcvArzUtNjOfyoTSOw6IdfLVl8PzbzLK-nu6jVi25EM2Ta9rqgz3zHjcS1V5mfSyJuqQjW3tchYQL6SZC_Jf_gnWjRIwY4YKj8KRpxgjE6eu-pJA_DPx9aHmXOZ4Pn54D_0KssR4ICsngZpt_A_pMOamfZhDlhPVXdYQJrFnd-6fTaNlpeLiUtBFXXHsUq8Z6MlLN4W4SRorOTsFQgjUWhHJAtSTq5WCss3dey-9bVFPGcp487jSvhz-k1YQNXa7bMf-Df4A073Tx_PYpg-plp1ltxt39kkkXPFLQGe1GxpAk3gpdUv-mgyGkd_09MLo-uP2E8cXnnwbagMXKpYQGk8YESZer2RRP8_3Ha97s6qn1aRJX2XRi4hkRnnxT68SKnsM2YZoc5EHFo26XGg6EBldA8HXzDERw35XVe1O6xYQL_OLn6F5j-Ys3AKxkbZcYLinaZ2Lu2qmSS9PW4I7gnclJ2JYquuslwB8f7bCupklzRGFc0T7HBL7JcTyuoDfPNYQPK2ZR8uOVPs2X5E0s2As1bCjF9tcZuyzsq0SxPEzQQfNqmpdYkkvq866JFO-IoZobspLUwdroEt-AaTKBOyloZYQIJZJK1IiSsOSv4oaj54KIVqJ4kmDuDqxWlZbZdp2Ec7YQGXWdwmb609gOY9Vx8xyzLA4CjA4tDJpGtfzMw29tBYQJQZI_dXv_el34kXNB-qlK5v-8eD6o42YcdzAaChf7EieLKGxl9UvsqeHMNRSmezsgWOJ192Cvewk5nn9exNwfdYQHVbwDC-blWV-TG4_6cOl7twx1mz_hWUDg3yRYyl3dSqg_c1sUpZPxyE-4Dvl-VKy1OmaVil3hudYE9QOE29sV5YQFfx2umNLeZrz5OtPFkQmpdJ0LcgDcQ7daWABctnSPeHcz8JPZISicmZHgJN9GWDAJ0G-21uik62MXUFUxv3SghYQCW_TOs8uCa80sSmacWDSIlBpcEzxZjEkBdUVQtV7yYbVpIV-XWc73-jFX-Jj9T0GEhok0cwxzRZIJM9Pry8jxtYQNoZI-SZ8OoOC2RlKs89E9tutUG6Dd4p97Ul7fkYAxehul9Ac7NxgpR9uajwxvqPO6oBEMdkv52if-WyvxcNUnxYQF6_10EWohxfkZegwhHVNubjN5zngJI4A1Do_H8zLBJWsGUghCdkvC5DzPHqosSGw5NzWB6ex4i0xP0EKnoz2IxYQO5saE3WNDRnct4JtxXznijIpajLnWYIvm3VB3aGHXnEx4Lu11f4vhrUYoz4CKUdsvw3IAAWFiw6IHB9TpcWVY1YQN6QLu01e7LJTQ4pP8YGzfRNl2SKc4uNbMved1C8mTL4q9VndjXrSVoxkVFguuJQn0G_QtUVnv6WkYnaKElNgDNYQEyyV0zqB3hVUdxedouWnVz4fMbJd9smI7HLsks5vGTva0dG27XnIbIFTqorsJfVI-OTpvEbhaYtmZcIfQh2dXhYQPpX-2ZMY9PoFqjHQiNAlizjEy4w_l0Qv72YA5h5rV-iuGkgnxO4uVTO6rhybUz9448gxS4TZ1J55jH1thpeJG1YQGILZenXv137BrqJc_geO4UpXJoegb2iIGUqr33FY672Be968nn_j-rhYZ4v8CYqtkgzVCgZjaC83Wm2eB-_AlZYQHA3mhcsjC-HoDMsromZyuUSDJ0MBU9hSdpCZ6IOQEq5PDYAdtQdTGJ0KseVoCnFKUP4ibF91K2ZiGz0cmjxVShYQIBKjOn6LsKSGZtoHp2p8uRUn7wzd8z_di7gasv6A6SRcotzJ3Np4EnqxwJSuk7eY3fsBWGWbLvUGAPnVdczYBlYQGGF4rWP25qatEAJ7R2S5OcEK-LyOMgZ18rcByzFCPSIfprR0p5l_dX2FWEGjwwQjAJ_t48jhzUVrGO11LlPlaJYQFn4MtibHY3YBzRP4155hVWctY6tcH9LXsuxODwxiMZWTwh6sK0JVjdGmBeMRJy2T2-E-QvhOVT6cwveE9ZjPrFYQKbvsXFCVjmBYcwzUVSnC0WiiEGS2_TRzamY8F6JO976Fg03aGu71Zz8KUYlHjOPUxv0_5XkfpymLnDqnyOXJLJYQALrHgNHP-Kqh3YUTDnyLkcYwpiDQ7W1tkJgHnihO12sL4_m9A3yipvRCYFMiez8w4pPA97N54m89R8mYcgWNQ1YQNBKglvFreFyqQDEhYrBWDOZNJZImKASJ2FI4Q6nd929SAR1KkkXnvG8lTo0gI0Oj9dqogVnDIEo07ZTjds66kBYQFCksZkTjLw6kpD64LyYkqDWUGMhf-Kefd_D0xw1XlygLC0_2h6T8AtmlriHLK-4vwiuvlT1QXmN53lF8aJXfRFYQDFJEXUk9U6iVUGDkvFM5KCsbg0drqbWwtOLIaXaZjlgieYft6S8Ooml_Tq_QDMbPjc1KOvJk-PzVowAvSp22h5YQCZ7gIW_jeGo0XTVuBv80QMBsOb-13zpOa0RVv6rQ9m-wrDQ3VIqPgrngD7glYkqzkseHlN1FNPdxG1k5yPn2epYQLREiwYv8qOmU1OCXumvDaoM8Zii6kPYAL05b82LvduF6XMX1ZR1VMWW0bDQbVUUJUdq5hW96Ez0UCVhFP5QnJ1YQHF-HbtUhOOYSTiTg0bzdWT9qt4XrKGHgVSBbsQgaQp04mC-VfZ6Q4O86uVrYGtjW1iyAmWpyNOJgXTsA0VPT1tYQMhf1wWtS2kfPgzfwD664VWWBdBbdmSqDn0TQ-ITt8zVOhnLavbMEftTYNIwUSONq4_jdqx1yVV3z4mkJ_z2hUNYQLcl6VTm8b-0g54ETtQyLFpJgw0qdUVBzN2bkCDIhPn88ppFLh7wg-18SNuT3ec31j_dH8yoyUfOY1eLByHADn5YQJDxLfZZVnWpGZXDmcODb-u1jCfII8SLfuOsoka2t0mo5QW0UW25ZsdbYpeogl89xL4LuvGWemg24Q3W8EiqPm9YQCQT57zGMHHEmO3Ys4Q7hkcMUasSOAl5VfOF7eM6OOZUYHO15hYp5ANjI8fBGbwwNfPYaXyfe_us0HAGwGi3bw9YQKbYNkYsFzLX_A0XLhEmGArh1YJYdYyTg60DrjuQ1im_Ll4yW_fWGCGQxmGz8aXZq-N5GX5fLeA6lQTkgTzY4yhYQGJWbosDgzohEVnyHli0U-pOAtKCYC6-DcZssBHClqKEVODUNN2xZNzdgbnh9JjlzBvZs3Y6MAQak6cv1QCR7s9YQO65pFAcjtpudeC_gVVbC3wi6H3OQJzkcY-njQIvZOE4gU5YpbtsVqz5lxErpT5WNALdIF7E1ceqeTzZmL49mCxYQN1-TvFfgplUXIdWnnidYXxg-elxYBV0OoWMyh2rwpK-M5RB6QEwkVlAiVIvNtDLSfXFQ41zuWou430nhKUnFsFYQJO1TRA1Pk3_QbMue_WdxXmo01FOuBLbZSFcph64S9_DmD4YN40pcwZzzepGIoWMlFHDsc5K4Z2xJGa7GalMUHVYQOq-qYX7GFm35zja_rPaCc3Jl4K1N9O5lEVNgGI1mBWxytk-B9AtXN76G7FIjS149ra5FPRgfI14BmGcCkypvEhYQGu-iPCPE2aMSKEiU8kWU76JSMxMS21ZG9BDdJ--GEBJRFid9UE3B607Y7SQKygSn0pbDrmMADiXqjD6sflUTadYQOZMKIOdqy3-OfY7-CD9rj77cAWOBmeZtczTdBCpfcc9GbEgYsBWBMPdWiMF3MBfoUqwd24ntxAJXMyc1SHZ7_5YQA4bv-PZqYY3bnuZPZQpg1lebS8DBuX7CJYrUqohny4fKdkb3o9DvW8ypmmFyrRX6CPA8Xjd_wtK3vq5xP1xla5YQNr0GK9mU7Cycklq2QgZl1XMZ4_It-0zw2wM7FwURejtG26ihiVstojDfFqLJ-QLUtlTt7w2m412eml-duIZLohYQCVJkpmeVm_fYXYCP_-clJ8yt-8m2QubiyLBQ7EHbmb4R-T-DUnoiSKdU5OZb1-wBkElL7S6fPjKUp7FoO8ZMjRYQAavj-gnbpumxnmJZp6dN6kVLXnkP3vFBeapM8OvFa2z60WN1DH2Lh0AIrAxwdNbANr4eByDkE-MyVr2tEB_uzZYQE8Bn1skkw9Ii75GHqM9FvHto-hIU7DYn28bn98GF_MXT3_uVSinSkQIvEg0ekCcsFCj-GaLKsXyfmzgokLnD1mCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};