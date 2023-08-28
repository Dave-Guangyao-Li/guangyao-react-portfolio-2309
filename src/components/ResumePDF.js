import React from 'react';
import Title from './Title';
const ResumePDF = () => {
    return (
        <section id='resume' className='resume'>
            <Title title='updated' subTitle='Resume' />
            <div className='pdf-container'>
                <iframe
                    title='Resume PDF'
                    src='https://drive.google.com/file/d/1Y9diW2U-EVeiXed6epeZ-GuPNny-cb1G/preview'
                    width='100%'
                    height='600'
                    frameborder='0'
                ></iframe>
            </div>
        </section>
    );
};

export default ResumePDF;
