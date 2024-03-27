// マス目に入るValueの定義
type Value = "X" | "O" | null;

type ArrayValue = Array<Value>;

type PropSquare = {
  value: Value;
  onClick: () => void;
};

type PropBoard = {
  xIsNext: boolean;
  squares: Value[];
  onPlay: (nextSquares: Value[]) => void;
};
