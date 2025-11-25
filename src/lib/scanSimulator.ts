export function simulateScan(onProgress?: (p: number) => void): Promise<void> {
  return new Promise((resolve) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 12) + 6; // increment by 6-17
      if (progress > 100) progress = 100;
      onProgress?.(progress);
      if (progress >= 100) {
        clearInterval(interval);
        // small delay to let UI show 100%
        setTimeout(() => resolve(), 300);
      }
    }, 220);
  });
}
