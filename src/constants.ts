import { Config } from './types';

export const configInitialState: Config = {
    savetheDateEnabled: true,
    contactUsEnabled: false,
    faqEnabled: true,
    transportationEnabled: true,
    lodgingEnabled: true,
    registryEnabled: true,
    weddingPartyEnabled: false,
    rsvpEnabled: false,
    photoGalleryEnabled: false,
    stagAndDoeEnabled: true
}

export const email = 'brooklynaiden2026@gmail.com';
export const emailJsServiceId = 'service_hx03p2o';
export const emailJsTemplateId = 'template_y86eona';
export const emailJsPublicKey = 'sOz0m0b2U13Lm27Tm';

export const weddingDate = new Date(2026, 7, 29, 16, 0);
export const stagAndDoeDate = new Date(2026, 5, 27, 19, 0);
export const registryLink = 'https://www.myregistry.com/wedding-registry/aiden-duffy-and-brooklyn-wright-wingham-on/5068274';

export enum RsvpCode {
    CER001 = 'CER001', // ceremony tier individual with +1
    CER002 = 'CER002', // ceremony tier couple
    CER003 = 'CER003', // ceremony tier couple with child
    CER004 = 'CER004', // ceremony tier couple with two children
    CER005 = 'CER005', // ceremony tier individual with +1 and two children
    DIN001 = 'DIN001', // dinner tier individual with +1
    DIN002 = 'DIN002', // dinner tier couple
    DIN003 = 'DIN003', // dinner tier couple with child
    DIN004 = 'DIN004', // dinner tier couple with two children
    DIN005 = 'DIN005', // dinner tier individual with +1 and two children
    REC001 = 'REC001', // reception tier individual with +1
    REC002 = 'REC002', // reception tier couple
    REC003 = 'REC003', // reception tier couple with child
    REC004 = 'REC004', // reception tier couple with two children
    REC005 = 'REC005' // reception tier individual with +1 and two children
};

export const rsvpArrivalTime:  Record<RsvpCode, string> = {
    [RsvpCode.CER001]: '3:45pm',
    [RsvpCode.CER002]: '3:45pm',
    [RsvpCode.CER003]: '3:45pm',
    [RsvpCode.CER004]: '3:45pm',
    [RsvpCode.CER005]: '3:45pm',
    [RsvpCode.DIN001]: '5:45pm',
    [RsvpCode.DIN002]: '5:45pm',
    [RsvpCode.DIN003]: '5:45pm',
    [RsvpCode.DIN004]: '5:45pm',
    [RsvpCode.DIN005]: '5:45pm',
    [RsvpCode.REC001]: '8:00pm',
    [RsvpCode.REC002]: '8:00pm',
    [RsvpCode.REC003]: '8:00pm',
    [RsvpCode.REC004]: '8:00pm',
    [RsvpCode.REC005]: '8:00pm'
};

export const rsvpPlusOneMap:  Record<RsvpCode, boolean> = {
    [RsvpCode.CER001]: true,
    [RsvpCode.CER002]: false,
    [RsvpCode.CER003]: false,
    [RsvpCode.CER004]: false,
    [RsvpCode.CER005]: true,
    [RsvpCode.DIN001]: true,
    [RsvpCode.DIN002]: false,
    [RsvpCode.DIN003]: false,
    [RsvpCode.DIN004]: false,
    [RsvpCode.DIN005]: true,
    [RsvpCode.REC001]: true,
    [RsvpCode.REC002]: false,
    [RsvpCode.REC003]: false,
    [RsvpCode.REC004]: true,
    [RsvpCode.REC005]: true
};

export const rsvpCountMap: Record<RsvpCode, number> = {
    [RsvpCode.CER001]: 1,
    [RsvpCode.CER002]: 2,
    [RsvpCode.CER003]: 3,
    [RsvpCode.CER004]: 4,
    [RsvpCode.CER005]: 3,
    [RsvpCode.DIN001]: 1,
    [RsvpCode.DIN002]: 2,
    [RsvpCode.DIN003]: 3,
    [RsvpCode.DIN004]: 4,
    [RsvpCode.DIN005]: 3,
    [RsvpCode.REC001]: 1,
    [RsvpCode.REC002]: 2,
    [RsvpCode.REC003]: 3,
    [RsvpCode.REC004]: 4,
    [RsvpCode.REC005]: 3
};

export const rsvpDinnerMap: Record<RsvpCode, boolean> = {
    [RsvpCode.CER001]: true,
    [RsvpCode.CER002]: true,
    [RsvpCode.CER003]: true,
    [RsvpCode.CER004]: true,
    [RsvpCode.CER005]: true,
    [RsvpCode.DIN001]: true,
    [RsvpCode.DIN002]: true,
    [RsvpCode.DIN003]: true,
    [RsvpCode.DIN004]: true,
    [RsvpCode.DIN005]: true,
    [RsvpCode.REC001]: false,
    [RsvpCode.REC002]: false,
    [RsvpCode.REC003]: false,
    [RsvpCode.REC004]: false,
    [RsvpCode.REC005]: false
};

export enum DinnerChoice {
    Meat1 = 'Meat1', // chicken
    Meat2 = 'Meat2', // salmon
    Vegan = 'Vegan', // vegan TBD
    Kids = 'Kids' // chicken fingers
}