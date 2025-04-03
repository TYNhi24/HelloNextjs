import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh" ,
      
    }}>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>Nhi Xin chào NextJS</h1>
    </div>
  );
}
