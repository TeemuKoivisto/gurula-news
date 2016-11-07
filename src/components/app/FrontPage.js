import React from "react";
import { Link } from "react-router";

export class FrontPage extends React.Component {

  handleClick(type, value, event) {
    if (type === "upvote") {
      console.log("upvoting " + value)
    } else if (type === "downvote") {
      console.log("downvoting " + value)
    }
  }

  renderComment(comment) {
    return(
      <div className="gurula-comment-container" key={comment.id}>
        <div className="gurula-comment-reputation">
          <i className="gurula-comment-reputation-icon ion-arrow-up-a"
            onClick={this.handleClick.bind(this, "upvote", comment.id)}
          ></i>
          <span>{ comment.reputation }</span>
          <i className="gurula-comment-reputation-icon ion-arrow-down-a"
            onClick={this.handleClick.bind(this, "downvote", comment.id)}
          ></i>
        </div>
        <div className="gurula-comment-topbar">
          <Link to={`user/${comment.user.id}`}>{ comment.user.name }</Link>
        </div>
        <div className="gurula-comment-content">
          <p>{ comment.content }</p>
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
    const post = this.props.posts[0];
    return (
      <div className="gurula-post-container">
        <div className="gurula-post-title">
          <div className="gurula-post-reputation">
            <i className="gurula-post-reputation-icon ion-arrow-up-a"></i>
            <span>{ post.reputation }</span>
            <i className="gurula-post-reputation-icon ion-arrow-down-a"></i>
          </div>
          <h1>{post.title}</h1>
        </div>
        <div className="gurula-post-content">
          <p>{ post.content }</p>
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

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts,
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   loginUser(email, password) {
//     dispatch(loginUser(email, password));
//   },
// });

export default connect(mapStateToProps, null)(FrontPage);
