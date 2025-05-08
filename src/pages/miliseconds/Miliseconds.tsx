import React, { useState, useEffect } from "react";

const formatTime = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const milliseconds = date.getMilliseconds().toString().padStart(3, "0");
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
};

const Miliseconds: React.FC = () => {
  const [time, setTime] = useState<string>(formatTime(new Date()));
  /**
   * useEffect: 컴포넌트가 마운트될 때(컴포넌트가 처음으로 화면에 나타나 DOM에 추가되는 시점) setInterval을 설정하고, 언마운트될 때 clearInterval로 정리하여 메모리 누수를 방지합니다.
   * 업데이트 간격: 100밀리초로 설정하여 부드럽게 시간 변화를 볼 수 있습니다. 필요에 따라 간격을 조절할 수 있습니다.
   */
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 100); // 100ms마다 갱신

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 정리
  }, []);

  return (
    <div style={{ fontFamily: "monospace", fontSize: "2rem", textAlign: "center" }}>
      <p>현재 시간:</p>
      <p>{time}</p>
    </div>
  );
};

export default Miliseconds;
