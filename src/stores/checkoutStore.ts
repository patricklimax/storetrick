import { create } from 'zustand';

type States = {
  name: string;
  address: {
    publicPlace: string;
    number: string;
    complement?: string | undefined;
    district: string;
    city: string;
    cep?: string | undefined;
    state: string;
  };
};

type Actions = {
  setName: (name: States['name']) => void;
  setAddress: (address: States['address']) => void;
};

const initialState: States = {
  name: '',
  address: {
    publicPlace: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    cep: '',
    state: '',
  },
};

export const useCheckoutStore = create<States & Actions>()((set) => ({
  ...initialState,
  setName: (name) => set((state) => ({ ...state, name })),
  setAddress: (address) => set((state) => ({ ...state, address})),
}));
