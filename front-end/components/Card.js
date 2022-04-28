import React from "react";
import Image from "next/image";
import styles from "../styles/Card.module.scss";
function Card({ player }) {
  return (
    <div className={styles.playerCard}>
      <div
        className={styles.picture}
        style={{ backgroundImage: `url(${player.picture})` }}
      ></div>
      <div className={styles.infoContainer}>
        <h1>
          {player.firstname} {player.lastname}
        </h1>
        <div className={styles.infoLine}>
          <div className={styles.infoRank}>
            <div className={styles.infoTitle}>Rank</div>

            <div className={styles.infoValue}>#{player.data.rank}</div>
          </div>

          <div className={styles.infoPoints}>
            <div className={styles.infoTitle}>Points</div>

            <div className={styles.infoValue}>{player.data.points} </div>
          </div>

          <div className={styles.infoCountry}>
            <div className={styles.infoTitle}>Country</div>

            <div className={styles.infoValue}> {player.country.code}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
