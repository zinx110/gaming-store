// AppContext.js
"use client";
import {
  createContext,
  ReactComponentElement,
  ReactElement,
  useContext,
  useState,
} from "react";

type AppContextType = {
  isModalOpen: boolean;
  modalData: dataProp;
  openModal: (data: dataProp) => void;
  closeModal: () => void;
  user: boolean;
  login: () => void;
  logout: () => void;
};
const appContextDefaultValues: AppContextType = {
  isModalOpen: false,
  modalData: {},
  openModal: (data: dataProp) => {},
  closeModal: () => {},
  user: false,
  login: () => {},
  logout: () => {},
};

interface dataProp {
  name?: string;
  category?: string;
  img?: string | string[];
  price?: number;
  company?: string;
  companyMotto?: string;
  bottomText1?: string;
  bottomText2?: string;
  subname?: string;
  subname2?: string;
}

const AppContext = createContext<AppContextType>(appContextDefaultValues);

export function useApp() {
  return useContext(AppContext);
}

type Props = {
  children: React.ReactNode;
};

export function AppProvider({ children }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState({});
  const [user, setUser] = useState<boolean>(false);

  const openModal = (data: dataProp) => {
    setIsModalOpen(true);
    setModalData(data);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const login = () => {
    setUser(true);
  };

  const logout = () => {
    setUser(false);
  };

  const value = {
    isModalOpen,
    openModal,
    closeModal,
    modalData,
    user,
    login,
    logout,
  };
  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
}
