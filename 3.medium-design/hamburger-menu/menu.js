{
    const opener = document.getElementById("mainMenuOpen");
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") opener.blur();
      console.log("dafug", event.key);
    } );
    
    opener.addEventListener("touchstart", () => {
          opener.focus();
      } );
    opener.nextElementSibling.addEventListener("touchstart",  () => {
          opener.blur();
      } );
  }