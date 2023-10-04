import logo from './logo.svg';
// convert app.css to app.module.css and add classes to it as that it how it is with .modules file 3.
import classes from './App.module.css';
import ProductData from './Utils/ProductData';
import ProductPreview from './Product Preview/ProductPreview';
import ProductDetails from './Product Details/ProductDetails';
import Topbar from './Topbar/Topbar';
import React, {Component} from 'react';

// do as mentioned in step 31. and then add state to it and import productdata file in state 32.
class App extends Component {
  state = {
    productData : ProductData,
    // and now to show heartbeat and time as per clickiing in the product preview section 38.
    // currentPreviewImage : 'https://imgur.com/PTgQlim.png',
    // rn our project only has pos = 0 but for all pos what we can do is comment out the currentpreviewimg and add this 44.
    currentPreviewImagePos : 0,

    showHeartBeatSection: false,
  }

  // noe to add functionality to the watch band colour changes what we have to do is whenever we click in a particular img our currentpreviewimage changes 40.
  // so we have to change this code as well 45.
  //  onColorOptionClick = (pos) => {
  //   const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl
  //   this.setState({currentPreviewImage: updatedPreviewImage});
  //  }


  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos: pos});
   }

// do the same for feature buttons 50.
   onFeatureItemClick = (pos) => {
   let updatedState = false;
    if (pos === 1){
      updatedState = true;
    }
    this.setState({showHeartBeatSection: updatedState});

   }



  // in case the time is 1:45 to show it as 01:45 21.
  // const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  // const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
render(){
  return (
    <div className="App">
      <Topbar />
      {/* <header className="App-header"> */}
        {/* give the classname as in the .module file 4. */}
         {/* <nav className={classes.Topbar}>
          <img src='https://www.freeiconspng.com/thumbs/amazon-icon/amazon-icon-8.png' alt='amazon logo' />
        </nav> 
      </header> */}

{/* cretae a 2 div tags with class name maincontainer and ProductPreview and paste the img url 5. */}
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          {/* now instead of all this code in productpreview we can just add the product preview tag 28. */}
          {/* make changes here as well 46. */}
          {/* <ProductPreview currentPreviewImage={this.state.currentPreviewImage} showHeartBeatSection={this.state.showHeartBeatSection}></ProductPreview> */}

          <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
          showHeartBeatSection={this.state.showHeartBeatSection} />
          {/* <img src='https://imgur.com/iOeUBV7.png' alt='Product Preview' /> */}

          {/* to add the current time to the watch 19. */}
          {/* <div className={classes.TimeSection}> */}
            {/* make the changes here 22. */}
            {/* <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p> */}
            {/* <p>{`${currentHour}:${currentMinutes}`}</p>
          </div> */}


          {/* do the same for heart rate that you did for time just dont forget to comment the time div and add the heart image 22. */}
          {/* <div className={classes.HeartBeatSection}>
            <i class='fas fa-heartbeat'></i>
            <p>78</p>
          </div> */}
          
        </div>
      
{ /* create another div for Product data 6. */ }

        <div className={classes.ProductData}>

          {/* now we can comment all the code in productdata and add the product details tag instead 30. */}
          {/* now to check if data can be accesses  comment productdetails and make new 32. */}
          {/* <ProductDetails /> */}
          {/* now add this property to the producrdetails 41. */}
          {/* changes 48. */}
          {/* <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} /> */}

          {/* 51. */}
          {/* <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos}/> */}
          <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick={this.onFeatureItemClick}/>
{/* add h1 and p  tag 8. */}
          {/* <h1 className={classes.Producttitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>{ProductData.description}</p> */}

          {/* add h3 and div tag for select color 13. */}
          {/* <h3 className={classes.SectionHeading}>Select Color</h3> */}
          {/* <div > */}
            {/* ass the selectedproduct image to one of the img to consider it selected for time being 15. */}
            {/* <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src='https://imgur.com/iOeUBV7.png' alt='Black Strap Watch' />
            <img className={classes.ProductImage} src='https://imgur.com/PTgQlim.png' alt='Red Strap Watch' />
            <img className={classes.ProductImage} src='https://imgur.com/Mplj1YR.png' alt='Blue Strap Watch' />
            <img className={classes.ProductImage} src='https://imgur.com/xSIK4M8.png' alt='Purple Strap Watch' />
          </div> */}
          {/* add features div having same fonts as select color so same class name and add the Selected feature item as array 16. */}
          {/* <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>
            <button className={classes.FeatureItem}>Heart Rate</button>
          </div> */}
          {/* add the buy now button and add fonts in .module file 18. */}
          {/* <button className={classes.PrimaryButton}>Buy Now</button> */}
        </div>
      </div>
    </div>
  );
        }
}

export default App;



//change homepage html code 1.