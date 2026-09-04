"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type SiteContextValue = {
  modalOpen: boolean;
  modalSuccess: boolean;
  openModal: () => void;
  closeModal: () => void;
  submitModal: () => void;
  toastMessage: string | null;
  showToast: (message: string) => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const openModal = useCallback(() => {
    setModalSuccess(false);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => setModalOpen(false), []);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    window.setTimeout(() => setToastMessage(null), 4000);
  }, []);

  const submitModal = useCallback(() => {
    setModalSuccess(true);
    showToast("Bienvenue dans le cercle des Royal Muses ✦");
  }, [showToast]);

  const value = useMemo(
    () => ({ modalOpen, modalSuccess, openModal, closeModal, submitModal, toastMessage, showToast }),
    [modalOpen, modalSuccess, openModal, closeModal, submitModal, toastMessage, showToast]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
