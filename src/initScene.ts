import $ from "jquery";
import "../style/index.scss";

import Scene from "./classes/Scene/Scene";
import Player from "./classes/Player/Player";

import Enemy from "./classes/Sprite/Enemy/Enemy";

import { mainThemeMusic, startPhrase } from "./variables/sounds";
import SkyBox from "./classes/SkyBox/SkyBox";
import ShotgunItem from "./classes/Sprite/Item/ShotgunItem";

import House from "./prefabs/models/House";
import Wall from "./classes/Wall";

const player = Player.getInstance();
const scene = Scene.getInstance();

const weapon = $(".testWeapon");

// import Wall from "./classes/Wall";

export default async () => {
  setLevel();

  new Wall({
    position: {
      x: 0,
      z: 14150,
      y: 100
    }
  });

  new Wall({
    position: {
      x: 0,
      z: -13950,
      y: 100
    }
  });

  new Wall({
    position: {
      x: 830,
      z: -14004,
      y: 100
    },
    rotation: 90
  });

  scene.init({
    player,
    start() {
      new SkyBox();

      setTimeout(() => {
        mainThemeMusic.play();
        startPhrase.play();
      }, 1000);
    },
    update() {
      if (player.isMoving()) {
        weapon
          .animate(
            {
              right: "150px",
              bottom: "-80px"
            },
            500
          )
          .animate(
            {
              right: "200px",
              bottom: 0
            },
            200
          );
      } else {
        weapon.stop();
      }
    }
  });
};

const setLevel = () => {
  // new ShotgunItem({
  //   x: 1000,
  //   z: 1000
  // });
  // for (let i = 0; i < 5; i++)
  //   new House({
  //     position: {
  //       x: 1000 * i * 2,
  //       y: 493,
  //       z: -3000
  //     }
  //   });
  // for (let i = 0; i < 20; i++)
  //   new Enemy({
  //     type: "guard",
  //     position: {
  //       x: 1000 + i * 100,
  //       z: 1000 + i * 100
  //     }
  //   });
};
