import { useEffect, useState } from "react";

type TimerHelperParams = {
    initialTime: number;
};

const useTimerProps = ({ initialTime }: TimerHelperParams) => {
    const [timer, setTimer] = useState<number>(initialTime);
    const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);

    useEffect(() => {
        setTimer(initialTime);
        setButtonDisabled(true);
    }, [initialTime]);

    // Timer countdown logic
    useEffect(() => {
        if (timer > 0 && isButtonDisabled) {
            const interval = setInterval(() => {
                setTimer((prevTime) => {
                    const newTime = prevTime - 1;
                    if (newTime <= 0) {
                        clearInterval(interval);
                        setButtonDisabled(false);
                    }
                    return newTime;
                });
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer, isButtonDisabled]);

    const resetTimer = () => {
        setTimer(initialTime);
        setButtonDisabled(true);
    };

    return { timer, isButtonDisabled, resetTimer };
};

export default useTimerProps;