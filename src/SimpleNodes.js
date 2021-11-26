import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
  Stage,
  Layer,
  /*Rect, */ Text,
  Circle,
  Line /*, Node*/
} from 'react-konva';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    // height: 140,
    height: '100%',
    // width: 100
    width: '100%'
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function SimpleNodes() {
  const classes = useStyles();

  // 11 v 11
  const pitchLength = 120; // valid range 100-130
  const pitchWidth = 80; // valid range 50-100

  const [nodesHome, setNodesHome] = useState([
    {
      id: 'n1',
      x: pitchLength*3-25,
      y: pitchWidth/2*3,
    },
    {
      id: 'n2',
      x: (pitchLength-18)*3,
      y: 1*pitchWidth/5*3,
    },
    {
      id: 'n3',
      x: (pitchLength-18)*3,
      y: 2*pitchWidth/5*3,
    },
    {
      id: 'n4',
      x: (pitchLength-18)*3,
      y: 3*pitchWidth/5*3,
    },
    {
      id: 'n5',
      x: (pitchLength-18)*3,
      y: 4*pitchWidth/5*3,
    },
    {
      id: 'n6',
      x: (pitchLength/2)*3,
      y: 1*pitchWidth/5*3,
    },
    {
      id: 'n7',
      x: (pitchLength/2)*3,
      y: 2*pitchWidth/5*3,
    },
    {
      id: 'n8',
      x: (pitchLength/2)*3,
      y: 3*pitchWidth/5*3,
    },
    {
      id: 'n9',
      x: (pitchLength/2)*3,
      y: 4*pitchWidth/5*3,
    },
    {
      id: 'n10',
      x: 18*3,
      y: 2*pitchWidth/5*3,
    },
    {
      id: 'n11',
      x: 18*3,
      y: 3*pitchWidth/5*3,
    }
  ]);

  const [nodesAway, setNodesAway] = useState([
    {
      id: 'n1',
      x: 25,
      y: pitchWidth/2*3,
    },
    {
      id: 'n2',
      x: 18*3,
      y: 1*pitchWidth/5*3,
    },
    {
      id: 'n3',
      x: 18*3,
      y: 2*pitchWidth/5*3,
    },
    {
      id: 'n4',
      x: 18*3,
      y: 3*pitchWidth/5*3,
    },
    {
      id: 'n5',
      x: 18*3,
      y: 4*pitchWidth/5*3,
    },
    {
      id: 'n6',
      x: (pitchLength/2)*3,
      y: 1*pitchWidth/5*3,
    },
    {
      id: 'n7',
      x: (pitchLength/2)*3,
      y: 2*pitchWidth/5*3,
    },
    {
      id: 'n8',
      x: (pitchLength/2)*3,
      y: 3*pitchWidth/5*3,
    },
    {
      id: 'n9',
      x: (pitchLength/2)*3,
      y: 4*pitchWidth/5*3,
    },
    {
      id: 'n10',
      x: (pitchLength-18)*3,
      y: 2*pitchWidth/5*3,
    },
    {
      id: 'n11',
      x: (pitchLength-18)*3,
      y: 3*pitchWidth/5*3,
    }
  ]);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              {/* <Stage width={window.innerWidth} height={window.innerHeight}> */}

              {/* width/height here sets the overall size of the canvas. need to integrate with size of football pitch so they scale appropriately */}
              <Stage width={pitchLength*3} height={pitchWidth*3}>
                
                {/* Field markings layer */}
                <Layer>
                  {/* Touchline */}
                  <Line
                    points={[0, 0, pitchLength*3, 0, pitchLength*3, pitchWidth*3,0,pitchWidth*3,0,0]}
                    closed
                    stroke="white"
                    fill="green"
                  />
                  {/* Mid field */}
                  <Line
                    points={[(pitchLength/2)*3, 0, (pitchLength/2)*3, pitchWidth*3]}
                    stroke="white"
                  />
                  {/* Center Cirlce */}
                  <Circle 
                    x={(pitchLength/2)*3}
                    y={pitchWidth/2*3}
                    radius={10*3}
                    stroke="white"
                  />
                  {/* Center circle spot */}
                  <Circle 
                    x={(pitchLength/2)*3}
                    y={pitchWidth/2*3}
                    radius={1}
                    stroke="white"
                  />
                  {/* Penalty arc (left) */}
                  <Circle 
                    x={12*3}
                    y={pitchWidth/2*3}
                    radius={10*3}
                    stroke="white"
                  />
                  {/* Penalty box (left) */}
                  <Line 
                    points={[0,(pitchWidth/2-18)*3,18*3,(pitchWidth/2-18)*3,18*3,(pitchWidth/2+18)*3,0,(pitchWidth/2+18)*3]}
                    stroke="white"
                    fill="green"
                    closed
                  />
                  {/* Penalty circle spot (left) */}
                  <Circle 
                    x={12*3}
                    y={pitchWidth/2*3}
                    radius={1}
                    stroke="white"
                  />
                  {/* 6-yd box (left) */}
                  <Line 
                    points={[0,(pitchWidth/2-10)*3,6*3,(pitchWidth/2-10)*3,6*3,(pitchWidth/2+10)*3,0,(pitchWidth/2+10)*3]}
                    stroke="white"
                    closed
                  />
                  {/* Penalty arc (right) */}
                  <Circle 
                    x={(pitchLength-12)*3}
                    y={pitchWidth/2*3}
                    radius={10*3}
                    stroke="white"
                  />
                  {/* Penalty box (right) */}
                  <Line 
                    points={[(pitchLength-18)*3,(pitchWidth/2-18)*3,pitchLength*3,(pitchWidth/2-18)*3,pitchLength*3,(pitchWidth/2+18)*3,(pitchLength-18)*3,(pitchWidth/2+18)*3]}
                    stroke="white"
                    fill="green"
                    closed
                  />
                  {/* Penalty circle spot (right) */}
                  <Circle 
                    x={(pitchLength-12)*3}
                    y={pitchWidth/2*3}
                    radius={1}
                    stroke="white"
                  />
                  {/* 6-yd box (right) */}
                  <Line 
                    points={[(pitchLength-6)*3,(pitchWidth/2-10)*3,pitchLength*3,(pitchWidth/2-10)*3,pitchLength*3,(pitchWidth/2+10)*3,(pitchLength-6)*3,(pitchWidth/2+10)*3]}
                    stroke="white"
                    closed
                  />
                  {/* Corner arc (top left) */}
                  <Circle 
                    x={0}
                    y={0}
                    radius={1*3}
                    stroke="white"
                  />
                  {/* Corner arc (top right) */}
                  <Circle 
                    x={pitchLength*3}
                    y={0}
                    radius={1*3}
                    stroke="white"
                  />
                  {/* Corner arc (bottom left) */}
                  <Circle 
                    x={0}
                    y={pitchWidth*3}
                    radius={1*3}
                    stroke="white"
                  />
                  {/* Corner arc (bottom right) */}
                  <Circle 
                    x={pitchLength*3}
                    y={pitchWidth*3}
                    radius={1*3}
                    stroke="white"
                  />
                  {/* Goal post left-top */}
                  <Circle 
                    x={0}
                    y={(pitchWidth/2-4)*3}
                    radius={1}
                    stroke="white"
                  />
                  {/* Goal post left-bot */}
                  <Circle 
                    x={0}
                    y={(pitchWidth/2+4)*3}
                    radius={1}
                    stroke="white"
                  />
                  {/* Goal post right-top */}
                  <Circle 
                    x={pitchLength*3}
                    y={(pitchWidth/2-4)*3}
                    radius={1}
                    stroke="white"
                  />
                  {/* Goal post right-bot */}
                  <Circle 
                    x={pitchLength*3}
                    y={(pitchWidth/2+4)*3}
                    radius={1}
                    stroke="white"
                  />
                </Layer>

                <Layer>
                  {/* Ball */}
                  <Circle 
                    x={pitchLength/2*3}
                    radius={5}
                    y={pitchWidth/2*3}
                    stroke="yellow"
                    fill="yellow"
                    draggable
                  />
                </Layer>

                {/* Players Layer */}
                <Layer>
                  {nodesHome.map(n => {
                    return (
                      <Circle
                        x={n.x+15}
                        y={n.y}
                        radius={10}
                        key={n.id}
                        opacity={n.opacity}
                        fill="red"
                        stroke="black"
                        draggable
                      />
                    );
                  })}
                </Layer>

                <Layer>
                  {nodesAway.map(n => {
                    return (
                      <Circle
                        x={n.x-15}
                        y={n.y}
                        radius={10}
                        key={n.id}
                        opacity={n.opacity}
                        fill="blue"
                        stroke="black"
                        draggable
                      />
                    );
                  })}
                </Layer>

              </Stage>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
