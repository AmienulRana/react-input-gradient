import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

export default function InputColorPickerGradient() {
  const [color, setColor] = useState("");
  return <ColorPicker value={color} setColor={(value) => setColor(value)} />;
}
