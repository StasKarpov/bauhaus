import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LangProvider, Translation } from "./context/lang";
import { TRANSLATION } from "./queries/translation";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Prices from "./pages/Prices";
import Trainings from "./pages/Trainings";
import Training from "./pages/Training";
import Team from "./pages/Team";
import Coach from "./pages/Coach";
import Timetable from "./pages/Timetable";
import Gallery from "./pages/Gallery";
import Room from "./pages/Room";
import Contacts from "./pages/Contacts";
import Confidential from "./pages/Confidential";
import Query from "./components/Query";
import { Query as QueryType, TranslationEntity } from "./types";

function App() {
  return (
    <Query query={TRANSLATION}>
      {({ data: { translations } }: { data: QueryType }) => (
        <LangProvider translationQueryResult={translations?.data || []}>
          <>
            <Router>
              <Header />
              <div className="container overflow-auto mx-auto h-[calc(100vh-14rem)] mt-4 lg:mt-0">
                <Routes>
                  <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="prices" element={<Prices />} />
                    <Route path="trainings" element={<Trainings />}>
                      <Route path=":trainingId" element={<Training />} />
                    </Route>
                    <Route path="team" element={<Team />}>
                      <Route path=":coachId" element={<Coach />} />
                    </Route>
                    <Route path="timetable" element={<Timetable />} />
                    <Route path="gallery" element={<Gallery />}>
                      <Route path=":roomId" element={<Room />} />
                    </Route>
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="confidential" element={<Confidential />} />
                  </Route>
                </Routes>
              </div>
              <Footer />
            </Router>
          </>
        </LangProvider>
      )}
    </Query>
  );
}

export default App;
