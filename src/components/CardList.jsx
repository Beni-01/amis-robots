import React, { useState, useEffect } from "react";
import { CardRobot } from "./cardRobot";
import { CardRobotDetails } from "./CardRobotDetails";
import { InputConponent } from "./InputConponent";

export const Layout = (props) => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [robots, setRobots] = useState([]);
  const [tempoRobot, setTempRobot] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [show, setShow] = useState([]);
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
  };

  console.log(tempoRobot);

  const handleShowDetails = (idRobot) => {
    // eslint-disable-next-line eqeqeq
    const filteredRobot = tempoRobot.filter(({ id }) => id === idRobot);
    setShow(filteredRobot);
    setIsClicked(true);
  };

  const handleHideDetails = () => {
  setRobots(tempoRobot);
    setIsClicked(false);
  };

  return (
    <>
    {window.scrollTo(0,0)}
      <section className="container-fluid ">
        <div className="row">
            {!isClicked ? (
            <InputConponent handleChange={handleChange} />
          ) : (
            <h2 className="text-center mt-5">DETAILS SUR MON AMI</h2>
          )}
          
          <div className="col-12 mt-5">
            <div className="row justify-content-center">
              {!isClicked ? (
                robots.map(({ id, name, email }) => (
                  <CardRobot
                    key={id}
                    image={`https://robohash.org/${id}`}
                    cardClass="img-fluid"
                    name={name}
                    email={email}
                    id={id}
                    handleShowDetails={handleShowDetails}
                  />
                ))
              ) : (
                <CardRobotDetails
                  item={show}
                  cardClass="img-fluid"
                  handleHideDetails={handleHideDetails}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
