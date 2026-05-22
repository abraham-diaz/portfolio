import { useState, useEffect, useRef } from 'react';

const Loading = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const calledRef = useRef(false);

  // Incrementa el progreso — updater puro, sin efectos secundarios
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 2, 100));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Observa cuando llega al 100% y llama a onLoadingComplete una sola vez
  useEffect(() => {
    if (progress >= 100 && !calledRef.current) {
      calledRef.current = true;
      const timeout = setTimeout(onLoadingComplete, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center z-50">
      <div className="mb-8 text-center">
        <h1 className="text-8xl font-black tracking-tighter text-gray-900 dark:text-white">AD</h1>
        <p className="text-2xl font-medium text-gray-500 dark:text-gray-400 mt-2">Abraham Díaz</p>
        <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mt-1">Full Stack Developer</p>
      </div>

      <div className="w-64 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gray-900 dark:bg-white rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Loading;
