import Card from "./Card";
import React, { useState } from 'react';

const Cards = (props) => {
    console.log(props.category);
    console.log(props.courses);

    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        if (props.category === "All") {
            let allCourses = [];
            Object.values(props.courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        } else {
            return props.courses[props.category] || [];
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {getCourses().map((course) => (
                <Card 
                    course={course} 
                    key={course.id}  // Use a unique identifier from the course object
                    likedCourses={likedCourses} 
                    setLikedCourses={setLikedCourses} 
                />
            ))}
        </div>
    );
};

export default Cards;
