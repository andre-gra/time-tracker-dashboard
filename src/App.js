import React, { useState } from 'react';
import './App.css';
import Card from './components/card';
import Columns from './components/columns';
import Header from './components/header';
import IntegrationCard from './components/integratrion-card';
import ReportCard from './components/report-card';
import SideCard from './components/side-card';
import Sidebar from './components/sidebar';
import Title from './components/title';

function App() {
  const optionsOne = ['Last 6 days', 'Today', 'Yesterday', 'Last month'];
  const [columns] = useState([
    {
      leftHeight: '50%',
      rightHeight: '25%',
      day: 'Sun',
    },
    {
      leftHeight: '30%',
      rightHeight: '65%',
      day: 'Mon',
    },
    {
      leftHeight: '45%',
      rightHeight: '75%',
      day: 'Tue',
    },
    {
      leftHeight: '20%',
      rightHeight: '35%',
      day: 'Wen',
    },
    {
      leftHeight: '55%',
      rightHeight: '25%',
      day: 'Thu',
    },
    {
      leftHeight: '30%',
      rightHeight: '15%',
      day: 'Fri',
    },
  ]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="main-container grow bg-gray-200 min-h-screen grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-3 h-16">
          <Header />
        </div>
        <div className="flex flex-col lg:col-span-2 justify-around ml-10 mr-10 lg:mr-0 my-10">
          <Columns columns={columns} />
          <div className="flex flex-col gap-4">
            <Title text="Time tracker" selectOptions={optionsOne} filterOn />
            <Card text1="Fixing bug" text2="Project x" bold time="3:00 - 3.30PM" />
            <Card text1="Illustration" text2="Acme" time="4:00 - 4.30PM" />
            <Card text1="Filling tax return" text2="Office" time="5:00 - 5.30PM" />
          </div>
        </div>
        <div className="flex flex-col justify-around mx-10">
          <SideCard />
          <ReportCard />
          <IntegrationCard />
        </div>
      </div>
    </div>
  );
}

export default App;
