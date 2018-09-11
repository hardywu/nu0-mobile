import {
    Animated,
    NativeModules
} from 'react-native';
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
export default Anim = {

    /** timing动画函数
     * @param origin 初始值
     * @param target 目标值
     * @param duration 动画时间
     * @param easing 缓动函数
     */
    timing: (origin, target, duration, easing) => {
        return (
            Animated.timing(origin, {
                toValue: target,
                duration: duration,
                easing: easing,
                useNativeDriver: true
            })
        );
    },

    /** 组合动画函数
     * @param animArr 动画数组
     */
    parallel: animArr => {
        return (
            Animated.parallel(animArr)
        );
    }
}