import React from "react";
import { Link } from "react-router";

export default class FrontPage extends React.Component {

  constructor() {
    super();
    this.state = {
      post: {
        title: "Breaking news! New news-app in Gurula announced.:!",
        reputation: 666,
        comments: [
          {
            id: 1,
            user: {
              name: "asdf",
            },
            reputation: 10,
            created: new Date("10/31/2016"),
            content: "Best thing ever",
            comments: [
              {
                id: 3,
                user: {
                  name: "pena",
                },
                reputation: 1,
                created: new Date("10/31/2016"),
                content: "You suck",
                comments: [
                  {
                    id: 5,
                    user: {
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
              name: "maza",
            },
            reputation: 2,
            created: new Date("10/31/2016"),
            content: "Shit dawg",
            comments: []
          }
        ]
      }
    }
    // this.renderComment = this.renderComment.bind(this);
  }

  renderComment(comment) {
    return(
      <div className="gurula-comment" key={comment.id}>
        <div className="gurula-comment-reputation">
          <i className="ion-arrow-up-a"></i>
          <span>{ comment.reputation }</span>
          <i className="ion-arrow-down-a"></i>
        </div>
        <div className="gurula-comment-topbar">
          <span>{ comment.user.name }</span>
        </div>
        <div className="gurula-comment-content">
          <span>{ comment.content }</span>
        </div>
        <div className="gurula-comment-comments">
          { comment.comments.length > 0 ?
            comment.comments.map(childComment => this.renderComment(childComment))
              :
            <div></div>
          }
        </div>
      </div>
    );
  }

  render() {
    const post = this.state.post;
    return (
      <div>
        <div className="gurula-post-title">
          <div className="gurula-post-reputation">
            <i className="ion-arrow-up-a"></i>
            <span>{ post.reputation }</span>
            <i className="ion-arrow-down-a"></i>
          </div>
          <h1>{post.title}</h1>
        </div>
        <div className="gurula-commentarea">
          { post.comments.map(comment =>
            this.renderComment(comment)
          )}
        </div>
      </div>
    );
  }
}
