import React from "react";
import Card from "../Card";
import Details from "../Details.json";

export default function Section() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {Details.map((value, index) => {
            return (
              <Card
                key={index}
                name={value.planname}
                plancost={value.Plancost}
                Plandetails={value.Plandetails}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}