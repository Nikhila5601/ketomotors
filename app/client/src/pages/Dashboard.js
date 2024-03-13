import React from 'react';
import TopBox from '../components/TopBox';
import "./dashboard.scss";
const Dashboard = () => {
  return (
    <div className='home'>
      <div class="box box1"><TopBox /></div>
      <div class="box box2">Box2</div>
      <div class="box box3">Box3</div>
      <div class="box box4">Box4</div>
      <div class="box box5">Box5</div>
    </div>
  )
}
export default Dashboard;