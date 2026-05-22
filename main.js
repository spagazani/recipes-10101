selects = document.querySelectorAll(".custom-select select");
if (selects.length > 0) {
  selects.forEach((slct) => {
    let clicks = 0;
    slct.addEventListener("click", function (e) {
      clicks++;
      if (clicks == 2) {
        slct.blur();
        clicks = 0;
      }
    });
    slct.addEventListener("blur", function (e) {
      clicks = 0;
    });
  });
}

toggles = document.querySelectorAll(".toggle-heading");
if (toggles.length > 0) {
  toggles.forEach((btn) => {
    btn.addEventListener("click", function () {
      tsib = btn.nextElementSibling;
      if (tsib && tsib.tagName == "UL") {
        if (tsib.style.display == "none") {
          tsib.style.display = "block";
          btn.classList.add("open");
        } else {
          tsib.style.display = "none";
          btn.classList.remove("open");
        }
      }
    });
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

let drop1 = document.getElementById("unit1");
if (drop1) {
  drop1.addEventListener("change", function (e) {
    let drop2 = document.getElementById("unit2");
    while (drop2.firstChild) {
      drop2.removeChild(drop2.firstChild);
    }
    let options = [];
    if (e.target.value == "tsp") {
      options = ["tbsp", "fl oz", "cup", "pint", "quart", "gallon", "ml"];
    }
    if (e.target.value == "tbsp") {
      options = ["tsp", "fl oz", "cup", "pint", "quart", "gallon", "ml"];
    }
    if (e.target.value == "fl oz") {
      options = ["tsp", "tbsp", "cup", "pint", "quart", "gallon", "ml"];
    }
    if (e.target.value == "cup") {
      options = ["tsp", "tbsp", "fl oz", "pint", "quart", "gallon", "ml"];
    }
    if (e.target.value == "pint") {
      options = ["tsp", "tbsp", "fl oz", "cup", "quart", "gallon", "ml"];
    }
    if (e.target.value == "quart") {
      options = ["tsp", "tbsp", "fl oz", "cup", "pint", "gallon", "ml"];
    }
    if (e.target.value == "gallon") {
      options = ["tsp", "tbsp", "fl oz", "cup", "pint", "quart", "ml"];
    }
    if (e.target.value == "ml") {
      options = ["tsp", "tbsp", "fl oz", "cup", "pint", "quart", "gallon"];
    }
    if (e.target.value == "oz") {
      options = ["g", "lbs"];
    }
    if (e.target.value == "g") {
      options = ["oz", "lbs"];
    }
    if (e.target.value == "lbs") {
      options = ["oz", "g"];
    }
    options.forEach(function (val) {
      let o = document.createElement("option");
      o.value = val;
      o.text = val;
      drop2.appendChild(o);
    });
    convertValue(e);
  });
}

let drop2 = document.getElementById("unit2");
if (drop2) {
  drop2.addEventListener("change", function (e) {
    convertValue(e);
  });
}
let inp1 = document.getElementById("inp1");
if (inp1) {
  inp1.addEventListener("input", function (e) {
    convertValue(e);
  });
}

function convertValue(event) {
  let un1 = document.getElementById("unit1").value;
  let un2 = document.getElementById("unit2").value;
  let currVal = 0;
  if (event.type == "input") {
    currVal = parseFloat(event.target.value);
  } else if (event.type == "change") {
    currVal = parseFloat(document.getElementById("inp1").value);
  }
  let conVal = 0;

  let inp2 = document.getElementById("inp2");

  if (un1 == "tsp") {
    if (un2 == "tbsp") {
      conVal = currVal / 3;
    }
    if (un2 == "fl oz") {
      conVal = currVal / 6;
    }
    if (un2 == "cup") {
      conVal = currVal / 48;
    }
    if (un2 == "pint") {
      conVal = currVal / 96;
    }
    if (un2 == "quart") {
      conVal = currVal / 192;
    }
    if (un2 == "gallon") {
      conVal = currVal / 768;
    }
    if (un2 == "ml") {
      conVal = currVal * 4.929;
    }
  }
  if (un1 == "tbsp") {
    if (un2 == "tsp") {
      conVal = currVal * 3;
    }
    if (un2 == "fl oz") {
      conVal = currVal / 2;
    }
    if (un2 == "cup") {
      conVal = currVal / 16;
    }
    if (un2 == "pint") {
      conVal = currVal / 32;
    }
    if (un2 == "quart") {
      conVal = currVal / 64;
    }
    if (un2 == "gallon") {
      conVal = currVal / 256;
    }
    if (un2 == "ml") {
      conVal = currVal * 14.787;
    }
  }
  if (un1 == "fl oz") {
    if (un2 == "tsp") {
      conVal = currVal * 6;
    }
    if (un2 == "tbsp") {
      conVal = currVal * 2;
    }
    if (un2 == "cup") {
      conVal = currVal / 8;
    }
    if (un2 == "pint") {
      conVal = currVal / 16;
    }
    if (un2 == "quart") {
      conVal = currVal / 32;
    }
    if (un2 == "gallon") {
      conVal = currVal / 128;
    }
    if (un2 == "ml") {
      conVal = currVal * 29.574;
    }
  }
  if (un1 == "cup") {
    if (un2 == "tbsp") {
      conVal = currVal * 16;
    }
    if (un2 == "tsp") {
      conVal = currVal * 48;
    }
    if (un2 == "fl oz") {
      conVal = currVal * 8;
    }
    if (un2 == "pint") {
      conVal = currVal / 2;
    }
    if (un2 == "quart") {
      conVal = currVal / 4;
    }
    if (un2 == "gallon") {
      conVal = currVal / 16;
    }
    if (un2 == "ml") {
      conVal = currVal * 236.6;
    }
  }
  if (un1 == "pint") {
    if (un2 == "tsp") {
      conVal = currVal * 96;
    }
    if (un2 == "tbsp") {
      conVal = currVal * 32;
    }
    if (un2 == "fl oz") {
      conVal = currVal * 16;
    }
    if (un2 == "cup") {
      conVal = currVal * 2;
    }
    if (un2 == "quart") {
      conVal = currVal / 2;
    }
    if (un2 == "gallon") {
      conVal = currVal / 8;
    }
    if (un2 == "ml") {
      conVal = currVal * 473.2;
    }
  }
  if (un1 == "quart") {
    if (un2 == "tsp") {
      conVal = currVal * 192;
    }
    if (un2 == "tbsp") {
      conVal = currVal * 64;
    }
    if (un2 == "fl oz") {
      conVal = currVal * 32;
    }
    if (un2 == "cup") {
      conVal = currVal * 4;
    }
    if (un2 == "pint") {
      conVal = currVal * 2;
    }
    if (un2 == "gallon") {
      conVal = currVal / 4;
    }
    if (un2 == "ml") {
      conVal = currVal * 946.4;
    }
  }
  if (un1 == "gallon") {
    if (un2 == "tsp") {
      conVal = currVal * 768;
    }
    if (un2 == "tbsp") {
      conVal = currVal * 256;
    }
    if (un2 == "fl oz") {
      conVal = currVal * 128;
    }
    if (un2 == "cup") {
      conVal = currVal * 16;
    }
    if (un2 == "pint") {
      conVal = currVal * 8;
    }
    if (un2 == "quart") {
      conVal = currVal * 4;
    }
    if (un2 == "ml") {
      conVal = currVal * 3785;
    }
  }
  if (un1 == "ml") {
    if (un2 == "tsp") {
      conVal = currVal / 4.929;
    }
    if (un2 == "tbsp") {
      conVal = currVal / 14.787;
    }
    if (un2 == "fl oz") {
      conVal = currVal / 29.574;
    }
    if (un2 == "cup") {
      conVal = currVal / 236.6;
    }
    if (un2 == "pint") {
      conVal = currVal / 473.2;
    }
    if (un2 == "quart") {
      conVal = currVal / 946.4;
    }
    if (un2 == "gallon") {
      conVal = currVal / 3785;
    }
  }
  if (un1 == "oz") {
    if (un2 == "g") {
      conVal = currVal * 28.35;
    }
    if (un2 == "lbs") {
      conVal = currVal / 16;
    }
  }

  if (un1 == "lbs") {
    if (un2 == "g") {
      conVal = currVal * 453.6;
    }
    if (un2 == "oz") {
      conVal = currVal * 16;
    }
  }

  if (un1 == "g") {
    if (un2 == "oz") {
      conVal = currVal / 28.35;
    }
    if (un2 == "lbs") {
      conVal = currVal / 453.6;
    }
  }

  inp2.value = conVal;
  if (currVal == "") {
    inp2.value = "";
  }
}

let steps = document.querySelectorAll("ol.inner.recipe li");
if (steps.length > 0) {
  steps.forEach(function (step) {
    step.addEventListener("click", function () {
      step.firstElementChild.classList.toggle("striked");
    });
  });
}
