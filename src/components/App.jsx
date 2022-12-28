import React from "react";
import GiveFeedback from "./GiveFeedback/GiveFeedback"


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
       
        color: '#010101'
      }}
    >
     <GiveFeedback/>
    </div>
  );
};
