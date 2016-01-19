module.exports = {
  parseHex(v) {
    return new Buffer(v, 'hex').toString();
  },
  parseTimestamp(v) {
    var match = /^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})[SW]$/.exec(v);
    if (! match) throw new Error('INVALID_TIMESTAMP');
    return new Date(
      2000 + Number(match[1]), // year
      Number(match[2]) - 1,    // month
      Number(match[3]),        // day
      Number(match[4]),        // hours
      Number(match[5]),        // minutes
      Number(match[6])         // seconds
    );
  }
};
