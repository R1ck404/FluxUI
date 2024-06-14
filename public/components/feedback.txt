"use client"

import React, { useState } from 'react';
import classNames from 'classnames';
import Input from '../input/input';
import Button from '../button/button';
import { Separator } from '../seperator/separator';
import Textarea from '../textarea/textarea';

interface FeedbackProps {
    onSubmit: (feedback: string) => void;
    feedbackTypes?: {
        id: number;
        icon: string | React.ReactNode;
        label: string;
    }[];
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
}

const Feedback: React.FC<FeedbackProps> = ({ onSubmit, feedbackTypes, rounded = 'full', spacing = "xs" }) => {
    const [selected, setSelected] = useState<number | null>(null);
    const [feedbackText, setFeedbackText] = useState('');

    const icons = [
        { id: 1, icon: '😄', label: 'Super Happy' },
        { id: 2, icon: '😊', label: 'Happy' },
        { id: 3, icon: '😢', label: 'Sad' },
        { id: 4, icon: '😭', label: 'Cry' },
    ];

    const handleIconClick = (index: number) => {
        if (selected === index) {
            setSelected(null);
        } else {
            setSelected(index);
        }
    };

    const handleSubmit = () => {
        if (feedbackText.trim() !== '') {
            onSubmit(feedbackText);
            setSelected(null);
            setFeedbackText('');
        }
    };

    const mainContainerClasses = classNames(
        'flex flex-col items-center relative w-min h-fit bg-secondary p-1.5 border border-border transition-all transform duration-300 ease-in-out overflow-hidden',
        {
            'rounded-xl ': selected !== null,
            'rounded-none': selected === null && rounded === 'none',
            'rounded-sm': selected === null && rounded === 'sm',
            'rounded-md': selected === null && rounded === 'md',
            'rounded-lg': selected === null && rounded === 'lg',
            'rounded-xl': selected === null && rounded === 'xl',
            'rounded-3xl': selected === null && rounded === 'full',
        }
    );

    const feedbackContainerClasses = classNames(
        'flex flex-col transition-all transform duration-300 ease-in-out overflow-hidden w-full',
        {
            'invisible opacity-0 min-h-0 h-0 min-w-20': selected === null,
            'visible opacity-100 min-h-20 h-auto max-h-40 min-w-52 w-52 mt-1.5': selected !== null,
        }
    );

    const iconContainerClasses = classNames(
        'flex items-center w-fit',
        {
            'space-x-0': spacing === 'none',
            'space-x-0.5': spacing === 'xs',
            'space-x-1': spacing === 'sm',
            'space-x-2': spacing === 'md',
            'space-x-3': spacing === 'lg',
        }
    );

    return (
        <div className="flex items-center justify-center">
            <div className={mainContainerClasses}>
                <div className={iconContainerClasses}>
                    {!feedbackTypes ? icons.map((icon, index) => (
                        <button
                            key={icon.id}
                            onClick={() => handleIconClick(index)}
                            className={classNames(
                                'size-9 rounded-full hover:bg-background focus:outline-none transition',
                                {
                                    'bg-background': selected === index,
                                }
                            )}
                        >
                            {icon.icon}
                        </button>
                    )) : feedbackTypes.map((type, index) => {
                        if (typeof type.icon !== 'string') {
                            return (React.cloneElement((type as any)?.icon, {
                                key: type.id,
                                onClick: () => handleIconClick(index),
                                className: classNames(
                                    'text-nowrap cursor-pointer size-9 rounded-full hover:bg-background focus:outline-none transition  border border-transparent',
                                    {
                                        'border !border-border': selected === index,
                                    }
                                )
                            }))
                        }

                        return (
                            <button
                                key={type.id}
                                onClick={() => handleIconClick(index)}
                                className={classNames(
                                    'transition h-min w-fit text-nowrap rounded-full border border-transparent',
                                    {
                                        'border !border-border ': selected === index,
                                    }
                                )}
                            >
                                {type.icon}
                            </button>
                        )
                    })}
                </div>

                <div className={feedbackContainerClasses} style={{ maxHeight: selected !== null ? '40rem' : '0' }}>
                    <Textarea className='w-full' value={feedbackText} onChange={(e) => setFeedbackText(e.target.value)} placeholder="Feedback" />
                    <Separator className="my-2" />
                    <div className="flex items-end w-full bg-secondary">
                        <Button onClick={handleSubmit} className="ml-auto" color="dark/zinc">Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
