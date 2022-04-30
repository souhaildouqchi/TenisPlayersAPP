import React from "react";
import { useRouter } from "next/router";
export const getStaticPaths = async () => {
  const res = await fetch(
    "https://tennis-player-app.herokuapp.com/api/players"
  );
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((player) => {
    return {
      params: { id: player.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://tennis-player-app.herokuapp.com/api/players/" + id
  );
  const data = await res.json();
  return {
    props: { player: data },
  };
};

function PlayerDetails({ player }) {
  const router = useRouter();
  return (
    <div>
      <div className="view player">
        <div className="overlay"></div>
        <div className="close-button" onClick={() => router.push("/")}></div>

        <div className="card" v-if="player">
          <div
            className="picture"
            style={{ backgroundImage: `url(${player.picture})` }}
          ></div>
          <div
            className="shadow"
            style={{ backgroundImage: `url(${player.picture})` }}
          ></div>
          <div className="name-container">
            <h1>{player.firstname}</h1>
            <h2>{player.lastname}</h2>
          </div>

          <div className="info-container">
            <div className="info rank">
              <div className="info-title">Rank</div>
              <div className="info-value">#{player.data.rank}</div>
            </div>
            <div className="info points">
              <div className="info-title">Points</div>
              <div className="info-value">{player.data.points}</div>
            </div>
            <div className="info country">
              <div className="info-title">Country</div>
              <div className="info-value">
                <div
                  className="country-flag"
                  style={{ backgroundImage: `url(${player.country.picture})` }}
                ></div>
                <span>{player.country.code}</span>
              </div>
            </div>
            <div className="info age">
              <div className="info-title">Age</div>
              <div className="info-value">{player.data.age}</div>
            </div>
            <div className="info weight">
              <div className="info-title">Weight</div>
              <div className="info-value">{player.data.weight / 1000}kg</div>
            </div>
            <div className="info height">
              <div className="info-title">Height</div>
              <div className="info-value">{player.data.height}cm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerDetails;
