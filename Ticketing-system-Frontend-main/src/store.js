import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./Redux/Tickets/ticketSlice";
import loginReducer from "./Pages/auth/loginSlice";
import userReducer from "./Redux/auth/userSlice";
import newticketReducer from "./Pages/Createquery/addTicketSlicer";
import userRegestrationSlice from "./Pages/Unauth/RegisterSlice";
import passwordReducer from "./Pages/auth/PasswordresetSlice";
const store = configureStore({
	reducer: {
        tickets: ticketsReducer,
        login:loginReducer,
        user: userReducer,
        openticket:newticketReducer,
        registration:userRegestrationSlice,
        password: passwordReducer,
    },
});

export default store;