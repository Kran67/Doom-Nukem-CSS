import Enemy from "classes/Enemy";

import { Props } from "./types";

import "./style.scss";

class Guard extends Enemy {
  constructor(props: Props) {
    super({ type: "guard", ...props });
  }
}

export default Guard;
