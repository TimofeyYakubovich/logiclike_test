import React, { FC } from 'react';
import { CoursesType } from '../../types/courses';

import './CourseItem.scss'

interface CourseItemProps {
    course: CoursesType;
}

const CourseItem: FC<CourseItemProps> = ({course}) => {
    const bgColor = course.bgColor

    return (
        <div className='courseItem__wrapp'>
            <div 
                style={{backgroundColor: bgColor}} 
                className="courseItem__img"
            >
                <img src={course.image} alt={course.name} />
            </div>
            <div className="courseItem__name">
                <span>{course.name}</span>
            </div>
        </div>
    );
};

export default CourseItem;