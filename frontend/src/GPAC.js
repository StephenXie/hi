import { useState } from "react";
import { withRouter } from "react-router-dom";
import { AcademicCapIcon } from "@heroicons/react/solid";
import Header from "./components/Header";
import Particle from "./components/Particle";
import Button from "./components/Button";
import GPA from "./components/GPA";
import Classes from "./components/Classes";
import Class from "./components/Class";
import Highlight from "./components/Highlight";
import Tilt from "react-tilt";
const GPAC = () => {
  const [classes, setClasses] = useState([
    { id: 0, name: "", grade: "A", weight: "R", credit: "1" },
  ]);
  const [numClass, setNumClass] = useState(1);
  const addClass = () => {
    setClasses([
      ...classes,
      { id: numClass, name: "", grade: "A", weight: "R", credit: "1" },
    ]);
    setNumClass(numClass + 1);
  };
  const deleteClass = (id) => {
    console.log(classes);
    setClasses(classes.filter((myclass) => myclass.id !== id));
  };
  const setData = (id, name, grade, weight, credit) => {
    setClasses(
      classes.map((myclass) =>
        myclass.id == id
          ? {
              ...myclass,
              name: name,
              grade: grade,
              weight: weight,
              credit: credit,
            }
          : myclass
      )
    );
  };
  return (
    <div className="my-container flex-1 bg-white ">
      <Particle />
      <Header
        className=""
        imgLink="https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=125&w=210"
        descriptions="Enter your grades, what types of classes you are taking, course credits(optional) and calculates your weighted and unweighted GPA."
        button={
          <div className="flex flex-row space-x-3">
            <Tilt className="Tilt" options={{ max: 30 }}>
              <Button
                text={
                  <div className="flex flex-row space-x-2">
                    <AcademicCapIcon className="h-7 w-7 my-auto" />
                    <span className="my-auto">Add Class</span>
                  </div>
                }
                color="green"
                onClick={addClass}
                className="relative"
              />
            </Tilt>
          </div>
        }
      >
        <div className="animate__animated animate__flip animate__fast">
          <Highlight color="green" text="GPA" r={600} /> Calculator
        </div>
      </Header>
      <GPA key={classes} classes={classes} />
      <Classes classes={classes} deleteClass={deleteClass} setData={setData} />
    </div>
  );
};

export default withRouter(GPAC);
