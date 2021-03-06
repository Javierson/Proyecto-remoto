

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, FormControl, FormLabel, InputLabel, FormGroup, FormControlLabel, Slider, Grid } from '@material-ui/core'


// const useStyles = makeStyles(({ spacing }) => ({ root: { width: 'auto' }, margin: { height: spacing(3) } })),

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
})),

// marks = [ { value: 0, label: '0°C' }, { value: 20, label: '20°C' }, { value: 37, label: '37°C' }, { value: 100, label: '100°C' } ]

marks = [ { value: 0, label: 'Nulo' }, { value: 1, label: 'Bajo' }, { value: 2, label: 'Medio' }, { value: 3, label: 'Alto' } ]

function valuetext(value) {

// Valor definido en el state

  return value !== 0 ? value : null

}


function valueLabelFormat(item) {
// El valor del icono al seleccionar un valor
  return marks.findIndex( ({ value }) => value === item )

}


export default function SliderField({ XS = 4, Label = 'Nivel del conocimiento' }) {

  const classes = useStyles()

  return <Grid item xs = { XS }><FormControl component="fieldset" className={classes.formControl} fullWidth>
    <FormLabel component="legend">{ Label }</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Slider defaultValue = { 0 } valueLabelFormat = { valueLabelFormat }
              getAriaValueText = { valuetext } // Esto modifica el state
              aria-labelledby = 'discrete-slider-restrict' valueLabelDisplay = 'auto' marks = { marks } min = { 0 } max = { 3 }/>
            }/>
          </FormGroup>
      </FormControl>
      </Grid>

}

