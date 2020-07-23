import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, makeStyles } from "@material-ui/core";
import useWebAnimations, { fadeInLeft } from "@wellyshen/use-web-animations";

const useStyles = makeStyles({
  text: {
    "marginLeft": "auto",
    "marginRight": "auto",
    "marginTop": "50px"
  },
  image: {
    "marginRight": "auto",
    "marginTop": "50px",
    "marginLeft": "auto"
  }
})

function Common({ name, imgsrc, visit, btname }) {
  const { ref } = useWebAnimations({
    keyframes: [
      { "transform": "translateY(20px)" },
      { "transform": "translateY(0px)" },
    ],
    timing: {
      duration: 1000,
      direction: "alternate",
      iterations: Infinity,
    }
  })

  const { ref: ref1 } = useWebAnimations({ ...fadeInLeft });

  const classes = useStyles();
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={5} className={classes.text} ref={ref1}>
          <h1>{name}<br /><strong className="brand-name">Mustufa's Tech</strong></h1>
          <h2 className="my-3">We are a team of talented developers making websites</h2>
          <div className="mt-3">
            <Link to={visit} style={{ "textDecoration": "none" }}><button style={{ "borderRadius": "35%", "padding": "10px", "color": "blue", "borderColor": "blue" }}>{btname}</button></Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={5} className={classes.image}>
          <img ref={ref} src={imgsrc} alt="web dev" border="0" width="600" height="300" />
        </Grid>
      </Grid>
    </>
  );
}

export default Common;