'use client';

import { MdComputer } from 'react-icons/md';
import Styles from './style.module.scss';

const OutServicesFeature = () => (
  <div className={Styles.ourServices}>
    <h1>Our Services</h1>
    <div>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item}>
          <div>
            <MdComputer size={90} />
          </div>
          <h1>Desktop Service</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec ipsum dolor sit amet, consectetur ut erat nec leo
            lobortis blandit.
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default OutServicesFeature;
