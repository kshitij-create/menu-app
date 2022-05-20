import React from "react";

function MenuCard({ menuData }) {
  return (
    <>
      <section className="main-card--container">
        {menuData.map((curElem) => {
          const { id, name, image, description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{name}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card_description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="image" className="card-media" />
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}
export default MenuCard;
