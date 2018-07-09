import React from 'react';
export default function ViewLoadingComponent({ error, pastDelay }) {
    console.log(error, pastDelay)
    if (error) {
      return <div>Error!</div>;
    } else if (pastDelay) {
      return <div>Loading...</div>;
    } else {
      return <div></div>;
    }
}