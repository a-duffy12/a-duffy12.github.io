import { useRsvp } from "../../hooks/useRSVP";

export const RsvpTab = () => {
    const {rsvpSubmitted, setRsvpSubmitted, rsvpForm} = useRsvp();

    return (
        <div>RSVP</div>
    );
}