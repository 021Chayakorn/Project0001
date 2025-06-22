import { useEffect, useState } from "react";
import "./LogoSpinner.css";

const logos = [
   "/public/web/1.png",
 "/public/web/2.png",
 "/public/web/3.png",
 "/public/web/4.png",
 "/public/web/5.png",
 "/public/web/Javascript.png",
 "/public/web/React.png",
 "/public/web/Typescript.png",

];

const LogoSlot = ({ index }: { index: number }) => {
  const [current, setCurrent] = useState(0);
  const [blurred, setBlurred] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlurred(true); // เริ่มเบลอ

      setTimeout(() => {
        let next = current;
        while (next === current) {
          next = Math.floor(Math.random() * logos.length);
        }
        setCurrent(next); // เปลี่ยนรูปแบบไม่ซ้ำ
      }, 250);

      setTimeout(() => {
        setBlurred(false); // หยุดเบลอ
      }, 500);
    }, 4000 + index * 1000);

    return () => clearInterval(interval);
  }, [current, index]);

  return (
    <div className="logo-slot">
      <img
        src={logos[current]}
        className={`logo-img ${blurred ? "blurred" : ""}`}
        alt="logo"
      />
    </div>
  );
};

export default LogoSlot;
