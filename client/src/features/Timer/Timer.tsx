import { Button, ErrorMessage } from '../../shared';
import { useTimer } from './useTimer';
import Play from '../../app/assets/icons/play.svg?react';
import Pause from '../../app/assets/icons/pause.svg?react';
import Save from '../../app/assets/icons/saveDisk.svg?react';
import Reset from '../../app/assets/icons/reset.svg?react';

export const Timer = () => {
    const { displayTime, status, error, onStart, onPause, onReset, onSave } =
        useTimer();

    return (
        <>
            <div className="flex-center mb-5">
                <Button onClick={status === 'running' ? onPause : onStart}>
                    {status === 'running' ? (
                        <Pause className="size-6 fill-current" />
                    ) : (
                        <Play className="size-6 fill-current" />
                    )}
                </Button>

                <Button onClick={onSave} disabled={status !== 'stopped'}>
                    <Save className="size-6 fill-current" />
                </Button>

                <Button onClick={onReset} disabled={status !== 'stopped'}>
                    <Reset className="size-6 fill-current" />
                </Button>
            </div>

            <div className="text-5xl font-mono font-bold text-brand-text text-center">
                {displayTime}
            </div>

            <div className="mt-2 py-1">
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </div>
        </>
    );
};
