import { useEffect, useRef, useState } from 'react';

export const useModalClose = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const clickRef = useRef(null);
    const handleClickAway = (e) => {
        const target = e.target;
        if (!clickRef.current?.contains(target)) setModalOpen(false);
    }
    useEffect(() => {
        if (modalOpen) {
          document.addEventListener('click', handleClickAway);
        } else {
          document.removeEventListener('click', handleClickAway);
        }
        return () => {
          document.removeEventListener('click', handleClickAway);
        };
      }, [modalOpen]);

      return [modalOpen, setModalOpen, clickRef];
}