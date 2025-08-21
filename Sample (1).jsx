import React from 'react';
import './1.css';

function Sample() {
  return (
    <section className="packages-section" id="packages">
      <p className="subheading">POPULAR DESTINATIONS</p>
      <h1>Handpicked Packages</h1>

      <div className="packages">
        <div className="package-card">
          <img src="/public/IMg/10.png" alt="Spain" />
          <div className="card-content">
            <img src="/public/IMg/RATINGS.png" alt="Spain" />
            {/* <span className="tag">EUROPE</span> */}
            <h3>Spain</h3>
            <p>From $2,499</p>
          </div>
        </div>

        <div className="package-card">
          <img src="/public/IMg/11.png" alt="Australia" />
          <div className="card-content">
             <img src="/public/IMg/RATINGS.png" alt="Spain" />
            {/* <span className="tag">EUROPE</span> */}
            <h3>Australia</h3>
            <p>From $3,499</p>
          </div>
        </div>

        <div className="package-card">
          <img src="/public/IMg/12.png" alt="Egypt" />
          <div className="card-content">
             <img src="/public/IMg/RATINGS.png" alt="Spain" />
            {/* <span className="tag">EUROPE</span> */}
            <h3>Egypt</h3>
            <p>From $4,499</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sample;