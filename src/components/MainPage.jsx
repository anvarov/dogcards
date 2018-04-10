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
let response;
let $;
let table;
export default class App extends Component {
  //setting up state
  constructor() {
    super();
    this.state = {
      name: 'Borzoi',
      otherNames: '',
      commonNicknames: '',
      description: '',
      url: '',
      error: '',
      img: '',
      breedList,
      ready: true
    };
    this.getData = this.getData.bind(this);
  }

  getData = async () => {
    try {
      let breedName =
        breedList[Math.floor(Math.random() * (breedList.length - 1))];
      let url = `https://en.wikipedia.org/api/rest_v1/page/html/${breedName}?redirect=true`;
      this.setState(prevState => ({
        ready: !prevState.ready
      }));
      await request(url, (err, res, body) => {
        let [count, i] = [0, 1];
        $ = cheerio.load(body);
        let that = this;
        table = $('table[class="infobox biota"]').find('*');
        table.each(function(index, element) {
          if (
            $(this).text() === 'Other names' &&
            $(this)[0].children[0].data === 'Other names'
          ) {
            console.log(count);
            that.setState(() => ({
              otherNames: $(this)
                .parent()
                .siblings('td')
                .text()
            }));
            return;
          } else if (
            $(this).text() === 'Common nicknames' &&
            $(this)[0].children[0].data === 'Common nicknames'
          ) {
            console.log(count + 1);
            that.setState(() => ({
              commonNicknames: $(this)
                .siblings('td')
                .text()
            }));
            return;
          }
          // console.log(this)
        });
        that.setState(prevState => ({
          description: $('p')
            .eq(0)
            .text(),
          name: $('#firstHeading').text(),
          img: 'https:' + $('figure-inline > a > img').attr('src'),
          url,
          ready: !prevState.ready
        }));
        // console.log($);
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    console.log('from render');

    return (
      <div>
        <FormattedArticle breedData={this.state} onClick={this.getData} />
      </div>
    );
  }
}
