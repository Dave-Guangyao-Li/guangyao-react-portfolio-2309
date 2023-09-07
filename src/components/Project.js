import React, { useState } from 'react';
import KeywordChip from './KeywordChip';

const Project = ({ image, title, info, keywords, link }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    // const shouldShowButton = info.join('\n').length > 100;
    // console.log(shouldShowButton)

    return (
        <article className={`tour-card ${expanded ? 'expanded' : ''}`}>
            <div className='tour-img-container'>
                <img src={image} className='tour-img' alt={title} />
            </div>
            <div className='tour-info'>
                <div className='tour-title'>
                    <h4>{title}</h4>
                </div>
                <div className={`tour-info-content ${expanded ? 'expanded' : ''}`}>
                    {info.map((infoItem, index) => (
                        <p key={index}>{infoItem}</p>
                    ))}
                </div>
            </div>
            {/* {shouldShowButton && (
                <div className='tour-footer'>
                    <button className='show-more-btn' onClick={toggleExpand}>
                        {expanded ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            )} */}
            <div className='tour-footer'>
                <div className='keywords-container'>
                    {keywords.map((keyword, index) => (
                        <KeywordChip key={index} keyword={keyword} />
                    ))}
                </div>
                <div className='tour-btn'>
                    <a href={link} className='btn' target='_blank' rel='noreferrer'>
                        Details
                    </a>
                </div>
            </div>
        </article>
    );
};

export default Project;
