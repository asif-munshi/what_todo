import { useEffect, useRef } from "react";
import autosize from "autosize";

// Custom Hook: useTextarea
function useTextarea() {
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      autosize(titleRef.current);
    }
  }, []);
  useEffect(() => {
    if (descriptionRef.current) {
      autosize(descriptionRef.current);
    }
  }, []);

  return { titleRef, descriptionRef };
}

export default useTextarea;
