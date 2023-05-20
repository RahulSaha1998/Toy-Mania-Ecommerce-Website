import React from 'react';
import useTitle from '../../hooks/useTitile';

const Blog = () => {

    useTitle('Blogs');


    return (
        <div>
            <h2>Hello from blog</h2>
        </div>
    );
};

export default Blog;