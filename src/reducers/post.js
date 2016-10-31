const INITIAL_STATE = {
  posts: [
    {
      title: "Breaking news! New news-app in Gurula announced.:!",
      reputation: 666,
      comments: [
        {
          id: 1,
          user: {
            id: 1,
            name: "asdf",
          },
          reputation: 10,
          created: new Date("10/31/2016"),
          content: "Best thing ever",
          comments: [
            {
              id: 3,
              user: {
                id: 2,
                name: "pena",
              },
              reputation: 1,
              created: new Date("10/31/2016"),
              content: "You suck",
              comments: [
                {
                  id: 5,
                  user: {
                    id: 1,
                    name: "asdf",
                  },
                  reputation: 1,
                  created: new Date("10/31/2016"),
                  content: "NO U",
                  comments: []
                }
              ]
            }
          ]
        },
        {
          id: 2,
          user: {
            id: 3,
            name: "maza",
          },
          reputation: 2,
          created: new Date("10/31/2016"),
          content: "Shit dawg",
          comments: []
        },
        {
          id: 5,
          user: {
            id: 3,
            name: "maza",
          },
          reputation: -1,
          created: new Date("10/31/2016"),
          content: "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf",
          comments: []
        }
      ]
    }
  ],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
