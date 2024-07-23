import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../css/LandingPage.css";
import park from "../assets/151205.jpg";

function LandingPage() {
  return (
    <>
      <Header />
      <NavBar />
      <main className="content">
        <section className="item-1">
          <div className="image-container">
            <img src={park} />
            <h1 className="image-text-1">ONLY RM499 PER VISIT</h1>
          </div>
        </section>
        <section className="item-2">
          <div className="item-2-1">
            <h1>345</h1>
            <p>visits daily</p>
          </div>
          <div className="item-2-2">
            <h1>48</h1>
            <p>total activities</p>
          </div>
        </section>
        <section className="item-3">
          <div className="item-3-1">
            <h1>2000+</h1>
            <p>weekly visits</p>
          </div>
          <div className="item-3-2">
            <h1>188</h1>
            <p>side shops</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
