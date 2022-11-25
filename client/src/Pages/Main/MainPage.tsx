import React from 'react';
import classes from './MainPage.module.scss'

interface MainPageProps {
  uuid?: string;
}

function MainPage({
  uuid,
}: MainPageProps) {
  return (
    <div className={classes.btn}>Main</div>
  );
}

export default MainPage;