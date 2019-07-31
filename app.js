displayContent = () => {
    document.getElementById("main").innerHTML = `<table border="1">
    <tr>
      <td colspan="3"><input type="text" id="result" /></td>
      <td><input type="button" value="c" onclick="clr()" /></td>
    </tr>
    <tr>
      <td><input type="button" value="1" onclick="dis('1')" /></td>
      <td><input type="button" value="2" onclick="dis('2')" /></td>
      <td><input type="button" value="3" onclick="dis('3')" /></td>
      <td><input type="button" value="/" onclick="dis('/')" /></td>
    </tr>
    <tr>
      <td><input type="button" value="4" onclick="dis('4')" /></td>
      <td><input type="button" value="5" onclick="dis('5')" /></td>
      <td><input type="button" value="6" onclick="dis('6')" /></td>
      <td><input type="button" value="-" onclick="dis('-')" /></td>
    </tr>
    <tr>
      <td><input type="button" value="7" onclick="dis('7')" /></td>
      <td><input type="button" value="8" onclick="dis('8')" /></td>
      <td><input type="button" value="9" onclick="dis('9')" /></td>
      <td><input type="button" value="+" onclick="dis('+')" /></td>
    </tr>
    <tr>
      <td><input type="button" value="." onclick="dis('.')" /></td>
      <td><input type="button" value="0" onclick="dis('0')" /></td>
      <!-- solve function call function solve to evaluate value -->
      <td><input type="button" value="=" onclick="solve()" /></td>
      <td><input type="button" value="*" onclick="dis('*')" /></td>
    </tr>
  </table>`;
}
//function that display value 
function dis(val) {
    document.getElementById("result").value += val
}

//function that evaluates the digit and return result 
function solve() {
    try {
        let x = document.getElementById("result").value
        let y = eval(x);
        console.log(y);
        document.getElementById("result").value = y
    }
    catch (err) {
        document.getElementById("result").value = "Error";
    }
}

//function that clear the display 
function clr() {
    document.getElementById("result").value = ""
}

document.addEventListener("keydown", KeyCheck);
function KeyCheck(event) {
    let presentValue = document.getElementById("result").value;
    let keyId = event.keyCode;
    let key = event.key;
    console.log(key);
    console.log(keyId);

    //For backspace
    if (keyId === 8) {
        let newValue = presentValue.substring(0, presentValue.length - 1);
        document.getElementById("result").value = newValue;
    }
    else if (/[0-9()+\-*/.]/.test(key)) {
        document.getElementById("result").value += key;
    }
 else if (key === "=") {
        solve();
    }
}