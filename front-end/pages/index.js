import Head from "next/head";
import Card from "../components/Card";
import Link from "next/link";
import Search from "../components/Search";
import React, { useState } from "react";

// function runs at build time, never runs in the browser
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/players");
  const data = await res.json();

  return {
    props: { players: data },
  };
};

export default function Home({ players }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(players);
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (setSearchTerm !== "") {
      setSearchResults(
        players.filter((player) =>
          Object.values(player).join(" ").toLowerCase().includes(searchTerm)
        )
      );
    }
  };
  return (
    <>
      <Head>
        <title>LAtelier Test | Home</title>
        <meta name="keywords" content="test" />
      </Head>
      <div className="view home">
        <div className="content">
          <div className="list-container">
            <Search term={searchTerm} searchKeyword={searchHandler} />
            <div className="player-list">
              {searchResults.map((player) => (
                <Link href={"/Players/" + player.id} key={player.id}>
                  <a>
                    <Card player={player} />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
