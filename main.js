const xValue = document.getElementById("x-value");
const yValue = document.getElementById("y-value");
const CalculatorBotton = document.getElementById("calculator-botton");
const ExeuclidResult = document.getElementById("result");
const ResultButton = document.getElementById("result-button");

let s = 0;
const idiv = function (a, b) {
  if (b !== 0) {
    s = Math.floor(Math.abs(a) / b);
    if (a > 0) {
      return s;
    } else {
      return -s;
    }
  }
};

let Flag, T, A, B, G, U, V, W, AA, BB, GG, Q;

const exeuclid = function (X, Y) {
  Flag = 0;
  if (X < Y) {
    T = X;
    X = Y;
    Y = T;
    Flag = 1;
  }
  A = 1;
  B = 0;
  G = X;
  U = 0;
  V = 1;
  W = Y;
  while (W > 0) {
    Q = idiv(G, W);
    AA = A;
    A = U;
    BB = B;
    B = V;
    GG = G;
    G = W;
    U = AA - Q * U;
    V = BB - Q * V;
    W = GG - Q * W;
  }
  if (A < 0) {
    A = "(" + A + ")";
  } else if (B < 0) {
    B = "(" + B + ")";
  }
  if (Flag === 0) {
    return A + "* X +" + B + "* Y =" + G;
  } else {
    return B + "* X +" + A + "* Y =" + G;
  }
};

CalculatorBotton.onclick = function () {
  if (xValue.value != "" && yValue.value != "") {
    ExeuclidResult.value = exeuclid(xValue.value, yValue.value);
  }
};

ResultButton.onclick = function () {
  xValue.value = "";
  yValue.value = "";
  ExeuclidResult.value = "";
};
