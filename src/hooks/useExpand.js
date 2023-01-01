import { useSpring } from 'react-spring';

const useExpand = ({ measurements, condition }) => {
  const animationStyles = useSpring({
    height: condition && measurements ? measurements.height : 0,
    config: { tension: 250, friction: 32, clamp: true, duration: 250 },
    opacity: condition ? 1 : 0,
    overflow: condition ? 'visible' : 'hidden',
  });

  return { animationStyles };
};

export default useExpand;
