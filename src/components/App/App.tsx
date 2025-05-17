import { HashRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { Articles } from "../Articles/Articles";
import React, { FC, useEffect } from "react"; //директива для webpack. надо пойти в node modules
import "./App.css";
import { ArticleItem } from "../ArticleItem/ArticleItem";


export const App: FC = () => {
  
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <Navigation
            placement="header"
            className="header__navigation"
          />
        </div>
      </header>

      <main>
 
 <Routes>
  <Route
    path="/"
    element={<Articles />}
  />
  <Route path="/:category" element={<Articles />} />

  <Route
  path="/article/:id"
  element={<ArticleItem categories={[]} sources={[]} />}
/>

</Routes>


       
      </main>

      <footer className="footer">
        <div className="container">
          <Navigation
            placement="footer"
            className="footer__navigation"
          />
          <div className="footer__bottom">
            <p className="footer__text">
              Сделано на Frontend курсе в{" "}
              <a
                className="footer__link"
                href="https://karpov.courses/frontend"
                target="_blank"
              >
                Karpov.Courses
              </a>
            </p>
            <p className="footer__text footer__text--gray">© 2021</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
