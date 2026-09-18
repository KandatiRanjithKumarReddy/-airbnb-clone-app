import { useEffect } from 'react';

/**
 * Locks body scroll when isLocked is true, restoring previous overflow on unmount.
 */
export function useScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return;

    const originalOverflow = document.body.style.overflow;
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
      document.body.style.overflow = originalOverflow;
    };
  }, [isLocked]);
}
