import React from 'react';
import fillerText from './createParagraphs';

const paragraphs = fillerText(5);

export default class Paragraphs extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Crypto Ipsum</h1>
            <p>Crypto filler text for all your front end needs.</p>
          </div>
          <div className="col-8 col-offset-2">
            {paragraphs.split('\n').map( (para, i) =>
              <p key={i}>{para}</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}