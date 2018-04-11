import React from 'react';
import ReactDOM from 'react-dom';

const FormattedArticle = props => {
  {
    if (!props.breedData.error) {
      return (
        <div>
          <div dangerouslySetInnerHTML={{ __html: props.breedData.table }} />
          <button
            style={{
              padding: '10px',
              marginLeft: '20px',
              marginTop: '10px'
            }}
            disabled={!props.breedData.ready}
            onClick={props.onClick}
          >
            Get breed data
          </button>
          <a
            style={{
              padding: '10px',
              marginLeft: '20px'
            }}
            href={props.breedData.url}
          >
            Continue Reading
          </a>
        </div>
      );
    } else {
      return (
        <p>
          Oops looks like an error, please try again. Error:{
            props.breedData.error
          }
        </p>
      );
    }
  }
};
export default FormattedArticle;
