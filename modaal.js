var grijzeAchtergrond = document.createElement('div');
document.body.appendChild(grijzeAchtergrond);
var sluitknop = document.createElement('span');
sluitknop.innerHTML = '&Cross;';
sluitknop.className = 'sluitknop';



var modaal = (function() {
  var modaalVenster = document.createElement('div');
  modaalVenster.className = 'modaal-venster';
  modaalVenster.addEventListener('click', function(e) {
    e.stopPropagation();
  });
  var modaalInhoud = document.createElement('div');
  modaalInhoud.className = 'modaal-inhoud';


  return {
    centeren: function() {
      var boven = Math.max((grijzeAchtergrond.offsetHeight - modaalVenster.offsetHeight)/2,0);
      var links = Math.max((grijzeAchtergrond.offsetWidth - modaalVenster.offsetWidth)/2,0);
      modaalVenster.style.top = boven + 'px';
      modaalVenster.style.left = links + 'px';
    },
    open: function (parameter) {
        console.log("modaal.open functie bereikt");
        console.log(parameter);
        modaalInhoud.appendChild(parameter);
        modaalVenster.appendChild(modaalInhoud);
        modaalVenster.appendChild(sluitknop);

        grijzeAchtergrond.className = 'grijze-achtergrond';
        grijzeAchtergrond.appendChild(modaalVenster);
        modaal.centeren();
        window.addEventListener('resize', modaal.centeren, true);
    },
    sluiten: function() {
      modaalInhoud.innerHTML = '';
      modaalVenster.innerHTML = '';
      grijzeAchtergrond.removeChild(modaalVenster);
      grijzeAchtergrond.className = '';
    }
  }
}());

grijzeAchtergrond.addEventListener('click', modaal.sluiten);
sluitknop.addEventListener('click', modaal.sluiten);
