import React from 'react';

const Interest = ({title, content, toggle, status, id}) => (
  <section>
    <div id={id} className={status ? "title active":"title"} onClick={toggle}>
    <i className="dropdown icon"></i>
      {title}
    </div>
    <div className={status ? "content active":"content"}>
      <p className={status ? "transition visible white":"transition hidden"}>{content}</p>
    </div>
  </section>
);

export default Interest;