import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <div className="Articles">
      <ul className="Articles-lists">
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
      <Outlet />
    </div>
  );
};

const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

export default Articles;
