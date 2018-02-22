export function titleCase(str) {
  /* returns the title case of a respective sentence 
   * Eg: titleCase("sHoRt AnD sToUt") should return "Short And Stout".
   */
  return (str !== '') ? str.trim().toLowerCase().split(' ').map(function(v) {
    return v.split('')
  }).map(function(v) {
    v[0] = (v == '') ? '' : v[0].toUpperCase()
    return v.join('')
  }).join(' ') : ''
}
