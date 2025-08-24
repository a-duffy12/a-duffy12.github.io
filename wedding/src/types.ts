import { IconType } from 'react-icons';

export type Config = {
    savetheDateEnabled: boolean;
    //aboutEnabled: boolean;
    contactUsEnabled: boolean;
    faqEnabled: boolean;
    transportationEnabled: boolean;
    lodgingEnabled: boolean;
    registryEnabled: boolean;
    weddingPartyEnabled: boolean;
    rsvpEnabled: boolean;
    photoGalleryEnabled: boolean;
}

export type Tab = {
    id: string;
    label: string;
    icon: IconType | null;
    enabled: boolean;
}

export type Rsvp = {
    firstName: string;
    lastName: string;
    meat: Meat | null;
    drink: Drink | null,
    transportation: Transportation | null
    attending: boolean,
    notes: string
}

export enum Meat {
    Beef,
    Chicken,
    Salmon,
    Vegetarian,
    Vegan,
    Kids
}

export enum Drink {
    None,
    Red,
    White,
    Beer
}

export enum Transportation {
    None, 
    Listowel,
    Wingham
}