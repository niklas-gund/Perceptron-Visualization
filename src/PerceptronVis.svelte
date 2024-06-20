<script lang="ts">
  import type { Datum2D, Perceptron2D } from "./Perceptron";
  export let perceptron: Perceptron2D;
  export let point: Datum2D | undefined = undefined;
</script>

<svg
  width="200"
  height="400"
  viewBox="0 0 100 200"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xml:space="preserve"
  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"
>
  <g transform="matrix(1.18538,0,0,1,-30.4205,5.07349)">
    <ellipse
      cx="67.844"
      cy="94.927"
      rx="29.845"
      ry="67.706"
      style="fill:none;stroke:black;stroke-width:1.82px;"
    />
  </g>
  <path
    d="M14.623,47.186L33.145,58.387"
    style="fill:none;stroke:black;stroke-width:2px;"
  />
  <path
    d="M14.623,152.206L33.145,141.156"
    style="fill:none;stroke:black;stroke-width:2px;"
  />
  <path
    d="M50,32.294L50,167.706"
    style="fill:none;stroke:black;stroke-width:2px;"
  />
  <g transform="matrix(1,0,0,1,0,9.9106)">
    <g transform="matrix(10,0,0,10,77.3951,92.6163)"> </g>
    <text
      x="59.05px"
      y="92.616px"
      style="font-family:'ArialMT', 'Arial', sans-serif;font-size:10px;"
      >{perceptron.bias}</text
    >
  </g>
  <g transform="matrix(1,0,0,1,-35.2116,-22.8741)">
    <g transform="matrix(10,0,0,10,76.8335,92.6163)"> </g>
    <text
      x="59.05px"
      y="92.616px"
      style="font-family:'ArialMT', 'Arial', sans-serif;font-size:10px;"
      >{perceptron.weights[0]}</text
    >
  </g>
  <g transform="matrix(1,0,0,1,-53.2973,-50.4879)">
    <g transform="matrix(10,0,0,10,71.8335,92.6163)"> </g>
    <text
      x="59.05px"
      y="92.616px"
      style="font-family:'ArialMT', 'Arial', sans-serif;font-size:10px;"
      >{point?.x ?? "x"}</text
    >
  </g>
  <g transform="matrix(1,0,0,1,-53.2973,73.1029)">
    <g transform="matrix(10,0,0,10,71.8335,92.6163)"> </g>
    <text
      x="59.05px"
      y="92.616px"
      style="font-family:'ArialMT', 'Arial', sans-serif;font-size:10px;"
      >{point?.y ?? "y"}</text
    >
  </g>
  <g transform="matrix(1,0,0,1,-35.2116,41.14)">
    <g transform="matrix(10,0,0,10,76.8335,92.6163)"> </g>
    <text
      x="59.05px"
      y="92.616px"
      style="font-family:'ArialMT', 'Arial', sans-serif;font-size:10px;"
      >{perceptron.weights[1]}</text
    >
  </g>
  <path
    d="M21.094,100L41.534,100"
    style="fill:none;stroke:black;stroke-width:2px;"
  />
  <g transform="matrix(6.12323e-17,1,-1,6.12323e-17,131.314,68.6861)">
    <path
      d="M21.094,100L41.534,100"
      style="fill:none;stroke:black;stroke-width:2px;"
    />
  </g>
</svg>
