import React from 'react';
import PropTypes from 'prop-types';

import styles from './TestComponent.css';

const TestComponent = ({ title, height }) => (
  <div className={styles.container} style={{ height }}>
    <h2>{title}</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
      reprehenderit porro fuga, quas aliquid quia. Labore nostrum autem
      temporibus odio corporis, tenetur accusamus rem velit voluptatem eligendi
      assumenda quaerat illo?
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
      obcaecati, reprehenderit sit rerum vel accusantium necessitatibus. Iure,
      fuga dolorum et cumque dicta nulla ducimus est numquam praesentium,
      dolorem debitis esse? Lorem ipsum dolor sit, amet consectetur adipisicing
      elit. Placeat impedit ea, architecto ullam inventore aperiam neque earum
      alias error excepturi illo dolorum asperiores perspiciatis reiciendis ipsa
      aliquid nobis molestiae facere!
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod consectetur
      repudiandae accusantium dolor atque fuga odio, animi, natus asperiores
      sapiente sint. Suscipit consectetur eveniet reprehenderit non ipsa quia,
      voluptatum quas! Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quisquam vitae, itaque laudantium et aliquid voluptates obcaecati quis
      repellat nulla quia, officiis ut, iusto ab molestiae quae? Fugiat
      obcaecati laborum assumenda! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Labore reiciendis debitis cum ipsam ducimus nobis nihil
      consectetur? Ea, dolor assumenda! Nulla voluptatem quod hic eum
      consequatur, exercitationem cum error obcaecati. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Natus sapiente incidunt perspiciatis
      quasi ex amet a aliquam dolorem laborum asperiores provident nulla,
      repudiandae eos sint dignissimos maiores exercitationem consectetur
      nesciunt.
    </p>
  </div>
);

TestComponent.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
};

TestComponent.defaultProps = {
  height: 300,
};

export default TestComponent;
