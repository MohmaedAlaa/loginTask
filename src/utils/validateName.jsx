// import { endsWithNumber } from "./endsWithNumber";
// import { startsWithNumber } from "./startsWithNumber";

export const validateName = (name) => {
    return /^[A-Za-z0-9]*$/.test(name);
};
