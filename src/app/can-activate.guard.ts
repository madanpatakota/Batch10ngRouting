import { CanActivateFn } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  
  
  //all right

  // i am goting to prepeare the idenityt from login screen based on the security guard here will give the permission is true of false
  // in case of true you can navigate to the main comp
  // in case of false you cannot navigate to the main comp. you should be stand where you are......
  return false;


};
