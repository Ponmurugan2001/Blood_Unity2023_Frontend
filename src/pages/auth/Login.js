// import React from "react";
import React, { useEffect,useState} from "react";
import "./login.css";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify"
//import { Toast } from "react-toastify/dist/components";

const Login = () => {
  const {  error } = useSelector((state) => state.auth);

  const [encounteredError,setEncounteredError]=useState('');




  useEffect(() => {
    // When the 'error' changes, show a toast only if it's a new error
    if (error && error !== encounteredError) {
      toast.error(error);
      setEncounteredError(error);
    }
  }, [error, encounteredError]);


  return (
 
    <>
    
    {/* {error && <span>{toast.error(error)}</span>}  */}
    <div className="Main-Container">
      <Form formTitle={"LOGIN Page"} submitBtn={"login"} formType={"login"}/>
    </div>
    </>
  );
};

export default Login;
