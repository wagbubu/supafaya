import { useEffect, useState } from "react";

export default function Challenge2() {
  const [timer, setTimer] = useState({
    mins: 0,
    secs: 0,
    stopped: true,
  });

  useEffect(() => {
    if (!timer.stopped) {
      function seconds() {
        if (timer.secs === 59) {
          setTimer({ ...timer, mins: timer.mins + 1, secs: 0 });
        } else {
          setTimer({ ...timer, secs: timer.secs + 1 });
        }
      }
      const timeout = setTimeout(seconds, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [timer]);

  return (
    <div>
      <h1>2. Create a Basic Timer</h1>

      <span>{timer.mins} mins </span>
      <span>{timer.secs} secs</span>
      <div className="button2">
        <button
          className="button green"
          onClick={() => setTimer({ ...timer, stopped: false })}
        >
          Start
        </button>
        <button
          className="button red"
          onClick={() => setTimer({ ...timer, stopped: true })}
        >
          Stop
        </button>
        <button
          className="button yellow"
          onClick={() => setTimer({ mins: 0, secs: 0, stopped: true })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
