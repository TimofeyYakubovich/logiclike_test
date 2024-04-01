import React, { useEffect, useState } from 'react';
import Loader from './components/UI/Loader/Loader';
import { CoursesType } from './types/courses';
import { useFetching } from './hooks/useFetching';
import CoursesService from './API/CoursesService';

import './App.scss'
import TopicsList from './components/TopicsList/TopicsList';
import Courseslist from './components/Courseslist/Courseslist';

function App() {
  const [courses ,setCourses] = useState<CoursesType[] | undefined>()
  const [uniqueTagsArray, setUniqueTagsArray] = useState<string[]>([])
  const [activeTags, setActiveTags] = useState<string>('Все темы')
  const [filteredCourses, setFilteredCourses] = useState<CoursesType[] | undefined>();

  const [fetchCourses, isLoadingCourses, coursesError] = useFetching(async () => {
    const response = await CoursesService.getAll()
    setCourses(response)
  })

  useEffect(() => {
    fetchCourses()
  }, [])

  useEffect(() => {
    if (courses) {
        const tagsSet = new Set<string>();
        tagsSet.add('Все темы');
        courses.forEach(course => {
            course.tags.forEach(tag => {
                tagsSet.add(tag);
            });
        });
        setUniqueTagsArray(Array.from(tagsSet));
    }
    
    console.log('uniqueTagsArray', uniqueTagsArray)
  }, [courses]);

  useEffect(() => {
    if (courses) {
      if (activeTags === 'Все темы') {
        setFilteredCourses(courses)
        return
      }
      const filtered = courses.filter(course => course.tags.includes(activeTags));
      setFilteredCourses(filtered);
    }
  }, [activeTags, courses]);

  return (
    <div className="App">
      {
          isLoadingCourses &&
          <div style={{display: 'flex', justifyContent: 'center'}}><Loader/></div>
      }
      <TopicsList tagsArray={uniqueTagsArray} activeTags={activeTags} setActiveTags={setActiveTags}/>
      <Courseslist courses={filteredCourses || courses}/>
    </div>
  );
}

export default App;
