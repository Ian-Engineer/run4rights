import stripe from "./endpoints/stripe";
import general from "./endpoints/general";
import runnerData from "./endpoints/runnerData";

const api = {
    stripe,
    runnerData,
    ...general
};

export default api;
