import { useRsvp } from '../../hooks/useRSVP';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RsvpData, rsvpDefaultValues, rsvpSchema, } from '../../helpers/rsvpSchema';
import { useEffect, useMemo, useState } from 'react';
import { rsvpArrivalTime, rsvpCountMap, rsvpDinnerMap, rsvpPlusOneMap } from '../../constants';
import { Content } from '../content';
import { Button } from '../button';

export const RsvpTab = () => {
    const { rsvpSubmitted, setRsvpSubmitted } = useRsvp();
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
        // TODO send email
        //setRsvpSubmitted(true);
        console.log(data);
    };


    return (
        <Content>
            <form onSubmit={handleSubmit(onSubmit) }>
                <div>
                    <div>
                        <label>RSVP Code</label>
                        <input
                            {...register('code')}
                            type='text'
                            placeholder='Enter code from invitation. Format AAA###'
                        />
                        {errors.code && <p>{errors.code.message}</p>}
                    </div>
                    {arrivalTime && (
                        <div>
                            <p>{`Please arrive at ${arrivalTime}`}</p>
                        </div>
                    )}
                    {showPlusOneForm && (
                        <div>
                            <input 
                                {...register('bringingPlusOne')}
                                type='checkbox'
                                id='bringing-plus-one-checkbox'
                            />
                            <label htmlFor='bringing-plus-one-checkbox'>I am bringing a plus one</label>
                        </div>
                    )}
                </div>
                {fields.length > 0 && (
                    <div>
                        <h3>Guest List</h3>
                        {errors.rsvps?.root && <p>{errors.rsvps.root.message}</p>}
                        
                        {fields.map((field, index) => {
                            const isAttending = watchedGuests?.[index]?.attending ?? true;

                            return (
                                <div key={`${field.id}_${index}`}>
                                    <div>
                                        <span>{`Guest ${index + 1}`}</span>
                                    </div>

                                    <div>
                                        <input 
                                            {...register(`rsvps.${index}.attending`)}
                                            type='checkbox'
                                            onChange={(e) => handleAttendingChange(e, index)}
                                        />
                                        <label>Will be attending</label>
                                    </div>

                                    <div>
                                        <label>Guest Name</label>
                                        <input
                                            {...register(`rsvps.${index}.name`)}
                                            type='text'
                                            placeholder={isAttending ? 'Full Name' : 'N/A'}
                                            disabled={!isAttending}
                                        />
                                        {errors.rsvps?.[index]?.name && <p>{errors.rsvps[index].name?.message}</p>}
                                    </div>

                                    {showDinnerFields && (
                                        <div>
                                            <div>
                                                <select 
                                                    {...register(`rsvps.${index}.meal`)}
                                                    disabled={!isAttending}
                                                >
                                                    <option value=''>{isAttending ? 'Select Meal' : 'N/A'}</option>
                                                    <option value='Meat1'>Meat 1 TBD</option>
                                                    <option value='Meat2'>Meat 2 TBD</option>
                                                    <option value='Vegan'>Vegan TBD</option>
                                                    <option value='Kids'>Kids (Chicken Fingers)</option>
                                                </select>
                                                {errors.rsvps?.[index]?.meal && <p>{errors.rsvps[index].meal?.message}</p>}
                                            </div> 

                                            <div>
                                                <label>Dietary Needs</label>
                                                <textarea
                                                    {...register(`rsvps.${index}.dietaryNeeds`)}
                                                    placeholder={isAttending ? 'Allergies , etc.' : 'N/A'}
                                                    disabled={!isAttending}
                                                />
                                            </div>
                                        </div> 
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
                <div>
                    <Button 
                        label={'Submit RSVP'}
                        onClick={() => {'hanlded automatically by form'}}
                    />
                </div>
            </form>
        </Content>
    );
}