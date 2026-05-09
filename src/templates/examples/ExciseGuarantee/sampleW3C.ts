import { ExciseGuaranteeW3C } from "./types";

export const ExciseGuaranteeSampleW3C: ExciseGuaranteeW3C = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://chaindox.com/contexts/excise-guarantee.json",
    "https://trustvc.io/context/attachments-context.json",
    "https://trustvc.io/context/render-method-context-v2.json",
    "https://w3id.org/security/data-integrity/v2"
  ],
  type: [
    "VerifiableCredential"
  ],
  credentialSubject: {
    type: "ExciseGuarantee",
    documentId: "EXG-FR-2026-99001",
    shipmentId: "SHP-FR-DE-991122",
    issueDate: "2026-05-07",
    importer: {
      name: "Munich Fine Beverages GmbH",
      addressLine: "Weinplatz 10",
      city: "Munich",
      country: "Germany",
      email: "import@munichbeverages.de"
    },
    exporter: {
      name: "Chateau Bordeaux SARL",
      addressLine: "Route des Vins 1",
      city: "Bordeaux",
      country: "France",
      email: "export@chateaubordeaux.fr"
    },
    guarantor: {
      name: "Societe Generale Paris",
      addressLine: "Boulevard Haussmann 29",
      city: "Paris",
      country: "France",
      email: "guarantees.excise@socgen.fr"
    },
    exciseGuaranteeBeneficiary: {
      name: "Direction Générale des Douanes et Droits Indirects (French Customs)",
      addressLine: "11 Rue des Deux Communes",
      city: "Montreuil",
      country: "France",
      email: "contact@douane.finances.gouv.fr"
    },
    conditionsOfGuarantee: "Comprehensive guarantee covering the movement of excise goods under duty suspension arrangements within the EU.",
    taxOrFeeAssessmentBasisAmount: 45000,
    taxOrFeeAssessmentBasisAmountCurrency: "EUR",
    exciseDutyAmount: 12500,
    exciseDutyAmountCurrency: "EUR",
    typeOfExciseDuty: "Alcohol and Alcoholic Beverages",
    quantity: 3000,
    goods: [
      {
        description: "Bordeaux Red Wine (ABV 13.5%) - 750ml bottles",
        productIdentifier: "EAN-3112233445566",
        hsCode: "220421"
      }
    ]
  },
  validUntil: "2026-08-07T05:39:48.147Z",
  renderMethod: [
    {
      id: "https://decentralizedrenderer.netlify.app",
      type: "EMBEDDED_RENDERER",
      templateName: "EXCISE_GUARANTEE"
    }
  ],
  credentialStatus: {
    id: "https://chaindox.com/credentials/status/1.json#19",
    type: "BitstringStatusListEntry",
    statusPurpose: "revocation",
    statusListIndex: 19,
    statusListCredential: "https://chaindox.com/credentials/status/1.json"
  },
  issuer: "did:web:chaindox.com",
  validFrom: "2026-05-07T05:39:52.049Z",
  id: "urn:uuid:019e00f3-1875-7aa4-a1ea-73d39b99f96e",
  proof: {
    type: "DataIntegrityProof",
    created: "2026-05-07T05:39:52Z",
    verificationMethod: "did:web:chaindox.com#keys-1",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue: "u2V0AhVhAb1D8uoHKCcMQQTAhDaVlvQfU49VYKnnqJAqFkUQuXOzfXQ2EZfOnEKvApX_jjVFz7fo87ExXtIAGVeNIr4PH41gjgCQCj3mX8urV6WpZmm1gSC1Z7hBbQ87pznAJRm-0XR70zp9YIMIMwsueyeiPGiTIaVhCVlQ5p6D6AIL8X8Dd6KF2X23FmDFYQIKKDagwsRB0s-U6fdWl6qDFLtFDEMRtNspzAh3F-6Pgcl0G2JIz8sr1sw6zohuJ552EIz4CQsf2j2XBvqIsN-lYQAaCl_G-sPWN073Zf1fZW0lUWeISmstNwvoqdV-5_yCGFY5QzKrAPI9CeBbmZAg_FuS_DhzYbSercbn7b_1bY-dYQO4j-KbdPkS5lrkyxe-sOZ591nyeE5929IZF0Ik8a-HVBPwJPugVLdSiopwvaCQUylfl3USmFDBzdT9iv3xVM4BYQBj1wTIP34jruKnPGHmkd0jP69uIdePzmjCGauR3hIw8JEsAf3tvUbFjreQcg85VSfC9T6WMxN49Kil-33kBA6NYQNELXqw7jSlYtR9dpdXr9gRmGajMSs7US2fwrXI6KtVOq5J4hby49o48FHSHrOHjIr5brVK6EkJui6z-iqwG-FFYQEXNKCspPtsPh8eBEtFI5O7k_0VAIo4HmOQuD13cLqpfqWrBLHcwF0NHFf80ODjY4FjZKgBgAt7b4LZM7SS-cfJYQM6t60OySpg6NyPHCn-1de2gREickuVFuDtPbBvNyw2oV_e8wQ2vbK201t4pB-VCEpaC_X-vyW7r38tIOf0Q1AtYQDlsMxEaVog-kg66ivcGiE7Z09NMGYytFvOitG8rjIqsi9CKAyIHches-4FTXWqhsfOsgVNeYZlDWcOmHwTHvMhYQHTpTi042ElJaiQt3uUw9W59fPf9ybrAY8WF9kHU8egqgixrdPqZrOz3sbenppX51W2O_yNPM9Ayi9RbawiEGYxYQLDIi2nLcQCXBIeGrWpt7iRIlX0Jz--kZsI3_m4MIlQaouDC-lt1coqYnKrTl6T2rgpMdyOwpcbDWrMsYf4yMpxYQOMBlNay3JE5KM-eTxeOOTagav3AXswxTND5eeILAkpSg6Vr3S__qhu7BO0ufTkpKBQaVgDGfyofJ7BtliyKvIRYQEPEwb0EqdXaN2_GDx6cFvFC48d1Fk5b-eSW7bHzhKOjkFYTiKkoHQg7h42jL7gR2cwmNT9fAzuigaQlEB7wpBZYQLQZAD59cE_LGKUL6JwEBcrTX0hL4RNnD-QPVT5Hr2beOVrExL3otY59M5f5PgpQvaPYSryy-3akjqjQL86PRr1YQBssvsyxmujS6FUIdEcuVMILo1hq79G18dOHCQOSz7ZqU4xMV4nb7Dc9Eihtxi1oM5B3JXwJ_V9F-Ds8nWaNvNpYQEx2H_fqj4VT9s1lLerm5D3bxhxdjzHNnQ6k6I6l9sPaR7Rwx_Skr8b-dWpUNVbG2EHdM282lDBu-CtkHpJ1IGhYQPtbFvYKgXEoFTPDVFEhKRttENDP3NMR9v45R-AiYs60Vxw6WDWiIBKKhIWAYuoS8ttMU1JGvLJ0CdGMYS4eH_ZYQAzGVbsFosEs4wj69P9ADniQFtauJ3YMDylZSQ4tHRDgbdkKhXaAnSnHiznHIZEzKJ301Dnk0SPD1XZRd4NSvWdYQGIOesN3QevN97PMlXfkfBko9GALCzBUGgWWDoEBUTHogYPhqj9azE41-VRJ6yoLRAtTuGhrnnDw4innDIeFuOJYQAGgeORECHGLIZDN-IHrsm2fgkK1F47jJBXTRd_uIWBsPW0k-TgH7ACChfqucDp3Sy_lJ_CCpy5EO2tP8PX5LmhYQEThcdICF6NZM3QHIlWxDOd987qcEHTYMjNt0S58gtf_tpDbu0WobwHYD-PNDnljBW7Vlb2AK5HfxsffSPQNJtxYQAZNRVZQ9aQibbGjSIo9xjxGPNkM2YUS6FwHJQ765A-aVZVIbBEPwakztXPmtaTYRH-goLCeZUafZtL3dw4vuxZYQK-KKSJdkINDHoE29y6HVRXqfDvfa8JrKue2ilFoJ9e9HZdGqAOrmlIFsXTWK1mcy9fymuNbr11mS_AKzaGeCIVYQNIcTmYAjMoEcg9XxPFkdk7TXH47oic6qaU1mnSC5vuWvuQyGZe4txE4CDjTqEcPoRrDFRw4wRSjda0hE8qXvARYQCMih2ZIuXqZgs5DfB4Qq9xOEWix0yBWvH3FNSx8qTIS88XUoAeG-HfKX0ccTAAUCslKuGjsMqNz-s5wRvRRAoBYQND4eJIiHHnjCGR6HKKIhGCMR0EfiFsfI_k97830pWEU5GvAhLwId3zvTBz2nu8DdqNMY1UFhJpccLeDdU9NnjpYQMPR0u_JZWDN5xNEiLWcXqZqmJoN5sR3qHZg52efDH6JJ8StX_JYWYe5sfvmwRSWhITt-yrT3KZ9gNcoDYSwr_NYQAMkKlG7WU_xKvQAKUe2mWPbnpqRu53yfC66-VfjST2Y7I6SusckTouEr8oL4ayj2G8RQdvHGxl5xOMh2Yw7mlxYQHNGm_ys-OSPwsBK81mfcfNdlva-g2KGjkL1bM-2rQBSjW35Gqwa5OOqRkGcNconKBjwDtNLHLgu41zAV4EZ3Q5YQEBBIUn_poMEGzN_fBjfbMg25Rig_IDgv5OvYp3cjiqrF7Y12PgK_rJVMZ6rj0UPMCavpwQTiCeZZGjkNmezUGJYQMl5NyPMN6dK6sCZ7v6ln5A3A2VIhg9ZvbwO0EhewodlOeu5CL_UW_cmCFHEjcnf4zJq1vWFT9h53QCA8ORSNnlYQHHpuMd-_ZKZFICHsEwdv7aHBtwFXavJd5FKLDpT-zJgFeztuB7mfRv2q12c7WL8Ha3t1w0icg5QYZnoVkMjUthYQMTUwZbkhSzBzOaCf7qQHQ11H_dsmr1bfVkIZeBNTxJwRd0PqWwWRNdiv_h6-_KRFta4NezR0e5LNIilVryIZjVYQI5znf8DcOrZDd04K77xjNyYcwB4hnFCd1wvdtepPbsIiDO1BZXBFjxoWrO2Uo9bF0Hw4V-AZL3050PM4HqW31hYQNv1MTTjpC4dr4mi0e8ZRw04z77aHX63536MAgEs35Hd-Ydgtc1qvF5zCf0emcr3EDl-cr0yr7l0spm8X7hOHFZYQMkDAK0wgOmi9M3LDpHnN29-oEsPKX9mShrg8YRTeai6ctNvhHRFIkR5I2_niZ_sx79InzEm86apRB2YO2ZnExJYQAJX1OSzVw0Qz4kIEOZmGQ6C-JIInmHGpn1AGA-Fivhlof2YWXTfhXFS_rt8TL9icrnL4XAVXjWSA6iCeP3EtPVYQG-Cq9hUo3FCUgRdGAN08rsM9mWl7cQB8AeHAXG4A_8dQscwuyElUktNWCc5r2uJ2Vw-tmct5rzfC3bBxC4lJzFYQK2dIbDQsoEcDNKcNczruHUTOkhXO3mjXpdmgZDeAt-QFO-lzOAV7sHu-FXNfYvo3Qzu1RzTNqnSMyCAiEEOztFYQMqfOME4qU1LWsqMOs38YCQ-OlCgb-dLqxAoqJjwLC6D0wn_Ob84L1NF7e1dShhDBfUNlI4h1PpYvVzelHzpjsJYQMOg9KuUTy5zRjU9k00lsziqznrJXeHb_A23yCuWAWIrJZdV6C1uqHUzrpqOuf6q_T-appzHqYFQqI7hzJw5VilYQH-agL07BAJM5GWTAnI6MPig1F0zBHysxj__iYIJIgJGXwyhujql1lAuVw0djiiOfbXrkMW6bILc0ZMKl8usuqtYQLvidc6dazY480NILsJ-2xGCc_AxB4NgQtDhDF6e0y7-0_7g-8K4M_6NGyo4pvhnBSVcqGwNMZBbRAzxcb07WqxYQOWkFhA7uNwDEnPCbHNsfF6f1rowp86LRpVomK_zRap0xzv0CxdnY6dE6pBrt7i6RtXykudbwzTLapUZ2wux0cBYQD34gwqXy6FQUMq0RO4nyzVm4mXIY0f2hF5Emgy0BZgNPbpU9fRkAjQOX3G0sPIJbSXYQ9HTu7s8qizfBWvCBohYQLfujQTJe9qf3-TxTH0vpgw1vqsdb2osMhvwUhAxmdZ2bsIzpcK-OZNoEvEjD9l1oQ2q7EHQWyiEz94ov5PvH6VYQF9RGZkRkpKLYwA7JbH1YGzEHsOAQvBHwhM6296gIMzd1ao-tfI1Q3-3YGsKB-BFl8yHkOHTfp75IOM0GKbxFzlYQGrN5ctET36RvAmMW1fFUnO5jDdw-N_8Fv_73y97T52Zm7q_MfzX4fhXnbhZIdd4NXkVqMEExK8d0EZPfTCIXj1YQEkCt98sQD4mcl4ldhDDHD0V50lVsdgm3oVZBi3p4GSxuuNYEvv78b_dhcmnilBAWy2VY19X9S325_Bh-aLpOltYQKpVcmj46VyuquP6GlSFNg5_1sB_noLHNZnJ0OEwR7ff2Sn4oohpw74c-6jl_Af4GgqdMTTL7VlEXnh_MTwk_aSCZy9pc3N1ZXJqL3ZhbGlkRnJvbQ"
  }
};