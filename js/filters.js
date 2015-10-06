
//inject built in $filter object so we can use it in our filter 
app.filter("dabbleDate", function($filter){
  return function filter(value,format) {
    console.log(value, format);
    if(value) {
      value = Date.parse(value);
    }
 //now we return the built in $filter but can pass it our own format and value   
 //$filter('filter')(array, expression, comparator)
    return $filter('date')(value, format);
  }

});