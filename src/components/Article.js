import React from "react";
import ArticleLlist from "./ArticleList"

function Article({title, date="January 1, 1970", preview}) {
    //console.log(title)
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article

