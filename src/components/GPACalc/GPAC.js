import { useState } from "react";
import { withRouter } from "react-router-dom";
import { AcademicCapIcon } from "@heroicons/react/solid";
import Header from "../Header";
import Particle from "../Particle";
import Button from "../Button";
import GPA from "./GPA";
import Classes from "./Classes";
import Class from "./Class";
import Highlight from "../Highlight";
import Tilt from "react-parallax-tilt";
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
  const [honorToggled, setHonorToggled] = useState(true);
  const toggleHonor = () => {
    console.log("toggled");
    setHonorToggled(!honorToggled);
    setClasses(
      classes.map((myclass) =>
        myclass.weight == "H+" || myclass.weight == "H-"
          ? myclass.weight == "H+"
            ? {
                ...myclass,
                weight: "H-",
              }
            : {
                ...myclass,
                weight: "H+",
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
            <label
              htmlFor="toogleButton"
              className="flex flex-col content-center cursor-pointer text-base font-medium justify-center"
            >
              <div className="px-2 text-black font-normal">
                Honors → {" "}
                {honorToggled ? (
                    "5"
                ) : (
                  "4.5"
                )}
              </div>
              <div className="relative mx-auto">
                <input
                  id="toogleButton"
                  type="checkbox"
                  className="hidden"
                  onClick={() => toggleHonor()}
                />
                <div className="toggle-path bg-blue-400 w-9 h-5 rounded-full shadow-inner"></div>
                <div className="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"></div>
              </div>
            </label>
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
