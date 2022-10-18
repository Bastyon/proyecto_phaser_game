import Phaser from 'phaser';
import { useState, useEffect } from 'react';
import Escena from './components/Escena';

function App() {

  const [listo, setListo] = useState(false); // uso state de una variable Listo, se no se usa esto los lienzos se acumularan en la vista

  useEffect(() => { // uso el hook para renderizar acciones que el react no hace, se ejecuta mediante un estado
    const config = {
      type: Phaser.AUTO,
      width: 800, // ancho de la pantalla
      height: 600, // alto de la pantalla
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 }, // cambia la gravedad en el eje Y
          debug: false
        }
      },
      scene: [Escena]
    };
    // arranca el juego
    const game = new Phaser.Game(config); // a la variable game se le asigna un objeto del tipo phaser

    game.events.on("LISTO", setListo); // trigger cuando el juego esta completamente listo

    // si no pongo esto, se acumulan duplicados del lienzo
    return () => {
      setListo(false);
      game.destroy(true);
    }
  }, [listo]);
} 

export default App;
