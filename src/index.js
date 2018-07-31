import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


var images1 = [
  "https://res.cloudinary.com/coursika/image/upload/c_crop,h_435,w_1688,x_0,y_157/a_0/cx5gckujysg0s3bmtcnk",
 ];

 var images2 = [
   "https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/ccimage-shutterstock_517706482.jpg",

  ];

  var images3 = [
    "https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/ccimage-shutterstock_517706482.jpg",

   ];

   var images4 = [
     "https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/ccimage-shutterstock_517706482.jpg",

    ];



ReactDOM.render(
  <div>
<App images={images1} index="0"/>
<App images={images2} index="1"/>
<App images={images3} index="2"/>
<App images={images4} index="3"/>
  </div>, document.getElementById('root'));
registerServiceWorker();
