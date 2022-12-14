"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "posts",
      [
        {
          name: "U.N. Hubba",
          image:
            "https://quartersnacks.com/wp-content/uploads/2022/07/IMG_7589.jpeg",
          description:
            "A low-ish, frontside-for-regular hubba down ten steps, that runs into another ledge. Narrow runway. Skateboarding is forbidden in the park. The Parks Department will tell you to leave if they see you.",
          bustLevel: "High",
          address:
            "Katharine Hepburn Garden, 315 E 47th St, New York, New York 10017",
          profileId: 1,
          boroughId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Jay Step",
          image:
            "https://quartersnacks.com/wp-content/uploads/2022/07/IMG_7452.jpeg",
          description:
            "A low backside-for-regular Philly step into a mellow hill. You are not allowed to skate on school property. Better on nights and weekends.",
          bustLevel: "Medium",
          address: "515 W 59th St, New York, NY 10019",
          profileId: 1,
          boroughId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Big Screen Ledges",
          image:
            "https://quartersnacks.com/wp-content/uploads/2020/10/IMG_1042.jpeg",
          description:
            "Skateboarding is forbidden in the plaza. Security will come out and tell you to leave as soon as they spot you on the cameras.",
          bustLevel: "High",
          address: "110 W 30th St, New York, NY 10001",
          profileId: 2,
          boroughId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "World Trade",
          image:
            "https://quartersnacks.com/wp-content/uploads/2020/10/IMG_0869.jpg",
          description:
            "Stairs and manual pads going down a mellow hill, with sets of twos, fours and fives on the other side + a high frontside for regular round rail down seven stairs.",
          bustLevel: "High",
          address: "35 Dey St, New York, NY 10007",
          profileId: 2,
          boroughId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Columbus Circle",
          image:
            "https://quartersnacks.com/wp-content/uploads/2010/05/P6210008.jpg",
          description:
            "Up-ledges that are hard to skate, some low ledges, and pillars to do tricks over. All the ground is good. Cops will sometimes come through and tell you to leave. You may get a ticket for skating ??? or if you???re lucky ??? put in a chokehold and pepper sprayed.",
          bustLevel: "High",
          address:
            "Columbus Circle, 4-6 Columbus Cir, New York, New York 10023",
          profileId: 3,
          boroughId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Monument",
          image:
            "https://quartersnacks.com/wp-content/uploads/2022/07/IMG_7598.jpeg",
          description:
            "Some curbs on good ground and some benches on bad ground. Popular local spot for people from the Upper West Side. Skateboarding is forbidden in the plaza, but the Parks Department doesn???t always hassle you. There???s an elderly crowd in this neighborhood, so be careful when skating here.",
          bustLevel: "Low",
          address: "168 Riverside Dr, New York, NY 10024",
          profileId: 3,
          boroughId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Riverbank State Park",
          image:
            "https://quartersnacks.com/wp-content/uploads/2010/05/riverbank5.jpg",
          description:
            "Sorta choppy, steep banks with some waxed edges. Skateboarding is forbidden by park rules. The Parks Department will tell you to leave if they see you. Sometimes, they won???t even let you into the park with a skateboard.",
          bustLevel: "Medium",
          address:
            "Riverbank State Park, 679 Riverside Dr, New York, New York 10031",
          profileId: 3,
          boroughId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zuccotti Park",
          image:
            "https://quartersnacks.com/wp-content/uploads/2010/05/PB020025.jpg",
          description:
            "Update ??? May 2022: They reknobbed the main out ledge here.  Marble ledges everywhere, some of which are knobbed. One goes off a six stair and is backside for regular / frontside for goofy. A low manual pad. Everything sits on a mellow hill. Their security window faces the spot, so they will tell you to leave as soon as they spot you. Better at night, but you???ll get kicked out regardless.",
          bustLevel: "High",
          address: "104 Trinity Pl, New York, NY 10006",
          profileId: 4,
          boroughId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Soho Curbs",
          image:
            "https://quartersnacks.com/wp-content/uploads/2022/07/IMG_7617.jpeg",
          description:
            "Marble curbs on a street often closed off for outdoor dining. Common meet-up or end of the day spot.",
          bustLevel: "Low",
          address: "222 Lafayette St, New York, NY 10012",
          profileId: 4,
          boroughId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Water Street Benches",
          image:
            "https://quartersnacks.com/wp-content/uploads/2010/05/waterstbenches-2.jpg",
          description:
            "Marble ledges on not-great ground. One runs backside for regular over a ~fifteen-foot dirt gap. Don???t skate it if it rained the night before unless you wanna get muddy.",
          bustLevel: "Medium",
          address: "58 South St, New York, NY 10043",
          profileId: 4,
          boroughId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fedex Stairs",
          image:
            "https://quartersnacks.com/wp-content/uploads/2020/09/IMG_7708.jpeg",
          description:
            "Sets of six, three, four and two in consecutive order + marble ledges. Manual pads off steps in front that are a two-second bust.",
          bustLevel: "High",
          address: "104 E 47th St, New York, NY 10017",
          profileId: 5,
          boroughId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Three Up Three Down",
          image:
            "https://quartersnacks.com/wp-content/uploads/2011/07/IMG_2737.jpg",
          description:
            "Park rules forbid skateboarding. The Parks Department cruises up and down the waterfront (on bike and car), and will usually tell you to leave as soon as they spot you. On occasion, they will ask for ID and issue you a summons.",
          bustLevel: "High",
          address: "544 Canal St , New York, NY 10013",
          profileId: 5,
          boroughId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Police Plaza",
          image:
            "https://quartersnacks.com/wp-content/uploads/2022/07/IMG_9215.jpeg",
          description:
            "A platform that has two stairs up one side, and quickly four down the other. There are also a bunch of square rails down varying sets of steps, one of which leads into a weird wallride + some ledges out over past three stairs.More often than not, a cop is going to tell you to leave in under a minute.",
          bustLevel: "High",
          address: "1 Police Plaza Path, New York, NY 10038",
          profileId: 5,
          boroughId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Broome & Allen Dirt Gap",
          image:
            "https://quartersnacks.com/wp-content/uploads/2020/10/IMG_1586.jpg",
          description:
            "It???s a ~six-foot dirt gap into the street, a weird wedge people use to wallie over the gap from the street, and a ride-on ledge.",
          bustLevel: "Low",
          address: "92 Allen St, New York, NY 10002",
          profileId: 6,
          boroughId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Seaport",
          image:
            "https://quartersnacks.com/wp-content/uploads/2020/04/seaport-1.jpg",
          description:
            "Former home to the best ledges to ever exist in New York until they knobbed the hell out of them. Portions of them will undergo temporary periods of liberation. There are ???No Skateboarding??? signs posted. Parks cruises around and will tell you to leave if they spot you. Better on weekends.",
          bustLevel: "Medium",
          address: "199 Maiden Ln, New York, NY 10038",
          profileId: 6,
          boroughId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ABC Ledges",
          image:
            "https://storage.googleapis.com/fsscs1/images/large/6yhqgtmlgcf1scpcaldq7oxxvf2yq2mp.jpg",
          description:
            "Page Avenue and Haywood Street in Staten Island. It???s only accessible by a car and very far from Manhattan.",
          bustLevel: "Low",
          address: "555 Page Ave, Staten Island, NY 10307",
          profileId: 6,
          boroughId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mosholu Playground Bank",
          image:
            "https://storage.googleapis.com/fsscs1/images/large/d89542cf348e2db62052ac12ff3402b9.jpg",
          description:
            "You???re not allowed to skate inside the playground, but typically, nobody says anything. Just be mindful if it is crowded with kids.",
          bustLevel: "Low",
          address: "3029 Bainbridge Ave, Bronx, NY 10458",
          profileId: 7,
          boroughId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ogden Bank To Ledge",
          image:
            "https://storage.googleapis.com/fsscs1/images/large/48ae73f8292e8e769346a40f680ed919.jpg",
          description:
            "Concreted-over cobblestone bank to crusty hubba-ish ledge against a fence, as seen in every skate video since the mid-2010s.",
          bustLevel: "Low",
          address: "1261 Merriam Ave, Bronx, NY 10452",
          profileId: 7,
          boroughId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hunts Point Station",
          image:
            "https://storage.googleapis.com/fsscs1/images/large/44bd77a3291c80d0a4d3f94670448216.jpg",
          description:
            "A foot high manual pad that you can gap out onto from a three-stair above, and a bad two-stair Philly step. Nine times out of ten, there is broken glass scattered about, so be careful.",
          bustLevel: "Low",
          address: "1049 E 163rd St, Bronx,NY 10459",
          profileId: 8,
          boroughId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tiffany Banks",
          image:
            "https://storage.googleapis.com/fsscs1/images/large/1aafb23f785489352d50d9541f804472.jpg",
          description:
            "Steep-ish bank with a rainbow curb and crusty ledge on it.",
          bustLevel: "Medium",
          address: "944 Tiffany St, Bronx, NY 10459",
          profileId: 8,
          boroughId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Twin Parks - Bank To Ledge",
          image:
            "https://storage.googleapis.com/fsscs1/images/large/msilwx6yfu6m0havpei69y5fyxgj71qj.jpg",
          description:
            "Nice bank/wallridespot, just dont piss off the residents in the complex",
          bustLevel: "Medium",
          address: "333 E 181st St, Bronx, NY 10457",
          profileId: 9,
          boroughId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Verizon Banks",
          image:
            "https://storage.googleapis.com/fsscs1/images/large/90f5b03ca7aadab0e471bbfa0fc8fa76.jpg",
          description:
            "Shin/knee high pop up to the bank.  Just make sure to pop out before you hit the rivets",
          bustLevel: "Medium",
          address: "55 Meserole St, Brooklyn, NY 11206",
          profileId: 9,
          boroughId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Washington Monument",
          image:
            "https://storage.googleapis.com/fsscs1/images/large/ab2ada4bec9aa4ee74ed360fc30fb5c5.jpg",
          description:
            "Curbs, a bunch of three sets (some with rails running off the sides of them), a few plastic benches, and chunky concrete ledges across the street.",
          bustLevel: "Low",
          address: "187 S 4th St, Brooklyn, NY 11211",
          profileId: 10,
          boroughId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mambo Bar",
          image:
            "https://storage.googleapis.com/fsscs1/images/large/827698ef4a23ac58e80499a49486c74e.jpg",
          description:
            "A classic piece of a Brooklyn crust. A chunky backside-for-regular cement ledge into a cellar door.",
          bustLevel: "Low",
          address: "100 Morgan Ave, Brooklyn, NY 11237",
          profileId: 10,
          boroughId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Metal Bank",
          image:
            "https://storage.googleapis.com/fsscs1/images/large/e548cef2f3e11cc7bf20633fa0f09a05.jpg",
          description: "Crusty run up, welded angles to grind on",
          bustLevel: "Low",
          address: "345 Park Ave, Brooklyn, NY 11205",
          profileId: 11,
          boroughId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Home Depot Banks",
          image:
            "https://storage.googleapis.com/fsscs1/images/large/cdfd783b2f855184b6318f1bb76b7a81.jpg",
          description:
            "Falling apart over the years luckily the spot is at a home depot",
          bustLevel: "Medium",
          address: "2 Pulaski St, Brooklyn, NY 11206, USA",
          profileId: 12,
          boroughId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Polish Park",
          image:
            "https://quartersnacks.com/wp-content/uploads/2010/05/polishpark5.jpg",
          description:
            "Low, chunky ledges, one of which you can gap to. A gap off a narrow ledge over a pillar.",
          bustLevel: "Low",
          address: "546 Humboldt St, Brooklyn, NY 11222",
          profileId: 12,
          boroughId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BAM",
          image:
            "https://quartersnacks.com/wp-content/uploads/2020/09/IMG_9685.jpg",
          description:
            "UPDATE ??? Spring 2022: Spot???s knobbed???again.  A long ledge on top of a platform of four stairs. Some of the bottom steps are waxed, and the flat is good.",
          bustLevel: "Medium",
          address: "4 Lafayette Ave, Brooklyn, NY 11217",
          profileId: 12,
          boroughId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BAM 2",
          image:
            "https://quartersnacks.com/wp-content/uploads/2016/03/bam2-3.jpg",
          description:
            "Curved marble ledges on a slight hill (you have to avoid the bench at the end) and a marble curb against a fence.",
          bustLevel: "Low",
          address: "133 Tillary St, Brooklyn, NY 11201",
          profileId: 13,
          boroughId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "McGolrick Park",
          image:
            "https://quartersnacks.com/wp-content/uploads/2022/07/IMG_8945.jpeg",
          description: "A narrow street gap and some curbs.",
          bustLevel: "Low",
          address: "207 Nassau Ave, Brooklyn, NY 11222",
          profileId: 13,
          boroughId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Carroll Manual Pad",
          image:
            "https://quartersnacks.com/wp-content/uploads/2010/05/P4150084.jpg",
          description: "Two-stair marble manual pad.",
          bustLevel: "Low",
          address: "415 Union St, Brooklyn, NY 11231",
          profileId: 14,
          boroughId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fish Gap",
          image:
            "https://quartersnacks.com/wp-content/uploads/2010/05/P5120005.jpg",
          description:
            "Truck-width gap off a loading dock, onto a concrete platform. Seen in tons of videos.",
          bustLevel: "Low",
          address: "50 Washington Ave, Brooklyn, NY 11205",
          profileId: 14,
          boroughId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pratt",
          image:
            "https://quartersnacks.com/wp-content/uploads/2010/05/P4150067.jpg",
          description:
            "A backside-for-regular wooden bench into a small brick bank. Skateboarding is forbidden on Pratt property, and you will usually be kicked out from here in 5 seconds.",
          bustLevel: "High",
          address: "59 St James Pl, Brooklyn, NY 11205",
          profileId: 15,
          boroughId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shell Ledge ",
          image:
            "https://quartersnacks.com/wp-content/uploads/2022/07/IMG_7122.jpeg",
          description:
            "A ride-on ledge against a fence off a bank-type thing. Backside for regular, and quite crusty. Bring wax.",
          bustLevel: "Low",
          address: "484 36th St, Brooklyn, NY 11232",
          profileId: 15,
          boroughId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Front Street Ledge",
          image:
            "https://quartersnacks.com/wp-content/uploads/2010/05/frontst4.jpg",
          description:
            "A banked ledge that runs alongside a ledge that slopes down. Seen in many skate videos. Backside for regular. Bring wax.",
          bustLevel: "Low",
          address: "29 Front St, Brooklyn, NY 11201",
          profileId: 16,
          boroughId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vernon-Jackson Ledge",
          image:
            "https://quartersnacks.com/wp-content/uploads/2020/09/IMG_9920.jpeg",
          description:
            "High frontside for regular out-ledge over a four, some metal benches, and a metal bench (frontside for regular also) over a ledge gap.",
          bustLevel: "Low",
          address: "5-98 48th Ave, Queens, NY 11101",
          profileId: 16,
          boroughId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Sombrero",
          image:
            "https://quartersnacks.com/wp-content/uploads/2019/01/IMG_8693.jpg",
          description:
            "Big sombrero-shaped piece of concrete that people wallie up to and do manuals / ledge tricks on + a couple chunky concrete ledges.",
          bustLevel: "Low",
          address: "55-56 61st St, Queens, NY 11378",
          profileId: 16,
          boroughId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Con-Edison Banks",
          image:
            "https://quartersnacks.com/wp-content/uploads/2010/05/P4150011.jpg",
          description:
            "Rough brick banks on even rougher ground, and broken glass everywhere. Also, a ledge between two of those banks. Having big wheels would definitely help your cause. Bring wax.",
          bustLevel: "Low",
          address: "29-98 20th Ave, Queens, NY 11105",
          profileId: 17,
          boroughId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "P.S. 239",
          image:
            "https://quartersnacks.com/wp-content/uploads/2022/07/IMG_9606.jpeg",
          description:
            "A three-stair Philly step and a curved ledge / platform on basketball court ground.You are technically not allowed to skate on school property, but as long as school is not in session, nobody really hassles you.",
          bustLevel: "Medium",
          address: "17-15 Weirfield St, Queens, NY 11385",
          profileId: 17,
          boroughId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "JFK Banks",
          image:
            "https://quartersnacks.com/wp-content/uploads/2011/07/IMG_2601.jpg",
          description:
            "Cement banks with a ledge on top and hips at the end. Seen in videos as far back as the 1980s.",
          bustLevel: "High",
          address: "JFK/Terminal 5-6, Queens, NY 11430",
          profileId: 17,
          boroughId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Citibank Pyramids",
          image:
            "https://storage.googleapis.com/fsscs1/images/large/0c571c9b268dd975483bf4b064294101.jpg",
          description: "Security kick you out real quick.",
          bustLevel: "High",
          address: "5 Ct Square W, Queens, NY 11101",
          profileId: 18,
          boroughId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Moore Homestead Playground 3 Flat 3",
          image:
            "https://storage.googleapis.com/fsscs1/images/large/scxiqvevrl2242mrls3fgf2rq3gxszys.jpg",
          description: "Gnarly 3 flat 3 set ",
          bustLevel: "Low",
          address: "82-2 Broadway, Queens, NY 11373",
          profileId: 18,
          boroughId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hillcrest High School",
          image:
            "https://quartersnacks.com/wp-content/uploads/2018/01/hillcrest1.jpg",
          description: "Lots of nice banks. Best to skate after school hours ",
          bustLevel: "Medium",
          address: "160-33 Highland Ave, Queens, NY 11432",
          profileId: 18,
          boroughId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Long Island City Waterfront",
          image:
            "https://quartersnacks.com/wp-content/uploads/2020/09/IMG_9930.jpeg",
          description:
            "Wooden benches that can be skated as banks you ollie up to, weird cement ledges, long triangular flat rails, big concrete wallrides on a wooden platform ",
          bustLevel: "High",
          address: "9 Center Blvd, Queens, NY 11109",
          profileId: 19,
          boroughId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cemetery Curbs",
          image:
            "https://quartersnacks.com/wp-content/uploads/2020/10/IMG_3140.jpg",
          description:
            "A bunch of curbs, a random asphalt hip, and a small bank-to-curb on a mellow hill.",
          bustLevel: "Low",
          address: "4715 Laurel Hill Blvd, Queens, NY 11378",
          profileId: 19,
          boroughId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("posts", null, {})
  },
}
