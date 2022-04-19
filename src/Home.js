import React, { useState } from "react";
import data from "./data";

const Home = () => {
  const [noOfElement, setnoOfElement] = useState(4);

  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };

  const slice = data.cardData.slice(0, noOfElement);

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        {slice.map((item, index) => {
          return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
              <div class="card p-0 overflow-hidden h-100 shadow">
                <img src={item.img} class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button class="btn btn-dark d-block w-100 " onClick={() => loadMore()}>
        {" "}
        Saiba Mais
      </button>
    </section>
  );
};

export default Home;
