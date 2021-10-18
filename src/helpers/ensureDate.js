function ensureDate(date){
  const yesterday = new Date(date)

  yesterday.setDate(yesterday.getDate() - 1)

  return yesterday.toLocaleDateString()
          .replace(/\//g,'-')
          .split('-')
          .reverse()
          .join('-')
}

module.exports = ensureDate;
