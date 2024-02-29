import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createAdd } from "typescript";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

type Person = {
  name: string;
  surname: string;
  gender: string;
  job: string;
  availableToWork: boolean;
};

const persons: Person[] = [
  {
    name: "John",
    surname: "Doe",
    gender: "Male",
    job: "Developer",
    availableToWork: true,
  },
  {
    name: "Mary",
    surname: "Doe",
    gender: "Female",
    job: "Actress",
    availableToWork: false,
  },
  {
    name: "Micheal",
    surname: "Smith",
    gender: "Male",
    job: "Teacher",
    availableToWork: true,
  },
  {
    name: "Katia",
    surname: "Smith",
    gender: "Female",
    job: "Teacher",
    availableToWork: true,
  },
];

const Card = () => {
  return (
    <div className="container">
      {persons.map(({ name, surname, gender, job, availableToWork }) => (
        <div className="card">
          {gender === "Male" ? (
            <img
              src="https://freesvg.org/img/Cartoon-Man-Avatar-2.png"
              alt="Male Avatar"
            />
          ) : (
            <img
              src="https://freesvg.org/img/FaceWoman.png"
              alt="Female Avatar"
            />
          )}
          <div className="card-container">
            <h4>
              <div>{name}</div>
              <div>{surname}</div>
            </h4>
            <p>{job}</p>
            {availableToWork && <span>Available to work:✅</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

root.render(<Card />);
{
  /* < React.StrictMode > ;
<App />;
</React.StrictMode>; */
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// array di person:
// nome cognome lavoro
// rappresentarlo in n card
// alcuni sono disponibili a lavorare altri no (open to work)
