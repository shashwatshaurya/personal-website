import React from 'react';

export default useOnScreen = (elemRefs) => {
    const [isOnScreen, setIsOnScreen] = React.useState(false);

    const observer = new IntersectionObserver((entry) => {
        setIsOnScreen(entry.isIntersecting)
    })

    return isOnScreen;
}