import React, { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";
import { Controller } from "react-hook-form";
import { DiVim } from "react-icons/di";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      //Mosh explained why we have to write a seperate function like this because useEffect don't support you to have async function directly
      const controller = new AbortController();

      setLoading(true); //You set loading to true just before initiating request
      try {
        const res = await axios.get<User[]>(
          "https:/jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
        //.then((res) => setUsers(res.data))
        //.catch((err) => setError(err.message));
        setUsers(res.data);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message); //Understand here, '(err) as AxiosError is used rather than err:AxiosError because 'AxiosError' is not available in the catch block
      } finally {
        setLoading(false); //Loading should end in final block, because it should run whether promise is resolved or rejected
      }
    };
    //return () => Controller.abort(); //This is effect cleanUp code
    //ImpNote: How do you ensure a request is not send to server twice? Mosh mentioned something like 'StrictMode' but I guess strict mode is enabled by default in Development mode, Is there such thing in productin also
  }, []);
  //Note that in the below, error massage and isLoading are rendered based on a state variable -- Imp Note
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-Loader"></div>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
