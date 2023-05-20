import React, { useEffect } from 'react';
import useTitle from '../../hooks/useTitile';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Blog = () => {

    useTitle('Blogs');
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])


    return (
        <div className='m-10'>
            <div className="card w-full h-auto bg-base-100 m-auto shadow-xl">
                <div className="card-body">
                    <h2 className='text-center text-2xl font-bold'>Question Answer Session</h2>
                    <hr />
                    <div data-aos ="fade-right">
                        <h2 className="card-title text-red-600">Ques 1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p>Ans: Without the user having to repeatedly provide their login information, a refresh token simply allow us to re-validate the user. In the event that the refresh token is legitimate and requests access to private resources, the access token is reissued. And we can store the access token and refresh token in local storage or we can store in sessions.</p>
                    </div>
                    <div data-aos ="fade-left">
                        <h2 className="card-title text-red-600">Ques 2: Compare SQL and NoSQL databases?</h2>
                        <p>Ans: While NoSQL databases scale horizontally, SQL databases scale vertically. While NoSQL databases are document, key-value, graph, or wide-column stores, SQL databases are table-based. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    </div>
                    <div data-aos ="fade-right">
                        <h2 className="card-title text-red-600">Ques 3: What is express js? What is Nest JS?</h2>
                        <p>Ans: NestJS offers a more organized and opinionated approach, which can make it simpler to create complicated APIs with the right level of concern separation. Express, on the other hand, is more lightweight and flexible, which makes it a popular choice for simple or small-scale APIs</p>
                    </div>
                    <div data-aos ="fade-left">
                        <h2 className="card-title text-red-600">Ques 4: What is MongoDB aggregate and how does it work?</h2>
                        <p>Ans: Aggregation is the process of going through various phases with a huge collection of documents to process them. A pipeline is made up of the several stages. Filtering, sorting, grouping, reshaping, and altering documents as they move through a pipeline are all possible.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;