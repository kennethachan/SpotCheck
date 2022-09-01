"use strict"
const falso = require("@ngneat/falso")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let profiles = [
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: falso.randUserName(),
        image:
          "https://classroomclipart.com/images/gallery/Clipart/Sports/Skateboarding_Clipart/TN_girl-at-skateboard-park-performing-tricks-clipart.jpg",
        postId: [1, 2, 3],
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: falso.randUserName(),
        image:
          "https://classroomclipart.com/images/gallery/Clipart/Sports/Skateboarding_Clipart/TN_boy-performing-skateboarding-tricks-in-outdoor-park-clipart.jpg",
        postId: [4, 5, 6],
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: falso.randUserName(),
        image:
          "https://media.istockphoto.com/vectors/active-teenage-male-skateboarder-riding-on-skateboard-at-skatepark-vector-id1211311041?k=20&m=1211311041&s=612x612&w=0&h=8ivmS6_Q50G6DWx3auFCP6DlJhoWfaPm5PXkQCVhsFY=",
        postId: [7, 8, 9],
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: falso.randUserName(),
        image:
          "https://flyclipart.com/thumb2/computer-icons-skateboarding-child-woman-310605.png",
        postId: [10, 11, 12],
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: falso.randUserName(),
        image:
          "https://static.vecteezy.com/system/resources/previews/007/885/087/non_2x/illustration-a-young-man-on-a-skateboard-in-headphones-and-music-notes-modern-concept-clip-art-vector.jpg",
        postId: [13, 14, 15, 16],
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: falso.randUserName(),
        image:
          "https://png.pngtree.com/png-clipart/20190115/ourmid/pngtree-skateboarding-cool-play-skateboarding-teenager-skateboard-girl-png-image_350729.jpg",
        postId: [17, 18, 19, 20],
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: falso.randUserName(),
        image:
          "https://png.pngtree.com/png-vector/20190119/ourmid/pngtree-skateboard-skateboarding-woman-woman-cartoon-png-image_474898.jpg",
        postId: [21, 22, 23, 24, 25],
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: falso.randUserName(),
        image:
          "https://png.pngtree.com/png-clipart/20190520/original/pngtree-skateboarding-cool-play-skateboarding-teenager-skateboard-girl-png-image_3807359.jpg",
        postId: [26, 27, 28, 29],
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: falso.randUserName(),
        image:
          "https://media.istockphoto.com/vectors/skateboard-athlete-man-on-summer-olympic-games-vector-id1405017895?b=1&k=20&m=1405017895&s=170667a&w=0&h=nDENUhlhPPeNnbXINYotuoGadOIV0cvopbOW_aBDa4g=",
        postId: [30, 31, 32],
      },
      {
        email: falso.randEmail(),
        passwordDigest: falso.randPassword(),
        userName: falso.randUserName(),
        image:
          "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/6392/bulldog-skateboarding-clipart-xl.png",
        postId: [33, 34],
      },
    ]

    await queryInterface.bulkInsert("profiles", profiles)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("profiles")
  },
}
