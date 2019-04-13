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
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
      consequuntur soluta officiis at, sit placeat illo asperiores eum porro
      quas adipisci, voluptatibus dolor alias quis. Tempore eveniet ab ipsa
      mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
      dolor quod quidem, ea suscipit alias tempora nemo exercitationem aut
      delectus vitae sapiente vero molestiae perferendis ipsum eum harum,
      inventore numquam! Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. Iure eius cupiditate eum, adipisci voluptate doloremque dolores
      ipsam, vero nesciunt ullam facere veritatis inventore? Aspernatur eum
      magnam quaerat odit numquam placeat! Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Provident expedita molestias facilis
      laudantium, magnam officiis? Rem, enim? Ab nulla aliquid soluta aut.
      Officiis quasi consequuntur saepe totam est, odio sed! Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Quis ab fugit sequi repellendus.
      Nulla officia, pariatur eveniet aut, ullam quis fuga perspiciatis ipsam
      deleniti sapiente perferendis vitae ut eos inventore? Lorem ipsum dolor
      sit, amet consectetur adipisicing elit. Cum reiciendis consequatur facere
      ut quas deleniti aut eum sequi excepturi officia temporibus quos odio,
      expedita est nihil! Dolore error facilis eum.
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
