import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  ScreenOne,
  ScreenTwo,
  ScreenThree,
  ScaleObject,
  WidthHeightA,
  HomeScreen,
  AboslutePAnim,
  InterPolationBackround,
  Rotation,
  WidthHeightPer,
  Eeasing,
  AnimatedEvent,
  AnimatedDecay,
  ParallelAnimation,
  InterpolateInterpolate,
  CreateAnimatedComponent,
  PointerEventTechnique,
  CornersBreakDown,
  GradientButton,
  AnimateALL,
  FillButton,
  createHeart,
  Autoscrolling,
  ProgressBar,
  BringProgressBar,
} from './Myindex';
import AnimationAdd from './app/AnimationAdd';
import AnimateAll from './app/AnimateALL';
const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  One: {
    screen: ScreenOne,
  },
  Two: {
    screen: ScreenTwo,
  },
  Three: {
    screen: ScreenThree,
  },
  scale: {
    screen: ScaleObject,
    navigationOptions: {
      title: 'Scale ',
    },
  },
  width: {
    screen: WidthHeightA,
  },
  Abs: {
    screen: AboslutePAnim,
  },
  interpolate: {
    screen: InterPolationBackround,
  },
  rotation: {
    screen: Rotation,
  },
  per: {
    screen: WidthHeightPer,
  },
  ease: {
    screen: Eeasing,
  },
  event: {
    screen: AnimatedEvent,
  },
  decay: {
    screen: AnimatedDecay,
  },
  add: {
    screen: AnimationAdd,
  },
  parallel: {
    screen: ParallelAnimation,
  },
  interPInterP: {
    screen: InterpolateInterpolate,
  },
  CreateComp: {
    screen: CreateAnimatedComponent,
  },
  pointerEvent: {
    screen: PointerEventTechnique,
  },
  corners: {
    screen: CornersBreakDown,
  },
  gradient: {
    screen: GradientButton,
  },
  all: {
    screen: AnimateAll,
  },
  FillButton: {
    screen: FillButton,
  },
  heart: {
    screen: createHeart,
  },
  scrolling: {
    screen: Autoscrolling,
  },
  progress: {
    screen: ProgressBar,
  },
  bringP: {
    screen: BringProgressBar,
  },
});

export default createAppContainer(AppStack);
