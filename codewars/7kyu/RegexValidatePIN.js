function validatePIN (pin) {
    if(/^[0-9]+$/.test(pin) && (pin.length == 4 || pin.length == 6))
      return true;
    else
      return false;
  }