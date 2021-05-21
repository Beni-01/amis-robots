import React from "react";
import { useRobot } from "./useFetchRobots";
import { CardRobot } from "./cardRobot";

export const Layout = (props) => {
  const [allRobots] = useRobot("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      <section className="container-fluid ">
        <div className="row">
          <div className="col-12 mt-5">
            <div className="container ">
              <div className="row justify-content-center">
                {allRobots.map(({ id, name, username, email }) => (
                  <CardRobot
                    key={id}
                    image={`https://robohash.org/${id}`}
                    cardClass="img-fluid"
                    name={name}
                    username={username}
                    email={email}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
