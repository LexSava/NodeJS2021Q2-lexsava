const moduleErrors = require('./errors')

const { errAction, errActionValue, errShift, errShiftValue } = moduleErrors;
const checkArgv = (action, shift) => {
  if (!action) {
    errAction()
    process.exit(1);
  }

  if (action !== 'encode' && action !== 'decode') {
    errActionValue()
    process.exit(1);
  }

  if (!shift) {
    errShift();
    process.exit(1);
  }

  if (typeof shift !== 'number' || !Number.isInteger(shift)) {
    errShiftValue();
    process.exit(1);
  }
};



module.exports = {
  checkArgv
};