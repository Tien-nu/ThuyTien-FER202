export const initialPaymentState = {
  payments: [],
  loading: false, 
  isEditing: null, 
  currentMovie: { id: '', userid: '', semester: '', courseName: '', amount: '', date: '' },   
};

export const paymentReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PAYMENTS':
      return { ...state, payments: action.payload, loading: false };

    case 'START_LOADING':
      return { ...state, loading: true };
      
      
    
    default:
      return state;
  }
};
