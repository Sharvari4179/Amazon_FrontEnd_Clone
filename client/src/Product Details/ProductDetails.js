// this is to write for the container ProductData in app;.js
// copy all the code of Product data here as well as make a module.css file and add all the fonts there and add the necessary imports in app.js file  29.

import React from "react";
import classes from './ProductDetails.module.css';
// dont forget to import the productdata file 31.
import ProductData from "../Utils/ProductData";

 const ProductDetails = (props) => {
  // now lets try printing it in the console you can comment it later we dont need it 33.
  // console.log(props.data);

  // for 35.
  // const colorOptions = props.data.colorOptions.map((item,pos) => {
  //   return(
  //   <img className={classes.ProductImage} src={item.imageUrl} alt={item.styleName} key={pos} />
  //   );
  // })

  // for 36. modify the above code as
  const colorOptions = props.data.colorOptions.map((item,pos) => {
    const classArr= [classes.ProductImage]
    // now change 47.
    // if (pos === 0) {
      if (pos === props.currentPreviewImagePos) {
      classArr.push(classes.SelectedProductImage);
    }
      return(
        // noe add the property here 43.
      <img className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => props.onColorOptionClick(pos)} />
      );
    })

    // for button 38.
    const featureList = props.data.featureList.map((item,pos) => {
      const classArr= [classes.FeatureItem]
      // now change here 47.
       if (pos === 0) {
        classArr.push(classes.SelectedFeatureItem);
      }
        return(
          // 52.
          // <button key={pos} className={classArr.join(' ') }>{item}</button>
          <button onClick={() => props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ') }>{item}</button>
        );
      })

    return(
      // rn all data here comes from a local file called product data but in reality it comes from the backend so go to app.js and import {component} and convert fuction code to class code with render in it 31.
      // now insted of productdata.title we can use props.data.title and same for description 34.
        <div> 
          {/* <h1 className={classes.Producttitle}>{ProductData.title}</h1>
        <p className={classes.ProductDescription}>{ProductData.description}</p> */}
        <h1 className={classes.Producttitle}>{props.data.title}</h1>
        <p className={classes.ProductDescription}>{props.data.description}</p>


        {/* add h3 and div tag for select color 13. */}
        <h3 className={classes.SectionHeading}>Select Color</h3>
        <div >
          {/* ass the selectedproduct image to one of the img to consider it selected for time being 15. */}
          {/* now lets render these images dynamically comment all these images and add a coloroption tag 35. */}
          {colorOptions}
          {/* now for the selected watch as shown below what we have to do is 36. */}
          {/* <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src='https://imgur.com/iOeUBV7.png' alt='Black Strap Watch' />
          <img className={classes.ProductImage} src='https://imgur.com/PTgQlim.png' alt='Red Strap Watch' />
          <img className={classes.ProductImage} src='https://imgur.com/Mplj1YR.png' alt='Blue Strap Watch' />
          <img className={classes.ProductImage} src='https://imgur.com/xSIK4M8.png' alt='Purple Strap Watch' /> */}
        </div>
        {/* add features div having same fonts as select color so same class name and add the Selected feature item as array 16. */}
        <h3 className={classes.SectionHeading}>Features</h3>
        <div>
          {/* now do the same for button 37. */}
          {featureList}
          {/* <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>
          <button className={classes.FeatureItem}>Heart Rate</button> */}
        </div>
        {/* add the buy now button and add fonts in .module file 18. */}
        <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
    );
 }

 export default ProductDetails;