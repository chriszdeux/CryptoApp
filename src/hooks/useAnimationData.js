import { useEffect, useState } from "react";

export const useAnimationData = (  data  ) => {
  // debugger
  const [duration, setDuration] = useState(1000);
  const [delaytBetweenPoints, setDelayBetweenPoints] = useState( 20);
  const [animation, setMyAnimation] = useState({});
  // debugger
  // useEffect(() => {
  //   if(data.price) {
  //     // debugger
  //     setDelayBetweenPoints(duration/data.price.length)
  //   }
  // }, [ data.price ])
  // const totalDuration = 10000;
// const delayBetweenPoints = totalDuration / data.length;
// debugger
const previousY = (ctx) => {
  if(ctx.index === 0){
   return  ctx.chart.scales.y.getPixelForValue(100) 
  } else {
    return ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
  }
}

useEffect(() => {
  if(data.price) {
    setMyAnimation({
      x: {
        type: 'number',
        easing: 'linear',
        duration: delaytBetweenPoints,
        from: NaN, // the point is initially skipped
        delay(ctx) {
          if (ctx.type !== 'data' || ctx.xStarted) {
            return 0;
          }
          ctx.xStarted = true;
          return ctx.index * delaytBetweenPoints;
        }
      },
      y: {
        type: 'number',
        easing: 'linear',
        duration: delaytBetweenPoints,
        from: previousY,
        delay(ctx) {
          if (ctx.type !== 'data' || ctx.yStarted) {
            return 0;
          }
          ctx.yStarted = true;
          return ctx.index * delaytBetweenPoints;
        }
      }
    })
  }
}, [ data ])

// debugger
return animation
}