import React from 'react';

function BlogCard(props) {
  return (
    <div>
      <h4>
        {props.blog.title}
      </h4>
    </div>
  )
}

export default BlogCard;
