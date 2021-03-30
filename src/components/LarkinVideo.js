import React, { Component } from 'react';
import VideoPlayer from 'react-simple-video-player';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  video: {
    margin: "20px"
  }
}));

const LarkinHeader = (props) => {
  return (
    <Container className={useStyles().video}>
      <VideoPlayer
        width={"100%"}
        height={"100%"}
        url="larkin.mp4" />
    </Container>
  )
};

export default LarkinHeader;
