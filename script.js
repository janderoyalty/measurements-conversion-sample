const net = new brain.NeuralNetwork();

const data = [{ input: { handful: 1, tbsp: 2 }, output: { tbsp: 2 } }];

net.train(data);

const handleConversion = () => {
  console.log("SUBMIT");
  const handfulInput = parseFloat(document.getElementById("handful").value);
  const tbspInput = parseFloat(document.getElementById("tbsp").value);

  const updatedAverageTbsp =
    (data[0].output.tbsp + tbspInput) / (data[0].input.handful + handfulInput);

  data.unshift({
    input: { handful: handfulInput, tbsp: tbspInput },
    output: { tbsp: updatedAverageTbsp },
  });

  const currentConversionTbsp = document.getElementById(
    "current-conversion-tbsp"
  );
  currentConversionTbsp.textContent = updatedAverageTbsp.toFixed(2);

	document.getElementById("handful").value = "";
  document.getElementById("tbsp").value = "";

  console.log(JSON.stringify(data));
};

const submitButton = document.getElementById("input-submit-button");
submitButton.addEventListener("click", handleConversion);
