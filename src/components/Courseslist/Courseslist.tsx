import React, { FC } from 'react';
import { CoursesType } from '../../types/courses';
import CourseItem from '../CourseItem/CourseItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './Courseslist.scss'

interface CourseslistProps {
    courses: CoursesType[] | undefined;
}

const Courseslist: FC<CourseslistProps> = ({courses}) => {
    console.log('Courseslist')
    return (
        <div className='courseslist__wrap'>
            {
                courses && courses.map(course =>
                    <CourseItem key={course.id} course={course}/>
                )
            }
        </div>
    );
};

export default Courseslist;