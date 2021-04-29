# Rate Tuner

This project is intended to simplify rate tuning. Compare Betaflight, Actual and KISS rates instantly and automatically convert between them.


To convert:
Select the original profile as "Reference profile" and assign the parameters you want to replicate. Select the new target profile as "Profile". Click "Replicate this" and wait a few seconds.

NOTE: Sometimes you may get negative parameters. Usually this can be resolved by just trying again a few times.



Known bugs:
* Hovering the graph cycles between old parameters
* Auto tuning may return parameters outside the valid ranges.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
