import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import ErrorAlert from "./components/ErrorAlert";
import UserList from "./components/UserList";
import "./App.css";

const App = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <Loader />;

  if (error) return <ErrorAlert message={error} onRetry={fetchUsers} />;

  return (
    <div className="app-container">
      <h1>Users Information</h1>
      <UserList users={users} />
    </div>
  );
};

export default App;