import React from "react";
import backgroundImage from "./images/background.webp";
import Santa from "./images/santa.png";

function Hero() {
  return (
    <div style={styles.heroContainer}>
      {/* Add the image here */}
      <div style={styles.giftsBack}>
      <img
        src={backgroundImage}
        alt="Background"
        style={{
          width: "100%",
          height: "auto",
        }}
      /></div>
      {/* Santa Image */}
     <div style={styles.santaBack}> <img
        src={Santa}
        alt="Santa"
        style={styles.santaImage}
      />
    </div>
    </div>
  );
}

const styles = {
  giftsBack:{
    filter: 'blur(3px)', 
    zIndex: '-1',
  },
  santaBack:{
    marginTop: '0', 
    display: 'flex',
    alignItems: 'right',
    zIndex: '100',
    height: '100vh',
  },
  heroContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    // backgroundColor: "#f4f4f4",
    backgroundImage: "url('./src/images/background.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  // content: {
  //   textAlign: "center",
  //   backgroundColor: "rgba(255, 193, 193, 0.8)",
  //   padding: "2rem",
  //   // borderRadius: "10px",
  //   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    
  // },
  title: {
    fontSize: "3rem",
    color: "#333",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "1.5rem",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "0.8rem 1.5rem",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Hero;
