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
// import { Solarize } from 'konva/types/filters/Solarize';

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

  const [nodes, setNodes] = useState([
    {
      id: 'n1',
      x: pitchLength*3,
      y: pitchWidth/2*3,
      //r: 10,
    },
    {
      id: 'n2',
      x: (pitchLength-18)*3,
      y: 1*pitchWidth/5*3,
      //r: 10
    },
    {
      id: 'n3',
      x: (pitchLength-18)*3,
      y: 2*pitchWidth/5*3,
      //r: 10,
    },
    {
      id: 'n4',
      x: (pitchLength-18)*3,
      y: 3*pitchWidth/5*3,
      //r: 10,
    },
    {
      id: 'n5',
      x: (pitchLength-18)*3,
      y: 4*pitchWidth/5*3,
      //r: 10,
    },
    {
      id: 'n6',
      x: (pitchLength/2)*3,
      y: 1*pitchWidth/5*3,
      //r: 10,
    },
    {
      id: 'n7',
      x: (pitchLength/2)*3,
      y: 2*pitchWidth/5*3,
      //r: 10,
    },
    {
      id: 'n8',
      x: (pitchLength/2)*3,
      y: 3*pitchWidth/5*3,
      //r: 10,
    },
    {
      id: 'n9',
      x: (pitchLength/2)*3,
      y: 4*pitchWidth/5*3,
      //r: 10,
    },
    {
      id: 'n10',
      x: 18*3,
      y: 2*pitchWidth/5*3,
      //r: 10,
    },
    {
      id: 'n11',
      x: 18*3,
      y: 3*pitchWidth/5*3,
      //r: 10
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
                <Layer>
                  {/* Touchline */}
                  <Line
                    points={[0, 0, pitchLength*3, 0, pitchLength*3, pitchWidth*3,0,pitchWidth*3,0,0]}
                    // closed
                    stroke="black"
                  />
                  {/* Mid field */}
                  <Line
                    points={[(pitchLength/2)*3, 0, (pitchLength/2)*3, pitchWidth*3]}
                    stroke="black"
                  />
                  {/* Center Cirlce */}
                  <Circle 
                    x={(pitchLength/2)*3}
                    y={pitchWidth/2*3}
                    radius={10*3}
                    stroke="black"
                  />
                  {/* Center circle spot */}
                  <Circle 
                    x={(pitchLength/2)*3}
                    y={pitchWidth/2*3}
                    radius={1}
                    stroke="black"
                  />
                  {/* Penalty arc (left) */}
                  <Circle 
                    x={12*3}
                    y={pitchWidth/2*3}
                    radius={10*3}
                    stroke="black"
                  />
                  {/* Penalty box (left) */}
                  <Line 
                    points={[0,(pitchWidth/2-18)*3,18*3,(pitchWidth/2-18)*3,18*3,(pitchWidth/2+18)*3,0,(pitchWidth/2+18)*3]}
                    stroke="black"
                    fill="white"
                    closed
                  />
                  {/* Penalty circle spot (left) */}
                  <Circle 
                    x={12*3}
                    y={pitchWidth/2*3}
                    radius={1}
                    stroke="black"
                  />
                  {/* 6-yd box (left) */}
                  <Line 
                    points={[0,(pitchWidth/2-10)*3,6*3,(pitchWidth/2-10)*3,6*3,(pitchWidth/2+10)*3,0,(pitchWidth/2+10)*3]}
                    stroke="black"
                    fill="white"
                    closed
                  />
                  {/* Penalty arc (right) */}
                  <Circle 
                    x={(pitchLength-12)*3}
                    y={pitchWidth/2*3}
                    radius={10*3}
                    stroke="black"
                  />
                  {/* Penalty box (right) */}
                  <Line 
                    points={[(pitchLength-18)*3,(pitchWidth/2-18)*3,pitchLength*3,(pitchWidth/2-18)*3,pitchLength*3,(pitchWidth/2+18)*3,(pitchLength-18)*3,(pitchWidth/2+18)*3]}
                    stroke="black"
                    fill="white"
                    closed
                  />
                  {/* Penalty circle spot (right) */}
                  <Circle 
                    x={(pitchLength-12)*3}
                    y={pitchWidth/2*3}
                    radius={1}
                    stroke="black"
                  />
                  {/* 6-yd box (right) */}
                  <Line 
                    points={[(pitchLength-6)*3,(pitchWidth/2-10)*3,pitchLength*3,(pitchWidth/2-10)*3,pitchLength*3,(pitchWidth/2+10)*3,(pitchLength-6)*3,(pitchWidth/2+10)*3]}
                    stroke="black"
                    fill="white"
                    closed
                  />
                  {/* Corner arc (top left) */}
                  <Circle 
                    x={0}
                    y={0}
                    radius={1*3}
                    stroke="black"
                  />
                  {/* Corner arc (top right) */}
                  <Circle 
                    x={pitchLength*3}
                    y={0}
                    radius={1*3}
                    stroke="black"
                  />
                  {/* Corner arc (bottom left) */}
                  <Circle 
                    x={0}
                    y={pitchWidth*3}
                    radius={1*3}
                    stroke="black"
                  />
                  {/* Corner arc (bottom right) */}
                  <Circle 
                    x={pitchLength*3}
                    y={pitchWidth*3}
                    radius={1*3}
                    stroke="black"
                  />
                  {/* Goal post left-top */}
                  <Circle 
                    x={0}
                    y={(pitchWidth/2-4)*3}
                    radius={1}
                    stroke="black"
                  />
                  {/* Goal post left-bot */}
                  <Circle 
                    x={0}
                    y={(pitchWidth/2+4)*3}
                    radius={1}
                    stroke="black"
                  />
                  {/* Goal post right-top */}
                  <Circle 
                    x={pitchLength*3}
                    y={(pitchWidth/2-4)*3}
                    radius={1}
                    stroke="black"
                  />
                  {/* Goal post right-bot */}
                  <Circle 
                    x={pitchLength*3}
                    y={(pitchWidth/2+4)*3}
                    radius={1}
                    stroke="black"
                  />
                </Layer>

                {/* Players Layer */}
                <Layer>
                  {nodes.map(n => {
                    return (
                      <Circle
                        x={n.x}
                        y={n.y}
                        radius={10}
                        key={n.id}
                        opacity={n.opacity}
                        fill="green"
                        draggable
                        // onMouseEnter={e => {
                        //   // increaseOpacity(e, n.id, nodes, '1')
                        //   // increaseOpacityOther(e, n.linked2, nodes2, '2')
                        // }
                        // }
                        // onMouseLeave={e => {
                        //   // decreaseOpacity(e, nodes, '1')
                        //   // decreaseOpacity(e, nodes2, '2')
                        // }
                        // }
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
