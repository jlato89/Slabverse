import React from 'react';
import styles from './TallImgTiles.module.css';

const tiles = [
  { src: 'assets/images/tile1.jpg', alt: 'Tile1' },
  { src: 'assets/images/tile2.jpg', alt: 'Tile2' },
  { src: 'assets/images/tile3.jpg', alt: 'Tile3' },
  { src: 'assets/images/tile4.jpg', alt: 'Tile4' },
];

const TallImgTiles = () => {
  return (
    <div className={styles.container}>
      {tiles.map((tile, i) => (
        <img key={i} className={styles.tiles} src={tile.src} alt={tile.alt} />
      ))}
    </div>
  );
};

export default TallImgTiles;
