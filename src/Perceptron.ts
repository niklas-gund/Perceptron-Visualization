export type Datum2D = {
  x: number;
  y: number;
  class: -1 | 1;
};

export class Perceptron2D {
  public weights: number[] = [0, 0];
  public bias: number = 0;
  learningRate: number = 1;

  public predict(datum: Datum2D) {
    return this.weights[0] * datum.x + this.weights[1] * datum.y + this.bias >=
      0
      ? 1
      : -1;
  }

  public fit(data: Datum2D[]) {
    let loss = 1000;
    let step = 0;

    let newWeights: number[] = [...this.weights];
    let newBias = this.bias;

    while (loss != 0 && step++ < 1000000) {
      //console.log("Step: " + step);
      loss = 0;
      for (const datum of data) {
        const prediction = this.predict(datum);
        if (prediction != datum.class) {
          newWeights[0] += this.learningRate * datum.class * datum.x;
          newWeights[1] += this.learningRate * datum.class * datum.y;
          newBias += this.learningRate * datum.class;
          loss++;
          //break;
        }
      }

      this.weights = [...newWeights];
      this.bias = newBias;
    }
    console.log("Weights: " + this.weights + " Bias: " + this.bias);
    console.log(
      `Function: ${this.weights[0]}x + ${this.weights[1]}y + ${this.bias} = 0`
    );
    console.log(
      `Explicit: f(x)= -(x*${this.weights[0]}+${this.bias})/${this.weights[1]}`
    );
  }
}
