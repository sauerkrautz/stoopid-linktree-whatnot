import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

import Login from "./components/auth/Login";
import UserList from "./components/UserList";
import Guard from "./components/guard/Guard";
import User from "./components/User";
import Register from "./components/auth/Register";
import Dashboard from "./components/Dashboard";
import Linktree from "./components/Linktree";
import NotFound from "./components/guard/NotFound";

export const UserContext = createContext<any>(null);
const client = new QueryClient();

function App() {
  const [user, setUser] = useState<any>({});
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  console.table({ user });

  return (
    <>
      <div className="w-full min-h-screen relative" id="parent">
        <QueryClientProvider client={client}>
          <UserContext.Provider value={user}>
            <Routes>
              <Route
                path="/"
                element={
                  <Login
                    credentials={credentials}
                    setCredentials={setCredentials}
                    setUser={setUser}
                  />
                }
              />
              <Route path="/signup" element={<Register />} />
              <Route element={<Guard />}>
                <Route element={<Dashboard />}>
                  <Route path="/users" element={<UserList />} />
                  <Route path="/user" element={<User />} />
                </Route>
              </Route>
              <Route
                path="/linktree/:id"
                element={<Linktree />}
                errorElement={<NotFound />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </UserContext.Provider>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
