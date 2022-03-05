import React from "react";
import "./Recipe.css";

export const Recipe = () => {
  return (
    <div className={"recipe-container"}>
      <img className={"ingredients"} src="/recipe.png" alt="" />
      <div className={"action"}>
        <a className={"download"} href="/recipe.png" download>
          Download Recipe
        </a>
      </div>
    </div>
  );
};
