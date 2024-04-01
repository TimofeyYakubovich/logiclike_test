import React, { FC } from 'react';
import './TopicsList.scss'

interface TopicsListProps {
    tagsArray: string[];
    activeTags: string;
    setActiveTags: (activeTags: string) => void;
}

const TopicsList: FC<TopicsListProps> = ({tagsArray, activeTags, setActiveTags}) => {
    return (
        <div className='topicsList__wrapper'>
            {tagsArray.map(tag => (
                    <button
                        key={tag}
                        className={tag === activeTags ? 'topicsList__btn active' : 'topicsList__btn'}
                        onClick={() => setActiveTags(tag)}
                    >
                        {tag}
                    </button>
                
            ))}
        </div>
    );
};

export default TopicsList;