import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import JournalList from "./components/JournalList";
import Highlight from "./components/Highlight";
// import AddJournal from "./components/AddJournal";
import Particle from "./components/Particle";
import Tilt from 'react-parallax-tilt'
function Journals() {
  const [showAddJournal, setShowAddJournal] = useState(false);
  const [journals, setJournals] = useState([]);
  useEffect(() => {
    const getJournals = async () => {
      const journalsFromServer = await fetchJournals();
      setJournals(journalsFromServer);
    };
    getJournals();
  }, []);

  const fetchJournals = async () => {
    const res = await fetch(
      "https://www.stephenxie.com/api/journals/?format=json", { 
        method: 'get', 
        headers: new Headers({
        })
      });
    const data = await res.json();
    return data;
  };
//   const addJournal = async (journal) => {
//     const res = await fetch(
//       "https://www.stephenxie.com/api/todos/?format=json",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(journal),
//       }
//     );

//     const data = await res.json();

//     setJournals([...journals, data]);
//     // const id = Math.floor(Math.random() * 10000) + 1
//     // const newJournal = {id, ...journal}
//     // setJournals([...journals, newJournal])
//   };
  const deleteJournal = async (id) => {
    await fetch(`https://www.stephenxie.com/api/journals/${id}`, {
      method: "DELETE",
    });
    console.log("delete", id);
    setJournals(journals.filter((journal) => journal.id !== id));
  };

  return (
    <div className="my-container flex-1">
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="128" cy="108" r="98" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>
      <Particle />
      <Header
        title="Journals"
        imgLink="https://images.pexels.com/photos/45718/pexels-photo-45718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=125&w=210"
        descriptions="Drop down some notes or reminders for yourself by clicking on the button."
        button = {<Tilt className="Tilt" options={{ max : 15 }} ><Button
          color={showAddJournal ? "red" : "yellow"}
          text={showAddJournal ? "Hide Add Journal" : "Show Add Journal"}
          onClick={() => setShowAddJournal(!showAddJournal)}
      /></Tilt>}
      >
        <Highlight color="yellow" text="Journals" />
      </Header>
{/* 
      {showAddJournal && <AddJournal onAdd={addJournal} />}
       */}
      {journals.length > 0 ? (
        <JournalList journals={journals} onDelete={deleteJournal}/>
      ) : (
        "No Journals To Show"
      )}
    </div>
  );
}

export default withRouter(Journals);
