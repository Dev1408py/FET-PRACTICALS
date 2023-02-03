export function validate_info(name,pass){
  if(name=='dev' && pass=='1234'){
    return 'Valid user';
  }
  return 0;
}
