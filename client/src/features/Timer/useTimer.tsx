import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatTimeForDisplay } from './utils';
import type { StatusTimer } from './type';

export const useTimer = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState<StatusTimer>('empty');
    const [durationMs, setDurationMs] = useState<number>(0);
    const [startTimeMs, setStartTimeMs] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (status === 'running') {
            const timerId = setInterval(() => {
                setDurationMs((prev) => prev + 1000);
            }, 1000);

            return () => {
                clearInterval(timerId);
            };
        }
    }, [status]);

    const onStart = () => {
        setStatus('running');
        setError(null);

        if (status === 'empty' && startTimeMs === null) {
            setStartTimeMs(Date.now());
        }
    };

    const onPause = () => {
        setStatus('stopped');
    };

    const onReset = () => {
        setDurationMs(0);
        setStatus('empty');
        setStartTimeMs(null);
        setError(null);
    };

    const onSave = () => {
        const time = Math.round(durationMs / 60000);

        if (time < 1) {
            setError('Длительность тренировки должна быть больше 1 минуты');
            return;
        }

        sessionStorage.setItem(
            'timerState',
            JSON.stringify({
                durationMinutes: time,
                startTimeMs,
            }),
        );

        onReset();
        navigate(`/workout`);
    };

    const displayTime = formatTimeForDisplay(durationMs);

    return {
        time: durationMs,
        displayTime,
        status,
        error,
        onStart,
        onPause,
        onReset,
        onSave,
    };
};
