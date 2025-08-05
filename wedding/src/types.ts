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
    id: string,
    label: string,
    icon: IconType | null,
    enabled: boolean
}