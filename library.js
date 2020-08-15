function hasCollided(a,b){
    if(b.x-a.x<(a.width+b.width)/2){
      return true;
    }
    else{
      return false;
    }
}