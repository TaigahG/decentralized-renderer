import { PackingListW3C } from "./types";

export const PackingListSampleW3C: PackingListW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/packing-list.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "PackingList",
    documentId: "PL-STONE-2026-001",
    shipmentId: "SHP-IT-US-MARBLE-99",
    issueDate: "2026-03-21",
    buyer: {
      name: "Empire State Stoneworks LLC",
      addressLine: "100 5th Avenue, Suite 450",
      city: "New York",
      country: "USA",
      email: "procurement@empirestoneworks.com"
    },
    consignee: {
      name: "Empire State Stoneworks Warehouse",
      addressLine: "250 Brooklyn Navy Yard, Building 77",
      city: "Brooklyn",
      country: "USA",
      email: "receiving@empirestoneworks.com"
    },
    seller: {
      name: "Marmi Italiani S.p.A.",
      addressLine: "Via delle Cave 15",
      city: "Carrara",
      country: "Italy",
      email: "export@marmiitaliani.it"
    },
    placeOfTheDeliveryByCarrier: {
      name: "Brooklyn Navy Yard Unloading Zone",
      address: "250 Brooklyn Navy Yard, NY 11205"
    },
    netWeight: 24500.5,
    volume: 12.75,
    goods: [
      {
        description: "White Carrara Marble Slabs (Polished, 2cm thick)",
        numberOfPackages: 5,
        typeOfPackaging: "Wooden A-Frames"
      },
      {
        description: "Nero Assoluto Granite Tiles (60x60cm, Flamed finish)",
        numberOfPackages: 12,
        typeOfPackaging: "Heavy-Duty Wooden Crates"
      }
    ],
    conveyanceReferenceNumber: "BKG-MSC-998877",
    transportMeansIdentifier: "IMO 9485763 (MSC GENOA V.22W)",
    vehicleRegistrationNumber: "NY-TRK-7788"
  },
  validUntil: "2026-06-21T09:50:56.870Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "PACKING_LIST"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#8",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 8,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-03-21T09:50:57.693Z",
  id: "urn:uuid:019d0fce-169f-788f-9a86-b1ba9f984cfe",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-03-21T09:50:57Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhA9HgoGbvSaAGI4ER-KF6HmbHnGb0qaCHukpXgQP9PTGgc-DgUkNtgKLktnlqNWm3aRa-faQRRs3YD9V1xBQRNklgjgCQD_vpyEucO27n2LQ8HOOb_-MPehfRfcWeyi-stsm5RuipYILuB34o0EXw8F70_KQxGQcV9PzuUBRhj2pBz3IBgNHUZmDBYQOCpraTjFtFfMioQCEs5KVx7lHAgoqTmZUeqYZjCUrp_lFWSEyqtLQJyEVUAvx0KaRcc7F6IbYEbEcwlXuc9xMxYQOtXvSlbZF_NcoOR4H85HESXMgma1oL3oaTYjYQBsvTUJSSUO_n_NetH6s8b6tedDOeHrZJNKlOEKcMJjJgQYmJYQGK0lNuEIwmQ2BALwVnZI85CHWm4m7WteOtY6kmP01TlhCpY8qNWDIFAlTimodKxuLoklr-4G64C10POltNCIwpYQFYyeQbIk4lSvDsNxehWJeHBZ2oTIic33QckZ0MKe94XEXuh5l9VVbyB-7yqbzcHSTHUL6y99ratUrgjsuzwBmRYQK6cr4gcz-W9eut4WxsZ9Gp7wvrshXf_SHyKIHE5xjehSNT5qiEj-q0t47IkvmlnaVl-sfSRE9c8zROdpR8lgXdYQA1SLrjhst7Z7-nuY_ji2AVFaqosJ773X3aczgbQAP9C6RWy-tbvx7wy-Kel0vVrx_pm7NvkqURAb5OLNF0IIehYQHyWPJG8n5Qy-gyFr55Kf9sgXSdO2c-cpWuS2VgAjB8z3VgvkI6woCegpn_SWFi1dfraXuHp-zW1eErlCeICJi5YQAKiYEDJX--AD-5UVXHWDFk01vuarEahIyiyyFQrqyxs_DKNU4tXAG0QhQhwnK8MSBasSOc2PlRDJxgs_MbgcFNYQEXMY69rdOvoSPNPvcY6yc5md26akMobbNwnTPxO1vzcHV2PYUNeGdBQ5G96ll8dUakMeSSPBnL3EufUjOUElnVYQN-8zr6BRgFRp1zN8I15qOYHLyU3Ox9-znG0t7v8ijoBhxcAKR92jdEwMLE7OBU2gICtA1-RZv1wMTbUeYT4AKZYQC5h6kRMMNnpU2xFlCtj1wb776fAbOAk_uUDThNpl1DQjU7_Ks3OED-ZRRNEn3UkCCI4ORoEyXlY7-_7WMzH8SxYQOVzkomG1DGxrTD0861lKPAPoutHgqk9Y7J9-Gz1lNuPozaxzifSdiOPShWisGNL-BXWVQ-2Q3Rb7Ifo4ZVb8XhYQJFxOQrBPQQLYWWLs_LaULoMEYCiGCBv_W6l3eX8C1ADLfZRBBZU2cQg2sdWLwnQQuh3QLkcfHn1IV9ocu2cdYpYQHY7oKlq5XPldSISC3ac8VNbaTYUuO18wHnd4kSn12HRTO2zhRN8TULnT4kMvWeuSHhiESX7svycL0RwxIX-vftYQBTz2yipDMlAGJU9jFLeoQyasdu1pA6g2NgURLPlrNzwGz70kFvG-apYqHbRM11TXqW__b8e9CPOoJd7_zBx6W1YQCmLKRbBMmxg7Mazogap8rCnGD_uKn4x-ZqWklxDJ8XAfaW-OOYHZzVSQSTVrMueRFkWhMGcVxxApwS0cKD3BCRYQIyKXWBIZEp5OqyA14opDSCSLv2PbAZE15qC30s-Tv3DYiKgrF7UwIq6aN0lNis5IWidYp2QOXuy1xFOZ8MTIllYQBVr3Y3xEkihd52pmqoZ0KbJ0VTcuGiZN9Lhu-nfWScSEBv86wdM5UEKumpGRvmxYqGkvkwIM-RqM7OlwObM5WFYQK42V5Pnqoc_LDHhg3nJai2gAmI9e9gpB4uQVOyP_7hhkwaXtvP3RzhRXVy3yuYM4qqLcC92vSB2olAKuPhZ4JlYQCtzWvGR3zWLuOObQNcDc_Ymkq6WxZ4-pCMn5ZRQMuTGfIx7McOBosx5oO2NPeJjmT-gFHoJe4AppySgykzwxGlYQCAXU5iHT3Q35MO1aC0Fd0NvdTFhAoEFnQXwYOfMeXpxPNXkQDtq8VPtub-3WV4MEXuhazmDEWVXIqjgEto2LOVYQDdeDqVJCyoUpJKIHUQxwFTThj2VNCwc7VTLDgNV7P81oSA38XcfP3KBmrZCtmDbKK92jjV9J2qIWC7Di8utJpdYQBmZVh4EmbCVvGjPD2lrGxaM1f8yU6rjvjv74KvIoml6PTBZusFm7KmyDWky7_Xp7R6isepx621SFkCGeN9KfB1YQAeX_1l0598mEvLpU0tF8-v7A3SJFuxnSfXkwNNYmZJvqlCb7RfUeEbRiZQAFc4DFWtTXYWmVh-ogT1NPWUg3n5YQGAEta1Uuyinor0tH-f0IhKz_pCX7VzzhWPQ61jxMJbIrdbqp_XA0q359ItymI6MXRVoTgMQ8vKBVktltM36z0tYQE3VtrJSxLgtB4kpFjIw7pI-E2wFF78HrtoECLqIYheathU7fx-znM0ZHtt0ttJJ5S--XomdUgUDPm6GRSw6oEFYQKqnfNxiFpgz62CNzd-xDJr3yznncT5JcdfBnG2WLOCCjsbGcwuiEEFVG-ZmsoY7p066a8FQNfUyJC4bH7W21h9YQBvLGGNg-ZgwRrCT4l0gokP9JcMa9jgpymzQamA108FkAILMcRPFlwfRb1KmB0EVKApjX2DlKGA3zykvrRC9gzhYQED6PJvBVwIrMHqyXhFsYBD-rzLhN-H9q1md8MENxJ7P9gVh3qJlMp4mKdWR8r2aaZdQjGnx1UwwqP8t_S-4OlJYQAgFK0QTI3aG-gXA8zTbS1PtgOJW2a6VdihFfM65AK91z82jVtdNhWQowZmrpZO6p6HR2zmSpKU9irOFmj6OGWRYQOdz-UyXQ92r3M6c3Q61_OwefvkOz1D3-s5TiDCc0CDrwc9UltOrDqXDbljv0xa1zU2LLlZwhSLS80d42fwKqn1YQJ1YARXTYdSNfS36XBFEscQihybQBAccTV7u3K_cEICQju6R5KFjjBLPVf547hyLS0RNahl39XbTEydozqBxucZYQCi0KtFSXC-ZvZNgRVXaEbFTKMz0g_Bh4UfYaYA-pXsPwGc82SgqBcRSDaGKIAA0UGWOPrcR_FK3m-hMaG7TUgJYQD9zd7MIg1Lvf-6sdlZO_FdseU8sLw1iBL7-5ociEgRtRHGoE7Hvf_IfjxJeeZUETF3zpg1tb2KT4H8GVBGHLFBYQJ6WmX1ryo0QvbmCHYGh87ljYhEFacSVdUOzrHdZSnHJz2poSpYA6zB0YZpFbn3pSk4Tuko-NkrZhy3cDB0HiMhYQHoc5Ge128J81G8ossRaWYA-4OkwKfWpyFAxSEXUXyxcjpeNfieQNjO5SsoFeGdsNbzs-cUTOYrW55KDO4gDP7pYQHOIQ_sCmwFRvKaf2pUKb_kiRYKVAlyvHiF8axkQ_4tVLe8WPx3r3eVz6ic-Yosh-prrzmPYTWIHggbauTUmu2dYQBLmSR9MpF-4bdWNSKFA6i2F-sblAvc3RrhytCaRBKkoaeV9zN2QLClbTSiYvjYZdPfvhgMZQJ8ZPqXN9DsSLaNYQG4ZruwLp7whgys9rjifIc0g9xfLieYTqA9uHBR5SVs5FiB_qZuQiSp1MeuLSTcsEJ4eqbmB9GxsxzlhWT4aHRtYQKNYtN3Y59Q9AuY5QTNxJ8PS12SxMWuTmYk9OmaTvi_lwWqPVVRcX4YOzg7JLqgM6PpqVL1RU9RTQmNmvsdaJ1pYQBYvIWWJb_-mnxIRxXpOew7AxxUNv1FJ3-UhIiGiFWFlQ3BWsazAPEMxAB90WQKzA3-Ok_4le7b4oqUb9fHgaGtYQMWcGlMEY0XNzcCdoNlXNfRYLgOS4S07RNTKNxdJU2l9Wdy8fkYVkhokOm9tx2YjN73MMvd3XlvT4IKxW9czxlVYQPlbb36HzDwSG94ddPXFp9nWvuX8zHWdP4a6bqqiWn785vuVYiqor9JooSZf-2JZipIGDKO0jh1jDVU9--k0EPpYQMgdXEP-LGse5N0G6J5uwiAN_hrXXTKUD4Om1oamd1VrlUNT-tzIR1vVME-9_0KofEzS5wNtXhf8rNh5jCtbWM9YQGZlbRgQwnTJqJYB0LQbXdSLDdTMr9lHDZPCfG0Nxq642goFCmCiIKoqxjP8jv1NmWUqzUzYioi6op2ZJHB4dVFYQHJGrEMX2Yx2OKPC0ope-ZIjVmQe4yrWXKdPHDEY46AXkW2VpacxH7Q-wodpB-KPvBskdl82Dzas0NHscn_-1XtYQI8ma9WuxrBol5cFkYRNbP3VsOeI4xn3pTdSLljnLxW-o2-ZXPKL70faLmr-elTpcfYo91VDHJF5njcHiePm7TNYQGR93IiOJ-VMTv7CjcFyh4ArLNR79Odd9OgIFU5s6eYJNc1tqZ0xK3wGCNQhtJQQAZQJkCGBSUybOw4yMRNuym6CZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};