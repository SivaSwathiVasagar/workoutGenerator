import React from "react";
import Header from "./Header/Header";

export default function UI() {
  return (
    <div className="Ui">
      <Header />
      <h3>“Take care of your body. It’s the only place you have to live.”</h3>
      <p>Welcome to my Fitness Planner!</p>
      <p>
        Please choose the muscle group that you are planning to workout today
        from below options
      </p>
    </div>
  );
}
