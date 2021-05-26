import React, { useState, useEffect } from "react";
import { CardRobot } from "./cardRobot";
import { InputConponent } from "./InputConponent";

export const Layout = (props) => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [robots, setRobots] = useState([]);
  const [tempoRobot, setTempRobot] = useState([]);
  useEffect(() => {
    (async function () {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setRobots(data);
        setTempRobot(data);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (value) => {
    // eslint-disable-next-line eqeqeq
    const filteredRobots = tempoRobot.filter(({ name }) =>
      name.includes(value)
    );
    setRobots(filteredRobots);
    console.log(value);
  };

  return (
    <>
      <section className="container-fluid ">
        <div className="row">
          <InputConponent handleChange={handleChange} />
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
