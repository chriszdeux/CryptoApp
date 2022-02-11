export const removeHtml = ( string ) => {
  if( string === null || string === '' ) {
    return false
  } else {
    string = string.toString();
    // debugger
    return string.replace( /(<([^>]+)>)/ig, '');
  }
}