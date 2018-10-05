const helpers = {
  checkImageSprite(pokemon) {
    let image = '';
    switch (pokemon) {
      case "nidoran-f":
        image = "nidoranf";
        break;
      case "nidoran-m":
        image = "nidoranm";
        break;
      case "deoxys-normal":
        image = "deoxys";
        break;
      default:
       image = pokemon; 
    }
    return image;
  }
}

export default helpers;