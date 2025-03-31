import React, { useCallback, useState, useEffect } from "react";
import HobbyCard from "./hobbyCard";
import LeftIcon from "assets/svg/leftIcon";
import RightIcon from "assets/svg/rightIcon";
import Button from "components/Button";
import { hobbies } from "./constants";
import s from "./style.module.scss";

const runSlideShow = (f, t) => setInterval(() => f.call(), t);
const timer = 4000;

const Hobbies = (props) => {
  const [selection, setSelection] = useState(0);

  const callbackedSlideshow = useCallback(
    () => runSlideShow(handleRightClick, timer),
    [timer]
  );

  useEffect(() => {
    callbackedSlideshow();
  }, [callbackedSlideshow]);

  const handleLeftClick = () => {
    setSelection((prev) =>
      prev - 1 >= 0 ? prev - 1 : prev - 1 + hobbies.length
    );
  };

  const handleRightClick = () => {
    setSelection((prev) =>
      prev + 1 < hobbies.length ? prev + 1 : prev + 1 - hobbies.length
    );
  };

  return (
    <>
      <div className={s.third} id="third">
        <div>
          <div className={s.hobbiesHeader}>Hobbies</div>
          <div className={s.row}>
            <Button onClick={handleLeftClick} buttonClass={s.leftArrowBtn}>
              <LeftIcon />
            </Button>
            <HobbyCard
              imgUrl={hobbies[selection]?.imgUrl}
              imgText={hobbies[selection]?.imgText}
            />
            <Button onClick={handleRightClick} buttonClass={s.rightArrowBtn}>
              <RightIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hobbies;
