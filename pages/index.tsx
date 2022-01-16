import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { languageContext } from "../Context/languageContext";
import { Home } from "../Components/Home/Home";

const Main: NextPage = () => {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    getUserLanguage();
  }, []);

  const getUserLanguage = () => {
    const preference = localStorage.getItem("language");
    if (!preference) {
      setLanguage(navigator.language);
    } else {
      setLanguage(preference);
    }
  };

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
          />
        </Head>
        <div>
          <Home language={language} />
        </div>
      </div>
    </languageContext.Provider>
  );
};

export default Main;
