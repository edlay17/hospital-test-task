import Homepage from "./homepage/homepage";
import SingleEmploee from "./single-employee/single-employee";
import NotFoundPage from "./not-found/not-found";

export const routes = [
    {
        path: "/",
        exact: true,
        component: Homepage,
    },
    {
        path: "/employees/:id",
        exact: true,
        component: SingleEmploee
    },
    {
        path: "/404",
        exact: true,
        component: NotFoundPage
    },
    {
        component: NotFoundPage
    },
];