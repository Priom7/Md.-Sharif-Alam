import React from "react";

function Skills() {
  return (
    <div className='skill'>
      <h1 className='skill__header'>Skills</h1>
      <div className='skill__details'>
        <div
          className='skill__detailsLanguages'
          style={{ backgroundColor: "yellow" }}
        >
          <div className='skill__detailsLanguagesHeader'>
            Languages
          </div>
          <div className='skill__detailsLanguages_node'>
            Node JS
          </div>
          <div className='skill__detailsLanguages_js'>
            JavaScript
          </div>
          <div className='skill__detailsLanguages_java'>
            Java
          </div>
          <div className='skill__detailsLanguages_php'>
            php
          </div>
          <div className='skill__detailsLanguages_c'>C</div>
        </div>

        <div
          className='skill__detailsDatabase'
          style={{ backgroundColor: "green" }}
        >
          <div className='skill__detailsDatabaseHeader'>
            Database
          </div>
          <div className='skill__detailsLanguages_mysql'>
            MySQL
          </div>
          <div className='skill__detailsLanguages_mongodb'>
            MongoDB
          </div>
          <div className='skill__detailsLanguages_firebase'>
            Firebase
          </div>
          <div className='skill__detailsLanguages_firestore'>
            Firestore
          </div>
        </div>

        <div
          className='skill__detailsOs'
          style={{ backgroundColor: "blue" }}
        >
          <div className='skill__detailsOsHeader'>
            Operating System
          </div>
          <div className='skill__detailsLanguages_windows'>
            Windows
          </div>
          <div className='skill__detailsLanguages_linux'>
            Linux
          </div>
        </div>
        <div
          className='skill__detailsFramework'
          style={{ backgroundColor: "pink" }}
        >
          <div className='skill__detailsFrameworkHeader'>
            Framework & Libraries
          </div>
          <div className='skill__detailsFramework_express'>
            Express JS
          </div>
          <div className='skill__detailsFramework_react'>
            React JS
          </div>
          <div className='skill__detailsFramework_laravel'>
            Laravel
          </div>
          <div className='skill__detailsFramework_flexbox'>
            FlexBox
          </div>
          <div className='skill__detailsFramework_material'>
            Material UI
          </div>
          <div className='skill__detailsFramework_bootstrap'>
            Bootstrap
          </div>
        </div>

        <div
          className='skill__detailsHosting'
          style={{ backgroundColor: "gray" }}
        >
          <div className='skill__detailsHostingHeader'>
            Hosting
          </div>
          <div className='skill__detailsHosting_netlify'>
            Netlify
          </div>
          <div className='skill__detailsHosting_heroku'>
            Heroku
          </div>
          <div className='skill__detailsHosting_firebase'>
            Firebase Hosting
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
