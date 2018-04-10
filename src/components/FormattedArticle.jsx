import React from 'react';
import ReactDOM from 'react-dom';

const FormattedArticle = props => {
  {
    //console.log(props);
    if (!props.breedData.error) {
      return (
        <div>
          <figure>
            <figcaption>{props.breedData.name}</figcaption>
            <img src={props.breedData.img} />
          </figure>
          <p>{props.breedData.otherNames}</p>
          <p>{props.breedData.commonNicknames}</p>
          <p>{props.breedData.description}</p>
          <button disabled={!props.breedData.ready} onClick={props.onClick}>Get breed data</button>
        </div>
      );
    } else {
      return <p>{props.breedData.error}</p>;
    }
    
  }
};
export default FormattedArticle;
