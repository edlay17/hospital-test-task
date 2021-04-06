import Homepage from "./homepage/homepage";
import SingleEmploee from "./single-employee/single-employee";

export const routes = [
    /*{
        path: "/404",
        exact: true,
        component: NotFoundPage
    },*/
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
    /*{
        component: NotFoundPage
    },*/
];