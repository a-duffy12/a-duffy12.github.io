import { useRsvp } from '../../hooks/useRSVP';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RsvpData, rsvpDefaultValues, rsvpSchema, } from '../../helpers/rsvpSchema';
import { useEffect, useMemo } from 'react';
import { rsvpArrivalTime, rsvpCountMap, rsvpDinnerMap, rsvpPlusOneMap } from '../../constants';
import { Content } from '../content';
import { Button } from '../button';
import { useEmails } from '../../hooks/useEmails';
import styles from '../../wedding.module.css';
import { useMobile } from '../../hooks/useMobile';

export const RsvpTab = () => {
    const { sendEmail } = useEmails();
    const { rsvpSubmitted, setRsvpSubmitted } = useRsvp();
    const { isMobile} = useMobile();
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = useForm<RsvpData>({
        resolver: zodResolver(rsvpSchema),
        defaultValues: rsvpDefaultValues
    });

    const { fields, replace } = useFieldArray({
        control,
        name: 'rsvps'
    });

    const watchedCode = watch('code');
    const watchedPlusOne = watch('bringingPlusOne');
    const watchedGuests = watch('rsvps');

    const arrivalTime = useMemo(() => rsvpArrivalTime[watchedCode], [ rsvpArrivalTime, watchedCode ]);
    const showPlusOneForm = useMemo(() => rsvpPlusOneMap[watchedCode], [ rsvpPlusOneMap, watchedCode ]);
    const showDinnerFields = useMemo(() => rsvpDinnerMap[watchedCode], [ rsvpDinnerMap, watchedCode ]);

    useEffect(() => {
        if (watchedCode && rsvpCountMap[watchedCode] && !errors.code) {
            const rsvpsCount = rsvpCountMap[watchedCode] + (watchedPlusOne ? 1 : 0);

            const refreshedRsvps = Array(rsvpsCount).fill(null).map(() => ({
                name: '',
                attending: true,
                meal: '',
                dietaryNeeds: ''
            }));
            replace(refreshedRsvps);
        } else {
            replace([]);
        }
    }, [ watchedCode, watchedPlusOne, rsvpCountMap, errors.code, replace ]);

    const handleAttendingChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const checked = event.target.checked;
        setValue(`rsvps.${index}.attending`, checked);
        if (!checked) {
            setValue(`rsvps.${index}.name`, '');
            setValue(`rsvps.${index}.meal`, '');
            setValue(`rsvps.${index}.dietaryNeeds`, '');
        }
    };

    const onSubmit = (data: RsvpData) => {
        sendEmail({rsvp: data});
        setRsvpSubmitted(true);
    };

    return (
        <Content>
            {rsvpSubmitted 
                ? <div className={styles.contentText}>
                    RSVP has been received.
                </div>
                : <form className={styles.contentForm} onSubmit={handleSubmit(onSubmit) }>
                    <div className={styles.contentFormSection}>
                        <div className={styles.contentFormField}>
                            <label className={styles.contentFormFieldLabel} htmlFor='rsvp-code-input'>RSVP Code</label>
                            <input
                                className={styles.contentFormFieldTextInput}
                                {...register('code')}
                                type='text'
                                placeholder={isMobile
                                    ? 'Enter code from invitation'
                                    : 'Enter code from invitation, format AAA###'
                                }
                                id='rsvp-code-input'
                            />
                            {errors.code && <p className={styles.contentFormFieldError}>{errors.code.message}</p>}
                        </div>
                        {arrivalTime && (
                            <div>
                                <p className={styles.contentFormText}>{`Please arrive at ${arrivalTime}`}</p>
                            </div>
                        )}
                        {showPlusOneForm && (
                            <div className={styles.contentFormFieldCheckbox}>
                                <input 
                                    {...register('bringingPlusOne')}
                                    type='checkbox'
                                    id='bringing-plus-one-checkbox'
                                />
                                <label className={styles.contentFormFieldCheckboxLabel} htmlFor='bringing-plus-one-checkbox'>I am bringing a plus one</label>
                            </div>
                        )}
                    </div>
                    {fields.length > 0 && (
                        <>
                            <h2>Guest List</h2>
                            {errors.rsvps?.root && <p className={styles.contentFormError}>{errors.rsvps.root.message}</p>}
                            
                            {fields.map((field, index) => {
                                const isAttending = watchedGuests?.[index]?.attending ?? true;

                                return (
                                    <div className={styles.contentFormSection} key={`${field.id}_${index}`}>
                                        <h3>{`Guest ${index + 1}`}</h3>

                                        <div className={styles.contentFormFieldCheckbox}>
                                            <input 
                                                {...register(`rsvps.${index}.attending`)}
                                                type='checkbox'
                                                onChange={(e) => handleAttendingChange(e, index)}
                                                id={`attending-${index}-checkbox`}
                                            />
                                            <label className={styles.contentFormFieldCheckboxLabel} htmlFor={`attending-${index}-checkbox`}>Will be attending</label>
                                        </div>

                                        <div className={styles.contentFormField}>
                                            <label className={styles.contentFormFieldLabel} htmlFor={`name-${index}-input`}>Guest Name</label>
                                            <input
                                                className={styles.contentFormFieldTextInput}
                                                {...register(`rsvps.${index}.name`)}
                                                type='text'
                                                placeholder={isAttending ? 'Full Name' : 'N/A'}
                                                disabled={!isAttending}
                                                id={`name-${index}-input`}
                                            />
                                            {errors.rsvps?.[index]?.name && <p className={styles.contentFormFieldError}>{errors.rsvps[index].name?.message}</p>}
                                        </div>

                                        {showDinnerFields && (
                                            <>
                                                <div className={styles.contentFormField}>
                                                    <label className={styles.contentFormFieldLabel} htmlFor={`meal-${index}-select`}>Meal Choice</label>
                                                    <select 
                                                        {...register(`rsvps.${index}.meal`)}
                                                        disabled={!isAttending}
                                                        id={`meal-${index}-select`}
                                                    >
                                                        <option value=''>{isAttending ? 'Select meal...' : 'N/A'}</option>
                                                        <option value='Salmon'>Atlantic Salmon with Maple Soy Sauce</option>
                                                        <option value='Chicken'>Chicken Breast Stuffed with Tomatoes & Feta</option>
                                                        <option value='Vegan'>Grilled Halloumi & Mediterranean Vegetables (Vegetarian)</option>
                                                        <option value='Kids'>Chicken Fingers & Fries (Kids')</option>
                                                        <option value='None'>None (Infants')</option>
                                                    </select>
                                                    {errors.rsvps?.[index]?.meal && <p className={styles.contentFormFieldError}>{errors.rsvps[index].meal?.message}</p>}
                                                </div> 

                                                <div className={styles.contentFormField}>
                                                    <label className={styles.contentFormFieldLabel} htmlFor={`dietary-needs-${index}-input`}>Dietary Needs</label>
                                                    <textarea
                                                        {...register(`rsvps.${index}.dietaryNeeds`)}
                                                        placeholder={isAttending ? 'Allergies, etc.' : 'N/A'}
                                                        disabled={!isAttending}
                                                        id={`dietary-needs-${index}-input`}
                                                    />
                                                    {errors.rsvps?.[index]?.dietaryNeeds && <p className={styles.contentFormFieldError}>{errors.rsvps[index].dietaryNeeds?.message}</p>}
                                                </div>
                                            </> 
                                        )}
                                    </div>
                                );
                            })}
                        </>
                    )}
                    <Button 
                        label={'Submit'}
                        onClick={() => {'handled automatically by form'}}
                    />
                </form>
            }
        </Content>
    );
}