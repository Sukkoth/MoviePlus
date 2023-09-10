import axios from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './video.styles.css';

const Video = ({ title }) => {
    const [videos, setVideos] = useState([]);
    const query = title.split(' ').join('+');

    useEffect(() => {
        const fetchYoutubeLinks = async () => {
            try {
                const response = await axios.get(
                    'https://simple-youtube-search.p.rapidapi.com/search',
                    {
                        headers: {
                            'X-RapidAPI-Key':
                                'c9a4a889ccmsh7c8d71db655e1ecp1a142fjsn69881049a273',
                            'X-RapidAPI-Host':
                                'simple-youtube-search.p.rapidapi.com',
                        },

                        params: {
                            query: query + 'trailer',
                        },
                    }
                );
                setVideos(response.data?.results);
            } catch (error) {
                console.log(error);
            }
        };
        fetchYoutubeLinks();
    }, [query]);

    return (
        <div className='videos'>
            <h2 style={{ margin: 0, padding: 0 }}>Youtube Trialers</h2>
            <p style={{ color: 'var(--color-red-light', margin: 0 }}>
                NB: May not be exact result
            </p>
            {videos.length > 0 &&
                videos
                    ?.splice(0, 5)
                    ?.map((video, index) => (
                        <iframe
                            width='800'
                            height='455'
                            src={'https://www.youtube.com/embed/' + video?.id}
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            allowfullscreen={true}
                            key={index}
                        ></iframe>
                    ))}
            {videos?.length === 0 && <h3>No YouTube videos found</h3>}
        </div>
    );
};

Video.propTypes = {
    title: PropTypes.string,
};

export default Video;
