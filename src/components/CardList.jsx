import React from "react";
import { useRobot } from "./useFetchRobots";
import { CardRobot } from "./cardRobot";

export const Layout = (props) => {
  const [robots] = useRobot("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      <section className="container-fluid ">
        <div className="row">
          <div className="col-12 mt-5">
            <div className="row justify-content-center">
              {robots.map(({ id, name, email, index }) => (
                <CardRobot
                  key={id}
                  image={`https://robohash.org/${id}`}
                  cardClass="img-fluid"
                  name={name}
                  email={email}
                  id={id}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
