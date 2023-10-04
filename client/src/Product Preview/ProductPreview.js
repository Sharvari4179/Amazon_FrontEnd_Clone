// create a product preview container for the functioning of product preview and copy all the code from app.js and paste inside a div in the return statement and add the classnamefile 26.


import React from "react";
import classes from './ProductPreview.module.css';
import App from "../App";

const ProductPreview = (props) => {
    // also add the currenthour and current min code and del it in app.js if you wish29.
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

   // now make the corresponding changes in the return section and now you can access both heartbeat and time together 39.
    // return(
     

    // <div className={classes.ProductPreview}>
    // <img src='https://imgur.com/iOeUBV7.png' alt='Product Preview' />
    // <div className={classes.TimeSection}> 
    // <p>{`${currentHour}:${currentMinutes}`}</p>
    // </div> 


          
    // {/* <div className={classes.HeartBeatSection}>
    // <i class='fas fa-heartbeat'></i>
    // <p>78</p>
    // </div> */}
    // </div>
    // );


    return(
      <div className={classes.ProductPreview}>
        <img src={props.currentPreviewImage} alt="Product Preview" />
        {
          props.showHeartBeatSection ?

          <div className={classes.HeartBeatSection}>
         <i className='fas fa-heartbeat'></i>
         <p>78</p>
         </div>
         :
         <div className={classes.TimeSection}> 
        <p>{`${currentHour}:${currentMinutes}`}</p>
         </div>

        }
      </div>
    )
}

export default ProductPreview;