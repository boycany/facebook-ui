const users = [
  {
    id: 1,
    name: "Brue Lee",
    stories: [
      {
        content: "Bruce's Smile",
      },
      {
        content: "Drink coffee",
      },
    ],
    posts: [],
  },
  {
    id: 2,
    name: "Michael Jackson",
    stories: [
      {
        content: "practice for the show",
      },
    ],
    posts: [
      {
        id: "MJ-01",
        time: "5小時",
        content: "My cake.",
        link: {
          imgLink: "https://bruce-fe-fb.web.app/image/item.png",
          url: "WWW.JORDANCAKE.COM",
          title: "喬丹的手作蛋糕？！究竟是什麼味道？",
        },
        reply: ["1st re:", "2nd re:", "3rd re:", "4rd re:"],
        share: ["1st share"],
        like: 990,
      },
      {
        id: "MJ-02",
        time: "10小時",
        content: "I am Legend.",
        link: {
          imgLink:
            "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/10/21/0/14373803.jpeg&x=0&y=0&sw=0&sh=0&sl=W&fw=1050&exp=3600",
          url: "NBA.UDN.COM",
          title: "喬丹的傳奇故事",
        },
        reply: ["1st re:", "2nd re:"],
        share: ["1st share", "2nd share", "3rd share"],
        like: 1999,
      },
    ],
  },
  {
    id: 3,
    name: "Steve Wonder",
    stories: [],
    posts: [],
  },
  {
    id: 4,
    name: "Obama",
    stories: [],
    posts: [],
  },
  {
    id: 5,
    name: "Scottie Pippen",
    stories: [
      {
        content: "practice for the final game.",
      },
    ],
    posts: [],
  },
  {
    id: 6,
    name: "Lebron James",
    stories: [
      {
        content: "eat hamburgers",
      },
    ],
    posts: [],
  },
  {
    id: 7,
    name: "Steven Curry",
    stories: [
      {
        content: "need something relax",
      },
    ],
    posts: [],
  },
  {
    id: 8,
    name: "James Cameron",
    stories: [],
    posts: [],
  },
  {
    id: 9,
    name: "Steve Jobs",
    stories: [
      {
        content: "create new iPod",
      },
    ],
    posts: [],
  },
  {
    id: 10,
    name: "David Fincher",
    stories: [],
    posts: [],
  },
  {
    id: 11,
    name: "Edward Yang",
    stories: [],
    posts: [],
  },
  {
    id: 12,
    name: "Morty",
    stories: [],
    posts: [],
  },
  {
    id: 13,
    name: "Rick",
    stories: [],
    posts: [],
  },
  {
    id: 14,
    name: "Simpson",
    stories: [],
    posts: [],
  },
];

export default users;
