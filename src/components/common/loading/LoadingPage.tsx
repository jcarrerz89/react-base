import React from 'react';
import LoadingGif from '@assets/images/loading.webp';
import { styled } from '@mui/system';

const FullPageContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
});

const Image = styled('img')({
    maxWidth: '100%',
    maxHeight: '100%',
});

const LoadingPage = () => {
    return (
        <FullPageContainer>
            <Image src={LoadingGif} alt="loading" />
        </FullPageContainer>
    );
}

export default LoadingPage;
