import React, { Component } from 'react';
import './App.css';
/*import { Icon } from 'react-icons-kit'
import {clockO} from 'react-icons-kit/fa/clockO'

import {mapMarker} from 'react-icons-kit/fa/mapMarker'
import {infoCircle} from 'react-icons-kit/fa/infoCircle'
import {registered} from 'react-icons-kit/fa/registered'*/


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
images: props.images,
      time: '',
      name:'',
      place:'',
      trainer: '',
      additionalInfo:'',
      img: '',
      id:'',
      text:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum'
    };

    this.state.name = "Ashtanga Yoga Anfänger";
    this.state.trainer = "Clarissa Biscupic";
    this.state.time = "Mo.08.Sep. 2017";
  }


  onChange = (event) => {
      this.setState({ time: event.target.value });
    }
    handleSubmit = (event) => {
      event.preventDefault();
      const url = `https://api.fitogram.pro/providers/yogashop/events/public?from=2018-07-31`;
      fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))

        .catch(e => console.log('error', event));
    }





  /* var link = "https://api.fitogram.pro/providers/yogashop/events/public?from=2018-07-31"

   fetch(link)
 .then(function(response) {
   if (response.status !== 200) {
     setState.setContent("There is something with conection");
     return;

         }response.json().then(function(data) {
           var data = data.response.venues[0];
          var time = `<h3>${results.time}</h3>`;
           var name = `<h3>${results.name}</h3>`;
           var place = `<h3>${results.place}</h3>`;
           var trainer = `<h3>${results.trainer}</h3>`;
           var additionalInfo = `<h3>${results.trainer}</h3>`;

           state.setContent(time + name + place + trainer + additionalInfo);
         });
       })
       .catch(function(err) {
      state.setContent("Error");
       });
   }

*/
     render() {
       return (
         <div className="App">
         <img src={this.state.images} alt=""/>
<div class="time">
{this.state.time}
</div>

<div class="name">
{this.state.name }
</div>
<div class="place">
{this.state.text }
</div>

<div class="trainer">
{this.state.trainer }
</div>
         <button>Zur Buchung</button>

           </div>
       );
     }
   }

   export default App;
