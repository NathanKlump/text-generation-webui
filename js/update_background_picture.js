function updateBackgroundPicture() {
    const timestamp = new Date().getTime(); 
    
    document.getElementById("chat-col").style.backgroundImage = `url('/file/cache/bgp_character.png?${timestamp}')`;
    document.getElementById("chat-col").style.backgroundSize = "cover";
    document.getElementById("chat-col").style.backgroundPosition = "center";
  }
  