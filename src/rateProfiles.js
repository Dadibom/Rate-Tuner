function clamp (n, minn, maxn) {
   return Math.max(Math.min(maxn, n), minn)
}

const rateFunctions = {
  'betaflight': {
    name: 'Betaflight',
    parameters: {
      rc_rate: 1.2,
      super_rate: 0.2,
      expo: 0.1,
    },
    formula (stick, {rc_rate, super_rate, expo}) {
      const absRcCommand = Math.abs(stick);

      if(rc_rate > 2.0)
          rc_rate = rc_rate + (14.54 * (rc_rate - 2.0))

      if(expo != 0)
          stick = stick * Math.abs(stick)**3 * expo + stick * (1.0 - expo)

      let angleRate = 200.0 * rc_rate * stick;
      if(super_rate != 0){
          const rcSuperFactor = 1.0 / (clamp(1.0 - absRcCommand * (super_rate), 0.01, 1.00))
          angleRate *= rcSuperFactor
      }

      return angleRate;
    },
  },
  'actual': {
    name: 'Actual',
    parameters: {
      centr: 200,
      max: 670,
      expo: 0.57,
    },
    formula (stick, {centr, max, expo}) {
      // Expo factor
      const h = stick * (Math.pow(stick, 5) * expo + (stick * (1 - expo)));
      return (centr * stick) + ((max - centr) * h);
    },
  },
  'kiss': {
    name: 'Kiss',
    parameters: {
      rc_rate: 1.55,
      rate: 0.69,
      rc_curve: 0.23,
    },
    formula (stick, {rc_rate, rate, rc_curve}) {
      const kissRpyUseRates = 1 - Math.abs(stick) * rate
      const kissRxRaw = stick * 1000
      const kissTempCurve = (kissRxRaw * kissRxRaw / 1000000)
      stick = ((stick * kissTempCurve) * rc_curve + stick * (1 - rc_curve)) * (rc_rate / 10)
      return ((2000.0 * (1.0 / kissRpyUseRates)) * stick)
    },
  },
};

module.exports = rateFunctions;
