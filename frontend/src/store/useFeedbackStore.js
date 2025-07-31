import { create } from 'zustand';

const useFeedbackStore = create((set, get) => ({
  userDetails: {},
  setUserDetails: (data) => set({ userDetails: data }),

  companyDetails: {},
  setCompanyDetails: (data) => set({ companyDetails: data }),

  serviceDetails: {},
  setServiceDetails: (data) => set({ serviceDetails: data }),

  getAllData: () => {
    const { userDetails, companyDetails, serviceDetails } = get();
    return { ...userDetails, ...companyDetails, ...serviceDetails };
  },

  resetAll: () => set({
    userDetails: {},
    companyDetails: {},
    serviceDetails: {},
  }),
}));

export default useFeedbackStore;
