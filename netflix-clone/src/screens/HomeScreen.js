import React from 'react';
import './HomeScreen.css';
import Nav from '../Nav';
import requests from "../Request";
import Row from '../Row';
import {Banner} from '../Banner';

export const HomeScreen = () => {
  return <div className="homeScreen">
      {/** Navbar */}
      <Nav/>

      {/** Banner */}
      <Banner/>
      {/** Row */}
      <Row
        title = 'NETFLIX ORIGINALS'
        fetchURL = {requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
  </div>;
};
