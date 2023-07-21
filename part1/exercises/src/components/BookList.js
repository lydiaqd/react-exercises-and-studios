import React from 'react';
import classes from './MovieList.module.css';

export default function BookList() {
   let pageTitle = "New Book Releases";
   let book1 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbooksrelease.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fwtw2-e1590611594623-0x0.jpg&f=1&nofb=1&ipt=5aba90b3ded0e2c86e5c86119c5488237f47bac3b1fa1e2dd7a50248260d8d47&ipo=images";
   let book2 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.carryonharry.com%2Fwp-content%2Fuploads%2F2021%2F06%2FA-New-Now_cover-2-MB-722x1024.jpg&f=1&nofb=1&ipt=a182cf9121731c57bf3053aa2100795da83697fc75bf609163a495c1b2feb290&ipo=images";
   let book3 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F91OvkAQe05L.jpg&f=1&nofb=1&ipt=8746629330b4bec9a07e5d0cbfa26fc28fba62a098b066e22a71a0a5ca725a7d&ipo=images";

   return (
      <div>
         <h3 className = {classes.movieHeading}>{pageTitle}</h3>
         <img src={book1} alt="Walk the Wire"  width="300"/>
         <img src={book2} alt="A New Now"  width="300"/>
         <img src={book3} alt="Neighbors"  width="300"/>
      </div>      
   );
}
