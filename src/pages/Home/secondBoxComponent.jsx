import React, { memo, useRef, useState, useEffect } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import { sleep } from "common/utils";
import { qualities } from "./constants";
import s from "./style.module.scss";

const SecondBoxComponent = () => {
  const [qualityText, setQualityText] = useState("");
  const onSecond = useRef(false);
  const secondBoxRef = useRef(null);
  const isVisible = useOnScreen(secondBoxRef);

  const showThemQualities = React.useCallback(async () => {
    onSecond.current = true;
    for (let quality of qualities) {
      setQualityText(quality);
      await sleep(1000);
    }
    onSecond.current = false;
  }, []);

  useEffect(() => {
    if (isVisible && !onSecond.current) {
      showThemQualities();
    }
  }, [isVisible]);

  return (
    <div className={s.second} id="second" ref={secondBoxRef}>
      <div className={s.nameIntro}>Shashwat this side.👋</div>
      <div className={s.descText}>I'm {qualityText}.</div>
    </div>
  );
};

export default memo(SecondBoxComponent);
