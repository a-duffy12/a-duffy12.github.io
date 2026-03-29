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
    CER001, // ceremony tier individual with +1
    CER002, // ceremony tier couple
    CER003, // ceremony tier couple with child
    CER005, // ceremony tier individual with +1 and two children
    DIN001, // dinner tier individual with +1
    DIN002, // dinner tier couple
    DIN003, // dinner tier couple with child
    DIN004, // dinner tier couple with two children
    REC001, // reception tier individual with +1
    REC002, // reception tier couple
    REC003, // reception tier couple with child
    REC005, // reception tier individual with +1 and two children
};