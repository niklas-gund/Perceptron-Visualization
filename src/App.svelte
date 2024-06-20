<script lang="ts">
  import { Perceptron2D, type Datum2D } from "./Perceptron";
  import PerceptronVis from "./PerceptronVis.svelte";

  let SVGDIMENSIONS = 500;

  let points: Datum2D[] = [];

  let p = new Perceptron2D();
  p.fit(points);

  function addPoint(e: MouseEvent) {
    points = [
      ...points,
      {
        x: e.offsetX,
        y: SVGDIMENSIONS - e.offsetY,
        class: e.shiftKey ? -1 : 1,
      },
    ];
    p.fit(points);
    p = p;
  }
  let pointHoverIndex = -1;
</script>

<main style="display: flex;">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <svg
    width={SVGDIMENSIONS}
    height={SVGDIMENSIONS}
    style="background-color: wheat;"
    on:click={addPoint}
  >
    {#each points as point, index}
      <circle
        on:mouseover={() => (pointHoverIndex = index)}
        on:mouseleave={() => (pointHoverIndex = -1)}
        on:focus={() => (pointHoverIndex = index)}
        cx={point.x}
        cy={SVGDIMENSIONS - point.y}
        r={index === pointHoverIndex ? 10 : 5}
        fill={point.class === 1 ? "red" : "blue"}
      />
    {/each}
    <line
      x1={0}
      y1={SVGDIMENSIONS + p.bias / p.weights[1]}
      x2={SVGDIMENSIONS}
      y2={SVGDIMENSIONS +
        (SVGDIMENSIONS * p.weights[0] + p.bias) / p.weights[1]}
      stroke="black"
      stroke-width="5"
    />
  </svg>
  <PerceptronVis perceptron={p} point={points[pointHoverIndex]} />
</main>
