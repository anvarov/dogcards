import React, { Component } from 'react';
import FormattedArticle from '../components/FormattedArticle';
import breedList from '../fixtures/BreedList';
import cheerio from 'cheerio';
import axios from 'axios';
import 'babel-core/register';
import 'babel-polyfill';
import http from 'http';
import request from 'request';
// const got = require('got');
let [response, $, table, parsedBody, history, breedName, url] = [];

export default class App extends Component {
  //setting up state
  constructor() {
    super();
    this.state = {
      name: 'Borzoi',
      url: '',
      error: '',
      breedList,
      ready: true,
      table: ''
    };
    this.getData = this.getData.bind(this);
  }

  //get data method on click button
  getData = async () => {
    try {
      breedName = breedList[Math.floor(Math.random() * (breedList.length - 1))];
      url = `https://en.wikipedia.org/api/rest_v1/page/html/${breedName}?redirect=trsue`;
      this.setState(prevState => ({
        ready: !prevState.ready
      }));
      await request(url, (err, res, body) => {
        
        parsedBody = body.replace(
          /(<span class="mw-reflink-text">\[\d\]<\/span>|\\n|\\)/,
          ''
        );
        $ = cheerio.load(parsedBody);
        table = $('table.infobox.biota');
        this.setState(prevState => ({
          name: $('caption').text(),
          url,
          ready: !prevState.ready,
          table
        }));
      });
    } catch (err) {
      this.setState(() => {
        error: err;
      });
    }
  };

//loading data at firs start
  componentWillMount() {
    this.getData()
  }

  render() {
    return (
      <div>
        <h1 style={{ marginLeft: '2em' }}>Dog Cards App</h1>
        <FormattedArticle breedData={this.state} onClick={this.getData} />
      </div>
    );
  }
}
