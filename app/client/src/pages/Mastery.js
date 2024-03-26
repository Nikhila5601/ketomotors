import React from 'react';
import { Link } from "react-router-dom";
import Arrow from "../assets/Battery/arrow.png";
import Line from "../assets/Battery/line.png";
import ChartMaster from '../components/ChartMaster';
import './mastery.scss';

const Master = () => {
  return (<>
    <div className="cards-container">
      <div className="card">
        <div className="flex">

        <div className="info">
          <div className="make">
            Make
          </div>
          <div class="batterymake">
            Exicom
          </div>
          <br />
          <div className="make">
            Total Count
          </div>
          <div class="batterymake">
            12
          </div>
        </div>
        <div className="chart">
          <ChartMaster/>
        </div>
        </div>

        <img src={Line} alt="" width="100%" />
        <div class="box">

          <div className="undercdc">
            Under CDC
          </div>
          <div className="arrow">
            <Link to="/dashboard">

              <img src={Arrow} />
            </Link>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="make">
          Make
        </div>
        <div class="batterymake">
          EXM
        </div>
        <br />
        <div className="make">
          Total Count
        </div>
        <div class="batterymake">
          12
        </div>
        <img src={Line} alt="" width="100%" />
        <div class="box">

          <div className="undercdc">
            Under CDC
          </div>
          <div className="arrow">
            <img src={Arrow} alt="Go to" />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="make">
          Make
        </div>
        <div class="batterymake">
          EXM
        </div>
        <br />
        <div className="make">
          Total Count
        </div>
        <div class="batterymake">
          12
        </div>
        <img src={Line} alt="" width="100%" />
        <div class="box">

          <div className="undercdc">
            Under CDC
          </div>
          <div className="arrow">
            <img src={Arrow} alt="Go to" />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="make">
          Make
        </div>
        <div class="batterymake">
          Exicom
        </div>
        <br />
        <div className="make">
          Total Count
        </div>
        <div class="batterymake">
          12
        </div>
        <img src={Line} alt="" width="100%" />
        <div class="box">

          <div className="undercdc">
            Under CDC
          </div>
          <div className="arrow">
            <img src={Arrow} alt="Go to" />
          </div>
        </div>
      </div>

    </div>
  </>
  );
};

export default Master;
