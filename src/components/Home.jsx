import React from 'react';
import Header from './Header';
import Content from './Content';
import Detail from './Detail/Detail';
import Steps from './Steps';
//import styles from './Home.module.css';


const Home = () => {
  return (
    <div  >
      <Header />
      <Content />
      <Steps />
      <Detail />
    </div>
  );
}

export default Home;
