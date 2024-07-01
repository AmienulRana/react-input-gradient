import { useEffect, useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

export default function InputColorPickerGradient() {
  const [color, setColor] = useState("rgb(0,0,0)");

  // useEffect(() => {
  //   function handleMessage(event) {
  //     if (event.origin === "http://localhost:3001") {
  //       if (event.data.defaultColor) {
  //         setColor(event.data.defaultColor);
  //       }
  //     }
  //   }

  //   window.addEventListener("message", handleMessage, false);

  //   return () => {
  //     window.removeEventListener("message", handleMessage);
  //   };
  // }, []);
  useEffect(() => {
    // Send the color value to the parent window whenever it changes
    if (window.parent) {
      // console.log(window.parent);
      window.parent.postMessage({ color: color }, "*");
    }
  }, [color]);
  return <ColorPicker value={color} onChange={(value) => setColor(value)} />;
}
