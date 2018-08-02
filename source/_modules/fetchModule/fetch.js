'use strict';

const URL = 'https://5b6264dd07412d00142acf61.mockapi.io/api/v1/cars';

export default class Fetch {
  constructor(){
    this.getData(URL);
    console.log('Fetch module ready.');
  }

  getData(URL){
    fetch(URL)
      .then(data => data.json())
      .then(data => {

        // var map = data.map((item) => {
        //   console.log(item);
        // })

      });
  }
}