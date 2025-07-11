const dictionary = {
  "el que": "edu",
  "hacer": "tuje",
  "importante": "vandi",
  "persona": "tanje",
  "personas": "tanjeur",
  "noimportante": "milvandi"
};

function translate() {
  const input = document.getElementById('input').value.toLowerCase().trim();
  const direction = document.getElementById('direction').value;
  const output = document.getElementById('output');

  let result = input;

  if (direction === "es-to-leji") {
    Object.keys(dictionary).sort((a, b) => b.length - a.length).forEach(key => {
      result = result.replaceAll(key, dictionary[key]);
    });
  } else {
    Object.entries(dictionary).sort(([, b1], [, b2]) => b2.length - b1.length).forEach(([es, leji]) => {
      result = result.replaceAll(leji, es);
    });
  }

  output.innerText = result;
}
