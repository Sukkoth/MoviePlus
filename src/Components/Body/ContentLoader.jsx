import ContentLoader from 'react-content-loader';

const CustomContentLoader = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
        <div className='movies' key={index}>
            <ContentLoader
                className='movie'
                speed={3}
                width={300}
                height={648}
                viewBox='0 0 256 448'
                backgroundColor='#111827'
                foregroundColor='#1e293b'
            >
                <rect x='-179' y='-23' rx='0' ry='0' width='900' height='400' />
            </ContentLoader>
        </div>
    ));
};

export default CustomContentLoader;
