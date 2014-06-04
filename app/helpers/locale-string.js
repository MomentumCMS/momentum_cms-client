export default function(value) {
  if (value === "" || typeof value === 'undefined') {
    return null;
  }else{
    return this.get('content.localeDictionary')[value][0];
  }
}