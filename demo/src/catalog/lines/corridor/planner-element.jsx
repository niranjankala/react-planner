import {ElementsFactories} from 'react-planner';

const info = {
  title: 'corridor',
  tag: ['corridor'],
  description: 'corridor with blocks',
  image: require('./corridor.png'),
  visibility: {
    catalog: true,
    layerElementsVisible: false
  }
};

const textures = {
  bricks: {
    name: 'Brickss',
    uri: require('./textures/bricks.jpg'),
    lengthRepeatScale: 0.01,
    heightRepeatScale: 0.01,
    normal: {
      uri: require('./textures/bricks-normal.jpg'),
      lengthRepeatScale: 0.01,
      heightRepeatScale: 0.01,
      normalScaleX: 0.8,
      normalScaleY: 0.8
    }
  },
  painted: {
    name:'Paintedd',
    uri: require('./textures/painted.jpg'),
    lengthRepeatScale: 0.01,
    heightRepeatScale: 0.01,
    normal: {
      uri: require('./textures/painted-normal.jpg'),
      lengthRepeatScale: 0.01,
      heightRepeatScale: 0.01,
      normalScaleX: 0.4,
      normalScaleY: 0.4
    }
  },
};

export default ElementsFactories.CorridorFactory('corridor', info, textures);

