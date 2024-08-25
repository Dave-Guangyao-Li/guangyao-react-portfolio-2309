import React from 'react';
import Title from './Title';
const ResumePDF = () => {
    return (
        <section className='resume' id='resume' >
            <Title title='updated' subTitle='Resume' />
            <div className='pdf-container'>
                <iframe
                    title='Resume PDF'
                    src='https://drive.google.com/file/d/117uGQZGj4OKK2oygNsoWjowQcyS2wnCF/preview'
                    width='100%'
                    height='600'
                    frameborder='0'
                ></iframe>
            </div>
        </section>
    );
};

export default ResumePDF;
