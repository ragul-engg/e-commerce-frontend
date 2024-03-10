export interface SearchPrediction {
  box: {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
  };
  class: string;
  confidence: string;
  name: string;
}
