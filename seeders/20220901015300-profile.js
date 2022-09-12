"use strict"
const falso = require("@ngneat/falso")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let profiles = [
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "marcokikochan",
        image: "https://i.ibb.co/D7m8pv1/IMG-9063.webp",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "robdosmil",
        image:
          "https://i.ibb.co/k0Zpx28/5-D40-DC1-F-6-F89-43-DF-85-BC-E212-CEE02-C92.webp",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "askateboarder",
        image:
          "https://i.ibb.co/0m2G28N/4-C60-E65-C-EA75-4-DB9-881-C-A6-AD1-EA0-E25-A.webp",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "larioli",
        image:
          "https://i.ibb.co/xhMjYvS/48594725-8754-48-A0-A0-E3-2-BF007-A8-FA67.webp",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "poppaj",
        image:
          "https://i.ibb.co/S3vzyjQ/13-BD56-A5-022-B-4-F2-E-85-A8-4-EF81-C534579.webp",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "hansolo",
        image:
          "https://i.ibb.co/ZmRbq2W/0329-CE14-4508-4527-A63-D-DABA6-CAAB82-A.webp",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "100myles",
        image: "https://i.ibb.co/M1MkLyH/DSC04934.webp",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "bingliu89",
        image:
          "https://i.ibb.co/tBgj5w0/915-C668-E-ED0-F-4078-9-A7-F-31-ED64-F232-E8.webp",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "renereyesss",
        image:
          "https://i.ibb.co/tpfvWcM/959-E77-DB-A83-B-4590-B708-014868967662.webp",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "kylepalermo",
        image:
          "https://i.ibb.co/3NG6Tnz/4525-D6-F9-386-C-4840-80-D5-D7-DEE07158-EF.webp",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "alexnamin",
        image:
          "https://i.ibb.co/0sdkt23/FF1-C0728-A0-A4-4677-8-A80-35-E1-AAAF2234.webp",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "slappyendings",
        image:
          "https://i.ibb.co/mDPD8mn/FE94-E84-B-6-FA6-49-B4-8065-C7-E207-CC78-DB.webp",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "la.crunchy619",
        image:
          "https://i.ibb.co/z7Y1xGb/DC11-D39-C-9-FD1-4-B03-81-F0-A24-A8-F9189-F7.webp",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "naomimarika",
        image:
          "https://i.ibb.co/wgMNSLt/649-D0-FDB-C080-40-F1-BCB8-7-C5-D23-ABE366.webp",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "dzl",
        image:
          "https://i.ibb.co/GVhhMJV/826-A62-F1-9288-484-A-BBFF-20-EF1-DF753-AF.webp",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "nekonique",
        image:
          "https://i.ibb.co/ZK2FwMk/A668-CFCC-FFBE-4-B36-BF94-058-FF9-B1870-F.webp",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "lawhf",
        image:
          "https://i.ibb.co/DRJvKcZ/BE208-FE0-D058-437-C-9-C0-D-027270-BC05-BD.webp",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "david.mp9",
        image:
          "https://i.ibb.co/WH9ZVv9/958-FDF71-FE9-A-434-F-97-A0-0-A136-CC3-D542.webp",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "clumsy_carpenter",
        image:
          "https://i.ibb.co/FDhpV3S/B05-A0-F33-29-D3-4015-8-CB0-50-D7-DD2624-CC.webp",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
    ]

    await queryInterface.bulkInsert("profiles", profiles)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("profiles")
  },
}
