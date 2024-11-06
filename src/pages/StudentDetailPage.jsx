import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";


const StudentDetailPage = () => {
  const {id} = useParams();
  const [students, setStudents] = useState();

  useEffect(()=>{
    const fetchStudent = async () =>{
        const response = await fetch( `http://localhost:3000/students/${id}`);
        const student = await response.json();
        setStudents(student)
    }
  }, [])

  return <div>{students ? students.major : 'Loading...'}</div>;
};

export default StudentDetailPage;
