import React from 'react';

const Result = (props) => {
    if (!props.details.thumbnail) {
        props.details.thumbnail = { source: '/wiki.svg' };
        props.details.pageimage = 'Wikipedia - The Free Encyclopedia';
    }

    const handleClick = () => {
        if (props.details.pageid)
            document.location.href = `https://en.wikipedia.org/?curid=${props.details.pageid}`;
    }

    return (
        <div className='result' onClick={handleClick}>
            <div className='thumb'>
                <img src={props.details.thumbnail.source} alt={props.details.pageimage} />
            </div>

            <div className='text'>
                <h3>
                    {props.details.title}
                </h3>

                <p>
                    {props.details.extract}
                </p>
            </div>

        </div>
    );
};

export default Result;