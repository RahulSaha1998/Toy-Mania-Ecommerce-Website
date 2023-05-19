import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabCard from './TabCard';

const CategoryTab = () => {

    const [tabData, setTabData] = useState([])
    const [activeTab, setActiveTab] = useState("car");

    useEffect(() => {
        fetch(`http://localhost:5000/toys`)
            .then((res) => res.json())
            .then((data) => {
                setTabData(data);
            });
    }, []);

    const result = tabData?.filter(singleTab => singleTab.category == activeTab);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className='text-center mt-5 mb-5'>
            <h2 className='text-3xl'>Categories</h2>
            <Tabs>
                <TabList>
                    <Tab>
                        <div
                            onClick={() => handleTabClick("car")}
                        >
                            Sub Category 1
                        </div>
                    </Tab>
                    <Tab>
                        <div
                            onClick={() => handleTabClick("bike")}
                        >
                            Sub Category 2
                        </div>
                    </Tab>
                    <Tab>
                        <div
                            onClick={() => handleTabClick("truck")}
                        >
                            Sub Category 3
                        </div>
                    </Tab>
                </TabList>

                <TabPanel className='bg-red-400 rounded-xl shadow-xl'>
                    <div className='grid lg:grid-cols-3 gap-5 p-10'>
                        {
                            result.slice(0, 3).map(r_data => <TabCard
                                key={r_data._id}
                                r_data={r_data}
                            ></TabCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className='bg-red-400 rounded-xl shadow-xl'>
                    <div className='grid lg:grid-cols-2 gap-5 p-10'>
                        {
                            result.slice(0, 2).map(r_data => <TabCard
                                key={r_data._id}
                                r_data={r_data}
                            ></TabCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className='bg-red-400 rounded-xl shadow-xl'>
                    <div className='grid lg:grid-cols-2 gap-5 p-10'>
                        {
                            result.slice(0, 2).map(r_data => <TabCard
                                key={r_data._id}
                                r_data={r_data}
                            ></TabCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTab;