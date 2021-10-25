import { useEffect } from "react";
import { useState } from "react";

const useCourse = () => {
  const [courses, setCourse] = useState([]);
  useEffect(() => {
    const url = `./services.JSON`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  return [courses, setCourse];
};

export default useCourse;
