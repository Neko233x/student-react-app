import { useEffect, useState } from "react";
import { StudentInfo } from "./StudentInfo";
import "./App.css";
import { Link } from "react-router-dom";


function App() {
  //state is dynamic and can be changed
  const [students, setStudents] = useState([]); //initialize state as studentList

  useEffect(() => {
    const getStudents = async () => {
      const response = await fetch("http://localhost:3000/students");
      const data = await response.json();
      setStudents(data);
    };
    getStudents();
  }, []);

  return (
    <>
      <div>
        <h1>Welcome to CTP</h1>
        <p>List of Students</p>
        <Link to={`student/${students.sId}`}>
          {students.map((student) => (
            <StudentInfo key={student.sId} {...student} />
          ))}
        </Link>
          
        <Link to='student/submit'>
          Submit New Students
        </Link>
        <button
          onClick={async () => {
            //use setter function when you want to use the previous state
            await fetch("http://localhost:3000/students", {
              body: JSON.stringify({
                sId: "12345",
                firstName: "JJ",
                lastName: "WW",
                major: "Art",
                school: "Baruch",
              }),
              header: {
                "content-type": "application/json",
              },
              method: "POST",
            });
          }}
        >
          Add a new student
        </button>

        <button
          onClick={() => {
            setStudents((oldStudentList) =>
              oldStudentList.slice(0, oldStudentList.length - 1)
            ); //students.slice(0, students.length-1)
          }}
        >
          Remove last student
        </button>
      </div>
    </>
  );
}

export default App;
