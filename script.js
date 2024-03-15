function addRecommendation() {

    let recommendation = document.getElementById("new_recommendation");
    let name = document.getElementById("name");
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");
      var element = document.createElement("div");
      element.setAttribute("class","recommendation");
      element.innerHTML = '"' + recommendation.value + '"';
      if (name.value != "") {
        element.innerHTML = '"' + recommendation.value + '"' + "<br><br>" + "<span>- " + name.value;
      }
      document.getElementById("all-recommendations").appendChild(element);
      showPopup(true);
      recommendation.value = "";
      name.value = "";
    }
  }
  
function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
  