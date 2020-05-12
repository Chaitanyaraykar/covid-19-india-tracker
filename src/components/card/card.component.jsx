import React, { useEffect, useState } from 'react';

import './card.styles.scss';
import { fetchData } from '../../api';

import { Grid, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';


const Card = ({ changedCardData }) => {
    if (Object.keys(changedCardData).length === 0) {
        return (
            <center>
                Loading...
            </center>
        )
    }

    const { infected, recovered, deaths, lastUpdate } = changedCardData;

    return (
        <Grid container className='grid-container'>
            <Grid item className={`infected common-to-card`}>
                <CardContent>
                    <Typography><b>Infected</b></Typography>
                    <Typography>
                        <CountUp start={0} end={infected} duration={1.5} separator=',' />
                    </Typography>
                    <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography>Number of affected by COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item className={`recovered common-to-card`}>
                <CardContent>
                    <Typography><b>Recovered</b></Typography>
                    <Typography>
                        <CountUp start={0} end={recovered} duration={1.5} separator=',' />
                    </Typography>
                    <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography>Number of recoveries from COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item className={`deaths common-to-card`}>
                <CardContent>
                    <Typography><b>Deaths</b></Typography>
                    <Typography>
                        <CountUp start={0} end={deaths} duration={1.5} separator=',' />
                    </Typography>
                    <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography>Number of deaths from COVID-19</Typography>
                </CardContent>
            </Grid>
        </Grid>
    )
}

export default Card;
