import { useState } from "react";

export const useValue = (val) => {
  const [value, setValue] = useState(val);
  return [
    value, { setValue }
  ];
};