"use strict"
const falso = require("@ngneat/falso")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let profiles = [
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "marcokikochan",
        image:
          "https://live.staticflickr.com/65535/52331738873_f5cd977dd1_k.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "robdosmil",
        image:
          "https://live.staticflickr.com/65535/52331913064_265bf4305d_k.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "askateboarder",
        image:
          "https://live.staticflickr.com/65535/52332043275_7cd8bee36b_h.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "larioli",
        image:
          "https://live.staticflickr.com/65535/52330655647_3a09e99c1e_h.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "poppaj",
        image:
          "https://live.staticflickr.com/65535/52331913059_0c4937e7a0_b.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "hansolo",
        image:
          "https://live.staticflickr.com/65535/52332043240_0242573bf4_h.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "100myles",
        image:
          "https://live.staticflickr.com/65535/52331863838_f9da4590bd_k.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "bingliu89",
        image:
          "https://live.staticflickr.com/65535/52330655667_e2ea49f77b_h.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "renereyesss",
        image:
          "https://live.staticflickr.com/65535/52330725462_72db7c9e08_h.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "kylepalermo",
        image:
          "https://live.staticflickr.com/65535/52332113540_6ee20342a6_b.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "alexnamin",
        image:
          "https://live.staticflickr.com/65535/52332113535_74ae4d856a_b.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "slappyendings",
        image:
          "https://live.staticflickr.com/65535/52331926753_a0d3a5194f_k.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "la.crunchy619",
        image:
          "https://live.staticflickr.com/65535/52331852911_725a8fc847_h.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "naomimarika",
        image:
          "https://live.staticflickr.com/65535/52332325519_7f0a479ebc_b.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "dzl",
        image:
          "https://live.staticflickr.com/65535/52332456130_ebfd74a092_b.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "nekonique",
        image:
          "https://live.staticflickr.com/65535/52331068057_8de1e695d1_h.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "lawhf",
        image:
          "https://live.staticflickr.com/65535/52332325499_6342e7ecd8_b.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "david.mp9",
        image:
          "https://live.staticflickr.com/65535/52331391057_e6d05bf419_h.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet porttitor quam, ut facilisis lorem feugiat et. Aenean bibendum nulla in lacus scelerisque, a aliquam.",
        createdAt: falso.randPastDate(),
        updatedAt: falso.randRecentDate(),
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: "clumsy_carpenter",
        image:
          "https://live.staticflickr.com/65535/52334024496_395c4caf13_z.jpg",
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
