import React from "react"

function WishlistProduct(props) {

  return (
    <li>
      <a href={props.link}>
        <div>
          <img src={props.image} alt="" />
        </div>
        <h4>{props.name}{props.footnote ? <sup>{props.footnote}</sup> : null}</h4>
      </a>
    </li>
  )

}

export default WishlistProduct
