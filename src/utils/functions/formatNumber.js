export const formatNumber = ( number ) => {
  // debugger
  if( number != undefined || number != null ) {
    // debugger
    if(number > 0 && number < 1) {
      // debugger
      return number.toFixed(8) 
    } else {
      // debugger
      return Intl.NumberFormat().format(number.toFixed(4))
    }

  }
  
  return null
  // return Intl.NumberFormat().format(number.toFixed(2))
}